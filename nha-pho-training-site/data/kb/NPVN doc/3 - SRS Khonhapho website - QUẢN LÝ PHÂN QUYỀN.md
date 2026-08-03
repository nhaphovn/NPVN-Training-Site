# 3 \- SRS Khonhapho website \- QUẢN LÝ PHÂN QUYỀN

# [2 \- SRS Khonhapho website](https://v4cueke6gq8.sg.larksuite.com/wiki/FMylwVW5kiJYC6kvZzzlcycfgWd)

# VI\. Use case tổng thể Quản lý phòng/nhóm

Use case design

## Mã giới thiệu

### Mã giới thiệu

*Đặc tả use case*

|Use case ID:|UC \- 13\.1\.1|Tên use case:|**Tạo mã giới thiệu**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|23/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user xem danh sách các mã giới thiệu, thêm mới mã giới thiệu để tham gia vào nhóm|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "Mã giới thiệu"<br>2\. Hệ thống chuyển hướng đến "Mã giới thiệu"<br>3\. Người dùng chọn nút “Thêm mới”<br>4\. Hệ thống hiển thị popup Thêm mới mã giới thiệu<br>5\. Người dùng chọn nhóm thêm mã giới thiệu, Bấm chọn "Tạo mã"<br>6\. Hệ thống lưu Mã giới thiệu vừa thêm vào CSDL, hiển thị lên đầu danh sách|||
|Luồng ngoại lệ:|Hệ thống thông báo input chưa hợp lệ và yêu cầu người dùng nhập lại|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG38: *Tạo mã giới thiệu thành công\!*|||

*Activity diagram*

***Mô tả Event \& PolicyL: ***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng chọn nhóm và ấn thêm mới|Thêm mới mã giới thiệu<br>|Role: TP, PGĐKD, GĐKD,GĐKV|<br>|Validate||

## Quản lý thành viên

### Search thành viên

*Đặc tả use case*

|Use case ID:|UC \- 13\.2\.1|Tên use case:|**Search Thành viên**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|23/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng tìm kiếm và xem Danh sách thành viên nhóm|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Thành viên"<br>2\. Hệ thống chuyển hướng đến "QL Thành viên"<br>3\. Người dùng nhập thông tin tìm kiếm vào searchbox<br>4\. Người dùng bấm chọn icon "Search” , thực hiện tìm kiếm<br>5\. Hệ thống lọc thông tin theo từ khoá, hiển thị danh sách báo cáo được tìm kiếm theo từ khoá nhập|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng tìm kiếm không thành công, thông tin tìm kiếm không đúng so với thông tin trên hệ thống |||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy: ***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|OE01||Xảy ra khi người dùng cần tìm kiếm thành viên|Trợ lý trở lên Tìm kiếm tài khoản bằng từ khoá trong phòng|<br>|Profile<br>|Search,<br>||
||OE01H1|Search: xảy ra khi event xảy ra|Hệ thống đọc danh sách thành viên phòng theo yêu cầu người dùng \(keyword\)||Profile|||

### Filter thành viên

*Đặc tả use case*

|Use case ID:|UC \- 13\.2\.2|Tên use case:|**Filter Thành viên**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|23/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng lọc tìm các thành viên nhóm theo bộ lọc|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Thành viên"<br>2\. Hệ thống chuyển hướng đến "QL Thành viên"<br>3\. Người dùng chọn input các bộ lọc<br>4\. Hệ thống trải xuống droplist các bộ lọc để chọn<br>5\. Người dùng chọn option theo mong muốn lọc <br>6\. Hệ thống lọc thông tin theo tiêu chí ở từ khoá, hiển thị danh sách thành viên nhóm lọc theo option đã chọn|||
|Luồng ngoại lệ:|Hệ thống không tìm thấy kết quả phù hợp với tiêu chí|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần tìm kiếm thành viên|Trợ lý trở lên Tìm kiếm tài khoản bằng tiêu chí trong phòng|<br>||Search||
|||Search|Hệ thống đọc danh sách thành viên phòng theo yêu cầu người dùng \(filter\)|||||

### Sửa thông tin thành viên

*Đặc tả use case*

|Use case ID:|UC \- 13\.2\.3|Tên use case:|**Sửa thông tin Thành viên**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|23/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng sửa thông tin thành viên nhóm|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Thành viên"<br>2\. Hệ thống chuyển hướng đến "QL Thành viên"<br>3\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn “Xem/Sửa tài khoản”<br>4\. Hệ thống hiện popup sửa thông tin thành viên nhóm<br>5\. Người dùng điền lại thông tin chỉnh sửa, Bấm chọn “Lưu”<br>6\. Hệ thống định dạng thông tin, lưu thông tin chỉnh sửa vào CSDL|||
|Luồng ngoại lệ:|6\.1\. Hệ thống thông báo Thông tin nhập sai và yêu cầu người dùng nhập lại|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-01: SĐT hoặc CCCD không được bỏ trống<br>BR\-02: SĐT phải đúng định dạng<br>BR\-03:Địa chỉ thường chú và nơi ở hiện tại không quá 100 ký tự<br>BR\-06: Họ và tên không được quá 50 ký tự<br>BR\-07: Email phải đúng định dạng<br>BR\-08: Ngày cấp CCCD phải sau ngày sinh 15 năm<br>BR\-09: SĐT người thân không được trùng với SĐT đăng ký<br>BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)|||
|Tin nhắn thông báo :|MSG01: *Cần nhập mục này\!*<br>MSG02: *Cần nhập số điện thoại\!*<br>MSG03: *CCCD chưa hợp lệ*<br>MSG05: *Email chưa hợp lệ\!*<br>MSG06: *Số điện thoại chưa hợp lệ\!*<br>MSG11: *Số điện thoại hoặc CCCD chưa chính xác\!*|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần sửa thông tin thành viên <br>|Trưởng phòng Sửa thông tin "Học viên, Chuyên viên, Trợ lý" trong phòng\. Với điều kiện hai bên cùng thuộc một phòng ban\. |<br>|<br>|Validate||
|||Update|Hệ thống từ chối cập nhật thông tin do người dùng nhập sai dữ liệu|||||

### Sửa trạng thái thành viên

*Đặc tả use case*

|Use case ID:|UC \- 13\.2\.4|Tên use case:|**Sửa trạng thái Thành viên**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|23/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng sửa trạng thái thành viên nhóm|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Thành viên"<br>2\. Hệ thống chuyển hướng đến "QL Thành viên"<br>3\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn "Tạm dừng \(Khoá TK\)/Dừng hợp tác"<br>4\. Hệ thống hiển thị popup Xác nhận<br>4\.1\. Người dùng bấm chọn "Đồng ý" \-\> Hệ thống lưu vào CSDL<br>4\.2\. Người dùng bấm chọn "Huỷ" \-\> Quay lại màn hình danh sách|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG62: Cập nhật trạng thái thành công\!|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần sửa trạng thái thành viên |Trưởng phòng Khoá/ mở tài khoản thành viên trong Phòng|<br>|<br>|Update||

### Sửa chức danh thành viên

*Đặc tả use case*

|Use case ID:|UC \- 13\.2\.5|Tên use case:|**Sửa chức danh Thành viên**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|23/04/2024|
|Các tác nhân chính:|Thư ký|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng sửa đổi chức danh của thành viên|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Thành viên"<br>2\. Hệ thống chuyển hướng đến "QL Thành viên"<br>3\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn “Thay đổi chức danh”<br>4\. Hệ thống hiển thị form điền thay đổi chức danh<br>5\. Người dùng chọn chức danh muốn thay đổi, Bấm chọn “Lưu” |||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG28: *Cập nhật thông tin tài khoản thành công\!*|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần sửa chức danh thành viên |Trưởng phòng thay đổi \(Nâng/Hạ\) role "Học viên" "Chuyên viên" và "Trợ lý" trong phòng|<br>|<br>|Logging<br>||

### Sửa nhóm thành viên

*Đặc tả use case*

|Use case ID:|UC \- 13\.2\.6|Tên use case:|**Sửa nhóm Thành viên**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|23/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng sửa nhóm của thành viên|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Thành viên"<br>2\. Hệ thống chuyển hướng đến "QL Thành viên"<br>3\. Người dùng bấm chọn  “\[\.\.\.\]”  \-\> Chọn “Thay đổi nhóm”<br>4\. Hệ thống hiện popup Thay đổi nhóm <br>5\. Người dùng chọn option muốn thay đổi, chọn “Lưu”<br>6\. Hệ thống lưu thông tin chỉnh sửa vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57:*Cập nhật thành công*|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần sửa nhóm của thành viên |Trưởng phòng Sửa thông tin nhóm của thành viên|<br>|<br>|Logging||

### Giới hạn xem kho tài nguyên của thành viên \(New 2\.4\)

*Đặc tả use case*

|Use case ID:||Tên use case:|Giới hạn xem kho tài nguyên của thành viên|
|---|---|---|---|
|Tác giả:|Nam|Ngày:|29/11/2024|
|Các tác nhân chính:|Trưởng phòng, PGĐKD, GĐKD|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép trưởng phòng cập nhật quyền xem kho hàng của HV, CV trong phòng|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào Quản lý phòng/nhóm \- Quản lý thành viên|||
|Luồng chính:|1. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL thành viên"<br>2. Hệ thống chuyển hướng đến "QL thành viên"<br>3. Người dùng bấm vào tuỳ chọn mở rộng của thành viên bất kỳ<br>4. Hệ thống hiển thị danh sách tuỳ chọn<br>5. Người dùng chọn giới hạn xem Kho tài nguyên<br>6. Hệ thống hiển thị form giới hạn<br>7. Người dùng chọn khoảng giá, khu vực và bấm Lưu<br>8. Hệ thống cập nhật CSDL, ghi đè lên policy cơ bản xem kho theo chức danh|||
|Luồng ngoại lệ:|7\.1 Người dùng không có quyền Cập nhật giới hạn xem kho của HV, CV|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|Trưởng phòng có thể sửa giới hạn xem khoảng giá của kho tài nguyên đối với HV, CV trong phòng\. Quyền sẽ ghi đè lên Policy cơ bản\. Đối với HV được xem kho hàng dưới 35 tỷ nhưng trưởng phòng set quyền xem 40 tỷ thì hệ thống vẫn chỉ cho xem kho hàng dưới 35 tỷ, không được vượt quá quyền cơ bản của policy, nhưng nếu set dưới 9 tỷ thì quyền sẽ ghi đè lên policy và HV đấy chỉ được xem kho hàng dưới 9 tỷ|||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi Trưởng phòng cập nhật quyền xem kho tài nguyên của HV, CV|Trưởng phòng Cập nhật quyền xem kho hàng của học viên, chuyên viên bằng cách đặt 1 mốc giá, tiêu chí cụ thể và giới hạn chỉ được xem các tin đăng với tiêu chí đã được đặt|||||
|||||||||

### Khoá đăng tin đầu chủ \(New \- 2\.3\)

## Thống kê hiệu suất công việc \(New \- 2\.3\)

Use case design

### Lọc

*Đặc tả use case*

|Use case ID:|UC \- 13\.2\.6|Tên use case:|**Sửa nhóm Thành viên**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|23/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng sửa nhóm của thành viên|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Thành viên"<br>2\. Hệ thống chuyển hướng đến "QL Thành viên"<br>3\. Người dùng bấm chọn  “\[\.\.\.\]”  \-\> Chọn “Thay đổi nhóm”<br>4\. Hệ thống hiện popup Thay đổi nhóm <br>5\. Người dùng chọn option muốn thay đổi, chọn “Lưu”<br>6\. Hệ thống lưu thông tin chỉnh sửa vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57:*Cập nhật thành công*|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần sửa nhóm của thành viên |Trưởng phòng Sửa thông tin nhóm của thành viên|<br>|<br>|Logging||

### Tìm kiếm

*Đặc tả use case*

|Use case ID:|UC \- 13\.2\.6|Tên use case:|**Sửa nhóm Thành viên**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|23/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng sửa nhóm của thành viên|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Thành viên"<br>2\. Hệ thống chuyển hướng đến "QL Thành viên"<br>3\. Người dùng bấm chọn  “\[\.\.\.\]”  \-\> Chọn “Thay đổi nhóm”<br>4\. Hệ thống hiện popup Thay đổi nhóm <br>5\. Người dùng chọn option muốn thay đổi, chọn “Lưu”<br>6\. Hệ thống lưu thông tin chỉnh sửa vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57:*Cập nhật thành công*|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần sửa nhóm của thành viên |Trưởng phòng Sửa thông tin nhóm của thành viên|<br>|<br>|Logging||

## Quản lý khách của CV

Use case design

### Filter danh sách khách 

*Đặc tả use case*

|Use case ID:|UC \- 13\.3\.1|Tên use case:|**Filter danh sách khách **|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|23/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng lọc khách hàng theo các bộ lọc |||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL khách của CV"<br>2\. Hệ thống chuyển hướng đến "QL khách của CV"<br>3\. Người dùng chọn input các bộ lọc<br>4\. Hệ thống trải xuống droplist các bộ lọc để chọn<br>5\. Người dùng chọn option theo mong muốn lọc <br>6\. Hệ thống hiển thị danh sách khách hàng lọc theo option đã chọn|||
|Luồng ngoại lệ:|Hệ thống không tìm thấy kết quả phù hợp với tiêu chí|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần tìm kiếm khách của chuyên viên|Trợ lý trở lên Tìm kiếm khách hàng bằng tiêu chí trong phòng|<br>|<br>|Filter||
|||Filter|Hệ thống lọc theo tiêu chí|||||

### Search danh sách khách 

*Đặc tả use case*

|Use case ID:|UC \- 13\.3\.2|Tên use case:|**Search danh sách khách **|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|23/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng tìm kiếm khách hàng theo thông tin tìm kiếm|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL khách của CV"<br>2\. Hệ thống chuyển hướng đến "QL khách của CV"<br>3\. Người dùng nhập thông tin tìm kiếm vào searchbox<br>4\. Người dùng bấm chọn icon “Search” , thực hiện tìm kiếm<br>5\. Hệ thống lọc thông tin theo từ khoá, hiển thị thông tin khách hàng được tìm kiếm |||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng tìm kiếm không thành công, thông tin tìm kiếm không đúng so với thông tin trên hệ thống |||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần tìm kiếm khách của chuyên viên|Trợ lý trở lên Tìm kiếm khách hàng bằng từ khoá trong phòng|<br>|<br>|Search||
|||Search|Hệ thống lọc theo từ khoá|||||

### Search danh sách khách 

### Xem chi tiết khách 

*Đặc tả use case*

|Use case ID:|UC \- 13\.3\.3|Tên use case:|**Xem chi tiết khách**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|23/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng xem thông tin khách hàng|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL khách của CV"<br>2\. Hệ thống chuyển hướng đến "QL khách của CV"<br>3\. Người dùng chọn icon “\[ \]” tại phần khách hàng muốn xem thông tin<br>4\. Hệ thống hiển thị popup thông tin chi tiết về khách hàng chọn xem|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*



### Quản lý khách chuyên viên trong Nhóm \(Chưa có\) 

## Quản lý Báo cáo của CV

Use case design

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần xem báo cáo của chuyên viên|Trưởng phòng trở lên tìm kiếm báo cáo dẫn khách trong phòng|<br>|<br>|||

### Search tên chuyên viên

*Đặc tả use case*

|Use case ID:|UC \- 13\.4\.1|Tên use case:|**Search tên chuyên viên**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|23/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng xem, tìm kiếm các báo cáo của chuyên viên theo tên của chuyên viên|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Báo cáo của CV"<br>2\. Hệ thống chuyển hướng đến "QL Báo cáo của CV"<br>3\. Người dùng nhập thông tin tìm kiếm vào searchbox<br>4\. Người dùng bấm chọn icon "Search” , thực hiện tìm kiếm<br>5\. Hệ thống lọc thông tin theo từ khoá, hiển thị danh sách báo cáo được tìm kiếm theo từ khoá nhập|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng tìm kiếm không thành công, thông tin tìm kiếm không đúng so với thông tin trên hệ thống |||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :||||

*Activity diagram*

### Search nội dung

*Đặc tả use case*

|Use case ID:|UC \- 13\.4\.2|Tên use case:|**Search nội dung**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|23/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng xem, tìm kiếm các báo cáo của chuyên viên theo nội dung báo cáo |||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Báo cáo của CV"<br>2\. Hệ thống chuyển hướng đến "QL Báo cáo của CV"<br>3\. Người dùng nhập thông tin tìm kiếm vào searchbox<br>4\. Người dùng bấm chọn icon “Search” , thực hiện tìm kiếm<br>5\. Hệ thống lọc thông tin theo từ khoá, hiển thị danh sách báo cáo được tìm kiếm theo từ khoá nhập|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng tìm kiếm không thành công, thông tin tìm kiếm không đúng so với thông tin trên hệ thống |||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :||||

*Activity diagram*

### Xem chi tiết báo cáo

*Đặc tả use case 13\.4\.3*

|Use case ID:|UC \- 13\.4\.3|Tên use case:|**Xem chi tiết báo cáo**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|23/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng xem chi tiết báo cáo của chuyên viên|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Báo cáo của CV"<br>2\. Hệ thống chuyển hướng đến "QL Báo cáo của CV"<br>3\. Người dùng chọn icon “\[ \]” tại phần báo cáo muốn xem thông tin<br>4\. Hệ thống hiển thị popup thông tin chi tiết về báo cáo đã chọn xem|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

## Quản lý Ứng viên vòng 0 

Use case design

### Thêm ứng viên

*Đặc tả use case*

|Use case ID:|UC \- 13\.5\.1|Tên use case:|**Thêm ứng viên**|
|---|---|---|---|
|Tác giả:|Nam|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng thêm mới ứng viên vòng 0|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Ứng viên vòng 0"<br>2\. Hệ thống chuyển hướng đến "QL Ứng viên vòng 0"<br>3\. Người dùng chọn nút “Thêm mới”<br>4\. Người dùng nhập input vào các trường, bấm chọn “Thêm”<br>5\. Hệ thống lưu UV vừa thêm vào CSDL, hiển thị lên đầu danh sách|||
|Luồng ngoại lệ:|Hệ thống thông báo input chưa hợp lệ và yêu cầu người dùng nhập lại|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-01: SĐT hoặc CCCD không được bỏ trống<br>BR\-02: SĐT phải đúng định dạng<br>BR\-06: Họ và tên không được quá 50 ký tự<br>BR\-08: Ngày cấp CCCD phải sau ngày sinh 15 năm<br>BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)<br>BR\-45: Giới hạn ảnh upload là 5mb|||
|Tin nhắn thông báo :|MSG01: *Cần nhập mục này\!*<br>MSG02: *Cần nhập số điện thoại\!*<br>MSG03: *CCCD chưa hợp lệ*<br>MSG11: *Cần nhập số điện thoại hoặc CCCD\!*<br>MSG12: *Số điện thoại hoặc CCCD chưa chính xác\!*<br>MSG54: *Thêm ứng viên thành công*|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần thêm ứng viên vòng 0|Trợ lý trở lên tạo ứng viên trong phòng<br>|<br>|<br>|Validate||
|||Validate: Xảy ra khi người dùng nhập sai các trường thông tin|Hệ thống từ chối tạo ứng viên mới do người dùng nhập sai thông tin<br>|||logging||

### Search ứng viên

*Đặc tả use case 13\.5\.2*

|Use case ID:|UC \- 13\.5\.2|Tên use case:|**Search ứng viên**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng xem Danh sách ứng viên vòng 0, tìm kiếm các ứng viên |||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Ứng viên vòng 0"<br>2\. Hệ thống chuyển hướng đến "QL Ứng viên vòng 0"<br>3\. Người dùng nhập thông tin tìm kiếm vào searchbox<br>4\. Người dùng bấm chọn icon "Search” , thực hiện tìm kiếm<br>5\. Hệ thống lọc thông tin theo từ khoá, hiển thị dánh sách báo cáo được tìm kiếm theo từ khoá nhập|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng tìm kiếm không thành công, thông tin tìm kiếm không đúng so với thông tin trên hệ thống |||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần tìm kiếm ứng viên vòng 0|Trợ lý trở lên xem ứng viên trong phòng|<br>|<br>|Search||
|||Search|Hệ thống lọc thông tin có chứa từ khoá|||||

### Sửa ứng viên

*Đặc tả use case 13\.5\.3*

|Use case ID:|UC \- 13\.5\.3|Tên use case:|**Sửa ứng viên**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng sửa thông tin ứng viên và xoá ứng viên|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Ứng viên vòng 0"<br>2\. Hệ thống chuyển hướng đến "QL Ứng viên vòng 0"<br>3\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn “Sửa”<br>4\. Hệ thống hiện popup sửa thông tin UV<br>5\. Người dùng điền lại thông tin chỉnh sửa, Bấm chọn “Lưu” <br>6\. Hệ thống định dạng thông tin, lưu thông tin chỉnh sửa vào CSDL<br>Sau 15 phút khi ứng viên được thêm mới sẽ không thể sửa và xoá ứng viên|||
|Luồng ngoại lệ:|6\.1\. Hệ thống thông báo Thông tin nhập sai và yêu cầu người dùng nhập lại|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-01: SĐT hoặc CCCD không được bỏ trống<br>BR\-02: SĐT phải đúng định dạng<br>BR\-06: Họ và tên không được quá 50 ký tự<br>BR\-08: Ngày cấp CCCD phải sau ngày sinh 15 năm<br>BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)<br>BR\-31: Sau 15 phút khi tạo ứng viên vòng 0 thì không được sửa và xoá của ứng viên|||
|Tin nhắn thông báo :|MSG01: *Cần nhập mục này\!*<br>MSG02: *Cần nhập số điện thoại\!*<br>MSG03: *CCCD chưa hợp lệ*<br>MSG11: *Cần nhập số điện thoại hoặc CCCD\!*<br>MSG12: *Số điện thoại hoặc CCCD chưa chính xác\!*<br>MSG55: *Sửa ứng viên thành công*|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần ứng viên vòng 0|Trợ lý trở lên cập nhật thông tin của ứng viên trong vòng 15 phút sau khi tạo|<br>|<br>|Validate||
|||Update|Hệ thống từ chối tạo tin đăng mới do người dùng nhập sai thông tin|<br>||Logging||

### Xoá ứng viên

*Đặc tả use case*

|Use case ID:|UC \- 13\.5\.4|Tên use case:|**Xoá ứng viên**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Chp phép người dùng sửa thông tin ứng viên và xoá ứng viên|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Ứng viên vòng 0"<br>2\. Hệ thống chuyển hướng đến "QL Ứng viên vòng 0"<br>3\. Người dùng bấm chọn  “\[\.\.\.\]”  \-\> Chọn “Xoá”<br>4\. Hệ thống hiện popup xác nhận xoá<br>4\.1\. Người dùng bấm chọn "Đồng ý" \-\> Hệ thống lưu vào CSDL<br>4\.2\. Người dùng bấm chọn "Huỷ" \-\> Quay lại màn hình danh sách<br>Sau 15 phút khi ứng viên được thêm mới sẽ không thể sửa và xoá ứng viên|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR31: Trợ lý trở lên xoá ứng viên vòng 0 trong vòng 15 phút sau khi tạo|||
|Tin nhắn thông báo :|MSG56: *Xoá ứng viên thành công*|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần xoá ứng viên vòng 0|Trợ lý trở lên xoá ứng viên vòng 0 trong vòng 15 phút sau khi tạo|<br>|<br>|Delete||

## Danh sách nhóm

Use case design

![Image](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=M2VhYzIxMTIxY2VhMzAyZDBlMTY0ODM1ODgwNjMzN2ZfYzVlZjc1MDllOGE4NTY4ZmExNDAwZjg3MzZlZTljMzdfSUQ6NzM3MzUzMzg2MzUwNDY0MjA3OV8xNzgwNjQ2ODg3OjE3ODA3MzMyODdfVjM)

### Thêm nhóm

*Đặc tả use case 13\.6\.1*

|Use case ID:|UC \- 13\.6\.1|Tên use case:|**Thêm nhóm**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng thêm mới nhóm|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng chọn nút “Thêm/Sửa/Xoá”<br>3\. Hệ thống chuyển đến tab Thêm/Sửa/Xoá<br>4\. Người dùng chọn "Thêm mới"<br>5\. Hệ thống hiển thị popup Thêm nhóm<br>6\. Người dùng nhập input vào các trường, bấm chọn “Lưu”<br>7\. Hệ thống lưu nhóm vừa thêm vào CSDL, hiển thị lên đầu danh sách|||
|Luồng ngoại lệ:|7\.1\. Hệ thống thông báo input chưa hợp lệ và yêu cầu người dùng nhập lại|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-41: Tên phòng, nhóm, chi nhánh không được quá 50 ký tự|||
|Tin nhắn thông báo :|MSG52: *Thêm thành công*|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần thêm nhóm|Trưởng phòng trở lên Tạo nhóm trong phòng|<br>|<br>|Validate||
|||Validate: Xảy ra khi người dùng nhập sai các trường thông tin|Hệ thống từ chối tạo nhóm mới do người dùng nhập sai thông tin<br>|||logging||

### Sửa nhóm

*Đặc tả use case 13\.6\.2*

|Use case ID:|UC \- 13\.6\.2|Tên use case:|**Sửa nhóm**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng sửa thông tin ứng viên và xoá nhóm|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng chọn “Thêm/Sửa/Xoá”<br>3\. Hệ thống chuyển đến tab Thêm/Sửa/Xoá<br>4\. Người dùng chọn "\.\.\."<br>5\. Hệ thống hiển thị form sửa nhóm<br>6\. Người dùng điều chỉnh input các trường, bấm chọn “Lưu”<br>7\. Hệ thống định dạng thông tin, lưu thông tin chỉnh sửa vào CSDL|||
|Luồng ngoại lệ:|7\.1\. Hệ thống thông báo input chưa hợp lệ và yêu cầu người dùng nhập lại|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-41: Tên phòng, nhóm, chi nhánh không được quá 50 ký tự|||
|Tin nhắn thông báo :|MSG57: *Cập nhật thành công*|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần sửa  nhóm|Trưởng phòng trở lên sửa nhóm trong phòng|<br>|<br>|Validate||

### Xoá nhóm

*Đặc tả use case 13\.6\.3*

|Use case ID:|UC \- 13\.6\.3|Tên use case:|**Xoá nhóm**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng sửa thông tin ứng viên và xoá nhóm|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng chọn nút “Thêm/Sửa/Xoá”<br>3\. Hệ thống chuyển đến tab Thêm/Sửa/Xoá<br>4\. Người dùng chọn "Thùng rác"<br>5\. Hệ thống hiển thị popup xác nhận xoá<br>5\.1\. Người dùng bấm chọn "Có" \-\> Hệ thống lưu vào CSDL<br>5\.2\. Người dùng bấm chọn "Không" \-\> Quay lại màn hình danh sách|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG22: *Xoá thành công*|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần xoá  nhóm|Trưởng phòng trở lên xoá nhóm trong phòng|<br>|<br>|Logging||

### Search nhóm

*Đặc tả use case 13\.6\.4*

|Use case ID:|UC \- 13\.6\.4|Tên use case:|**Search nhóm**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng xem Danh sách nhóm, tìm kiếm các nhóm |||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng nhập thông tin tìm kiếm vào searchbox<br>3\. Người dùng bấm chọn icon "Search", thực hiện tìm kiếm<br>4\. Hệ thống lọc thông tin theo từ khoá, hiển thị dánh sách báo cáo được tìm kiếm theo từ khoá nhập|||
|Luồng ngoại lệ:|4\.1\. Người dùng thực hiện chức năng tìm kiếm không thành công, thông tin tìm kiếm không đúng so với thông tin trên hệ thống |||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần tìm kiếm nhóm|Trưởng phòng trở lên tìm kiếm nhóm trong phòng|<br>|<br>|Search||
|||Search|Hệ thống lọc danh sách theo từ khoá|||||

## Danh sách thành viên nhóm

Use case design

### Sửa thông tin thành viên nhóm

*Đặc tả use case*

|Use case ID:|UC \- 13\.7\.1|Tên use case:|**Sửa thông tin TV nhóm**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng sửa thông tin thành viên nhóm|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng chọn nhóm bất kỳ<br>3\. Hệ thống hiển thị Quản lý nhân sự nhóm<br>4\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn “Xem/Sửa tài khoản”<br>5\. Hệ thống hiện popup sửa thông tin thành viên nhóm <br>6\. Người dùng điền lại thông tin chỉnh sửa, Bấm chọn “Lưu” <br>7\. Hệ thống định dạng thông tin, lưu thông tin chỉnh sửa vào CSDL|||
|Luồng ngoại lệ:|7\.1\. Hệ thống thông báo thông tin nhập sai và yêu cầu người dùng nhập lại|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-01: SĐT hoặc CCCD không được bỏ trống<br>BR\-02: SĐT phải đúng định dạng<br>BR\-06: Họ và tên không được quá 50 ký tự<br>BR\-08: Ngày cấp CCCD phải sau ngày sinh 15 năm<br>BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)|||
|Tin nhắn thông báo :|MSG01: *Cần nhập mục này\!*<br>MSG02: *Cần nhập số điện thoại\!*<br>MSG03: *CCCD chưa hợp lệ*<br>MSG11: *Cần nhập số điện thoại hoặc CCCD\!*<br>MSG12: *Số điện thoại hoặc CCCD chưa chính xác\! *|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần sửa thông tin thành viên nhóm|Trưởng phòng trở lên cần sửa thông tin thành viên nhóm|<br>|<br>|Validate||

### Sửa trạng thái thành viên nhóm

*Đặc tả use case*

|Use case ID:|UC \- 13\.7\.2|Tên use case:|**Sửa trạng thái TV nhóm**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng xem Danh sách nhóm, tìm kiếm các nhóm |||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng chọn nhóm bất kỳ<br>3\. Hệ thống hiển thị Quản lý nhân sự nhóm<br>4\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn "Tạm dừng \(Khoá TK\)/Dừng hợp tác"<br>5\. Hệ thống hiển thị popup Xác nhận<br>5\.1\. Người dùng bấm chọn "Đồng ý" \-\> Hệ thống lưu vào CSDL<br>5\.2\. Người dùng bấm chọn "Huỷ" \-\> Quay lại màn hình danh sách|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG62: Cập nhật trạng thái thành công\!|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần sửa trạng thái thành viên nhóm|Trưởng phòng trở lên cần sửa trạng thái thành viên nhóm|<br>|<br>|Update||

### Sửa chức danh thành viên nhóm

*Đặc tả use case*

|Use case ID:|UC \- 13\.7\.3|Tên use case:|**Sửa chức danh TV nhóm**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng xem Danh sách nhóm, tìm kiếm các nhóm |||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng chọn nhóm bất kỳ<br>3\. Hệ thống hiển thị Quản lý nhân sự nhóm<br>4\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn "Thay đổi chức danh"<br>5\. Hệ thống hiển thị form thay đổi chức danh<br>6\. Người dùng chọn chức danh, bấm "Lưu"<br>7\. Hệ thống định dạng thông tin, lưu thông tin đã sửa vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG28: *Cập nhật thông tin tài khoản thành công\!*|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần sửa thông tin thành viên nhóm|Trưởng phòng trở lên cần sửa chức danh thành viên nhóm|<br>|<br>|Update||

### Sửa nhóm của thành viên

*Đặc tả use case*

|Use case ID:|UC \- 13\.7\.4|Tên use case:|**Sửa nhóm của TV**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng xem Danh sách nhóm, tìm kiếm các nhóm |||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng chọn nhóm bất kỳ<br>3\. Hệ thống hiển thị Quản lý nhân sự nhóm<br>4\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn "Thay đổi nhóm"<br>5\. Hệ thống hiển thị form thay đổi nhóm<br>6\. Người dùng chọn nhóm, bấm "Lưu"<br>7\. Hệ thống định dạng thông tin, lưu thông tin đã sửa vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: *Cập nhật thành công*|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng cần sửa nhóm thành viên |Trưởng phòng trở lên cần sửa nhóm thành viên |<br>|<br>|Validate||

### Search thành viên nhóm

*Đặc tả use case*

|Use case ID:|UC \- 13\.7\.5|Tên use case:|**Search TV nhóm**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng xem Danh sách nhóm, tìm kiếm các nhóm |||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng chọn nhóm bất kỳ<br>3\. Hệ thống hiển thị Quản lý nhân sự nhóm<br>4\. Người dùng nhập thông tin tìm kiếm vào searchbox<br>5\. Người dùng bấm chọn icon "Search", thực hiện tìm kiếm<br>6\. Hệ thống hiển thị dánh sách báo cáo được tìm kiếm theo từ khoá nhập|||
|Luồng ngoại lệ:|6\.1\. Người dùng thực hiện chức năng tìm kiếm không thành công, thông tin tìm kiếm không đúng so với thông tin trên hệ thống |||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng tìm kiếm thông tin thành viên nhóm|Trưởng phòng trở lên tìm kiếm thành viên nhóm|<br>|<br>|Search||

### Filter thành viên nhóm

*Đặc tả use case*

|Use case ID:|UC \- 13\.7\.6|Tên use case:|**Filter TV nhóm**|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng xem Danh sách nhóm, tìm kiếm các nhóm |||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng chọn nhóm bất kỳ<br>3\. Hệ thống hiển thị Quản lý nhân sự nhóm<br>4\. Người dùng chọn input các bộ lọc<br>5\. Hệ thống trải xuống droplist các bộ lọc để chọn<br>6\. Người dùng chọn option theo mong muốn lọc <br>7\. Hệ thống hiển thị danh sách khách hàng lọc theo option đã chọn|||
|Luồng ngoại lệ:|7\.1\. Hệ thống không tìm thấy kết quả phù hợp với tiêu chí|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng lọc thông tin thành viên nhóm|Trưởng phòng trở lên lọc chức danh thành viên nhóm|<br>|<br>|Filter||

## Quản lý ứng viên Sales \(Không trong hiện trạng\)

Use case design

### Xem thông tin ứng viên

*Đặc tả use case*

|Use case ID:|UC \- 13\.8\.1|Tên use case:|Xem thông tin ứng viên|
|---|---|---|---|
|Tác giả:|Quỳnh Anh|Ngày:|12/07/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng sửa thông tin thành viên nhóm|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng chọn nhóm bất kỳ<br>3\. Hệ thống hiển thị Quản lý nhân sự nhóm<br>4\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn “Xem/Sửa tài khoản”<br>5\. Hệ thống hiện popup sửa thông tin thành viên nhóm <br>6\. Người dùng điền lại thông tin chỉnh sửa, Bấm chọn “Lưu” <br>7\. Hệ thống định dạng thông tin, lưu thông tin chỉnh sửa vào CSDL|||
|Luồng ngoại lệ:|7\.1\. Hệ thống thông báo thông tin nhập sai và yêu cầu người dùng nhập lại|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-01: SĐT hoặc CCCD không được bỏ trống<br>BR\-02: SĐT phải đúng định dạng<br>BR\-06: Họ và tên không được quá 50 ký tự<br>BR\-08: Ngày cấp CCCD phải sau ngày sinh 15 năm<br>BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)|||
|Tin nhắn thông báo :|MSG01: *Cần nhập mục này\!*<br>MSG02: *Cần nhập số điện thoại\!*<br>MSG03: *CCCD chưa hợp lệ*<br>MSG11: *Cần nhập số điện thoại hoặc CCCD\!*<br>MSG12: *Số điện thoại hoặc CCCD chưa chính xác\! *|||

*Activity diagram*

### Search ứng viên

*Đặc tả use case*

|Use case ID:|UC \- 13\.7\.1|Tên use case:|Search ứng viên|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng sửa thông tin thành viên nhóm|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng chọn nhóm bất kỳ<br>3\. Hệ thống hiển thị Quản lý nhân sự nhóm<br>4\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn “Xem/Sửa tài khoản”<br>5\. Hệ thống hiện popup sửa thông tin thành viên nhóm <br>6\. Người dùng điền lại thông tin chỉnh sửa, Bấm chọn “Lưu” <br>7\. Hệ thống định dạng thông tin, lưu thông tin chỉnh sửa vào CSDL|||
|Luồng ngoại lệ:|7\.1\. Hệ thống thông báo thông tin nhập sai và yêu cầu người dùng nhập lại|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-01: SĐT hoặc CCCD không được bỏ trống<br>BR\-02: SĐT phải đúng định dạng<br>BR\-06: Họ và tên không được quá 50 ký tự<br>BR\-08: Ngày cấp CCCD phải sau ngày sinh 15 năm<br>BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)|||
|Tin nhắn thông báo :|MSG01: *Cần nhập mục này\!*<br>MSG02: *Cần nhập số điện thoại\!*<br>MSG03: *CCCD chưa hợp lệ*<br>MSG11: *Cần nhập số điện thoại hoặc CCCD\!*<br>MSG12: *Số điện thoại hoặc CCCD chưa chính xác\! *|||

*Activity diagram*

### Xoá ứng viên

*Đặc tả use case*

|Use case ID:|UC \- 13\.7\.1|Tên use case:|Xoá ứng viên|
|---|---|---|---|
|Tác giả:|KhanhLinh|Ngày:|24/04/2024|
|Các tác nhân chính:|Trưởng phòng|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng sửa thông tin thành viên nhóm|||
|Điều kiện trước:|Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm|||
|Luồng chính:|1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng chọn nhóm bất kỳ<br>3\. Hệ thống hiển thị Quản lý nhân sự nhóm<br>4\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn “Xem/Sửa tài khoản”<br>5\. Hệ thống hiện popup sửa thông tin thành viên nhóm <br>6\. Người dùng điền lại thông tin chỉnh sửa, Bấm chọn “Lưu” <br>7\. Hệ thống định dạng thông tin, lưu thông tin chỉnh sửa vào CSDL|||
|Luồng ngoại lệ:|7\.1\. Hệ thống thông báo thông tin nhập sai và yêu cầu người dùng nhập lại|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-01: SĐT hoặc CCCD không được bỏ trống<br>BR\-02: SĐT phải đúng định dạng<br>BR\-06: Họ và tên không được quá 50 ký tự<br>BR\-08: Ngày cấp CCCD phải sau ngày sinh 15 năm<br>BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)|||
|Tin nhắn thông báo :|MSG01: *Cần nhập mục này\!*<br>MSG02: *Cần nhập số điện thoại\!*<br>MSG03: *CCCD chưa hợp lệ*<br>MSG11: *Cần nhập số điện thoại hoặc CCCD\!*<br>MSG12: *Số điện thoại hoặc CCCD chưa chính xác\! *|||

*Activity diagram*

## Quản lý dự án phân phối \(Không trong hiện trạng\)

Use case design

# 

# [4 \- SRS Khonhapho website \- Trang quản trị](https://v4cueke6gq8.sg.larksuite.com/wiki/UDyLw1jlsiOkBbkOUhNl0q2KgTc)



