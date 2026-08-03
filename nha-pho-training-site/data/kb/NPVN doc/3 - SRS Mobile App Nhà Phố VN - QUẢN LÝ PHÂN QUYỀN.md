# 3 \- SRS Mobile App Nhà Phố VN \- QUẢN LÝ PHÂN QUYỀN

# [SRS Mobile App Nhà Phố VN \- 2](https://v4cueke6gq8.sg.larksuite.com/wiki/YQnfwSl40io6PHkDP6IlSfzQgRb)

# **III\. Quản lý phòng/nhóm**

## Mã giới thiệu

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Thêm mới|Button|||Bấm để thêm mã giới thiệu mới|
|2|Icon copy|Button|||Copy mã giới thiệu|
|3|Icon chat|Button|||Bấm để chuyển sang màn hình chat|
|4|Icon \[\<\]|Button|||Bấm để trở lại trang trước|

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.1\.1**|**Use Case Name**||**Tạo mã giới thiệu**|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực||||
|**Description**||Cho phép user xem danh sách các mã giới thiệu, thêm mới mã giới thiệu để tham gia vào nhóm||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "Mã giới thiệu"<br>2\. Hệ thống chuyển hướng đến "Mã giới thiệu"<br>3\. Người dùng chọn nút “Thêm mới”<br>4\. Hệ thống hiển thị popup Thêm mới mã giới thiệu<br>5\. Người dùng chọn nhóm thêm mã giới thiệu, Bấm chọn "Tạo mã"<br>6\. Hệ thống lưu Mã giới thiệu vừa thêm vào CSDL, hiển thị lên đầu danh sách||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||MSG38: Thêm mã giới thiệu thành công\!||||



*Activity diagram*



## Quản lý thành viên phòng/nhóm

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Icon lọc|Button|||Bấm để chuyển đến trang lọc thành viên|
|2|Đang hợp tác|Button|||Bấm để xem thành viên đang hợp tác|
|3|Sắp hết hạn|Button|||Bấm để xem thành viên sắp hết hạn|
|4|Đã Khoá|Button|||Bấm để xem thành viên đã khoá|
|5|Icon chat|Button|||Bấm để chuyển đến trang chat|
|6|\[X\]|Button|||Bấm để đóng trang tìm kiếm|
|7|Icon mắt|Button|||Bấm để ẩn/hiện CCCD|
|8|\[\.\.\.\]|Dropdownlist|||Bấm để chuyển đến trang cá nhân thành viên<br>hiển thị các lựa chọn|
|9|Icon \[\<\]|Button|||Bấm để quay lại trang trước|

### Search thành viên

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2|Thanh search|Textbox|||Bấm để nhập nội dung cần tìm|
|3|Icon Search|Button|||Bấm để tìm kiếm thông tin|

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.2\.1**|**Use Case Name**||Search Thành viên|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực, Trợ lý, Phó phòng||||
|**Description**||Cho phép người dùng tìm kiếm và xem Danh sách thành viên nhóm||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Thành viên"<br>2\. Hệ thống chuyển hướng đến "QL Thành viên"<br>3\. Người dùng nhập thông tin tìm kiếm vào searchbox<br>4\. Người dùng bấm chọn icon "Search” , thực hiện tìm kiếm<br>5\. Hệ thống lọc thông tin theo từ khoá, hiển thị danh sách báo cáo được tìm kiếm theo từ khoá nhập||||
|**Exception Flows**||5\.1 Người dùng thực hiện chức năng tìm kiếm không thành công, thông tin tìm kiếm không đúng so với thông tin trên hệ thống||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||



*Activity diagram*



### Filter thành viên

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Chức danh|Dropdownlist|||Bấm để chọn chức danh|
|2|Nhóm|Dropdownlist|||Bấm để chọn nhóm|
|3|Đặt lại|Button|||Bấm để đặt lại thông tin|
|4|Lọc|Button|||Bấm để lọc thông tin |
|5|\[X\]|Button|||Bấm để đóng trang tìm kiếm|
|6|Nhập thông tin tìm kiếm|Textbox|||Bấm để nhập thông tin tìm kiếm|

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.2\.2**|**Use Case Name**||Filter Thành viên|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực, Trợ lý, Phó phòng||||
|**Description**||Cho phép người dùng lọc tìm các thành viên nhóm theo bộ lọc||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Thành viên"<br>2\. Hệ thống chuyển hướng đến "QL Thành viên"<br>3\. Người dùng chọn input các bộ lọc<br>4\. Hệ thống trải xuống droplist các bộ lọc để chọn<br>5\. Người dùng chọn option theo mong muốn lọc<br>6\. Hệ thống lọc thông tin theo tiêu chí ở từ khoá, hiển thị danh sách thành viên nhóm lọc theo option đã chọn||||
|**Exception Flows**||6\.1 Hệ thống không tìm thấy kết quả phù hợp với tiêu chí||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||



*Activity diagram*



### Sửa thông tin thành viên

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Tên hiển thị|Textbox|Có|varchar\(50\)|Bấm để sửa tên hiển thị|
|2|Họ tên|Textbox|Có|varchar\(50\)|Bấm để sửa họ tên|
|3|Ngày sinh|Datetimepicker|Có||Bấm để sửa ngày sinh<br>|
|4|Số điện thoại|Textbox|Có|int|Bấm để sửa SĐT|
|5|SĐT người thân|Textbox|Có|int|Bấm để sửa SĐT người thân|
|6|Email|varchar|Có||Bấm để sửa email|
|7|CCCD|Textbox|Có|int\(12\)|Bấm để sửa CCCD|
|8|Ngày cấp|Datetimepicker|Có||Bấm để sửa ngày cấp|
|9|Địa chỉ|Textbox|Có|varchar\(100\)|Bấm để sửa địa chỉ|
|10|Địa chỉ thường trú|Textbox|Có|varchar\(100\)|Bấm để sửa địa chỉ thường trú|
|11|Lưu|Button|Có||Bấm để lưu thông tin sửa|
|12|Trạng thái|Button|Có||Bấm để chọn trạng thái |
|13|\[X\]|Button|||Bấm để đóng trang |

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.2\.3**|**Use Case Name**||Sửa thông tin Thành viên|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực||||
|**Description**||Cho phép người dùng sửa thông tin thành viên nhóm||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Thành viên"<br>2\. Hệ thống chuyển hướng đến "QL Thành viên"<br>3\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn “Xem/Sửa tài khoản”<br>4\. Hệ thống hiện popup sửa thông tin thành viên nhóm<br>5\. Người dùng điền lại thông tin chỉnh sửa, Bấm chọn “Lưu”<br>6\. Hệ thống định dạng thông tin, lưu thông tin chỉnh sửa vào CSDL||||
|**Exception Flows**||6\.1\. Hệ thống thông báo Thông tin nhập sai và yêu cầu người dùng nhập lại||||
|**Business Rules**||BR\-01: SĐT hoặc CCCD không được bỏ trống<br>BR\-02: SĐT phải đúng định dạng<br>BR\-03:Địa chỉ thường trú và nơi ở hiện tại không quá 100 ký tự<br>BR\-06: Họ và tên không được quá 50 ký tự<br>BR\-07: Email phải đúng định dạng<br>BR\-08: Ngày cấp CCCD phải sau ngày sinh 15 năm<br>BR\-09: SĐT người thân không được trùng với SĐT đăng ký<br>BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)||||
|**Application Messages**||MSG01: Cần nhập số điện thoại hoặc CCCD\!<br>MSG03: Số điện thoại hoặc CCCD chưa chính xác\!<br>MSG10: SĐT người thân không được trùng với SĐT đã đăng ký<br>MSG11: Số điện thoại chưa hợp lệ\!<br>MSG\-12: Nội dung không quá dài\!<br>MSG\-13: Ngày cấp CCCD không hợp lệ\!<br>MSG\-14: Ngày sinh không hợp lệ<br>MSG\-15: Email chưa đúng định dạng\.<br>MSG\-17: Bạn cần điền thông tin này\.||||



*Activity diagram*

### Cập nhật trạng thái tài khoản thành viên

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Huỷ|Button|||Bấm để xác nhận huỷ|
|2|Đồng ý|Button|||Bấm để xác nhận đồng ý|
|3|\[X\]|Button|||Bấm để đóng trang |

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.2\.4**|**Use Case Name**||Sửa trạng thái Thành viên|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực||||
|**Description**||Cho phép người dùng sửa trạng thái thành viên nhóm||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Thành viên"<br>2\. Hệ thống chuyển hướng đến "QL Thành viên"<br>3\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn "Tạm dừng \(Khoá TK\)/Dừng hợp tác"<br>4\. Hệ thống hiển thị popup Xác nhận<br>4\.1\. Người dùng bấm chọn "Đồng ý" \-\> Hệ thống lưu vào CSDL<br>4\.2\. Người dùng bấm chọn "Huỷ" \-\> Quay lại màn hình danh sách||||
|**Extension Flows**||Đối với UV, HV, CV khi HSD tài khoản = 0 thì hệ thống sẽ tự động khoá tài khoản<br>Khi tài khoản có HSD \<7 ngày thì sẽ hiển thị nút \[Gia hạn\]<br>Truy cập vào Tab Đã khoá để mở khoá tài khoản thành viên||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||MSG\-24: Xoá thành công\.||||



*Activity diagram*

### Sửa chức danh thành viên \(Note: Sẽ thay đổi\)

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Thay đổi chức danh|Dropdownlist|||Bấm để lựa chọn chức danh|
|2|Lưu|Button|||Bấm để lưu thông tin|
|3|\[X\]|Button|||Bấm để đóng trang |

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.2\.5**|**Use Case Name**||Sửa chức danh Thành viên|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực, Trợ lý, Phó phòng||||
|**Description**||Cho phép người dùng sửa đổi chức danh của thành viên||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Thành viên"<br>2\. Hệ thống chuyển hướng đến "QL Thành viên"<br>3\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn “Thay đổi chức danh”<br>4\. Hệ thống hiển thị form điền thay đổi chức danh<br>5\. Người dùng chọn chức danh muốn thay đổi, Bấm chọn “Lưu”||||
|**Exception Flows**||5\.1 Nếu từ khóa nhập sai thì không hiển thị||||
|**Business Rules**||||||
|**Application Messages**||MSG\-40: Cập nhật chức danh mới thành công\!||||



*Activity diagram*

### Khoá đăng tin ĐC \(Ver 2\.2 \- Chưa mô tả\)

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|||||||
|||||||
|||||||
|||||||

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.2\.6**|**Use Case Name**|||
|---|---|---|---|---|---|
|**Author**|||**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực||||
|**Description**||||||
|**Pre\-Condition**||||||
|**Main Flows**||||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

*Activity diagram*

### Sửa nhóm thành viên

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Thay đổi nhóm|Dropdownlist|||Bấm để chọn nhóm|
|2|Đặt làm trưởng phòng|Checkbox|||Bấm để đặt làm trưởng phòng|
|3|Lưu|Button|||Bấm đểt lưu thông tin|
|4|\[X\]|Button|||Bấm để đóng trang |

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.2\.6**|**Use Case Name**||Sửa nhóm Thành viên|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực||||
|**Description**||Cho phép người dùng sửa nhóm của thành viên||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Thành viên"<br>2\. Hệ thống chuyển hướng đến "QL Thành viên"<br>3\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn “Thay đổi nhóm”<br>4\. Hệ thống hiện popup Thay đổi nhóm<br>5\. Người dùng chọn option muốn thay đổi, chọn “Lưu”<br>6\. Hệ thống lưu thông tin chỉnh sửa vào CSDL||||
|**Extension Flows**||3\.1 Tích vào checkbox để set trưởng nhóm cho người dùng||||
|**Exception Flows**||3\.1\.1 Tích vào checkbox để set trưởng nhóm cho người dùng nhưng nhóm được chọn đã có trưởng nhóm trước đấy<br>3\.1\.2 Hệ thống thông báo nhóm đã có trưởng nhóm||||
|**Business Rules**||- Nhóm đã có trưởng nhóm không thể set thêm trưởng nhóm \(1 nhóm không thể có 2 trưởng nhóm\)||||
|**Application Messages**||MSG\-41: Cập nhật thông tin tài khoản thành công\!||||



*Activity diagram*

### Giới hạn xem kho tài nguyên HV, CV \(Ver 2\.2\)

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Thay đổi nhóm|Dropdownlist|||Bấm để chọn nhóm|
|2|Đặt làm trưởng phòng|Checkbox|||Bấm để đặt làm trưởng phòng|
|3|Lưu|Button|||Bấm đểt lưu thông tin|
|4|\[X\]|Button|||Bấm để đóng trang |

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.2\.7**|**Use Case Name**||Giới hạn xem kho tài nguyên HV, CV |
|---|---|---|---|---|---|
|**Author**||Nam|**Date**||**29/11/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh||||
|**Description**||Cho phép người dùng cập nhật quyền xem kho hàng đối với HV, CV||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm \- Quản lý thành viên||||
|**Main Flows**||1. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL thành viên"<br>2. Hệ thống chuyển hướng đến "QL thành viên"<br>3. Người dùng bấm vào tuỳ chọn mở rộng của thành viên bất kỳ<br>4. Hệ thống hiển thị danh sách tuỳ chọn<br>5. Người dùng chọn giới hạn xem Kho tài nguyên<br>6. Hệ thống hiển thị form giới hạn<br>7. Người dùng chọn khoảng giá, khu vực và bấm Lưu<br>8. Hệ thống cập nhật CSDL, ghi đè lên policy cơ bản xem kho theo chức danh||||
|**Exception Flows**||7\.1 Người dùng không có quyền Cập nhật giới hạn xem kho của HV, CV||||
|**Business Rules**||Trưởng phòng có thể sửa giới hạn xem khoảng giá của kho tài nguyên đối với HV, CV trong phòng\. Quyền sẽ ghi đè lên Policy cơ bản\. Đối với HV được xem kho hàng dưới 35 tỷ nhưng trưởng phòng set quyền xem 40 tỷ thì hệ thống vẫn chỉ cho xem kho hàng dưới 35 tỷ, không được vượt quá quyền cơ bản của policy, nhưng nếu set dưới 9 tỷ thì quyền sẽ ghi đè lên policy và HV đấy chỉ được xem kho hàng dưới 9 tỷ||||
|**Application Messages**||MSG\-41: Cập nhật thông tin tài khoản thành công\!||||

***Diagram***

## Thống kê hiệu suất công việc \(Ver 2\.3 \- Chưa mô tả\)

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Lọc và tìm kiếm|Button|||Bấm để chuyến hướng đến trang lọc hoặc tìm kiếm thành viên trong phòng|
|2|Thời gian|Datepicker|||Bấm để chọn mốc thời gian muốn xem thống kê|
|3|Nguồn hàng đang có|Link button|||Bấm để chuyến hướng sang trang nguồn hàng của đầu chủ|
|4|Số lượng dẫn khách |Link Button|||Bấm để chuyển hướng sang trang thống kê danh sách báo cáo dãn khách của đầu chủ|
|5|Giỏ khách hàng|Link button|||Bấm để chuyển hướng sang trang danh sách khách hàng|
|6|BĐS đã chốt|Link button|||Bấm để chuyển hướng sang trang danh sách bđs đã chốt|
|7|Khảo sát nhà|Link button|||Bấm để chuyển hướng sang trang danh sách bđs đã khảo sát|
|8|Lọc và tìm kiếm |Button|||Bấm để chuyến hướng đến trang lọc hoặc tìm kiếm hàng |
|9|Sắp xếp|Dropdown|||Bấm để chọn cách sắp xếp mong muốn|
|10|Lọc và tìm kiếm|Button|||Bấm để chuyển hướng sang trang danh sách báo cáo của đầu chủ|
|11|Lọc và tìm kiếm|Button|||Bấm để chuyển hướng sang trang danh sách khách hàng của đầu chủ|



## Quản lý khách của CV

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Icon lọc|Button|||Bấm để chuyển đến trang lọc thành viên|
|2|Cần mua gấp|Button|||Bấm để xem thành viên đang hợp tác|
|3|Mua hụt nhà|Button|||Bấm để xem thành viên sắp hết hạn|
|4|Hiển thị trường|Button|||Bấm để xem thành viên đã khoá|
|5|Icon chat|Button|||Bấm để chuyển đến trang chat|
|6|\[X\]|Button|||Bấm để đóng trang tìm kiếm|
|7|Icon xem|Button|||Bấm để xem chi tiết thông tin khách hàng|
|8|\[\.\.\.\]|Dropdownlist|||Bấm để chuyển đến trang cá nhân thành viên<br>hiển thị các lựa chọn|
|9|Icon \[\<\]|Button|||Bấm để quay lại trang trước|
|10|Icon Search|Button|||Bấm để chuyển đến trang tìm kiếm thành viên|
|11|Ngày tạo mới nhất|Dropdownlist|||Bấm để lựa chọn bộ lọc theo ngày tạo|

### Filter danh sách khách 

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Chức danh|Dropdownlist|||Bấm để chọn chức danh|
|2|Nhóm|Dropdownlist|||Bấm để chọn nhóm|
|3|Đặt lại|Button|||Bấm để đặt lại thông tin|
|4|Lọc|Button|||Bấm để lọc thông tin |
|5|\[X\]|Button|||Bấm để đóng trang tìm kiếm|
|6|Nhập thông tin tìm kiếm|Textbox|||Bấm để nhập thông tin tìm kiếm|

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.3\.1**|**Use Case Name**||**Filter danh sách khách **|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực, Trợ lý, Phó phòng||||
|**Description**||Cho phép người dùng lọc khách hàng theo các bộ lọc ||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL khách của CV"<br>2\. Hệ thống chuyển hướng đến "QL khách của CV"<br>3\. Người dùng chọn input các bộ lọc<br>4\. Hệ thống trải xuống droplist các bộ lọc để chọn<br>5\. Người dùng chọn option theo mong muốn lọc <br>6\. Hệ thống hiển thị danh sách khách hàng lọc theo option đã chọn||||
|**Exception Flows**||4\.1 Hệ thống không tìm thấy kết quả phù hợp với tiêu chí||||
|**Business Rules**||||||
|**Application Messages**||||||



*Activity diagram*



### Search danh sách khách 

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2|Thanh search|Textbox|||Bấm để nhập nội dung cần tìm|
|3|Icon Search|Button|||Bấm để tìm kiếm thông tin|

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.3\.2**|**Use Case Name**||**Search danh sách khách **|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực, Trợ lý, Phó phòng||||
|**Description**||Cho phép người dùng tìm kiếm khách hàng theo thông tin tìm kiếm||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL khách của CV"<br>2\. Hệ thống chuyển hướng đến "QL khách của CV"<br>3\. Người dùng nhập thông tin tìm kiếm vào searchbox<br>4\. Người dùng bấm chọn icon “Search” , thực hiện tìm kiếm<br>5\. Hệ thống lọc thông tin theo từ khoá, hiển thị thông tin khách hàng được tìm kiếm ||||
|**Exception Flows**||Người dùng thực hiện chức năng tìm kiếm không thành công, thông tin tìm kiếm không đúng so với thông tin trên hệ thống ||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||



*Activity diagram*

### Xem chi tiết khách 

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Nguồn khách|Textbutton|||Bấm để xem thông tin nguồn khách|
|2|Icon zalo|Button|||Bấm để di chuyển sang ứng dụng zalo|
|3|Icon \[\<\]|Button|||Bấm để quay lại trang trước|
|4|Icon Messenger|Button|||Bấm để di chuyển sang ứng dụng messenger|
|5|Icon tin nhắn|Button|||Bấm để di chuyển sang ứng dụng tin nhắn|

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.3\.3**|**Use Case Name**||**Xem chi tiết khách**|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực, Trợ lý, Phó phòng||||
|**Description**||Cho phép người dùng xem thông tin khách hàng||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL khách của CV"<br>2\. Hệ thống chuyển hướng đến "QL khách của CV"<br>3\. Người dùng chọn icon “\[\.\.\.\]” tại phần khách hàng muốn xem thông tin<br>4\. Hệ thống hiển thị popup thông tin chi tiết về khách hàng chọn xem||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||



*Activity diagram*

## Quản lý Báo cáo của CV

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Nhập tên thành viên|Dropdownlist|||Bấm để tìm kiếm tên thành viên|
|2|Icon tìm kiếm|Button|||Bấm để tìm kiếm nội dung|
|3|Icon \[\<\]|Button|||Bấm để quay lại trang trước|
|4|Icon chat|Button|||Bấm để chuyển đến trang chat|
|5|Icon Xem|Button|||Bấm để xem chi tiết báo cáo CV|

### Search tên chuyên viên

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Nhập tên thành viên|Dropdownlist|||Bấm để tìm kiếm tên thành viên|
|2|Icon tìm kiếm|Button|||Bấm để tìm kiếm nội dung|
|3|Icon \[\<\]|Button|||Bấm để quay lại trang trước|
|4|Icon chat|Button|||Bấm để chuyển đến trang chat|
|5|Icon Xem|Button|||Bấm để xem chi tiết báo cáo CV|

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.4\.1**|**Use Case Name**||**Search tên chuyên viên**|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực||||
|**Description**||Cho phép người dùng xem, tìm kiếm các báo cáo của chuyên viên theo tên của chuyên viên||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Báo cáo của CV"<br>2\. Hệ thống chuyển hướng đến "QL Báo cáo của CV"<br>3\. Người dùng nhập thông tin tìm kiếm vào searchbox<br>4\. Người dùng bấm chọn icon "Search” , thực hiện tìm kiếm<br>5\. Hệ thống lọc thông tin theo từ khoá, hiển thị danh sách báo cáo được tìm kiếm theo từ khoá nhập||||
|**Exception Flows**||5\.1 Người dùng thực hiện chức năng tìm kiếm không thành công, thông tin tìm kiếm không đúng so với thông tin trên hệ thống ||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||



*Activity diagram*

### Search nội dung

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2|Thanh search|Textbox|||Bấm để nhập nội dung cần tìm|
|3|Icon Search|Button|||Bấm để tìm kiếm thông tin|

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.4\.2**|**Use Case Name**||**Search nội dung**|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực||||
|**Description**||Cho phép người dùng xem, tìm kiếm các báo cáo của chuyên viên theo nội dung báo cáo ||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Báo cáo của CV"<br>2\. Hệ thống chuyển hướng đến "QL Báo cáo của CV"<br>3\. Người dùng nhập thông tin tìm kiếm vào searchbox<br>4\. Người dùng bấm chọn icon “Search” , thực hiện tìm kiếm<br>5\. Hệ thống lọc thông tin theo từ khoá, hiển thị danh sách báo cáo được tìm kiếm theo từ khoá nhập||||
|**Exception Flows**||5\.1 Người dùng thực hiện chức năng tìm kiếm không thành công, thông tin tìm kiếm không đúng so với thông tin trên hệ thống ||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||



*Activity diagram*

### Xem chi tiết báo cáo

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Họ tên đầu khách|Textbutton|||Bấm để xem thông tin đầu khách|
|2|Icon zalo|Button|||Bấm để di chuyển sang ứng dụng zalo|
|3|Icon \[\<\]|Button|||Bấm để quay lại trang trước|
|4|Icon Messenger|Button|||Bấm để di chuyển sang ứng dụng messenger|

*Đặc tả use case *

|**Use Case ID**||**UC \- 13\.4\.3**|**Use Case Name**||**Xem chi tiết báo cáo**|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực||||
|**Description**||Cho phép người dùng xem chi tiết báo cáo của chuyên viên||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Báo cáo của CV"<br>2\. Hệ thống chuyển hướng đến "QL Báo cáo của CV"<br>3\. Người dùng chọn icon “\[\.\.\.\]” tại phần báo cáo muốn xem thông tin<br>4\. Hệ thống hiển thị popup thông tin chi tiết về báo cáo đã chọn xem||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||



*Activity diagram*

## Quản lý Ứng viên vòng 0 

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Thêm mới|Button|||Bấm để thêm mới ứng viên|
|2|Icon \[\<\]|Button|||Bấm để trở về trang trước|
|3|Icon chat|Button|||Bấm để chuyển qua màn hình chat|
|4|Icon search|Button|||Bấm để tìm kiếm ứng viên|
|5|Icon \[\.\.\.\]|Dropdownlist|||Bấm để lựa chọn tương tác|

### Thêm ứng viên

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Thêm |Button|||Bấm để thêm mới ứng viên|
|2|Họ tên ứng viên|Textbox||varchar\(50\)|Bấm để nhập họ tên|
|3|Ngày sinh|Datetimepicker|||Bấm để thêm ngày sinh|
|4|SĐT|Textbox||int\(10\)|Bấm để thêm SĐT|
|5|CCCD ứng viên|Textbox||int\(12\)|Bấm để thêm CCCD|
|6<br>|Thời gian phỏng vấn|Datetimepicker|||Bấm để thêm thời gian phỏng vấn|
|7|Ảnh phỏng vấn|File upload||img\(2\)|Bấm để thêm ảnh |
|8|\[\<\]|Button|||Bấm để trở lại trang trước|

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.5\.1**|**Use Case Name**||**Thêm ứng viên**|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực, Trợ lý||||
|**Description**||Cho phép người dùng thêm mới ứng viên vòng 0||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Ứng viên vòng 0"<br>2\. Hệ thống chuyển hướng đến "QL Ứng viên vòng 0"<br>3\. Người dùng chọn nút “Thêm mới”<br>4\. Người dùng nhập input vào các trường, bấm chọn “Thêm”<br>5\. Hệ thống lưu UV vừa thêm vào CSDL, hiển thị lên đầu danh sách||||
|**Exception Flows**||Hệ thống thông báo input chưa hợp lệ và yêu cầu người dùng nhập lại||||
|**Business Rules**||BR\-01: SĐT hoặc CCCD không được bỏ trống<br>BR\-02: SĐT phải đúng định dạng<br>BR\-06: Họ và tên không được quá 50 ký tự<br>BR\-08: Ngày cấp CCCD phải sau ngày sinh 15 năm<br>BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)<br>BR\-44: Giới hạn ảnh upload là 5mb||||
|**Application Messages**||MSG03: Số điện thoại hoặc CCCD chưa chính xác\!<br>MSG11: Số điện thoại chưa hợp lệ\!<br>MSG\-17: Bạn cần điền thông tin này\.<br>MSG54: *Thêm ứng viên thành công*||||



*Activity diagram*

### Search ứng viên

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Nội dung tìm kiếm|Textbox|||Bấm để nhập nội dung tìm kiếm|
|2|Icon tìm kiếm|Button|||Bấm để tìm kiếm thông tin|
|3|Icon \[\<\]|Button|||Bấm để trở lại trang trước|

*Đặc tả use case *

|**Use Case ID**||**UC \- 13\.5\.2**|**Use Case Name**||**Search ứng viên**|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực, Trợ lý||||
|**Description**||Cho phép người dùng xem Danh sách ứng viên vòng 0, tìm kiếm các ứng viên ||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Ứng viên vòng 0"<br>2\. Hệ thống chuyển hướng đến "QL Ứng viên vòng 0"<br>3\. Người dùng nhập thông tin tìm kiếm vào searchbox<br>4\. Người dùng bấm chọn icon "Search” , thực hiện tìm kiếm<br>5\. Hệ thống lọc thông tin theo từ khoá, hiển thị dánh sách báo cáo được tìm kiếm theo từ khoá nhập||||
|**Exception Flows**||5\.1 Người dùng thực hiện chức năng tìm kiếm không thành công, thông tin tìm kiếm không đúng so với thông tin trên hệ thống ||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||



*Activity diagram*

### Sửa ứng viên

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Lưu|Button|||Bấm để lưu thông tin ứng viên|
|2|Họ tên ứng viên|Textbox||varchar\(50\)|Bấm để sửa họ tên ứng viên|
|3|Ngày sinh|Datetimepicker|||Bấm để sửa ngày sinh|
|4|SĐT|Textbox||int\(9\)|Bấm để sửa SĐT|
|5|CCCD ứng viên|Textbox||int\(12\)|Bấm để sửa CCCD|
|6<br>|Thời gian phỏng vấn|Datetimepicker|||Bấm để sửa thời gian phỏng vấn|
|7|Ảnh phỏng vấn|File upload||img\(2\)|Bấm để chọn ảnh |
|8|\[\<\]|Button|||Bấm để trở lại trang trước|

*Đặc tả use case *

|**Use Case ID**||**UC \- 13\.5\.3**|**Use Case Name**||**Sửa ứng viên**|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực, Trợ lý||||
|**Description**||Cho phép người dùng sửa thông tin ứng viên và xoá ứng viên||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Ứng viên vòng 0"<br>2\. Hệ thống chuyển hướng đến "QL Ứng viên vòng 0"<br>3\. Người dùng bấm chọn “\[\.\.\.\]” \-\> Chọn “Sửa”<br>4\. Hệ thống hiện popup sửa thông tin UV<br>5\. Người dùng điền lại thông tin chỉnh sửa, Bấm chọn “Lưu” <br>6\. Hệ thống định dạng thông tin, lưu thông tin chỉnh sửa vào CSDL<br>Sau 15 phút khi ứng viên được thêm mới sẽ không thể sửa và xoá ứng viên||||
|**Exception Flows**||6\.1\. Hệ thống thông báo Thông tin nhập sai và yêu cầu người dùng nhập lại||||
|**Business Rules**||BR\-01: SĐT hoặc CCCD không được bỏ trống<br>BR\-02: SĐT phải đúng định dạng<br>BR\-06: Họ và tên không được quá 50 ký tự<br>BR\-08: Ngày cấp CCCD phải sau ngày sinh 15 năm<br>BR\-14: Ngày sinh giới hạn trong khoảng 1900 \- \(Năm hiện tại \- 16\)<br>Sau 15 phút không được sửa thông tin ứng viên||||
|**Application Messages**||MSG03: Số điện thoại hoặc CCCD chưa chính xác\!<br>MSG11: Số điện thoại chưa hợp lệ\!<br>MSG\-17: Bạn cần điền thông tin này\.<br>MSG43: Cập nhật ứng viên thành công\!||||



*Activity diagram*

### Xoá ứng viên

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Huỷ|Button|||Bấm để huỷ xoá ứng viên|
|2|Đồng ý|Button|||Bấm để đồng ý xoá ứng viên|
|3|Xoá|Button|||Bấm để xoá ứng viên|

*Đặc tả use case*

|**Use Case ID**||**UC \- 13\.5\.4**|**Use Case Name**||**Xoá ứng viên**|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||User||||
|**Description**||Chp phép người dùng sửa thông tin ứng viên và xoá ứng viên||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Ứng viên vòng 0"<br>2\. Hệ thống chuyển hướng đến "QL Ứng viên vòng 0"<br>3\. Người dùng bấm chọn  “\[\.\.\.\]”  \-\> Chọn “Xoá”<br>4\. Hệ thống hiện popup xác nhận xoá<br>4\.1\. Người dùng bấm chọn "Đồng ý" \-\> Hệ thống lưu vào CSDL<br>4\.2\. Người dùng bấm chọn "Huỷ" \-\> Quay lại màn hình danh sách<br>Sau 15 phút khi ứng viên được thêm mới sẽ không thể sửa và xoá ứng viên||||
|**Exception Flows**||||||
|**Business Rules**||Sau 15 phút không được xoá ứng viên||||
|**Application Messages**||MSG\-24: Xoá thành công\.||||

*Activity diagram*

## Danh sách nhóm \(Ver 2\.1 sửa lại dữ liệu cột\)

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Thêm mới|Button|||Bấm để thêm mới nhóm|
|2|Icon \[\<\]|Button|||Bấm để trở về trang trước|
|3|Icon chat|Button|||Bấm để chuyển qua màn hình chat|
|4|Icon search|Button|||Bấm để tìm kiếm nhóm|
|5|Icon chỉnh sửa|Button|||Bấm để chuyển qua trang chỉnh sửa nhóm|
|6<br>|Icon xoá|Button|||Bấm để xoá nhóm|

### Thêm nhóm \(Modify\)

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Tên nhóm|Textbox||varchar\(50\)|Bấm để nhập tên nhóm|
|2|Mô tả|Textbox||varchar\(200\)|Bấm để nhập mô tả|
|3|Phòng ban|Dropdownlist|||Bấm để chọn phòng ban|
|4|Lưu|Button|||Bấm để lưu thông tin|
|5|\[X\]|Button|||Bấm để đóng trang|

*Đặc tả use case *

|**Use Case ID**||**UC \- 13\.6\.1**|**Use Case Name**||**Thêm nhóm**|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng,PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực||||
|**Description**||Cho phép người dùng thêm mới nhóm||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng chọn nút “Thêm/Sửa/Xoá”<br>3\. Hệ thống chuyển đến tab Thêm/Sửa/Xoá<br>4\. Người dùng chọn "Thêm mới"<br>5\. Hệ thống hiển thị popup Thêm nhóm<br>6\. Người dùng nhập input vào các trường, bấm chọn “Lưu”<br>7\. Hệ thống lưu nhóm vừa thêm vào CSDL, hiển thị lên đầu danh sách||||
|**Exception Flows**||7\.1\. Hệ thống thông báo input chưa hợp lệ và yêu cầu người dùng nhập lại||||
|**Business Rules**||BR\-40: Tên phòng, nhóm, chi nhánh không được quá 50 ký tự<br>Thay đổi tối đa 10 nhóm lên 50 nhóm \(Ver 1\.1\)||||
|**Application Messages**||MSG\-28: Thêm mới thành công\!||||



*Activity diagram*

### Sửa nhóm

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Tên nhóm|Textbox||varchar\(50\)|Bấm để sửa tên nhóm|
|2|Mô tả|Textbox||varchar\(200\)|Bấm để sửa mô tả|
|3|Phòng ban|Dropdownlist|||Bấm để chọn phòng ban|
|4|Lưu|Button|||Bấm để lưu thông tin|
|5|\[X\]|Button|||Bấm để đóng trang|

*Đặc tả use case *

|**Use Case ID**||**UC \- 13\.6\.2**|**Use Case Name**||**Sửa nhóm**|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực||||
|**Description**||Cho phép người dùng sửa thông tin ứng viên và xoá nhóm||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng chọn “Thêm/Sửa/Xoá”<br>3\. Hệ thống chuyển đến tab Thêm/Sửa/Xoá<br>4\. Người dùng chọn "\.\.\."<br>5\. Hệ thống hiển thị form sửa nhóm<br>6\. Người dùng điều chỉnh input các trường, bấm chọn “Lưu”<br>7\. Hệ thống định dạng thông tin, lưu thông tin chỉnh sửa vào CSDL||||
|**Exception Flows**||7\.1\. Hệ thống thông báo input chưa hợp lệ và yêu cầu người dùng nhập lại||||
|**Business Rules**||BR\-40: Tên phòng, nhóm, chi nhánh không được quá 50 ký tự||||
|**Application Messages**||MSG\-27: Cập nhật thành công\!||||

*Activity diagram*

### Xoá nhóm

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Icon xoá|Button|||Bấm để xoá nhóm|
|2|Có|Button|||Bấm để xác nhận xoá nhóm|
|3|Không|Button|||Bấm để huỷ xoá|

*Đặc tả use case *

|**Use Case ID**||**UC \- 13\.6\.3**|**Use Case Name**||**Xoá nhóm**|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực||||
|**Description**||Cho phép người dùng sửa thông tin ứng viên và xoá nhóm||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng chọn nút “Thêm/Sửa/Xoá”<br>3\. Hệ thống chuyển đến tab Thêm/Sửa/Xoá<br>4\. Người dùng chọn "Thùng rác"<br>5\. Hệ thống hiển thị popup xác nhận xoá<br>5\.1\. Người dùng bấm chọn "Có" \-\> Hệ thống lưu vào CSDL<br>5\.2\. Người dùng bấm chọn "Không" \-\> Quay lại màn hình danh sách||||
|**Exception Flows**||5\.1 Nếu từ khóa nhập sai thì không hiển thị||||
|**Business Rules**||||||
|**Application Messages**||MSG\-24: Xoá thành công\.||||



*Activity diagram*

### Search nhóm

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Nội dung tìm kiếm|Textbox|||Bấm để nhập nội dung tìm kiếm|
|2|Icon tìm kiếm|Button|||Bấm để tìm kiếm thông tin|
|3|Icon \[\<\]|Button|||Bấm để trở lại trang trước|

*Đặc tả use case *

|**Use Case ID**||**UC \- 13\.6\.4**|**Use Case Name**||**Search nhóm**|
|---|---|---|---|---|---|
|**Author**||ThuHa|**Date**||**13/05/2024**|
|**Actor**||Trưởng phòng, PGĐ kinh doanh, GĐ kinh doanh, GĐ khu vực||||
|**Description**||Cho phép người dùng xem Danh sách nhóm, tìm kiếm các nhóm ||||
|**Pre\-Condition**||Người dùng đăng nhập thành công với quyền Trưởng phòng và truy cập vào tab Quản lý phòng/nhóm||||
|**Main Flows**||1\. Người dùng truy cập vào "Quản lý phòng/nhóm", Chọn "QL Nhóm"<br>2\. Người dùng nhập thông tin tìm kiếm vào searchbox<br>3\. Người dùng bấm chọn icon "Search", thực hiện tìm kiếm<br>4\. Hệ thống lọc thông tin theo từ khoá, hiển thị dánh sách báo cáo được tìm kiếm theo từ khoá nhập||||
|**Exception Flows**||4\.1\. Người dùng thực hiện chức năng tìm kiếm không thành công, thông tin tìm kiếm không đúng so với thông tin trên hệ thống ||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

*Activity diagram*

## Quản lý khảo sát của chuyên viên \(Chưa mô tả\)

## Quản lý check\-in của khách \(Chưa mô tả\)

### Tạo mã QR check\-in

### Danh sách khách check\-in

### Chi tiết khách check\-in

## Quản lý check\-in của thành viên phòng \(Chưa mô tả\)

### Danh sách thành viên check\-in

### Chi tiết thành viên check\-in

### Tìm kiếm thành viên check\-in

### Lọc thành viên check\-in





