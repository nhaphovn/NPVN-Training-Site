# Knowledge Base — App Nhà Phố Việt Nam

> Dùng bởi chatbot AI (api/chat.js) và Eval Specialist làm ground truth.
> PM cập nhật nội dung khi có thay đổi từ App.
> Last updated: 2026-05-20

---

## 1. Đăng tin BĐS

### 1.1 Quy trình tổng quát

Đăng tin BĐS trên App Nhà Phố gồm 11 bước:
1. Tìm nút Đăng tin trên màn hình trang chủ (hàng 1, vị trí 4 từ trái)
2. Nhân bản tin đăng (nếu có tin cũ muốn copy)
3. Chọn Loại hình & Đặc điểm BĐS
4. Nhập Vị trí & Địa chỉ (tỉnh → quận → phường → đường)
5. Nhập Địa chỉ chi tiết
6. Điền Thông số nhà (diện tích, số tầng, số phòng...)
7. Điền Hoa hồng & Loại hợp đồng
8. Viết Tiêu đề & Nội dung mô tả
9. Nhập Pháp lý & Serial sổ
10. Upload ảnh & File đính kèm
11. Hoàn tất & Đăng tin (chuyển sang trạng thái Chờ duyệt)

### 1.2 Địa chỉ chi tiết

**Nhà trong ngõ:**
- Cú pháp: `Ngõ [số] [Tên đường]`
- Ví dụ đúng: `Ngõ 107 Trần Khát Chân`
- KHÔNG nhập số nhà vào ô địa chỉ chi tiết — số nhà gây nhầm lẫn hệ thống
- Dropdown tự lọc theo thứ tự từ cấp trên xuống cấp dưới

**Dự án / Khu đô thị:**
- Nếu BĐS thuộc dự án, chọn từ dropdown dự án
- Để trống nếu không thuộc dự án nào

### 1.3 Thông số nhà

- Diện tích sổ ≠ diện tích thực tế: dùng dấu `/` để phân biệt (VD: `34/78` = sổ 34m², thực 78m²)
- Nhà cấp 4: nhập `c4` vào ô số tầng
- Đơn vị diện tích: m²

### 1.4 Hoa hồng & Hợp đồng

**Loại hợp đồng:**
- `ĐC1`: Độc quyền cấp 1
- `ĐC2`: Độc quyền cấp 2
- `ĐC1A`: Độc quyền cấp 1 có gia hạn

**Cầu đối tác:** chỉ áp dụng BĐS từ 20 tỷ trở lên

### 1.5 Trạng thái sau đăng tin

Sau khi bấm Đăng tin → trạng thái "Chờ duyệt". Kiểm duyệt trong 24h, nhận thông báo kết quả.

---

## 2. Lọc kho tài nguyên

> TODO: PM bổ sung nội dung cho module lọc kho

### 2.1 Các bộ lọc chính

- Loại hình BĐS
- Khu vực (tỉnh/quận/phường)
- Mức giá
- Diện tích
- Số phòng ngủ

### 2.2 Ẩn/hiện cột

- Có thể tùy chỉnh cột hiển thị trong danh sách
- Cài đặt được lưu cho lần sau

---

## 3. Bộ sưu tập

> TODO: PM bổ sung nội dung cho module bộ sưu tập

### 3.1 Tạo bộ sưu tập

- Bộ sưu tập lưu nhóm các tin BĐS liên quan
- Có thể đặt tên, thêm mô tả
- Chia sẻ được với đồng nghiệp

---

## 4. Lỗi thường gặp

| Lỗi | Nguyên nhân | Cách xử lý |
|-----|-------------|-------------|
| Không tìm thấy đường | Nhập sai tên đường | Thử tên viết tắt hoặc không dấu |
| Tin bị từ chối duyệt | Thiếu ảnh hoặc thông tin | Bổ sung theo yêu cầu trong thông báo |
| Không chọn được dự án | Dự án chưa có trong hệ thống | Liên hệ admin thêm dự án |

---

## 5. Glossary

| Thuật ngữ | Giải thích |
|-----------|-----------|
| ĐC1/ĐC2 | Loại hợp đồng độc quyền |
| Chờ duyệt | Trạng thái tin sau khi đăng, trước khi được duyệt |
| Cầu đối tác | Chia sẻ hoa hồng với môi giới khác |
| Nhân bản | Copy một tin đăng cũ để tạo tin mới |
| Serial sổ | Số seri trên giấy tờ pháp lý |
