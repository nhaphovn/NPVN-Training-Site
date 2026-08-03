#!/usr/bin/env node
/**
 * patch_guide_content.js
 * Writes guide, title, sub, suggestedQ for 5 WIP modules.
 * Run: node scripts/patch_guide_content.js
 */
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'data', 'modules.json');
const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

// ─── quan_ly_thanh_vien ────────────────────────────────────────────────
data.modules.quan_ly_thanh_vien.steps[0] = {
  ...data.modules.quan_ly_thanh_vien.steps[0],
  title: 'Bước 1 — Vào mục Quản lý phòng',
  sub: 'Bấm avatar để mở menu và chọn Quản lý phòng',
  guide: [
    { title: 'Mở menu cá nhân', body: 'Bấm avatar góc trên phải trang chủ để mở menu cá nhân.' },
    { title: 'Tìm mục Quản lý phòng', body: 'Cuộn trong menu tìm nhóm "Quản lý phòng" — chỉ hiện với tài khoản có quyền quản lý.' },
    { title: 'Bấm để mở', body: 'Chọn Quản lý phòng để xem danh sách đầy đủ tính năng quản lý phòng.' },
  ],
  suggestedQ: ['Menu Quản lý phòng ở đâu?', 'Tính năng Quản lý phòng dành cho ai?'],
};

data.modules.quan_ly_thanh_vien.steps[1] = {
  ...data.modules.quan_ly_thanh_vien.steps[1],
  title: 'Bước 2 — Mở Quản lý thành viên',
  sub: 'Bấm Quản lý thành viên để xem toàn bộ danh sách thành viên phòng',
  guide: [
    { title: 'Chọn Quản lý thành viên', body: 'Trong nhóm Quản lý phòng, bấm "Quản lý thành viên".' },
    { title: 'Xem danh sách', body: 'Hiển thị toàn bộ thành viên trong phòng bạn quản lý — tên, chức danh, trạng thái.' },
    { title: 'Thông tin nhanh', body: 'Mỗi thành viên hiện avatar, tên, vai trò và trạng thái hoạt động hiện tại.' },
  ],
  suggestedQ: ['Xem danh sách thành viên phòng ở đâu?', 'Không thấy mục Quản lý thành viên phải làm gì?'],
};

data.modules.quan_ly_thanh_vien.steps[2] = {
  ...data.modules.quan_ly_thanh_vien.steps[2],
  title: 'Bước 3 — Lọc thành viên',
  sub: 'Dùng bộ lọc để tìm thành viên theo chức danh hoặc nhóm',
  guide: [
    { title: 'Mở bộ lọc', body: 'Bấm nút Lọc ở góc trên màn hình danh sách thành viên.' },
    { title: 'Chọn tiêu chí', body: 'Chọn chức danh (Học viên / Chuyên viên / Trưởng nhóm) và/hoặc nhóm cụ thể.' },
    { title: 'Xem kết quả', body: 'Danh sách tự cập nhật theo bộ lọc — bấm Xóa bộ lọc để về lại toàn bộ.' },
  ],
  suggestedQ: ['Tìm thành viên theo chức danh như thế nào?', 'Lọc thành viên theo nhóm được không?'],
};

data.modules.quan_ly_thanh_vien.steps[3] = {
  ...data.modules.quan_ly_thanh_vien.steps[3],
  title: 'Bước 4 — Tùy chọn thành viên đang hợp tác',
  sub: 'Bấm nút ⋮ để xem các thao tác: xem, sửa tài khoản đang hợp tác',
  guide: [
    { title: 'Nút ba chấm ⋮', body: 'Mỗi thành viên trong danh sách có nút ⋮ ở bên phải — bấm để mở tùy chọn.' },
    { title: 'Thành viên đang hợp tác', body: 'Với thành viên trạng thái Đang hợp tác: menu hiện Xem tài khoản, Sửa tài khoản.' },
    { title: 'Sửa tài khoản', body: 'Chọn Sửa tài khoản để chỉnh chức danh, đặt giới hạn kho hoặc thay đổi thông tin khác.' },
  ],
  suggestedQ: ['Sửa chức danh thành viên bằng cách nào?', 'Giới hạn kho của thành viên là gì?'],
};

data.modules.quan_ly_thanh_vien.steps[4] = {
  ...data.modules.quan_ly_thanh_vien.steps[4],
  title: 'Bước 5 — Tùy chọn thành viên sắp hết hạn',
  sub: 'Bấm ⋮ trên thành viên sắp hết hạn để xem, sửa hoặc gia hạn tài khoản',
  guide: [
    { title: 'Thành viên sắp hết hạn', body: 'Thành viên sắp hết hạn hợp đồng hiển thị trạng thái khác trong danh sách.' },
    { title: 'Mở tùy chọn', body: 'Bấm ⋮ bên cạnh tên thành viên đó để xem menu: Xem tài khoản, Sửa tài khoản.' },
    { title: 'Xử lý kịp thời', body: 'Kiểm tra và cập nhật thông tin hợp đồng trước khi tài khoản hết hạn để tránh gián đoạn.' },
  ],
  suggestedQ: ['Tài khoản thành viên hết hạn thì sao?', 'Làm sao biết thành viên nào sắp hết hạn?'],
};

data.modules.quan_ly_thanh_vien.steps[5] = {
  ...data.modules.quan_ly_thanh_vien.steps[5],
  title: 'Bước 6 — Mở tài khoản bị khóa',
  sub: 'Bấm ⋮ trên thành viên đã khóa và chọn Mở tài khoản để kích hoạt lại',
  guide: [
    { title: 'Nhận biết tài khoản bị khóa', body: 'Thành viên bị khóa hiện trạng thái "Đã khóa" — không thể đăng nhập app.' },
    { title: 'Mở lại tài khoản', body: 'Bấm ⋮ bên cạnh thành viên → chọn "Mở tài khoản" → xác nhận hành động.' },
    { title: 'Hiệu lực ngay', body: 'Sau khi mở, thành viên có thể đăng nhập lại ngay và tiếp tục sử dụng app.' },
  ],
  suggestedQ: ['Mở khóa tài khoản thành viên bị khóa như thế nào?', 'Thành viên bị khóa còn dùng app được không?'],
};

// ─── quan_ly_khach_cua_chuyen_vien ────────────────────────────────────
data.modules.quan_ly_khach_cua_chuyen_vien.steps[0] = {
  ...data.modules.quan_ly_khach_cua_chuyen_vien.steps[0],
  title: 'Bước 1 — Vào Quản lý phòng',
  sub: 'Bấm avatar góc trên phải để mở menu và vào quản lý phòng nhóm',
  guide: [
    { title: 'Bấm avatar cá nhân', body: 'Từ trang chủ, bấm avatar góc trên phải để mở menu cá nhân.' },
    { title: 'Tìm nhóm Quản lý phòng', body: 'Cuộn xuống trong menu tìm nhóm tính năng "Quản lý phòng" — hiện với tài khoản quản lý.' },
    { title: 'Chọn tính năng', body: 'Bấm vào nhóm Quản lý phòng để xem danh sách tính năng.' },
  ],
  suggestedQ: ['QL khách của CV dành cho ai?', 'Vào QL khách của chuyên viên bằng cách nào?'],
};

data.modules.quan_ly_khach_cua_chuyen_vien.steps[1] = {
  ...data.modules.quan_ly_khach_cua_chuyen_vien.steps[1],
  title: 'Bước 2 — Chọn QL khách của CV',
  sub: 'Bấm Quản lý khách của chuyên viên để xem danh sách khách theo từng CV',
  guide: [
    { title: 'Tìm mục QL khách của CV', body: 'Trong menu Quản lý phòng, bấm "Quản lý khách của chuyên viên".' },
    { title: 'Danh sách khách theo CV', body: 'Màn hình hiện danh sách khách của từng chuyên viên trong phòng bạn quản lý.' },
    { title: 'Theo dõi tiến độ', body: 'Xem khách đang ở giai đoạn nào: mới tiếp cận, đang tư vấn, đã xem nhà.' },
  ],
  suggestedQ: ['Xem khách của từng chuyên viên ở đâu?', 'Quản lý khách của CV hiện bao nhiêu thông tin?'],
};

data.modules.quan_ly_khach_cua_chuyen_vien.steps[2] = {
  ...data.modules.quan_ly_khach_cua_chuyen_vien.steps[2],
  title: 'Bước 3 — Mở bộ lọc',
  sub: 'Bấm Lọc để nhập tiêu chí và lọc danh sách khách theo CV hoặc trạng thái',
  guide: [
    { title: 'Mở bộ lọc', body: 'Bấm nút Lọc ở góc trên danh sách để mở bộ tiêu chí tìm kiếm.' },
    { title: 'Nhập tiêu chí', body: 'Có thể lọc theo: tên chuyên viên, tên khách, tỉnh/thành phố, trạng thái tiếp cận.' },
    { title: 'Áp dụng', body: 'Điền tiêu chí xong bấm Áp dụng — danh sách cập nhật ngay theo bộ lọc.' },
  ],
  suggestedQ: ['Tìm khách của CV cụ thể như thế nào?', 'Có thể lọc khách theo tỉnh thành không?'],
};

data.modules.quan_ly_khach_cua_chuyen_vien.steps[3] = {
  ...data.modules.quan_ly_khach_cua_chuyen_vien.steps[3],
  title: 'Bước 4 — Chọn tiêu chí lọc',
  sub: 'Chọn các tiêu chí lọc như tỉnh/thành phố rồi bấm Áp dụng xem kết quả',
  guide: [
    { title: 'Chọn từng tiêu chí', body: 'Bấm vào từng ô để chọn: tỉnh/thành, chuyên viên, trạng thái khách.' },
    { title: 'Kết hợp tiêu chí', body: 'Có thể chọn nhiều tiêu chí cùng lúc để lọc chính xác hơn.' },
    { title: 'Xóa bộ lọc', body: 'Bấm Xóa bộ lọc hoặc Reset để quay về danh sách đầy đủ.' },
  ],
  suggestedQ: ['Lọc theo nhiều tiêu chí cùng lúc được không?', 'Kết quả lọc không đúng là sao?'],
};

data.modules.quan_ly_khach_cua_chuyen_vien.steps[4] = {
  ...data.modules.quan_ly_khach_cua_chuyen_vien.steps[4],
  title: 'Bước 5 — Xem chi tiết khách hàng',
  sub: 'Bấm icon xem để mở thông tin đầy đủ của khách hàng do CV phụ trách',
  guide: [
    { title: 'Bấm icon xem', body: 'Bấm icon 👁 hoặc tên khách trong danh sách để mở màn hình chi tiết.' },
    { title: 'Thông tin đầy đủ', body: 'Xem: tên, SĐT, nhu cầu BĐS, lịch sử tư vấn, chuyên viên đang phụ trách.' },
    { title: 'Theo dõi tiến độ', body: 'Lịch sử hoạt động theo thời gian — biết khách đã được tư vấn gì và lịch hẹn nào.' },
  ],
  suggestedQ: ['Thông tin chi tiết khách hàng hiện những gì?', 'Xem lịch sử tư vấn của khách như thế nào?'],
};

// ─── quan_ly_bao_cao_cua_chuyen_vien ──────────────────────────────────
data.modules.quan_ly_bao_cao_cua_chuyen_vien.steps[0] = {
  ...data.modules.quan_ly_bao_cao_cua_chuyen_vien.steps[0],
  title: 'Bước 1 — Vào Quản lý phòng',
  sub: 'Bấm avatar cá nhân để mở menu và chọn tính năng quản lý phòng nhóm',
  guide: [
    { title: 'Bấm avatar', body: 'Từ trang chủ bấm avatar cá nhân ở góc trên phải để mở menu.' },
    { title: 'Tìm mục Quản lý phòng', body: 'Cuộn trong menu tìm nhóm tính năng "Quản lý phòng".' },
    { title: 'Chọn QL báo cáo của CV', body: 'Bấm "Quản lý báo cáo của CV" trong danh sách tính năng quản lý phòng.' },
  ],
  suggestedQ: ['QL báo cáo của CV dành cho ai?', 'Báo cáo của CV là báo cáo gì?'],
};

data.modules.quan_ly_bao_cao_cua_chuyen_vien.steps[1] = {
  ...data.modules.quan_ly_bao_cao_cua_chuyen_vien.steps[1],
  title: 'Bước 2 — Danh sách báo cáo',
  sub: 'Xem danh sách tất cả báo cáo dẫn khách của chuyên viên trong phòng',
  guide: [
    { title: 'Màn hình báo cáo', body: 'Hiển thị danh sách báo cáo đã nộp từ các chuyên viên trong phòng bạn quản lý.' },
    { title: 'Thông tin mỗi báo cáo', body: 'Mỗi dòng ghi: tên CV, tên khách, ngày dẫn, trạng thái báo cáo.' },
    { title: 'Sắp xếp mới nhất', body: 'Danh sách sắp theo báo cáo gần nhất — báo cáo mới nhất ở trên cùng.' },
  ],
  suggestedQ: ['Xem báo cáo dẫn khách của CV ở đâu?', 'Báo cáo CV nộp gồm những thông tin gì?'],
};

data.modules.quan_ly_bao_cao_cua_chuyen_vien.steps[2] = {
  ...data.modules.quan_ly_bao_cao_cua_chuyen_vien.steps[2],
  title: 'Bước 3 — Xem toàn bộ báo cáo',
  sub: 'Cuộn qua danh sách để xem tất cả báo cáo dẫn khách của chuyên viên',
  guide: [
    { title: 'Cuộn xem thêm', body: 'Vuốt lên để tải thêm báo cáo — danh sách tải dần theo cuộn.' },
    { title: 'Đọc thông tin báo cáo', body: 'Mỗi dòng: tên CV, tên khách, bất động sản đã xem, ngày dẫn.' },
    { title: 'Tìm kiếm nhanh', body: 'Dùng ô tìm kiếm phía trên để tìm theo tên CV hoặc tên khách.' },
  ],
  suggestedQ: ['Tìm báo cáo của CV cụ thể như thế nào?', 'Danh sách báo cáo hiện theo thứ tự nào?'],
};

data.modules.quan_ly_bao_cao_cua_chuyen_vien.steps[3] = {
  ...data.modules.quan_ly_bao_cao_cua_chuyen_vien.steps[3],
  title: 'Bước 4 — Chi tiết báo cáo dẫn khách',
  sub: 'Bấm vào báo cáo để xem nội dung chi tiết buổi dẫn khách của chuyên viên',
  guide: [
    { title: 'Bấm vào báo cáo', body: 'Bấm vào dòng báo cáo trong danh sách để mở nội dung chi tiết.' },
    { title: 'Thông tin chi tiết', body: 'Ghi rõ: tên khách, CCCD, tin BĐS đã xem, phản hồi của khách, ghi chú CV.' },
    { title: 'Đánh giá chất lượng', body: 'Dựa vào ghi chú CV để đánh giá chất lượng tư vấn và theo dõi tiến độ deal.' },
  ],
  suggestedQ: ['Chi tiết báo cáo dẫn khách ghi những gì?', 'Tôi có thể chỉnh sửa báo cáo của CV không?'],
};

// ─── gui_tin_nhan ─────────────────────────────────────────────────────
data.modules.gui_tin_nhan.steps[0] = {
  ...data.modules.gui_tin_nhan.steps[0],
  title: 'Bước 1 — Bấm icon chat tại tin đăng',
  sub: 'Mở chi tiết tin đăng và bấm icon chat Nhà Phố ngay dưới tên đầu chủ',
  guide: [
    { title: 'Mở chi tiết tin đăng', body: 'Vào bất kỳ tin đăng BĐS bạn quan tâm trong Kho tài nguyên hoặc Kho bạn quan tâm.' },
    { title: 'Tìm icon chat', body: 'Ngay dưới tên Đầu chủ đăng tin có icon chat Nhà Phố — bấm vào đó.' },
    { title: 'Mở chat trực tiếp', body: 'Màn hình chat với Đầu chủ mở ra ngay — không cần tìm thủ công trong danh sách chat.' },
  ],
  suggestedQ: ['Nhắn tin cho đầu chủ từ tin đăng bằng cách nào?', 'Icon chat trong tin đăng nằm ở đâu?'],
};

data.modules.gui_tin_nhan.steps[1] = {
  ...data.modules.gui_tin_nhan.steps[1],
  title: 'Bước 2 — Thẻ thông tin căn tự động',
  sub: 'Thẻ thông tin căn được đính kèm sẵn để đầu chủ biết ngay bạn hỏi về căn nào',
  guide: [
    { title: 'Thẻ căn tự động ghép', body: 'Khi bấm chat từ tin đăng, thẻ thông tin căn tự động hiện sẵn trong khung chat.' },
    { title: 'Nội dung thẻ', body: 'Thẻ hiện đầy đủ: ảnh đại diện, địa chỉ, diện tích, giá, loại hình BĐS.' },
    { title: 'Đầu chủ hiểu ngay', body: 'Đầu chủ nhận tin nhắn biết ngay bạn đang hỏi về căn nào — không cần giải thích thêm.' },
  ],
  suggestedQ: ['Thẻ thông tin căn trong chat là gì?', 'Tại sao nên nhắn từ tin đăng thay vì chat thường?'],
};

data.modules.gui_tin_nhan.steps[2] = {
  ...data.modules.gui_tin_nhan.steps[2],
  title: 'Bước 3 — Gửi tin nhắn kèm link căn',
  sub: 'Nhập nội dung hỏi và gửi — link tin đăng tự động đính kèm trong tin nhắn',
  guide: [
    { title: 'Gõ nội dung hỏi', body: 'Nhập câu hỏi hoặc nội dung muốn trao đổi với Đầu chủ vào ô nhập tin.' },
    { title: 'Link căn tự đính kèm', body: 'Đường link tin đăng tự động ghép vào tin nhắn — không cần copy-paste thủ công.' },
    { title: 'Bấm Gửi', body: 'Bấm icon gửi — tin nhắn kèm link căn gửi đến Đầu chủ ngay lập tức.' },
  ],
  suggestedQ: ['Link tin đăng có tự ghép vào chat không?', 'Gửi tin từ tin đăng khác gì chat bình thường?'],
};

data.modules.gui_tin_nhan.steps[3] = {
  ...data.modules.gui_tin_nhan.steps[3],
  title: 'Bước 4 — Tương tác với tin nhắn',
  sub: 'Giữ ngón tay lên tin nhắn để mở menu trả lời, chia sẻ, ghim và các tùy chọn khác',
  guide: [
    { title: 'Giữ ngón tay lên tin nhắn', body: 'Nhấn giữ bất kỳ tin nhắn nào để mở popup tương tác nhanh.' },
    { title: 'Các tùy chọn có sẵn', body: 'Trả lời, Chia sẻ, Sao chép, Ghim, Xóa, Thu hồi — chọn đúng tùy chọn cần.' },
    { title: 'Chia sẻ nhiều tin cùng lúc', body: 'Chọn Chia sẻ → tích chọn nhiều tin nhắn → forward tất cả đến chat khác cùng lúc.' },
  ],
  suggestedQ: ['Thu hồi tin nhắn đã gửi như thế nào?', 'Ghim tin nhắn trong chat để làm gì?'],
};

data.modules.gui_tin_nhan.steps[4] = {
  ...data.modules.gui_tin_nhan.steps[4],
  title: 'Bước 5 — Chia sẻ tin nhắn',
  sub: 'Chọn Chia sẻ để forward tin nhắn hoặc link căn sang các chat, nhóm chat khác',
  guide: [
    { title: 'Bấm Chia sẻ', body: 'Trong popup tương tác, chọn "Chia sẻ" để vào màn hình chọn đích gửi.' },
    { title: 'Chọn đích nhận', body: 'Danh sách chat/nhóm hiện ra — bấm chọn người hoặc nhóm muốn chia sẻ tới.' },
    { title: 'Thêm ghi chú', body: 'Có thể thêm tin nhắn kèm theo trước khi bấm gửi đi.' },
  ],
  suggestedQ: ['Forward tin nhắn sang nhóm khác như thế nào?', 'Chia sẻ link căn cho nhiều người cùng lúc được không?'],
};

data.modules.gui_tin_nhan.steps[5] = {
  ...data.modules.gui_tin_nhan.steps[5],
  title: 'Bước 6 — Chọn nhóm nhận chia sẻ',
  sub: 'Tích chọn nhóm hoặc người nhận — nhóm được chọn hiển thị đậm hơn',
  guide: [
    { title: 'Chọn nhóm đích', body: 'Bấm vào tên nhóm hoặc cá nhân muốn chia sẻ tin — có thể chọn nhiều cùng lúc.' },
    { title: 'Nhận biết đã chọn', body: 'Nhóm/người đã chọn hiển thị tên in đậm hoặc có dấu tích xanh.' },
    { title: 'Bỏ chọn', body: 'Bấm lại vào tên đã chọn để bỏ chọn nếu chọn nhầm.' },
  ],
  suggestedQ: ['Làm sao biết đã chọn đúng nhóm để chia sẻ?', 'Có thể chia sẻ cho nhiều nhóm cùng lúc không?'],
};

data.modules.gui_tin_nhan.steps[6] = {
  ...data.modules.gui_tin_nhan.steps[6],
  title: 'Bước 7 — Gửi chia sẻ',
  sub: 'Bấm icon gửi để hoàn thành chia sẻ tin nhắn tới tất cả đích đã chọn',
  guide: [
    { title: 'Kiểm tra trước khi gửi', body: 'Xem lại danh sách đích nhận và nội dung kèm theo lần cuối.' },
    { title: 'Bấm icon gửi', body: 'Bấm icon gửi (mũi tên) — tin nhắn chuyển tiếp đến tất cả đích đã chọn cùng lúc.' },
    { title: 'Xác nhận thành công', body: 'Màn hình quay về chat — tin nhắn đã được chia sẻ thành công đến các đích đã chọn.' },
  ],
  suggestedQ: ['Gửi chia sẻ xong có biết thành công không?', 'Có thu hồi tin đã chia sẻ được không?'],
};

// ─── tao_nhom_chat ────────────────────────────────────────────────────
data.modules.tao_nhom_chat.steps[0] = {
  ...data.modules.tao_nhom_chat.steps[0],
  title: 'Bước 1 — Mở tính năng tạo nhóm',
  sub: 'Vào Chat Nhà Phố và bấm nút Tạo nhóm ở góc trên phải màn hình',
  guide: [
    { title: 'Vào màn hình Chat', body: 'Bấm icon Chat từ trang chủ để mở danh sách hội thoại.' },
    { title: 'Chuyển sang tab Nhóm', body: 'Bấm tab "Nhóm chat" ở trên cùng để xem danh sách các nhóm hiện có.' },
    { title: 'Bấm Tạo nhóm', body: 'Bấm nút [Tạo nhóm] ở góc trên phải màn hình để bắt đầu tạo nhóm mới.' },
  ],
  suggestedQ: ['Tạo nhóm chat ở đâu trong app?', 'Nhóm chat cần tối thiểu bao nhiêu người?'],
};

data.modules.tao_nhom_chat.steps[1] = {
  ...data.modules.tao_nhom_chat.steps[1],
  title: 'Bước 2 — Thêm thành viên gần đây',
  sub: 'Chọn nhanh từ danh sách người đã chat gần đây để thêm vào nhóm',
  guide: [
    { title: 'Danh sách chat gần đây', body: 'App hiển thị những người bạn đã chat gần đây để thêm nhanh mà không cần tìm kiếm.' },
    { title: 'Bấm chọn', body: 'Bấm tên từng người muốn thêm vào nhóm — avatar có dấu tích khi đã chọn.' },
    { title: 'Tối thiểu 3 người', body: 'Nhóm chat cần ít nhất 3 thành viên — thêm đủ người trước khi bấm Tạo.' },
  ],
  suggestedQ: ['Tạo nhóm chat cần tối thiểu bao nhiêu người?', 'Thêm thành viên chưa chat gần đây bằng cách nào?'],
};

data.modules.tao_nhom_chat.steps[2] = {
  ...data.modules.tao_nhom_chat.steps[2],
  title: 'Bước 3 — Tìm kiếm thành viên',
  sub: 'Nhập tên hoặc số điện thoại để tìm thành viên Nhà Phố thêm vào nhóm',
  guide: [
    { title: 'Bấm ô tìm kiếm', body: 'Bấm vào ô "Tìm kiếm" trên màn hình thêm thành viên.' },
    { title: 'Nhập tên hoặc SĐT', body: 'Gõ tên đồng nghiệp hoặc số điện thoại — tìm trong toàn bộ hệ thống Nhà Phố.' },
    { title: 'Chỉ trong hệ thống', body: 'Chỉ thêm được tài khoản đã có trong hệ thống Nhà Phố — người ngoài không tìm thấy.' },
  ],
  suggestedQ: ['Tìm đồng nghiệp bằng SĐT để thêm vào nhóm được không?', 'Thêm người ngoài công ty vào nhóm được không?'],
};

data.modules.tao_nhom_chat.steps[3] = {
  ...data.modules.tao_nhom_chat.steps[3],
  title: 'Bước 4 — Chọn từ kết quả tìm kiếm',
  sub: 'Bấm tên thành viên trong kết quả tìm kiếm để thêm vào nhóm',
  guide: [
    { title: 'Xem kết quả tìm', body: 'Danh sách thành viên Nhà Phố khớp với từ khóa hiện ra bên dưới ô tìm kiếm.' },
    { title: 'Bấm chọn thành viên', body: 'Bấm vào tên người muốn thêm — avatar có dấu tích khi đã được chọn.' },
    { title: 'Thêm nhiều người', body: 'Tiếp tục tìm và chọn thêm người khác — số thành viên đã chọn cập nhật ở trên.' },
  ],
  suggestedQ: ['Tìm theo tên không thấy thì thử SĐT có ra không?', 'Xem danh sách người đã chọn vào nhóm ở đâu?'],
};

data.modules.tao_nhom_chat.steps[4] = {
  ...data.modules.tao_nhom_chat.steps[4],
  title: 'Bước 5 — Xem thành viên đã chọn',
  sub: 'Kiểm tra hàng avatar để xem danh sách thành viên đã thêm vào nhóm',
  guide: [
    { title: 'Hàng avatar thành viên', body: 'Hàng avatar phía trên hiển thị tất cả người đã được chọn vào nhóm.' },
    { title: 'Bỏ thành viên nhầm', body: 'Bấm vào avatar của người muốn bỏ → xác nhận để bỏ khỏi danh sách.' },
    { title: 'Thêm tiếp nếu cần', body: 'Chưa đủ người? Tiếp tục tìm kiếm và chọn thêm trước khi tạo nhóm.' },
  ],
  suggestedQ: ['Làm sao bỏ người thêm nhầm vào nhóm?', 'Số thành viên tối đa của nhóm chat là bao nhiêu?'],
};

data.modules.tao_nhom_chat.steps[5] = {
  ...data.modules.tao_nhom_chat.steps[5],
  title: 'Bước 6 — Đặt tên nhóm',
  sub: 'Nhập tên nhóm rõ ràng để mọi thành viên dễ nhận ra và tìm kiếm',
  guide: [
    { title: 'Bấm vào ô tên nhóm', body: 'Bấm vào ô nhập tên nhóm — bàn phím mở ra để gõ.' },
    { title: 'Đặt tên có ý nghĩa', body: 'Tên phản ánh mục đích nhóm (vd: "Team Quận 3", "Dự án ABC", "P. Sale Hà Nội").' },
    { title: 'Có thể đổi sau', body: 'Tên nhóm có thể thay đổi sau khi tạo — chỉ quản trị viên nhóm mới đổi được.' },
  ],
  suggestedQ: ['Tên nhóm chat có thể đổi sau khi tạo không?', 'Ai có quyền đổi tên nhóm?'],
};

data.modules.tao_nhom_chat.steps[6] = {
  ...data.modules.tao_nhom_chat.steps[6],
  title: 'Bước 7 — Đặt ảnh đại diện nhóm',
  sub: 'Bấm icon máy ảnh để chọn ảnh làm avatar nhóm (tùy chọn, không bắt buộc)',
  guide: [
    { title: 'Bấm icon máy ảnh', body: 'Bấm icon camera bên cạnh tên nhóm để mở thư viện ảnh điện thoại.' },
    { title: 'Chọn ảnh', body: 'Chọn ảnh từ thư viện hoặc chụp ảnh mới làm avatar nhóm.' },
    { title: 'Không bắt buộc', body: 'Có thể bỏ qua bước này — nhóm không có ảnh sẽ dùng avatar mặc định.' },
  ],
  suggestedQ: ['Ảnh đại diện nhóm chat có bắt buộc không?', 'Đổi ảnh đại diện nhóm sau khi tạo được không?'],
};

data.modules.tao_nhom_chat.steps[7] = {
  ...data.modules.tao_nhom_chat.steps[7],
  title: 'Bước 8 — Hoàn thành tạo nhóm',
  sub: 'Bấm Tạo để hoàn thành — nhóm chat mới sẵn sàng sử dụng ngay lập tức',
  guide: [
    { title: 'Kiểm tra lần cuối', body: 'Xem lại tên nhóm, ảnh đại diện và danh sách thành viên trước khi tạo.' },
    { title: 'Bấm Tạo', body: 'Bấm nút "Tạo" — nhóm chat được tạo ngay lập tức.' },
    { title: 'Nhóm sẵn sàng', body: 'Tất cả thành viên nhận thông báo được thêm vào nhóm — nhóm xuất hiện trong danh sách Chat.' },
  ],
  suggestedQ: ['Sau khi tạo nhóm xong thì có gì xảy ra?', 'Thành viên có nhận thông báo khi được thêm vào nhóm không?'],
};

// ─── Fix static image path bug ────────────────────────────────────────
// quan_ly_bao_cao_cua_chuyen_vien b02 uses old local path — fix to blob path
if (data.modules.quan_ly_bao_cao_cua_chuyen_vien.images.b02 &&
    data.modules.quan_ly_bao_cao_cua_chuyen_vien.images.b02.startsWith('/images/')) {
  data.modules.quan_ly_bao_cao_cua_chuyen_vien.images.b02 =
    '/api/img?path=images/quan_ly_bao_cao_cua_chuyen_vien/b02.jpg';
  console.log('Fixed: quan_ly_bao_cao_cua_chuyen_vien.images.b02 → blob path');
}

// ─── Update metadata ──────────────────────────────────────────────────
data.lastUpdated = new Date().toISOString();

fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
console.log('Done! modules.json updated with guide content for 5 modules.');

// Verify
const verify = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
const ids = ['quan_ly_thanh_vien','quan_ly_khach_cua_chuyen_vien','quan_ly_bao_cao_cua_chuyen_vien','gui_tin_nhan','tao_nhom_chat'];
for (const id of ids) {
  const mod = verify.modules[id];
  const blank = (mod.steps||[]).filter(s => !s.guide || !s.guide.length).length;
  console.log(id, '| steps:', (mod.steps||[]).length, '| blank guide:', blank);
}
