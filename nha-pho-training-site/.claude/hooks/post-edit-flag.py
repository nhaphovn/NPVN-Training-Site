#!/usr/bin/env python3
"""
post-edit-flag.py — Auto-flag content changes for QA + emit event
"""
import json
import sys
import os
from pathlib import Path
from datetime import datetime

def read_hook_input():
    try: return json.load(sys.stdin)
    except: return {}

def emit_event(event_type, actor, target, payload):
    """Append to logs/events.jsonl"""
    Path("logs").mkdir(exist_ok=True)
    ev = {
        "ts": datetime.utcnow().isoformat() + "Z",
        "type": event_type, "actor": actor, "target": target, "payload": payload,
    }
    with open("logs/events.jsonl", "a") as f:
        f.write(json.dumps(ev, ensure_ascii=False) + "\n")

def main():
    data = read_hook_input()
    tool_input = data.get("tool_input", {})
    file_path = tool_input.get("file_path", "") or tool_input.get("path", "")

    if not file_path: return 0

    # Track which files matter
    is_content = "modules.json" in file_path or "/kb/" in file_path.lower()
    is_agent = "/agents/" in file_path and file_path.endswith(".md")
    is_spec = "/specs/" in file_path or "/test-plans/" in file_path

    if not (is_content or is_agent or is_spec):
        return 0

    # Flag pending QA for content
    if is_content:
        flag = Path(".claude/.pending-qa.json")
        flag.parent.mkdir(parents=True, exist_ok=True)
        pending = {}
        if flag.exists():
            try: pending = json.loads(flag.read_text())
            except: pending = {}
        files = pending.setdefault("flagged_files", [])
        if file_path not in files:
            files.append(file_path)
        pending["lastFlaggedAt"] = datetime.utcnow().isoformat() + "Z"
        flag.write_text(json.dumps(pending, indent=2))

    # Emit event
    if is_content:
        emit_event("content.updated", "system", {"file": file_path}, {"flagged_for_qa": True})
    elif is_agent:
        emit_event("agent.updated", "system", {"file": file_path}, {})
    elif is_spec:
        emit_event("spec.updated", "system", {"file": file_path}, {})

    print(json.dumps({
        "decision": "approve",
        "reason": f"📝 Tracked: {file_path}. Event emitted." + (" Flagged for QA." if is_content else "")
    }))
    return 0

if __name__ == "__main__":
    sys.exit(main())
