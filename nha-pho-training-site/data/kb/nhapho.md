# Knowledge Base — App Nhà Phố Việt Nam

> Tổng hợp từ PRD + 9 file SRS (Mobile App & Website khonhapho.com).
> Dùng bởi chatbot AI (api/chat.js) và Eval Specialist làm ground truth.
> PM cập nhật khi có thay đổi từ App.
> Last updated: 2026-06-05 | Source: NPVN doc (10 files)

---

## 1. TỔNG QUAN HỆ SINH THÁI NHÀPHỐ VIỆT NAM

### 1.1 Giới thiệu

**Nhà Phố Việt Nam (NPVN)** là công ty môi giới bất động sản vận hành song song hai nền tảng:

| Nền tảng | URL / App | Mục đích chính |
|----------|-----------|----------------|
| **App Nhà Phố** | Mobile (iOS / Android) | Công cụ vận hành hàng ngày của nhân viên & môi giới |
| **Khonhapho.com** | Website | Quản trị nội bộ, HQ admin, báo cáo, đào tạo |

Training site này tập trung hướng dẫn sử dụng **App Nhà Phố** (mobile).

### 1.2 Quy trình nghiệp vụ cốt lõi

```
Ký nhà → Đăng kho → Lọc → Đặt lịch → Dẫn khách → Báo cáo → Chốt
```

1. **Ký nhà** — Đầu chủ (ĐC) ký hợp đồng ĐC1/ĐC2/ĐC1A với chủ nhà
2. **Đăng kho** — ĐC đăng tin BĐS lên hệ thống (11 bước), chờ duyệt
3. **Lọc** — Chuyên viên (CV) lọc Kho tài nguyên tìm BĐS phù hợp khách
4. **Đặt lịch** — CV đặt lịch xem nhà, ĐC xác nhận/từ chối
5. **Dẫn khách** — CV dẫn khách đi xem
6. **Báo cáo** — CV báo cáo kết quả dẫn khách qua App
7. **Chốt** — Thương lượng, ký hợp đồng mua bán, chia hoa hồng

---

## 2. VAI TRÒ & PHÂN QUYỀN

### 2.1 Danh sách chức danh

| Chức danh | Ký hiệu | Mô tả |
|-----------|---------|-------|
| Học viên | HV | Thành viên mới, đang đào tạo |
| Chuyên viên | CV | Môi giới đã được duyệt, hoạt động chính thức |
| Đầu chủ | ĐC | Người ký hợp đồng trực tiếp với chủ nhà, quản lý tin BĐS |
| Trưởng nhóm | TrNhóm | Quản lý nhóm nhỏ |
| Phó phòng | PP | Hỗ trợ trưởng phòng |
| Trưởng phòng | TP | Quản lý toàn phòng, duyệt nhân sự |
| Giám đốc khu vực | GĐKV | Quản lý nhiều chi nhánh trong khu vực |
| Giám đốc | GĐ | Quản lý toàn chi nhánh lớn |
| Tổng giám đốc | TGĐ | Điều hành toàn công ty |
| Thư ký | TK | Hỗ trợ hành chính, đăng bài thư viện |
| Ban đào tạo | — | Quản lý chương trình đào tạo, lịch học |
| Ban thanh tra | — | Kiểm tra chất lượng, xử lý vi phạm |
| Ban truyền thông | — | Nội dung truyền thông nội bộ |
| HQ Admin | HQ | Quản trị hệ thống cấp cao (khonhapho.com) |
| Admin | — | Quản trị kỹ thuật, cấu hình hệ thống |

### 2.2 Phân quyền truy cập Kho tài nguyên

| Trạng thái | Điều kiện | Quyền xem kho |
|------------|-----------|---------------|
| HV (0–5 buổi học) | Chưa đủ điều kiện | Không xem được hoặc rất hạn chế |
| HV (6+ buổi học) | Điểm danh QR đủ 6 buổi | Xem kho BĐS dưới 9 tỷ |
| CV (12+ buổi học) | Điểm danh QR đủ 12 buổi | Xem toàn bộ kho tài nguyên |
| TrNhóm trở lên | — | Toàn bộ kho + quản lý thành viên |
| GĐKV trở lên | — | Chỉ nhìn thấy thành viên trong chi nhánh/khu vực |

### 2.3 QR Check-in (Điểm danh buổi học/họp)

- Quét mã QR buổi học hoặc buổi họp để điểm danh
- Hệ thống ghi nhận và cộng dồn số buổi
- Mốc 6 buổi → mở khóa xem kho dưới 9 tỷ (vai trò HV nâng cấp)
- Mốc 12 buổi → xem toàn bộ kho (vai trò CV)

---

## 3. BUSINESS RULES (BR)

Các quy tắc nghiệp vụ bắt buộc áp dụng trên toàn hệ thống:

| Mã | Quy tắc |
|----|---------|
| BR-02 | Số điện thoại phải đúng định dạng (10 số, bắt đầu bằng 0) |
| BR-03 | Mật khẩu: tối thiểu 8 ký tự, ít nhất 1 chữ hoa, ít nhất 1 chữ số |
| BR-05 | Mã OTP hết hạn sau 5 phút |
| BR-06 | Họ và tên không được quá 50 ký tự |
| BR-07 | Email phải đúng định dạng (có @, có domain) |
| BR-08 | Ngày cấp CCCD phải sau ngày sinh ít nhất 15 năm |
| BR-09 | SĐT người thân không được trùng với SĐT tài khoản đăng ký |
| BR-12 | Bài viết feed tối đa nhúng 10 link YouTube |
| BR-14 | Năm sinh khách hàng: 1900 đến (năm hiện tại − 16) |
| BR-15 | Tiêu đề bài viết feed tối đa 100 ký tự |
| BR-16 | Nội dung bài viết feed tối đa 3.000 ký tự |
| BR-17 | Mọi thanh search: bỏ dấu cách đầu/cuối, cắt dấu cách thừa giữa ký tự |
| BR-18 | Ghi chú trong bộ sưu tập và ghi chú tin chính chủ tối đa 500 ký tự |
| BR-19 | Tên bộ sưu tập tối đa 50 ký tự |
| BR-22 | Tài chính tối thiểu của khách hàng: 200.000.000 đồng |
| BR-44 | Ảnh upload tối đa 5 MB mỗi file |
| BR-49 | Chỉ quản trị viên nhóm chat mới được cập nhật thông tin nhóm, thay đổi trạng thái thành viên và thêm thành viên |

---

## 4. THÔNG BÁO HỆ THỐNG (MSG)

Thông báo chuẩn hiển thị trên App:

| Mã | Nội dung thông báo | Khi nào hiển thị |
|----|--------------------|-----------------|
| MSG-10 | SĐT người thân không được trùng với SĐT đã đăng ký | Sửa hồ sơ — nhập SĐT người thân trùng |
| MSG-11 | Số điện thoại chưa hợp lệ! | Nhập SĐT sai định dạng |
| MSG-12 | Nội dung không được quá dài! | Vượt giới hạn ký tự |
| MSG-13 | Ngày cấp CCCD không hợp lệ! | Ngày cấp < 15 năm sau ngày sinh |
| MSG-14 | Ngày sinh không hợp lệ. | Ngày sinh ngoài khoảng hợp lệ |
| MSG-15 | Email chưa đúng định dạng. | Nhập email sai format |
| MSG-16 | Không được bỏ trống mục này. | Trường bắt buộc bị để trống |
| MSG-17 | Bạn cần điền thông tin này. | Tương tự MSG-16 (variant) |
| MSG-18 | Đăng bài thành công. Xin vui lòng chờ duyệt. | Sau khi đăng bài feed thư viện |
| MSG-24 | Xoá thành công. | Xóa bất kỳ đối tượng nào |
| MSG-27 | Cập nhật thành công! | Lưu chỉnh sửa thành công |
| MSG-28 | Thêm mới thành công! | Tạo mới đối tượng (BST, v.v.) |
| MSG-29 | Cập nhật thông tin khách hàng thành công | Sửa thông tin khách |
| MSG-30 | Thêm thông tin khách hàng thành công | Thêm khách hàng mới |
| MSG-36 | Gỡ tin khỏi bộ sưu tập thành công. | Gỡ tin khỏi BST |

---

## 5. MODULE: ĐĂNG NHẬP & TÀI KHOẢN

### 5.1 Đăng nhập

- Nhập SĐT + mật khẩu
- Hoặc đăng nhập qua Facebook / Zalo / Google (token)
- Sai thông tin → thông báo lỗi, khóa tài khoản sau N lần thất bại

### 5.2 Đăng ký

- Nhập SĐT → nhận OTP (hết hạn sau 5 phút, tối đa 3 lần)
- Nhập mật khẩu: ≥ 8 ký tự, ≥ 1 chữ hoa, ≥ 1 chữ số
- Điền thông tin cá nhân: họ tên (≤50 ký tự), ngày sinh, email

### 5.3 Quên mật khẩu

- Nhập SĐT → nhận OTP → đặt mật khẩu mới

### 5.4 Chỉnh sửa hồ sơ cá nhân

**Đường dẫn:** Sidebar → Avatar → Card thông tin tài khoản → Trang cá nhân → Chỉnh sửa hồ sơ

Các trường có thể sửa:

| Trường | Bắt buộc | Ràng buộc |
|--------|----------|-----------|
| Tên hiển thị | Có | ≤ 50 ký tự (BR-06) |
| Ngày sinh | Có | 1900 – (năm hiện tại – 16) (BR-14) |
| Số điện thoại | Có | Đúng định dạng (BR-02) |
| Ngày cấp CCCD | Có | Sau ngày sinh ≥ 15 năm (BR-08) |
| Địa chỉ thường trú | Có | ≤ 100 ký tự (BR-03) |
| Nơi ở hiện tại | Có | ≤ 100 ký tự (BR-03) |
| Email | Có | Đúng định dạng (BR-07) |
| SĐT người thân | Có | Không trùng SĐT tài khoản (BR-09) |
| Facebook | Không | Link profile |

### 5.5 Xác thực cá nhân

- Xác thực danh tính → nâng cấp quyền truy cập (2.1 trong App)

---

## 6. MODULE: TRANG CHỦ & FEED

### 6.1 Bố cục trang chủ

- **Hàng 1 (nhanh):** Đăng tin, Lọc kho, Đặt lịch, và các phím tắt
- **Nút Đăng tin:** hàng 1, vị trí thứ 4 từ trái
- **Feed chính:** hiển thị Vụ chốt, Khách cần mua gấp, Chia sẻ kỹ năng

### 6.2 Các loại Feed

| Feed | Người xem | Người đăng |
|------|-----------|------------|
| Vụ chốt | Tất cả | CV/ĐC sau khi chốt thành công |
| Khách cần mua gấp | Tất cả | CV đăng nhu cầu khách |
| Chia sẻ kỹ năng | Tất cả | CV/TrNhóm chia sẻ kinh nghiệm |
| Thư viện Nhà Phố | Tất cả | Thư ký + BĐT (Ban đào tạo) |
| Quy định và Hướng dẫn | Tất cả | BĐT/HQ Admin |

### 6.3 Tương tác Feed

- **Thích** (Like)
- **Bình luận** (nội dung ≤ 200 ký tự, ảnh ≤ 5MB — BR-44)
- **Chia sẻ** (copy link)
- **#Hashtag** — bấm để xem bài đăng cùng hashtag theo người đăng, phòng ban, khối
- **[...]** — tùy chọn thêm: sửa/xóa/ghim/báo cáo (theo quyền)

### 6.4 Feed Khách cần mua gấp

- Xem danh sách nhu cầu mua của khách hàng từ các CV khác
- Bấm vào tên/ảnh người đăng → xem profile
- Liên hệ: Điện thoại / Zalo / Messenger / Chat khonhapho

### 6.5 Ghim bài đăng

- Người có quyền có thể ghim bài đăng lên đầu feed

---

## 7. MODULE: KHO TÀI NGUYÊN (Lọc kho)

**Đường dẫn:** Trang chủ → Lọc kho (hoặc nút Lọc kho trong hàng 1)

### 7.1 Tìm kiếm (Search)

- Nhập từ khóa vào thanh search
- Hệ thống hiển thị gợi ý và kết quả khớp
- Áp dụng BR-17: trim dấu cách đầu/cuối, loại bỏ khoảng trắng thừa

### 7.2 Bộ lọc (Filter)

Các tiêu chí lọc trong Kho tài nguyên:

| Tiêu chí | Loại |
|----------|------|
| Hiện trạng BĐS | Dropdown |
| Loại hình BĐS | Dropdown |
| Tỉnh / Thành phố | Dropdown |
| Quận / Huyện | Dropdown |
| Đường / Phố | Dropdown |
| Dự án / Chung cư | Dropdown |
| Đặc điểm BĐS | Dropdown (có mở rộng) |
| Giá tối thiểu | Textbox (số) |
| Giá tối đa | Textbox (số) |
| Khoảng giá (preset) | Dropdown |
| Đơn vị tiền tệ | Dropdown |

Bấm **[Lọc]** → hệ thống hiển thị kết quả theo tiêu chí.
Bấm **[Đặt lại]** → xóa toàn bộ tiêu chí.

### 7.3 Ẩn/hiện cột

- Tùy chỉnh cột hiển thị trong danh sách
- Cài đặt được lưu lại cho lần sau

### 7.4 Xem chi tiết tin đăng

Trong màn hình chi tiết:
- Thông tin BĐS đầy đủ (loại hình, địa chỉ, diện tích, giá, pháp lý...)
- Hình ảnh
- Thông tin đầu chủ

### 7.5 Các hành động với tin đăng trong Kho

| Hành động | Mô tả |
|-----------|-------|
| **Đặt lịch** | Đặt lịch xem nhà — ĐC nhận thông báo và xác nhận |
| **Lưu tin** | Lưu vào bộ sưu tập để theo dõi |
| **Báo cáo dẫn khách** | Ghi nhận đã dẫn khách đi xem tin này |
| **Khảo sát** | Phản hồi về chất lượng tin |
| **Chat với đầu chủ** | Nhắn tin trực tiếp qua kênh nội bộ |
| **Gọi điện** | Nhảy sang ứng dụng quay số |
| **Zalo/Messenger** | Nhảy sang ứng dụng liên hệ |

### 7.6 Đặt lịch xem nhà

**Đường dẫn:** Xem tin đăng → Icon đặt lịch → Điền form → Gửi

- Thông tin cần điền: ngày giờ, tên khách, ghi chú
- Sau khi gửi → ĐC nhận thông báo
- ĐC xác nhận/từ chối → CV nhận phản hồi
- Lịch sử đặt lịch lưu trong Tài khoản cá nhân

### 7.7 Báo cáo dẫn khách

**Đường dẫn:** Xem tin đăng → Icon báo cáo dẫn khách → Điền form → Gửi

- Bắt buộc nhập tên khách và CCCD khách trùng với thông tin khách đã tạo trong Quản lý khách (để hệ thống tự khớp)
- Kết quả báo cáo lưu trong lịch sử báo cáo

---

## 8. MODULE: KHO CÁ NHÂN (Đăng tin & Quản lý)

**Đường dẫn:** Sidebar → Quản lý kho hàng → Kho cá nhân

> Dành cho **Đầu chủ** — người đã ký hợp đồng với chủ nhà.

### 8.1 Đăng tin BĐS (11 bước)

| Bước | Hành động |
|------|-----------|
| 1 | Tìm nút **Đăng tin** (trang chủ, hàng 1, vị trí 4 từ trái) |
| 2 | **Nhân bản** tin cũ (tùy chọn — để tạo tin mới từ tin đã có) |
| 3 | Chọn **Loại hình** & **Đặc điểm** BĐS |
| 4 | Nhập **Vị trí & Địa chỉ** (Tỉnh → Quận → Phường → Đường) |
| 5 | Nhập **Địa chỉ chi tiết** (xem quy tắc nhập bên dưới) |
| 6 | Điền **Thông số nhà** (diện tích, tầng, phòng ngủ, WC...) |
| 7 | Điền **Hoa hồng & Loại hợp đồng** |
| 8 | Viết **Tiêu đề & Nội dung mô tả** |
| 9 | Nhập **Pháp lý & Serial sổ** |
| 10 | Upload **Ảnh & File đính kèm** (ảnh ≤ 5MB — BR-44) |
| 11 | Bấm **Đăng tin** → trạng thái: **Chờ duyệt** |

### 8.2 Quy tắc nhập địa chỉ chi tiết

**Nhà trong ngõ:**
- Cú pháp: `Ngõ [số] [Tên đường]`
- Ví dụ đúng: `Ngõ 107 Trần Khát Chân`
- **KHÔNG** nhập số nhà vào ô địa chỉ chi tiết (gây nhầm lẫn hệ thống)

**Dự án / Khu đô thị:**
- Nếu BĐS thuộc dự án → chọn từ dropdown dự án
- Để trống nếu không thuộc dự án

### 8.3 Thông số nhà — lưu ý đặc biệt

| Trường hợp | Cách nhập |
|------------|-----------|
| Diện tích sổ ≠ diện tích thực | Dùng `/` để phân biệt: `34/78` = sổ 34m², thực 78m² |
| Nhà cấp 4 | Nhập `c4` vào ô số tầng |
| Đơn vị diện tích | Luôn là m² |

### 8.4 Loại hợp đồng & Hoa hồng

| Loại | Ý nghĩa |
|------|---------|
| ĐC1 | HĐ Đầu chủ 01 — ký trực tiếp với chủ nhà hoặc người có quyền quyết định pháp lý |
| ĐC2 | HĐ Đầu chủ 02 — ký với người đại diện, không phải chủ nhà trực tiếp (thường yếu hơn ĐC1) |
| ĐC1A | HĐ ký lại với chủ nhà đã có ĐC khác ký, nhưng mức giá tốt hơn ĐC cũ |
| Cầu đối tác | Chia hoa hồng với môi giới đối tác — chỉ áp dụng BĐS từ 20 tỷ trở lên (SRS xác nhận) |

### 8.5 Trạng thái tin sau khi đăng

| Trạng thái | Ý nghĩa |
|------------|---------|
| **Chờ duyệt** | Vừa đăng, đang chờ kiểm duyệt (trong 24h) |
| **Đang hoạt động** | Đã được duyệt, hiển thị trong kho |
| **Đã hết hạn** | Tin quá thời hạn đăng |
| **Bị từ chối** | Admin từ chối, có lý do trong thông báo |
| **Đã xóa** | Soft delete — có thể khôi phục |

### 8.6 Quản lý tin đã đăng

| Hành động | Điều kiện | Mô tả |
|-----------|-----------|-------|
| **Sửa tin** | Mọi trạng thái | Chỉnh sửa thông tin — tin quay lại Chờ duyệt nếu sửa nội dung chính |
| **Xóa tin** | Đang hoạt động | Soft delete, vào mục Đã xóa |
| **Khôi phục** | Đã xóa | Lấy lại tin đã xóa |
| **Bump/Chốt** | Đang hoạt động | Đẩy tin lên đầu hoặc đánh dấu đã chốt |

### 8.7 Tin chính chủ

- Tin do chủ nhà tự đăng (không qua hệ thống ĐC)
- ĐC có thể **phản hồi** (chọn lý do) và **lưu** tin chính chủ
- Tab xem: Tin chính chủ / Tin nhanh / Tin đã lưu
- Ghi chú tin đã lưu: tối đa 500 ký tự (BR-18)

### 8.8 Kho hàng tự do

- BĐS không thuộc hợp đồng độc quyền
- Có thể Search, Filter, Xem chi tiết
- Tương tác: Thích, Bình luận
- Filter: Hiện trạng, Loại hình, Tỉnh/Huyện, Đường, Giá, Đặc điểm, Dự án

### 8.9 Quản lý lịch sử khách đặt lịch (phía ĐC)

**Đường dẫn:** Quản lý kho hàng → Lịch sử khách đặt lịch

- Xem danh sách khách CV đã đặt lịch xem nhà của mình
- Bấm vào card → chat trực tiếp với CV đó để xác nhận lịch
- Xác nhận / Từ chối / Thu hồi lịch hẹn

### 8.10 Quản lý lịch sử khách báo cáo (phía ĐC)

**Đường dẫn:** Quản lý kho hàng → Lịch sử khách báo cáo

- Xem danh sách báo cáo dẫn khách do CV gửi
- Search báo cáo theo từ khóa (BR-17)
- Xem chi tiết: thông tin khách, ảnh, tag, liên hệ CV

---

## 9. MODULE: BỘ SƯU TẬP

**Đường dẫn:** Sidebar → Icon Bộ sưu tập

### 9.1 Tạo bộ sưu tập

1. Bấm **[Tạo bộ sưu tập]**
2. Nhập tên (tối đa 50 ký tự — BR-19)
3. Bấm **[Tạo]** → hệ thống lưu (MSG-28: Thêm mới thành công!)

### 9.2 Quản lý bộ sưu tập

| Hành động | Cách thực hiện |
|-----------|---------------|
| **Sửa BST** | Bấm [...] → Sửa bộ sưu tập → Chỉnh tên/ảnh → Lưu |
| **Xóa BST** | Bấm [...] → Xóa bộ sưu tập → Xác nhận Có |
| **Search BST** | Nhập từ khóa vào thanh search trong màn hình BST |

Ảnh bộ sưu tập tối đa 5MB (BR-44).

### 9.3 Trong bộ sưu tập (quản lý tin)

| Hành động | Mô tả |
|-----------|-------|
| **Filter tin** | Lọc tin theo tiêu chí trong BST |
| **Ghi chú tin** | Thêm ghi chú riêng cho từng tin (≤ 500 ký tự — BR-18) |
| **Gỡ tin** | Xóa tin khỏi BST (MSG-36: Gỡ tin khỏi bộ sưu tập thành công) |
| **Thêm vào BST khác** | Sao chép tin sang BST khác |

### 9.4 Lưu tin vào bộ sưu tập

- Từ màn hình Kho tài nguyên: bấm Icon lưu → chọn BST
- Từ màn hình chi tiết tin: bấm Icon lưu

---

## 10. MODULE: QUẢN LÝ KHÁCH — TỰ KHỚP KHÁCH

**Đường dẫn:** Sidebar → Avatar → Tài khoản cá nhân → QL khách – Tự khớp khách

> Dành cho **CV** để quản lý danh sách khách hàng đang tìm mua nhà.

### 10.1 Màn hình chính

- Tab **Đang tìm mua** (mặc định)
- Tab **Đã mua nhà**
- Nút **[Thêm mới]**, **Icon search**, **Icon chat** (với ĐC)

### 10.2 Thêm khách hàng

**Các trường bắt buộc:**

| Trường | Ràng buộc |
|--------|-----------|
| Họ và tên | Bắt buộc, ≤ 50 ký tự (BR-06) |
| CMND/CCCD | Bắt buộc, đúng định dạng (BR-02) |
| Năm sinh | Bắt buộc, 1900–(năm hiện tại − 18) (BR-14) |
| Tài chính tối đa | Bắt buộc, ≥ 200.000.000 đồng (BR-22) |
| Thành phố | Bắt buộc |
| Quận / Huyện | Bắt buộc |

**Các trường tùy chọn:** SĐT, Nơi ở, Hướng nhà, Mục đích mua, Ghi chú yêu cầu (≤ 3000 ký tự)

**Checkbox phân loại khách:**
- Tài chính sẵn sàng
- Đã mua hụt nhà
- Hiểu thị trường
- Tôn trọng môi giới
- Cần mua gấp

### 10.3 Sửa thông tin khách

Tương tự thêm mới, thêm trường **Hiện trạng** (dropdown). Bấm **[Lưu]** (MSG-29).

### 10.4 Xóa khách

- **Chỉ xóa được khi khách ở trạng thái "Đã mua nhà"**
- Vào tab **Đã mua nhà** → [...] → Xóa → Xác nhận

### 10.5 Tìm hàng phù hợp (Tự khớp khách)

**Đường dẫn:** Danh sách khách → [...] → Tìm hàng phù hợp

- Hệ thống tự động lọc tin đăng phù hợp với tiêu chí khách
- Có thể filter thêm: Hiện trạng, Loại hình, Quận/Huyện, Đặc điểm BĐS
- Bấm **[Xem]** → xem chi tiết tin
- Từ màn hình kết quả: Lưu tin, Đặt lịch

### 10.6 Xem căn đã dẫn đi xem

**Đường dẫn:** Danh sách khách → [...] → Căn đã dẫn đi xem

- Hiển thị danh sách BĐS đã báo cáo dẫn khách này đi xem
- Điều kiện: khi báo cáo dẫn khách, tên khách + CCCD phải trùng với thông tin khách trong hệ thống

---

## 11. MODULE: LỊCH HẸN & LỊCH SỬ BÁO CÁO

### 11.1 Quản lý lịch sử đặt lịch (phía CV)

**Đường dẫn:** Sidebar → Avatar → Tài khoản cá nhân → Lịch sử đặt lịch

- Xem danh sách lịch hẹn đã đặt
- Bấm vào card → chat với ĐC để trao đổi, xác nhận lịch

### 11.2 Chat với đầu chủ (từ lịch hẹn)

**Đường dẫn:** Lịch sử đặt lịch → Bấm vào lịch hẹn → Màn hình chat

- Chat nội dung, ảnh, sticker, emoji
- Bấm [>] để gửi

### 11.3 Quản lý lịch sử báo cáo (phía CV)

**Đường dẫn:** Sidebar → Avatar → Tài khoản cá nhân → Lịch sử báo cáo

- Xem danh sách báo cáo đã gửi
- Search báo cáo theo từ khóa (BR-17)
- Bấm icon [xem] → xem chi tiết báo cáo (thông tin nhà, ảnh, tag liên hệ)

---

## 12. MODULE: CHAT

**Đường dẫn:** Trang chủ → Icon Chat

### 12.1 Màn hình danh sách chat

- Tab **Nhóm chat** (nhóm người dùng tạo)
- Tab **Nhóm mặc định** (nhóm do admin/HQ cài sẵn theo phòng/chi nhánh)
- Thanh **Tìm kiếm**: tìm chat cá nhân, SĐT, chat nhóm, tin nhắn theo từ khóa
- Nút **[Tạo nhóm]**

### 12.2 Chat nhóm — tính năng

| Tính năng | Mô tả |
|-----------|-------|
| Nhắn tin văn bản | Textbox nhập nội dung |
| Ảnh | Chọn từ thư viện máy |
| Sticker | Mở bộ sticker |
| Emoji | Bàn phím emoji |
| Ghi âm | Icon mic |
| Gửi Tim | Icon tym nhanh |
| Chia sẻ tin nhắn | Chuyển tiếp sang chat khác |

### 12.3 Quản lý thành viên nhóm chat (Quản trị viên)

**Chỉ quản trị viên nhóm mới thực hiện được (BR-49):**

| Hành động | Mô tả |
|-----------|-------|
| Khoá trả lời | Vô hiệu hoá gửi tin nhắn của thành viên |
| Tạm khoá trò chuyện | Vô hiệu hoá xem tin nhắn của thành viên |
| Xóa khỏi nhóm | Loại thành viên ra khỏi nhóm chat |
| Thêm quản trị viên | Nâng quyền thành viên thành quản trị viên |
| Gỡ quyền quản trị viên | Hạ quyền |
| Thêm thành viên | Mời thêm người vào nhóm |

Ngoài ra (ai cũng làm được): Gửi tin nhắn cá nhân, Xem trang cá nhân.

---

## 13. MODULE: DANH SÁCH CÔNG TY

**Đường dẫn:** Sidebar → Danh sách công ty

### 13.1 Xem danh sách nhân sự

- Hiển thị tên, SĐT, tùy chọn liên hệ (Điện thoại, Zalo, Messenger, Chat khonhapho, Facebook)
- Bấm tên → xem profile cá nhân

### 13.2 Search nhân sự

- Nhập từ khóa → hệ thống hiển thị thành viên khớp (BR-17)

### 13.3 Filter nhân sự

| Tiêu chí | Loại |
|----------|------|
| Chi nhánh | Dropdown |
| Phòng ban | Dropdown (tương ứng chi nhánh) |
| Chức danh | Dropdown |

**Lưu ý:** Từ GĐKV trở xuống chỉ nhìn thấy thành viên thuộc chi nhánh/trụ sở của họ.

---

## 14. MODULE: THƯ VIỆN NHÀ PHỐ

**Đường dẫn:** Sidebar → Thư viện Nhà Phố

### 14.1 Feed Thư viện kiến thức

- Bài viết chia sẻ kiến thức nghề môi giới
- Tương tác: Thích, Bình luận, Chia sẻ
- #Hashtag liên kết các bài cùng chủ đề

### 14.2 Tạo bài viết (Thư ký)

- Tiêu đề: ≤ 100 ký tự (BR-15)
- Nội dung: ≤ 3.000 ký tự (BR-16)
- Tối đa 10 link YouTube nhúng (BR-12)
- Sau khi đăng → Chờ duyệt (MSG-18)

### 14.3 Sửa bài viết

- [...] → Chỉnh sửa bài viết → Sửa nội dung/danh mục/ảnh → Đăng tin → Cập nhật thành công (MSG-27)

---

## 15. MODULE: QUY ĐỊNH & HƯỚNG DẪN

**Đường dẫn:** Sidebar → Quy định và Hướng dẫn

### 15.1 Mục Quy định

- Danh sách bài Quy định công ty
- Tương tác: Like, Bình luận, Chia sẻ

### 15.2 Trung tâm hướng dẫn trợ giúp

- Tìm kiếm hướng dẫn theo từ khóa (BR-17)
- Lịch sử tìm kiếm gần đây
- Xem hướng dẫn theo danh mục

---

## 16. MODULE: QUẢN LÝ THÀNH VIÊN (TrNhóm/PP/TP)

**Đường dẫn:** Sidebar → Quản lý thành viên (hoặc theo quyền)

### 16.1 Danh sách thành viên phòng/nhóm

- Xem thông tin, chức danh, chỉ tiêu kho

### 16.2 Search thành viên (BR-17)

### 16.3 Filter thành viên

- Theo chi nhánh, phòng ban, chức danh, trạng thái

### 16.4 Sửa thông tin thành viên

- Chỉnh chức danh
- Đặt giới hạn kho (số lượng tin được đăng)

### 16.5 Quản lý khách của CV

- Xem danh sách khách hàng của từng CV trong nhóm
- Theo dõi tiến độ

### 16.6 Quản lý báo cáo của CV

- Xem báo cáo dẫn khách của từng CV
- Theo dõi số lượng, chất lượng

### 16.7 Mã giới thiệu

- Mỗi thành viên có mã giới thiệu riêng
- Chia sẻ mã để giới thiệu ứng viên mới (Vòng 0)

### 16.8 Quản lý ứng viên Vòng 0

- Xem danh sách ứng viên được giới thiệu
- Duyệt/từ chối ứng viên vào học

### 16.9 Danh sách nhóm

- Tạo / Sửa / Xóa nhóm
- Search nhóm

---

## 17. DANH MỤC BĐS & THUẬT NGỮ

### 17.1 Loại hình BĐS

- Nhà phố (nhà mặt đường)
- Nhà trong ngõ / ngách / hẻm
- Nhà biệt thự
- Đất nền
- Chung cư / Căn hộ
- Shophouse
- Nhà cấp 4
- Dự án / Khu đô thị

### 17.2 Đặc điểm BĐS

- Diện tích sổ (m²)
- Diện tích thực (m²)
- Số tầng
- Số phòng ngủ
- Số WC
- Hướng nhà
- Pháp lý (Sổ đỏ / Sổ hồng / Hợp đồng mua bán...)
- Serial sổ (số seri trên giấy tờ pháp lý)

### 17.3 Glossary

| Thuật ngữ | Giải thích |
|-----------|-----------|
| **ĐC** | Đầu chủ — người ký hợp đồng ĐC với chủ nhà, quản lý tin BĐS trên App |
| **CV** | Chuyên viên — môi giới sử dụng kho để tìm BĐS cho khách |
| **HV** | Học viên — thành viên mới, chưa đủ điều kiện CV |
| **Chờ duyệt** | Trạng thái tin BĐS sau khi đăng, trước khi được admin duyệt |
| **Nhân bản** | Sao chép tin đăng cũ để tạo tin mới nhanh hơn |
| **Bump** | Đẩy tin lên đầu kho để hiển thị nổi bật hơn |
| **Bum chốt** | Đánh dấu tin đã chốt thành công |
| **Cầu đối tác** | Chia sẻ hoa hồng với môi giới khác (áp dụng BĐS ≥ 20 tỷ) |
| **Serial sổ** | Số seri trên giấy tờ pháp lý của BĐS |
| **Tin nhanh** | Tin đăng dạng rút gọn, xử lý nhanh |
| **Kho hàng tự do** | BĐS không thuộc hợp đồng độc quyền |
| **Vòng 0** | Giai đoạn đầu tuyển dụng — ứng viên chưa vào công ty chính thức |
| **Điểm danh QR** | Quét mã QR để xác nhận tham dự buổi học/họp |
| **Tự khớp khách** | Tính năng hệ thống tự tìm BĐS phù hợp với tiêu chí từng khách |
| **Nhóm mặc định** | Nhóm chat do HQ/admin cài đặt sẵn theo cơ cấu tổ chức |
| **ĐC1/ĐC2/ĐC1A** | Loại hợp đồng độc quyền giữa ĐC và chủ nhà |

---

## 18. LỖI THƯỜNG GẶP & CÁCH XỬ LÝ

| Lỗi / Tình huống | Nguyên nhân | Cách xử lý |
|------------------|-------------|------------|
| Không tìm thấy đường trong địa chỉ | Nhập sai tên đường | Thử tên viết tắt hoặc không dấu |
| Tin bị từ chối duyệt | Thiếu ảnh, sai thông tin | Bổ sung theo yêu cầu trong thông báo |
| Không chọn được dự án | Dự án chưa có trong hệ thống | Liên hệ admin thêm dự án |
| Không xem được kho | Chưa đủ số buổi học (HV) | Tham dự thêm buổi học, quét QR điểm danh |
| Không thể xóa khách | Khách chưa ở trạng thái "Đã mua nhà" | Cập nhật hiện trạng khách trước |
| OTP hết hạn | Quá 5 phút (BR-05) | Yêu cầu gửi lại OTP |
| Tải ảnh thất bại | Ảnh > 5MB (BR-44) | Nén ảnh trước khi upload |
| Ghi chú không lưu được | Vượt 500 ký tự (BR-18) | Rút ngắn nội dung ghi chú |

---

*Last updated: 2026-06-05 | Tổng hợp từ: PRD, SRS Mobile App (USER/KHO/QUẢN LÝ PHÂN QUYỀN), SRS Website (USER/KHO/QUẢN LÝ PHÂN QUYỀN/QUẢN TRỊ HQ/QUẢN TRỊ HQ2/Admin)*
