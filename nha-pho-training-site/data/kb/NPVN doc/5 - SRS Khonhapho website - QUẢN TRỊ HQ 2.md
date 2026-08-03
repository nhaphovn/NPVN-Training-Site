# 5 \- SRS Khonhapho website \- QUẢN TRỊ HQ 2

# [4 \- SRS Khonhapho website \- Trang quản trị](https://v4cueke6gq8.sg.larksuite.com/wiki/UDyLw1jlsiOkBbkOUhNl0q2KgTc)

## Quản lý lịch đào tạo \(New 2\.2\)

*Screen Design*

### Tạo khoá học

*Đặc tả use case*

|**Use case ID:**|UC \- 27\.2|**Tên use case:**|Tạo khoá học|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|19/06/2024|
|**Các tác nhân chính:**|User \(Ban đào tạo\)|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng tạo khoá học|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và được thêm vào ban đào tạo trước đó|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục lịch đào tạo<br>4. Hệ thống di chuyển sang màn hình lịch đào tạo<br>5. Người dùng bấm vào "Thêm mới"<br>6. Hệ thống hiển thị form tạo khoá học<br>7. Người dùng điền thông tin khoá học, tuỳ chọn có đối tượng tham gia và bấm nút "Tạo khoá học"<br>8. Lưu thông tin vào CSDL và gửi thông báo đến đối tượng tham gia<br>9. Hệ thống xuất mã QR điểm danh|||
|**Luồng ngoại lệ:**|8\.1\. Thông tin sai, quay lại form nhập thông tin, hiển thị thông báo đỏ ở trường sai|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|BR\-57: Tên nhóm chat, tên khoá học giới hạn 50 ký tự|||
|**Tin nhắn thông báo :**||||

*Activity diagram*

### Sửa khoá học

*Đặc tả use case*

|**Use case ID:**|UC \- 27\.1\.2|**Tên use case:**|Sửa khoá học|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|09/07/2024|
|**Các tác nhân chính:**|User \(Ban đào tạo\)|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng sửa khoá học|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và được thêm vào ban đào tạo trước đó|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục lịch đào tạo<br>4. Hệ thống di chuyển sang màn hình lịch đào tạo<br>5. Người dùng bấm vào "\.\.\." của khoá học<br>6. Hệ thống hiển thị tuỳ chọn đối với khoá học<br>7. Người dùng chọn "Sửa khoá học"<br>8. Hệ thống hiển thị form Sửa khoá học<br>9. Người dùng sửa thông tin khoá học, tuỳ chọn có đối tượng tham gia và bấm nút "Tạo khoá học"<br>10. Lưu thông tin vào CSDL và gửi thông báo đến đối tượng tham gia<br>11. Hệ thống xuất mã QR điểm danh|||
|**Luồng ngoại lệ:**|8\.1\. Thông tin sai, quay lại form nhập thông tin, hiển thị thông báo đỏ ở trường sai|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|BR\-57: Tên nhóm chat, tên khoá học giới hạn 50 ký tự<br>BR\-66: Không thể sửa/xoá lịch đào tạo, lịch họp khi đã hoặc đang diễn ra|||
|**Tin nhắn thông báo :**||||

*Activity diagram*

### Xoá khoá học

*Đặc tả use case*

|**Use case ID:**|UC \- 27\.1\.3|**Tên use case:**|Xoá khoá học|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|09/07/2024|
|**Các tác nhân chính:**|User \(Ban đào tạo\)|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng xoá khoá học|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và được thêm vào ban đào tạo trước đó|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục lịch đào tạo<br>4. Hệ thống di chuyển sang màn hình lịch đào tạo<br>5. Người dùng bấm vào "\.\.\." của khoá học<br>6. Hệ thống hiển thị tuỳ chọn đối với khoá học<br>7. Người dùng chọn "Xoá khoá học"<br>8. Hệ thống hiển thị pop up xác nhận<br>9. Người dùng chọn xoá<br>10. Lưu vào CSDL|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|Medium|||
|**Tần suất sử dụng :**|Medium|||
|**Quy tắc nghiệp vụ:**|BR\-66: Không thể sửa/xoá lịch đào tạo, lịch họp khi đã hoặc đang diễn ra|||
|**Tin nhắn thông báo :**||||

*Activity diagram*

## Quản lý lịch họp \(New 2\.2\)

*Screen Design*

### Tạo lịch họp

*Đặc tả use case*

|**Use case ID:**|UC \- 28\.2|**Tên use case:**|Tạo lịch họp|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|11/07/2024|
|**Các tác nhân chính:**|User \(Ban đào tạo\)|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng tạo lịch họp|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và được thêm vào ban đào tạo trước đó|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục lịch họp<br>4. Hệ thống di chuyển sang màn hình lịch họp<br>5. Người dùng bấm vào "Thêm mới"<br>6. Hệ thống hiển thị form tạo lịch họp<br>7. Người dùng điền thông tin, tuỳ chọn có đối tượng tham gia và bấm nút "Tạo"<br>8. Lưu thông tin vào CSDL và gửi thông báo đến đối tượng tham gia<br>9. Hệ thống xuất mã QR điểm danh|||
|**Luồng ngoại lệ:**|8\.1\. Thông tin sai, quay lại form nhập thông tin, hiển thị thông báo đỏ ở trường sai|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|BR\-57: Tên nhóm chat, tên khoá học giới hạn 50 ký tự|||
|**Tin nhắn thông báo :**||||

*Activity diagram*

### Sửa lịch họp

*Đặc tả use case*

|**Use case ID:**|UC \- 28\.1\.2|**Tên use case:**|Sửa lịch họp|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|11/07/2024|
|**Các tác nhân chính:**|User \(Ban đào tạo\)|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng sửa lịch họp|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và được thêm vào ban đào tạo trước đó|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục lịch họp<br>4. Hệ thống di chuyển sang màn hình lịch họp<br>5. Người dùng bấm vào "\.\.\." của lịch họp<br>6. Hệ thống hiển thị tuỳ chọn đối với lịch họp<br>7. Người dùng chọn "Sửa lịch họp"<br>8. Hệ thống hiển thị form Sửa lịch họp<br>9. Người dùng sửa thông tin lịch họp, tuỳ chọn có đối tượng tham gia và bấm nút "Tạo"<br>10. Lưu thông tin vào CSDL và gửi thông báo đến đối tượng tham gia<br>11. Hệ thống xuất mã QR điểm danh|||
|**Luồng ngoại lệ:**|8\.1\. Thông tin sai, quay lại form nhập thông tin, hiển thị thông báo đỏ ở trường sai|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|BR\-57: Tên nhóm chat, tên khoá học giới hạn 50 ký tự<br>BR\-66: Không thể sửa/xoá lịch đào tạo, lịch họp khi đã hoặc đang diễn ra|||
|**Tin nhắn thông báo :**||||

*Activity diagram*

### Xoá lịch họp

*Đặc tả use case*

|**Use case ID:**|UC \- 28\.1\.3|**Tên use case:**|Xoá lịch họp|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|11/07/2024|
|**Các tác nhân chính:**|User \(Ban đào tạo\)|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng xoá lịch họp|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và được thêm vào ban đào tạo trước đó|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục lịch họp<br>4. Hệ thống di chuyển sang màn hình lịch họp<br>5. Người dùng bấm vào "\.\.\." của lịch họp<br>6. Hệ thống hiển thị tuỳ chọn đối với lịch họp<br>7. Người dùng chọn "Xoá lịch họp"<br>8. Hệ thống hiển thị pop up xác nhận<br>9. Người dùng chọn xoá<br>10. Lưu vào CSDL|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|Medium|||
|**Tần suất sử dụng :**|Medium|||
|**Quy tắc nghiệp vụ:**|BR\-66: Không thể sửa/xoá lịch đào tạo, lịch họp khi đã hoặc đang diễn ra|||
|**Tin nhắn thông báo :**||||

*Activity diagram*

## Quản lý quy định \(New 2\.1\)

*Đặc tả use case*

|Use case ID:|UC\-|Tên use case:|**Quản lý danh mục quy định**|
|---|---|---|---|
|Tác giả:|Quỳnh Anh|Ngày:|13/12/2024|
|Các tác nhân chính:|Admin, thư ký vùng, thư ký tỉnh|Figma:|N/A|
|Mô tả:|Quản lý danh mục quy định công ty|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào quản lý quy định|||
|Luồng chính:|1\. Người dùng Đăng nhập thành công và truy cập vào danh mục quy định<br>2\. Người dùng chọn Thêm mới để thêm mới danh mục quy định công ty    <br>3\.Người dùng nhập thông tin và chọn lệnh Lưu                                             <br>4\. Hệ thống xác thực thông tin <br>4\.1 Nếu thông tin sai, người dùng quay lại bước 3 nhập thông tin<br>4\.2 Nếu thông tin đúng, hệ thống lưu thông tin vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:||||
|Tần suất sử dụng :||||
|Quy tắc nghiệp vụ:|BR\-11: Mục Yêu cầu không được nhập quá 1000 ký tự|||
|Tin nhắn thông báo :|\- MSG16: *Bạn cần chọn mục này*<br>\- MSG18: *Thêm tin đăng thành công*|||

*Activity diagram*

## Chat hỗ trợ \(Sửa lại thành chat bot chọn 3 option \- 2\.4\)

*Screen Design*

### Hỗ trợ app

*Đặc tả use case*

|**Use case ID:**|UC \- 25\.1|**Tên use case:**|Hỗ trợ app|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|11/07/2024|
|**Các tác nhân chính:**|Thư ký|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng chat hỗ trợ các vấn đề liên quan đến app khonhapho|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và có chức danh thư ký|||
|**Luồng chính:**<br>|1. Người dùng truy cập trang quản trị<br>2. Hệ thống di chuyển sang trang quản trị<br>3. Người dùng chọn "Nhóm chat " ở sidebar<br>4. Hệ thống hiển thị màn hình danh mục hỗ trợ<br>5. Người dùng chọn danh mục hỗ trợ app<br>6. Hệ thống hiển thị danh sách các tin nhắn trong hỗ trợ app<br>7. Người dùng chọn 1 đoạn chat<br>8. Hệ thống hiển thị màn hình chat với người được chọn<br>9. Người dùng nhập nội dung tin nhắn và bấm icon gửi <br>10. Hệ thống lưu vào CSDL và chuyển tin nhắn thành thông báo cho người nhận<br>11. Người nhận nhận được thông báo tin nhắn<br>12. Người nhận tin nhắn xem nội dung tin nhắn<br>13. Hệ thống cập nhật trạng thái tin nhắn<br>14. Người dùng kiểm tra trạng thái tin nhắn|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

### Hỗ trợ duyệt hàng

*Đặc tả use case*

|**Use case ID:**|UC \- 25\.2|**Tên use case:**|Hỗ trợ duyệt hàng|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|11/07/2024|
|**Các tác nhân chính:**|Thư ký|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng chat hỗ trợ các vấn đề liên quan đến duyệt kho tài nguyên|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và có chức danh thư ký|||
|**Luồng chính:**<br>|1. Người dùng truy cập trang quản trị<br>2. Hệ thống di chuyển sang trang quản trị<br>3. Người dùng chọn "Nhóm chat " ở sidebar<br>4. Hệ thống hiển thị màn hình danh mục hỗ trợ<br>5. Người dùng chọn danh mục hỗ trợ duyệt hàng<br>6. Hệ thống hiển thị danh sách các tin nhắn trong hỗ trợ app<br>7. Người dùng chọn 1 đoạn chat<br>8. Hệ thống hiển thị màn hình chat với người được chọn<br>9. Người dùng nhập nội dung tin nhắn và bấm icon gửi <br>10. Hệ thống lưu vào CSDL và chuyển tin nhắn thành thông báo cho người nhận<br>11. Người nhận nhận được thông báo tin nhắn<br>12. Người nhận tin nhắn xem nội dung tin nhắn<br>13. Hệ thống cập nhật trạng thái tin nhắn<br>14. Người dùng kiểm tra trạng thái tin nhắn|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

### Hỗ trợ tranh chấp

*Đặc tả use case*

|**Use case ID:**|UC \- 25\.3|**Tên use case:**|Hỗ trợ tranh chấp|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|11/07/2024|
|**Các tác nhân chính:**|User \(Ban đào tạo\)|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng chat hỗ trợ các vấn đề liên quan đến tranh chấp, pháp lý|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và có chức danh thư ký|||
|**Luồng chính:**<br>|1. Người dùng truy cập trang quản trị<br>2. Hệ thống di chuyển sang trang quản trị<br>3. Người dùng chọn "Nhóm chat " ở sidebar<br>4. Hệ thống hiển thị màn hình danh mục hỗ trợ<br>5. Người dùng chọn danh mục hỗ trợ tranh chấp<br>6. Hệ thống hiển thị danh sách các tin nhắn trong hỗ trợ app<br>7. Người dùng chọn 1 đoạn chat<br>8. Hệ thống hiển thị màn hình chat với người được chọn<br>9. Người dùng nhập nội dung tin nhắn và bấm icon gửi <br>10. Hệ thống lưu vào CSDL và chuyển tin nhắn thành thông báo cho người nhận<br>11. Người nhận nhận được thông báo tin nhắn<br>12. Người nhận tin nhắn xem nội dung tin nhắn<br>13. Hệ thống cập nhật trạng thái tin nhắn<br>14. Người dùng kiểm tra trạng thái tin nhắn|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|Medium|||
|**Tần suất sử dụng :**|Medium|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

## Cài đặt nhóm chat mặc định \(New 2\.1\)

*Screen Design*

### Tạo nhóm chat mặc định

*Đặc tả use case*

|**Use case ID:**|UC \- 26\.1|**Tên use case:**|Tạo nhóm chat mặc định|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|11/07/2024|
|**Các tác nhân chính:**|Thư ký|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng tạo nhóm chat mặc định|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và có chức danh thư ký|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục cài đặt nhóm chat<br>4. Hệ thống di chuyển sang màn hình cài đặt nhóm chat<br>5. Người dùng bấm vào "Thêm mới"<br>6. Hệ thống hiển thị form tạo nhóm chat<br>7. Người dùng điền thông tin, tuỳ chọn đối tượng tham gia và bấm nút "Tạo"<br>8. Lưu thông tin vào CSDL|||
|**Luồng ngoại lệ:**|8\.1\. Thông tin sai, quay lại form nhập thông tin, hiển thị thông báo đỏ ở trường sai|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|BR\-57: Tên nhóm chat, tên khoá học giới hạn 50 ký tự|||
|**Tin nhắn thông báo :**||||

*Activity diagram*

### Sửa nhóm chat mặc định

*Đặc tả use case*

|**Use case ID:**|UC \- 26\.2|**Tên use case:**|Sửa nhóm chat mặc định|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|11/07/2024|
|**Các tác nhân chính:**|Thư ký|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng sửa nhóm chat mặc định|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và được thêm vào ban đào tạo trước đó|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục cài đặt nhóm chat<br>4. Hệ thống di chuyển sang màn hình cài đặt nhóm chat<br>5. Người dùng bấm vào "\.\.\." của nhóm chat<br>6. Hệ thống tuỳ chọn đối với nhóm chat<br>7. Người dùng chọn sửa nhóm chat<br>8. Hệ thống hiển thị form chỉnh sửa nhóm chat<br>9. Người dùng điền thông tin, tuỳ chọn đối tượng tham gia và bấm nút "Lưu"<br>10. Lưu thông tin vào CSDL|||
|**Luồng ngoại lệ:**|8\.1\. Thông tin sai, quay lại form nhập thông tin, hiển thị thông báo đỏ ở trường sai|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|BR\-57: Tên nhóm chat, tên khoá học giới hạn 50 ký tự|||
|**Tin nhắn thông báo :**||||

*Activity diagram*

### Xoá nhóm chat mặc định

*Đặc tả use case*

|**Use case ID:**|UC \- 26\.3|**Tên use case:**|Xoá nhóm chat mặc định|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|11/07/2024|
|**Các tác nhân chính:**|Thư ký|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng xoá nhóm chat mặc định|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và được thêm vào ban đào tạo trước đó|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục cài đặt nhóm chat<br>4. Hệ thống di chuyển sang màn hình cài đặt nhóm chat<br>5. Người dùng bấm vào "\.\.\." của nhóm chat<br>6. Hệ thống tuỳ chọn đối với nhóm chat<br>7. Người dùng chọn xoá nhóm chat<br>8. Hệ thống hiển thị pop up xác nhận xoá<br>9. Người dùng chọn "Xoá"<br>10. Lưu thông tin vào CSDL|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

## Quản lý kho hàng sơ cấp \(New \- Chưa triển khai trong scope này\)

*Screen Design*

### Xem thông tin dự án sơ cấp

*Đặc tả use case*

|**Use case ID:**|UC \- 27\.1|**Tên use case:**|Duyệt thông tin dự án sơ cấp|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|11/07/2024|
|**Các tác nhân chính:**|Thư ký|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng tạo nhóm chat mặc định|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và có chức danh thư ký|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục cài đặt nhóm chat<br>4. Hệ thống di chuyển sang màn hình cài đặt nhóm chat<br>5. Người dùng bấm vào "Thêm mới"<br>6. Hệ thống hiển thị form tạo nhóm chat<br>7. Người dùng điền thông tin, tuỳ chọn đối tượng tham gia và bấm nút "Tạo"<br>8. Lưu thông tin vào CSDL|||
|**Luồng ngoại lệ:**|8\.1\. Thông tin sai, quay lại form nhập thông tin, hiển thị thông báo đỏ ở trường sai|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|BR\-57: Tên nhóm chat, tên khoá học giới hạn 50 ký tự|||
|**Tin nhắn thông báo :**||||

*Activity diagram*

### Duyệt/Từ chối dự án sơ cấp

*Đặc tả use case*

|**Use case ID:**|UC \- 27\.2|**Tên use case:**|Duyệt/Từ chối dự án sơ cấp|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|11/07/2024|
|**Các tác nhân chính:**|Thư ký|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng sửa nhóm chat mặc định|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và được thêm vào ban đào tạo trước đó|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục cài đặt nhóm chat<br>4. Hệ thống di chuyển sang màn hình cài đặt nhóm chat<br>5. Người dùng bấm vào "\.\.\." của nhóm chat<br>6. Hệ thống tuỳ chọn đối với nhóm chat<br>7. Người dùng chọn sửa nhóm chat<br>8. Hệ thống hiển thị form chỉnh sửa nhóm chat<br>9. Người dùng điền thông tin, tuỳ chọn đối tượng tham gia và bấm nút "Lưu"<br>10. Lưu thông tin vào CSDL|||
|**Luồng ngoại lệ:**|8\.1\. Thông tin sai, quay lại form nhập thông tin, hiển thị thông báo đỏ ở trường sai|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**|BR\-57: Tên nhóm chat, tên khoá học giới hạn 50 ký tự|||
|**Tin nhắn thông báo :**||||

*Activity diagram*

### Ẩn thông tin dự án sơ cấp

*Đặc tả use case*

|**Use case ID:**|UC \- 27\.3|**Tên use case:**|Ẩn thông tin dự án sơ cấp|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|11/07/2024|
|**Các tác nhân chính:**|Thư ký|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng xoá nhóm chat mặc định|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và được thêm vào ban đào tạo trước đó|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục cài đặt nhóm chat<br>4. Hệ thống di chuyển sang màn hình cài đặt nhóm chat<br>5. Người dùng bấm vào "\.\.\." của nhóm chat<br>6. Hệ thống tuỳ chọn đối với nhóm chat<br>7. Người dùng chọn xoá nhóm chat<br>8. Hệ thống hiển thị pop up xác nhận xoá<br>9. Người dùng chọn "Xoá"<br>10. Lưu thông tin vào CSDL|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

### Thống kê dự án sơ cấp

*Đặc tả use case*

|**Use case ID:**|UC \- 27\.4|**Tên use case:**|Thống kê dự án sơ cấp|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|11/07/2024|
|**Các tác nhân chính:**|Thư ký|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng xoá nhóm chat mặc định|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và được thêm vào ban đào tạo trước đó|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục cài đặt nhóm chat<br>4. Hệ thống di chuyển sang màn hình cài đặt nhóm chat<br>5. Người dùng bấm vào "\.\.\." của nhóm chat<br>6. Hệ thống tuỳ chọn đối với nhóm chat<br>7. Người dùng chọn xoá nhóm chat<br>8. Hệ thống hiển thị pop up xác nhận xoá<br>9. Người dùng chọn "Xoá"<br>10. Lưu thông tin vào CSDL|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

### Filter dự án sơ cấp

*Đặc tả use case*

|**Use case ID:**|UC \- 27\.5|**Tên use case:**|Filter dự án sơ cấp|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|11/07/2024|
|**Các tác nhân chính:**|Thư ký|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng xoá nhóm chat mặc định|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và được thêm vào ban đào tạo trước đó|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục cài đặt nhóm chat<br>4. Hệ thống di chuyển sang màn hình cài đặt nhóm chat<br>5. Người dùng bấm vào "\.\.\." của nhóm chat<br>6. Hệ thống tuỳ chọn đối với nhóm chat<br>7. Người dùng chọn xoá nhóm chat<br>8. Hệ thống hiển thị pop up xác nhận xoá<br>9. Người dùng chọn "Xoá"<br>10. Lưu thông tin vào CSDL|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

### Search dự án sơ cấp

*Đặc tả use case*

|**Use case ID:**|UC \- 27\.6|**Tên use case:**|Search dự án sơ cấp|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|11/07/2024|
|**Các tác nhân chính:**|Thư ký|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng xoá nhóm chat mặc định|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công và được thêm vào ban đào tạo trước đó|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục cài đặt nhóm chat<br>4. Hệ thống di chuyển sang màn hình cài đặt nhóm chat<br>5. Người dùng bấm vào "\.\.\." của nhóm chat<br>6. Hệ thống tuỳ chọn đối với nhóm chat<br>7. Người dùng chọn xoá nhóm chat<br>8. Hệ thống hiển thị pop up xác nhận xoá<br>9. Người dùng chọn "Xoá"<br>10. Lưu thông tin vào CSDL|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

## Quản lý hợp đồng \(New 2\.2\)

*Screen Design*

### Search danh sách hợp đồng

*Đặc tả use case*

|**Use case ID:**|UC \- 29\.1|**Tên use case:**|Search danh sách hợp đồng|
|---|---|---|---|
|**Tác giả:**|Quỳnh Anh|**Ngày:**|12/07/2024|
|**Các tác nhân chính:**|Thư ký|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng muốn tìm kiếm hợp đồng|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục quản lý hợp đồng<br>4. Hệ thống di chuyển sang màn hình quản lý hợp đồng<br>5. Người dùng nhập nội dung tìm kiếm<br>6. Hệ thống hiển thị danh sách tìm kiếm theo nội dung đã nhập|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**||||
|**Tần suất sử dụng :**||||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

### Filter danh sách hợp đồng

*Đặc tả use case*

|**Use case ID:**|UC \- 29\.2|**Tên use case:**|Filter danh sách hợp đồng|
|---|---|---|---|
|**Tác giả:**|Quỳnh Anh|**Ngày:**|12/07/2024|
|**Các tác nhân chính:**|Thư ký|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng muốn lọc hợp đồng|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục quản lý hợp đồng<br>4. Hệ thống di chuyển sang màn hình quản lý hợp đồng<br>5. Người dùng chọn các tiêu chí cần lọc<br>6. Hệ thống hiển thị danh sách tìm kiếm theo nội dung đã nhập|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**||||
|**Tần suất sử dụng :**||||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

## Trích xuất thống kê kho hàng \(New 2\.3\)

### Kho hàng đã ký theo đầu chủ

*Screen Design*

*Đặc tả use case*

|**Use case ID:**||**Tên use case:**|Trích xuất thống kê kho hàng|
|---|---|---|---|
|**Tác giả:**|Nam|**Ngày:**|18/11/2024|
|**Các tác nhân chính:**|Thư ký Kho|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Thư ký kho xem thống kê số lượng nhà được đẩy lên kho, có thể tìm kiếm và xem theo tiêu chí |||
|**Điều kiện trước:**|Người dùng đăng nhập với tư cách thư ký kho hàng|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục Trích xuất thống kê kho hàng \- Kho hàng đã ký theo đầu chủ<br>4. Hệ thống hiển thị màn hình thống kê kho hàng đã ký theo đầu chủ<br>5. Người dùng có thể thực hiện những hành động như sau<br>---<br>5\.1 Người dùng bấm vào thanh tìm kiếm và nhập từ khoá cần tìm\. Sau đấy bấm Enter<br>6\.1\.1 Hệ thống đọc CSDL, truy vấn bản ghi khớp với từ khoá và hiển thị kết quả<br>---<br>5\.2 Người dùng chọn các tiêu chí mong muốn trong bộ lọc \(Khu vực \- Tỉnh \- Chi nhánh \- Phòng \- Khối \- Ký trong vòng 24 giờ\)<br>6\.2\.1 Hệ thống hiển thị kết quả phù hợp với tiêu chí người dùng đã chọn<br>---<br>5\.3 Người dùng chọn xuất file<br>6\.2\.1 Hệ thống hiển thị form xuất file<br>6\.2\.2 Người dùng chọn các tiêu chí mong muốn và bấm nút Xuất file<br>6\.2\.3 Hệ thống đọc CSDL, xuất file và lưu vào trong bộ nhớ thiết bị của người dùng|||
|**Luồng ngoại lệ:**|N/A|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi thư ký kho xem thống kê nhà được lên kho hàng trong 24 giờ qua<br>|Thư ký kho xem thống kê hàng được đẩy lên kho trong 24 giờ<br>|||Logging||
|||Xảy ra khi thư ký kho xem thống kê nhà được lên kho hàng trong 24 giờ qua bằng từ khoá|Thư ký kho xem thống kê hàng được đẩy lên kho trong 24 giờ bằng từ khoá|||Logging, Search||
|||Search: Xảy ra khi người dùng tìm kiếm bằng từ khoá|Hệ thống đọc dữ liệu người dùng nhập, hiển thị kết quả khớp với từ khoá|||||
|||Xảy ra khi thư ký kho xem thống kê nhà được lên kho hàng trong 24 giờ qua bằng các tiêu chí cụ thể|Thư ký kho xem thống kê hàng được đẩy lên kho trong 24 giờ bằng tiêu chí trong bộ lọc|||Logging, Filter||
|||Filter: Xảy ra khi người dùng tìm kiếm bằng các tiêu chí cụ thể|Hệ thống đọc dữ liệu người dùng nhập, hiển thị kết quả phù hợp với tiêu chí|||||

### Kho hàng đã ký theo quận huyện

*Screen Design*

*Đặc tả use case*

|**Use case ID:**||**Tên use case:**|Trích xuất thống kê kho hàng|
|---|---|---|---|
|**Tác giả:**|Nam|**Ngày:**|18/11/2024|
|**Các tác nhân chính:**|Thư ký Kho|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Thư ký kho xem thống kê số lượng nhà được đẩy lên kho, có thể tìm kiếm và xem theo tiêu chí |||
|**Điều kiện trước:**|Người dùng đăng nhập với tư cách thư ký kho hàng|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục Trích xuất thống kê kho hàng<br>4. Hệ thống di chuyển hiển thị danh sách các danh mục con<br>5. Người dùng có thể chọn 1 trong các danh mục sau<br>---<br>5\.1 Người dùng chọn Kho hàng đã ký theo đầu chủ<br>6\.1\.1 Hệ thống hiển thị thống kê kho hàng đã ký theo đầu chủ<br>---<br>5\.2 Người dùng chọn các tiêu chí mong muốn trong bộ lọc \(Khu vực \- Tỉnh \- Chi nhánh \- Phòng \- Khối \- Ký trong vòng 24 giờ\)<br>6\.2\.1 Hệ thống hiển thị kết quả phù hợp với tiêu chí người dùng đã chọn<br>---<br>5\.3 Người dùng chọn xuất file<br>6\.2\.1 Hệ thống hiển thị form xuất file<br>6\.2\.2 Người dùng chọn các tiêu chí mong muốn và bấm nút Xuất file<br>6\.2\.3 Hệ thống đọc CSDL, xuất file và lưu vào trong bộ nhớ thiết bị của người dùng|||
|**Luồng ngoại lệ:**|N/A|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi thư ký kho xem thống kê nhà được lên kho hàng trong 24 giờ qua<br>|Thư ký kho xem thống kê hàng được đẩy lên kho trong 24 giờ<br>|||Logging||
|||Xảy ra khi thư ký kho xem thống kê nhà được lên kho hàng trong 24 giờ qua bằng từ khoá|Thư ký kho xem thống kê hàng được đẩy lên kho trong 24 giờ bằng từ khoá|||Logging, Search||
|||Search: Xảy ra khi người dùng tìm kiếm bằng từ khoá|Hệ thống đọc dữ liệu người dùng nhập, hiển thị kết quả khớp với từ khoá|||||
|||Xảy ra khi thư ký kho xem thống kê nhà được lên kho hàng trong 24 giờ qua bằng các tiêu chí cụ thể|Thư ký kho xem thống kê hàng được đẩy lên kho trong 24 giờ bằng tiêu chí trong bộ lọc|||Logging, Filter||
|||Filter: Xảy ra khi người dùng tìm kiếm bằng các tiêu chí cụ thể|Hệ thống đọc dữ liệu người dùng nhập, hiển thị kết quả phù hợp với tiêu chí|||||

### Thư ký duyệt hàng

*Screen Design*

*Đặc tả use case*

|**Use case ID:**||**Tên use case:**|Trích xuất thống kê kho hàng|
|---|---|---|---|
|**Tác giả:**|Nam|**Ngày:**|18/11/2024|
|**Các tác nhân chính:**|Thư ký Kho|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Thư ký kho xem thống kê số lượng nhà được đẩy lên kho, có thể tìm kiếm và xem theo tiêu chí |||
|**Điều kiện trước:**|Người dùng đăng nhập với tư cách thư ký kho hàng|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục Trích xuất thống kê kho hàng<br>4. Hệ thống di chuyển hiển thị danh sách các danh mục con<br>5. Người dùng có thể chọn 1 trong các danh mục sau<br>---<br>5\.1 Người dùng chọn Kho hàng đã ký theo đầu chủ<br>6\.1\.1 Hệ thống hiển thị thống kê kho hàng đã ký theo đầu chủ<br>---<br>5\.2 Người dùng chọn các tiêu chí mong muốn trong bộ lọc \(Khu vực \- Tỉnh \- Chi nhánh \- Phòng \- Khối \- Ký trong vòng 24 giờ\)<br>6\.2\.1 Hệ thống hiển thị kết quả phù hợp với tiêu chí người dùng đã chọn<br>---<br>5\.3 Người dùng chọn xuất file<br>6\.2\.1 Hệ thống hiển thị form xuất file<br>6\.2\.2 Người dùng chọn các tiêu chí mong muốn và bấm nút Xuất file<br>6\.2\.3 Hệ thống đọc CSDL, xuất file và lưu vào trong bộ nhớ thiết bị của người dùng|||
|**Luồng ngoại lệ:**|N/A|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi thư ký kho xem thống kê nhà được lên kho hàng trong 24 giờ qua<br>|Thư ký kho xem thống kê hàng được đẩy lên kho trong 24 giờ<br>|||Logging||
|||Xảy ra khi thư ký kho xem thống kê nhà được lên kho hàng trong 24 giờ qua bằng từ khoá|Thư ký kho xem thống kê hàng được đẩy lên kho trong 24 giờ bằng từ khoá|||Logging, Search||
|||Search: Xảy ra khi người dùng tìm kiếm bằng từ khoá|Hệ thống đọc dữ liệu người dùng nhập, hiển thị kết quả khớp với từ khoá|||||
|||Xảy ra khi thư ký kho xem thống kê nhà được lên kho hàng trong 24 giờ qua bằng các tiêu chí cụ thể|Thư ký kho xem thống kê hàng được đẩy lên kho trong 24 giờ bằng tiêu chí trong bộ lọc|||Logging, Filter||
|||Filter: Xảy ra khi người dùng tìm kiếm bằng các tiêu chí cụ thể|Hệ thống đọc dữ liệu người dùng nhập, hiển thị kết quả phù hợp với tiêu chí|||||

## Trích xuất thống kê nhân sự \(New 2\.3\)

### Thống kê nhân sự in\-out theo tháng

*Screen Design*

*Đặc tả use case*

|**Use case ID:**||**Tên use case:**|Thống kê nhân sự in\-out theo tháng|
|---|---|---|---|
|**Tác giả:**|Nam|**Ngày:**|19/11/2024|
|**Các tác nhân chính:**|Thư ký HCNS HQ|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Thư ký HCNS xem thống kê nhân sự in\-out theo tháng, có thể lọc chi nhánh phòng ban, theo chức danh, theo năm, tìm kiếm, sắp xếp thứ tự theo khoảng thời gian hoặc số lượng biến động, ẩn cột và tải tệp thống kê|||
|**Điều kiện trước:**|Người dùng đăng nhập với chức danh thư ký và có quyền HCNS|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục Trích xuất thống kê nhân sự \- Chọn Thống kê nhân sự in out theo tháng<br>4. Hệ thống di chuyển sang màn hình Thống kê nhân sự in\-out theo tháng<br>5. Người dùng có thể thực hiện các hành động sau<br>---<br>6\.1 Chọn các tiêu chí phù hợp trong bộ lọc <br>6\.1\.1 Hệ thống hiển thị kết quả phù hợp với tuỳ chọn của người dùng<br>---<br>6\.2 Chọn tải tệp thống kê<br>6\.2\.1 Hệ thống ghi nhận bộ lọc của người dùng và đọc CSDL, xuất file vào bộ nhớ trong của thiết bị người dùng<br>---<br>6\.3 Bấm vào ô tìm kiếm và nhập tên các phòng\. Sau đấy bấm enter<br>6\.3\.1 Hệ thống ghi nhận từ khoá\. Truy vấn dữ liệu và trả kết quả khớp với từ khoá<br>---<br>6\.4 Người dùng bấm vào ẩn cột<br>6\.4\.1 Hệ thống hiển thị tuỳ chọn tắt các tháng<br>6\.4\.2 Người dùng chọn tắt các tháng mong muốn<br>6\.4\.3 Hệ thống cập nhật hiển thị danh sách thống kê không xuất hiện những cột đã tắt<br>---<br>6\.5 Bấm vào sắp xếp theo thứ tự và chọn tiêu chí sắp xếp<br>6\.5\.1 Hệ thống hiển thị kết quả theo tiêu chí người dùng đã chọn|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||||||||

### Thống kê nhân sự các phòng theo cấp

*Screen Design*

*Đặc tả use case*

|**Use case ID:**||**Tên use case:**|Thống kê nhân sự các phòng theo cấp|
|---|---|---|---|
|**Tác giả:**|Nam|**Ngày:**|20/11/2024|
|**Các tác nhân chính:**|Thư ký HCNS HQ|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Thư ký HCNS xem thống kê nhân sự các phòng theo cấp chức danh, có thể lọc chi nhánh phòng ban, theo chức danh, theo năm tháng, tìm kiếm, sắp xếp thứ tự theo khoảng thời gian hoặc số lượng, ẩn cột chức danh và tải tệp thống kê|||
|**Điều kiện trước:**|Người dùng đăng nhập với chức danh thư ký và có quyền HCNS|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục Trích xuất thống kê nhân sự \- Chọn Thống kê nhân sự các phòng theo cấp<br>4. Hệ thống di chuyển sang màn hình Thống kê nhân sự các phòng theo tháng<br>5. Người dùng có thể thực hiện các hành động sau<br>---<br>6\.1 Chọn các tiêu chí phù hợp trong bộ lọc <br>6\.1\.1 Hệ thống hiển thị kết quả phù hợp với tuỳ chọn của người dùng<br>---<br>6\.2 Chọn tải tệp thống kê<br>6\.2\.1 Hệ thống ghi nhận bộ lọc của người dùng và đọc CSDL, xuất file vào bộ nhớ trong của thiết bị người dùng<br>---<br>6\.3 Bấm vào ô tìm kiếm và nhập tên các phòng\. Sau đấy bấm enter<br>6\.3\.1 Hệ thống ghi nhận từ khoá\. Truy vấn dữ liệu và trả kết quả khớp với từ khoá<br>---<br>6\.4 Người dùng bấm vào ẩn cột<br>6\.4\.1 Hệ thống hiển thị tuỳ chọn tắt các chức danh<br>6\.4\.2 Người dùng chọn tắt các tháng mong muốn<br>6\.4\.3 Hệ thống cập nhật hiển thị danh sách thống kê không xuất hiện những cột đã tắt<br>---<br>6\.5 Bấm vào sắp xếp theo thứ tự và chọn tiêu chí sắp xếp<br>6\.5\.1 Hệ thống hiển thị kết quả theo tiêu chí người dùng đã chọn|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||||||||

## Quản lý nhân sự bộ phận \(New 2\.1\)

*Screen Design*

*Đặc tả use case*

|**Use case ID:**|UC \- 29\.1|**Tên use case:**|Quản lý nhân sự bộ phận|
|---|---|---|---|
|**Tác giả:**|Nam|**Ngày:**|21/11/2024|
|**Các tác nhân chính:**|Thư ký|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Người dùng quản lý các nhân sự các bộ phận hành chính, kho, truyền thông, tuyển dụng, thanh tra,\.\.\.|||
|**Điều kiện trước:**|Người dùng đăng nhập với chức danh thư ký HCNS|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục Quản lý nhân sự bộ phận<br>4. Hệ thống di chuyển sang màn hình quản lý nhân sự bộ phận<br>5. Người dùng có thể thực hiện các hành động như sau<br>---<br>6\.1 Người dùng bấm vào bộ lọc và chọn nhân sự theo bộ phận<br>6\.1\.1 Hệ thống hiển thị danh sách nhân sự theo bộ phận đã chọn<br>---<br>6\.2 Người dùng bấm vào thanh tìm kiếm, nhập từ khoá và bấm tìm<br>6\.2\.1 Hệ thống hiển thị kết quả khớp với từ khoá<br>---<br>|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|Low|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||||||||

## Quản lý truyền thông \(New 2\.1\)

### Thư viện hình ảnh

*Đặc tả use case*

|**Use case ID:**||**Tên use case:**|Quản lý thư viện hình ảnh|
|---|---|---|---|
|**Tác giả:**|Nam|**Ngày:**|20/11/2024|
|**Các tác nhân chính:**|Truyền thông|**Tác nhân phụ:**|N/A|
|**Mô tả:**|truyền thông quản lý thư viện hình ảnh, có thể tạo album đăng ảnh và xoá ảnh, tìm kiếm|||
|**Điều kiện trước:**|Người dùng đăng nhập với chức danh truyền thông|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục quản lý truyền thông \- Chọn Thư viện hình ảnh<br>4. Hệ thống di chuyển sang màn hình quản lý Thư viện hình ảnh<br>5. Người dùng tạo album ảnh, đăng ảnh hoặc xoá ảnh<br>6. Hệ thống ghi nhận hành động<br>---<br>|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**||||
|**Tần suất sử dụng :**||||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||||||||

### Quản lý sự kiện

*Đặc tả use case*

|**Use case ID:**||**Tên use case:**|Quản lý sự kiện|
|---|---|---|---|
|**Tác giả:**|Quỳnh Anh|**Ngày:**|21/11/2024|
|**Các tác nhân chính:**|Truyền thông|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Truyền thông đăng tin sự kiện|||
|**Điều kiện trước:**|Người dùng đăng nhập với chức danh truyền thông|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục quản lý truyền thông \- Chọn Quản lý sự kiện <br>4. Hệ thống di chuyển sang màn hình quản lý quản lý sự kiện<br>5. Người dùng chọn đăng tin sự kiện<br>6. Hệ thống hiển thị form đăng tin sự kiện<br>7. Người dùng nhập thông tin \(tên sự kiện, 1 banner sự kiện, nội dung sự kiện,\.\.\.\)<br>8. Hệ thống tạo tự động album ảnh mới với tên sự kiện, thay đổi banner trên app, tin sự kiện được đăng trên feed, banner được link tới tin đăng sự kiện|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**||||
|**Tần suất sử dụng :**||||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

### Quản lý blog

*Đặc tả use case*

|**Use case ID:**||**Tên use case:**|Quản lý blog|
|---|---|---|---|
|**Tác giả:**|Quỳnh Anh|**Ngày:**|21/11/2024|
|**Các tác nhân chính:**|Truyền thông|**Tác nhân phụ:**|N/A|
|**Mô tả:**|truyền thông quản lý blog|||
|**Điều kiện trước:**|Người dùng đăng nhập với chức danh truyền thông|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục quản lý truyền thông \- Chọn Quản lý blog<br>4. Hệ thống di chuyển sang màn hình quản lý blog<br>5. Người dùng chọn đăng blog<br>6. Hệ thống hiển thị form đăng blog<br>7. Người dùng nhập thông tin \(banner, nội dung,\.\.\.\)<br>8. Hệ thống thay đổi banner trên app, blog được đăng trên feed, banner được link tới blog<br>---<br>|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**||||
|**Tần suất sử dụng :**||||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

## Quản lý thông báo \(New 2\.3\)

*Screen Design*

*Đặc tả use case*

|**Use case ID:**||**Tên use case:**|Quản lý thông báo|
|---|---|---|---|
|**Tác giả:**|Nam|**Ngày:**|18/11/2024|
|**Các tác nhân chính:**|Thư ký|**Tác nhân phụ:**|N/A|
|**Mô tả:**|Thư ký tạo thông báo đẩy \(Đối với app sẽ hiển thị trên thông báo hệ thống\)\. Có thể tạo thông báo theo khu vực, chức danh và toàn bộ công ty|||
|**Điều kiện trước:**|Người dùng đăng nhập với chức danh thư ký|||
|**Luồng chính:**<br>|1. Người dùng truy cập vào trang quản trị<br>2. Hệ thống hiển thị trang quản trị <br>3. Người dùng chọn mục quản lý thông báo<br>4. Hệ thống di chuyển sang màn hình quản lý thông báo<br>5. Người dùng có thể thực hiện 1 trong các hành động sau<br>---<br>6\.1 Người dùng chọn Tạo thông báo<br>6\.1\.1 Hệ thống hiển thị Form tạo thông báo<br>6\.1\.2 Người dùng nhập thông tin \(Có thể chọn tạo thông báo theo khu vực và chức danh, toàn bộ công ty\) và bấm Tạo<br>6\.1\.3 Hệ thống lưu vào CSDL, gửi thông báo đến thành viên công ty dựa theo tuỳ chọn của người tạo<br>---<br>6\.2 Người dùng lọc thông báo theo các tiêu chí<br>6\.2\.1 Hệ thống hiển thị các thông báo khớp theo tiêu chí<br>---<br>6\.3 Người dùng tìm kiếm thông báo bằng từ khoá<br>6\.3\.1 Hệ thống hiển thị kết quả theo từ khoá người dùng đã nhập|||
|**Luồng ngoại lệ:**|6\.1\.2\.1 Hệ thống từ chối tạo do người dùng nhập sai thông tin, yêu cầu người dùng nhập lại|||
|**Ưu tiên:**||||
|**Tần suất sử dụng :**||||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi thư ký xem danh sách người dùng đang hoạt động trên hệ thống<br>|Thư ký trở lên xem danh sách người dùng đang hoạt động<br>|Account\.operating\_time|Account|Logging||

## Ban thanh tra \(New 2\.2\)

### Chờ thanh tra

*Đặc tả use case*

|Use case ID:|UC \- |Tên use case:|Chờ thanh tra|
|---|---|---|---|
|Tác giả:|Quỳnh Anh|Ngày:|26/11/2024|
|Các tác nhân chính:|Ban thanh tra|Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user xem các bài viết trong trạng thái chờ thanh tra|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng Click Trang quản trị \- Ban thanh tra <br>2\.Hệ thống hiển thị màn hình tab Chờ thanh tra                   <br>3\. Người dùng click " Nhận thanh tra", bài viết được chuyển sang tab Đang thanh tra\. Hệ thống ghi nhận người thanh tra\.|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi thư ký xem bài viết theo trạng thái <br>|Thư ký trở lên Xem bài viết thông báo vụ chốt theo trạng thái bài viết<br>|Thông báo vụ chốt\.feed\_status|Tin hoạt động<br>|Logging, StateUpdate||
|<br>||Xảy ra khi thư ký xét duyệt bài viết tin hoạt động<br>|Thư ký trở lên Sửa \(Xét duyệt\) Trạng thái bài viết vụ chốt<br>||Tin hoạt động<br>|Logging, StateUpdate, Notification||
|||Notification: Xảy ra khi thư ký cập nhật trạng thái bài viết|Hệ thống gửi thông báo đến người đăng bài||Tin hoạt động|||

### Đang thanh tra

*Đặc tả use case*

|Use case ID:|UC \- |Tên use case:|Đang thanh tra|
|---|---|---|---|
|Tác giả:|Quỳnh Anh|Ngày:|27/11/2024|
|Các tác nhân chính:|Ban thanh tra|Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user xem các bài viết trong trạng thái đang thanh tra|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền ban thanh tra|||
|Luồng chính:|1\.Người dùng Click Trang quản trị \-  Ban thanh tra  \- Đang thanh tra<br>2\.Hệ thống hiển thị màn hình "Đang thanh tra"<br>3\.Người dùng click "Đã thanh tra"<br>4\.Hệ thống hiển thị pop up ý kiến thanh tra<br>5\.Người dùng điền ý kiến rồi ấn lưu<br>6\.Hệ thống lưu ý kiến thanh tra và chuyển bài viết sang trạng thái đã thanh tra\.|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|\(MSG57\)Cập nhật thành công|||

*Activity diagram*

### Đã thanh tra

*Đặc tả use case*

|Use case ID:|UC \- |Tên use case:|Đã thanh tra|
|---|---|---|---|
|Tác giả:|Quỳnh Anh|Ngày:|27/11/2024|
|Các tác nhân chính:|Ban thanh tra|Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user xem các bài viết trong trạng thái đa thanh tra và có thể thanh tra lại|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền ban thanh tra|||
|Luồng chính:|1\.Người dùng Click Trang quản trị \-  quản lý feed \- vụ chốt<br>2\.Hệ thống hiển thị màn hình "Vụ chốt", tab chờ duyệt<br>3\.Người dùng click tab từ chối, <br>4\.Hệ thống chuyển sang tab "Từ chối"<br>4\.1\.Nếu Click Button "Duyệt", bài viết được chuyển sang tab "đã duyệt" và hiển thị trên bảng tin\.|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

# [6 \- SRS Khonhapho website \- Admin](https://v4cueke6gq8.sg.larksuite.com/wiki/Y2aIwo1CqiAz2GkmHFZlUm8agHd)



