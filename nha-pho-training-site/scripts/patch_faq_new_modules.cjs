#!/usr/bin/env node
/**
 * patch_faq_new_modules.cjs
 * Adds FAQ entries for 5 new modules:
 *   quan_ly_thanh_vien, quan_ly_khach_cua_chuyen_vien,
 *   quan_ly_bao_cao_cua_chuyen_vien, gui_tin_nhan, tao_nhom_chat
 */
const fs = require('fs');
const path = require('path');

const FAQ_FILE = path.join(__dirname, '..', 'data', 'faq.json');
const faq = JSON.parse(fs.readFileSync(FAQ_FILE, 'utf8'));

// ─── quan_ly_thanh_vien ───────────────────────────────────────────────
faq.modules.quan_ly_thanh_vien = [
  {
    id: 'qltv001',
    kw: ['quản lý phòng', 'menu quản lý', 'tính năng quản lý', 'quản lý phòng ở đâu', 'quản lý phong'],
    a: 'Bấm avatar góc trên phải trang chủ → cuộn xuống menu tìm nhóm "Quản lý phòng". Tính năng này chỉ hiện với tài khoản Trưởng nhóm hoặc Quản lý phòng trở lên.',
    steps: [1],
  },
  {
    id: 'qltv002',
    kw: ['danh sách thành viên', 'xem thành viên', 'thành viên phòng', 'quản lý thành viên', 'thanh vien phong'],
    a: 'Vào Quản lý phòng → bấm "Quản lý thành viên". Danh sách hiện tất cả thành viên trong phòng bạn quản lý cùng tên, chức danh và trạng thái hoạt động.',
    steps: [2],
  },
  {
    id: 'qltv003',
    kw: ['lọc thành viên', 'tìm thành viên', 'lọc chức danh', 'lọc nhóm', 'filter thanh vien', 'chức danh'],
    a: 'Trong danh sách thành viên, bấm nút Lọc → chọn chức danh (Học viên / Chuyên viên / Trưởng nhóm) và/hoặc nhóm cụ thể → danh sách tự cập nhật. Bấm Xóa bộ lọc để về lại toàn bộ.',
    steps: [3],
  },
  {
    id: 'qltv004',
    kw: ['sửa tài khoản', 'sửa chức danh', 'chỉnh chức danh', 'đổi chức danh', 'giới hạn kho', 'gioi han kho'],
    a: 'Bấm ⋮ bên cạnh thành viên → chọn "Sửa tài khoản". Tại đây có thể đổi chức danh và đặt giới hạn số tin được đăng trong kho (để trống là không giới hạn).',
    steps: [4, 5],
  },
  {
    id: 'qltv005',
    kw: ['hết hạn', 'sắp hết hạn', 'tài khoản hết hạn', 'gia hạn', 'het han hop dong'],
    a: 'Thành viên sắp hết hạn hiển thị trạng thái riêng trong danh sách. Bấm ⋮ → Sửa tài khoản để cập nhật thông tin hợp đồng kịp thời, tránh gián đoạn hoạt động.',
    steps: [5],
  },
  {
    id: 'qltv006',
    kw: ['mở khóa', 'tài khoản bị khóa', 'mở tài khoản', 'kích hoạt lại', 'khóa tài khoản', 'khoa tai khoan'],
    a: 'Thành viên bị khóa không đăng nhập được app. Để mở lại: bấm ⋮ bên cạnh thành viên → chọn "Mở tài khoản" → xác nhận. Hiệu lực ngay, thành viên có thể đăng nhập lại liền.',
    steps: [6],
  },
];

// ─── quan_ly_khach_cua_chuyen_vien ────────────────────────────────────
faq.modules.quan_ly_khach_cua_chuyen_vien = [
  {
    id: 'qlkcv001',
    kw: ['quản lý khách của cv', 'ql khách chuyên viên', 'khách của chuyên viên', 'khach cua cv', 'vào ql khách'],
    a: 'Bấm avatar góc trên phải → menu Quản lý phòng → bấm "Quản lý khách của chuyên viên". Tính năng này dành cho Trưởng nhóm và Quản lý phòng để theo dõi danh sách khách của từng CV.',
    steps: [1, 2],
  },
  {
    id: 'qlkcv002',
    kw: ['xem khách từng cv', 'khách của từng chuyên viên', 'theo dõi khách', 'danh sách khách cv'],
    a: 'Sau khi vào "Quản lý khách của chuyên viên", danh sách hiện tất cả khách hàng theo từng CV trong phòng bạn quản lý. Mỗi thẻ khách ghi: tên, SĐT, trạng thái tiếp cận, CV phụ trách.',
    steps: [2],
  },
  {
    id: 'qlkcv003',
    kw: ['lọc khách', 'tìm khách cv', 'filter khach', 'lọc theo tiêu chí', 'tiêu chí lọc', 'lọc tỉnh thành'],
    a: 'Bấm nút Lọc → nhập tiêu chí (tên CV, tên khách, tỉnh/thành phố, trạng thái) → bấm Áp dụng. Có thể kết hợp nhiều tiêu chí cùng lúc. Bấm Xóa bộ lọc để về lại toàn bộ.',
    steps: [3, 4],
  },
  {
    id: 'qlkcv004',
    kw: ['chi tiết khách hàng', 'thông tin khách', 'lịch sử tư vấn', 'xem khách', 'icon xem', 'lich su tu van'],
    a: 'Bấm icon 👁 hoặc tên khách trong danh sách để mở chi tiết: tên, SĐT, nhu cầu BĐS, lịch sử tư vấn và ghi chú theo thời gian. Biết được khách đang ở giai đoạn nào trong quy trình.',
    steps: [5],
  },
];

// ─── quan_ly_bao_cao_cua_chuyen_vien ──────────────────────────────────
faq.modules.quan_ly_bao_cao_cua_chuyen_vien = [
  {
    id: 'qlbccv001',
    kw: ['quản lý báo cáo cv', 'ql báo cáo', 'báo cáo chuyên viên', 'bao cao cv', 'báo cáo dẫn khách'],
    a: 'Bấm avatar góc trên phải → menu Quản lý phòng → bấm "Quản lý báo cáo của CV". Tính năng này cho phép Trưởng nhóm/QL phòng xem tất cả báo cáo dẫn khách của chuyên viên.',
    steps: [1, 2],
  },
  {
    id: 'qlbccv002',
    kw: ['báo cáo dẫn khách là gì', 'nội dung báo cáo', 'báo cáo gồm gì', 'bao cao dan khach', 'thông tin báo cáo'],
    a: 'Báo cáo dẫn khách ghi lại từng buổi CV dẫn khách xem nhà: tên khách, CCCD, tin BĐS đã xem, phản hồi của khách và ghi chú của CV. Dùng để theo dõi chất lượng tư vấn và tiến độ deal.',
    steps: [3, 4],
  },
  {
    id: 'qlbccv003',
    kw: ['danh sách báo cáo', 'xem báo cáo cv', 'thứ tự báo cáo', 'tìm báo cáo'],
    a: 'Danh sách sắp xếp theo báo cáo mới nhất ở trên. Dùng ô tìm kiếm để tìm theo tên CV hoặc tên khách. Bấm vào dòng báo cáo để xem nội dung chi tiết.',
    steps: [3],
  },
  {
    id: 'qlbccv004',
    kw: ['sửa báo cáo cv', 'chỉnh sửa báo cáo', 'xóa báo cáo', 'chỉnh sửa được không'],
    a: 'Quản lý phòng chỉ có quyền xem báo cáo của CV, không chỉnh sửa được. Nếu báo cáo sai, chuyên viên cần tự chỉnh sửa trong app của họ.',
    steps: [4],
  },
];

// ─── gui_tin_nhan ─────────────────────────────────────────────────────
faq.modules.gui_tin_nhan = [
  {
    id: 'gtn001',
    kw: ['nhắn tin đầu chủ', 'chat từ tin đăng', 'icon chat tin đăng', 'nhắn tin từ tin đăng', 'gui tin tu tin dang'],
    a: 'Mở chi tiết tin đăng → tìm icon chat Nhà Phố ngay dưới tên Đầu chủ → bấm vào. Màn hình chat với Đầu chủ mở ra ngay, có kèm sẵn thẻ thông tin căn bạn đang xem.',
    steps: [1],
  },
  {
    id: 'gtn002',
    kw: ['thẻ thông tin căn', 'thẻ căn', 'link căn tự ghép', 'tại sao nhắn từ tin đăng', 'the thong tin can'],
    a: 'Khi nhắn tin từ tin đăng, thẻ thông tin căn (ảnh, địa chỉ, giá, diện tích) tự động ghép vào chat. Đầu chủ biết ngay bạn hỏi về căn nào mà không cần giải thích thêm.',
    steps: [2, 3],
  },
  {
    id: 'gtn003',
    kw: ['gửi tin nhắn khác gì', 'chat thường', 'ưu điểm nhắn từ tin đăng', 'link tự ghép', 'khac gi'],
    a: 'Nhắn từ tin đăng tự động đính kèm link căn và thẻ thông tin — tiết kiệm thời gian copy-paste và giúp Đầu chủ hiểu ngay ngữ cảnh. Chat thường không có tính năng này.',
    steps: [3],
  },
  {
    id: 'gtn004',
    kw: ['thu hồi tin nhắn', 'xóa tin nhắn', 'thu hoi', 'ghim tin nhắn', 'tương tác tin nhắn', 'giữ tin nhắn'],
    a: 'Giữ ngón tay lên tin nhắn để mở popup tương tác: Trả lời, Chia sẻ, Sao chép, Ghim, Xóa, Thu hồi. Thu hồi sẽ xóa tin khỏi chat của cả hai phía. Ghim giúp ghim tin quan trọng lên đầu chat.',
    steps: [4],
  },
  {
    id: 'gtn005',
    kw: ['chia sẻ tin nhắn', 'forward tin nhắn', 'gửi cho nhiều người', 'chia sẻ link căn', 'chia se tin'],
    a: 'Giữ tin nhắn → chọn Chia sẻ → chọn nhóm/người nhận (có thể chọn nhiều) → thêm ghi chú nếu cần → bấm gửi. Tin nhắn chuyển tiếp đến tất cả đích đã chọn cùng lúc.',
    steps: [5, 6, 7],
  },
  {
    id: 'gtn006',
    kw: ['chọn nhóm chia sẻ', 'đã chọn nhóm chưa', 'nhận biết đã chọn', 'nhom duoc chon', 'bold đậm'],
    a: 'Nhóm/người đã chọn hiển thị tên in đậm hoặc có dấu tích xanh. Bấm lại để bỏ chọn nếu chọn nhầm. Sau khi gửi, màn hình quay về chat — chia sẻ đã thành công.',
    steps: [6, 7],
  },
];

// ─── tao_nhom_chat ────────────────────────────────────────────────────
faq.modules.tao_nhom_chat = [
  {
    id: 'tnc001',
    kw: ['tạo nhóm chat', 'tao nhom', 'tạo nhóm ở đâu', 'nút tạo nhóm', 'bắt đầu tạo nhóm'],
    a: 'Vào Chat Nhà Phố → bấm tab "Nhóm chat" → bấm nút [Tạo nhóm] ở góc trên phải. Nhóm chat cần ít nhất 3 thành viên để tạo được.',
    steps: [1],
  },
  {
    id: 'tnc002',
    kw: ['tối thiểu bao nhiêu người', 'nhóm tối thiểu', 'số thành viên tối thiểu', 'can bao nhieu nguoi', 'ít nhất'],
    a: 'Nhóm chat cần ít nhất 3 thành viên. Không có giới hạn tối đa số thành viên — thêm bao nhiêu người tùy ý.',
    steps: [1, 2],
  },
  {
    id: 'tnc003',
    kw: ['thêm thành viên gần đây', 'chat gần đây', 'thêm người vào nhóm', 'tim kiem thanh vien', 'tìm theo sđt'],
    a: 'Có 2 cách thêm thành viên: (1) chọn từ danh sách chat gần đây — bấm tên người đã chat; (2) dùng ô tìm kiếm — nhập tên hoặc SĐT của thành viên Nhà Phố muốn thêm.',
    steps: [2, 3, 4],
  },
  {
    id: 'tnc004',
    kw: ['người ngoài công ty', 'ngoài hệ thống', 'không tìm thấy', 'không thấy trong tìm kiếm', 'nguoi ngoai'],
    a: 'Chỉ thêm được tài khoản đã có trong hệ thống Nhà Phố. Người chưa có tài khoản Nhà Phố không tìm thấy trong ô tìm kiếm và không thêm được vào nhóm.',
    steps: [3],
  },
  {
    id: 'tnc005',
    kw: ['bỏ người đã thêm', 'xóa thành viên nhầm', 'bỏ khỏi nhóm trước khi tạo', 'bo nguoi', 'avatar thành viên'],
    a: 'Trước khi bấm Tạo: hàng avatar phía trên hiển thị người đã chọn. Bấm vào avatar của người muốn bỏ → xác nhận để loại khỏi danh sách. Sau khi tạo nhóm, chỉ quản trị viên nhóm mới xóa thành viên được.',
    steps: [5],
  },
  {
    id: 'tnc006',
    kw: ['đặt tên nhóm', 'tên nhóm', 'đổi tên nhóm', 'ai đổi tên nhóm', 'ten nhom'],
    a: 'Nhập tên nhóm vào ô "Đặt tên nhóm" trước khi bấm Tạo. Tên nhóm có thể đổi sau khi đã tạo — chỉ quản trị viên nhóm mới có quyền đổi.',
    steps: [6],
  },
  {
    id: 'tnc007',
    kw: ['ảnh đại diện nhóm', 'avatar nhóm', 'ảnh nhóm bắt buộc', 'đổi ảnh nhóm', 'anh dai dien nhom'],
    a: 'Ảnh đại diện nhóm không bắt buộc — có thể bỏ qua, nhóm sẽ dùng avatar mặc định. Sau khi tạo nhóm, quản trị viên nhóm có thể đổi ảnh bất cứ lúc nào trong cài đặt nhóm.',
    steps: [7],
  },
  {
    id: 'tnc008',
    kw: ['sau khi tạo nhóm', 'thông báo tạo nhóm', 'nhóm tạo xong', 'thành viên nhận thông báo', 'sau khi tao'],
    a: 'Sau khi bấm Tạo, nhóm chat xuất hiện ngay trong danh sách Chat. Tất cả thành viên nhận thông báo được thêm vào nhóm và có thể nhắn tin ngay lập tức.',
    steps: [8],
  },
];

fs.writeFileSync(FAQ_FILE, JSON.stringify(faq, null, 2), 'utf8');
console.log('Done! faq.json updated.');

// Verify
const verify = JSON.parse(fs.readFileSync(FAQ_FILE, 'utf8'));
const ids = ['quan_ly_thanh_vien','quan_ly_khach_cua_chuyen_vien','quan_ly_bao_cao_cua_chuyen_vien','gui_tin_nhan','tao_nhom_chat'];
for (const id of ids) {
  console.log(id, ':', (verify.modules[id]||[]).length, 'FAQ entries');
}
console.log('Total module FAQs:', Object.values(verify.modules).flat().length);
console.log('Global FAQs:', (verify.global||[]).length);
