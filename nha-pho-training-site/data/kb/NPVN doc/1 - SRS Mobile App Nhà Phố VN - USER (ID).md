# 1 \- SRS Mobile App Nhà Phố VN \- USER \(ID\)

# **TẬP ĐOÀN NHÀ PHỐ VIỆT NAM**



**TÀI LIỆU YÊU CẦU**

**ỨNG DỤNG DI ĐỘNG**

**Lưu hành nội bộ**



**Hà Nội, ngày 19 tháng 4 năm 2024**

# **VERSION HISTORY**

|**Phiên bản**|**Ngày**|**Thay đổi bởi**|**Lý do thay đổi**|
|---|---|---|---|
|1\.0|02/05/2024|Nguyễn Phương Nam|Tạo mới \- Base on Khonhapho|
|1\.0|05/06/2024|Nguyễn Phương Nam|Chỉnh sửa lại mô tả các nút bấm trong các màn hình|
|1\.0|15/08/2024|Đặng Quỳnh Anh|Thêm bộ lọc Quản lý khách hàng 19\.3|
|1\.2|20/05/2024|Nguyễn Phương Nam|Thêm mô tả phần 23 chat|
|2\.1|19/06/2024|Nam|Cập nhật mô tả luồng chạy mới đăng ký và đăng nhập, trang truyền thông public\. 2\.1 KYC, 23\.4 Lịch học lịch họp 29 Onboarding|
|2\.1|27/11/2024|Nam|Thêm Ký hợp đồng hợp tác\. Cập nhật quy định và hướng dẫn|
|2\.2|19/06/2024|Nguyễn Phương Nam|Thêm mới mô tả phần 28 QR|
|2\.3|12/11/2024|Đặng Quỳnh Anh|Thêm tài liệu phần 2, 1\.7 bum chốt|
|2\.3|||Khảo sát BĐS|
|2\.4|18/11/2024|Đặng Quỳnh Anh|Thêm tài liệu phần 3, 3\. thống kê hiệu xuất công việc|
|2\.4|||Thêm tài liệu phần|
|2\.4|||Thêm Chat hỗ trợ ở phần 23|
||||Thêm Check in ở phần 1, 1\.2|
|||||



# **Business Rules**

|**ID**|**Định nghĩa**|
|---|---|
|BR\-01|SĐT hoặc CCCD không được bỏ trống|
|BR\-02|SĐT hoặc CCCD phải đúng định dạng |
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
|BR\-23|Hàng chờ duyệt không được quá 1 ngày|
|BR\-24|Sau 15 ngày không có tương tác, tin sẽ bị thông báo cam|
|BR\-25|Sau 21 ngày không có tương tác, tin sẽ bị thông báo đỏ|
|BR\-26|Trước 15 phút sau xác nhận, đầu chủ được quyền từ chối lịch hẹn|
|BR\-27|Trước 15 phút, đầu khách được quyền thu hồi lịch hẹn|
|BR\-28|Hệ thống nhắc hẹn cả 2 bên 30 phút trước lịch hẹn đi xem nhà|
|BR\-29|Khi bị khoá tài khoản thì phải có mốc thời gian bị khoá|
|BR\-30|10 ngày trước khi tài khoản của HV, CV hết hạn, gửi thông báo cho Trưởng phòng|
|BR\-31|Sau 15 phút khi tạo ứng viên vòng 0 thì không được sửa và xoá của ứng viên|
|BR\-32|Serial sổ đỏ chỉ bao gồm số hoặc chữ|
|BR\-33|Video và audio up lên không được quá 50mb/video|
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
|BR\-72|Tin đã đăng thì không thể sửa được các trường thông tin<br>\- Pháp lý<br>\- Serial sổ<br>\- Số điện thoại chủ nhà<br>\- Ảnh sổ đỏ pháp lý<br>\- Audio pháp lý|
|BR\-74|Giới hạn 6 ảnh cho các bài đăng trên Feed|
|BR\-75|Thời gian đặt lịch được validate 30 phút sau thời gian hiện tại|
|BR\-76|Thời gian dẫn khách đi xem trong báo cáo dẫn khách phải trước thời điểm hiện tại|
|BR\-78|Thông tin cá nhân của Chủ tịch và Tổng giám đốc sẽ bị ẩn đi khi người dùng xem trang cá nhân|
|BR\-79|Giá nhà khi lấy dữ liệu từ database sẽ giữ nguyên, không được làm tròn giá|
|Version 1\.2||
|BR\-46<br>|Chat version 1\.2:<br>- Hệ thống tự động tạo kênh và group chat<br>- Khi đổi chức danh, rời khỏi phòng sẽ tự động out và tự join vào kênh và group chat mới \(only phòng hệ thống tạo\)<br>- Admin là người kiểm soát quyền quản trị phòng \(Sau sẽ có bộ phận kiểm soát\)<br>- Khi dừng hợp tác thì sẽ out toàn bộ phòng cũ, sau khi ký lại thì sẽ vào phòng mới<br>- Người quản trị nhóm được quyền gửi tin nhắn và thu hồi|
|BR\-49|Chat version 1\.2: Quản trị viên nhóm chat mới được cập nhật thông tin nhóm, tương tác trạng thái thành viên nhóm và thêm thành viên nhóm|
|BR\-73|1. Khi người dùng mới đăng ký thì thông tin cơ bản bao gồm Họ tên, email, số điện thoại, mật khẩu và xác nhận mật khẩu\. Và xác nhận tài khoản đăng ký bằng mã OTP \(Optional\)<br>2. Sau khi đăng ký thành công, log in sẽ truy cập vào trang Mã giới thiệu hoặc đăng ký ứng viên\. <br>- Sau khi nhập mã giới thiệu thì sẽ trở về trang chủ<br>- Đăng ký ứng viên thì sẽ có 2 lựa chọn xác thực tài khoản ngay lập tức hoặc truy cập vào trang chủ<br>Người dùng sẽ được xem các chức năng cơ bản trong trang chủ, xem thông báo vụ chốt, các chức năng trong trang cá nhân\. Khi chưa xác thực tài khoản thì sẽ có nút xác thực tài khoản, khi đã xác thực xong thì nút Xác thực tài khoản sẽ chuyển thành Chỉnh sửa hồ sơ\. Và người dùng sẽ được vào danh sách chờ xác thức tài khoản<br>Nếu chưa xác thực tài khoản, khi vào trang chủ sẽ có pop up "Bạn cần xác thực tài khoản để sử dụng đầy đủ các chức năng", pop up có thể tắt đi và khi bấm xác thực thì sẽ chuyển sang trang xác thực tài khoản|
|BR\-43|Tin nhắn sau khi gửi thì có thể thu hồi trong 30 phút|
|BR\-50|Nội dung chat nhập giới hạn 3000 ký tự|
|BR\-51|File upload trong đoạn chat giới hạn 20mb|
|BR\-52|Nếu là nhóm mặc định thì không được xoá thành viên|
|BR\-53|Nếu là nhóm mặc định thì không thể tự nguyện rời khỏi nhóm|
|BR\-54|Thông báo đoạn chat không có tuỳ chọn tắt đến khi tôi mở lại|
|BR\-55|Tin nhắn chỉ có thể thu hồi trong vòng 30 phút|
|BR\-56|Nhóm theo tổ chức chỉ có thể hiển thị cho quyền Thư ký|
|BR\-57|Tên nhóm chat giới hạn 50 ký tự|
|BR\-76|Thời gian dẫn khách đi xem trong báo cáo dẫn khách phải trước thời điểm hiện tại|
|BR\-77|Tài khoản học viên có thời hạn 15 ngày, tài khoản chuyên viên có thời giạn 90 ngày\. Khi đã hết hạn nhưng chưa reset lại thời gian sử dụng thì sẽ khoá các chức năng liên quan đến kho nhưng người dùng vẫn sẽ truy cập được vào hệ thống|



# **Application Message List**

|**\#**|**Mã thông tin**|**Loại**|**Ngữ cảnh**|**Nội dung**|
|---|---|---|---|---|
|1|MSG\-01|Chữ đỏ dưới textbox|Bỏ trống field SĐT hoặc CCCD|Cần nhập số điện thoại hoặc CCCD\!|
|2|MSG\-02|Chữ đỏ dưới textbox|Bỏ trống field Mật khẩu|Cần nhập mục này\!<br>|
|3|MSG\-03|Chữ đỏ dưới textbox|Nhập sai SĐT hoặc CCCD<br>|Số điện thoại hoặc CCCD chưa chính xác\!|
|4|MSG\-04<br>|Toast message|Nhập sai mật khẩu<br>|Mật khẩu không chính xác\!<br>|
|5|MSG\-05|Toast message|Nhập email không có trên hệ thống|Tài khoản không tồn tại\!|
|6|MSG\-06<br>|Toast message|Link đổi mật khẩu hết hạn|Liên kết đã hết hạn hoặc có lỗi xảy ra vui lòng thử lại sau\.|
|7|MSG\-07|Chữ đỏ dưới textbox|Xác nhận mật khẩu không khớp|Nhập lại mật khẩu không hợp lệ\!|
|8|MSG\-08|Chữ đỏ dưới textbox|Mật khẩu không đúng định dạng|Mật khẩu không đúng định dạng, mật khẩu phải bao gồm chữ cái và số từ 6 đến 32 ký tự|
|9|MSG\-09|Chữ đỏ dưới textbox|Trùng 1 trong 3 khi đăng ký|Tài khoản đăng ký với cccd hoặc email hoặc số điện thoại này đã tồn tại trên hệ thống\.|
|10|MSG\-10|Chữ đỏ dưới textbox|SĐT người thân trùng|SĐT người thân không được trùng với SĐT đã đăng ký|
|11|MSG\-11|Chữ đỏ dưới textbox<br>|SĐT không đúng 10 số<br>|Số điện thoại chưa hợp lệ\!|
|12|MSG\-12|Chữ đỏ dưới textbox|Textbox tên, địa  chỉ thường trú và nơi ở hiện tại nhập nhiều ký tự|Nội dung không quá dài\!<br>|
|13|MSG\-13|Chữ đỏ dưới textbox|Ngày cấp CCCD |Ngày cấp CCCD không hợp lệ\!|
|14|MSG\-14|Chữ đỏ dưới textbox|Ngày sinh không trong khoảng thời gian giới hạn|Ngày sinh không hợp lệ\.|
|15|MSG\-15|Chữ đỏ dưới textbox|Nhập sai format email|Email chưa đúng định dạng\.|
|16|MSG\-16|Chữ đỏ dưới textbox|Bỏ trống các trường có đánh dấu \*|Không được bỏ trống mục này\.|
|17|MSG\-17|Chữ đỏ dưới textbox|Các field đánh dấu \* bị bỏ trống|Bạn cần điền thông tin này\.|
|18|MSG\-18|Toast message|Đăng bài|Đăng bài thành công\. Xin vui lòng chờ duyệt\.|
|19|MSG\-19|Toast message|Đăng bài|Đăng bài thành công\.|
|20|MSG\-20|Toast message|Đăng tin kho tài nguyên/kho cá nhân|Thêm tin đăng thành công\.|
|21|MSG\-21|Toast message|Sửa tin đăng kho tài nguyên|Cập nhật tin đăng thành công\!|
|22|MSG\-22|Toast message<br>|Sửa trạng thái tin, thu hồi lịch đặt, xác nhận/từ chối lịch đặt|Cập nhật trạng thái thành công\!<br>|
|23|MSG\-23|Toast message|Khôi phục tin đã xoá|Khôi phục tin đăng thành công\!|
|24|MSG\-24|Toast message|Xoá|Xoá thành công\.|
|25|MSG\-25|Toast message|Khoá bình luận|Khoá bình luận bài viết thành công|
|26|MSG\-26|Toast message|Bình luận khi bị khoá|Chức năng bình luận đã bị khoá\!|
|27|MSG\-27<br>|Toast message|Sửa bài đăng/bộ sưu tập/Hồ sơ cá nhân/Thêm vào bộ sưu tập khác/Ghi chú|Cập nhật thành công\!|
|28|MSG\-28|Toast message|Thêm Bộ sưu tập|Thêm mới thành công\!|
|29|MSG\-29|Toast message|Sửa khách hàng|Cập nhật thông tin khách hàng thành công|
|30|MSG\-30|Toast message|Thêm khách hàng|Thêm thông tin khách hàng thành công|
|31|MSG\-31|Toast message|Đặt lịch|Đặt lịch thành công\!|
|32|MSG\-32|Toast message|Up video \>50mb|Video tải lên vượt quá 50MB vui lòng chọn lại|
|33|MSG\-33|Toast message|Up audio \>50mb|Tải audio không thành công|
|34|MSG\-34|Chữ đỏ dưới textbox|Nhập số âm|Số phải lớn hơn 0\!|
|35|MSG\-35|Chữ đỏ dưới textbox|Không chọn các thanh dropdown|Bạn cần chọn mục này<br>|
|36|MSG\-36|Toast message|Gỡ tin khỏi bộ sưu tập|Gỡ tin khỏi bộ sưu tập thành công\.|
|37|MSG\-37|Toast message|Di chuyển tin đăng vào phần thùng rác|Gỡ tin đăng thành công\!|
|38|MSG\-38|Toast message|Thêm mã giới thiệu|Thêm mã giới thiệu thành công\.|
|39<br>|MSG\-39|Toast message|Truy cập vào chức năng không có quyền|Bạn không có quyền truy cập thông tin này|
|40|MSG\-40|Toast message|Thay đổi chức danh|Cập nhật chức danh mới thành công\!|
|41|MSG\-41|Toast message|Thay đổi nhóm|Cập nhật thông tin tài khoản thành công\!|
|42|MSG\-42|Toast message|Thêm ứng viên|Thêm ứng viên thành công\!|
|43|MSG\-43|Toast message|Sửa ứng viên|Cập nhật ứng viên thành công\!|
|44|MSG\-44|Chữ đỏ dưới textbox|Khi nhập sai trường serial sổ|Serial sổ chưa đúng định dạng|
|45|MSG\-45|Toast message|Báo cáo dẫn khách|Báo cáo dẫn khách thành công\.|
|46|MSG\-46|Toast message|Rời khỏi nhóm|Bạn đã rời khỏi nhóm\.|
|47|MSG\-47|Toast message|Xoá nhóm|Bạn đã xoá nhóm\.|
|48|MSG\-48|Chữ đỏ dưới textbox|Nhập sai thông số nhà|Thông số nhà chưa đúng|

# **I\. User**

## **Đăng nhập**** và check in**

### Đăng nhập

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|SĐT hoặc CCCD|Textbox<br>|Có|SĐT: int\(10\)<br>CCCD: int\(12\)|Nhập SĐT hoặc CCCD đã đăng ký trong hệ thống|
|2|Mật khẩu|Textbox|Có|varchar\(32\)<br>|Hiển thị \*, mật khẩu bao gồm ký tự và số, tối thiểu 6 ký tự|
|3|Lưu mật khẩu|Checkbox|Không||Tích để lưu mật khẩu sau khi đăng nhập|
|4|Quên mật khẩu|Text button|Không||Chuyển đến màn hình quên mật khẩu|
|5|Face\-id|Button|Không||Hiển thị thông báo chưa đăng ký nếu chưa cài đặt trong app|
|6|Đăng nhập|Button|Có||Chuyển đến màn hình trang chủ|
|7|Tạo tài khoản|Button|Không||Chuyển đến màn hình đăng ký tài khoản|



**Use case Specification**

|**Use Case ID**||**UC\-1**|**Use Case Name**||Đăng nhập|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**2/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng đăng nhập vào hệ thống khi đã có tài khoản||||
|**Pre\-Condition**||Tài khoản đã được đăng ký trong hệ thống||||
|**Main Flows**||1\. Mở ứng dụng trên điện thoại di động<br>2\. Hiển thị màn hình đăng nhập<br>3\. Hệ thống xác thực thông tin tài khoản trong CSDL<br>3\.1\. Nếu thông tin đăng nhập hợp lệ \(đã có tài khoản\) thì chuyển tới Trang chủ<br>3\.2\. Nếu tài khoản đăng nhập lần đầu<br>3\.2\.1\. Hệ thống hiển thị form mã giới thiệu<br>3\.2\.2\. Người dùng nhập mã giới thiệu để tạo tài khoản<br>3\.2\.3\. Bấm xác nhận mã giới thiệu<br>3\.2\.4\. Hệ thống kiểm tra mã giới thiệu trong CSDL<br>3\.2\.4\.1\. Nếu mã giới thiệu sai, quay lại bước Nhập mã giới thiệu<br>3\.2\.4\.2\. Nếu mã giới thiệu hợp lệ thì chuyển tới màn hình Xác thực cá nhân||||
|**Exception Flows**||3\.1\.1 Nếu thông tin đăng nhập sai thì người dùng điền lại thông tin tài khoản||||
|**Business Rules**||- BR\-01: SĐT hoặc CCCD không được bỏ trống<br>- BR\-02: SĐT phải đúng định dạng<br>- BR\-03: Mật khẩu không được bỏ trống<br>- BR\-04: Mật khẩu phải là cả chữ cả số<br>- BR\-05: Mật khẩu tối thiểu 6 ký tự, tối đa 32 ký tự||||
|**Application Messages**||- MSG\-01<br>- MSG\-02<br>- MSG\-03<br>- MSG\-04||||

### Check in



**Use case Specification**

|**Use Case ID**|||**Use Case Name**||Check in|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**17/9/2025**|
|**Actor**||User||||
|**Description**||Người dùng check in tại cổng ||||
|**Pre\-Condition**||Người dùng có mã QR||||
|**Main Flows**||1. Người dùng trình diện mã QR tại cổng<br>2. Hệ thống kiểm tra mã QR của người dùng<br>3. Hệ thống mở cửa, ghi lại lượt check in||||
|**Exception Flows**||3\.1 Nếu sai mã QR sai \(hết hạn\) hệ thống không mở cửa \(quay lại bước 2\)||||
|**Business Rules**||||||
|**Application Messages**||Cửa thông báo sai mã QR||||

## **Đăng ký**

**Screen Design**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Họ và tên|Textbox|Có|varchar\(50\)|Bấm để nhập họ và tên|
|2|Email|Textbox|Có|varchar\(100\)|Bấm để nhập email|
|3|Số điện thoại|Textbox|Có|int\(10\)|Tích để lưu mật khẩu sau khi đăng nhập|
|4|Mật khẩu|Textbox|Có|varchar\(32\)|Hiển thị \*, mật khẩu bao gồm ký tự và số, tối thiểu 6 ký tự|
|5|Xác minh mật khẩu|Textbox|Có|varchar\(32\)|Hiển thị \*, mật khẩu bao gồm ký tự và số, tối thiểu 6 ký tự|
|6|Đăng ký|Button|Có||Chuyển đến màn hình nhập mã giới thiệu|
|7|Trở lại trang đăng nhập|Button|Không||Chuyển đến màn hình đăng ký tài khoản|



**Use case Specification**

|**Use Case ID**||**UC 1\.2**|**Use Case Name**||Đăng ký|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**3/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng đăng ký tài khoản mới||||
|**Pre\-Condition**||Người dùng tải ứng dụng ||||
|**Main Flows**||1. Mở ứng dụng trên điện thoại di động<br>2. Hệ thống chuyển hướng đến màn hình Đăng ký<br>3. Người dùng điền đầy đủ thông tin theo yêu cầu và ấn nút đăng ký<br>4. Hệ thống kiểm tra định dạng và xác thực thông tin đăng ký, lưu vào CSDL\. Chuyển tới màn hình Đăng nhập||||
|**Exception Flows**||4\.1 Nếu thông tin sai định dạng hệ thống sẽ yêu cầu người dùng nhập lại thông tin \(quay lại bước 3\)||||
|**Business Rules**||- BR\-05: Mật khẩu tối thiểu 6 ký tự, tối đa 32 ký tự<br>- BR\-06: Họ và tên không được quá 50 ký tự<br>- BR\-07: Email phải đúng định dạng<br>- BR\-73: <br>1. Khi người dùng mới đăng ký thì thông tin cơ bản bao gồm Họ tên, email, số điện thoại, mật khẩu và xác nhận mật khẩu\. Và xác nhận tài khoản đăng ký bằng mã OTP \(Optional\)<br>2. Sau khi đăng ký thành công, log in sẽ truy cập vào trang Mã giới thiệu hoặc đăng ký ứng viên\. <br>- Sau khi nhập mã giới thiệu thì sẽ trở về trang chủ<br>- Đăng ký ứng viên thì sẽ có 2 lựa chọn xác thực tài khoản ngay lập tức hoặc truy cập vào trang chủ<br>Người dùng sẽ được xem các chức năng cơ bản trong trang chủ, xem thông báo vụ chốt, các chức năng trong trang cá nhân\. Khi chưa xác thực tài khoản thì sẽ có nút xác thực tài khoản, khi đã xác thực xong thì nút Xác thực tài khoản sẽ chuyển thành Chỉnh sửa hồ sơ\. Và người dùng sẽ được vào danh sách chờ xác thức tài khoản<br>Nếu chưa xác thực tài khoản, khi vào trang chủ sẽ có pop up "Bạn cần xác thực tài khoản để sử dụng đầy đủ các chức năng", pop up có thể tắt đi và khi bấm xác thực thì sẽ chuyển sang trang xác thực tài khoản||||
|**Application Messages**||- MSG\-08: Nhập lại mật khẩu không hợp lệ\!<br>- MSG\-09: Mật khẩu không đúng định dạng, mật khẩu phải bao gồm chữ cái và số từ 6 đến 32 ký tự\.<br>- MSG\-10: Tài khoản đăng ký với cccd hoặc email hoặc số điện thoại này đã tồn tại trên hệ thống\.<br>- MSG\-12: Số điện thoại chưa hợp lệ\!<br>- MSG\-15: Email chưa đúng định dạng\.||||

### **Quên mật khẩu**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Email|Textbox<br>|Có||Nhập email đã đăng ký trong hệ thống|
|2|Gửi|Button|Có||Thông báo đã gửi mã thành công|
|3|Trở lại trang đăng nhập|Button|Không||Chuyển sang màn hình đăng nhập|

**Use case Specification**

|**Use Case ID**||**UC1\.3**|**Use Case Name**||Quên mật khẩu|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**2/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng quên mật khẩu truy cập vào hệ thống||||
|**Pre\-Condition**||Tài khoản đã có trong hệ thống||||
|**Main Flows**||1. Mở ứng dụng trên điện thoại<br>2. Hệ thống hiển thị màn hình đăng nhập<br>3. Người dùng bấm vào link Quên mật khẩu<br>4. Hệ thống hiển thị màn hình điền email đã đăng ký<br>5. Người dùng bấm nút gửi<br>6. Người dùng kiểm tra email và bấm vào đường link<br>7. Hệ thống hiển thị màn hình Đặt mật khẩu mới<br>8. Người dùng nhập mật khẩu mới, xác nhận mật khẩu và bấm nút \[Đặt mật khẩu mới\]<br>9. Hệ thống cập nhật cơ sở dữ liệu và di chuyển sang màn hình trang chủ||||
|**Exception Flows**||5\.1\. Nếu thông tin email không đúng hoặc không có trong hệ thống thì hệ thống báo lỗi<br>8\.1\. Nếu mật khẩu không đúng định dạng thì hệ thống báo lỗi<br>8\.2\. Nếu xác nhận mật khẩu không khớp với mật khẩu thì hệ thống báo lỗi||||
|**Business Rules**||- BR\-08: Email phải đúng định dạng<br>- BR\-04: Mật khẩu phải là cả chữ cả số<br>- BR\-05: Mật khẩu tối thiểu 6 ký tự, tối đa 32 ký tự<br>- BR\-58: Email giới hạn 50 ký tự||||
|**Application Messages**||- MSG\-06<br>- MSG\-07<br>- MSG\-08<br>- MSG\-09||||

*Activity diagram*

## Trang chủ

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1<br>|Nhập thông tin tìm kiếm<br>|Textbox<br>|Không||Nhập thông tin, từ khoá để tìm kiếm các bài đăng trên trang chủ|
|2|QR|Button|Không||Dùng để quét mã QR|
|3|Chat|Button|Không||Chuyển sang màn hình chat|
|4|Icon Kho tài nguyên|Button|Không||Chuyển sang màn hình kho tài nguyên|
|5|Icon Khách cần mua gấp<br>|Button|Không||Chuyển sang màn hình khách cần mua gấp|
|6|Icon Bộ sưu tập|Button|Không||Chuyển sang màn hình bộ sưu tập|
|7|Icon Quản lý khách \- tự khớp khách|Button|Không||Chuyển sang màn hình quản lý khách \- tự khớp khách|
|8|Icon Thông báo vụ chốt<br>|Button|Không||Chuyển sang màn hình feed thông báo vụ chốt|
|9|Icon Công ty<br>|Button|Không||Chuyển sang màn hình feed công ty|
|10|Icon Chi nhánh<br>|Button|Không||Chuyển sang màn hình feed chi nhánh|
|11|Icon Khối|Button|Không||Chuyển sang màn hình feed khối|
|12|Icon Phòng|Button|Không||Chuyển sang màn hình feed phòng|
|13|Icon Nhóm|Button|Không||Chuyển sang màn hình feed nhóm|
|14|Icon Danh sách công ty|Button|Không||Chuyển sang màn hình danh sách các thành viên trong công ty|
|15|Icon Thư viện kiến thức<br>|Button|Không||Chuyển sang màn hình feed thư viện kiến thức|
|16|Icon Chia sẻ kỹ năng|Button|Không||Chuyển sang màn hình feed chia sẻ kỹ năng|
|17|Icon Thư viện đầu chủ \(Hiển thị cho quyền **Đầu chủ, Trưởng phòng, Thư ký** \)|Button|Không||Chuyển sang màn hình feed thư viện đầu chủ|
|18|Icon Thư viện trưởng phòng \(Hiển thị cho quyền **Trưởng phòng, Thư ký** \)|Button|Không||Chuyển sang màn hình feed thư viện trưởng phòng|
|19|Icon Thư viện trợ lý \(Hiển thị cho quyền **Trợ lý, Trưởng phòng, Thư ký** \)|Button|Không||Chuyển sang màn hình feed thư viện trợ lý|
|20|Icon Đăng tin \(Hiển thị cho quyền** Đầu chủ**\)|Button|Không||Chuyển sang màn hình đăng tin|
|21|Icon Kho cá nhân \(Hiển thị cho quyền** Đầu chủ**\)|Button|Không||Chuyển sang màn hình kho cá nhân|
|22|Icon Kho tin chính chủ \(Hiển thị cho quyền** Đầu chủ**\)|Button|Không||Chuyển sang màn hình kho tin chính chủ |
|23|Icon Kho hàng tự do \(Hiển thị cho quyền** Đầu chủ**\)|Button|Không||Chuyển sang màn hình kho hàng tự do|
|24|Icon Lịch sử khách đặt lịch \(Hiển thị cho quyền** Đầu chủ**\)|Button|Không||Chuyển sang màn hình lịch sử khách đặt lịch|
|25|Icon Lịch sử khách báo cáo \(Hiển thị cho quyền** Đầu chủ**\)    |Button|Không||Chuyển sang màn hình lịch sử khách báo cáo|
|26|Icon Mã giới thiệu \(Hiển thị cho quyền** Trưởng phòng**\)|Button|Không||Chuyển sang màn hình mã giới thiệu|
|27|Icon Quản lý khách của đầu khách \(Hiển thị cho quyền** Trợ lý, phó phòng, trưởng phòng**\)|Button|Không<br>||Chuyển sang màn hình quản lý khách của đầu khách làm việc với khách hàng<br>|
|28|Icon Quản lý thành viên \(Hiển thị cho quyền** Trợ lý, phó phòng, trưởng phòng**\)|Button|Không||Chuyển sang màn hình quản lý thành viên trong phòng|
|29|Icon Quản lý báo cáo của CV \(Hiển thị cho quyền** trưởng phòng**\)|Button|Không||Chuyển sang màn hình quản lý báo cáo của CV|
|30|Icon Quản lý ứng viên vòng 0 \(Hiển thị cho quyền** Trợ lý, phó phòng, trưởng phòng**\)|Button|Không||Chuyển sang màn hình quản lý ứng viên vòng 0|
|31|Icon Quản lý nhóm \(Hiển thị cho quyền** Trưởng phòng**\)|Button|Không||Chuyển sang màn hình quản lý nhóm thuộc phòng|
|32|Banner|Card Button|||Bấm để dẫn đến link bài viết|
|33|Tab bảng tin \(Mặc định\)|Button|Không||Chuyển sang tab bảng tin|
|34|Tab bạn quan tâm|Button|Không||Chuyển sang tab bạn quan tâm|
|35|Xem thêm|Link|Không||Bấm để hiển thị toàn bộ bài viết bị rút gọn|
|36|\[Ảnh\]|Button|Không||Bấm vào avatar để xem profile người đăng bài viết|
|37|\[Tên\]|Link|Không||Bấm vào tên để xem profile người đăng bài viết|
|38|\#\[hashtag\]|Link|Không||Bấm vào hashtag để xem các bài đăng tương ứng với người đăng, phòng ban và khối|
|39|\[\.\.\.\]<br>|Button|Không||Bấm để hiển thị option đối với bài viết|
|40|Messenger icon|Button|Không||Bấm để nhảy qua ứng dụng messenger|
|41|Phone icon|Button|Không||Bấm để nhảy vào ứng dụng quay số điện thoại|
|42|Zalo icon|Button|Không||Bấm để nhảy vào ứng dụng zalo|
|43|Chat khonhapho icon|Button|Không||Bấm để di chuyển sang chat cá nhân với người đăng tin|
|44|Thích|Button|Không||Bấm để thích bài viết|
|45|Bình luận|Button|Không||Bấm để hiển thị màn hình bình luận|
|46|Chia sẻ|Button|Không||Bấm để sao chép link chia sẻ|
|47|Trang chủ \(Mặc định\)|Button|Không||Bấm để refresh lại màn hình|
|48|Bộ sưu tập|Button|Không||Bấm để di chuyển sang bộ sưu tập|
|49<br>|Đặt lịch|Button|Không||Bấm để di chuyển sang màn hình thông báo đặt lịch|
|50|Thông báo|Button|Không||Bấm để di chuyển sang màn hình thông báo|
|51|Avatar cá nhân|Button|Không||Bấm để di chuyển sang menu|

**Use case Specification**

|**Use Case ID**||**UC 2\.1**|**Use Case Name**||Search feed trang chủ|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**6****/5/2024**|
|**Actor**||User, quyền đầu chủ, quyền trưởng phòng||||
|**Description**||Người dùng tìm kiếm từ khoá tương ứng với bài đăng||||
|**Pre\-Condition**||Người dùng đã đăng nhập<br>Có bài viết tương ứng với từ khoá||||
|**Main Flows**||1\. Người dùng Đăng nhập vào Trang chủ<br>2\. Người dùng điền từ khóa cần tìm kiếm vào textbox tìm kiếm và chọn lệnh Tìm kiếm<br>3\. Hệ thống chọn lọc thông tin có chứa từ khoá và hiển thị nội dung tương ứng||||
|**Exception Flows**||||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

### Tab Bạn quan tâm

**Screen Design**

#### **Filter Tab bạn quan tâm**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Hiện trạng|Dropdownlist|Không||Bấm chọn hiện trạng bđs muốn lọc|
|3|Loại hình|Dropdownlist|Không||Bấm chọn loại hình bđs muốn lọc|
|4|Tỉnh/Thành phố|Dropdownlist|Không||Bấm chọn tỉnh/thành phố muốn lọc|
|5|Quận/Huyện|Dropdownlist|Không||Bấm chọn quận/huyện muốn lọc|

**Use case Specification**

|**Use Case ID**||**UC\-3\.3**|**Use Case Name**||Filter Tab bạn quan tâm|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**14/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng lọc tin trong tab bạn quan tâm||||
|**Pre\-Condition**||Trong hệ thống có tin đăng khớp với tiêu chí||||
|**Main Flows**||1. Người dùng Đăng nhập thành công và ở màn hình trang chủ Tab bảng tin<br>2. Người dùng bấm vào card Chọn tiêu chí nhận thông báo cho kho hàng<br>3. Hệ thống hiển thị bộ lọc các tiêu chí<br>4. Người dùng chọn các tiêu chí phù hợp với mong muốn<br>5. Hệ thống lọc các bài viết có chứa các từ khoá trong tiêu chí và hiển thị tiêu chí phù hợp||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

### **Trang chủ của Ứng viên**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Hiện trạng|Dropdownlist|Không||Bấm chọn hiện trạng bđs muốn lọc|
|3|Loại hình|Dropdownlist|Không||Bấm chọn loại hình bđs muốn lọc|
|4|Tỉnh/Thành phố|Dropdownlist|Không||Bấm chọn tỉnh/thành phố muốn lọc|
|5|Quận/Huyện|Dropdownlist|Không||Bấm chọn quận/huyện muốn lọc|

**Use case Specification**

|**Use Case ID**||**UC\-3\.3**|**Use Case Name**||Filter Tab bạn quan tâm|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**14/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng lọc tin trong tab bạn quan tâm||||
|**Pre\-Condition**||Trong hệ thống có tin đăng khớp với tiêu chí||||
|**Main Flows**||1. Người dùng Đăng nhập thành công và ở màn hình trang chủ Tab bảng tin<br>2. Người dùng bấm vào card Chọn tiêu chí nhận thông báo cho kho hàng<br>3. Hệ thống hiển thị bộ lọc các tiêu chí<br>4. Người dùng chọn các tiêu chí phù hợp với mong muốn<br>5. Hệ thống lọc các bài viết có chứa các từ khoá trong tiêu chí và hiển thị tiêu chí phù hợp||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

## **Feed Khách cần mua gấp **

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Chat|Button|Không||Bấm để chuyển sang màn hình chat|
|3|Search icon|Button|Không||Bấm để hiển thị màn hình tìm kiếm|
|4|Tạo bài viết|Button|Không||Bấm để hiển thị màn hình đăng bài viêt|
|5|\[Ảnh\]|Button|Không||Bấm để hiển màn hình profile đầu chủ|
|6|\[Tên\]|Button|Không||Bấm để hiển màn hình profile đầu chủ|
|7|\[\.\.\.\]|Button|Không||Bấm để hiển thị option đối với bài viết|
|8|\#\[hashtag\]|Button|Không||Bấm vào hashtag để xem các bài đăng tương ứng với người đăng, phòng ban và khối|
|9|Điện thoại icon|Button|Không||Bấm để nhảy qua ứng dụng quay số điện thoại|
|10|Zalo icon|Button|Không||Bấm để nhảy qua ứng dụng zalo|
|11|Messenger icon|Button|Không||Bấm để nhảy qua ứng dụng messenger|
|12|Chat khonhapho icon|Button|Không||Bấm để di chuyển qua màn hình chat|
|13|Thích|Button|Không||Bấm để thích bài viết|
|14|Bình luận|Button|Không||Bấm để hiển thị màn hình bình luận|
|15|Chia sẻ|Button|Không||Bấm để sao chép link chia sẻ|
|16|Viết bình luận|Button|Không||Bấm để soạn bình luận, tương tác với bài viết|

### Search Feed** Khách cần mua gấp**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Nhập thông tin tìm kiếm|Textbox<br>|Không|varchar\(100\)|Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|3|Gần đây|Button|Không||Hiển thị lịch sử tìm kiếm gần đây|

**Use case Specification**

|**Use Case ID**||**UC\-4\.1**|**Use Case Name**||Search feed khách cần mua gấp|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**7****/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tìm kiếm bài đăng khách cần mua gấp||||
|**Pre\-Condition**||Trong hệ thống có tin đăng khớp với từ khoá||||
|**Main Flows**||1. Người dùng chọn icon Khách cần mua gấp<br>2. Hệ thống hiển thị feed Khách cần mua gấp         <br>3. Chọn icon tìm kiếm <br>4. Hệ thống hiển thị màn hình tìm kiếm <br>5. Người dùng điền từ khoá cần tìm kiếm vào textbox tìm kiếm và ấn Enter<br>6. Hệ thống lọc thông tin có chứa các từ khoá và hiển thị nội dung tương ứng với từ khoá||||
|**Exception Flows**||||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

### **Tương tác Feed Khách cần mua gấp**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[x\]|Button|Không||Bấm để thoát khỏi bình luận|
|2|Thích|Button|Không||Bấm để tương tác bài viết|
|3|Trả lời|Button|Không||Bấm để tương tác bài viết|
|4|Viết bình luận|Textbox|Không|varchar\(200\)|Nhâp nội dung tương tác bài viết|
|5|Camera icon|Button|Không|ảnh\(\<5MB\)|Bấm để chọn ảnh hoặc mở camera chụp ảnh|
|6|Nhãn dán icon|Button|Không||Bấm để chọn nhãn dán|
|7|Emoji icon|Button|Không||Bấm để chọn icon|
|8|\[x\]|Button|Không||Bấm để thoát khỏi máy ảnh|
|9|Switch camera icon|Button|Không||Bấm để đổi camera|
|10|Flash icon|Button|Không||Bấm để bật đèn flash|
|11|Thư viện ảnh trong máy|Button|Không||Bấm để mở thư viện ảnh <br>|

### **Tạo Feed Khách cần mua gấp**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Thành phố|Dropdownlist|Có||Bấm để chọn danh mục|
|3|Quận/Huyện|Dropdownlist|Có||Bấm để chọn danh mục|
|4|Tài chính|Textbox|Có|varchar|Nhập số tiền có thể chi trả|
|5|Diện tích|Textbox|Có|varchar|Nhập diện cần mua|
|6|Mục đích|Textbox|Có|varchar|Nhập mục đích mua bất động sản|
|7|Yêu cầu |Textbox|Có|varchar\(1000\)|Nhập các yêu cầu về bất động sản|
|8|Đăng|Button|Không||Bấm để gửi đăng bài lên feed|

**Use case Specification**

|**Use Case ID**||**UC\-4\.2**|**Use Case Name**||Tạo feed khách cần mua gấp|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**7****/5/2024**|
|**Actor**||User ||||
|**Description**||Người dùng tạo tin đăng cho khách cần mua bđs gấp||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng truy cập vào trang Khách hàng cần mua gấp<br>2. Người dùng chọn Tạo bài viết<br>3. Người dùng nhập thông tin và chọn lệnh Đăng bài viết<br>4. Hệ thống xác thực thông tin <br>4\.1\. Nếu thông tin sai, người dùng quay lại bước 3 nhập thông tin<br>4\.2\. Nếu thông tin đúng, hệ thống lưu thông tin vào CSDL và chờ duyệt<br>4\.2\.1\. Nếu tin bị từ chối, hệ thống gửi thông báo bài viết bị từ chối <br>4\.2\.2\. Nếu tin được duyệt, hệ thống đẩy bài viết lên Khách cần mua gấp và gửi thông báo tin được duyệt <br>5. Người dùng đọc thông báo||||
|**Exception Flows**||||||
|**Business Rules**||BR\-11: Mục Yêu cầu không được nhập quá 1000 ký tự||||
|**Application Messages**||MSG\-18: Đăng bài thành công\. Xin vui lòng chờ duyệt\.||||

### **Xoá/Khoá/Ghim/Báo cáo Feed Khách cần mua gấp **

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Chỉnh sửa bài viết|Button|Không|||
|2|Xoá bài viết|Button|Không|||
|3|Khoá bình luận|Button|Không|||
|4|Sao chép bài viết|Button|Không|||
|5|Ghim bài viết |Button|Không|||
|6|Báo cáo bài viết |Button|Không|||
|7|Mở khoá bình luận|Button|Không|||
|8|Khoá bình luận thành công|Notifi popup|||Hiển thị khi người dùng khoá bình luận bài viết cá nhân và hệ thống đã ghi nhận hành động|
|9|Chức năng bình luận đã bị khoá|Notifi popup|||Hiển thị khi người dùng bình luận vào bài viết đã khoá bình luận|
|10|Xoá thành công|Notifi popup|||Hiển thị khi người dùng xoá bài viết và hệ thống đã ghi nhận hành động|
|11|Bạn có muốn xoá bài viết|Button||||
|12|Đáng chú ý|Card|||Hiển thị khi thư ký ghim bài viết|

### **Sửa Feed Khách cần mua gấp**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|Không||Bấm để quay lại trang trước đó|
|2|Thành phố<br>|Dropdownlist<br>|Có||Chọn thành phố |
|3|Quận/Huyện|Dropdownlist|Có||Chọn quận huyện tương ứng với thành phố<br>|
|4|Tài chính|Textbox|Có||Điền số tiền|
|5|Mục đích|Textbox|Có||Điền mục đích mua|
|6|Yêu cầu|Textbox|Có||Điền yêu cầu|

**Use case Specification**

|**Use Case ID**||**UC\-4\.1\.1**|**Use Case Name**||Sửa feed khách cần mua gấp|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**8/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng sửa bài viết cá nhân||||
|**Pre\-Condition**||Trong hệ thống có bài viết cá nhân||||
|**Main Flows**||1\. Người dùng Đăng nhập thành công <br>2\. Người dùng chọn Khách cần mua gấp và điền từ khoá cần tìm kiếm vào textbox tìm kiếm, sau đó chọn lệnh Tìm kiếm<br>3\. Hệ thống lọc thông tin có chứa từ khoá và hiển thị nội dung tương ứng với từ khoá<br>4\. Người dùng ấn icon \[\.\.\.\] ở góc bài viết và chọn lệnh Chỉnh sửa bài viết <br>5\. Hệ thống hiển thị form chỉnh sửa<br>6\. Người dùng điều chỉnh bài viết phù hợp và chọn lệnh Đăng tin<br>7\. Hệ thống định dạng thông tin<br>7\.1 Nếu thông tin sai, người dùng quay lại bước 6 điều chỉnh bài viết phù hợp<br>7\.2 Nếu thông tin đúng, hệ thống lưu vào CSDL||||
|**Exception Flows**||||||
|**Business Rules**||BR\-11: Mục Yêu cầu không được nhập quá 1000 ký tự||||
|**Application Messages**||MSG\-27: Cập nhật thành công\!||||

## **Feed Tin hoạt động**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|Không||Bấm để quay lại trang trước đó|
|2|Chat icon|Button|Không||Bấm để chuyển đến chatbox|
|3|Tạo bài viết<br>|Button<br>|Không||Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|4|Search icon|Button|Không||Bấm để hiển thị màn hình tìm kiếm|
|5|\[Ảnh\]|Button|Không||Bấm để hiển màn hình profile đầu chủ|
|6|\[Tên\]|Button|Không||Bấm để hiển màn hình profile đầu chủ|
|7|\#\[hashtag\]|Button|Không||Bấm vào hashtag để xem các bài đăng tương ứng với người đăng, phòng ban và khối|
|8|Điện thoại icon|Button|Không||Bấm để nhảy qua ứng dụng quay số điện thoại|
|9|Zalo icon|Button|Không||Bấm để nhảy qua ứng dụng zalo|
|10|Messenger icon|Button|Không||Bấm để nhảy qua ứng dụng messenger|
|11|Chat khonhapho icon|Button|Không||Bấm để di chuyển sang màn hình chat|
|12|Thích|Button|Không||Bấm để thích bài viết|
|13|Bình luận|Button|Không||Bấm để hiển thị màn hình bình luận|
|14|Chia sẻ|Button|Không||Bấm để sao chép link chia sẻ|
|15|Viết bình luận|Button|Không||Bấm để soạn bình luận, tương tác với bài viết|

### **Search Bài viết Feed**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|Không||Bấm để quay lại trang trước đó|
|2|Nhập thông tin tìm kiếm|Textbox<br>|Không||Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|3|Gần đây|Button|Không||Hiển thị lịch sử tìm kiếm gần đây|

**Use case Specification**

|**Use Case ID**||**UC\-5\.1\.1**|**Use Case Name**||Search feed thông báo vụ chốt|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**7****/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tìm kiếm vụ chốt||||
|**Pre\-Condition**||Trong hệ thống có tin đăng khớp với từ khoá||||
|**Main Flows**||1. Người dùng chọn icon Thông báo vụ chốt<br>2. Hệ thống hiển thị feed Thông báo vụ chốt <br>3. Chọn icon tìm kiếm <br>4. Hệ thống hiển thị màn hình tìm kiếm <br>5. Người dùng điền từ khoá cần tìm kiếm vào textbox tìm kiếm và ấn Enter<br>6. Hệ thống lọc thông tin có chứa các từ khoá và hiển thị nội dung tương ứng với từ khoá||||
|**Exception Flows**||||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

### **Tương tác Bài viết **

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[x\]|Button|Không||Bấm để thoát khỏi bình luận|
|2|Thích|Button|Không||Bấm để tương tác bài viết|
|3|Trả lời|Button|Không||Bấm để tương tác bài viết|
|4|Viết bình luận|Textbox|Không|varchar\(200\)|Nhâp nội dung tương tác bài viết|
|5|Camera icon|Button|Không|ảnh\(\<5MB\)|Bấm để chọn ảnh hoặc mở camera chụp ảnh|
|6|Nhãn dán icon|Button|Không||Bấm để chọn nhãn dán|
|7|Icon icon|Button|Không||Bấm để chọn icon|
|8|\[x\]|Button|Không||Bấm để thoát khỏi máy ảnh|
|9|Switch camera icon|Button|Không||Bấm để đổi camera|
|10|Flash icon|Button|Không||Bấm để bật đèn flash|
|11|Thư viện ảnh trong máy|Button|Không||Bấm để mở thư viện ảnh |

### **Tạo Bài viết Feed theo danh mục Tin hoạt động**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|Không||Bấm để quay lại trang trước đó|
|2|Bắt đầu một bài viết|Textbox<br>|Không|varchar\(3000\)|Nhâp nội dung bài viết|
|3|Ảnh |Button|Không||Bấm để tải ảnh lên|
|4|Đăng|Button|Không||Bấm để đăng tải bài viết|

**Use case Specification**

|**Use Case ID**||**UC\-5\.1\.3**|**Use Case Name**||Tạo feed thông báo vụ chốt|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**7****/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng đăng tải vụ chốt thành công||||
|**Pre\-Condition**||||||
|**Main Flows**||1\. Người dùng chọn icon Thông báo vụ chốt<br>2\.Hệ thống hiển thị feed Thông báo vụ chốt<br>3\. Bấm chọn Tạo bài viết<br>4\. Hệ thống hiển thị form tạo bài viết<br>5\. Người dùng nhập thông tin và chọn lệnh Đăng tin<br>6\. Hệ thống định dạng thông tin<br>6\.1 Nếu thông tin sai, người dùng quay lại bước 5 nhập thông tin<br>6\.2 Nếu thông tin đúng, hệ thống lưu thông tin vào CSDL và đẩy lên feed thông báo vụ chốt||||
|**Exception Flows**||||||
|**Business Rules**||BR\-16: Nội dung bài viết giới hạn 3000 ký tự||||
|**Application Messages**||MSG\-16: Không được bỏ trống mục này\.<br>MSG\-19: Đăng bài thành công\.||||

### **Xoá/Khoá/Ghim/Báo cáo Bài viết Feed**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Chỉnh sửa bài viết|Button|Không|||
|2|Xoá bài viết|Button|Không|||
|3|Khoá bình luận|Button|Không|||
|4|Sao chép bài viết|Button|Không|||
|5|Ghim bài viết |Button|Không|||
|6|Báo cáo bài viết |Button|Không|||
|7|Mở khoá bình luận|Button|Không|||
|8|Khoá bình luận thành công|Notifi popup|||Hiển thị khi người dùng khoá bình luận bài viết cá nhân và hệ thống đã ghi nhận hành động|
|9|Chức năng bình luận đã bị khoá|Notifi popup|||Hiển thị khi người dùng bình luận vào bài viết đã khoá bình luận|
|10|Xoá thành công|Notifi popup|||Hiển thị khi người dùng xoá bài viết và hệ thống đã ghi nhận hành động|
|11|Bạn có muốn xoá bài viết|Button||||
|12|Đáng chú ý|Card|||Hiển thị khi thư ký ghim bài viết|

### **Sửa bài viết Feed**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Nội dung bài viết|Textbox|Không|||
|3|Ảnh |Button|Không||Bấm để tải ảnh lên|
|4|Lưu|Button|Không||Bấm để lưu bản chỉnh sửa|

**Use case Specification**

|**Use Case ID**||**UC\-5\.1\.4**|**Use Case Name**||Sửa feed thông báo vụ chốt|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**8****/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng sửa bài viết cá nhân||||
|**Pre\-Condition**||Trong hệ thống có bài viết cá nhân||||
|**Main Flows**||1\. Người dùng Đăng nhập thành công <br>2\. Người dùng chọn tin hoạt động, mục thông báo vụ chốt và điền từ khoá cần tìm kiếm vào textbox tìm kiếm, sau đó chọn lệnh Tìm kiếm<br>3\. Hệ thống lọc thông tin có chứa từ khoá và hiển thị nội dung tương ứng với từ khoá<br>4\. Người dùng ấn icon \[\.\.\.\] ở góc bài viết và chọn lệnh Chỉnh sửa bài viết <br>5\. Hệ thống hiển thị form chỉnh sửa<br>6\. Người dùng điều chỉnh bài viết phù hợp và chọn lệnh Đăng tin<br>7\. Hệ thống định dạng thông tin<br>7\.1 Nếu thông tin sai, người dùng quay lại bước 6 điều chỉnh bài viết phù hợp<br>7\.2 Nếu thông tin đúng, hệ thống lưu vào CSDL||||
|**Exception Flows**||||||
|**Business Rules**||BR\-16: Nội dung bài viết giới hạn 3000 ký tự||||
|**Application Messages**||MSG\-27: Cập nhật thành công\!||||

## **Quy định và Hướng Dẫn \(Modify 2\.1\)**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|Không||Bấm để quay lại trang trước đó|
|2|Tạo bài viết<br>|Button<br>|Không||Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|3|Search icon|Button|Không||Bấm để hiển thị màn hình tìm kiếm|
|4|\[Ảnh\]|Button|Không||Bấm để hiển màn hình profile đầu chủ|
|5|\[Tên\]|Button|Không||Bấm để hiển màn hình profile đầu chủ|
|6|\#\[hashtag\]|Button|Không||Bấm vào hashtag để xem các bài đăng tương ứng với người đăng, phòng ban và khối|
|7|Điện thoại icon|Button|Không||Bấm để nhảy qua ứng dụng quay số điện thoại|
|8|Zalo icon|Button|Không||Bấm để nhảy qua ứng dụng zalo|
|9|Messenger icon|Button|Không||Bấm để nhảy qua ứng dụng messenger|
|10|Thích|Button|Không||Bấm để thích bài viết|
|11|Bình luận|Button|Không||Bấm để hiển thị màn hình bình luận|
|12|Chia sẻ|Button|Không||Bấm để sao chép link chia sẻ|
|13|Viết bình luận|Button|Không||Bấm để soạn bình luận, tương tác với bài viết|

### Quy định

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Nhập thông tin tìm kiếm|Textbox<br>|Không||Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|3|Gần đây|Button|Không||Hiển thị lịch sử tìm kiếm gần đây|

**Use case Specification**

|**Use Case ID**||**UC\-6\.7**|**Use Case Name**||Xem quy định công ty|
|---|---|---|---|---|---|
|**Author**||**Nam**|**Date**||**28/11/2024**|
|**Actor**||User||||
|**Description**||Người dùng xem các bài quy định công ty\. Có thể tương tác \(Like \- Comment \- Share\)||||
|**Pre\-Condition**||Người dùng đã đăng nhập||||
|**Main Flows**||1. Người dùng chọn icon Quy định và hướng dẫn<br>2. Hệ thống hiển thị màn hình Quy định và hướng dẫn<br>3. Người dùng chọn Icon Quy định<br>4. Hệ thống hiển thị màn hình các bài Quy định<br>5. Người dùng xem và có thể thực hiện các hành động tương tác đối với từng bài đăng Quy định||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

### Trung tâm hướng dẫn trợ giúp

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Nhập thông tin tìm kiếm|Textbox<br>|Không||Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|3|Gần đây|Button|Không||Hiển thị lịch sử tìm kiếm gần đây|

**Use case Specification**

|**Use Case ID**||**UC\-6\.7**|**Use Case Name**||Trung tâm hướng dẫn và trợ giúp|
|---|---|---|---|---|---|
|**Author**||**Nam**|**Date**||**28/11/2024**|
|**Actor**||User||||
|**Description**||Người dùng xem các hướng dẫn theo các danh mục||||
|**Pre\-Condition**||Người dùng đã đăng nhập vào hệ thống||||
|**Main Flows**||1. Người dùng chọn icon Quy định và hướng dẫn<br>2. Hệ thống hiển thị màn hình Quy định và hướng dẫn<br>3. Người dùng chọn Icon Trung tâm hướng dẫn và trợ giúp<br>4. Hệ thống hiển thị màn hình trung tâm hướng dẫn và trợ giúp<br>5. Người dùng xem và có thể thực hiện các hành động tương tác đối với từng bài đăng Quy định||||
|**Exception Flows**||||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

## **Danh sách Nhân sự công ty**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|Không||Bấm để quay lại trang trước đó|
|2|Icon lọc<br>|Button<br>|Không||Bấm để hiển thị màn hình lọc|
|3|Thanh search|Textbox|Không||Bấm để hiển thị màn hình tìm kiếm|
|4|Tên|Text button|Không||Bấm để hiển màn hình profile đầu chủ|
|5|Số Điện thoại|Text button|Không||Bấm để nhảy qua ứng dụng quay số điện thoại|
|6|Zalo icon|Button|Không||Bấm để nhảy qua ứng dụng zalo|
|7|Messenger icon|Button|Không||Bấm để nhảy qua ứng dụng messenger|
|8|Chat khonhapho icon|Button|Không||Bấm để di chuyển qua màn hình chat|
|9|Facebook icon|Button|Không||Bấm để nhảy qua ứng dụng facebook|

### **Search Danh sách Công Ty**

**Use case Specification**

|**Use Case ID**||**UC\-7\.2**|**Use Case Name**||Search danh sách công ty|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**7/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tìm kiếm nhân sự công ty||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào mục Danh sách công ty trong sidebar<br>2. Hệ thống hiển thị danh sách nhân sự<br>3. Người dùng nhập từ khoá vào thanh search, sau đấy bấm enter trên bàn phím hoặc nút \[search\]<br>4. Hệ thống hiển thị các thành viên phù hợp với từ khoá||||
|**Exception Flows**||||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

### **Filter Danh sách Công Ty**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|Không||Bấm để quay lại trang trước đó|
|2|Chi nhánh|Dropdown<br>|||Bấm để chọn chi nhánh|
|3|Phòng ban|Dropdown|||Bấm để chọn phòng ban tương ứng với chi nhánh|
|4|Chức danh|Dropdown|||Bấm để chọn chức danh|
|5|Lọc|Button|||Bấm để thực hiện Lọc theo tiêu chí đã chọn|
|6|Đặt lại|Button|||Bấm để đặt lại toàn bộ các tiêu chí đã chọn|

**Use case Specification**

|**Use Case ID**||**UC\-7\.1**|**Use Case Name**||Filter danh sách công ty|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**7/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng lọc danh sách thành viên||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào mục Danh sách công ty trong sidebar<br>2. Hệ thống hiển thị màn hình danh sách nhân sự<br>3. Người dùng chọn icon Lọc<br>4. Hệ thống hiển thị Bộ lọc<br>5. Người dùng chọn các tiêu chí phù hợp, sau đấy bấm nút \[Lọc\]<br>6. Hệ thống hiển thị các thành viên phù hợp với tiêu chí||||
|**Exception Flows**||||||
|**Business Rules**||Các chức danh từ GĐKV trở xuống chỉ nhìn thấy các thành viên thuộc chi nhánh, trụ sở của họ||||
|**Application Messages**||||||

## **Thư viện Nhà Phố**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Chat|Button|Không||Bấm để chuyển sang màn hình chat|
|3|Search icon|Button|Không||Bấm để hiển thị màn hình tìm kiếm|
|4|Bạn nhập thông tin khách cần mua|Button|Không||Bấm để hiển thị màn hình đăng bài viêt|
|5|\[Ảnh\]|Button|Không||Bấm để hiển màn hình profile đầu chủ|
|6|\[Tên\]|Button|Không||Bấm để hiển màn hình profile đầu chủ|
|7|\[\.\.\.\]|Button|Không||Bấm để hiển thị option đối với bài viết|
|8|\#\[hashtag\]|Button|Không||Bấm vào hashtag để xem các bài đăng tương ứng với người đăng, phòng ban và khối|
|9|Điện thoại icon|Button|Không||Bấm để nhảy qua ứng dụng quay số điện thoại|
|10|Zalo icon|Button|Không||Bấm để nhảy qua ứng dụng zalo|
|11|Messenger icon|Button|Không||Bấm để nhảy qua ứng dụng messenger|
|12|Chat khonhapho icon|Button|Không||Bấm để di chuyển qua màn hình chat|
|13|Thích|Button|Không||Bấm để thích bài viết|
|14|Bình luận|Button|Không||Bấm để hiển thị màn hình bình luận|
|15|Chia sẻ|Button|Không||Bấm để sao chép link chia sẻ|
|16|Viết bình luận|Button|Không||Bấm để mở màn hình bình luận|

### **Search Bài viết Thư Viện Nhà Phố**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Nhập thông tin tìm kiếm|Textbox<br>|Không||Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|3|Gần đây|Button|Không||Hiển thị lịch sử tìm kiếm gần đây|

**Use case Specification**

|**Use Case ID**||**UC\-8\.1\.1**|**Use Case Name**||Search Thư viện kiến thức|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**7****/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tìm kiếm kho kiến thức||||
|**Pre\-Condition**||Trong hệ thống có tin đăng khớp với từ khoá||||
|**Main Flows**||1. Người dùng chọn icon Thư viện kiến thức<br>2. Hệ thống hiển thị feed Thư viện kiến thức<br>3. Chọn icon tìm kiếm <br>4. Hệ thống hiển thị màn hình tìm kiếm <br>5. Người dùng điền từ khoá cần tìm kiếm vào textbox tìm kiếm và ấn Enter<br>6. Hệ thống lọc thông tin có chứa các từ khoá và hiển thị nội dung tương ứng với từ khoá||||
|**Exception Flows**||||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

### **Tương tác Bài viết Thư Viện Nhà Phố**

**Screen Design**

### **Tạo Bài viết Thư Viện Nhà Phố theo Danh mục**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|Không||Bấm để quay lại trang trước đó|
||Tiêu đề bài viết|Textbox|Không|varchar\(100\)|Nhập tiêu đề bài viết |
|2|Bắt đầu một bài viết|Textbox<br>|Không|varchar|Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|3|Ảnh |Button|Không||Bấm để tải ảnh lên|
|4|Đăng|Button|Không||Bấm để đăng tải bài viết|

**Use case Specification**

|**Use Case ID**||**UC\-8\.1\.3**|**Use Case Name**||Tạo feed Thư viện kiến thức|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**7****/5/2024**|
|**Actor**||User \(Thư ký\)||||
|**Description**||Người dùng đăng tải kiến thức||||
|**Pre\-Condition**||||||
|**Main Flows**||1\. Người dùng chọn icon Thư viện kiến thức<br>2\.Hệ thống hiển thị feed Thư viện kiến thức<br>3\. Bấm chọn Tạo bài viết<br>4\. Hệ thống hiển thị form tạo bài viết<br>5\. Người dùng nhập thông tin và chọn lệnh Đăng tin<br>6\. Hệ thống định dạng thông tin<br>6\.1 Nếu thông tin sai, người dùng quay lại bước 5 nhập thông tin<br>6\.2 Nếu thông tin đúng, hệ thống lưu thông tin vào CSDL và đẩy lên feed Thư viện kiến thức||||
|**Exception Flows**||||||
|**Business Rules**||BR\-12: Bài viết trên feed chỉ được nhúng tối đa 10 link youtube<br>BR\-15: Tiêu đề bài viết giới hạn 100 ký tự<br>BR\-16: Nội dung bài viết giới hạn 3000 ký tự||||
|**Application Messages**||MSG\-18: Đăng bài thành công\. Xin vui lòng chờ duyệt\.||||

### **Xoá/Khoá/Ghim/Báo cáo Bài viết Thư Viện Nhà Phố**

**Screen Design**

### **Sửa Bài viết Thư Viện Kiến Thức**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Tiêu đề||Có|||
|3|Nội dung bài viết|Textbox|Có|||
|4|Danh mục đào tạo|Dropdownlist|Có||Chọn các danh mục đào tạo|
|5|Ảnh |Button|Không||Bấm để tải ảnh lên|
|6|Lưu|Button|Không||Bấm để lưu bản chỉnh sửa|

**Use case Specification**

|**Use Case ID**||**UC\-8\.1\.4**|**Use Case Name**||Sửa feed thư viện kiến thức|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**8/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng sửa bài viết cá nhân||||
|**Pre\-Condition**||Trong hệ thống có bài viết cá nhân||||
|**Main Flows**||1. Người dùng Đăng nhập thành công<br>2. Người dùng chọn menu<br>3. Hệ thống hiển thị màn hình menu<br>4. Người dùng chọn Thư viện Nhà Phố, mục Thư viện kiến thức, sau đấy bấm vào icon search<br>5. Hệ thống lọc thông tin có chứa từ khoá và hiển thị nội dung tương ứng với từ khoá<br>6. Người dùng ấn icon \[\.\.\.\] ở góc bài viết và chọn lệnh Chỉnh sửa bài viết <br>7. Hệ thống hiển thị form chỉnh sửa<br>8. Người dùng điều chỉnh bài viết phù hợp và chọn lệnh Đăng tin<br>9. Hệ thống định dạng thông tin<br>9\.1 Nếu thông tin sai, người dùng quay lại bước 6 điều chỉnh bài viết phù hợp<br>9\.2 Nếu thông tin đúng, hệ thống lưu vào CSDL||||
|**Exception Flows**||||||
|**Business Rules**||BR\-16: Nội dung bài viết giới hạn 3000 ký tự||||
|**Application Messages**||MSG\-27: Cập nhật thành công\!||||

## **Quản lý khách \- Tự khớp khách**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|||Bấm để quay lại trang trước đó|
|2|Icon search|Button<br>|||Bấm để hiển thị màn hình chat với đầu chủ|
|3|Icon chat|Button|||Bấm để chuyển sang màn hình chat|
|4|18 Câu truy vấn khách hàng|Text button|||Bấm để hiển thị hướng dẫn truy vấn|
|5|Thêm mới|Button|||Bấm để thêm khách hàng|
|6|Tab Đang tìm mua \(Mặc định\)|Button|||Bấm để di chuyển sang tab Đang tìm mua|
|7|Tab Đã mua nhà|Button|||Bấm để di chuyển sang tab Đang tìm mua|
|8|\[\.\.\.\]|Button|||Bấm để tương tác với khách hàng|

### Thêm thông tin khách hàng

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|<br>||Bấm để quay lại trang trước đó|
|2<br>|Họ và tên khách hàng<br>|Textbox<br>|Có||Bấm để nhập tên khách hàng|
|3|CMND/CCCD|Textbox|Có||Bấm để nhập CCCD của khách|
|4|Năm sinh khách|Textbox|Có||Bấm để nhập năm sinh khách|
|5|SĐT khách|Textbox|||Bấm để nhập SĐT khách|
|6|Nơi khách ở|Textbox|||Bấm để nhập nơi khách ở|
|7|Tài chính tối đa|Textbox|Có||Bấm để nhập tài chính tối đa|
|8|Thành phố|Dropdown|Có||Bấm để chọn thành hphó|
|9|Quận huyện|Dropdown|Có||Bấm để chọn quận huyện tương ứng với thành phố|
|10|Hướng nhà|Dropdown|||Bấm để chọn hướng nhà|
|11|Mục đích mua|Dropdown|||Bấm để chọn mục đích mua|
|12|Tài chính sẵn sàng|Checkbox|||Bấm để tích nếu phù hợp|
|13|Đã mua hụt nhà|Checkbox|||Bấm để tích nếu phù hợp|
|14|Hiểu thị trường|Checkbox|||Bấm để tích nếu phù hợp|
|15|Tôn trọng môi giới|Checkbox|||Bấm để tích nếu phù hợp|
|16|Cần mua gấp|Checkbox|||Bấm để tích nếu phù hợp|
|17|Ghi chú yêu cầu|Textbox|||Bấm để nhập nội dung ghi chú|
|18|Đóng|Button|||Bấm để đóng form nhập thông tin khách|
|19|Thêm|Button|Có||Bấm để thêm khách hàng|

**Use case Specification**

|**Use Case ID**||**UC\-9\.1\.1**|**Use Case Name**||Thêm thông tin khách|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**13/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng thêm thông tin khách hàng||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào Avatar ở sidebar<br>2. Hệ thống hiển thị Menu<br>3. Người dùng bấm vào block Tài khoản cá nhân, chọn mục quản lý khách hàng<br>4. Hệ thống hiển thị màn hình quản lý khách hàng<br>5. Người dùng bấm vào nút \[Thêm mới\]<br>6. Hệ thống hiển thị form nhập thông tin khách<br>7. Người dùng nhập nội dung sau đấy bấm nút gửi<br>8. Hệ thống lưu vào CSDL, thông báo thêm thành công||||
|**Exception Flows**||7\.1 Khi người dùng nhập sai, hệ thống báo lỗi||||
|**Business Rules**||- BR\-02: SĐT hoặc CCCD phải đúng định dạng<br>- BR\-06: Họ và tên không được quá 50 ký tự<br>- BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 18\)<br>- BR\-22: Tài chính tối thiểu của khách nhập từ 200\.000\.000 đổ lên<br>- Yêu cầu khách hàng không được quá 3000 ký tự||||
|**Application Messages**||- MSG\-11: Số điện thoại chưa hợp lệ\!<br>- MSG\-16: Không được bỏ trống mục này\.<br>- MSG\-30: Thêm thông tin khách hàng thành công||||

### Search khách hàng

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Nhập thông tin tìm kiếm|Textbox<br>|Không||Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|3|Gần đây|Button|Không||Hiển thị lịch sử tìm kiếm gần đây|

**Use case Specification**

|**Use Case ID**||**UC\-9\.1\.2**|**Use Case Name**||Search khách|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tìm kiếm khách hàng đã tạo trước đấy||||
|**Pre\-Condition**||Trong hệ thống có thông tin khách hàng người dùng đã tạo||||
|**Main Flows**||1. Người dùng bấm vào Avatar ở sidebar<br>2. Hệ thống hiển thị Menu<br>3. Người dùng bấm vào block Tài khoản cá nhân, chọn mục Quản lý khách<br>4. Hệ thống hiển thị màn hình quản lý khách hàng<br>5. Người dùng bấm vào icon search<br>6. Hệ thống hiển thị màn hình search<br>7. Người dùng nhập từ khoá sau đấy bấm nút enter<br>8. Hệ thống hiển thị danh sách khách khớp với từ khoá||||
|**Exception Flows**||||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

### Lọc thông tin khách hàng \(New\)

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Nhập thông tin tìm kiếm|Textbox<br>|Không||Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|3|Gần đây|Button|Không||Hiển thị lịch sử tìm kiếm gần đây|

**Use case Specification**

|**Use Case ID**|||**Use Case Name**||Lọc thông tin khách hàng|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**15/08/2024**|
|**Actor**||User||||
|**Description**||Cho phép người dùng lọc danh sách khách hàng của mình theo các tiêu chí||||
|**Pre\-Condition**||Người dùng đăng nhập thành công và truy cập vào Tài khoản cá nhân \-\> QL khách \- Tự khớp khách||||
|**Main Flows**||1. Người dùng truy cập vào "Tài khoản cá nhân", Chọn "QL khách\- Tự khớp khách"<br>2. Hệ thống chuyển hướng đến "QL khách\- Tự khớp khách"<br>3. Người dùng thực hiện lọc danh sách khách hàng theo tiêu chí<br>4. Hệ thống hiển thị danh sách theo tiêu chí người dùng đã chọn||||
|**Exception Flows**||||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

### Sửa thông tin khách hàng

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|<br>||Bấm để quay lại trang trước đó|
|2<br>|Họ và tên khách hàng<br>|Textbox<br>|Có||Bấm để nhập tên khách hàng|
|3|CMND/CCCD|Textbox|Có||Bấm để nhập CCCD của khách|
|4|Năm sinh khách|Textbox|Có||Bấm để nhập năm sinh khách|
|5|SĐT khách|Textbox|||Bấm để nhập SĐT khách|
|6|Nơi khách ở|Textbox|||Bấm để nhập nơi khách ở|
|7|Tài chính tối đa|Textbox|Có||Bấm để nhập tài chính tối đa|
|8|Thành phố|Dropdown|Có||Bấm để chọn thành hphó|
|9|Quận huyện|Dropdown|Có||Bấm để chọn quận huyện tương ứng với thành phố|
|10|Hướng nhà|Dropdown|||Bấm để chọn hướng nhà|
|11|Mục đích mua|Dropdown|||Bấm để chọn mục đích mua|
|12|Tài chính sẵn sàng|Checkbox|||Bấm để tích nếu phù hợp|
|13|Đã mua hụt nhà|Checkbox|||Bấm để tích nếu phù hợp|
|14|Hiểu thị trường|Checkbox|||Bấm để tích nếu phù hợp|
|15|Tôn trọng môi giới|Checkbox|||Bấm để tích nếu phù hợp|
|16|Cần mua gấp|Checkbox|||Bấm để tích nếu phù hợp|
|17|Ghi chú yêu cầu|Textbox|||Bấm để nhập nội dung ghi chú|
|18|Hiện trạng|Dropdown|||Bấm để chọn hiện trạng khách hàng|
|19|Đóng|Button|||Bấm để đóng form nhập thông tin khách|
|20|Lưu|Button|Có||Bấm để lưu khách hàng|

**Use case Specification**

|**Use Case ID**||**UC\-9\.1\.3\.1**|**Use Case Name**||Sửa thông tin khách hàng|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng sửa thông tin khách hàng||||
|**Pre\-Condition**||Trong hệ thống có thông tin khách hàng người dùng đã tạo trước đó||||
|**Main Flows**||1. Người dùng bấm vào Avatar ở sidebar<br>2. Hệ thống hiển thị Menu<br>3. Người dùng bấm vào block Tài khoản cá nhân, chọn mục Quản lý khách<br>4. Hệ thống hiển thị màn hình quản lý khách hàng<br>5. Người dùng bấm vào nút \[\.\.\.\] ở cột tương tác, chọn sửa thông tin<br>6. Hệ thống hiển thị form sửa thông tin khách<br>7. Người dùng nhập nội dung sau đấy bấm nút lưu<br>8. Hệ thống lưu vào CSDL, thông báo cập nhật thành công||||
|**Exception Flows**||7\.1 Khi người dùng nhập sai, hệ thống báo lỗi||||
|**Business Rules**<br>||- BR\-02: SĐT phải đúng định dạng <br>- BR\-06: Họ và tên không được quá 50 ký tự<br>- BR\-22: Tài chính tối thiểu của khách nhập từ 200\.000\.000 đổ lên||||
|**Application Messages**||- MSG\-11: Số điện thoại chưa hợp lệ\!<br>- MSG\-16: Không được bỏ trống mục này\.<br>- MSG\-29: Cập nhật thông tin khách hàng thành công||||

### Xoá khách

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-9\.1\.3\.2\.1**|**Use Case Name**||Xoá khách|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng xoá thông tin khách hàng||||
|**Pre\-Condition**||Trong hệ thống có thông tin khách hàng người dùng đã tạo trước đó||||
|**Main Flows**||1. Người dùng bấm vào Avatar ở sidebar<br>2. Hệ thống hiển thị Menu<br>3. Người dùng bấm vào block Tài khoản cá nhân, chọn mục Quản lý khách<br>4. Hệ thống hiển thị màn hình quản lý khách hàng<br>5. Người dùng bấm vào Tab Đã mua nhà<br>6. Hệ thống chuyển sang Tab đã mua nhà<br>7. Người dùng bấm vào nút \[\.\.\.\] ở cột tương tác, chọn Xoá<br>8. Hệ thống hiển thị form xác nhận<br>9. Người dùng chọn \[đồng ý\]<br>10. Hệ thống lưu vào CSDL, thông báo xoá thành công||||
|**Exception Flows**||||||
|**Business Rules**||Chỉ có thể xoá khách khi khách ở trạng thái đã mua nhà||||
|**Application Messages**||- MSG\-24: Xoá thành công\.||||

### Xem danh sách nhà đã dẫn đi xem

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|<br>||Bấm để quay lại trang trước đó|
|2<br>|Block thông tin nhà<br>|Button<br>|||Bấm để xem chi tiết tin đăng|
|3|Icon điện thoại|Button|||Bấm để quay số điện thoại của đầu chủ|
|4|Icon messenger|Button|||Bấm để di chuyển sang ứng dụng messenger|
|5|Icon zalo|Button|||Bấm để di chuyển sang ứng dụng zalo|
|6|Icon chat khonhapho|Button|||Bấm để di chuyển sang màn hình chat|
|7|Icon đặt lịch|Button|||Bấm để hiển thị form đặt lịch tin đăng|
|8|Icon lưu|Button|||Bấm để lưu tin đăng|
|9|Icon báo cáo dẫn khách|Button|||Bấm để hiển thị form báo cáo dẫn khách|

**Use case Specification**

|**Use Case ID**||**UC\-9\.1\.3\.3**|**Use Case Name**||Xem danh sách nhà đã dẫn đi xem|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**13/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng xem danh sách nhà đã dẫn khách đi xem||||
|**Pre\-Condition**||Người dùng đã báo cáo dẫn khách đúng với tên khách hàng này trước đó||||
|**Main Flows**||1. Người dùng bấm vào Avatar ở sidebar<br>2. Hệ thống hiển thị Menu<br>3. Người dùng bấm vào block Tài khoản cá nhân, chọn mục Quản lý khách hàng<br>4. Hệ thống hiển thị màn hình quản lý khách hàng<br>5. Người dùng bấm vào nút \[\.\.\.\] ở cột tương tác, chọn Căn đã dẫn đi xem<br>6. Hệ thống chuyển sang màn hình danh sách nhà đã dẫn đi xem||||
|**Exception Flows**||||||
|**Business Rules**||Khi báo cáo dẫn khách bắt buộc Tên khách, CCCD khách trùng với thông tin khách đã tạo để lấy dữ liệu||||
|**Application Messages**||||||

### Xem danh sách hàng khớp

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|<br>||Bấm để quay lại trang trước đó|
|2<br>|Icon filter<br>|Button<br>|||Bấm để bật bộ lọc|
|3|Tin nổi bật|Dropdown|||Bấm để chọn tiêu chí tin|
|4|Icon Lưu|Button|||Bấm để hiển thị form chọn bộ sưu tập|
|5|Icon Đặt lịch|Button|||Bấm để hiển thị form đặt lịch|
|6|\[Xem\]|Button|||Bấm để xem chi tiết tin đăng|

**Use case Specification**

|**Use Case ID**||**UC\-9\.1\.3\.4**|**Use Case Name**||Xem danh sách hàng khớp|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**13/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng xem danh sách nhà khớp với tiêu chí của khách hàng||||
|**Pre\-Condition**||Người dùng đã thêm đầy đủ thông tin khách hàng<br>Trong hệ thống có bản ghi tin đăng kho tài nguyên khớp với thông tin yêu cầu khách||||
|**Main Flows**||1. Người dùng bấm vào Avatar ở sidebar<br>2. Hệ thống hiển thị Menu<br>3. Người dùng bấm vào block Quản lý khách hàng<br>4. Hệ thống hiển thị màn hình quản lý khách hàng<br>5. Người dùng bấm vào nút \[\.\.\.\] ở cột tương tác, chọn Tìm hàng phù hợp<br>6. Hệ thống chuyển sang màn hình danh sách nhà khớp với yêu cầu khách||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

#### Filter danh sách hàng khớp

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|<br>||Bấm để quay lại trang trước đó|
|2<br>|Hiện trạng<br>|Button<br>|||Bấm để bật camera|
|3|Loại hình|Button|||Bấm để chọn ảnh trong thư viện máy|
|4|Quận huyện|Button|||Bấm để cho emoji|
|5|Đặc điểm bất động sản|Button|||Bấm để ghi âm|
|6|\[Lọc\]|Button|||Bấm để lọc theo tiêu chí đã chọn|
|7|\[Đặt lại\]|Button|||Bấm để cài lại các tiêu chí đã chọn|

**Use case Specification**

|**Use Case ID**||**UC\-9\.1\.3\.4**|**Use Case Name**||Filter danh sách hàng khớp|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng chat với nhau để xác nhận||||
|**Pre\-Condition**||Người dùng có đặt lịch trước đó||||
|**Main Flows**||1. Người dùng bấm vào Avatar ở sidebar<br>2. Hệ thống hiển thị Menu<br>3. Người dùng bấm vào block Quản lý khách hàng<br>4. Hệ thống hiển thị màn hình quản lý khách hàng<br>5. Người dùng bấm vào nút \[\.\.\.\] ở cột tương tác, chọn Tìm hàng phù hợp<br>6. Hệ thống chuyển sang màn hình danh sách nhà khớp với yêu cầu của khách<br>7. Người dùng bấm vào icon lọc<br>8. Hệ thống di chuyển sang màn hình lọc<br>9. Người dùng chọn các tiêu chí và bấm nút Lọc<br>10. Hệ thống quay trở lai màn hình danh sách nhà khớp và hiển thị các tin khớp với từ khóa||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

## **Quản lý Lịch sử đặt lịch **

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|Không||Bấm để quay lại trang trước đó|
|2|Card chi tiết lịch hẹn<br>|Button<br>|Không||Bấm để hiển thị màn hình chat với đầu chủ|

### Chat với đầu chủ

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|<br>||Bấm để quay lại trang trước đó|
|2<br>|Icon ảnh<br>|Button<br>|||Bấm để bật camera|
|3|Icon sticker|Button|||Bấm để chọn ảnh trong thư viện máy|
|4|Icon emoji|Button|||Bấm để cho emoji|
|6|\[\>\]|Button|||Bấm để gửi tin nhắn|

**Use case Specification**

|**Use Case ID**||**UC\-9\.2\.1\.1**|**Use Case Name**||Chat với đầu chủ|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng chat với nhau để xác nhận||||
|**Pre\-Condition**||Người dùng có đặt lịch trước đó||||
|**Main Flows**||1. Người dùng bấm vào Avatar ở sidebar<br>2. Hệ thống hiển thị Menu<br>3. Người dùng bấm vào Tài khoản cá nhân<br>4. Hệ thống hiển thị danh sách các chức năng trong tài khoản cá nhân<br>5. Người dùng chọn lịch sử đặt lịch<br>6. Hệ thống hiển thị màn hình lịch sử đặt lịch<br>7. Người dùng bấm vào block chi tiết của lịch đặt<br>8. Hệ thống hiển thị màn hình chat chi tiết<br>9. Người dùng nhập nội dung sau đấy bấm nút gửi<br>10. Hệ thống lưu vào CSDL, hệ thống hiển thị nội dung mới nhập lên màn hình||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

## **Quản lý Lịch sử báo cáo **

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|||Bấm để quay lại trang trước đó|
|2|Thanh tìm kiếm<br>|Textbox<br>|||Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|3|Icon \[\] ở cột xem|Button|||Bấm để hiển thị chi tiết báo cáo|

### Search báo cáo dẫn khách

**Use case Specification**

|**Use Case ID**||**UC\-9\.3\.2**|**Use Case Name**||Search báo cáo dẫn khách|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tìm kiếm báo cáo dẫn khách||||
|**Pre\-Condition**||Trong hệ thống có tin đăng khớp với từ khoá||||
|**Main Flows**||1. Người dùng bấm vào Avatar ở sidebar<br>2. Hệ thống hiển thị Menu<br>3. Người dùng bấm vào Tài khoản cá nhân<br>4. Hệ thống hiển thị danh sách các chức năng trong tài khoản cá nhân<br>5. Người dùng chọn lịch sử báo cáo<br>6. Hệ thống hiển thị màn hình lịch sử báo cáo<br>7. Người dùng bấm vào thanh search và nhập từ khoá<br>8. Hệ thống hiển thị gợi ý các báo cáo khớp với từ khoá||||
|**Exception Flows**||||||
|**Business Rules**||- BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

### Xem chi tiết báo cáo dẫn khách

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|||Bấm để quay lại trang trước đó|
|2|Số điện thoại<br>|Textbox<br>|||Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|3|Icon zalo|Button|||Bấm để di chuyển sang ứng dụng zalo|
|4|Icon messenger|Button|||Bấm để di chuyển sang ứng dụng messenger|
|5|Icon chat khonhapho|Button|||Bấm để di chuyển qua màn hình chat|
|6|Tag text|Text button|||Bấm để tìm kiếm theo tag|
|7|Ảnh|Button|||Bấm để xem ảnh toàn màn hình|

**Use case Specification**

|**Use Case ID**||**UC\-9\.3\.1**|**Use Case Name**||Xem chi tiết báo cáo dẫn khách|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**3/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng xem chi tiết báo cáo dẫn khách||||
|**Pre\-Condition**||Người dùng có báo cáo dẫn khách trước đó||||
|**Main Flows**||1. Người dùng bấm vào Avatar ở sidebar<br>2. Hệ thống hiển thị Menu<br>3. Người dùng bấm vào Tài khoản cá nhân<br>4. Hệ thống hiển thị danh sách các chức năng trong tài khoản cá nhân<br>5. Người dùng chọn lịch sử báo cáo<br>6. Hệ thống hiển thị màn hình lịch sử báo cáo<br>7. Người dùng bấm vào icon \[\] ở cột xem<br>8. Hệ thống hiển thị màn hình chi tiết||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

## **Quản lý Bộ sưu tập **

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Thanh search<br>|Button<br>|||Bấm nhập thông tin search|
|2|Card bộ sưu tập<br>|Button<br>|||Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|3|\[\.\.\.\]|Button|||Bấm để bật tuỳ chọn với tin|
|4|\[Tạo bộ sưu tập\]|Button|||Bấm để tạo bộ sưu tập mới|

### Tạo bộ sưu tập

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-9\.4\.1**|**Use Case Name**||Tạo bộ sưu tập|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tạo mới bộ sưu tập||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm icon bộ sưu tập ở sidebar<br>2. Hệ thống di chuyển sang bộ sưu tập<br>3. Người dùng bấm nút \[Tạo bộ sưu tập\]<br>4. Hệ thống hiển thị form tạo bộ sưu tập<br>5. Người dùng nhập tên bộ sưu tập, sau đó bấm \[Tạo\]<br>6. Hệ thống lưu vào CSDL, thông báo thêm mới thành công||||
|**Exception Flows**||5\.1 Người dùng nhập sai, hệ thống thông báo lỗi||||
|**Business Rules**||- BR\-19: Tên bộ sưu tập tối đa 50 ký tự||||
|**Application Messages**||- MSG\-28: Thêm mới thành công\!||||

### Xoá bộ sưu tập

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-9\.4\.4**|**Use Case Name**||Xoá bộ sưu tập|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng xoá bộ sưu tập||||
|**Pre\-Condition**||Trong hệ thống có bộ sưu tập người dùng đã tạo trước đó||||
|**Main Flows**||1. Người dùng bấm icon bộ sưu tập ở sidebar<br>2. Hệ thống di chuyển sang bộ sưu tập<br>3. Người dùng bấm nút \[\.\.\.\] của bộ sưu tập, chọn xoá bộ sưu tập<br>4. Hệ thống hiển thị form xoá bộ sưu tập<br>5. Người dùng chọn có<br>5\.1 Người dùng chọn không thì hệ thống thoát khỏi form<br>6. Hệ thống lưu vào CSDL, thông báo xoá thành công||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||- MSG\-24: Xoá thành công\.||||

### Sửa bộ sưu tập

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-9\.4\.2**|**Use Case Name**||Sửa bộ sưu tập|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng sửa bộ sưu tập||||
|**Pre\-Condition**||Trong hệ thống đã có bộ sưu tập người dùng tạo trước đấy||||
|**Main Flows**||1. Người dùng bấm icon bộ sưu tập ở sidebar<br>2. Hệ thống di chuyển sang bộ sưu tập<br>3. Người dùng bấm nút \[\.\.\.\] của bộ sưu tập, chọn Sửa bộ sưu tập<br>4. Hệ thống hiển thị form chỉnh sửa<br>5. Người dùng nhập tên bộ sưu tập, chọn ảnh phù hợp sau đó bấm \[Lưu\]<br>6. Hệ thống lưu vào CSDL, thông báo thêm mới thành công||||
|**Exception Flows**||5\.1 Người dùng nhập sai, hệ thống thông báo lỗi||||
|**Business Rules**||- BR\-19: Tên bộ sưu tập tối đa 50 ký tự<br>- BR\-44: Giới hạn ảnh upload là 5mb||||
|**Application Messages**||- MSG\-27: Cập nhật thành công\!||||

### Search bộ sưu tập

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-9\.4\.5**|**Use Case Name**||Search bộ sưu tập|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tìm kiếm bộ sưu tập||||
|**Pre\-Condition**||Trong hệ thống có bộ sưu tập người dùng tạo trước đó||||
|**Main Flows**||1. Người dùng bấm icon bộ sưu tập ở sidebar<br>2. Hệ thống di chuyển sang bộ sưu tập<br>3. Người dùng bấm vào thanh search trong màn hình, nhập từ khoá và nhấn nút gửi<br>4. Hệ thống hiển thị gợi ý các bộ sưu tập phù hợp với từ khoá||||
|**Exception Flows**||||||
|**Business Rules**||- BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

### Xem chi tiết bộ sưu tập

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|||Bấm để quay lại trang trước đó|
|2|Thanh filter<br>|Dropdown<br>|||Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|3|Card thông tin tin đăng|Button|||Bấm để xem chi tiết tin đăng |
|4|\[\.\.\.\]|Button|||Bấm để bật tuỳ chọn với tin|
|5|\[Ghi chú\]|Button|||Bấm để mở form ghi chú tin|

#### Filter bộ sưu tập

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-9\.4\.3\.5**|**Use Case Name**||Filter tin trong bộ sưu tập|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng Filter tin trong bộ sưu tập||||
|**Pre\-Condition**||Bộ sưu tập của người dùng có lưu các tin đăng||||
|**Main Flows**||1. Người dùng bấm vào 1 bộ sưu tập<br>2. Hệ thống hiển thị danh sách các tin đã lưu<br>3. Người dùng bấm vào thanh filter và chọn các tiêu chí phù hợp<br>4. Hệ thống hiển thị các tin phù hợp với tiêu chí||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

#### Gỡ tin khỏi bộ sưu tập

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-9\.4\.3\.4**|**Use Case Name**||Gỡ tin khỏi bộ sưu tập|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng gỡ tin khỏi bộ sưu tập||||
|**Pre\-Condition**||Trong bộ sưu tập có tin đã lưu||||
|**Main Flows**||1. Người dùng bấm vào 1 bộ sưu tập<br>2. Hệ thống hiển thị danh sách các tin đã lưu<br>3. Người dùng bấm vào \[\.\.\.\] của tin đã lưu, chọn gỡ bỏ<br>4. Hệ thống hiển thị form xác nhận<br>5. Người dùng chọn có<br>6. Hệ thống lưu vào CSDL, thông báo gỡ tin đăng khỏi bộ sưu tập thành công||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||- MSG\-36: Gỡ tin khỏi bộ sưu tập thành công\.||||

#### Thêm tin vào bộ sưu tập khác

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-9\.4\.3\.2**|**Use Case Name**||Thêm tin vào bộ sưu tập khác |
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng thêm tin đã lưu vào bộ sưu tập khác ||||
|**Pre\-Condition**||Bộ sưu tập của người dùng có lưu các tin đăng||||
|**Main Flows**||1. Người dùng bấm vào 1 bộ sưu tập<br>2. Hệ thống hiển thị danh sách các tin đã lưu<br>3. Người dùng bấm vào \[\.\.\.\] của tin đã lưu, chọn thêm vào bộ sưu tập <br>4. Hệ thống hiển thị form thêm vào bộ sưu tập khác<br>5. Người dùng chọn bộ sưu tập khác sau đấy bấm nút \[Xong\]<br>6. Hệ thống lưu vào CSDL, thông báo cập nhật thành công||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||- MSG\-27: Cập nhật thành công\!||||

#### Ghi chú tin

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-9\.4\.3\.1**|**Use Case Name**||Ghi chú tin|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**3/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng ghi chú tin đăng đã lưu trong bộ sưu tập||||
|**Pre\-Condition**||Bộ sưu tập người dùng có tin đăng đã lưu||||
|**Main Flows**||1. Người dùng bấm vào 1 bộ sưu tập<br>2. Hệ thống hiển thị danh sách các tin đã lưu<br>3. Người dùng bấm vào \[Ghi chú\] của tin đã lưu<br>4. Hệ thống hiển thị form nhập ghi chú<br>5. Người dùng nhập nội dung sau đấy bấm nút \[Lưu\]<br>6. Hệ thống lưu vào CSDL, thông báo cập nhật thành công||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||- MSG\-27: Cập nhật thành công\!||||

## **Quản lý Trang cá nhân**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Icon chat<br>|Button<br>|Không<br>||Bấm để quay lại trang trước đó|
|2<br>|Card thông tin<br>|Button<br>|Không||Bấm để vào xem chi tiết các trạng thái xác nhận|
|3|\[Xác nhận\]|Button|||Bấm để xác nhận lịch đặt của đầu khách|
|4|\[Từ chối\]|Button|||Bấm để từ chối lịch đặt của đầu khách|
|5|Thu hồi|Button|||Bấm để thu hồi lịch đã đặt|
|6|\[Mũi tên xuống\]|Button|||Bấm để lựa chọn thay đổi trạng thái xác nhận|

### Chỉnh sửa hồ sơ

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2<br>|Tên hiển thị<br>|Textbox<br>|Có<br>||Bấm để nhập tên hiển thị trên trang chủ|
|3|Ngày sinh<br>|Datepicker<br>|Có||Bấm để chọn ngày sinh|
|4|Số điện thoại|Textbox|Có||Bấm để nhập Số điện thoại|
|5|Ngày cấp|Datepicker|Có||Bấm để chọn ngày cấp|
|6|Địa chỉ thường trú|Textbox|Có||Bấm để nhập Địa chỉ thường trú|
|7|Nơi ở hiện tại|Textbox|Có||Bấm để nhập Nơi ở hiện tại|
|8|Email|Textbox|Có||Bấm để nhập Email|
|9|SĐT người thân|Textbox|Có||Bấm để nhập SĐT người thân|
|10|Facebook|Textbox|||Bấm để nhập link Facebook|
|11|\[Cập nhật\]|Button|Có||Bấm để cập nhật thông tin|

**Use case Specification**

|**Use Case ID**||**UC\-9\.5\.1**|**Use Case Name**||Chỉnh sửa hồ sơ|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng chỉnh sửa hồ sơ cá nhân||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào avatar ở thanh sidebar<br>2. Hệ thống hiển thị menu<br>3. Người dùng bấm vào Card thông tin tài khoản<br>4. Hệ thống di chuyển sang màn hình trang cá nhân<br>5. Người dùng bấm vào chỉnh sửa hồ sơ<br>6. Hệ thống hiển thị form chỉnh sửa hồ sơ<br>7. Người dùng nhập thông tin muốn sửa và bấm nút \[Cập nhật\]<br>8. Hệ thống lưu vào CSDL, thông báo cập nhật thành công||||
|**Exception Flows**||7\.1 Người dùng nhập sai thông tin, hệ thống báo lỗi và nhập lại||||
|**Business Rules**||- BR\-02: SĐT phải đúng định dạng <br>- BR\-03: Địa chỉ thường chú và nơi ở hiện tại không quá 100 ký tự<br>- BR\-06: Họ và tên không được quá 50 ký tự<br>- BR\-07: Email phải đúng định dạng<br>- BR\-08: Ngày cấp CCCD phải sau ngày sinh 15 năm<br>- BR\-09: SĐT người thân không được trùng với SĐT đăng ký<br>- BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)||||
|**Application Messages**||- MSG\-10: SĐT người thân không được trùng với SĐT đã đăng ký<br>- MSG\-11: Số điện thoại chưa hợp lệ\!<br>- MSG\-12: Nội dung không quá dài\!<br>- MSG\-13: Ngày cấp CCCD không hợp lệ\!<br>- MSG\-14: Ngày sinh không hợp lệ\.<br>- MSG\-15: Email chưa đúng định dạng\.<br>- MSG\-17: Bạn cần điền thông tin này\.<br>- MSG\-27: Cập nhật thành công\!||||

### Tìm kiếm bài viết đã đăng

**Use case Specification**

|**Use Case ID**||**UC\-9\.5\.5**|**Use Case Name**||Tìm kiếm bài viết đã đăng|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**14/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tìm kiếm bài viết đã đăng||||
|**Pre\-Condition**||Người dùng đã có bài đăng cá nhân ở các feed ||||
|**Main Flows**||1. Người dùng bấm vào Avatar ở sidebar<br>2. Hệ thống hiển thị màn hình Menu<br>3. Người dùng bấm vào card thông tin cá nhân<br>4. Hệ thống chuyển sang trang màn hình cá nhân<br>5. Người dùng bấm vào thanh tìm kiếm, nhập từ khoá và bấm nút enter<br>6. Hệ thống hiển thị bài viết phù hợp với từ khoá||||
|**Exception Flows**||- BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Business Rules**||||||
|**Application Messages**||||||

### Filter danh mục bài viết đã đăng

**Use case Specification**

|**Use Case ID**||**UC\-9\.5\.4**|**Use Case Name**||Filter danh mục bài viết đã đăng|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**14/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tìm kiếm bài viết đã đăng||||
|**Pre\-Condition**||Người dùng đã có bài đăng cá nhân ở các feed ||||
|**Main Flows**||1. Người dùng bấm vào Avatar ở sidebar<br>2. Hệ thống hiển thị màn hình Menu<br>3. Người dùng bấm vào card thông tin cá nhân<br>4. Hệ thống chuyển sang trang màn hình cá nhân<br>5. Người dùng bấm vào thanh filter, chọn danh mục mong muốn<br>6. Hệ thống hiển thị bài viết với danh mục đã chọn||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

### Lịch họp \- Lịch học \(2\.2\)

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC**|**Use Case Name**|||
|---|---|---|---|---|---|
|**Author**|||**Date**||**19/11/2024**|
|**Actor**||||||
|**Description**||Người dùng xem danh sách lịch họp và lịch học sắp tới||||
|**Pre\-Condition**||||||
|**Main Flows**||Người dùng quét mã QR buổi học/ họp để điểm danh\. Hệ thống ghi nhận điểm danh\.<br>\+ Hoàn thành 6 buổi học xác nhận vai trò học viên được xem kho dưới 9 tỷ\.<br> \+ Hoàn thành 12 buổi học xác nhận vai trò chuyên viên được xem toàn bộ kho\.||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

### Xác thực cá nhân \(2\.1\)

**Screen Design**

## **Chat**

### Nhóm chat

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Icon back|Button|||Bấm để quay lại trang chủ|
|2<br>|Tạo nhóm|Button|||Bấm để tạo nhóm|
|3|Tìm kiếm|Textbox|||Bấm để nhập nội dung tìm kiếm\. Bao gồm tìm kiếm chat cá nhân, SĐT, chat nhóm và những tin nhắn có từ khoá trùng khớp với nội dung tìm kiếm|
|4|Tab Nhóm chat|Button|||Bấm để di chuyển sang tab nhóm chat|
|5|Tab Nhóm mặc định|Button|||Bấm để di chuyển sang nhóm mặc định|
|6|Các card thông tin chat|Button|||Bấm để đi vào đoạn chat|

#### Chat nhóm

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Icon back|Button|||Bấm để quay lại trang trước đó|
|2|Avatar nhóm|Button|||Bấm để đi vào phần mở rộng đoạn chat|
|3|Icon option|Button|||Bấm để mở thanh tuỳ chọn đối với đoạn chat|
|4|Tin nhắn||||Giữ để tương tác với tin nhắn|
|5|Chia sẻ|Button|||Bấm để chia sẻ tin nhắn|
|6|Thanh chat|Textbox|||Bấm để nhập nội dung|
|7|Icon ảnh|Button|||Bấm để chọn ảnh trong thư viện máy|
|8|Icon sticker|Button|||Bấm để mở bộ sticker|
|9|Icon emoji|Button|||Bấm để mở bàn phím emoji|
|10|Icon mic|Button|||Bấm để ghi âm|
|11|Icon Tym|Button|||Bấm để gửi tym|
|12|Icon gửi|Button|||Xuất hiện khi đã nhập nội dung vào thanh chat|

##### Xem thành viên

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.2\.1**|**Use Case Name**||Xem thành viên|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**20/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng xem thành viên nhóm và tương tác với thành viên nhóm||||
|**Pre\-Condition**||Người dùng là quản trị viên của nhóm||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Người dung bấm vào card chat nhóm<br>4. Hệ thống di chuyển vào màn hình chat nhóm<br>5. Trong màn hình chat nhóm, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn xem thành viên<br>8. Hệ thống hiển thị danh sách thành viên nhóm<br>9. Người dùng chọn 1 trong các option<br>9\.1 Khoá trả lời \(Quản trị viên nhóm\)<br>9\.1\.1 Hệ thống thông báo vô hiệu hoá tính năng gửi tin nhắn của người bị khoá thành công<br>9\.2 Tạm khoá trò chuyện \(Quản trị viên nhóm\)<br>9\.2\.1 Hệ thống thống báo vô hiệu hoá tính năng xem tin nhắn của người được chọn thành công<br>9\.3 Xoá người dùng khỏi nhóm \(Quản trị viên nhóm\)<br>9\.3\.1 Hệ thống xoá thành viên ra khỏi nhóm chat<br>9\.4 Thêm người này làm quản trị viên \(Quản trị viên nhóm\)<br>9\.4\.1 Hệ thống thêm thành viên này thành quản trị viên nhóm chat<br>9\.4\.2 Gỡ quyền quản trị viên \(Quản trị viên nhóm\)<br>9\.4\.2\.1 Xoá quyền quản trị thành viên khỏi CSDL<br>9\.5 Thêm thành viên \(Quản trị viên nhóm\)<br>9\.5\.1 Hệ thống di chuyển sang màn thêm thành viên<br>9\.6 Gửi tin nhắn cá nhân<br>9\.6\.1 Hệ thống di chuyển sang màn hình chat với người được chọn<br>9\.7 Xem trang cá nhân<br>9\.7\.1 Hệ thống hiển thị trang cá nhân của người được chọn||||
|**Exception Flows**||||||
|**Business Rules**||- BR\-49: Quản trị viên nhóm chat mới được cập nhật thông tin nhóm, tương tác trạng thái thành viên nhóm và thêm thành viên nhóm||||
|**Application Messages**||||||

##### Thêm thành viên

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.2\.5 **|**Use Case Name**||Thêm thành viên|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**21/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng thêm thành viên vào nhóm chat||||
|**Pre\-Condition**||Người dùng là quản trị viên||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Người dung bấm vào card chat nhóm<br>4. Hệ thống di chuyển vào màn hình chat nhóm<br>5. Trong màn hình chat nhóm, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn thêm thành viên<br>8. Hệ thống chuyển sang màn hình thêm thành viên cùng với các gợi ý<br>9. Người dùng tìm kiếm thành viên và bấm chọn\. Sau đấy bấm vào nút \[Thêm\]<br>10. Hệ thống thêm người được chọn vào trong CSDL||||
|**Exception Flows**||||||
|**Business Rules**||- BR\-49: Quản trị viên nhóm chat mới được cập nhật thông tin nhóm, tương tác trạng thái thành viên nhóm và thêm thành viên nhóm||||
|**Application Messages**||||||

##### Chỉnh sửa nhóm

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.2\.2**|**Use Case Name**||Chỉnh sửa nhóm|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**21/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng xem chỉnh sửa thông tin nhóm||||
|**Pre\-Condition**||Người dùng là quản trị viên||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Người dung bấm vào card chat nhóm<br>4. Hệ thống di chuyển vào màn hình chat nhóm<br>5. Trong màn hình chat nhóm, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn mở rộng<br>8. Hệ thống hiển thị màn hình tuỳ chọn chuyên sâu<br>9. Người dùng chọn đổi tên nhóm<br>9\.1 Hệ thống hiển thị form nhập đổi thông tin nhóm<br>9\.2 Người dùng đổi tên nhóm và bấm nút Lưu<br>9\.3 Hệ thống lưu vào CSDL và cập nhật tên nhóm<br>10. Người dùng chọn thay đổi ảnh nhóm<br>10\.1 Hệ thống hiển thị option ảnh chụp hoặc ảnh trên máy<br>10\.1\.1 Người dùng chọn ảnh chụp<br>10\.1\.1\.1 Hệ thống hiển thị máy ảnh<br>10\.1\.1\.1\.1 Người dùng chụp ảnh và bấm lưu<br>10\.1\.2 Người dùng chọn ảnh trên máy<br>10\.1\.2\.1 Hệ thống hiển thị thư viện ảnh<br>10\.1\.2\.1\.1 Người dùng chọn ảnh và bấm lưu<br>11. Hệ thống lưu vào CSDL và cập nhật ảnh trên màn hình||||
|**Exception Flows**||||||
|**Business Rules**||- BR\-44: Giới hạn ảnh upload là 5mb<br>- BR\-49: Quản trị viên nhóm chat mới được cập nhật thông tin nhóm, tương tác trạng thái thành viên nhóm và thêm thành viên nhóm<br>- BR\-57: Tên nhóm giới hạn 50 ký tự||||
|**Application Messages**||||||

##### Rời nhóm chat

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.2\.1**|**Use Case Name**||Rời nhóm chat|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**21/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tự nguyện rời nhóm chat||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Người dung bấm vào card chat nhóm<br>4. Hệ thống di chuyển vào màn hình chat nhóm<br>5. Trong màn hình chat nhóm, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn mở rộng<br>8. Hệ thống hiển thị màn hình tuỳ chọn chuyên sâu<br>9. Người dùng bấm vào rời nhóm chat<br>10. Hệ thống hiển thị form xác nhận<br>11. Người dùng bấm \[Có\]<br>12. Hệ thống lưu vào CSDL, nhóm chat được xoá khỏi danh sách chat của người dùng||||
|**Exception Flows**||||||
|**Business Rules**||BR\-53: Nếu là nhóm mặc định thì không thể tự nguyện rời khỏi nhóm||||
|**Application Messages**||MSG\-46: Bạn đã rời khỏi nhóm\.||||

##### Xoá nhóm

##### Giải tán nhóm chat

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.2\.4   **|**Use Case Name**||Xoá nhóm|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**20/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng xoá nhóm||||
|**Pre\-Condition**||Người dùng là quản trị viên||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Người dung bấm vào card chat nhóm<br>4. Hệ thống di chuyển vào màn hình chat nhóm<br>5. Trong màn hình chat nhóm, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn mở rộng<br>8. Hệ thống hiển thị màn hình tuỳ chọn chuyên sâu<br>9. Người dùng bấm vào xoá nhóm<br>10. Hệ thống hiển thị form xác nhận<br>11. Người dùng bấm \[Có\]<br>12. Hệ thống lưu vào CSDL, nhóm chat được xoá khỏi hệ thống||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||MSG\-47: Bạn đã xoá nhóm chat\.||||

#### Chat cá nhân

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Icon back|Button|||Bấm để quay lại trang trước đó|
|2|Avatar|Button|||Bấm để đi vào phần mở rộng đoạn chat|
|3|Icon option|Button|||Bấm để mở thanh tuỳ chọn đối với đoạn chat|
|4|Tin nhắn|Button|||Giữ để tương tác với tin nhắn|
|5|Chia sẻ|Button|||Bấm để chia sẻ tin nhắn|
|6|Thanh chat|Textbox|||Bấm để nhập nội dung|
|7|Icon ảnh|Button|||Bấm để chọn ảnh trong thư viện máy|
|8|Icon sticker|Button|||Bấm để mở bộ sticker|
|9|Icon emoji|Button|||Bấm để mở bàn phím emoji|
|10|Icon mic|Button|||Bấm để ghi âm|
|11|Icon Tym|Button|||Bấm để gửi tym|
|12|Icon gửi|Button|||Xuất hiện khi đã nhập nội dung vào thanh chat|

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.1     **|**Use Case Name**||Chat cá nhân|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**21/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng chat với người khác trong hệ thống||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Bấm vào chat của 1 người<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Người dùng nhập nội dung tin nhắn và bấm icon gửi <br>6. Hệ thống lưu vào CSDL và chuyển tin nhắn thành thông báo cho người nhận<br>7. Người nhận nhận được thông báo tin nhắn<br>8. Người nhận tin nhắn xem nội dung tin nhắn<br>9. Hệ thống cập nhật trạng thái tin nhắn<br>10. Người dùng kiểm tra trạng thái tin nhắn||||
|**Exception Flows**||||||
|**Business Rules**||BR\-50: Nội dung chat nhập giới hạn 3000 ký tự||||
|**Application Messages**||||||

##### Search tin nhắn

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.1\.3        **|**Use Case Name**||Search tin nhắn|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**21/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tìm kiếm tin nhắn trong đoạn chat||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Bấm vào chat của 1 người<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Trong màn hình chat, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn mở rộng<br>8. Hệ thống hiển thị màn hình tuỳ chọn chuyên sâu<br>9. Người dùng chọn tìm kiếm trong cuộc trò chuyện<br>10. Hệ thống hiển thị màn hình tìm kiếm<br>11. Người dùng nhập từ khoá cần tìm kiếm<br>12. Hệ thống hiển thị tin nhắn khớp với từ khoá đã nhập||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

##### Xem lịch sử phương tiện liên kết

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.1\.4        **|**Use Case Name**||Xem lịch sử phương tiện và liên kết|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**21/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng xem lại các file và các hình ảnh trong đoạn chat||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Bấm vào chat của 1 người<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Trong màn hình chat, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn mở rộng<br>8. Hệ thống hiển thị màn hình tuỳ chọn chuyên sâu<br>9. Người dùng chọn Xem file phương tiện và liên kết<br>10. Hệ thống hiển thị màn hình File phương tiện và liên kết<br>11. Người dùng chọn 2 loại danh mục theo ý muốn để xem<br>12. Hệ thống hiển thị màn hình đúng với danh mục người dùng đã chọn||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

##### Xoá đoạn chat

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.1\.5         **|**Use Case Name**||Xoá đoạn chat|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**21/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng xoá chat khỏi danh sách hiển thị||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Bấm vào chat của 1 người<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Trong màn hình chat, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn mở rộng<br>8. Hệ thống hiển thị màn hình tuỳ chọn chuyên sâu<br>9. Người dùng chọn Xoá đoạn chat<br>10. Hệ thống hiển thị form xác nhận<br>11. Người dùng chọn có<br>12. Hệ thống xoá đoạn chat khỏi danh sách hiển thị||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

##### Tắt thông báo

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.1\.6         **|**Use Case Name**||Tắt thông báo|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**21/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tắt thông báo đoạn chat||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Bấm vào chat của 1 người<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Trong màn hình chat, người dùng nhấn nút 3 chấm để mở các tuỳ chọn<br>6. Hệ thống hiển thị màn hình các tuỳ chọn<br>7. Người dùng chọn mở rộng<br>8. Hệ thống hiển thị màn hình tuỳ chọn chuyên sâu<br>9. Người dùng chọn Tắt thông báo<br>10. Hệ thống hiển thị form chọn thời gian<br>11. Người dùng chọn mốc thời gian mong muốn<br>12. Hệ thống lưu vào CSDL, đoạn chat bị tắt thông báo dựa vào thời gian người dùng chọn||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

##### Gửi ảnh

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.1\.8         **|**Use Case Name**||Gửi ảnh|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**21/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng gửi ảnh trong đoạn chat||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Bấm vào chat của 1 người<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Người dùng bấm vào icon ảnh<br>6. Hệ thống hiển thị phần chọn ảnh trên máy<br>6\.1 Người dùng chọn ảnh theo ý muốn và bấm gửi<br>6\.2 Người dùng bấm chụp ảnh<br>6\.2\.1 Hệ thống hiển thị màn hình chụp ảnh<br>6\.2\.2 Người dùng bấm chụp ảnh, sau đấy kiểm tra, nếu ưng ý thì bấm gửi, không thì chụp loại<br>7. Hệ thống lưu vào CSDL và chuyển thông báo cho người nhận<br>8. Người nhận nhận được thông báo tin nhắn<br>9. Người nhận tin nhắn xem nội dung tin nhắn<br>10. Hệ thống cập nhật trạng thái tin nhắn<br>11. Người dùng kiểm tra trạng thái tin nhắn||||
|**Exception Flows**||||||
|**Business Rules**||BR\-33: Video và audio up lên không được quá 50mb/video<br>BR\-44: Giới hạn ảnh upload là 5mb||||
|**Application Messages**||||||

##### Ghi âm

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.1\.9         **|**Use Case Name**||Ghi âm|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**21/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng ghi âm lời nói và gửi vào trong đoạn chat||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Bấm vào chat của 1 người<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Người dùng bấm vào icon Mic<br>6. Hệ thống hiển thị phần ghi âm<br>7. Người dùng bấm hoặc giữ để ghi âm, sau đấy bấm nghe lại, nếu không ưng thì bấm xoá và ghi âm lại, nếu ưng thì bấm gửi<br>8. Hệ thống lưu vào CSDL và chuyển file ghi âm thành thông báo cho người nhận<br>9. Người nhận nhận được thông báo tin nhắn<br>10. Người nhận tin nhắn xem nội dung tin nhắn<br>11. Hệ thống cập nhật trạng thái tin nhắn<br>12. Người dùng kiểm tra trạng thái tin nhắn||||
|**Exception Flows**||||||
|**Business Rules**||BR\-33: Video và audio up lên không được quá 50mb/video||||
|**Application Messages**||||||

##### Tương tác tin nhắn

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.1\.10**|**Use Case Name**||Tương tác tin nhắn|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**21/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tương tác với tin nhắn||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Bấm vào chat của 1 người<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Người dùng bấm giữ 1 tin nhắn<br>6. Hệ thống hiển thị các option<br>6\.1 Ghim tin nhắn<br>6\.1\.1 Người dùng bấm ghim tin nhắn<br>6\.1\.2 Hệ thống cập nhật vào CSDL, hiển thị tin nhắn đã ghim lên đầu<br>6\.2 Thích tin nhắn<br>6\.2\.1 Người dùng bấm thích tin nhắn<br>6\.2\.2 Hệ thống cập nhật vào CSDL, hiển thị tin nhắn có lượt thích<br>6\.3 Xoá tin nhắn<br>6\.3\.1 Người dùng bấm xoá tin nhắn<br>6\.3\.2 Hệ thống hiển thị màn hình xác nhận<br>6\.3\.2 Người dùng bấm có<br>6\.3\.2 Hệ thống ghi nhận, tin nhắn được xoá khỏi màn hình hiển thị<br>6\.4 Trả lời tin nhắn<br>6\.4\.1 Người dùng bấm trả lời tin nhắn<br>6\.4\.2 Hệ thống ghim tin nhắn vào tin nhắn trả lời<br>6\.5 Sao chép tin nhắn<br>6\.5\.1 Người dùng bấm ghim tin nhắn<br>6\.5\.2 Lưu text vào bộ nhớ tạm của điện thoại<br>6\.6 Thu hồi tin nhắn<br>6\.5\.1 Người dùng bấm ghim tin nhắn<br>6\.5\.2 Hệ thống cập nhật vào CSDL, hiển thị tin nhắn đã ghim lên đầu<br>6\.7 Chia sẻ tin nhắn<br>6\.5\.1 Người dùng chia sẻ tin nhắn<br>6\.5\.2 Hệ thống di chuyển sang màn hình chia sẻ||||
|**Exception Flows**||||||
|**Business Rules**||BR\-55: Tin nhắn chỉ có thể thu hồi trong vòng 30 phút||||
|**Application Messages**||||||

###### Chia sẻ tin nhắn

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.1\.10\.2**|**Use Case Name**||Chia sẻ tin nhắn|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**21/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng chia sẻ tin nhắn||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Bấm vào chat của 1 người<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Người dùng chọn 1 tin nhắn muốn chia sẻ, nhấn giữ và chọn chia sẻ<br>6. Hệ thống hiển thị màn hình chia sẻ<br>7. Người dùng chọn người nhận hoặc nhóm muốn chia sẻ, sau đấy bấm nút gửi<br>8. Hệ thống lưu vào CSDL và chuyển tin nhắn thành thông báo cho người nhận<br>9. Người nhận nhận được thông báo tin nhắn<br>10. Người nhận tin nhắn xem nội dung tin nhắn<br>11. Hệ thống cập nhật trạng thái tin nhắn<br>12. Người dùng kiểm tra trạng thái tin nhắn||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

##### Quản lý sticker

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.1\.1**|**Use Case Name**||Quản lý sticker|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**28/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng quản lý bộ sticker trong đoạn chat||||
|**Pre\-Condition**||Người dùng có tải bộ sticker trước đó||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Bấm vào chat của 1 người<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Người dùng nhấn nút vào icon sticker<br>6. Hệ thống hiển thị màn hình bộ sticker<br>7. Người dùng Bấm vào icon ngôi nhà<br>8. Hệ thống Màn hình hiển thị Quản lý sticker<br>9. Người dùng chọn option<br>9\.1 Tải sticker mới<br>9\.2 Xoá sticker đã tải<br>10. Hệ thống cập nhật vào CSDL||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

##### Gửi file

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.1\.11**|**Use Case Name**||Gửi file|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**29/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng gửi file trong đoạn chat||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Bấm vào chat của 1 người<br>4. Hệ thống hiển thị màn hình chat với người được chọn<br>5. Người dùng nhấn nút vào icon File<br>6. Hệ thống hiển thị Màn hình chọn file trong máy<br>7. Người dùng Chọn file trong máy và bấm Gửi<br>8. Hệ thống lưu vào CSDL và chuyển thông báo cho người nhận<br>9. Người nhận nhận được thông báo tin nhắn<br>10. Người nhận tin nhắn xem nội dung tin nhắn<br>11. Hệ thống cập nhật trạng thái tin nhắn<br>12. Người dùng kiểm tra trạng thái tin nhắn||||
|**Exception Flows**||||||
|**Business Rules**||BR\-51: File upload trong đoạn chat giới hạn 20mb||||
|**Application Messages**||||||

#### Tạo nhóm chat

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-11\.1\.3 **|**Use Case Name**||Tạo nhóm chat|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**21/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tạo nhóm chat mới||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm vào icon chat ở trang chủ<br>2. Hệ thống hiển thị màn hình danh sách chat<br>3. Người dùng bấm chọn tạo nhóm<br>4. Hệ thống hiển thị màn hình tạo nhóm<br>5. Người dùng nhập tên nhóm và chọn avatar nhóm chat \(Optional\)<br>6. Người dùng chọn theo<br>5\.1 Nhóm do tôi quản lý<br>5\.1\.1 Hệ thống hiển thị nhóm người dùng quản lý<br>5\.1\.2 Người dùng chọn nhóm mong muốn<br>5\.2 Danh bạ tổ chức<br>5\.2\.1 Hệ thống hiển thị nhóm theo tổ chức<br>5\.2\.2 Người dùng chọn nhóm mong muốn<br>5\.3 Thành viên gợi ý<br>5\.3\.1 Người dùng chọn các thành viên theo gợi ý<br>5\.3\.1\.1 Người dùng tìm kiếm thành viên<br>5\.3\.1\.2 Hệ thống hiển thị các thành viên khớp với từ khoá đã nhập<br>5\.3\.2 Người dùng chọn các thành viên<br>7. Người dùng bấm nút tạo<br>8. Hệ thống lưu vào CSDL, nhóm chat xuất hiện trên danh sách chat||||
|**Exception Flows**||||||
|**Business Rules**||BR\-56: Nhóm theo tổ chức chỉ có thể hiển thị cho quyền Thư ký||||
|**Application Messages**||||||

## **Quản lý lịch hẹn**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Icon chat<br>|Button<br>|Không<br>||Bấm để di chuyển sang chat<br>|
|2<br>|Card thông tin<br>|Button<br>|Không||Bấm để vào xem chi tiết các trạng thái xác nhận|
|3|\[Xác nhận\]|Button|||Bấm để xác nhận lịch đặt của đầu khách|
|4|\[Từ chối\]|Button|||Bấm để từ chối lịch đặt của đầu khách|
|5|Thu hồi|Button|||Bấm để thu hồi lịch đã đặt|
|6|\[Mũi tên xuống\]|Button|||Bấm để lựa chọn thay đổi trạng thái xác nhận|

### Thu hồi

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-10\.1**|**Use Case Name**||Đầu khách thu hồi|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng thu hồi lịch đã đặt||||
|**Pre\-Condition**||Người dùng đã đặt lịch trước đó||||
|**Main Flows**||1. Người dùng bấm vào Lịch hẹn icon trong thanh sidebar<br>2. Hệ thống hiển thị màn hình Lịch hẹn dẫn khách<br>3. Người dùng bấm vào nút thu hồi<br>4. Hệ thống hiển thị form xác nhận<br>5. Người dùng bấm vào \[Thu hồi\]<br>6. Hệ thống lưu vào CSDL, hệ thống thông báo cập nhật trạng thái thành công||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||- MSG\-22: Cập nhật trạng thái thành công\!||||

### Xác nhận/từ chối lịch hẹn

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-10\.2**|**Use Case Name**||Xác nhận/Từ chối lich hẹn|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng xác nhận lịch hẹn với đầu khách||||
|**Pre\-Condition**||Có đầu khách đã đặt lịch với tin đăng của người dùng trong kho||||
|**Main Flows**||1. Người dùng bấm vào Lịch hẹn icon trong thanh sidebar<br>2. Hệ thống hiển thị màn hình Lịch hẹn dẫn khách<br>3. Người dùng bấm vào nút xác nhận hoặc từ chối<br>4. Hệ thống hiển thị form<br>4\.1 Nếu chọn xác nhận thì hiển thị form xác nhận<br>4\.2 Nếu chọn từ chối thì hiển thị form lí do từ chối<br>4\.2\.1 Người dùng chọn 1 lí do<br>5. Người dùng bấm \[Xác nhận\] hoặc \[Từ chối\]<br>6. Hệ thống lưu vào CSDL, hệ thống thông báo cập nhật trạng thái thành công||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||- MSG\-22: Cập nhật trạng thái thành công\!||||

### Chat với đầu khách

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|<br>||Bấm để quay lại trang trước đó|
|2<br>|Icon camera<br>|Button<br>|||Bấm để bật camera<br>|
|3|Icon chọn ảnh|Button|||Bấm để chọn ảnh trong thư viện máy|
|4|Icon emoji|Button|||Bấm để cho emoji|
|5|\[\>\]|Button|||Bấm để gửi tin nhắn|

**Use case Specification**

|**Use Case ID**||**UC\-10\.2\.1**|**Use Case Name**||Chat với đầu khách|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng chat với nhau để xác nhận||||
|**Pre\-Condition**||Người dùng có đặt lịch trước đó||||
|**Main Flows**||1. Người dùng bấm vào Lịch hẹn icon trong thanh sidebar<br>2. Hệ thống hiển thị màn hình Lịch hẹn dẫn khách<br>3. Người dùng bấm vào block chi tiết của lịch<br>4. Hệ thống hiển thị màn hình chat chi tiết<br>5. Người dùng nhập nội dung sau đấy bấm nút gửi<br>6. Hệ thống lưu vào CSDL, hệ thống hiển thị nội dung mới nhập lên màn hình||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

## **Menu **

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Card profile cá nhân|Button<br>|||Bấm để di chuyển sang trang cá nhân|
|2|Kho tài nguyên<br>|Button<br>|||Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|3|Khách cần mua gấp|Button|||Bấm để di chuyển sang màn hình khách cần mua gấp|
|4|Tin hoạt động|Button|||Bấm để di chuyển sang màn hình danh sách các feed|
|5|Quy định và hướng dẫn|Button|||Bấm để di chuyển sang màn hình quy định và hướng dẫn|
|6|Danh sách nhân sự công ty|Button|||Bấm để di chuyển sang màn hình danh sách nhân sự công ty|
|7|Thư viện nhà phố|Button|||Bấm để di chuyển sang màn hình danh sách các thư viện|
|8|Quản lý phòng nhóm \(Chỉ hiển thị cho quyền trường phòng\)|Button|||Bấm để di chuyển sang màn hình danh sách quản lý phòng |
|9|Tài khoản cá nhân|Button|||Bấm để di chuyển sang màn hình danh sách tài khoản cá nhân|
|10|Quản lý kho hàng<br>\(Chỉ hiển thị cho quyền đầu chủ\)|Button|||Bấm để di chuyển sang màn hình danh sách quản lý kho hàng|
|11|Đổi mật khẩu|Button|||Bấm để di chuyển sang màn hình đổi mật khẩu|
|12|Sinh trắc học|Button|||Bấm để di chuyển sang màn hình sinh trắc học|
|13|Giao diện|Button|||Bấm để di chuyển sang màn hình đổi giao diện|
|14|Chính sách quyền riêng tư|Button|||Bấm để di chuyển sang màn hình chính sách quyền riêng tư|
|15|Điều khoản dịch vụ|Button|||Bấm để di chuyển sang màn hình điều khoản và dịch vụ|
|16|Chính sách cookie|Button|||Bấm để di chuyển sang màn hình chính sách cookie|
|16|Đăng xuất|Button|||Bấm để đăng xuất khỏi hệ thống|

### **Cài đặt \- Đổi mật khẩu**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Icon chat<br>|Textbox<br>|Không||Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|
|3|Mật khẩu hiện tại|PasswordTextbox|Có||Nhập mật khẩu hiện tại|
|4|Mật khẩu mới|PasswordTextbox|Có||Nhập mật khẩu mới|
|5|Nhập lại mật khẩu|PasswordTextbox|Có||Nhập lại mật khẩu mới|
|6|Đổi mật khẩu|Button|Có||Bấm để đổi mật khẩu|

**Use case Specification**

|**Use Case ID**||**UC\-9\.5\.3**|**Use Case Name**||Đổi mật khẩu|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**3/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng đổi mật khẩu||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm Avatar ở thanh sidebar<br>2. Hệ thống hiển thị màn hình Menu<br>3. Người dùng bấm vào cài đặt, mục đổi mật khẩu<br>4. Hệ thống hiển thị màn hình đổi mật khẩu<br>5. Người dùng nhập các trường thông tin và bấm nút \[Đổi mật khẩu\]<br>6. Hệ thông lưu vào CSDL, thông báo thành công\. Người dùng quay trở lại menu||||
|**Exception Flows**||5\.1 Người dùng nhập sai mật khẩu hiện tại thì hệ thống báo lỗi<br>5\.2 Người dùng nhập sai format mật khẩu thì hệ thống báo lỗi||||
|**Business Rules**||- BR\-04: Mật khẩu phải là cả chữ cả số<br>- BR\-05: Mật khẩu tối thiểu 6 ký tự, tối đa 32 ký tự||||
|**Application Messages**||- MSG\-04: Mật khẩu không chính xác\!<br>- MSG\-07: Nhập lại mật khẩu không hợp lệ\!<br>- MSG\-08: Mật khẩu không đúng định dạng, mật khẩu phải bao gồm chữ cái và số từ 6 đến 32 ký tự||||

### **Cài đặt \- Sinh trắc học**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2|Tắt|Radio button|||Bấm để tắt xác nhận đăng nhập sinh trắc học|
|3|Bật|Radio button|||Bấm để bật xác nhận sinh trắc học thay cho mật khẩu|

### **Cài đặt \- Giao diện**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|||Bấm để quay lại trang trước đó|
|2|Tự động theo thiết bị|Radio button|||Bấm để chọn giao diện theo cài đặt thiết bị<br>|
|3|Giao diện sáng \(mặc định\)|Radio button|||Bấm để chọn giao diện sáng|
|4|Giao diện tối|Radio button|||Bấm để chọn giao diện tôi|

### **Điều khoản và Chính sách \- Chính sách quyền riêng tư**

**Screen Design**

### **Điều khoản và Chính sách \- Điều khoản dịch vụ**

**Screen Design**

### **Điều khoản và Chính sách \- Chính sách cookie**

**Screen Design**

## **Tài khoản bị khoá **

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[Đăng xuất\]<br>|Button<br>|Không||Bấm để quay lại trang chủ màn hình đăng nhâp|

## Quét QR \(1\.2\)

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-26**|**Use Case Name**||Quét QR code|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**19/6/2024**|
|**Actor**||User||||
|**Description**||Người dùng quét mã QR để điểm danh||||
|**Pre\-Condition**||||||
|**Main Flows**||1. Người dùng bấm icon QR ở thanh header<br>2. Hệ thống hiển thị màn hình Quét mã <br>3. Người dùng Quét mã QR<br>4. Hệ thống hiển thị màn hình xác nhận<br>5. Người dùng bấm xác nhận<br>6. Hệ thông lưu vào CSDL, điểm danh vào hệ thống và điền thông tin user vào danh sách||||
|**Exception Flows**||4\.1\. QR không hợp lệ thì hệ thống thông báo QR không hợp lệ||||
|**Business Rules**||||||
|**Application Messages**||||||

## Onboarding App \(Chưa mô tả\)

## Truyền thông public \(Chưa mô tả\)

## Phản hồi người dùng \(Chưa mô tả\)



# [SRS Mobile App Nhà Phố VN \- 2](https://v4cueke6gq8.sg.larksuite.com/wiki/YQnfwSl40io6PHkDP6IlSfzQgRb)



