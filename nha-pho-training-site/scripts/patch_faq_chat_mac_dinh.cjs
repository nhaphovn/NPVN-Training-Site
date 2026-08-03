#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const FAQ_FILE = path.join(__dirname, '..', 'data', 'faq.json');
const faq = JSON.parse(fs.readFileSync(FAQ_FILE, 'utf8'));

faq.modules.chat_mac_dinh = [
  {
    id: 'cmd001',
    kw: ['nhom mac dinh', 'tab nhom mac dinh', 'chat mac dinh', 'nhom mac dinh phong', 'nhom mac dinh o dau'],
    a: 'Vao Chat Nha Pho -> bam tab "Nhom mac dinh". Day la cac nhom duoc he thong phan quyen tu dong theo phong, khoi va vai tro - moi nguoi chi thay nhom phu hop voi minh.',
  },
  {
    id: 'cmd001a',
    kw: ['nhóm mặc định', 'tab nhóm mặc định', 'chat mặc định', 'nhóm mặc định phòng'],
    a: 'Vào Chat Nhà Phố, bấm tab "Nhóm mặc định". Đây là các nhóm được hệ thống phân quyền tự động theo phòng, khối và vai trò — mỗi người chỉ thấy nhóm phù hợp với mình.',
    steps: [1],
  },
  {
    id: 'cmd002',
    kw: ['nhóm thông báo', 'icon loa', 'nhom thong bao', 'khong tat thong bao', 'tắt thông báo nhóm mặc định'],
    a: 'Nhóm có icon loa nhỏ ở góc ảnh đại diện là nhóm thông báo — chỉ admin được gửi. Nhóm thông báo không cho phép tắt Notification để không bỏ lỡ thông tin quan trọng.',
    steps: [2],
  },
  {
    id: 'cmd003',
    kw: ['nhóm trò chuyện mặc định', 'khac nhom thong bao', 'rời nhóm mặc định', 'roi nhom mac dinh', 'tho chuyen mac dinh'],
    a: 'Nhóm không có icon loa là nhóm trò chuyện — tất cả thành viên đều được chat. Thành viên được phân vào nhóm theo phân quyền, không tự thêm hoặc rời nhóm được.',
    steps: [3],
  },
  {
    id: 'cmd004',
    kw: ['nhắn tin nhóm mặc định', 'tag thành viên nhóm mặc định', 'mention nhom mac dinh', 'add nguoi nhom mac dinh', 'nhan tin nhom mac dinh'],
    a: 'Nhắn tin trong nhóm mặc định giống nhóm tự tạo: gõ vào ô nhập rồi bấm gửi. Tag đồng nghiệp bằng @ + tên. Không tự thêm người hoặc rời nhóm — hệ thống phân quyền quản lý.',
    steps: [4],
  },
  {
    id: 'cmd005',
    kw: ['admin nhóm mặc định', 'ai admin nhom mac dinh', 'doi ten nhom mac dinh', 'tinh nang bi khoa nhom mac dinh', 'quan ly nhom mac dinh'],
    a: 'Admin nhóm mặc định là HQ hoặc QL phòng — do hệ thống cấu hình. Nhóm mặc định không cho đổi tên, thay avatar hoặc thêm/rời tự do. Admin có thêm quyền khóa thành viên.',
    steps: [5, 6],
  },
  {
    id: 'cmd006',
    kw: ['khóa trả lời', 'tạm khóa trò chuyện', 'khoa tra loi', 'tam khoa tro chuyen', 'khóa thành viên nhóm mặc định'],
    a: 'Khóa trả lời: thành viên không gửi tin nhưng vẫn đọc được. Tạm khóa trò chuyện: không gửi và không xem được tin nhắn. Admin bấm vào tên thành viên rồi chọn loại khóa.',
    steps: [7],
  },
  {
    id: 'cmd007',
    kw: ['mở khóa nhóm mặc định', 'mo khoa nhom mac dinh', 'khôi phục chat nhóm mặc định', 'khoi phuc quyen chat nhom mac dinh'],
    a: 'Admin bấm vào thành viên đang bị khóa, chọn "Mở khóa trả lời" hoặc "Mở khóa trò chuyện". Hiệu lực ngay — thành viên không cần thoát rồi vào lại nhóm.',
    steps: [8],
  },
];

fs.writeFileSync(FAQ_FILE, JSON.stringify(faq, null, 2), 'utf8');
console.log('FAQ chat_mac_dinh:', faq.modules.chat_mac_dinh.length, 'entries');
