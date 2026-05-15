#!/usr/bin/env python3
"""
nhapho_mcp.py — Custom MCP Server cho Nhà Phố Training Site
Tools: get_step, update_step, validate_module, list_todo_steps
Resources: kb://full, kb://module/{id}, modules://current

Chạy: python servers/nhapho_mcp.py
Yêu cầu: pip install mcp
"""

import json
import re
import sys
from pathlib import Path
from typing import Any

from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import (
    Resource,
    TextContent,
    Tool,
)

# ─── Paths ────────────────────────────────────────────────────────────────────
ROOT = Path(__file__).parent.parent
MODULES_JSON = ROOT / "data" / "modules.json"
KB_FILE = ROOT / "data" / "KB_NhaPho_FULL.md"  # hoặc project knowledge copy

# ─── Helpers ──────────────────────────────────────────────────────────────────

def load_modules() -> dict:
    if not MODULES_JSON.exists():
        return {}
    return json.loads(MODULES_JSON.read_text(encoding="utf-8"))


def save_modules(data: dict) -> None:
    MODULES_JSON.write_text(
        json.dumps(data, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


def count_words(text: str) -> int:
    """Đếm từ tiếng Việt (split by whitespace)."""
    return len(text.strip().split())


# ─── Validation checklist (từ SKILL.md / quy tắc) ────────────────────────────

def validate_step(step: dict, step_idx: int) -> list[str]:
    """Trả về list lỗi của một step. Rỗng = pass."""
    errors = []
    sid = step.get("id", step_idx + 1)

    # ttTitle ≤ 5 từ
    tt_title = step.get("ttTitle", "")
    if tt_title.startswith("TODO"):
        errors.append(f"Step {sid}: ttTitle còn TODO")
    elif count_words(tt_title) > 5:
        errors.append(f"Step {sid}: ttTitle '{tt_title}' vượt 5 từ ({count_words(tt_title)} từ)")

    # ttText ≤ 15 từ
    tt_text = step.get("ttText", "")
    if tt_text.startswith("TODO"):
        errors.append(f"Step {sid}: ttText còn TODO")
    elif count_words(tt_text) > 15:
        errors.append(f"Step {sid}: ttText vượt 15 từ ({count_words(tt_text)} từ)")

    # Không còn TODO trong bất kỳ trường nào
    for field, value in step.items():
        if isinstance(value, str) and value.startswith("TODO"):
            if field not in ("ttTitle", "ttText"):  # đã check riêng
                errors.append(f"Step {sid}: trường '{field}' còn TODO")

    # guide ≥ 2 items
    guide = step.get("guide", [])
    if len(guide) < 2:
        errors.append(f"Step {sid}: guide chỉ có {len(guide)} item (cần ≥ 2)")

    # hs tọa độ hợp lệ
    hs = step.get("hs", {})
    for key in ("x", "y", "w", "h"):
        val = hs.get(key)
        if val is None:
            errors.append(f"Step {sid}: hs.{key} bị thiếu")
        elif not isinstance(val, (int, float)) or val < 0:
            errors.append(f"Step {sid}: hs.{key} không hợp lệ ({val})")

    # scrollY = hs_y - 80 (minimum 0)
    hs_y = hs.get("y", 0)
    expected_scroll = max(0, hs_y - 80)
    actual_scroll = step.get("scrollY", -1)
    if abs(actual_scroll - expected_scroll) > 5:  # tolerance 5px
        errors.append(
            f"Step {sid}: scrollY={actual_scroll} nhưng nên là {expected_scroll} "
            f"(hs.y={hs_y} - 80)"
        )

    return errors


# ─── Server setup ─────────────────────────────────────────────────────────────

app = Server("nhapho-training")


# ── Resources ─────────────────────────────────────────────────────────────────

@app.list_resources()
async def list_resources() -> list[Resource]:
    data = load_modules()
    resources = [
        Resource(
            uri="modules://current",
            name="modules.json hiện tại",
            description="Toàn bộ data modules, steps, hotspots",
            mimeType="application/json",
        )
    ]

    # kb://full nếu file tồn tại
    if KB_FILE.exists():
        resources.append(Resource(
            uri="kb://full",
            name="Knowledge Base App Nhà Phố",
            description="KB đầy đủ từ PDF 504 trang + Excel test cases",
            mimeType="text/markdown",
        ))

    # kb://module/{id} cho từng module
    for module_id in data.get("modules", {}).keys():
        resources.append(Resource(
            uri=f"kb://module/{module_id}",
            name=f"KB — Module {module_id}",
            description=f"Knowledge base focused cho module {module_id}",
            mimeType="text/plain",
        ))

    return resources


@app.read_resource()
async def read_resource(uri: str) -> str:
    if uri == "modules://current":
        data = load_modules()
        return json.dumps(data, ensure_ascii=False, indent=2)

    if uri == "kb://full":
        if KB_FILE.exists():
            return KB_FILE.read_text(encoding="utf-8")
        return "KB file không tìm thấy tại " + str(KB_FILE)

    if uri.startswith("kb://module/"):
        module_id = uri.split("/")[-1]
        data = load_modules()
        module = data.get("modules", {}).get(module_id)
        if not module:
            return f"Module '{module_id}' không tồn tại"
        # Trả về summary module + steps names
        steps_summary = "\n".join(
            f"  Step {s['id']}: {s.get('name', 'TODO')} — {s.get('ttTitle', 'TODO')}"
            for s in module.get("steps", [])
        )
        return f"Module: {module.get('name', module_id)}\nRole: {module.get('role', '?')}\n\nSteps:\n{steps_summary}"

    return f"Resource không tồn tại: {uri}"


# ── Tools ─────────────────────────────────────────────────────────────────────

@app.list_tools()
async def list_tools() -> list[Tool]:
    return [
        Tool(
            name="get_step",
            description="Lấy data của một step trong module",
            inputSchema={
                "type": "object",
                "properties": {
                    "module_id": {"type": "string", "description": "VD: dang_tin, loc_kho, bo_suu_tap"},
                    "step_id": {"type": "integer", "description": "ID của step (1-based)"},
                },
                "required": ["module_id", "step_id"],
            },
        ),
        Tool(
            name="update_step",
            description="Cập nhật fields của một step. Chỉ truyền fields cần thay đổi.",
            inputSchema={
                "type": "object",
                "properties": {
                    "module_id": {"type": "string"},
                    "step_id": {"type": "integer"},
                    "fields": {
                        "type": "object",
                        "description": "Dict các field cần update. VD: {\"ttTitle\": \"Chọn loại hình\", \"ttText\": \"Nhấn để mở dropdown chọn loại\"}",
                    },
                },
                "required": ["module_id", "step_id", "fields"],
            },
        ),
        Tool(
            name="validate_module",
            description=(
                "Chạy validation checklist cho toàn bộ module. "
                "Kiểm tra: ttTitle ≤5 từ, ttText ≤15 từ, không còn TODO, guide ≥2 items, "
                "hs tọa độ hợp lệ, scrollY đúng công thức."
            ),
            inputSchema={
                "type": "object",
                "properties": {
                    "module_id": {"type": "string", "description": "VD: dang_tin"},
                },
                "required": ["module_id"],
            },
        ),
        Tool(
            name="list_todo_steps",
            description="Liệt kê tất cả steps còn trường TODO trong một module (hoặc tất cả modules).",
            inputSchema={
                "type": "object",
                "properties": {
                    "module_id": {
                        "type": "string",
                        "description": "ID module cụ thể. Bỏ trống = kiểm tra tất cả modules.",
                    },
                },
                "required": [],
            },
        ),
    ]


@app.call_tool()
async def call_tool(name: str, arguments: dict[str, Any]) -> list[TextContent]:

    # ── get_step ──────────────────────────────────────────────────────────────
    if name == "get_step":
        data = load_modules()
        module_id = arguments["module_id"]
        step_id = int(arguments["step_id"])

        module = data.get("modules", {}).get(module_id)
        if not module:
            return [TextContent(type="text", text=f"❌ Module '{module_id}' không tồn tại")]

        steps = module.get("steps", [])
        step = next((s for s in steps if s.get("id") == step_id), None)
        if not step:
            return [TextContent(type="text", text=f"❌ Step {step_id} không tìm thấy trong '{module_id}'")]

        return [TextContent(type="text", text=json.dumps(step, ensure_ascii=False, indent=2))]

    # ── update_step ───────────────────────────────────────────────────────────
    elif name == "update_step":
        data = load_modules()
        module_id = arguments["module_id"]
        step_id = int(arguments["step_id"])
        fields = arguments["fields"]

        module = data.get("modules", {}).get(module_id)
        if not module:
            return [TextContent(type="text", text=f"❌ Module '{module_id}' không tồn tại")]

        steps = module.get("steps", [])
        step = next((s for s in steps if s.get("id") == step_id), None)
        if not step:
            return [TextContent(type="text", text=f"❌ Step {step_id} không tìm thấy")]

        # Validate trước khi update
        warnings = []
        if "ttTitle" in fields and count_words(fields["ttTitle"]) > 5:
            warnings.append(f"⚠️  ttTitle '{fields['ttTitle']}' vượt 5 từ!")
        if "ttText" in fields and count_words(fields["ttText"]) > 15:
            warnings.append(f"⚠️  ttText vượt 15 từ!")

        # Apply update
        step.update(fields)
        save_modules(data)

        result = f"✅ Đã update step {step_id} trong '{module_id}'\nFields: {list(fields.keys())}"
        if warnings:
            result = "\n".join(warnings) + "\n" + result

        return [TextContent(type="text", text=result)]

    # ── validate_module ───────────────────────────────────────────────────────
    elif name == "validate_module":
        data = load_modules()
        module_id = arguments["module_id"]

        module = data.get("modules", {}).get(module_id)
        if not module:
            return [TextContent(type="text", text=f"❌ Module '{module_id}' không tồn tại")]

        steps = module.get("steps", [])
        all_errors = []
        for i, step in enumerate(steps):
            all_errors.extend(validate_step(step, i))

        if not all_errors:
            return [TextContent(
                type="text",
                text=f"✅ Module '{module_id}' PASS — {len(steps)} steps, không có lỗi",
            )]

        error_text = "\n".join(f"  • {e}" for e in all_errors)
        return [TextContent(
            type="text",
            text=f"❌ Module '{module_id}' có {len(all_errors)} lỗi:\n{error_text}",
        )]

    # ── list_todo_steps ───────────────────────────────────────────────────────
    elif name == "list_todo_steps":
        data = load_modules()
        target_id = arguments.get("module_id", "").strip()

        modules_to_check = (
            {target_id: data["modules"][target_id]}
            if target_id and target_id in data.get("modules", {})
            else data.get("modules", {})
        )

        if not modules_to_check:
            return [TextContent(type="text", text="Không tìm thấy module nào")]

        todo_lines = []
        for mid, module in modules_to_check.items():
            for step in module.get("steps", []):
                sid = step.get("id", "?")
                todo_fields = [
                    f"{field}='{value}'"
                    for field, value in step.items()
                    if isinstance(value, str) and value.startswith("TODO")
                ]
                if todo_fields:
                    todo_lines.append(f"  [{mid}] Step {sid}: {', '.join(todo_fields)}")

        if not todo_lines:
            scope = target_id or "tất cả modules"
            return [TextContent(type="text", text=f"✅ Không còn TODO nào trong {scope}")]

        return [TextContent(
            type="text",
            text=f"📋 Còn {len(todo_lines)} step có TODO:\n" + "\n".join(todo_lines),
        )]

    return [TextContent(type="text", text=f"❌ Tool không tồn tại: {name}")]


# ─── Entry point ──────────────────────────────────────────────────────────────

async def main():
    async with stdio_server() as (read_stream, write_stream):
        await app.run(read_stream, write_stream, app.create_initialization_options())


if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
