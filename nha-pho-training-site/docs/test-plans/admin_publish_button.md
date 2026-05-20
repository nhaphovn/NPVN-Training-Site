# Test Plan: Admin Publish Button

**Feature:** Nút Publish trong admin (draft -> live)
**Spec:** docs/specs/admin_publish_button.md
**Gate:** 1 (plan written before coding) / Gate 2 (execution after FE self-test)
**Date:** 2026-05-20
**Author:** qa-reviewer
**Sprint:** 3

---

## Scope

In scope:
- Badge status hiển thị đúng (`DRAFT` cam / `LIVE` xanh) khi load module trong admin
- Nút Publish chỉ xuất hiện khi `status = "draft"`, ẩn khi `status = "live"`
- Happy path: click Publish -> confirm OK -> `STATE.data.modules[moduleId].status` đổi thành `"live"` -> `saveToGitHub()` duoc goi -> UI cap nhat badge + an nut
- Cancel path: click Publish -> confirm Cancel -> state khong thay doi, UI khong thay doi
- Regression: upload panel, edit step, nut "Luu len site" thu cong van hoat dong sau khi them Publish feature
- CSS tokens dung dung brand vars: draft `#F59E0B`, live `#00A651`

Out of scope:
- Rollback live -> draft (Sprint 4)
- Approval workflow / trang thai `"review"` (Sprint 4)
- Notification email/push khi publish (Sprint 4)
- `logs/events.jsonl` emit tu browser (spec xac nhan skip sprint nay, append thu cong)
- Training engine render (khong lien quan admin flow)
- Chatbot / KB evaluation

---

## Test Approach

| Loai kiem thu | Ap dung? | Ly do |
|---------------|----------|-------|
| Functional | Co | Luong chinh draft->live va cancel |
| State validation | Co | `STATE.data.modules[moduleId].status` phai dung gia tri |
| UI assertion | Co | Badge mau, nut hien/an, vi tri trong meta bar |
| Regression | Co | Cac feature hien co cua admin khong bi anh huong |
| Negative / boundary | Co | Confirm Cancel, load module da live |
| Accessibility | Khong | Ngoai scope sprint nay |
| Performance | Khong | Feature UI nhe, khong can budget |
| Mobile responsive | Han che | Admin dung tren desktop la chinh; kiem tra viewport thu nho don gian |
| Security | Han che | `saveToGitHub` da co ADMIN_TOKEN check; feature khong mo them surface moi |

---

## Test Cases Summary

| ID | Tieu de | Loai | Priority |
|----|---------|------|----------|
| PUB-001 | Hien thi badge DRAFT va nut Publish khi load module co status=draft | functional | P0 |
| PUB-002 | Hien thi badge LIVE, khong co nut Publish khi load module co status=live | functional | P0 |
| PUB-003 | Happy path: click Publish, confirm OK -> status doi thanh live, saveToGitHub duoc goi | functional | P0 |
| PUB-004 | Sau save thanh cong: badge doi thanh LIVE, nut Publish bien mat | functional | P0 |
| PUB-005 | Cancel flow: click Publish, confirm Cancel -> state va UI khong thay doi | negative | P0 |
| PUB-006 | saveToGitHub khong duoc goi neu nguoi dung bam Cancel | negative | P1 |
| PUB-007 | Badge mau dung: draft=cam #F59E0B, live=xanh #00A651 | functional | P1 |
| PUB-008 | Regression: upload panel van hoat dong sau khi them Publish feature | regression | P1 |
| PUB-009 | Regression: nut "Luu len site" thu cong (saveToGithub) van hoat dong doc lap | regression | P1 |
| PUB-010 | Regression: chinh sua step (edit step) van luu dung sau khi them Publish feature | regression | P1 |

---

## Pre-conditions

1. Admin site (`admin-x7q9.html`) dang chay tren localhost hoac staging URL Vercel.
2. `data/modules.json` co it nhat 1 module voi `"status": "draft"` va 1 module voi `"status": "live"`.
3. `admin-patch.js` da duoc load vao trang (kiem tra console `[admin-patch v3] Loaded`).
4. `saveToGitHub()` (hoac `saveToGithub()`) la function da ton tai va co the spy/mock duoc khi test.
5. Nguoi test co quyen truy cap admin (ADMIN_TOKEN hop le neu co cau hinh).

---

## Environment

| Thu | Gia tri |
|-----|---------|
| Browser | Chromium (Chrome / Edge) phien ban moi nhat |
| Viewport desktop | >= 1024px |
| OS | Windows 11 (moi truong phat trien chinh) |
| Node/Vercel | Khong can — admin-patch.js la client-side |
| Mock saveToGitHub | Dung trong PUB-003, PUB-005, PUB-006 de tranh commit that len GitHub |

---

## Pass Criteria (BLOCK neu khong dat)

1. 100% test cases P0 pass (PUB-001 den PUB-005).
2. 0 loi Critical hoac High severity.
3. Badge mau khop chinh xac brand tokens (sai mau = loi High).
4. `saveToGitHub()` duoc goi dung 1 lan sau confirm OK, khong duoc goi neu Cancel.
5. Khong co regression tren upload panel va nut Luu len site.
6. P1 cases dat >= 80% pass rate.

---

## Out of Scope (xac nhan lai)

- Luong review -> live (trang thai "review" chua implement)
- Rollback live -> draft
- Kiem tra emit event ra `logs/events.jsonl` tu browser (skip theo spec)
- Kiem thu tren mobile browser (admin chi dung desktop)
