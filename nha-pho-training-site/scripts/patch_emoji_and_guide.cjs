#!/usr/bin/env node
/**
 * patch_emoji_and_guide.cjs
 * 1. Writes full guide (with emoji) for chat_mac_dinh (new module)
 * 2. Adds emoji to guide titles in 8 existing modules:
 *    quan_ly_thanh_vien, quan_ly_khach_cua_chuyen_vien,
 *    quan_ly_bao_cao_cua_chuyen_vien, gui_tin_nhan, tao_nhom_chat,
 *    tai_app_android, tai_app_ios
 */
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'data', 'modules.json');
const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
const m = data.modules;

// ═══════════════════════════════════════════════════════════════════════════
// 1. chat_mac_dinh — full guide + emoji
// ═══════════════════════════════════════════════════════════════════════════

m.chat_mac_dinh.steps[0] = {
  ...m.chat_mac_dinh.steps[0],
  title: 'Bước 1 — Mở tab Nhóm mặc định',
  sub: 'Vào Chat Nhà Phố và chuyển sang tab Nhóm mặc định để xem danh sách nhóm',
  guide: [
    { title: '💬 Vào Chat Nhà Phố', body: 'Bấm icon Chat từ trang chủ để mở danh sách hội thoại.' },
    { title: '📑 Chuyển sang tab Nhóm mặc định', body: 'Bấm tab "Nhóm mặc định" — hiện danh sách các nhóm được phân quyền tự động theo vai trò.' },
    { title: '🏢 Nhóm phân theo phòng và vai trò', body: 'Mỗi thành viên chỉ thấy các nhóm phù hợp với phòng, khối và chức danh của mình.' },
  ],
  suggestedQ: ['Tab Nhóm mặc định khác tab Nhóm chat thường thế nào?', 'Nhóm mặc định phòng ở đâu trong chat?'],
};

m.chat_mac_dinh.steps[1] = {
  ...m.chat_mac_dinh.steps[1],
  title: 'Bước 2 — Nhận biết nhóm thông báo',
  sub: 'Nhóm có icon loa nhỏ ở avatar là nhóm thông báo — chỉ đọc, không tắt thông báo được',
  guide: [
    { title: '🔔 Nhóm thông báo là gì', body: 'Nhóm có icon loa 🔊 nhỏ ở góc ảnh đại diện — dùng để phát thông báo chính thức từ công ty, phòng hoặc theo vai trò.' },
    { title: '📢 Nội dung thông báo', body: 'Chỉ admin nhóm được gửi — thông báo nội bộ, cập nhật chính sách, sự kiện từ HQ hoặc QL phòng.' },
    { title: '⚠️ Không tắt được thông báo', body: 'Nhóm thông báo không cho phép tắt Notification — để không bỏ lỡ thông tin quan trọng từ công ty.' },
  ],
  suggestedQ: ['Nhóm thông báo khác nhóm chat bình thường thế nào?', 'Tại sao không tắt được thông báo nhóm mặc định?'],
};

m.chat_mac_dinh.steps[2] = {
  ...m.chat_mac_dinh.steps[2],
  title: 'Bước 3 — Nhóm trò chuyện mặc định',
  sub: 'Nhóm không có icon loa là nhóm trò chuyện — thành viên được nhắn tin và giao lưu',
  guide: [
    { title: '💬 Nhóm trò chuyện mặc định', body: 'Nhóm không có icon loa ở avatar — thành viên đều có thể nhắn tin, trao đổi và giao lưu trong nhóm.' },
    { title: '👥 Phân quyền tương tự nhóm thông báo', body: 'Thành viên được phân vào nhóm theo phòng/khối/vai trò, nhưng tất cả đều được phép chat.' },
    { title: '🔒 Không tự rời nhóm được', body: 'Thành viên được tự động thêm theo phân quyền của hệ thống — không tự add thêm người hoặc rời nhóm.' },
  ],
  suggestedQ: ['Nhóm trò chuyện mặc định có icon gì?', 'Tôi có thể rời nhóm mặc định không?'],
};

m.chat_mac_dinh.steps[3] = {
  ...m.chat_mac_dinh.steps[3],
  title: 'Bước 4 — Nhắn tin trong nhóm mặc định',
  sub: 'Gõ tin, gửi ảnh, tag thành viên bằng @ — trải nghiệm như nhóm chat thường',
  guide: [
    { title: '✉️ Gửi tin nhắn', body: 'Bấm ô nhập tin phía dưới → gõ nội dung → bấm gửi — giống chat nhóm thông thường.' },
    { title: '@ Mention thành viên', body: 'Gõ @ rồi nhập tên thành viên để tag — người đó nhận thông báo riêng dù đang bận.' },
    { title: '⚠️ Không thể tự add/rời', body: 'Thành viên nhóm mặc định do hệ thống phân quyền tự động — không tự thêm người hoặc rời nhóm.' },
  ],
  suggestedQ: ['Nhắn tin trong nhóm mặc định bằng cách nào?', 'Tag đồng nghiệp trong nhóm mặc định dùng ký hiệu gì?'],
};

m.chat_mac_dinh.steps[4] = {
  ...m.chat_mac_dinh.steps[4],
  title: 'Bước 5 — Mở quản lý nhóm',
  sub: 'Bấm icon ⋮ để mở menu quản lý — nhóm mặc định có một số tính năng bị giới hạn',
  guide: [
    { title: '⚙️ Mở menu quản lý', body: 'Bấm icon ⋮ (3 chấm) ở góc trên phải màn hình nhóm chat để mở menu tùy chọn.' },
    { title: '🔒 Tính năng bị giới hạn', body: 'Nhóm mặc định không cho phép đổi tên, thay avatar hoặc thêm/rời nhóm tự do như nhóm tự tạo.' },
    { title: '👑 Quyền admin', body: 'Admin nhóm mặc định (HQ/QL phòng) có thêm tùy chọn quản lý thành viên và khóa chat.' },
  ],
  suggestedQ: ['Nhóm mặc định có thể đổi tên hay ảnh đại diện không?', 'Ai là admin của nhóm chat mặc định?'],
};

m.chat_mac_dinh.steps[5] = {
  ...m.chat_mac_dinh.steps[5],
  title: 'Bước 6 — Menu quản lý nhóm',
  sub: 'Xem các tùy chọn — một số thao tác chỉ dành riêng cho admin nhóm',
  guide: [
    { title: '📋 Tùy chọn quản lý', body: 'Menu hiện: thông tin nhóm, danh sách thành viên, cài đặt thông báo — tất cả thành viên thấy được.' },
    { title: '👑 Chỉ dành cho admin', body: 'Admin thấy thêm: Khóa thành viên, Tạm khóa trò chuyện, Thêm quản trị viên.' },
    { title: '👥 Xem danh sách thành viên', body: 'Bấm vào mục "Thành viên" để xem toàn bộ người trong nhóm và vai trò của họ.' },
  ],
  suggestedQ: ['Quản lý nhóm mặc định có những tùy chọn nào?', 'Thành viên thường thấy được gì trong menu quản lý nhóm?'],
};

m.chat_mac_dinh.steps[6] = {
  ...m.chat_mac_dinh.steps[6],
  title: 'Bước 7 — Khóa thành viên',
  sub: 'Admin chọn Khóa trả lời hoặc Tạm khóa trò chuyện để hạn chế quyền thành viên',
  guide: [
    { title: '🔇 Khóa trả lời', body: 'Thành viên bị Khóa trả lời vẫn đọc được tin nhắn nhóm nhưng không gửi tin được.' },
    { title: '⛔ Tạm khóa trò chuyện', body: 'Thành viên bị Tạm khóa không gửi tin và không xem được tin nhắn trong nhóm.' },
    { title: '👆 Cách thực hiện', body: 'Bấm vào tên thành viên trong danh sách → chọn "Khóa trả lời" hoặc "Tạm khóa trò chuyện".' },
  ],
  suggestedQ: ['Khóa trả lời khác Tạm khóa trò chuyện thế nào?', 'Admin khóa thành viên nhóm mặc định bằng cách nào?'],
};

m.chat_mac_dinh.steps[7] = {
  ...m.chat_mac_dinh.steps[7],
  title: 'Bước 8 — Mở khóa thành viên',
  sub: 'Admin chọn Mở khóa để phục hồi quyền gửi tin hoặc xem tin nhắn cho thành viên',
  guide: [
    { title: '🔓 Mở khóa trả lời', body: 'Bấm vào thành viên đang bị khóa → chọn "Mở khóa trả lời" — thành viên gửi tin được ngay.' },
    { title: '🔓 Mở khóa trò chuyện', body: 'Chọn "Mở khóa trò chuyện" — thành viên khôi phục quyền xem và gửi tin trong nhóm.' },
    { title: '✅ Hiệu lực ngay', body: 'Mở khóa có hiệu lực ngay lập tức — thành viên không cần thoát rồi vào lại nhóm.' },
  ],
  suggestedQ: ['Mở khóa thành viên trong nhóm mặc định bằng cách nào?', 'Sau khi mở khóa thành viên có nhận thông báo không?'],
};

// ═══════════════════════════════════════════════════════════════════════════
// 2. Add emoji to guide titles in 8 existing modules
// ═══════════════════════════════════════════════════════════════════════════

// Helper — apply emoji map to steps
function applyEmoji(steps, emojiMap) {
  // emojiMap: { stepIdx: { guideIdx: 'emoji ' } }
  for (const [si, gMap] of Object.entries(emojiMap)) {
    const step = steps[+si];
    if (!step || !step.guide) continue;
    for (const [gi, emoji] of Object.entries(gMap)) {
      const g = step.guide[+gi];
      if (g && !g.title.startsWith(emoji)) g.title = emoji + g.title;
    }
  }
}

// ── tai_app_android ──────────────────────────────────────────────────
applyEmoji(m.tai_app_android.steps, {
  0: { 0: '📲 ', 1: '🔍 ' },
  1: { 0: '✅ ', 1: '👆 ' },
  2: { 0: '⬇️ ', 1: '⏳ ' },
  3: { 0: '🚀 ', 1: '🔑 ' },
});

// ── tai_app_ios ──────────────────────────────────────────────────────
applyEmoji(m.tai_app_ios.steps, {
  0: { 0: '📲 ', 1: '🔍 ' },
  1: { 0: '✅ ', 1: '👆 ' },
  2: { 0: '⬇️ ', 1: '🔐 ' },
  3: { 0: '🌐 ', 1: '📲 ' },
  4: { 0: '🚀 ', 1: '🔑 ' },
});

// ── quan_ly_thanh_vien ───────────────────────────────────────────────
applyEmoji(m.quan_ly_thanh_vien.steps, {
  0: { 0: '👤 ', 1: '🔍 ', 2: '👆 ' },
  1: { 0: '👥 ', 1: '📋 ', 2: 'ℹ️ ' },
  2: { 0: '🔍 ', 1: '✅ ', 2: '🔄 ' },
  3: { 0: '⋮ ', 1: '🤝 ', 2: '✏️ ' },
  4: { 0: '⚠️ ', 1: '⋮ ', 2: '⏰ ' },
  5: { 0: '🔒 ', 1: '🔓 ', 2: '✅ ' },
});

// ── quan_ly_khach_cua_chuyen_vien ────────────────────────────────────
applyEmoji(m.quan_ly_khach_cua_chuyen_vien.steps, {
  0: { 0: '👤 ', 1: '🔍 ', 2: '👆 ' },
  1: { 0: '📋 ', 1: '👥 ', 2: '📊 ' },
  2: { 0: '🔍 ', 1: '✍️ ', 2: '✅ ' },
  3: { 0: '✅ ', 1: '🔢 ', 2: '🔄 ' },
  4: { 0: '👁️ ', 1: '📋 ', 2: '📊 ' },
});

// ── quan_ly_bao_cao_cua_chuyen_vien ──────────────────────────────────
applyEmoji(m.quan_ly_bao_cao_cua_chuyen_vien.steps, {
  0: { 0: '👤 ', 1: '🔍 ', 2: '📊 ' },
  1: { 0: '📊 ', 1: '📋 ', 2: '⬆️ ' },
  2: { 0: '⬇️ ', 1: '📋 ', 2: '🔍 ' },
  3: { 0: '👆 ', 1: '📋 ', 2: '🎯 ' },
});

// ── gui_tin_nhan ─────────────────────────────────────────────────────
applyEmoji(m.gui_tin_nhan.steps, {
  0: { 0: '📱 ', 1: '💬 ', 2: '⚡ ' },
  1: { 0: '🔗 ', 1: '🏠 ', 2: '💡 ' },
  2: { 0: '✏️ ', 1: '🔗 ', 2: '📤 ' },
  3: { 0: '👆 ', 1: '⚙️ ', 2: '📤 ' },
  4: { 0: '📤 ', 1: '🎯 ', 2: '✏️ ' },
  5: { 0: '🎯 ', 1: '✅ ', 2: '↩️ ' },
  6: { 0: '✅ ', 1: '📤 ', 2: '✅ ' },
});

// ── tao_nhom_chat ────────────────────────────────────────────────────
applyEmoji(m.tao_nhom_chat.steps, {
  0: { 0: '💬 ', 1: '📑 ', 2: '➕ ' },
  1: { 0: '📋 ', 1: '✅ ', 2: '👥 ' },
  2: { 0: '🔍 ', 1: '✍️ ', 2: 'ℹ️ ' },
  3: { 0: '📋 ', 1: '✅ ', 2: '➕ ' },
  4: { 0: '👥 ', 1: '✏️ ', 2: '➕ ' },
  5: { 0: '✏️ ', 1: '💡 ', 2: '🔄 ' },
  6: { 0: '📸 ', 1: '🖼️ ', 2: 'ℹ️ ' },
  7: { 0: '✅ ', 1: '🚀 ', 2: '🎉 ' },
});

// ─── Update metadata ──────────────────────────────────────────────────────
data.lastUpdated = new Date().toISOString();
fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
console.log('Done! modules.json updated.');

// Verify
const verify = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
const check = ['chat_mac_dinh','tai_app_android','tai_app_ios',
  'quan_ly_thanh_vien','quan_ly_khach_cua_chuyen_vien',
  'quan_ly_bao_cao_cua_chuyen_vien','gui_tin_nhan','tao_nhom_chat'];

for (const id of check) {
  const steps = verify.modules[id].steps || [];
  const blank = steps.filter(s => !s.guide || !s.guide.length).length;
  const hasEmoji = steps.every(s => (s.guide||[]).every(g => /\p{Emoji}/u.test(g.title)));
  console.log(id, '| blank:', blank, '| all have emoji:', hasEmoji);
}
