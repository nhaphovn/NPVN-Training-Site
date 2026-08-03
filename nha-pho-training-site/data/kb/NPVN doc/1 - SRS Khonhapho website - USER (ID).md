# 1 \- SRS Khonhapho website \- USER \(ID\)

**TẬP ĐOÀN NHÀ PHỐ VIỆT NAM**

# 

![Image](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=NjdkOGE0MGYzYWVlNTQ4NjQzYTFkNTZlOWU1NGRiNTJfNmMxOWI4NDExNzIyNTgzMTBiMjIzZTU1OGRiZWFlMTlfSUQ6NzM2Mzk2Nzk4OTg3MzQ3NTYxNl8xNzgwNjQ2ODI4OjE3ODA3MzMyMjhfVjM)



# 

**Hà Nội, ngày 19 tháng 4 năm 2023**



# 

---

# **VERSION HISTORY**

|**Phiên bản**|**Ngày**|**Thay đổi bởi**|**Lý do thay đổi**|
|---|---|---|---|
|1\.0|02/05/2024|Nguyễn Phương Nam|Tạo mới \- Base theo hiện trạng Khonhapho|
|1\.1|11/11/2024|Nam|Thêm tài liệu 6 Admin|
|1\.2|27/05/2024|Nguyễn Phương Nam|Thêm mô tả phần 11 chat|
|2\.0|30/09/2024|Quỳnh Anh \- Nam|Cập nhập Bảng mô tả Event \& Policy ở bên dưới tiếp theo các activity diagram |
|2\.1<br>|21/11/2024|Quỳnh Anh<br>|Thêm tài liệu phần 5 \- 21 Quản lý truyền thông\. Tài liệu phần 1 \- 8 Blog Nhà Phố\. Cập nhật luồng đăng nhập đăng ký mới ở tài liệu phần 1|
|2\.1|26/11/2024|Nam|Thêm phần 9 Sửa đổi, tách riêng Quy định và hướng dẫn|
|2\.1|04/07/2024|Quỳnh Anh \- Khánh Linh|Thêm tài liệu 9\.6 Hợp đồng hợp tác|
|2\.2|10/07/2024|Nguyễn Phương Nam|Thêm phần 12, 13 tài liệu 5 và 5\.7, 5\.8 tài liệu 1|
|2\.3|12/11/2024|Quỳnh Anh|Thêm tài liệu phần 2 \- 2\.8 bum chốt|
|2\.4<br>|18/11/2024|Nam<br>|Optimize docs 4,5 cho phân quyền theo các cấp và thêm các phần có đánh new|
|2\.4<br>|11/11/2024<br>|Nam<br>|Tách Quản lý dữ liệu kho hàng và Quản lý dữ liệu thành viên ở tài liệu 4 sang tài liệu 6 và thêm các mục mới Phường, Khu vực vùng và tỉnh|
|2\.4|10/07/2024|Nguyễn Phương Nam|Thêm mới phần 14, 15 tài liệu 5 và Cập nhật phần 7 tài liệu 1\. 2\.7 Tài liệu 3|
|2\.5|18/11/2024|Quỳnh Anh<br>|Thêm tài liệu phần 2 \- 1\.5 Định giá và cho vay|
|N/A|12/07/2024|Quỳnh Anh \- Nam|Thêm mới phần 8, 9 tài liệu 3\. Phần 16, 17 tài liệu 5 \(Pending\)|

# I\. Project Introduction

## **1\. Project Information**

- Tên dự án: Kho Nhà Phố

- Mã dự án: KNP

- Tên phòng ban: Nhà Phố Việt Nam \- Ban Công Nghệ

- Loại phần mềm: Web Application

## 2\.** Document Management**

Management Tools: Store on Lark

- *Docs*: Report documents\.

- *Sheets*: QA documents, Test\.

- *Slides*: Slide presentation\.

## 3\.** Source Code Management**

Management Tools:

- GitHub: Manage coding resources, defects\.

- Lark: Task management\.

## 4\.** Tools \& Infrastructures**

|**Category**|**Tools / Infrastructure**|
|---|---|
|**Technology**|\- Typescript<br>\- Tailwindcss<br>\- React / Nextjs|
|**Database**|MySQL, MongoDB|
|**IDEs/Editors**|Visual Studio Code|
|**Diagramming**|Lark Diagram, Figma|
|**Documentation**|Lark Docs/Sheets/Slides|
|**Version Control**|GitHub \(Source Codes\), Lark \(Documents, Reports\)|
|**Deployment server**|N/A|
|**Communication tools**|Lark|
|**Project management**|GitHub \(Defects\), Lark \(Tracking Tasks, Notes\)|

## Các chức danh

|Viết tắt|Chức danh |Note|
|---|---|---|
|HV|Học viên||
|CV|Chuyên viên||
|ĐC|Đầu chủ||
|TrL|Trợ lý||
|PP|Phó phòng||
|UVTP|Ứng viên Trưởng Phòng||
|TP|Trưởng phòng||
|PGĐKD|Phó giám đốc Kinh doanh||
|GĐKD|Giám đốc Kinh doanh||
|GĐKV|Giám đốc khu vực||
|TK|Thư ký||
|PTGĐ|Phó tổng giám đốc||
|TGĐ|Tổng giám đốc||
|CT|Chủ tịch||
|SA|Super Admin||
|UV|Ứng viên|Thay cho HV|
|PGĐCN|Phó tổng giám đốc kinh doanh|Chức danh mới|

# II\. Application Message List

|**\#**|**Mã thông tin**|**Loại**|**Ngữ cảnh**|**Nội dung**|
|---|---|---|---|---|
|1|MSG01|In red, under the text box|Bỏ trống field họ tên|Cần nhập mục này\!|
|2|MSG02|In red, under the text box|Bỏ trống field SDT|Cần nhập số điện thoại\!|
|3|MSG03|In red, under the text box|Nhập sai định dạng CCCD|CCCD chưa hợp lệ|
|4|MSG04|In red, under the text box|Nhập sai định dạng “Email”|Email chưa hợp lệ\!|
|5|MSG05|In red, under the text box|Nhập input không phải là số vào Field “SDT người thân”|Số điện thoại chưa hợp lệ\!<br>|

|6|MSG06|In red, under the text box|Bỏ trống field “Mật khẩu”|*Cần nhập mật khẩu\!*|
|---|---|---|---|---|
|7|MSG07|In red, under the text box|Nhập input \<6 kí tự vào Field “Mật khẩu”|*Cần nhập ít nhất 6 ký tự\!*|
|8|MSG08|In red, under the text box|Bỏ trống field “Xác nhận mật khẩu”|*Cần xác nhận lại mật khẩu\!*|
|9<br>|MSG09|In red, under the text box|Nhập input không trùng với Field “Mật khẩu” vào Field “ Xác nhận  mật khẩu”|*Nhập lại mật khẩu không hợp lệ\!*|
|10|MSG10|In red, under the text box|Bỏ trống field “Số điện thoại hoặc CCCD”|*Cần nhập số điện thoại hoặc CCCD\!*|
|11|MSG11|In red, under the text box|Nhập sai định dạng vào Field<br>"Số điện thoại hoặc CCCD"|*Số điện thoại hoặc CCCD chưa chính xác\!*|
|12<br>|MSG12|Toast message|Nhập sai field “Số điện thoại hoặc CCCD” \(account chưa tồn tại trên DB\)|*Không tồn tại tài khoản này trên hệ thống\!*|
|13<br>|MSG13|Toast message|Nhập sai field “Mật khẩu” \(account không phải là 1 cặp trong DB\)|*Mật khẩu không chính xác\!*|
|14|MSG14|Toast message|Ghim/Bỏ ghim bài viết|*Cập nhật thành công\!*|
|15|MSG15|Toast message|Khi bấm vào 1 tính năng đã có nút bấm nhưng chức năng chưa được phát triển trong version|*T**í**nh năng đang phát triển*|
|16|MSG16|In red, under the text box|Bỏ trống các trường dropdown|*Bạn cần chọn mục này*|
|17|MSG17|Toast message|Click button \(chia sẻ bài viết\)|*Đã sao chép liên kết*|
|18|MSG18|Toast message|Đăng bài tin hoạt động|*Thêm **tin đăng **thành công*|
|19|MSG19|Toast message|Khoá bình luận bài viết |*Khóa bình luận bài viết thành công\!*|
|20|MSG20|Toast message|Mở khoá bình luận bài viết |*Mở khóa bình luận bài viết thành công\!*|
|21|MSG21|Pop\-up|Xoá bài viết|*Bạn muốn xóa bài viết này?*|
|22|MSG22|Toast message|Xác nhận xoá bài viết|*Xoá thành công*|
|23|MSG23|Toast message|Đặt lịch thành công|*Đặt lịch thành công\!*|
|24|MSG24|Toast message|Cập nhật hồ sơ|*Cập nhật hồ sơ thành công*|
|25|MSG25|Toast message|Đổi mật khẩu |*Đổi mật khẩu thành công*|
|26|MSG26|Toast message|Duyệt bài đăng |*Cập nhật tin đăng thành công\!*|
|27|MSG27<br>|Toast message|Xoá tin chính chủ |*Cập nhật thành công\!*|
|28<br>|MSG28|Toast message|Sửa tài khoản|*Cập nhật thông tin tài khoản thành công\!*|
|29<br>|MSG29|Toast message|Mời vào ban đào tạo|*Mời vào ban đào tạo thành công*|
|30|MSG30|Toast message|Kích khỏi ban đào tạo|*K**ích khỏi ban đào tạo thành công*|
|31|MSG31|Toast message|Gắn huy hiệu|*Cập nhật huy hiệu cho tài khoản này thành công\!*|
|32|MSG32|Toast message|Tạm dừng\(Khoá tài khoản\)|*Khóa tài khoản thành công*|
|33|MSG33|Toast message|Gia hạn tài khoản|*Gia hạn thành công*|
|34<br>|MSG34|Toast message|Mở khoá tài khoản|*Mở khóa tài khoản thành công*|
|35|MSG35|Toast message|Dừng hợp tác|*Kick tài khoản thành công*|
|36|MSG36|In red, under the text box|Bỏ trống Field “phòng ban”|*Cần chọn phòng ban*|
|37|MSG37|Toast message|Bỏ trống Field “Chi nhánh”|*Cần chọn chi nhánh*|
|38|MSG38|Toast message|Tạo mã giới thiệu|*Tạo mã giới thiệu thành công\!*|
|39|MSG39|Toast message|Xoá dữ liệu kho hàng: Tình trạng pháp lý\-Khoản giá\-Khoản diện tích\-Trạng thái mua bán\-Loại hợp đồng\-Loại hình bất động sản\-Dự án|*Bạn không được cấp quyền truy cập thông tin này*|
|40|MSG40|Toast message|Chỉnh sửa dữ liệu “Đặc điểm BĐS”|*Cập nhật đặc điểm BĐS thất bại*|
|41|MSG41|Toast message|Xoá đặc điểm dữ liệu “Đặc điểm BĐS”|*Xoá đặc điểm BĐS thất bại*|
|42|MSG42|Toast message|Chỉnh sửa huy hiệu|*Cập nhật thông tin huy hiệu thành công\!*|
|43|MSG43|Toast message|Xoá huy hiệu|*Xoá huy hiệu thành công*|
|44<br>|MSG44|In red, under the text box|Chỉnh sửa Sticker|*Bạn không được cấp quyền truy cập thông tin này\!*|
|45<br>|MSG45|In red, under the text box<br>|Bỏ chọn Sticker|*Bạn không được cấp quyền truy cập thông tin này\!*|
|46<br>|MSG46|In red, under the text box|Đăng tin \- Bỏ trống Field : Nội dung|*Nội dung dài ít nhất 50 ký tự\!*|
|47|MSG47|In red, under the text box|Bỏ trống Field “Số điện thoại chủ nhà”|*Bạn cần nhập mục này*<br>*Số điện thoại chưa hợp lệ\!*|
|48|MSG48|In red, under the text box|Bỏ trống các Field ảnh|*Bạn cần thêm mục này*|
|49|MSG49|In red, under the text box|Nhập sai Field "Thông số nhà"<br>|*Bạn cần nhập chính xác diện tích\!*|
|50<br>|MSG50|In red, under the text box|Bỏ trống các Field “Báo cáo dẫn khách”|*Yêu cầu nhập trường này*|
|51|MSG51|Toast message|Đánh giá đầu chủ thành công|*Thêm thành công*|
|52|MSG52|Toast message|Gửi đánh giá thành công|*Gửi đánh giá thành công*|
|53|MSG53|Toast message|Thêm mới ứng viên vòng 0|*Thêm ứng viên thành công*|
|54|MSG54|Toast message|Sửa ứng viên thành công|*Sửa ứng viên thành công*|
|55|MSG55|Toast message|Xoá ứng viên thành công|*Xoá ứng viên thành công*|
|56|MSG56|Toast message|Duyệt tin đăng|*Cập nhật thành công*|
|57|MSG57|Toast message|Gỡ tin đăng|*Gỡ tin đăng thành công*|
|58|MSG58|Toast message<br>|Nhập sai Field "Thông số nhà"|*Bạn cần nhập chính xác Số tầng\!*|
|59|MSG59|Toast message|Nhập sai Field "Thông số nhà"|*Bạn cần nhập chính xác Giá\!*|
|60|MSG60|Toast message|Nhập sai Field "Thông số nhà"|*Cần nhập số tiền tối thiểu từ 200 triệu trở lên*|
|61|MSG61|Toast message|Xoá lịch hẹn/thu hồi/xác nhận<br>|*Cập nhật trạng thái thành công\!*|
|62|MSG62|Toast message|Thêm vào bộ sưu tập|*Cập nhật thất bại\!*|
|63|MSG63|Toast message|Tạo bộ sưu tập|*Thêm mới thành công\!*|
|64|MSG64|User In red, under the text box|Bỏ trống field "Email"|*Cần nhập email*<br>|
|65<br>|MSG65|Toast message|Nhập Email chưa có trên hệ thống|*Tài khoản không có trên hệ thống*|

# III\. Business Rules

|**ID**|**Định nghĩa**|
|---|---|
|BR\-01|SĐT hoặc CCCD không được bỏ trống|
|BR\-02|SĐT \(10 số 0xxx\) hoặc CCCD \(12 số 0xx\) phải đúng định dạng|
|BR\-03|Địa chỉ thường chú và nơi ở hiện tại không quá 100 ký tự|
|BR\-04|Mật khẩu phải là cả chữ cả số|
|BR\-05|Mật khẩu tối thiểu 6 ký tự, tối đa 32 ký tự|
|BR\-06|Họ và tên không được quá 50 ký tự|
|BR\-07|Email phải đúng định dạng và giới hạn 50 ký tự|
|BR\-08|Ngày cấp CCCD phải sau ngày sinh 15 năm|
|BR\-09|SĐT người thân không được trùng với SĐT đăng ký|
|BR\-10|Phải upload được mọi định dạng ảnh|
|BR\-11|Mục Yêu cầu không được nhập quá 1000 ký tự|
|BR\-12|Bài viết trên feed chỉ được nhúng tối đa 10 link youtube|
|BR\-13|Mỗi số điện thoại và CCCD chỉ đăng ký được 1 tài khoản |
|BR\-14|Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)|
|BR\-15|Tiêu đề bài viết giới hạn 100 ký tự|
|BR\-16|Nội dung bài viết giới hạn 3000 ký tự|
|BR\-17|Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|
|BR\-18|Ghi chú tối đa 500 ký tự|
|BR\-19|Tên bộ sưu tập tối đa 50 ký tự|
|BR\-20|Các mục khác trong báo cáo dẫn khách nhập tối đa 200 ký tự|
|BR\-21|Ý kiến đầu khách nhập tối đa 500 ký tự|
|BR\-22|Tài chính tối thiểu của khách nhập từ 200\.000\.000 đổ lên|
|BR\-23|Hàng chờ duyệt không được quá 1 ngày, gửi thông báo đến thư ký nếu trong 24 giờ có tin chưa được duyệt|
|BR\-24|Sau 15 ngày không có tương tác, tin sẽ bị thông báo cam|
|BR\-25|Sau 21 ngày không có tương tác, tin sẽ bị thông báo đỏ|
|BR\-26|Trước 15 phút sau xác nhận, đầu chủ được quyền từ chối lịch hẹn|
|BR\-27|Trước 15 phút, đầu khách được quyền thu hồi lịch hẹn|
|BR\-28|Hệ thống nhắc hẹn cả 2 bên 30 phút trước lịch hẹn đi xem nhà|
|BR\-29|Khi bị khoá tài khoản thì phải có mốc thời gian bị khoá|
|BR\-30|10 ngày trước khi tài khoản của HV, CV hết hạn, gửi thông báo cho Trưởng phòng|
|BR\-31|Sau 15 phút khi tạo ứng viên vòng 0 thì không được sửa và xoá của ứng viên|
|BR\-32|Serial sổ đỏ chỉ bao gồm số hoặc chữ|
|BR\-33|Video/Audio up lên không được quá 50mb/video và không được up quá 4 Video/Audio|
|BR\-34|Nội dung tin đăng nhập tối đa 3000 ký tự|
|BR\-35|Các tin với trạng thái Đã bán sẽ tự động chuyển vào thùng rác sau 14 ngày|
|BR\-36|Các tin ở trong thùng rác sẽ tự động xóa sau 30 ngày|
|BR\-37|Sau khi sửa giá tin đăng thấp hơn 50 triệu thì trạng thái sẽ chuyển sang hạ chào trong 7 ngày|
|BR\-38|Sau khi sửa giá tin đăng cao hơn 50 triệu thì trạng thái sẽ chuyển sang tặng chào trong 7 ngày|
|BR\-39|Khi 1 đầu chủ bị dừng hợp tác, tất cả mọi tin đăng cá nhân của đầu chủ đấy sẽ bị chuyển vào kho hàng tự do|
|BR\-40|Tên phòng, nhóm, chi nhánh không được quá 50 ký tự|
|BR\-41|Mô tả không được quá 200 ký tự|
|BR\-42|Hàng mới lên trên kho sẽ có chữ New bên cạnh mốc thời gian|
|BR\-44|Giới hạn ảnh upload là 5mb |
|BR\-45|Thành viên ban đào tạo được quyền đăng bài chia sẻ kỹ năng|
|BR\-47|Sau 1 tuần thì hệ thống sẽ thông báo chăm sóc khách hàng ở trạng thái đang tìm mua|
|BR\-48|Mọi link chia sẻ thì chuyển hướng sẽ vẫn ở trong app mobile chứ không mở ở trình duyệt|
|BR\-59|Sau 14 ngày tin đăng không có tương tác thì sẽ xuất hiện nút xác nhận tin còn bán cho đầu chủ đối với tin của họ|
|BR\-61|Đặc điểm BĐS chỉ được chọn 5 mục, khi chọn mặt phố thì không thể chọn ngõ và ngược lại\. Ngõ oto thì chọn gara oto, xe máy và ba gác thì không\. Và khi chọn ngõ thì mặc định các ngõ khác sẽ bị disable|
|BR\-62|Cầu đối tác được cho phép nhập khi giá nhà \>=20 tỷ|
|BR\-63|Serial sổ có thể nhập nhiều hơn 1 sổ, sau khi nhập serial của 1 sổ, sau đấy nhập dấu cách thì sẽ được nhập 1 sổ mới|
|BR\-64|Khi chọn chưa sổ/Chờ cấp sổ hoặc có sổ/thiếu seri sổ thì trường điền serial sổ sẽ bị disable|
|BR\-65|Tên hiển thị trên feed Tin hoạt động \(Ngoại trừ Công ty\), Khách Cần mua gấp, Chia sẻ kỹ năng của Thư Viện Nhà Phố sẽ kèm theo tên viết tắt của chức danh, chi nhánh, phòng ban và khối\.<br>Ví dụ: Nguyễn Phương Nam \- Chức danh Trợ lý, chi nhánh Hà Nội, phòng 2000, khối 2000<br>Tên hiển thị: TrL Nguyễn Phương Nam • NPHN\-2000 \(Khối 2000\)<br>Các feed Công ty, Thư Viện Nhà Phố và Quy định hướng dẫn sẽ hiển thị tên là Nhà Phố Việt Nam theo như trong cài đặt công ty|
|BR\-66|Giá nhà tối thiểu phải từ 200 triệu đổ lên|
|BR\-67|Chọn loại hình Thổ cư thì thông số nhà sẽ bao gồm Diện tích \- Diện tích sử dụng \- Số tầng \- Mặt tiền \- Giá tiền<br>Diện tích, diện tích được phân biệt bằng dấu "/" Ex: 40/45\. Số tầng nếu không phải số thì là "Đất" và nếu nhập số 1, C4 thì sẽ hiển thị là nhà Cấp 4\. Mặt tiền nhập số\. Giá nhập số|
|BR\-68<br>|Tin đã đăng thì không thẻ sửa được các trường thông tin<br>\- Pháp lý<br>\- Serial sổ<br>\- Số điện thoại chủ nhà<br>\- Ảnh sổ đỏ pháp lý<br>\- Audio pháp lý|
|BR\-69|Tin có trạng thái "Đã bán" sau 15 ngày sẽ tự động chuyển vào thùng rác|
|BR\-70<br>|Loại hình Chung cư thì thông số nhà sẽ bao gồm Diện tích \- Tầng \- Giá tiền\. Diện tích nhập số và dấu chấm nếu diện tích là số thập phân\. Tầng nhập số\. Giá tiền nhập số<br>Loại hình dự án thì thông số sẽ như loại hình thổ cư|
|BR\-71|Tiêu đề đầy đủ theo format sau:<br>**\[Ngõ, hẻm, số nhà, số phòng\] \+ \[Dự án/Khu đô thị/Chung cư \(Optional\)\] \+ \[Thông số nhà\] \+ \[Quận\] \+ \[Thành Phố\] \+ HĐ \+ \[Role \(TK, ĐC, v\.v\.\.\) \- Name\] \+ \[Mã phòng ban\] , \[SĐT\] , X\[Hoa hồng\] , nguồn ĐT\[Cầu đối tác \(Optional\)\] , \[Khoảng giá\] , \[Loại hợp đồng \(ĐC1, ĐC2, ĐC1A\)\]**<br>**Mô tả: \#\[Đường\], \#\[Mã Quận \+ mã khoảng giá\], \#\[Tên \+ Tên phòng ban \(Ex: nguyenphuongnam8386\)\], \#\[Mã phòng ban\], \#\[Loại hình \(Ex: thocu, chungcu, duan\)\], \#\[Mã dự án \(Theo Dự án/Khu đô thị/Chung cư\)\]**|
|BR\-72|Tin đã đăng thì không thể sửa được các trường thông tin<br>\- Pháp lý<br>\- Serial sổ<br>\- Số điện thoại chủ nhà<br>\- Ảnh sổ đỏ pháp lý<br>\- Audio pháp lý|
|BR\-74|Giới hạn 6 ảnh cho các bài đăng trên Feed Vụ chốt, Thư viện Nhà Phố và Quy định hướng dẫn\. Giới hạn 12 ảnh cho tin đăng kho tài nguyên, 20 ảnh cho ảnh sổ đỏ pháp lý|
|BR\-75|Thời gian đặt lịch được validate 30 phút sau thời gian hiện tại|
|BR\-76|Thời gian dẫn khách đi xem trong báo cáo dẫn khách phải trước thời điểm hiện tại|
|BR\-78|Thông tin cá nhân của Chủ tịch và Tổng giám đốc sẽ bị ẩn đi khi người dùng xem trang cá nhân|
|Verson 1\.2||
|BR\-46<br>|Chat version 1\.2:<br>- Hệ thống tự động tạo kênh và group chat<br>- Khi đổi chức danh, rời khỏi phòng sẽ tự động out và tự join vào kênh và group chat mới \(only phòng hệ thống tạo\)<br>- Admin là người kiểm soát quyền quản trị phòng \(Sau sẽ có bộ phận kiểm soát\)<br>- Khi dừng hợp tác thì sẽ out toàn bộ phòng cũ, sau khi ký lại thì sẽ vào phòng mới<br>- Người quản trị nhóm được quyền gửi tin nhắn và thu hồi|
|BR\-49|Chat version 1\.2: Quản trị viên nhóm chat mới được cập nhật thông tin nhóm, tương tác trạng thái thành viên nhóm và thêm thành viên nhóm|
|BR\-43|Tin nhắn sau khi gửi thì có thể thu hồi trong 30 phút|
|BR\-50|Nội dung chat nhập giới hạn 3000 ký tự|
|BR\-51|File upload trong đoạn chat giới hạn 20mb|
|BR\-52|Nếu là nhóm mặc định thì không được xoá thành viên|
|BR\-53|Nếu là nhóm mặc định thì không thể tự nguyện rời khỏi nhóm|
|BR\-54|Thông báo đoạn chat không có tuỳ chọn tắt đến khi tôi mở lại|
|BR\-55|Tin nhắn chỉ có thể thu hồi trong vòng 30 phút|
|BR\-56|Nhóm theo tổ chức chỉ có thể hiển thị cho quyền Thư ký|
|BR\-57|Tên nhóm chat giới hạn 50 ký tự|
|BR\-79|Hệ thống gửi thông báo đến ĐC và TP của ĐK về lịch đặt|

# IV\. Use case tổng thể User

## Đăng nhập \(Modify 2\.1\)

*Use case design*

*Đặc tả use case*

|Use case ID:|UC\-1|Tên use case:|**Đăng nhập **|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|22/04/2024|
|Các tác nhân chính:|User|Figma:|[UI Đăng nhập](https://www.figma.com/design/mGXrcpLBZEhKUxxFXMSt9r/Web-UI-Kho-Nh%C3%A0-Ph%E1%BB%91?node-id=1577-78221&t=JunmO4vlN6FjuwHb-1)|
|Mô tả:|Người dùng đăng nhập vào hệ thống|||
|Điều kiện trước:|\- Người dùng đã có tài khoản trên hệ thống<br>\- Thiết bị của người dùng được kết nối internet khi đăng nhập|||
|Luồng chính:<br>|1\. Người dùng truy cập vào hệ thống [https://khonhapho\.vn](https://khonhapho.vn/)<br>2\. Người dùng nhập tài khoản và chọn lệnh Đăng nhập<br>3\. Hệ thống xác thực thông tin tài khoản trong CSDL<br>3\.1 Nếu thông tin đăng nhập hợp lệ \(đã có tài khoản\) thì chuyển tới Trang chủ<br>3\.2  Nếu thông tin đăng nhập sai thì người dùng điền lại thông tin tài khoản<br>3\.3 Nếu tài khoản đăng nhập lần đầu<br>3\.3\.1 Hệ thống hiển thị form mã giới thiệu<br>3\.3\.2 Người dùng nhập mã giới thiệu để tạo tài khoản<br>3\.3\.3 Hệ thống kiểm tra mã giới thiệu trong CSDL<br>3\.3\.3\.1 Nếu mã giới thiệu sai, quay lại bước Nhập mã giới thiệu<br>3\.3\.3\.2 Nếu mã giới thiệu hợp lệ thì chuyển tới Trang chủ với chức danh "Học viên"<br>3\.3\.4 Người dùng chọn đăng ký ứng viên <br>3\.3\.4\.1 Hệ thống ghi nhận và di chuyển người dùng đến trang chủ|||
|Luồng ngoại lệ:|3\.1\.1 Người dùng thực hiện chức năng không thành công, tài khoản đăng kí trong hệ thống không đúng so với thông tin được cập nhật|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|\- BR\-01: SĐT hoặc CCCD không được bỏ trống<br>\- BR\-02: SĐT phải đúng định dạng <br>\- BR\-04: Mật khẩu phải là cả chữ cả số<br>\- BR\-05: Mật khẩu tối thiểu 6 ký tự, tối đa 32 ký tự|||
|Tin nhắn thông báo :|\- MSG06: *Cần nhập mật khẩu\!*<br>\- MSG07: *Cần nhập ít nhất 6 ký tự\!*<br>\- MSG10: *Cần nhập số điện thoại hoặc CCCD\!*<br>\- MSG11: *Số điện thoại hoặc CCCD chưa chính xác\!*<br>\- MSG13:  *Mật khẩu không chính xác\!*|||

*Activity \& Sequence Diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi người dùng nhập thông tin và bấm nút đăng nhập|Người dùng đăng nhập tài khoản<br>|Guest create \_id|Authentication|Validation,||
||UE01H1|Validation: Xảy ra khi người dùng nhập sai thông tin|Hệ thống từ chối đăng nhập khi người dùng nhập sai tên đăng nhập, mật khẩu||Authentication|||
|UE02||Xảy ra khi người dùng đăng nhập lần đầu sau khi tạo tài khoản\.|Hệ thống chấp nhận đăng nhập lần đầu khi người dùng nhập đúng thông tin||Authentication|Validation, logging||
||UE02H1|Xảy ra khi người dùng nhập Mã giới thiệu|Người dùng sử dụng \(update\) Mã giới thiệu ||Account<br>|Validation,||
|UE03||Xảy ra khi người dùng đăng ký ứng viên|Người dùng đăng ký ứng viên khi đăng nhập lần đầu|||Logging||



### Đăng ký 

*Đặc tả use case*

|Use case ID:|UC\-1\.2|Tên use case:|**Đăng ký **|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|22/04/2024|
|Các tác nhân chính:|User|Figma:|[UI Đăng ký](https://www.figma.com/design/mGXrcpLBZEhKUxxFXMSt9r/Web-UI-Kho-Nh%C3%A0-Ph%E1%BB%91?node-id=1577-79688&t=JunmO4vlN6FjuwHb-1)|
|Mô tả:|Người dùng đăng ký tài khoản mới|||
|Điều kiện trước:|Thiết bị của người dùng được kết nối internet khi đăng nhập|||
|Luồng chính:|1\. Người dùng truy cập vào hệ thống [https://khonhapho\.vn](https://khonhapho.vn/)<br>2\. Người dùng Tạo tài khoản mới và chọn lệnh Tạo tài khoản để tạo tài khoản mới<br>3\. Hệ thống chuyển hướng đến form Đăng ký<br>4\. Người dùng điền đầy đủ thông tin theo yêu cầu và chọn lệnh Đăng ký<br>5\. Hệ thống xác thực thông tin đăng ký<br>5\.1 Nếu thông tin đăng ký hợp lệ  thì chuyển tới Trang đăng nhập<br>5\.2  Nếu thông tin đăng ký sai thì người dùng điền thông tin theo đúng yêu cầu \(quay lại bước 4\)|||
|Luồng ngoại lệ:|5\.2\.1 Mỗi số điện thoại chỉ được sử dụng cho 1 tài khoản<br>5\.2\.2 Nhập tên đăng nhập và mật khẩu theo đúng yêu cầu định dạng \(số, chữ cái \)|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|\- BR\-01: SĐT hoặc CCCD không được bỏ trống<br>\- BR\-02: SĐT phải đúng định dạng <br>\- BR\-03: Địa chỉ thường chú và nơi ở hiện tại không quá 100 ký tự<br>\- BR\-04: Mật khẩu phải là cả chữ cả số<br>\- BR\-05: Mật khẩu tối thiểu 6 ký tự, tối đa 32 ký tự, không chứa khoảng trắng<br>\- BR\-06: Họ và tên không được quá 50 ký tự<br>\- BR\-07: Email phải đúng định dạng<br>\- BR\-08: Ngày cấp CCCD phải sau ngày sinh 15 năm<br>\- BR\-09: SĐT người thân không được trùng với SĐT đăng ký<br>\- BR\-13: Mỗi số điện thoại và CCCD chỉ đăng ký được 1 tài khoản <br>\- BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)<br>\- BR\-73: <br>1. Khi người dùng mới đăng ký thì thông tin cơ bản bao gồm Họ tên, email, số điện thoại, mật khẩu và xác nhận mật khẩu\. Và xác nhận tài khoản đăng ký bằng mã OTP \(Optional\)<br>2. Sau khi đăng ký thành công, log in sẽ truy cập vào trang Mã giới thiệu hoặc đăng ký ứng viên\. <br>- Sau khi nhập mã giới thiệu thì sẽ trở về trang chủ<br>- Đăng ký ứng viên thì sẽ có 2 lựa chọn xác thực tài khoản ngay lập tức hoặc truy cập vào trang chủ<br>Người dùng sẽ được xem các chức năng cơ bản trong trang chủ, xem thông báo vụ chốt, các chức năng trong trang cá nhân\. Khi chưa xác thực tài khoản thì sẽ có nút xác thực tài khoản, khi đã xác thực xong thì nút Xác thực tài khoản sẽ chuyển thành Chỉnh sửa hồ sơ\. Và người dùng sẽ được vào danh sách chờ xác thức tài khoản<br>Nếu chưa xác thực tài khoản, khi vào trang chủ sẽ có pop up "Bạn cần xác thực tài khoản để sử dụng đầy đủ các chức năng", pop up có thể tắt đi và khi bấm xác thực thì sẽ chuyển sang trang xác thực tài khoản|||
|Tin nhắn thông báo :|\- MSG01: *Cần nhập mục này\!*<br>\- MSG02: *Cần nhập số điện thoại\!*<br>\- MSG03: *CCCD chưa hợp lệ*<br>\- MSG04: *Email chưa hợp lệ\!*<br>\- MSG05: *Số điện thoại chưa hợp lệ\!*<br>\- MSG06: *Cần nhập mật khẩu\!*<br>\- MSG07: *Cần nhập ít nhất 6 ký tự\!*<br>\- MSG08: *Cần xác nhận lại mật khẩu\!*<br>\- MSG09: *Nhập lại mật khẩu không hợp lệ\!*|||

*Activity **\& Sequence Diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng nhập thông tin và bấm nút đăng ký|Người dùng đăng ký tài khoản<br>||Authentication, Account, Profile|Validation||
|||Validattion: Xảy ra khi người dùng nhập sai thông tin|Hệ thống không tạo tại khoản do người dùng nhập thông tin chưa hợp lệ||<br>|||

### Quên mật khẩu 

*Đặc tả use case*

|Use case ID:|UC\-1\.3|Tên use case:|Quên mật khẩu|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|10/05/2024|
|Các tác nhân chính:|User|Figma:|[UI Quên mật khẩu](https://www.figma.com/design/mGXrcpLBZEhKUxxFXMSt9r/Web-UI-Kho-Nh%C3%A0-Ph%E1%BB%91?node-id=1577-77236&t=JunmO4vlN6FjuwHb-1)|
|Mô tả:|User được cấp lại mật khẩu mới của account chính chủ trong trường hợp bị quên mật khẩu|||
|Điều kiện trước:|Thiết bị của người dùng được kết nối internet khi đăng nhập|||
|Luồng chính:|1\. Người dùng truy cập vào hệ thống [https://khonhapho\.vn](https://khonhapho.vn/)<br>2\. Người dùng Click vào "Quên mật khẩu"<br>3\. Hệ thống chuyển hướng đến form điền email<br>4\. Người dùng điền email đã đăng ký và chọn lệnh Gửi<br>5\. Hệ thống kiểm tra tài khoản trong CSDL<br>5\.1 Nếu thông tin sai, người dùng quay lại bước 4 điền email<br>5\.2 Nếu thông tin khớp CSDL, hệ thống gửi email link thay đổi mật khẩu<br>5\.2\.1 Người dùng kiểm tra email và truy cập vào link trong email<br>5\.2\.2 Hệ thống chuyển hướng đến form đổi mật khẩu<br>5\.2\.3 Người dùng nhập mật khẩu mới và xác nhận mật khẩu, sau đó thực hiện lệnh Đặt mật khẩu mới<br>5\.2\.4 Hệ thống định dạng mật khẩu<br>5\.2\.4\.1 Nếu thông tin sai, người dùng quay lại bước 5\.2\.3 Nhập mật khẩu mới<br>5\.2\.4\.2 Nếu thông tin đúng, hệ thống cập nhật CSDL và chuyển hướng đến màn hình đăng nhập|||
|Luồng ngoại lệ:|5\.1\.1 Mỗi email chỉ được sử dụng cho 1 tài khoản<br>5\.2\.4\.1\.1 Nhập mật khẩu theo đúng yêu cầu định dạng \(số, chữ cái \)|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|- BR\-04: Mật khẩu phải là cả chữ cả số<br>- BR\-05: Mật khẩu tối thiểu 6 ký tự, tối đa 32 ký tự<br>- BR\-07: Email phải đúng định dạng<br>- BR\-58: Email giới hạn 50 ký tự|||
|Tin nhắn thông báo :|\- MSG04: *Email chưa hợp lệ\!*<br>\- MSG12: *Không tồn tại tài khoản này trên hệ thống\!*<br>\- MSG66: *Cần nhập email*<br>\- MSG67: *Tài khoản không có trên hệ thống*|||

*Activity **\& Sequence Diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|EP07<br>||Xảy ra khi người bám nút quên mật khẩu và nhập email|Người dùng quên mật khẩu<br>||Authentication|Validation||
|<br>||Validation: Xảy ra khi người dùng nhập sai email|Hệ thống tạo thông báo lỗi||Authentication<br>|||
|EP08||Xảy ra khi người dùng đúng định dạng email và có tồn tại trong hệ thống|Hệ thống gửi link đổi mật khẩu về email người dùng\. Link có tác dụng trong vòng 10 phút||Authentication|||
|EP09||Xảy ra khi người dùng nhập mã xác thực gửi về email|Người dùng nhập mã xác thực gửi về email||Authentication|Validation||
|||Validation: Xảy ra khi người dùng nhập sai mã xác thực|Hệ thống thông báo lỗi mã xác thực không hợp lệ||Authentication|||
|EP10<br>||Xảy ra khi người dùng nhập thông tin và bấm nút Đổi mật khẩu|Người dùng đổi mật khẩu và xác nhận mật khẩu mới bằng đường link hệ thống đã gửi||Authentication|Validation||
|||Validation: Xảy ra khi hệ thống báo mật khẩu không hợp lệ|Hệ thống tạo thông báo lỗi mật khẩu||Authentication|||



## **Trang chủ**

*Use case design*

### Tab bảng tin

#### Search feed trang chủ

*Đặc tả use case*

|Use case ID:|UC\-2\.1\.1|Tên use case:|**Search feed**|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|22/04/2024|
|Các tác nhân chính:|User|Figma:|[UI Bảng tin](https://www.figma.com/design/mGXrcpLBZEhKUxxFXMSt9r/Web-UI-Kho-Nh%C3%A0-Ph%E1%BB%91?node-id=989-54202&t=JunmO4vlN6FjuwHb-1)|
|Mô tả:|Tìm kiếm thông tin|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Trang chủ|||
|Luồng chính:|1\. Người dùng Đăng nhập vào Trang chủ<br>2\. Người dùng điền từ khóa cần tìm kiếm vào textbox tìm kiếm và chọn lệnh Tìm kiếm<br>3\. Hệ thống chọn lọc thông tin có chứa từ khoá và hiển thị nội dung tương ứng|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng không thành công, từ khóa tìm kiếm trong hệ thống không đúng so với thông tin được lưu trong CSDL|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|\- BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :||||

*Activity **\& Sequence Diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng tìm kiếm feed theo từ khoá|Người dùng tìm kiếm feeds theo từ khoá <br>||<br>|Filter and return result||



#### Tương tác bài viết trang chủ

*Đặc tả use case*

|Use case ID:|UC\-2\.1\.2|Tên use case:|**Tương tác bài viết**|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|23/04/2024|
|Các tác nhân chính:|User|Figma:|N/A|
|Mô tả:|Cho phép người dùng tương tác bài viết trên hệ thống|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Trang chủ|||
|Luồng chính:|1\. Người dùng Đăng nhập vào hệ thống<br>2\. Người dùng thực hiện Tìm kiếm bài viết<br>3\. Người dùng lựa chọn 1 trong 3 option Bình luận, Thích, Chia sẻ<br>4\. Hệ thống lưu thông tin vào CSDL|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng không thành công, từ khóa tìm kiếm trong hệ thống không đúng so với thông tin được lưu trong CSDL|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|\- BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :|\- MSG17: *Đã sao chép liên kết*|||

*Activity **\& Sequence Diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng ấn nút thích người viết|Người dùng thích bài viết<br>|||Update, Log||
|||Xảy ra khi người dùng ấn nút thích lần nữa|Người dùng bỏ thích bài viết|||Update, Log||
|||Xảy ra khi người nhập và ấn nút bình luận|Người dùng bình luận bài viết|||Update, Log||
|||Xảy ra khi người dùng ấn nút xoá bình luận|Người dùng xoá bình luận bài viết|||Update, Log||
|||Xảy ra khi người dùng nhập lại bình luận và ấn sửa|Người dùng sửa bình luận bài viết|||Update, Log||

#### Ghim bài viết trang chủ

*Đặc tả use case*

|Use case ID:|UC\-2\.1\.3|Tên use case:|**Ghim bài viết**|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|23/04/2024|
|Các tác nhân chính:|User|Figma:|N/A|
|Mô tả:|Ghim bài viết|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Trang chủ|||
|Luồng chính:|1\. Người dùng Đăng nhập vào Trang chủ<br>2\. Người dùng thực hiện Tìm kiếm bài viết cần ghim<br>3\. Hệ thống sẽ hiển thị bài viết tìm kiếm<br>4\. Người dùng chọn lệnh Ghim bài viết<br>5\. Hệ thống lưu thông tin vào CSDL và ghim bài viết lên đầu Trang chủ|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|\- MSG14: *Cập nhật thành công\!*|||

*Activity **\& Sequence Diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký ấn nút ghim bài viết|Thư ký ghim bài viết<br>|Role thư ký trở lên||Create,<br>Log||
|||xảy ra khi thư ký bỏ ghim bài viết|Thư ký bỏ ghim bài viết|Role thư ký trở lên||Delete,<br>Log||
|||Xảy khi khi thư ký sắp xếp, cập nhật vị trí bài ghim|Thư ký sắp xếp vị trí bài ghim|Role thư ký trở lên||Update,<br>Log||



### Tab bạn quan tâm

*Đặc tả use case*

|Use case ID:|UC\-2\.2|Tên use case:|**Tab bạn quan tâm**|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|23/04/2024|
|Các tác nhân chính:|User|Figma:|[UI Bạn quan tam](https://www.figma.com/design/mGXrcpLBZEhKUxxFXMSt9r/Web-UI-Kho-Nh%C3%A0-Ph%E1%BB%91?node-id=989-54202&t=JunmO4vlN6FjuwHb-1)|
|Mô tả:|Người dùng lựa chọn tiêu chí mình quan tâm|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Trang chủ|||
|Luồng chính:|1\. Người dùng Đăng nhập vào Trang chủ<br>2\. Người dùng chọn mục Bạn quan tâm<br>2\.1 Nếu truy cập lần đầu thì sẽ hiển thị chú ý<br>3\. Hệ thống sẽ hiển thị form lọc tiêu chí<br>4\. Người dùng chọn tiêu chí phù hợp và chọn lệnh Cập nhật<br>5\. Hệ thống lọc các bài viết chứa các từ khóa trong tiêu chí và hiển thị các bài viết phù hợp với tiêu chí|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng không thành công, tiêu chí  trong hệ thống không đúng so với thông tin được cập nhật|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|\- MSG14: Cập nhật thành công|||

*Activity **\& Sequence Diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng chọn tiêu chí phù hợp và ấn cập nhật|Người dùng lọc tin theo tiêu chí|Role học viên trở lên||Filter||
|||Filter xảy ra khi người dùng submit form tiêu chí tìm kiếm|Hệ thống thực hiện lọc tiêu chí tìm kiếm|||||



## Feed \(Khách cần mua gấp \- Tin hoạt động \- Thư viện nhà Phố\)

*Use case design*

### Search feed

*Đặc tả use case*

|Use case ID:|UC\-4\.1|Tên use case:|**Search feed**|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|24/04/2024|
|Các tác nhân chính:|User |Figma:|N/A|
|Mô tả:|Tìm kiếm feed|||
|Điều kiện trước:|Người dùng đăng nhập vào Trang chủ|||
|Luồng chính:|1. Người dùng Đăng nhập thành công vào Trang chủ<br>2. Người dùng chọn Khách cần mua gấp <br>3. Người dùng điền từ khoá cần tìm kiếm vào textbox tìm kiếm và chọn lệnh Tìm kiếm<br>4. Hệ thống lọc thông tin có chứa các từ khoá và hiển thị nội dung tương ứng với từ khoá|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng không thành công, các tiêu chí tìm kiếm không đúng so với thông tin được lưu trong hệ thống|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|\- BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :||||

*Activity **\& Sequence Diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE03||Xảy ra khi người dùng nhập keyword và submit|Người dùng tìm kiếm feed theo keyword<br>||Khách cần mua gấp, Tin hoạt động, Thư viện Nhà Phố|Filter||
||UE03H1|`Filter`|Hệ thống lọc bài viết theo keyword||Khách cần mua gấp|||

### **Tạo bài viết**

*Đặc tả use case*

|Use case ID:|UC\-4\.2|Tên use case:|**Tạo bài viết**|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|24/04/2024|
|Các tác nhân chính:|User |Figma:|N/A|
|Mô tả:|Tạo bài viết|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào trang Khách cần mua gấp|||
|Luồng chính:|1\. Người dùng Đăng nhập thành công và truy cập vào trang Khách hàng cần mua gấp<br>2\. Người dùng chọn Tạo bài viết<br>3\.Người dùng nhập thông tin và chọn lệnh Đăng tin<br>4\. Hệ thống xác thực thông tin <br>4\.1 Nếu thông tin sai, người dùng quay lại bước 3 nhập thông tin<br>4\.2 Nếu thông tin đúng, hệ thống lưu thông tin vào CSDL và chờ duyệt<br>4\.2\.1 Nếu tin bị từ chối, hệ thống gửi thông báo bài viết bị từ chối <br>4\.2\.2 Nếu tin được duyệt, hệ thống đẩy bài viết lên Khách cần mua gấp và gửi thông báo tin được duyệt <br>5\. Người dùng đọc thông báo|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng không thành công, bài viết được tạo không đúng so với thông tin được lưu trong hệ thống|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-11: Mục Yêu cầu không được nhập quá 1000 ký tự|||
|Tin nhắn thông báo :|\- MSG16: *Bạn cần chọn mục này*<br>\- MSG18: *Thêm tin đăng thành công*|||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng nhập thông tin và submit|Người dùng tạo bài viết khách cần mua gấp|Role học viên trở lên|Khách cần mua gấp|Validate,<br>Create,<br>Log||
||||GĐKV trở lên Tạo newsfeed chi nhánh|||||
||||Trợ lý trở lên Tạo newsfeed phòng ban|||||
||||Thư ký trở lên Tạo newsfeed công ty|||||
||||Trợ lý, Trưởng phòng trở lên Tạo newsfeed khối|||||
||||Trưởng nhóm và Trợ lý Tạo newsfeed nhóm|||||
||||Thư ký ban đào tạo tạo feed đào tạo|||||
||||Thư ký ban đào tạo tạo feed quy định và hướng dẫn|||||
||||Thư ký ban đào tạo tạo feed đầu chủ|||||
||||Thư ký ban đào tạo tạo feed trợ lý|||||
||||Thư ký ban đào tạo tạo feed thư viện kiến thức|||||
||||User ban đào tạo tạo feed chia sẻ kỹ năng|||||
||||User Tạo newsfeed Thông báo vụ chốt chờ xét duyệt nội dung|||||
|||`Validate`|Hệ thống kiểm tra dữ liệu người dùng submit có phù hợp|||||
|||`Create`|Hệ thống tạo và lưu bài viết vào cơ sở dữ liệu|||||
|||`Log`|Hệ thống lưu lại phần log vào cơ sở dữ liệu|||||

### **Tương tác bài viết**

*Đặc tả use case*

|Use case ID:|UC\-4\.3|Tên use case:|**Tương tác bài viết**|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|25/04/2024|
|Các tác nhân chính:|User |Figma:|N/A|
|Mô tả:|Tương tác bài viết|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào trang Khách cần mua gấp|||
|Luồng chính:|1\. Người dùng Đăng nhập thành công và truy cập vào trang Khách cần mua gấp<br>2\. Người dùng Tìm kiếm bài viết : chọn 1 trong 3 options Bình luận, Thích, Chia sẻ<br>4\. Hệ thống lưu thông tin vào CSDL|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng không thành công, bài viết tìm kiếm không đúng so với thông tin được lưu trong hệ thống|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|\- MSG17: *Đã sao chép liên kết*|||

*Activity **\& Sequence Diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng ấn thích bài viết|Người dùng thích bài viết||Thích|Create,<br>Log||
|||Xày ra khi người dùng ấn thích lần nữa|Người dùng bỏ thích bài viết||Thích|Delete,<br>Log||
|||Xảy ra khi người dùng nhập nội dung bình luận và submit|Người dùng bình luận bài viết||Bình luận|Create,<br>Log||
|||Xảy ra khi người dùng chỉnh sửa lại nội dung bình luận|Người dùng sửa bình luận bài viết||Bình luận|Update,<br>Log||

### **Ghim bài viết**

*Đặc tả use case*

|Use case ID:|UC\-4\.4|Tên use case:|**Ghim bài viết**|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|02/05/2024|
|Các tác nhân chính:|User |Figma:|N/A|
|Mô tả:|Ghim bài viết|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào trang Khách cần mua gấp|||
|Luồng chính:|1\. Người dùng Đăng nhập thành công và truy cập vào trang Khách cần mua gấp<br>2\. Người dùng Tìm kiếm bài viết cần ghim<br>3\. Hệ thống hiển thị bài viết tìm kiếm<br>4\. Người dùng chọn lệnh Ghim bài viết<br>5\. Hệ thống lưu thông tin vào CSDL, ghim bài viết lên đầu trang Khách cần mua gấp|||
|Luồng ngoại lệ:|2\.1 Người dùng thực hiện chức năng không thành công, bài viết tìm kiếm không đúng so với thông tin được lưu trong hệ thống<br>4\.1 Người dùng thực hiện chức năng không thành công, bài viết không được ghim lên đầu feed|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|\- BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :|\- MSG14: *Cập nhật thành công\!*|||

*Activity **\& Sequence Diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký ấn nút ghim bài viết|Thư ký Ghim feed trang chủa<br>|Role thư ký trở lên|Ghim|Create,<br>Log||
||||Thư ký trở lên Ghim feed công ty|||||
||||Thư ký trở lên Ghim feed chi nhánh|||||
||||Trưởng phòng trở lên Ghim feed phòng ban|||||
||||Trưởng nhóm Ghim feed nhóm|||||
||||Thư ký đào tạo Ghim feed đào tạo|||||
||||Ghim feed khách cần mua gấp|||||
||||Ghim feed quy định và hướng dẫn|||||
||||Thư ký đào tạo Ghim feed thư viện kiến thức|||||
||||Thư ký đào tạo Ghim feed thư viện đầu chủ|||||
||||Thư ký đào tạo Ghim feed thư viện trợ lý|||||
|||`Create`|Hệ thống lưu bài viết đã ghim vào cơ sở dữ liệu|||||
|||xảy ra khi thư ký bỏ ghim bài viết|Thư ký bỏ ghim bài viết|Role thư ký trở lên|Khách cần mua gấp|Delete,<br>Log||
|||`Delete`|Hệ thống xoá bài viết đã ghim trong cơ sở dữ liệu|||||
|||Xảy khi khi thư ký sắp xếp, cập nhật vị trí bài ghim|Thư ký sắp xếp vị trí bài ghim|Role thư ký trở lên|Khách cần mua gấp|Update,<br>Log||
|||`Update`|Hệ thống cập nhật giá trị thứ tự bài viết đã ghim trong cơ sở dữ liệu|||||

### **Chỉnh sửa bài viết**

*Đặc tả use case*

|Use case ID:|UC\-4\.1\.1|Tên use case:|**Chỉnh sửa bài viết**|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|02/05/2024|
|Các tác nhân chính:|User |Figma:|N/A|
|Mô tả:|Chỉnh sửa bài viết|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào trang chủ|||
|Luồng chính:|1\. Người dùng Đăng nhập thành công và truy cập vào trang chủ<br>2\. Người dùng chọn Khách cần mua gấp và điền từ khoá cần tìm kiếm vào textbox tìm kiếm, sau đó chọn lệnh Tìm kiếm<br>3\. Hệ thống lọc thông tin có chứa từ khoá và hiển thị nội dung tương ứng với từ khoá<br>4\. Người dùng ấn icon \[\.\.\.\] ở góc bài viết và chọn lệnh Chỉnh sửa bài viết <br>5\. Hệ thống hiển thị form chỉnh sửa<br>6\. Người dùng điều chỉnh bài viết phù hợp và chọn lệnh Đăng tin<br>7\. Hệ thống định dạng thông tin<br>7\.1 Nếu thông tin sai, người dùng quay lại bước 6 điều chỉnh bài viết phù hợp<br>7\.2 Nếu thông tin đúng, hệ thống lưu vào CSDL và chờ duyệt|||
|Luồng ngoại lệ:|2\.1 Người dùng thực hiện chức năng không thành công, bài viết tìm kiếm hoặc thông tin điều chỉnh không đúng so với thông tin được lưu trong hệ thống|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|- BR\-11: Mục Yêu cầu không được nhập quá 1000 ký tự<br>- BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :|\- MSG14: *Cập nhật thành công\!*|||

*Activity **\& Sequence Diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người đùng điều chỉnh lại bài viết và submit|User Cập nhật Khách cần mua gấp|Role học viên trở lên|Khách cần mua gấp|Validate,<br>Update,<br>Log||
||||User Cập nhật vụ chốt|||||
||||GĐKV Trở lên cập nhật feed chi nhánh|||||
||||Thư ký trở lên cập nhật feed công ty|||||
||||Trợ lý, Trưởng phòng trở lên cập nhật feed khối|||||
||||Trợ lý trở lên cập nhật feed phòng|||||
||||Trưởng nhóm, Trợ lý cập nhật feed nhóm|||||
||||Thư ký ban đào tạo Cập nhật feed đào tạo|||||
||||Thư ký ban đào tạo Cập nhật feed quy định và hướng dẫn|||||
||||Thư ký ban đào tạo Cập nhật feed đầu chủ|||||
||||Thư ký ban đào tạo Cập nhật feed trợ lý|||||
||||Thư ký ban đào tạo Cập nhật feed thư viện kiến thức|||||
||||User ban đào tạo Cập nhật feed chia sẻ kỹ năng|||||
|||`Validate`<br>|Hệ thống kiểm tra thông tin chỉnh sửa có phù hợp|||||
|||`Update`|Hệ thống cập nhật thông tin bài viết vào cơ sở dữ liệu|||||
|||`Log`|Hệ thống ghi lại log vào cơ sở dữ liệu|||||

### **Xoá bài viết**

*Đặc tả use case*

|Use case ID:|UC\-4\.1\.2|Tên use case:|**Xoá bài viết**|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|02/05/2024|
|Các tác nhân chính:|User |Figma:|N/A|
|Mô tả:|Xoá bài viết|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào trang chủ|||
|Luồng chính:|1\. Người dùng Đăng nhập thành công và truy cập vào trang chủ<br>2\. Người dùng chọn Khách cần mua gấp và điền từ khoá cần tìm kiếm vào textbox tìm kiếm, sau đó chọn lệnh Tìm kiếm<br>3\. Hệ thống lọc thông tin có chứa từ khoá và hiển thị nội dung tương ứng với từ khoá<br>4\. Người dùng ấn icon \[\.\.\.\] ở góc bài viết và chọn lệnh Xoá bài viết <br>5\. Hệ thống hiển thị pop\-up xác nhận xoá<br>6\.1 Nếu người dùng Đồng ý, hệ thống xoá khỏi CSDL và thông báo xoá thành công<br>6\.2 Nếu người dùng Huỷ thì kết thúc chương trình|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng không thành công, bài viết tìm kiếm không đúng so với thông tin được lưu trong hệ thống|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|\- BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :|\- MSG21: *Bạn muốn xóa bài viết này?*<br>\- MSG22: *Xoá thành công*|||

*Activity **\& Sequence Diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người đùng ấn xoá bài viết|Người dùng xoá bài viết Khách cần mua gấp<br>||Khách cần mua gấp|Delete,<br>Log||
|||`Delete`|Hệ thống đổi trạng thái bài viết thành đã xoá|||||
|||`Log`|Hệ thống lưu lại log vào cơ sở dữ liệu|||||
|||Xảy ra khi thư ký trực tiếp gỡ bài trên feeds|Thư ký gỡ bài viết Khách cần mua gấp ngay trên trang \(NEW\)<br>|Role thư ký trở lên|Khách cần mua gấp|Delete,<br>Log||

### **Khoá bình luận**

*Đặc tả use case*

|Use case ID:|UC\-4\.1\.3|Tên use case:|**Khoá bình luận**|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|02/05/2024|
|Các tác nhân chính:|User |Figma:|N/A|
|Mô tả:|Khoá bình luận|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào trang chủ|||
|Luồng chính:<br>|1\. Người dùng Đăng nhập thành công và truy cập vào trang chủ<br>2\. Người dùng chọn Khách cần mua gấp và điền từ khoá cần tìm kiếm vào textbox tìm kiếm, sau đó chọn lệnh Tìm kiếm<br>3\. Hệ thống lọc thông tin có chứa từ khoá và hiển thị nội dung tương ứng với từ khoá<br>4\. Người dùng ấn icon  \[\.\.\.\] ở góc bài viết và chọn lệnh Khoá bình luận<br>5\. Hệ thống khoá bình luận của bài viết và thông báo khoá thành công|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng không thành công, bài viết tìm kiếm không đúng so với thông tin được lưu trong hệ thống|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|\- BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :|\- MSG19: *Khóa bình luận bài viết thành công\!*<br>\- MSG20: *Mở khóa bình luận bài viết thành công\!*|||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng khoá bình luận bài viết bài viết|Người dùng Khoá/Mở khoá bình luận bài viết của chính mình<br>||Khách cần mua gấp|Update,<br>Log||
|||`Update`|Hệ thống cập nhật trạng thái bình luận của bài viết|||||
|||`Log`|Hệ thống lưu lại log vào cơ sở dữ liệu|||||

## Danh sách Công ty

*Use case design*

### Lọc Danh sách Công ty

*Đặc tả use case*

|Use case ID:|UC \- 7\.1|Tên use case:|**Lọc Danh sách công ty**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|08/05/2024|
|Các tác nhân chính:|User|Figma:|[UI Danh sách công ty ](https://www.figma.com/design/mGXrcpLBZEhKUxxFXMSt9r/Web-UI-Kho-Nh%C3%A0-Ph%E1%BB%91?node-id=1242-79585&t=JunmO4vlN6FjuwHb-1)|
|Mô tả:|Cho phép người dùng lọc và xem danh sách nhân sự công ty|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào tab Danh sách công ty|||
|Luồng chính:|1\. Người dùng truy cập vào "Danh sách công ty"<br>2\. Hệ thống chuyển tới "Danh sách công ty"<br>3\. Người dùng chọn các tiêu chí lọc phù hợp<br>4\. Hệ thống lọc danh sách nhân sự theo các tiêu chí đã chọn, Hiển thị danh sách tương ứng|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng lọc không thành công, không có nhân sự phù hợp với tiêu chí lọc đã chọn|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người đùng filled in form và submit|Người dùng lọc danh sách nhân sự theo tiêu chí mong mu|Role học viên trở lên|Danh sách công ty|Filter||
|||`Filter`|Hệ thống lọc keyword và trả ra kết quả cho người dùng|||||

### Tìm kiếm danh sách công ty

*Đặc tả use case*

|Use case ID:|UC \- 7\.2|Tên use case:|**Tìm kiếm DS công ty**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|08/05/2024|
|Các tác nhân chính:|User|Figma:|N/A|
|Mô tả:|Cho phép người dùng tìm kiếm và xem danh sách nhân sự công ty|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào tab Danh sách công ty|||
|Luồng chính:|1\. Người dùng truy cập vào "Danh sách công ty"<br>2\. Hệ thống chuyển tới "Danh sách công ty"<br>3\. Người dùng điền từ khoá cần tìm kiếm vào searchbox, Thực hiện Tìm kiếm<br>4\. Hệ thống lọc thông tin có chứa từ khoá và hiển thị nội dung tương ứng|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng tìm kiếm không thành công, từ khoá tìm kiếm không đúng so với thông tin trên hệ thống |||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người đùng điền từ khoá và submit|Người dùng tìm kiếm thành viên khác trong danh sách công ty|Role học viên trở lên|Danh sách công ty|Filter||
|||`Filter`|Hệ thống lọc keyword và trả ra kết quả cho người dùng|||||

### Xem trang cá nhân thành viên

*Đặc tả use case*

|Use case ID:|UC \- 7\.3|Tên use case:|**Xem trang cá nhân TV**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|08/05/2024|
|Các tác nhân chính:|User|Figma:|N/A|
|Mô tả:|Cho phép người dùng xem trang cá nhân của nhân viên công ty|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào tab Danh sách công ty|||
|Luồng chính:|1\. Người dùng truy cập vào "Danh sách công ty"<br>2\. Hệ thống chuyển tới "Danh sách công ty"<br>3\. Người dùng thực hiện tìm kiếm nhân viên bất kỳ<br>4\. Hệ thống hiển thị các kết quả tương ứng với từ khoá tìm kiếm<br>5\. Người dùng bấm chọn Tên hoặc Avatar của nhân viên<br>6\. Hệ thống chuyển hướng đến trang cá nhân của nhân viên|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng ghim bài viết không thành công, từ khoá tìm kiếm không đúng so với thông tin trên hệ thống |||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :||||

*Activity diagram*

## Tài khoản cá nhân

*Use case design*

### Xem quản lý khách

#### Thêm thông tin khách

*Đặc tả use case*

|Use case ID:|UC \- 9\.1\.1|Tên use case:|**Thêm thông tin khách**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|08/05/2024|
|Các tác nhân chính:|User|Figma:|[UI Quản lý khách](https://www.figma.com/design/mGXrcpLBZEhKUxxFXMSt9r/Web-UI-Kho-Nh%C3%A0-Ph%E1%BB%91?node-id=1396-275773&t=JunmO4vlN6FjuwHb-1)|
|Mô tả:|Cho phép người dùng thêm thông tin khách hàng |||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Tài khoản cá nhân \-\> QL khách \- Tự khớp khách|||
|Luồng chính:|1\. Người dùng truy cập vào "Tài khoản cá nhân", Chọn "QL khách\- Tự khớp khách"<br>2\. Hệ thống chuyển hướng đến "QL khách\- Tự khớp khách"<br>3\. Người dùng chọn nút “Thêm mới”<br>4\. Hệ thống hiển thị form điền thông tin khách hàng<br>5\. Người dùng nhập thông tin khách hợp lệ, Bấm chọn "Thêm"<br>6\. Hệ thống lưu định dạng thông tin, lưu vào CSDL|||
|Luồng ngoại lệ:|Hệ thống thông báo thông tin nhập sai và yêu cầu người dùng nhập lại|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-01: SĐT hoặc CCCD không được bỏ trống<br>BR\-02: SĐT phải đúng định dạng 0xx<br>BR\-06: Họ và tên không được quá 50 ký tự<br>BR\-08: Ngày cấp CCCD phải sau ngày sinh 15 năm<br>BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)<br>BR\-21: Ý kiến đầu khách nhập tối đa 500 ký tự<br>BR\-22: Tài chính tối thiểu của khách nhập từ 200\.000\.000 đổ lên|||
|Tin nhắn thông báo :|MSG01: *Cần nhập mục này\!*<br>MSG02: *Cần nhập số điện thoại\!*<br>MSG03: *CCCD chưa hợp lệ*<br>MSG11: *Cần nhập số điện thoại hoặc CCCD\!*|||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng thêm thông tin khách hàng|User thêm thông tin khách hàng trong Quản lý khách hàng||<br>|validate||
|||Validate: Xảy ra khi người dùng nhập sai các trường thông tin|Hệ thống từ chối thêm thông tin khách do người dùng nhập sai thông tin|||logging||

#### Search khách

*Đặc tả use case*

|Use case ID:|UC \- 9\.1\.2|Tên use case:|**Search khách**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|08/05/2024|
|Các tác nhân chính:|User|Figma:|N/A|
|Mô tả:|Cho phép người dùng tìm kiếm và xem thông tin khách hàng|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Tài khoản cá nhân \-\> QL khách \- Tự khớp khách|||
|Luồng chính:|1\. Người dùng truy cập vào "Tài khoản cá nhân", Chọn "QL khách\- Tự khớp khách"<br>2\. Hệ thống chuyển hướng đến "QL khách\- Tự khớp khách"<br>3\. Người dùng điền từ khoá cần tìm kiếm vào searchbox, Thực hiện Tìm kiếm<br>4\. Hệ thống lọc thông tin có chứa từ khoá và hiển thị nội dung tương ứng|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng tìm kiếm không thành công, từ khoá tìm kiếm không đúng so với thông tin trên hệ thống |||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :||||

*Activity diagram*

#### **Xem thông tin chi tiết khách**

*Đặc tả use case*

|Use case ID:|UC \- 9\.1\.3|Tên use case:|**Xem thông tin chi tiết khách**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|08/05/2024|
|Các tác nhân chính:|User|Figma:|N/A|
|Mô tả:|Cho phép người dùng xem chi tiết thông tin khách hàng|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Tài khoản cá nhân \-\> QL khách \- Tự khớp khách|||
|Luồng chính:|1\. Người dùng truy cập vào "Tài khoản cá nhân", Chọn "QL khách\- Tự khớp khách"<br>2\. Hệ thống chuyển hướng đến "QL khách\- Tự khớp khách"<br>3\. Người dùng thực hiện tìm kiếm khách cần xem và điều chỉnh<br>3\.1\. Người dùng chọn Xem danh sách căn đã dẫn khách <br>3\.1\.1\. Hệ thống hiển thị danh sách căn đã dẫn khách<br>3\.2\. Người dùng chọn Tìm hàng phù hợp <br>3\.2\.1\. Hệ thống lọc theo yêu cầu, đưa ra danh sách hàng phù hợp<br>3\.3\. Người dùng chọn Chuyển trạng thái khách đã mua nhà <br>3\.3\.1\. Hệ thống lưu vào CSDL<br>3\.4\. Người dùng chọn Sửa thông tin<br>3\.4\.1\. Hệ thống hiển thị form điền thông tin khách hàng<br>3\.4\.2\. Người dùng nhập thông tin chỉnh sửa hợp lệ, Bấm chọn "Lưu"<br>3\.4\.3\. Hệ thống định dạng thông tin<br>3\.4\.3\.1\. Thông tin sai \-\> Hệ thống hiển thị lại form thông tin<br>3\.4\.3\.2\. Thông tin đúng \-\> Hệ thống lưu vào CSDL|||
|Luồng ngoại lệ:|Hệ thống thông báo input chưa hợp lệ và yêu cầu người dùng nhập lại|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-01: SĐT hoặc CCCD không được bỏ trống<br>BR\-02: SĐT phải đúng định dạng<br>BR\-06: Họ và tên không được quá 50 ký tự<br>BR\-08: Ngày cấp CCCD phải sau ngày sinh 15 năm<br>BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)|||
|Tin nhắn thông báo :|MSG01: *Cần nhập mục này\!*<br>MSG02: *Cần nhập số điện thoại\!*<br>MSG03: *CCCD chưa hợp lệ*<br>MSG11: *Cần nhập số điện thoại hoặc CCCD\!*|||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng xem thông tin chi tiết khách hàng|User xem thông tin khách hàng trong Quản lý khách hàng||<br>|validate||
|||Validate: Xảy ra khi người dùng nhập sai các trường thông tin|Hệ thống từ chối tạo tin đăng mới do người dùng nhập sai thông tin|||logging||

#### Lọc danh sách khách

*Đặc tả use case*

|Use case ID:|UC \- 9\.1\.4|Tên use case:|Lọc danh sách khách hàng|
|---|---|---|---|
|Tác giả:|NamNP|Ngày:|15/08/2024|
|Các tác nhân chính:|User|Figma:|N/A|
|Mô tả:|Cho phép người dùng lọc danh sách khách hàng của mình theo các tiêu chí|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Tài khoản cá nhân \-\> QL khách \- Tự khớp khách|||
|Luồng chính:|1. Người dùng truy cập vào "Tài khoản cá nhân", Chọn "QL khách\- Tự khớp khách"<br>2. Hệ thống chuyển hướng đến "QL khách\- Tự khớp khách"<br>3. Người dùng thực hiện lọc danh sách khách hàng theo tiêu chí<br>4. Hệ thống hiển thị danh sách theo tiêu chí người dùng đã chọn|||
|Luồng ngoại lệ:||||
|Ưu tiên:|Medium|||
|Tần suất sử dụng :|Medium|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần lọc danh sách khách hàng|User Tìm kiếm khách hàng bằng tiêu chí ||<br>|<br>||
|||Validate: Xảy ra khi người dùng nhập sai các trường thông tin|Hệ thống lọc keyword và trả ra kết quả cho người dùng|||logging||

### Xem danh sách lịch sử đặt lịch

*Đặc tả use case*

|Use case ID:|UC \- 9\.2|Tên use case:|**Xem danh sách lịch sử đặt lịch**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|08/05/2024|
|Các tác nhân chính:|User|Figma:|[UI Lịch sử đặt lịch](https://www.figma.com/design/mGXrcpLBZEhKUxxFXMSt9r/Web-UI-Kho-Nh%C3%A0-Ph%E1%BB%91?node-id=1443-71989&t=JunmO4vlN6FjuwHb-1)|
|Mô tả:|Cho phép người dùng xem danh sách lịch sử đặt lịch và trao đổi với khách hàng|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Tài khoản cá nhân |||
|Luồng chính:|1\. Người dùng truy cập vào "Tài khoản cá nhân", Chọn "Lịch sử đặt lịch"<br>2\. Hệ thống chuyển hướng đến "Lịch sử đặt lịch"<br>3\. Người dùng chọn "Lịch sử đặt lịch"<br>4\. Hệ thống chuyển hướng đến tab "Xem lịch sử đặt lịch"<br>5\. Người dùng chọn lịch sử đặt lịch cần xem <br>6\. Hệ thống hiển thị box chat để chat với đầu chủ<br>7\. Người dùng thực hiện chat với đầu chủ, Thêm hoặc Xoá bộ sticker từ đoạn chat<br>8\. Hệ thống lưu vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng xem danh sách lịch sử đặt lịch|Học viên trở lên xem lịch sử lịch hẹn dẫn khách đã tạo||<br>|||

### Xem danh sách lịch sử báo cáo

*Đặc tả use case*

|Use case ID:|UC \- 9\.3|Tên use case:|**Xem danh sách lịch sử báo cáo**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|08/05/2024|
|Các tác nhân chính:|User|Figma:|[UI Lịch sử báo cáo](https://www.figma.com/design/mGXrcpLBZEhKUxxFXMSt9r/Web-UI-Kho-Nh%C3%A0-Ph%E1%BB%91?node-id=1466-74642&t=JunmO4vlN6FjuwHb-1)|
|Mô tả:|Cho phép người dùng xem danh sách lịch sử báo cáo|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Tài khoản cá nhân |||
|Luồng chính:|1\. Người dùng truy cập vào "Tài khoản cá nhân", Chọn "Lịch sử báo cáo"<br>2\. Hệ thống chuyển hướng đến "Lịch sử báo cáo"<br>3\. Người dùng điền từ khoá cần tìm kiếm vào searchbox, Thực hiện Tìm kiếm<br>4\. Hệ thống lọc thông tin có chứa từ khoá và hiển thị nội dung tương ứng<br>5\. Người dùng chọn icon "\[\.\.\.\]" ở góc phải báo cáo <br>6\. Hệ thống hiển thị báo cáo chi tiết|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng không thành công, từ khoá tìm kiếm không đúng so với thông tin trên hệ thống|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng xem lịch sử báo cáo|User xem hàng đã báo cáo dẫn khách đi xem||<br>|||

### Xem bộ sưu tập

#### Thêm bộ sưu tập

*Đặc tả use case*

|Use case ID:|UC \- 9\.4\.1|Tên use case:|**Thêm bộ sưu tập**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|08/05/2024|
|Các tác nhân chính:|User|Figma:|[UI Bộ sưu tập](https://www.figma.com/design/mGXrcpLBZEhKUxxFXMSt9r/Web-UI-Kho-Nh%C3%A0-Ph%E1%BB%91?node-id=1466-79037&t=JunmO4vlN6FjuwHb-1)|
|Mô tả:|Cho phép người dùng xem bộ sưu tập|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Tài khoản cá nhân |||
|Luồng chính:|1\. Người dùng truy cập vào "Tài khoản cá nhân", Chọn "Bộ sưu tập"<br>2\. Hệ thống chuyển hướng đến "Bộ sưu tập"<br>3\. Người dùng chọn Bộ sưu tập<br>4\. Hệ thống chuyển hướng đến "Bộ sưu tập"<br>5\. Người dùng chọn "Tạo bộ sưu tập"<br>6\. Hệ thống hiển thị popup điền tên bộ sưu tập<br>7\. Người dùng nhập tên bộ sưu tập, Bấm chọn "Tạo"<br>8\. Hệ thống lưu bộ sưu tập đã tạo vào CSDL|||
|Luồng ngoại lệ:|Người dùng tạo bộ sưu tập không thành công, dữ liệu nhập không hợp lệ|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-19: Tên bộ sưu tập tối đa 50 ký tự|||
|Tin nhắn thông báo :|MSG64: *Thêm mới thành công\!*|||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng thêm bộ sưu tập|User tạo bộ sưu tập||<br>|validate||
|||Validate: Xảy ra khi người dùng nhập sai các trường thông tin|Hệ thống từ chối tạo mới bộ sưu tập mới do người dùng nhập sai thông tin|||logging||

#### Sửa bộ sưu tập

*Đặc tả use case*

|Use case ID:|UC \- 9\.4\.2|Tên use case:|**Sửa bộ sưu tập**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|08/05/2024|
|Các tác nhân chính:|User|Figma:|N/A|
|Mô tả:|Cho phép người dùng sửa bộ sưu tập|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Tài khoản cá nhân |||
|Luồng chính:|1\. Người dùng truy cập vào "Tài khoản cá nhân", Chọn "Bộ sưu tập"<br>2\. Hệ thống chuyển hướng đến "Bộ sưu tập"<br>3\. Người dùng chọn "Bộ sưu tập"<br>4\. Hệ thống chuyển hướng đến "Bộ sưu tập"<br>5\. Người dùng tìm kiếm bộ sưu tập, Chọn "\.\.\." góc phải BST<br>6\. Người dùng chọn Sửa bộ sưu tập<br>7\. Hệ thống hiển thị form sửa BST<br>8\. Người dùng chỉnh sửa BST, Bấm chọn "Lưu"<br>9\. Hệ thống cập nhật lưu vào CSLD |||
|Luồng ngoại lệ:|Người dùng sửa bộ sưu tập không thành công, dữ liệu nhập không hợp lệ|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-19: Tên bộ sưu tập tối đa 50 ký tự<br>BR\-45: Giới hạn ảnh upload là 5mb|||
|Tin nhắn thông báo :|MSG57: *Cập nhật thành công\!*|||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng sửa bộ sưu tập|User cập nhật bộ sưu tập||<br>|validate||
|||Validate: Xảy ra khi người dùng nhập sai các trường thông tin|Hệ thống từ chối cập nhật do người dùng nhập sai thông tin|||logging||

#### Xem chi tiết bộ sưu tập

*Đặc tả use case*

|Use case ID:|UC \- 9\.4\.3|Tên use case:|**Xem chi tiết bộ sưu tập **|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|08/05/2024|
|Các tác nhân chính:|User|Figma:|N/A|
|Mô tả:|Cho phép người dùng xem chi tiết bộ sưu tập|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Tài khoản cá nhân |||
|Luồng chính:|1\. Người dùng truy cập vào "Tài khoản cá nhân", Chọn "Bộ sưu tập"<br>2\. Hệ thống chuyển hướng đến "Bộ sưu tập"<br>3\. Người dùng chọn "Bộ sưu tập"<br>4\. Hệ thống chuyển hướng đến "Bộ sưu tập"<br>5\. Người dùng thực hiện tìm kiếm bộ sưu tập, CHọn hiển thị bộ sưu tập<br>5\.1\. Người dùng chọn Xem chi tiết tin đăng<br>5\.1\.1\. Hệ thống hiển thị chi tiết tin đăng<br>5\.2\. Người dùng chọn Gỡ tin khỏi BST<br>5\.2\.1\. Hệ thống hiển thị popup Xác nhận xoá<br>5\.2\.1\.1\. Người dùng chọn "ĐỒng ý" \-\> Xoá khỏi CSDL<br>5\.2\.1\.2\.\. Người dùng chọn "Huỷ" \-\> Kết thúc <br>5\.3\. Người dùng chọn Ghi chú tin<br>5\.3\.1\. Hệ thống hiển thị form ghi chú<br>5\.3\.2\. Người dùng nhập nội dung ghi chú, Bấm chọn "Lưu"<br>5\.3\.3\. Hệ thống lưu vào CSDL<br>5\.4\. Người dùng chọn Thêm vào bộ sưu tập khác<br>5\.4\.1\. Hệ thống hiển thị popup danh sách BST<br>5\.4\.2\. Người dùng chọn BST phù hợp<br>5\.4\.3\. Hệ thống lưu vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-18: Ghi chú bộ sưu tập tối đa 500 ký tự|||
|Tin nhắn thông báo :|MSG36: *Bạn muốn xóa bài viết này?*<br>MSG37: *Xoá thành công*|||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng xem thông tin chi tiết bộ sưu tập|User xem bộ sưu tập||<br>|||
|||||||||
|||Xảy ra khi người dùng thêm tin mới vào bộ sưu tập |User Thêm tin vào bộ sưu tập|||logging||
|||Xảy ra khi người dùng xoá tin khỏi bộ sưu tạp|User Gỡ tin khỏi bộ sưu tập|||logging||
|||Xảy ra khi người dùng muốn thêm ghi chú vào tin đã lưu|User thêm ghi chú vào tin đã lưu|||logging||

#### Xoá bộ sưu tập

*Đặc tả use case*

|Use case ID:|UC \- 9\.4\.4|Tên use case:|**Xoá bộ sưu tập**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|08/05/2024|
|Các tác nhân chính:|User|Figma:|N/A|
|Mô tả:|Cho phép người dùng xoá bộ sưu tập|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Tài khoản cá nhân |||
|Luồng chính:|1\. Người dùng truy cập vào "Tài khoản cá nhân", Chọn "Bộ sưu tập"<br>2\. Hệ thống chuyển hướng đến "Bộ sưu tập"<br>3\. Người dùng chọn Bộ sưu tập<br>4\. Hệ thống chuyển hướng đến "Bộ sưu tập"<br>5\. Người dùng tìm kiếm bộ sưu tập, Chọn "\.\.\." góc phải BST<br>6\. Người dùng chọn Xoá bộ sưu tập<br>7\. Hệ thống hiển thị popup Xác nhận xoá<br>7\.1\. Bấm chọn "Đồng ý" \-\> Hệ thống xoá bộ sưu tập khỏi CSDL<br>7\.2\. Bấm chọn "Huỷ" \-\> Kết thúc chương trình|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG65: *Xóa thành công\!*|||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng xoá bộ sưu tập|User xoá bộ sưu tập<br>|||logging||

### Xem trang cá nhân

*Đặc tả use case*

|Use case ID:|UC \- 9\.5|Tên use case:|**Chỉnh sửa trang cá nhân**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|08/05/2024|
|Các tác nhân chính:|User|Figma:|[UI Trang cá nhân](https://www.figma.com/design/mGXrcpLBZEhKUxxFXMSt9r/Web-UI-Kho-Nh%C3%A0-Ph%E1%BB%91?node-id=1535-74011&t=JunmO4vlN6FjuwHb-1)|
|Mô tả:|Cho phép người dùng chỉnh sửa trang cá nhân|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Tài khoản cá nhân |||
|Luồng chính:|1\. Người dùng truy cập vào "Tài khoản cá nhân"<br>2\. Người dùng chọn "Trang cá nhân"<br>3\. Hệ thống chuyển hướng đến "Trang cá nhân"<br>3\.1\. Người dùng chọn Chỉnh sửa avatar<br>3\.1\.1\. Hệ thống hiển thị Mở thư mục từ máy tính<br>3\.1\.2\. Người dùng chọn file ảnh làm avatar<br>3\.1\.3\. Hệ thống tải ảnh lên, lưu vào CSDL<br>3\.2\. Người dùng chọn Đổi mật khẩu<br>3\.2\.1\. Hệ thống hiển thị form đổi mật khẩu<br>3\.2\.2\. Người dùng nhập thông tin chỉnh sửa, Bấm chọn "Lưu"<br>3\.2\.3\. Hệ thống lưu vào CSDL<br>3\.3\. Người dùng chọn Chỉnh sửa hồ sơ<br>3\.3\.1\. Hệ thống hiển thị form chỉnh sửa hồ sơ<br>3\.3\.2\. Người dùng nhập thông tin chỉnh sửa, Bấm chọn "Lưu"<br>3\.3\.3\. Hệ thống lưu vào CSDL|||
|Luồng ngoại lệ:|3\.1\.4\. Người dùng chỉnh sửa avatar không thành công do file tải lên không đúng định dạng<br>3\.2\.4\.  Người dùng đổi mật khẩu không thành công do dữ liệu nhập không hợp lệ<br>3\.3\.4\. Người dùng chỉnh sửa hồ sơ không thành công do dữ liệu nhập không hợp lệ|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-01: SĐT hoặc CCCD không được bỏ trống<br>BR\-02: SĐT phải đúng định dạng<br>BR\-03:Địa chỉ thường chú và nơi ở hiện tại không quá 100 ký tự<br>BR\-06: Họ và tên không được quá 50 ký tự<br>BR\-07: Email phải đúng định dạng<br>BR\-08: Ngày cấp CCCD phải sau ngày sinh 15 năm<br>BR\-09: SĐT người thân không được trùng với SĐT đăng ký<br>BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)|||
|Tin nhắn thông báo :|MSG01: *Cần nhập mục này\!*<br>MSG02: *Cần nhập số điện thoại\!*<br>MSG03: *CCCD chưa hợp lệ*<br>MSG11: *Cần nhập số điện thoại hoặc CCCD\!*<br>MSG12: *Số điện thoại hoặc CCCD chưa chính xác\!*<br>MSG57: *Cập nhật thành công\!*|||

*Activity diagram*

### Hợp đồng điện tử \(New 2\.2\)

#### Hợp đồng hợp tác

*Đặc tả use case*

|Use case ID:|UC \- 9\.6\.1|Tên use case:|**Hợp đồng hợp tác**|
|---|---|---|---|
|Tác giả:|KhanhLinh \- QuynhAnh|Ngày:|04/07/2024|
|Các tác nhân chính:|User|Figma:|N/A|
|Mô tả:|Cho phép người dùng xem và ký hợp đồng hợp tác điện tử|||
|Điều kiện trước:|Người dùng được thay đổi chức vụ từ Học viên lên Chuyên viên và nhận được thông báo ký hợp đồng|||
|Luồng chính:|1\. Người dùng mở thông báo <br>2\. Hệ thống chuyển hướng đến Hợp đồng điện tử<br>3\. Hệ thống hiển thị Hợp đồng điện tử<br>4\. Người dùng đọc hợp đồng và tick chọn "Tôi đồng ý với điều khoản hợp đồng"<br>5\. Hệ thống lưu trữ hợp đồng vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

### Lịch học \(2\.2\)

### Lịch họp \(2\.2\)

## Quản lý đặt lịch

*Use case design*

### Thu hồi lịch hẹn

*Đặc tả use case*

|**Use case ID:**|UC \- 10\.1|**Tên use case:**|Thu hồi lịch hẹn|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|[UI Lịch hẹn dẫn khách](https://www.figma.com/design/mGXrcpLBZEhKUxxFXMSt9r/Web-UI-Kho-Nh%C3%A0-Ph%E1%BB%91?node-id=2300-57756&t=JunmO4vlN6FjuwHb-1)|
|**Mô tả:**|Người dùng thu hồi lịch đã đặt|||
|**Điều kiện trước:**|Người dùng đã đặt lịch xem nhà trước đó trong khoảng 30 phút|||
|**Luồng chính:**|1. Người dùng Chọn icon xem lịch ở thanh sidebar<br>2. Hệ thống Hiển thị lịch hẹn dẫn khách <br>3. Người dùng Ấn "Thu hồi"<br>4. Hệ thống Hiển thị popup xác nhận hành động<br>5. Người dùng Xác nhận hành động<br>6. Hệ thống Lưu vào CSDL và thông báo thành công cho đầu khách|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|BR\-27: Trước 30 phút, đầu khách được quyền thu hồi lịch hẹn|||
|**Tin nhắn thông báo :**|MSG\-62: Cập nhật trạng thái thành công\!|||

*Activity diagram*

### Xác nhận/Từ chối lịch hẹn

*Đặc tả use case*

|**Use case ID:**|UC \- 10\.2|**Tên use case:**|**Xác nhận/Từ chối**|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User \(Đầu chủ\)|**Figma:**|N/A|
|**Mô tả:**|Người dùng xác nhận hoặc từ chối đối với lịch đặt của đầu khách|||
|**Điều kiện trước:**|Người dùng đã đặt lịch xem nhà|||
|**Luồng chính:**|1\. Người dùng Chọn icon xem lịch ở thanh sidebar<br>2\. Hệ thống Hiển thị lịch hẹn dẫn khách <br>3\. Người dùng 1 trong 2 tuỳ chọn<br>4\. Hệ thống Hiển thị popup xác nhận hành động<br>5\. Người dùng Xác nhận hành động<br>6\. Hệ thống Lưu vào CSDL và thông báo thành công cho đầu chủ\. Gửi thông báo cho đầu khách|||
|**Luồng ngoại lệ:**|Hệ thống thông báo thông tin nhập sai và yêu cầu người dùng nhập lại|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|BR\-26: Trước 15 phút sau xác nhận, đầu chủ được quyền từ chối lịch hẹn|||
|**Tin nhắn thông báo :**|MSG\-62: Cập nhật trạng thái thành công\!|||

*Activity diagram*

#### Xem lịch sử đặt lịch

*Đặc tả use case*

|**Use case ID:**|UC \- 10\.2\.1|**Tên use case:**|Xem lịch sử chat đặt lịch|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|08/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Cho phép người dùng xem lại nội dung chat lịch hẹn|||
|**Điều kiện trước:**|Người dùng đã đặt lịch xem nhà|||
|**Luồng chính:**|1. Người dùng Truy cập vào "Tài khoản cá nhân" \- Chọn lịch sử đặt lịch<br>2. Hệ thống Chuyển hướng đến "Lịch sử đặt lịch"<br>3. Người dùng Chọn lịch sử đặt lịch cần xem<br>4. Hệ thống hiển thị Hiển thị boxchat <br>5. Người dùng Chat với đầu chủ<br>6. Người dùng chọn các option sticker<br>7. Hệ thống Lưu vào CSDL|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|BR\-50: Nội dung chat nhập giới hạn 3000 ký tự|||
|**Tin nhắn thông báo :**||||

*Activity diagram*

## Chat

*Use case design*

### *Screen design Chat ở trang chủ*

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Nút \(x\)|Button|||Bấm để tắt đoạn chat|
|2<br>|Avatar|Button|||Bấm để mở rộng tuỳ chọn|
|3|Thanh nhập nội dung|Textbox|||Bấm để nhập nội dung chat|
|4|Icon tim|Button|||Bấm để gửi icon tim|
|5|Icon ảnh|Button|||Bấm để mở cửa sổ chọn ảnh trên máy|
|6|Icon sticker|Button|||Bấm để mở khung sticker|
|7|Icon file|Button|||Bấm để mở cửa sổ chọn file trên máy|
|8|Icon mic|Button|||Bấm để mở khung ghi âm|
|9|Icon emoji|Button|||Bấm để mở khung emoji|

### *Screen design Chat*

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Tạo nhóm|Button|||Bấm để tạo nhóm|
|2<br>|Tìm kiếm|Textbox|||Bấm để nhập nội dung tìm kiếm|
|3|Tab Nhóm chat|Button|||Bấm để di chuyển sang tab nhóm chat|
|4|Tab Nhóm mặc định|Button<br>|||Bấm để di chuyển sang nhóm mặc định|
|5|Các card thông tin chat|Button|||Bấm để đi vào đoạn chat|
|6|Avatar|Button|||Bấm để đi vào phần mở rộng đoạn chat|
|7|Icon option|Button|||Bấm để mở thanh tuỳ chọn đối với đoạn chat|
|8|Tin nhắn|Button|||Giữ để tương tác với tin nhắn|
|9|Chia sẻ|Button|||Bấm để chia sẻ tin nhắn|
|10|Thanh chat|Textbox|||Bấm để nhập nội dung|
|11|Icon ảnh|Button|||Bấm để chọn ảnh trong thư viện máy|
|12|Icon sticker|Button|||Bấm để mở bộ sticker|
|13|Icon emoji|Button|||Bấm để mở bàn phím emoji|
|14|Icon mic|Button|||Bấm để ghi âm|
|15|Icon Tym|Button|||Bấm để gửi tym|
|16|Icon gửi|Button|||Xuất hiện khi đã nhập nội dung vào thanh chat|
|17|Icon xem trang cá nhân|Button|||Bấm để di chuyển sang trang cá nhân|
|18|Icon tắt thông báo|Button|||Bấm để hiển thị form chọn thời gian|
|19|Icon tìm kiếm|Button|||Bấm để hiển thị thanh tìm kiếm trong đoạn chat|
|20|Tin nhắn đã ghim|Button|||Bấm để hiển thị danh sách những tin nhắn đã ghim trong đoạn chat|
|21|File phương tiện và liên kết|Button|||Bấm để mở thêm các option file ảnh, file và liên kết|
|22|Xoá đoạn chat|Button|||Bấm để hiển thị form xác nhận xoá|

### Nhóm chat

#### Chat cá nhân

*Đặc tả use case*

|**Use case ID:**|**UC \- 11\.1\.1**|**Tên use case:**|Chat cá nhân|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|[UI Chat cá nhân](https://www.figma.com/design/mGXrcpLBZEhKUxxFXMSt9r/Web-UI-Kho-Nh%C3%A0-Ph%E1%BB%91?node-id=989-54203&t=JunmO4vlN6FjuwHb-1)|
|**Mô tả:**|Người dùng chat với người khác trong hệ thống|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống thả xuống danh sách chat<br>2\.1 Người dùng dùng bấm vào nút hoặc text mở rộng đoạn chat<br>2\.2 Hệ thống di chuyển sang màn hình chat<br>3. Tuỳ chọn 1 box chat bất kỳ<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Người dùng nhập nội dung tin nhắn và bấm icon gửi <br>6. Hệ thống lưu vào CSDL và chuyển tin nhắn thành thông báo cho người nhận<br>7. Người nhận nhận được thông báo tin nhắn<br>8. Người nhận tin nhắn xem nội dung tin nhắn<br>9. Hệ thống cập nhật trạng thái tin nhắn<br>10. Người dùng kiểm tra trạng thái tin nhắn|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng gửi tin nhắn vào nhóm trò chuyện<br>|User gửi tin nhắn cho user khác<br>|<br>|Trò chuyện, Tin nhắn, nhóm chat<br>|Logging, Notification<br>||
|||Notification: Xảy ra khi người dùng gửi tin nhắn trong nhóm chat<br>|Hệ thống gửi thông báo cho toàn bộ người dùng trong nhóm chat ||Trò chuyện, Tin nhắn, nhóm chat<br>|||
|||Xảy ra khi Thư ký gửi tin nhắn vào nhóm thông báo<br>|Thư ký gửi tin nhắn vào nhóm thông báo mặc định||Trò chuyện, Tin nhắn, nhóm chat|Logging, Notification||
|||Notification: Xảy ra khi người dùng gửi tin nhắn<br>|Hệ thống gửi thông báo cho toàn bộ người dùng trong nhóm thông báo mặc định||Trò chuyện, Tin nhắn, nhóm chat|||
|||Xảy ra khi người dùng gửi tin nhắn cho user khác|User gửi tin nhắn cho user khác||Trò chuyện, Tin nhắn|Logging, Notification||
|||Notification: Xảy ra khi người dùng gửi tin nhắn<br>|Hệ thống gửi thông báo cho người dùng kia ||Trò chuyện, Tin nhắn|||
||||Hệ thống cập nhật trạng thái tin nhắn khi người nhận đọc tin nhắn ||Tin nhắn|||
||||User \(Được hoặc không được\) Xem các nội dung chat trước khi được thêm vào nhóm chat|||||
||||User \(Được hoặc không được\) Xem các nội dung chat khi tài khoản inactive nhưng được gia hạn và hoạt động trở lại|||||
||||Hệ thống tạo trò chuyện khi user gửi tin nhắn cho user khác|||||

##### Quản lý sticker

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.1\.1**|**Tên use case:**|Quản lý sticker|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|28/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng quản lý bộ sticker trong đoạn chat|||
|**Điều kiện trước:**|Người dùng có tải bộ sticker trước đó|||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Tuỳ chọn 1 box chat bất kỳ<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Người dùng nhấn nút vào icon sticker<br>6. Hệ thống hiển thị màn hình bộ sticker<br>7. Người dùng Bấm vào icon ngôi nhà<br>8. Hệ thống Màn hình hiển thị Quản lý sticker<br>9. Người dùng chọn option<br>9\.1 Tải sticker mới<br>9\.2 Xoá sticker đã tải<br>10. Hệ thống cập nhật vào CSDL|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng lưu sticker về tài khoản<br>|User Lưu sticker về tài khoản<br>|<br>|Account, Sticker<br>|Logging||
|||Xảy ra khi người dùng xoá sticker đã lưu về tài khoản|User xoá sticker đã lưu||Account|Logging||

##### Xem trang cá nhân

*Đặc tả use case*

|**Use case ID:**|**UC \- 11\.1\.1\.2**|**Tên use case:**|Xem trang cá nhân|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng xem trang cá nhân của người đang chat|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Tuỳ chọn 1 box chat bất kỳ<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Trong màn hình chat, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn xem trang cá nhân<br>8. Hệ thống di chuyển sang trang xem thông tin cá nhân|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

##### Search tin nhắn

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.1\.3**|**Tên use case:**|Search tin nhắn|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng tìm kiếm tin nhắn trong đoạn chat|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Tuỳ chọn 1 box chat bất kỳ<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Trong màn hình chat, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn mở rộng<br>8. Hệ thống hiển thị màn hình tuỳ chọn chuyên sâu<br>9. Người dùng chọn tìm kiếm trong cuộc trò chuyện<br>10. Hệ thống hiển thị màn hình tìm kiếm<br>11. Người dùng nhập từ khoá cần tìm kiếm<br>12. Hệ thống hiển thị tin nhắn khớp với từ khoá đã nhập|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng xem tin nhắn trong trò chuyện<br>|User xem tin nhắn<br>|<br>|Tin nhắn, trò chuyện<br>|<br>||
|||Xảy ra khi người dùng tìm kiếm tin nhắn trong trò chuyện bằng từ khoá|User tìm kiếm tin nhắn bằng từ khoá||Tin nhắn, trò chuyện<br>|Search||
|||Search|Hệ thống đọc và trả dữ liệu khớp với từ khoá||Tin nhắn, trò chuyện|||

##### Xem phương tiện và lịch sử liên kết

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.1\.4**|**Tên use case:**|Xem lịch sử phương tiện và liên kết|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng xem lại các file và các hình ảnh trong đoạn chat|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Tuỳ chọn 1 box chat bất kỳ<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Trong màn hình chat, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn mở rộng<br>8. Người dùng chọn Xem file phương tiện và liên kết<br>9. Hệ thống hiển thị màn hình File phương tiện và liên kết<br>10. Người dùng chọn 3 loại danh mục theo ý muốn để xem<br>11. Hệ thống hiển thị màn hình đúng với danh mục người dùng đã chọn|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng xem File phương tiện và liên kết theo danh mục trong trò chuyện<br>|User xem file phương tiện liên kết theo danh mục<br>|<br>|Tin nhắn, trò chuyện<br>|<br>||

##### Xoá đoạn chat

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.1\.5**|**Tên use case:**|Xoá đoạn chat|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng xoá chat khỏi danh sách hiển thị|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Tuỳ chọn 1 box chat bất kỳ<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Trong màn hình chat, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn Xoá đoạn chat<br>8. Hệ thống hiển thị form xác nhận<br>9. Người dùng chọn có<br>10. Hệ thống xoá đoạn chat khỏi danh sách hiển thị|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|Medium|||
|**Tần suất sử dụng :**|Medium|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**|Xoá đoạn chat thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng xoá đoạn chat ở phía mình<br>|User xoá trò chuyện user khác \(chỉ ở phía mình\)<br>|<br>|Tin nhắn, trò chuyện<br>|<br>||
|||Xảy ra khi người dùng xoá đoạn chat nhóm ở phía mình|User xoá chat nhóm \(chỉ ở phía mình\)||Tin nhắn, chat nhóm|||

##### Tắt thông báo

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.1\.6**|**Tên use case:**|Tắt thông báo|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng tắt thông báo đoạn chat|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Tuỳ chọn 1 box chat bất kỳ<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Trong màn hình chat, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn Tắt thông báo<br>8. Hệ thống hiển thị form chọn thời gian<br>9. Người dùng chọn mốc thời gian mong muốn<br>10. Hệ thống lưu vào CSDL, đoạn chat bị tắt thông báo dựa vào thời gian người dùng chọn|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**|- Tắt: Tắt thông báo thành công<br>- Huỷ tắt: Huỷ tắt thông báo thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng tắt thông báo cuộc trò chuyện<br>|User \(Cập nhật\) Tắt thông báo trò chuyện user khác \(chỉ ở phía mình\)<br>|<br>|Trò chuyện<br>|Logging||
|||Xảy ra khi người dùng tắt thông báo nhóm chat|User \(Cập nhật\) Tắt thông báo nhóm chat \(chỉ ở phía mình\)||Nhóm chat|||
||||User \(Không được\) tắt thông báo nhóm chat mặc định|||||

##### Gửi ảnh

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.1\.8**|**Tên use case:**|Gửi ảnh|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng gửi ảnh trong đoạn chat|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Tuỳ chọn 1 box chat bất kỳ<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Người dùng bấm vào icon ảnh<br>6. Hệ thống hiển thị cửa sổ chọn ảnh trên máy<br>7. Người dùng chọn ảnh theo ý muốn và bấm gửi<br>8. Hệ thống lưu vào CSDL và chuyển thông báo cho người nhận<br>9. Người nhận nhận được thông báo tin nhắn<br>10. Người nhận tin nhắn xem nội dung tin nhắn<br>11. Hệ thống cập nhật trạng thái tin nhắn<br>12. Người dùng kiểm tra trạng thái tin nhắn|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|- BR\-33: Video và audio up lên không được quá 50mb/video<br>- BR\-44: Giới hạn ảnh upload là 5mb|||
|**Tin nhắn thông báo :**||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng gửi ảnh vào tin nhắn|User gửi tin nhắn bằng hình ảnh|<br>|Tin nhắn<br>|Logging, Notification||

##### Tương tác tin nhắn

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.1\.10**|**Tên use case:**|Tương tác tin nhắn|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng tương tác với tin nhắn|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Tuỳ chọn 1 box chat bất kỳ<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Người dùng bấm giữ 1 tin nhắn<br>6. Hệ thống hiển thị các option<br>6\.1 Ghim tin nhắn<br>6\.1\.1 Người dùng bấm ghim tin nhắn<br>6\.1\.2 Hệ thống cập nhật vào CSDL, hiển thị tin nhắn đã ghim lên đầu<br>6\.2 Thích tin nhắn<br>6\.2\.1 Người dùng bấm thích tin nhắn<br>6\.2\.2 Hệ thống cập nhật vào CSDL, hiển thị tin nhắn có lượt thích<br>6\.3 Xoá tin nhắn<br>6\.3\.1 Người dùng bấm xoá tin nhắn<br>6\.3\.2 Hệ thống hiển thị màn hình xác nhận<br>6\.3\.2 Người dùng bấm có<br>6\.3\.2 Hệ thống ghi nhận, tin nhắn được xoá khỏi màn hình hiển thị<br>6\.4 Trả lời tin nhắn<br>6\.4\.1 Người dùng bấm trả lời tin nhắn<br>6\.4\.2 Hệ thống ghim tin nhắn vào tin nhắn trả lời<br>6\.5 Sao chép tin nhắn<br>6\.5\.1 Người dùng bấm ghim tin nhắn<br>6\.5\.2 Lưu text vào bộ nhớ tạm của điện thoại<br>6\.6 Thu hồi tin nhắn<br>6\.5\.1 Người dùng bấm ghim tin nhắn<br>6\.5\.2 Hệ thống cập nhật vào CSDL, hiển thị tin nhắn đã ghim lên đầu<br>6\.7 Chia sẻ tin nhắn<br>6\.5\.1 Người dùng chia sẻ tin nhắn<br>6\.5\.2 Hệ thống di chuyển sang màn hình chia sẻ|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|BR\-55: Tin nhắn chỉ có thể thu hồi trong vòng 30 phút|||
|**Tin nhắn thông báo :**|- Ghim: Ghim tin nhắn thành công<br>- Bỏ ghim tin nhắn thành công<br>- Chia sẻ: Bạn đã chuyển tiếp tin nhắn|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng ghim tin nhắn<br>|User \(Cập nhật\) ghim tin nhắn<br>|<br>|Ghim, Tin nhắn<br>|Logging||
|||Xảy ra khi người dùng thích tin nhắn|User thích tin nhắn||Thích|Logging||
|||Xảy ra khi người dùng xoá tin nhắn \(Ở phía mình\)|User xoá hiển thị tin nhắn \(chỉ ở phía mình\)||Tin nhắn|Logging||
|||Xảy ra khi người dùng trả lời tin nhắn|User trả lời tin nhắn||Bình luận|Logging||
|||Xảy ra khi người dùng thu hồi tin nhắn trong vòng 30 phút|User chỉ có thể thu hồi tin nhắn trong vòng 30 phút||Tin nhắn|Logging||

###### Chia sẻ tin nhắn

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.1\.10\.2**|**Tên use case:**|Chia sẻ tin nhắn|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng chia sẻ tin nhắn|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Tuỳ chọn 1 box chat bất kỳ<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Người dùng chọn 1 tin nhắn muốn chia sẻ, nhấn giữ và chọn chia sẻ<br>6. Hệ thống hiển thị màn hình chia sẻ<br>7. Người dùng chọn người nhận hoặc nhóm muốn chia sẻ, sau đấy bấm nút gửi<br>8. Hệ thống lưu vào CSDL và chuyển tin nhắn thành thông báo cho người nhận<br>9. Người nhận nhận được thông báo tin nhắn<br>10. Người nhận tin nhắn xem nội dung tin nhắn<br>11. Hệ thống cập nhật trạng thái tin nhắn<br>12. Người dùng kiểm tra trạng thái tin nhắn|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng chia sẻ tin nhắn vào 1 nhóm khác|User chia sẻ tin nhắn vào nhóm khác|<br>|Tin nhắn, nhóm chat<br>|Logging, Notification||
|||Notification: Xảy ra khi người dùng chia sẻ tin nhắn|Hệ thống gửi thông báo cho thành viên nhóm||Tin nhắn, nhóm chat|||
|<br>||Xảy ra khi người dùng chia sẻ tin nhắn vào 1 cuộc trò chuyện khác|User chia sẻ tin nhắn vào cuộc trò chuyện với người khác|<br>|Tin nhắn, trò chuyện|Logging, Notification||
|||Notification: Xảy ra khi người dùng chia sẻ tin nhắn|Hệ thống gửi thông báo cho user khác||Tin nhắn, trò chuyện|||

##### Ghi âm

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.1\.9 **|**Tên use case:**|Ghi âm|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng ghi âm lời nói và gửi vào trong đoạn chat|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Tuỳ chọn 1 box chat bất kỳ<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Người dùng bấm vào icon Mic<br>6. Hệ thống hiển thị phần ghi âm<br>7. Người dùng bấm hoặc giữ để ghi âm, sau đấy bấm nghe lại, nếu không ưng thì bấm xoá và ghi âm lại, nếu ưng thì bấm gửi<br>8. Hệ thống lưu vào CSDL và chuyển file ghi âm thành thông báo cho người nhận<br>9. Người nhận nhận được thông báo tin nhắn<br>10. Người nhận tin nhắn xem nội dung tin nhắn<br>11. Hệ thống cập nhật trạng thái tin nhắn<br>12. Người dùng kiểm tra trạng thái tin nhắn|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|BR\-33: Video và audio up lên không được quá 50mb/video|||
|**Tin nhắn thông báo :**||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng gửi ghi âm vào tin nhắn|User gửi tin nhắn bằng ghi âm|<br>|Tin nhắn<br>|Logging, Notification||

##### Gửi file

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.1\.9 **|**Tên use case:**|Gửi file|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|29/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng gửi file trong đoạn chat|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Bấm vào chat của 1 người<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Người dùng nhấn nút vào icon File<br>6. Hệ thống hiển thị cửa sổ chọn file trong máy<br>7. Người dùng Chọn file trong máy và bấm Gửi<br>8. Hệ thống lưu vào CSDL và chuyển thông báo cho người nhận<br>9. Người nhận nhận được thông báo tin nhắn<br>10. Người nhận tin nhắn xem nội dung tin nhắn<br>11. Hệ thống cập nhật trạng thái tin nhắn<br>12. Người dùng kiểm tra trạng thái tin nhắn|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|BR\-51: File upload trong đoạn chat giới hạn 20mb|||
|**Tin nhắn thông báo :**||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng gửi file vào tin nhắn|User gửi tin nhắn bằng file|<br>|Tin nhắn<br>|Logging, Notification||

#### Chat nhóm

##### Xem thành viên

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.2\.1**|**Tên use case:**|Xem thành viên|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|[UI Nhóm chat](https://www.figma.com/design/mGXrcpLBZEhKUxxFXMSt9r/Web-UI-Kho-Nh%C3%A0-Ph%E1%BB%91?node-id=989-55900&t=JunmO4vlN6FjuwHb-1)|
|**Mô tả:**|Người dùng xem thành viên nhóm và tương tác với thành viên nhóm|||
|**Điều kiện trước:**|Người dùng là quản trị viên của nhóm|||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Người dùng bấm vào card chat nhóm<br>4. Hệ thống hiển thị boxchat nhóm vừa chọn<br>5. Trong màn hình chat nhóm, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn xem thành viên<br>8. Hệ thống hiển thị danh sách thành viên nhóm<br>9. Người dùng chọn 1 trong các option<br>9\.1 Khoá trả lời<br>9\.1\.1 Hệ thống thông báo vô hiệu hoá tính năng gửi tin nhắn của người bị khoá thành công<br>9\.2 Tạm khoá trò chuyện<br>9\.2\.1 Hệ thống thống báo vô hiệu hoá tính năng xem tin nhắn của người được chọn thành công<br>9\.3 Xoá người dùng khỏi nhóm<br>9\.3\.1 Hệ thống xoá thành viên ra khỏi nhóm chat<br>9\.4 Thêm người này làm quản trị viên<br>9\.4\.1 Hệ thống thêm thành viên này thành quản trị viên nhóm chat<br>9\.4\.2 Gỡ quyền quản trị viên<br>9\.4\.2\.1 Xoá quyền quản trị thành viên khỏi CSDL<br>9\.5 Thêm thành viên<br>9\.5\.1 Hệ thống di chuyển sang màn thêm thành viên<br>9\.6 Gửi tin nhắn cá nhân<br>9\.6\.1 Hệ thống di chuyển sang màn hình chat với người được chọn<br>9\.7 Xem trang cá nhân<br>9\.7\.1 Hệ thống hiển thị trang cá nhân của người được chọn|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|- BR\-49: Quản trị viên nhóm chat mới được cập nhật thông tin nhóm, tương tác trạng thái thành viên nhóm và thêm thành viên nhóm|||
|**Tin nhắn thông báo :**||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng xem thành viên trong nhóm chat<br>|User xem thành viên trong nhóm chat<br>|<br>|Nhóm chat<br>|Logging||
|||Xảy ra khi người dùng cập nhật quyền quản trị viên thành viên nhóm chat|\(User\) Quản trị viên Cập nhật quyền thành viên nhóm chat làm quản trị viên||Nhóm chat|Logging||
|||Xảy ra khi người dùng xoá thành viên khỏi nhóm chat|\(User\) Quản trị viên Xoá thành viên nhóm chat||Nhóm chat|Logging||
|||Xảy ra khi người dùng khoá chat thành viên nhóm chat|\(User\) Quản trị viên Cập nhật trạng thái khoá chat của thành viên nhóm chat||Nhóm chat|Logging||
|||Xảy ra khi người dùng kick thành viên khỏi nhóm chat|\(User\) Quản trị viên xoá thành viên nhóm chat||Nhóm chat|Logging||
||||\(User\) Quản trị viên không thể xoá thành viên nhóm chat mặc định|||||

##### Thêm thành viên

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.2\.5**|**Tên use case:**|Thêm thành viên|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng thêm thành viên vào nhóm chat|||
|**Điều kiện trước:**|Người dùng là quản trị viên nhóm chat|||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Người dùng bấm vào card chat nhóm<br>4. Hệ thống di chuyển vào màn hình chat nhóm<br>5. Trong màn hình chat nhóm, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn thêm thành viên<br>8. Hệ thống chuyển sang màn hình thêm thành viên cùng với các gợi ý<br>9. Người dùng tìm kiếm thành viên và bấm chọn\. Sau đấy bấm vào nút \[Thêm\]<br>10. Hệ thống thêm người được chọn vào trong CSDL|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**||||
|**Tần suất sử dụng :**||||
|**Quy tắc nghiệp vụ:**|- BR\-49: Quản trị viên nhóm chat mới được cập nhật thông tin nhóm, tương tác trạng thái thành viên nhóm và thêm thành viên nhóm|||
|**Tin nhắn thông báo :**|- Thêm thành viên thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng thêm thành viên vào nhóm chat|User thêm thành viên vào nhóm chat<br>|<br>|Nhóm chat<br>|Logging||

##### Chỉnh sửa nhóm

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.2\.2**|**Tên use case:**|Chỉnh sửa nhóm|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng xem chỉnh sửa thông tin nhóm|||
|**Điều kiện trước:**|Người dùng là quản trị viên của nhóm|||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Người dùng bấm vào card chat nhóm<br>4. Hệ thống di chuyển vào màn hình chat nhóm<br>5. Trong màn hình chat nhóm, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn mở rộng<br>8. Hệ thống hiển thị màn hình tuỳ chọn chuyên sâu<br>9. Người dùng chọn đổi tên nhóm<br>9\.1 Hệ thống hiển thị form nhập đổi thông tin nhóm<br>9\.2 Người dùng đổi tên nhóm và bấm nút Lưu<br>9\.3 Hệ thống lưu vào CSDL và cập nhật tên nhóm<br>10. Người dùng chọn thay đổi ảnh nhóm<br>10\.1 Hệ thống hiển thị option ảnh chụp hoặc ảnh trên máy<br>10\.1\.1 Người dùng chọn ảnh chụp<br>10\.1\.1\.1 Hệ thống hiển thị máy ảnh<br>10\.1\.1\.1\.1 Người dùng chụp ảnh và bấm lưu<br>10\.1\.2 Người dùng chọn ảnh trên máy<br>10\.1\.2\.1 Hệ thống hiển thị thư viện ảnh<br>10\.1\.2\.1\.1 Người dùng chọn ảnh và bấm lưu<br>11. Hệ thống lưu vào CSDL và cập nhật ảnh trên màn hình|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|- BR\-44: Giới hạn ảnh upload là 5mb<br>- BR\-49: Quản trị viên nhóm chat mới được cập nhật thông tin nhóm, tương tác trạng thái thành viên nhóm và thêm thành viên nhóm<br>- BR\-57: Tên nhóm giới hạn 50 ký tự|||
|**Tin nhắn thông báo :**|- Cập nhật tên nhóm chat thành công<br>- Cập nhật ảnh đại diện nhóm chat thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng cập nhật thông tin nhóm chat|User cập nhật thông tin nhóm chat<br>|<br>|Nhóm chat<br>|Logging, Validate||

##### Rời nhóm chat

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.2\.1**|**Tên use case:**|Rời nhóm chat|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng tự nguyện rời nhóm chat|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Người dùng bấm vào card chat nhóm<br>4. Hệ thống di chuyển vào màn hình chat nhóm<br>5. Trong màn hình chat nhóm, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng bấm vào rời nhóm chat<br>8. Hệ thống hiển thị form xác nhận<br>9. Người dùng bấm \[Có\]<br>10. Hệ thống lưu vào CSDL, nhóm chat được xoá khỏi danh sách chat của người dùng|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|BR\-53: Nếu là nhóm mặc định thì không thể tự nguyện rời khỏi nhóm|||
|**Tin nhắn thông báo :**|MSG\-46: Bạn đã rời khỏi nhóm\.|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng rời khỏi nhóm chat|User rời nhóm chat|<br>|Nhóm chat<br>|Logging||
||||User không thể Xoá \(Rời\) khỏi nhóm chat mặc định|||||

##### Xoá nhóm chat

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.2\.4**|**Tên use case:**|Xoá nhóm|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng xoá nhóm|||
|**Điều kiện trước:**|Người dùng là quản trị viên của nhóm|||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Người dùng bấm vào card chat nhóm<br>4. Hệ thống di chuyển vào màn hình chat nhóm<br>5. Trong màn hình chat nhóm, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn mở rộng<br>8. Hệ thống hiển thị màn hình tuỳ chọn chuyên sâu<br>9. Người dùng bấm vào xoá nhóm<br>10. Hệ thống hiển thị form xác nhận<br>11. Người dùng bấm \[Có\]<br>12. Hệ thống lưu vào CSDL, nhóm chat được xoá khỏi hệ thống|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|Medium|||
|**Tần suất sử dụng :**|Medium|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**|MSG\-47: Bạn đã xoá đoạn chat\.|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng xoá nhóm chat \(Ở phía mình\)|User xoá nhóm chat ở phía mình|<br>|Nhóm chat<br>|Logging||

#### Tạo nhóm chat

*Đặc tả use case*

|**Use case ID:**|**UC\-11\.1\.3**|**Tên use case:**|Tạo nhóm chat|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng tạo nhóm chat mới|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Người dùng bấm chọn tạo nhóm<br>4. Hệ thống hiển thị màn hình tạo nhóm<br>5. Người dùng nhập tên nhóm và chọn avatar nhóm chat \(Optional\)<br>6. Người dùng chọn theo<br>5\.1 Nhóm do tôi quản lý<br>5\.1\.1 Hệ thống hiển thị nhóm người dùng quản lý<br>5\.1\.2 Người dùng chọn nhóm mong muốn<br>5\.2 Danh bạ tổ chức<br>5\.2\.1 Hệ thống hiển thị nhóm theo tổ chức<br>5\.2\.2 Người dùng chọn nhóm mong muốn<br>5\.3 Thành viên gợi ý<br>5\.3\.1 Người dùng chọn các thành viên theo gợi ý<br>5\.3\.1\.1 Người dùng tìm kiếm thành viên<br>5\.3\.1\.2 Hệ thống hiển thị các thành viên khớp với từ khoá đã nhập<br>5\.3\.2 Người dùng chọn các thành viên<br>7. Người dùng bấm nút tạo<br>8. Hệ thống lưu vào CSDL, nhóm chat xuất hiện trên danh sách chat|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|Medium|||
|**Tần suất sử dụng :**|Medium|||
|**Quy tắc nghiệp vụ:**|BR\-56: Nhóm theo tổ chức chỉ có thể hiển thị cho quyền Thư ký|||
|**Tin nhắn thông báo :**|Tạo nhóm chat thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi người dùng tạo nhóm chat với thành viên đơn lẻ|User tạo nhóm chat với các thành viên|<br>|Nhóm chat<br>|Logging, Validate||
|<br>||Xảy ra khi người dùng tạo nhóm chat bằng cách thêm các thành viên trong 1 nhóm chat khác|User tạo nhóm chat với các thành viên nhóm chat khác|<br>|Nhóm chat<br>|Logging, Validate||
|<br>||Xảy ra khi người dùng tạo nhóm chat bằng cách thêm các thành viên theo tổ chức|User tạo nhóm chat với các thành viên thuộc tổ chức công ty|<br>|Nhóm chat<br>|Logging, Validate||
|||Validate|Hệ thống từ chối tạo nhóm chat do người dùng nhập sai dữ liệu|||||

### Nhóm mặc định

*Đặc tả use case*

|**Use case ID:**|UC \- 11\.2|**Tên use case:**|Nhóm chat mặc định|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|[UI Nhóm chat mặc định](https://www.figma.com/design/mGXrcpLBZEhKUxxFXMSt9r/Web-UI-Kho-Nh%C3%A0-Ph%E1%BB%91?node-id=993-54680&t=JunmO4vlN6FjuwHb-1)|
|**Mô tả:**|Người dùng xem danh sách nhóm chat mặc định|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Người dùng bấm vào Tab Chat mặc định<br>4. Hệ thống di chuyển sang tab Chat mặc định|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
||||Đầu chủ Xem \(Truy cập\) nhóm mặc định theo chức danh Đầu chủ ở chi nhánh|||||
||||Thành viên Xem \(Truy cập\)  nhóm mặc định Phòng|||||
||||Trưởng phòng Xem \(Truy cập\) nhóm mặc định theo chức danh Trưởng phòng ở chi nhánh|||||
||||Trợ lý Xem \(Truy cập\) nhóm mặc định theo chức danh Trợ lý ở chi nhánh|||||
||||User Xem \(Truy cập\)  nhóm mặc định Khối|||||
||||User Xem \(Truy cập\) nhóm mặc định Nhóm|||||

### Search nhóm chat

*Đặc tả use case*

|**Use case ID:**|UC \- 11\.3|**Tên use case:**|Search nhóm chat|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|27/05/2024|
|**Các tác nhân chính:**|User|**Figma:**|N/A|
|**Mô tả:**|Người dùng tìm kiếm các nhóm chat|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Người dùng bấm vào thanh search<br>4. Hệ thống hiển thị bàn phím<br>5. Người dùng nhập từ khoá khớp với tên đoạn chat<br>6. Hệ thống hiển thị danh sách chat khớp với từ khoá|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Activity diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng tìm kiếm nhóm chat bằng từ khoá|Người dùng tìm kiếm nhóm chat bằng từ khoá||Nhóm chat, cuộc trò chuyện|Search||
|||Search|Hệ thống đọc và trả dữ liệu khớp với từ khoá||Nhóm chat, cuộc trò chuyện|||
|||||||||

## Blog Nhà Phố \(2\.1\)

### Bản tin nội bộ

***Screen Design***

***Đặc tả Use case***

|**Use case ID:**|UC \- 11\.2|**Tên use case:**|Bản tin nội bộ|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|10/12/2024|
|**Các tác nhân chính:**|User|**Figma:**||
|**Mô tả:**|Người dùng trong hệ thống truy cập vào bản tin nội bộ để xem các bản tin nội bộ|||
|**Điều kiện trước:**|N/A|||
|**Luồng chính:**|1. Người dùng bấm vào Blog Nhà Phố \- Chọn Bản tin nội bộ<br>2. Hệ thống hiển thị màn hình bản tin nội bộ<br>3. Người dùng xem các bài viết và có thể tìm kiếm theo từ khoá|||
|**Luồng ngoại lệ:**||||
|**Luồng mở rộng:**|Bản tin hiển thị ở ngoài màn hình đăng nhập|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Activity diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
||||Đầu chủ Xem \(Truy cập\) nhóm mặc định theo chức danh Đầu chủ ở chi nhánh|||||
||||User Xem \(Truy cập\) nhóm mặc định Nhóm|||||

### Sự kiện

***Screen Design***

***Đặc tả Use case***

|**Use case ID:**|UC \- 11\.2|**Tên use case:**|Sự kiện|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|10/12/2024|
|**Các tác nhân chính:**|User|**Figma:**||
|**Mô tả:**|Người dùng trong hệ thống truy cập vào sự kiện để xem các sự kiện truyền thông|||
|**Điều kiện trước:**|N/A|||
|**Luồng chính:**|1. Người dùng bấm vào Blog Nhà Phố \- Chọn Sự kiện<br>2. Hệ thống hiển thị màn hình danh sách các sự kiện<br>3. Người dùng xem các sự kiện và có thể tìm kiếm theo từ khoá|||
|**Luồng ngoại lệ:**|Banner slide ở trang chủ là đường dẫn đi vào trang xem chi tiết sự kiện|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Activity diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
||||Đầu chủ Xem \(Truy cập\) nhóm mặc định theo chức danh Đầu chủ ở chi nhánh|||||
||||User Xem \(Truy cập\) nhóm mặc định Nhóm|||||

### Thư viện hình ảnh

***Screen Design***

***Đặc tả Use case***

|**Use case ID:**|UC \- 11\.2|**Tên use case:**|Thư viện hình ảnh|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|10/12/2024|
|**Các tác nhân chính:**|User|**Figma:**||
|**Mô tả:**|Người dùng trong hệ thống truy cập vào thư viện hình ảnh để xem các album hình ảnh|||
|**Điều kiện trước:**|N/A|||
|**Luồng chính:**|1. Người dùng bấm vào Blog Nhà Phố \- Chọn Thư viện hình ảnh<br>2. Hệ thống hiển thị màn hình danh sách các album hình ảnh<br>3. Người dùng xem danh sách album, có thể tìm kiếm album mong muốn<br>4. Người dùng Bấm vào 1 album<br>5. Hệ thống hiển thị chi tiết album ảnh|||
|**Luồng ngoại lệ:**|Banner slide ở trang chủ là đường dẫn đi vào trang xem chi tiết sự kiện|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Activity diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
||||Đầu chủ Xem \(Truy cập\) nhóm mặc định theo chức danh Đầu chủ ở chi nhánh|||||
||||User Xem \(Truy cập\) nhóm mặc định Nhóm|||||

## Quy định và hướng dẫn \(2\.1\)

### Quy định công ty

***Screen Design***

***Đặc tả Use case***

|**Use case ID:**|UC \- 11\.2|**Tên use case:**|Quy định công ty|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|26/11/2024|
|**Các tác nhân chính:**|User công ty<br>User phân theo vùng, tỉnh|**Figma:**||
|**Mô tả:**|Người dùng trong hệ thống truy cập vào quy định công ty để xem và tương tác|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào Quy định và hướng dẫn \- Chọn quy định công ty<br>2. Hệ thống hiển thị màn hinh các quy định công ty|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Activity diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
||||Đầu chủ Xem \(Truy cập\) nhóm mặc định theo chức danh Đầu chủ ở chi nhánh|||||
||||User Xem \(Truy cập\) nhóm mặc định Nhóm|||||

### Trung tâm hướng dẫn trợ giúp

***Screen Design***

***Đặc tả Use case***

|**Use case ID:**|UC \- 11\.2|**Tên use case:**|Trung tâm hướng dẫn trợ giúp|
|---|---|---|---|
|**Tác giả:**|Nguyễn Phương Nam|**Ngày:**|26/11/2024|
|**Các tác nhân chính:**|User|**Figma:**||
|**Mô tả:**|Người dùng truy cập trung tâm hướng dẫn trợ giúp|||
|**Điều kiện trước:**||||
|**Luồng chính:**|1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Người dùng bấm vào Tab Chat mặc định<br>4. Hệ thống di chuyển sang tab Chat mặc định|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Activity diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
||||Đầu chủ Xem \(Truy cập\) nhóm mặc định theo chức danh Đầu chủ ở chi nhánh|||||
||||User Xem \(Truy cập\) nhóm mặc định Nhóm|||||



# [SRS Khonhapho website \- 2](https://v4cueke6gq8.sg.larksuite.com/wiki/FMylwVW5kiJYC6kvZzzlcycfgWd)

