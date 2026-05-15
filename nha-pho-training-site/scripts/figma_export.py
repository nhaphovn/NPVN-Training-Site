#!/usr/bin/env python3
"""
figma_export.py — Auto-export Figma frames → PNG đặt tên đúng convention

Usage:
    python scripts/figma_export.py \\
        --file  <FIGMA_FILE_KEY>  \\
        --page  <PAGE_NAME>       \\
        --module <MODULE_ID>      \\
        --out   images/<module>/  \\
        [--token <FIGMA_TOKEN>]   \\
        [--quality 85]            \\
        [--dry-run]

Ví dụ:
    python scripts/figma_export.py \\
        --file AbCdEfGhIjKl \\
        --page "Quan ly khach" \\
        --module quan_ly_khach \\
        --out images/quan_ly_khach/

Đặt biến môi trường để không cần --token mỗi lần:
    export FIGMA_TOKEN=figd_xxxxxxxxxxxx

Output naming convention: {module}_b{NN}_{state}.jpg
    Frame "01_home"       → quan_ly_khach_b01_home.jpg
    Frame "02_xem_khach"  → quan_ly_khach_b02_xem_khach.jpg
    Frame "03_loc_open"   → quan_ly_khach_b03_loc_open.jpg

Yêu cầu: pip install requests Pillow
"""

import argparse
import io
import os
import re
import sys
import time
from pathlib import Path

import requests
from PIL import Image

# ─── Constants ────────────────────────────────────────────────────────────────
FIGMA_API    = "https://api.figma.com/v1"
TARGET_WIDTH = 390       # px chuẩn hotspot space
JPEG_QUALITY = 85        # default
RATE_SLEEP   = 0.3       # giây giữa requests


# ─── Figma API ────────────────────────────────────────────────────────────────

def get_headers(token: str) -> dict:
    return {"X-Figma-Token": token}


def get_file_pages(file_key: str, token: str) -> dict:
    url = f"{FIGMA_API}/files/{file_key}?depth=2"
    r = requests.get(url, headers=get_headers(token), timeout=30)
    r.raise_for_status()
    return r.json()


def find_page_frames(doc: dict, page_name: str) -> list:
    pages = doc.get("document", {}).get("children", [])
    target = next(
        (p for p in pages if p.get("name", "").lower() == page_name.lower()),
        None,
    )
    if not target:
        available = [p.get("name") for p in pages]
        raise ValueError(f"Page '{page_name}' không tìm thấy.\nCó sẵn: {available}")

    return [
        {"id": n["id"], "name": n["name"]}
        for n in target.get("children", [])
        if n.get("type") in ("FRAME", "COMPONENT", "COMPONENT_SET")
    ]


def get_image_urls(file_key: str, node_ids: list, token: str) -> dict:
    """Batch 50 nodes/request."""
    result = {}
    for i in range(0, len(node_ids), 50):
        batch = node_ids[i : i + 50]
        url = (
            f"{FIGMA_API}/images/{file_key}"
            f"?ids={','.join(batch)}&format=png&scale=1"
        )
        r = requests.get(url, headers=get_headers(token), timeout=30)
        r.raise_for_status()
        result.update(r.json().get("images", {}))
        time.sleep(RATE_SLEEP)
    return result


# ─── Naming ───────────────────────────────────────────────────────────────────

def to_filename(module_id: str, frame_name: str) -> str:
    """
    "1 home"       → {module}_b01_home.jpg
    "02_xem khach" → {module}_b02_xem_khach.jpg
    "loc_open"     → {module}_loc_open.jpg
    """
    name = re.sub(r"[\s\-]+", "_", frame_name.strip().lower())
    name = re.sub(r"_+", "_", name).strip("_")

    m = re.match(r"^(\d+)_?(.*)", name)
    if m:
        num  = int(m.group(1))
        rest = m.group(2).strip("_")
        suffix = f"_b{num:02d}_{rest}" if rest else f"_b{num:02d}"
    else:
        suffix = f"_{name}"

    return f"{module_id}{suffix}.jpg"


# ─── Image processing ────────────────────────────────────────────────────────

def download_resize_save(url: str, out_path: Path, width: int, quality: int) -> int:
    """Download → resize → JPEG. Returns file size KB."""
    r = requests.get(url, timeout=60)
    r.raise_for_status()

    img = Image.open(io.BytesIO(r.content)).convert("RGB")
    if img.width != width:
        new_h = int(img.height * width / img.width)
        img = img.resize((width, new_h), Image.LANCZOS)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(str(out_path), "JPEG", quality=quality, optimize=True)
    return out_path.stat().st_size // 1024


# ─── Main ────────────────────────────────────────────────────────────────────

def run(file_key, page_name, module_id, out_dir, token, quality, dry_run):
    print(f"📂 File: {file_key} | Page: {page_name} | Module: {module_id}")
    print(f"📁 Output: {out_dir}\n")

    print("⏳ Lấy document tree...")
    doc    = get_file_pages(file_key, token)
    frames = find_page_frames(doc, page_name)
    print(f"✅ {len(frames)} frames\n")

    print("📋 Mapping:")
    mappings = {}
    for f in frames:
        fn = to_filename(module_id, f["name"])
        mappings[f["id"]] = {"name": f["name"], "filename": fn}
        print(f"   {f['name']:<35} → {fn}")

    if dry_run:
        print("\n[DRY RUN] Xong — không download")
        return

    print("\n⏳ Lấy image URLs...")
    urls    = get_image_urls(file_key, list(mappings.keys()), token)
    ok, err = 0, 0

    for node_id, meta in mappings.items():
        url = urls.get(node_id)
        if not url:
            print(f"   ⚠️  Không có URL: {meta['name']}")
            err += 1
            continue

        print(f"   ⬇️  {meta['filename']} ...", end=" ", flush=True)
        try:
            kb = download_resize_save(url, out_dir / meta["filename"], TARGET_WIDTH, quality)
            print(f"✅ {kb}KB")
            ok += 1
        except Exception as e:
            print(f"❌ {e}")
            err += 1
        time.sleep(RATE_SLEEP)

    print(f"\n{'='*50}")
    print(f"✅ {ok}/{len(frames)} thành công" + (f"  |  ❌ {err} lỗi" if err else ""))
    print(f"\n💡 Tiếp theo:")
    print(f"   1. Mở pm_input_toolkit_v3.html → upload ảnh → vẽ hotspot")
    print(f"   2. Export JSON → paste vào data/modules.json")


# ─── CLI ─────────────────────────────────────────────────────────────────────

def main():
    p = argparse.ArgumentParser(description="Export Figma → JPEG theo convention Nhà Phố")
    p.add_argument("--file",    required=True)
    p.add_argument("--page",    required=True)
    p.add_argument("--module",  required=True)
    p.add_argument("--out",     required=True, type=Path)
    p.add_argument("--token",   default=os.environ.get("FIGMA_TOKEN", ""))
    p.add_argument("--quality", type=int, default=JPEG_QUALITY)
    p.add_argument("--dry-run", action="store_true")
    args = p.parse_args()

    if not args.token:
        print("❌ Cần Figma token: --token hoặc export FIGMA_TOKEN=figd_...")
        sys.exit(1)

    try:
        run(args.file, args.page, args.module, args.out,
            args.token, args.quality, args.dry_run)
    except (ValueError, requests.HTTPError) as e:
        print(f"❌ {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
