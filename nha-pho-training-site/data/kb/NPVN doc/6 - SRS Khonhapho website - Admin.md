# 6 \- SRS Khonhapho website \- Admin

# V\. Admin

# Use case

## Loại quyền \(Category\)

***Screen design***

***Đặc tả use case***

|**Use case ID:**|UC|**Tên use case:**|Category permission|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|12/11/2024|
|**Các tác nhân chính:**|Admin|||
|**Mô tả:**|Admin truy cập danh mục các quyền trong hệ thống\. Admin có thể tạo, sửa, xoá và xem danh sách danh mục của các quyền|||
|**Điều kiện trước:**|Người dùng đăng nhập tài khoản Admin|||
|**Luồng chính:**<br>|1. Người dùng Đăng nhập vào hệ thống<br>2. Hệ thống di chuyển vào trang chủ<br>3. Bấm vào trang quản trị ở sidebar<br>4. Hệ thống mở trang với tên miền quantri\.khonhapho<br>5. Bấm vào dropdownlist cài đặt quyền, chọn loại quyền<br>6. Hệ thống hiển thị danh sách các loại quyền<br>7. Người dùng có thể chọn 1 trong 3 lựa chọn<br>7\.1\. Người dùng chọn \[Thêm mới\]<br>7\.1\.2 Hệ thống hiển thị form<br>7\.1\.3 Người dùng nhập thông tin và bấm \[Lưu\]<br>7\.1\.4\. Hệ thống lưu vào CSDL, thông báo thành công<br>7\.2\. Người dùng chọn icon Xoá<br>7\.2\.1 Hệ thống hiển thị form xác nhận<br>7\.2\.2 Người dùng chọn Xoá<br>7\.2\.2\.1 Người dùng chọn huỷ<br>7\.2\.2\.2 Hệ thống tắt form<br>7\.2\.3 Hệ thống lưu vào CSDL, thông báo xoá thành công<br>7\.3\. Người dùng chọn icon sửa<br>7\.3\.1 Hệ thống hiển thị form sửa<br>7\.3\.2 Người dùng nhập thông tin và bấm Lưu<br>7\.3\.3 Hệ thống lưu vào CSDL, thông báo cập nhật thành công|||
|**Luồng ngoại lệ:**|7\.1\.3 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại thông tin<br>7\.3\.2 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại trường thông tin không hợp lệ|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||<br>||||||

## Quản lý Quyền truy cập chức năng \(Chưa làm\)

***Screen design***

***Đặc tả use case***

|**Use case ID:**||**Tên use case:**|Quản lý quyền truy cập chức năng|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**||
|**Các tác nhân chính:**|Admin|||
|**Mô tả:**||||
|**Điều kiện trước:**||||
|**Luồng chính:**<br>||||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||<br>||||||

## Quản lý Nhóm quyền \(Chưa làm\)

***Screen design***

***Đặc tả use case***

|**Use case ID:**||**Tên use case:**|Quản lý nhóm quyền|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**||
|**Các tác nhân chính:**|Admin|||
|**Mô tả:**||||
|**Điều kiện trước:**||||
|**Luồng chính:**<br>||||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||<br>||||||

## Quản lý chức danh

***Screen design***

***Đặc tả use case***

|**Use case ID:**||**Tên use case:**||
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|12/11/2024|
|**Các tác nhân chính:**|Admin|||
|**Mô tả:**|Admin quản lý các chức danh người dùng trong hệ thống\. Có thể tạo, sửa, xoá và xem danh sách các chức danh|||
|**Điều kiện trước:**|Người dùng đăng nhập với tài khoản Admin|||
|**Luồng chính:**<br>|1. Người dùng Đăng nhập vào hệ thống<br>2. Hệ thống di chuyển vào trang chủ<br>3. Bấm vào trang quản trị ở sidebar<br>4. Hệ thống mở trang với tên miền quantri\.khonhapho<br>5. Bấm vào dropdownlist Cài đặt quyền \- Chọn chức danh<br>6. Hệ thống hiển thị danh sách các chức danh trong hệ thống<br>7. Người dùng có thể thực hiện 1 trong 4 hành động<br>7\.1\. Người dùng chọn \[Thêm mới\]<br>7\.1\.2 Hệ thống hiển thị form<br>7\.1\.3 Người dùng nhập thông tin và bấm \[Lưu\]<br>7\.1\.4\. Hệ thống lưu vào CSDL, thông báo thành công<br>7\.2\. Người dùng chọn icon Xoá<br>7\.2\.1 Hệ thống hiển thị form xác nhận<br>7\.2\.2 Người dùng chọn Xoá<br>7\.2\.2\.1 Người dùng chọn huỷ<br>7\.2\.2\.2 Hệ thống tắt form<br>7\.2\.3 Hệ thống lưu vào CSDL, thông báo xoá thành công<br>7\.3\. Người dùng chọn icon sửa<br>7\.3\.1 Hệ thống hiển thị form sửa<br>7\.3\.2 Người dùng nhập thông tin và bấm Lưu<br>7\.3\.3 Hệ thống lưu vào CSDL, thông báo cập nhật thành công<br>7\.4 Người dùng nhập vào ô tìm kiếm chức danh<br>7\.4\.1 Hệ thống hiển thị danh sách các chức danh khớp với từ khoá|||
|**Luồng ngoại lệ:**|7\.1\.3 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại thông tin<br>7\.3\.2 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại trường thông tin không hợp lệ|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||<br>||||||

## Quản lý dữ liệu kho hàng \(2\.1 Thêm Phường\)

***Screen design***

***Đặc tả use case***

|**Use case ID:**||**Tên use case:**|Quản lý dữ liệu kho hàng|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|12/11/2024|
|**Các tác nhân chính:**|Admin|||
|**Mô tả:**|Admin quản lý các chức danh người dùng trong hệ thống\. Có thể tạo, sửa, xoá và xem danh sách các chức danh|||
|**Điều kiện trước:**|Người dùng đăng nhập với tài khoản Admin|||
|**Luồng chính:**<br>|1. Người dùng Đăng nhập vào hệ thống<br>2. Hệ thống di chuyển vào trang chủ<br>3. Bấm vào trang quản trị ở sidebar<br>4. Hệ thống mở trang với tên miền quantri\.khonhapho<br>5. Bấm vào Quản lý dữ liệu kho hàng<br>6. Hệ thống hiển thị list các dữ liệu trong sizebar trong hệ thống<br>7. Người dùng chọn 1 trong các dữ liệu bất kỳ<br>8. Hệ thống di chuyển sang màn hình danh sách dữ liệu được chọn<br>9. Người dùng có thể thực hiện 1 trong 4 hành động<br>7\.1\. Người dùng chọn \[Thêm mới\]<br>7\.1\.2 Hệ thống hiển thị form<br>7\.1\.3 Người dùng nhập thông tin và bấm \[Lưu\]<br>7\.1\.4\. Hệ thống lưu vào CSDL, thông báo thành công<br>7\.2\. Người dùng chọn icon Xoá<br>7\.2\.1 Hệ thống hiển thị form xác nhận<br>7\.2\.2 Người dùng chọn Xoá<br>7\.2\.2\.1 Người dùng chọn huỷ<br>7\.2\.2\.2 Hệ thống tắt form<br>7\.2\.3 Hệ thống lưu vào CSDL, thông báo xoá thành công<br>7\.3\. Người dùng chọn icon sửa<br>7\.3\.1 Hệ thống hiển thị form sửa<br>7\.3\.2 Người dùng nhập thông tin và bấm Lưu<br>7\.3\.3 Hệ thống lưu vào CSDL, thông báo cập nhật thành công<br>7\.4 Người dùng nhập vào ô tìm kiếm từ khoá<br>7\.4\.1 Hệ thống hiển thị danh sách các dữ liệu khớp với từ khoá|||
|**Luồng ngoại lệ:**|7\.1\.3 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại thông tin<br>7\.3\.2 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại trường thông tin không hợp lệ|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi Admin tạo dữ liệu kho hàng|Admin tạo dữ liệu kho hàng<br>||13 resources|Logging, Validation||
|||Validation: Xảy ra khi người dùng nhập sai dữ liệu|Hệ thống từ chối thực hiện hành động\. Yêu cầu người dùng nhập lại|||||
|||Xảy ra khi Admin cập nhật dữ liệu kho hàng|Admin cập nhật dữ liệu kho hàng||13 resources|Logging, Validation||
|||Xảy ra khi Admin xoá dữ liệu kho hàng|Admin xoá dữ liệu kho hàng||13 resources|Logging||
|||Xảy ra khi Admin xem danh sách dữ liệu kho hàng|Admin xem dữ liệu kho hàng theo danh mục||13 resources|||
|||Xảy ra khi Admin tìm kiếm dữ liệu kho hàng bằng từ khoá|Admin tìm kiếm dữ liệu kho hàng bằng từ khoá||13 resources|Search||
|||Search: Xảy ra khi người dùng tìm kiếm bằng từ khoá|Hệ thống ghi nhận từ khoá và trả kết quả cho người dùng|||||
|||Xảy ra khi Admin tìm kiếm dữ liệu quận huyện theo theo thành phố|Admin tìm kiếm quận huyện theo thành phố||Quận/Huyện|Filter||
|||Xảy ra khi Admin tìm kiếm dữ liệu đường phố theo thành phố và quận huyện|Admin tìm kiếm đường phố theo thành phố và quận huyện||Đường phố|Filter||
|||Xảy ra khi Admin tìm kiếm dữ liệu Dự án theo theo thành phố, quận huyện|Admin tìm kiếm dự án theo thành phố và quận huyện||Dự án|Filter||
|||Filter: Xảy ra khi người dùng tìm kiếm theo danh mục|Hệ thống ghi nhận tuỳ chọn của người dùng, hiển thị kết quả theo tuỳ chọn của người dùng|||||

## Quản lý dữ liệu nội bộ

### Khu vực vùng \(New\)

***Screen design***

***Đặc tả use case***

|**Use case ID:**||**Tên use case:**|Quản lý khu vực/vùng|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|12/10/2024|
|**Các tác nhân chính:**|Admin|||
|**Mô tả:**|Admin quản lý khu vực/vùng\. Có thể tạo, sửa, xoá và xem danh sách các vùng |||
|**Điều kiện trước:**|Người dùng đăng nhập với chức danh admin|||
|**Luồng chính:**<br>|1. Người dùng Đăng nhập vào hệ thống<br>2. Hệ thống di chuyển vào trang chủ<br>3. Bấm vào trang quản trị ở sidebar<br>4. Hệ thống mở trang với tên miền quantri\.khonhapho<br>5. Bấm vào dropdownlist dữ liệu thành viên \- Chọn Khu vực/Vùng<br>6. Hệ thống hiển thị danh sách các vùng<br>7. Người dùng có thể thực hiện 1 trong 3 hành động<br>7\.1\. Người dùng chọn \[Thêm mới\]<br>7\.1\.2 Hệ thống hiển thị form<br>7\.1\.3 Người dùng nhập thông tin và bấm \[Lưu\]<br>7\.1\.4\. Hệ thống lưu vào CSDL, thông báo thành công<br>7\.2\. Người dùng chọn icon Xoá<br>7\.2\.1 Hệ thống hiển thị form xác nhận<br>7\.2\.2 Người dùng chọn Xoá<br>7\.2\.2\.1 Người dùng chọn huỷ<br>7\.2\.2\.2 Hệ thống tắt form<br>7\.2\.3 Hệ thống lưu vào CSDL, thông báo xoá thành công<br>7\.3\. Người dùng chọn icon sửa<br>7\.3\.1 Hệ thống hiển thị form sửa<br>7\.3\.2 Người dùng nhập thông tin và bấm Lưu<br>7\.3\.3 Hệ thống lưu vào CSDL, thông báo cập nhật thành công|||
|**Luồng ngoại lệ:**|7\.1\.3 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại thông tin<br>7\.3\.2 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại trường thông tin không hợp lệ|||
|**Ưu tiên:**|Low|||
|**Tần suất sử dụng :**|Low|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi Admin tạo Khu vực/Vùng|Admin tạo Khu vực/Vùng|||Logging, Validation||
|||Validation: Xảy ra khi người dùng nhập sai dữ liệu|Hệ thống từ chối tạo khu vực, yêu cầu người dùng nhập lại|||||
|||Xảy ra khi Admin cập nhật thông tin Khu vực|Admin cập nhật thông tin khu vực|||Logging, Validation||
|||Xảy ra khi Admin xoá khu vực|Admin xoá khu vực/Vùng|||Logging||

### Tỉnh \(New\)

***Screen design***

***Đặc tả use case***

|**Use case ID:**||**Tên use case:**|Quản lý tỉnh|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|12/11/2024|
|**Các tác nhân chính:**|Admin|||
|**Mô tả:**|Admin quản lý tỉnh\. Có thể tạo, sửa, xoá, xem danh sách và tìm kiếm các tỉnh trong những khu vực khác nhau|||
|**Điều kiện trước:**|- Đăng nhập với tài khoản admin<br>- Trong CSDL có bản ghi của trường khu vực|||
|**Luồng chính:**<br>|1. Người dùng Đăng nhập vào hệ thống<br>2. Hệ thống di chuyển vào trang chủ<br>3. Bấm vào trang quản trị ở sidebar<br>4. Hệ thống mở trang với tên miền quantri\.khonhapho<br>5. Bấm vào dropdownlist dữ liệu thành viên \- Chọn tỉn<br>6. Hệ thống hiển thị danh sách các tỉnh<br>7. Người dùng có thể thực hiện 1 trong 4 hành động<br>7\.1\. Người dùng chọn \[Thêm mới\]<br>7\.1\.2 Hệ thống hiển thị form<br>7\.1\.3 Người dùng nhập thông tin và bấm \[Lưu\]<br>7\.1\.4\. Hệ thống lưu vào CSDL, thông báo thành công<br>7\.2\. Người dùng chọn icon Xoá<br>7\.2\.1 Hệ thống hiển thị form xác nhận<br>7\.2\.2 Người dùng chọn Xoá<br>7\.2\.2\.1 Người dùng chọn huỷ<br>7\.2\.2\.2 Hệ thống tắt form<br>7\.2\.3 Hệ thống lưu vào CSDL, thông báo xoá thành công<br>7\.3\. Người dùng chọn icon sửa<br>7\.3\.1 Hệ thống hiển thị form sửa<br>7\.3\.2 Người dùng nhập thông tin và bấm Lưu<br>7\.3\.3 Hệ thống lưu vào CSDL, thông báo cập nhật thành công<br>7\.4 Người dùng bấm vào dropdown lọc khu vực<br>7\.4\.1 Hệ thống hiển thị danh sách khu vực<br>7\.4\.2 Người dùng chọn khu vực mong muốn<br>7\.4\.3 Hệ thống hiển thị tỉnh trong khu vực người dùng đã chọn|||
|**Luồng ngoại lệ:**|7\.1\.3 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại thông tin<br>7\.3\.2 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại trường thông tin không hợp lệ|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi Admin tạo 1 tỉnh thành mới|Admin tạo tỉnh mới||Tỉnh|Logging, Validation||
|||Validation: Xảy ra khi người dùng nhập sai dữ liệu|Hệ thống thông báo không thành công, yêu cầu người dùng nhập lại||Tỉnh|||
|||Xảy ra khi admin cập nhật thông tin của tỉnh thành|Admin cập nhật tỉnh thành||Tỉnh|Logging, Validation||
|||Xảy ra khi Admin xoá tỉnh thành|Admin xoá tỉnh thành||Tỉnh|Logging||
|||Xảy ra khi Admin tìm kiếm tỉnh thành bằng từ khoá|Admin Tìm kiếm tỉnh thành bằng từ khoá||Tỉnh|Search||
|||Xảy ra khi Admin tìm kiếm tỉnh thành lọc theo Khu vực|Admin xem tỉnh thành theo khu vực||Tỉnh|Filter||

### Chi nhánh 

***Screen design***

***Đặc tả use case***

|**Use case ID:**||**Tên use case:**|Quản lý chi nhánh|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|12/11/2024|
|**Các tác nhân chính:**|Admin|||
|**Mô tả:**|Admin quản lý chi nhánh\. Có thể tạo, sửa, xoá, xem danh sách và tìm kiếm các chi nhánh trong những tỉnh khác nhau|||
|**Điều kiện trước:**|- Đăng nhập với tài khoản admin<br>- Trong CSDL có bản ghi của trường khu vực|||
|**Luồng chính:**<br>|1. Người dùng Đăng nhập vào hệ thống<br>2. Hệ thống di chuyển vào trang chủ<br>3. Bấm vào trang quản trị ở sidebar<br>4. Hệ thống mở trang với tên miền quantri\.khonhapho<br>5. Bấm vào dropdownlist dữ liệu thành viên \- Chọn tỉn<br>6. Hệ thống hiển thị danh sách các tỉnh<br>7. Người dùng có thể thực hiện 1 trong 4 hành động<br>7\.1\. Người dùng chọn \[Thêm mới\]<br>7\.1\.2 Hệ thống hiển thị form<br>7\.1\.3 Người dùng nhập thông tin và bấm \[Lưu\]<br>7\.1\.4\. Hệ thống lưu vào CSDL, thông báo thành công<br>7\.2\. Người dùng chọn icon Xoá<br>7\.2\.1 Hệ thống hiển thị form xác nhận<br>7\.2\.2 Người dùng chọn Xoá<br>7\.2\.2\.1 Người dùng chọn huỷ<br>7\.2\.2\.2 Hệ thống tắt form<br>7\.2\.3 Hệ thống lưu vào CSDL, thông báo xoá thành công<br>7\.3\. Người dùng chọn icon sửa<br>7\.3\.1 Hệ thống hiển thị form sửa<br>7\.3\.2 Người dùng nhập thông tin và bấm Lưu<br>7\.3\.3 Hệ thống lưu vào CSDL, thông báo cập nhật thành công<br>7\.4 Người dùng tìm kiếm tỉnh theo khu vực <br>7\.4\.1 Hệ thống hiển thị danh sách khu vực<br>7\.4\.2 Người dùng chọn khu vực mong muốn<br>7\.4\.3 Hệ thống hiển thị tỉnh trong khu vực người dùng đã chọn|||
|**Luồng ngoại lệ:**|7\.1\.3 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại thông tin<br>7\.3\.2 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại trường thông tin không hợp lệ|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi Admin tạo chi nhánh|Admin tạo chi nhánh||Chi nhánh|Logging, Validate||
|||Validate: Xảy ra khi người dùng nhập sai dữ liệu|Hệ thống từ chối tạo chi nhánh do người dùng nhập sai dữ liệu|||||
|||Xảy ra khi Admin sửa chi nhánh|Admin sửa chi nhánh<br>||Chi nhánh|Logging, Validate||
|||Validate: Xảy ra khi người dùng nhập sai dữ liệu|Hệ thống từ chối cập nhật chi nhánh do người dùng nhập sai dữ liệu||Chi nhánh|||
|||Xảy ra khi Admin xem danh sách chi nhánh|Admin xem danh sách chi nhánh<br>||Chi nhánh|Logging||
|||Xảy ra khi Admin tìm kiếm chi nhánh bằng từ khoá|Admin tìm kiếm chi nhánh bằng từ khoá|Chi nhánh\.city\_id|Chi nhánh|Search||
|||Search: Xảy ra khi Admin tìm kiếm chi nhánh bằng từ khoá|Hệ thống đọc keyword của người dùng và hiển thị dữ liệu theo tuỳ chọn|Chi nhánh\.city\_id|Chi nhánh|||
|||Xảy ra khi Admin xoá chi nhánh|Admin xoá chi nhánh||Chi nhánh|Logging||
|||Xảy ra khi thư ký tìm kiếm chi nhánh theo tỉnh|Thư ký tìm kiếm chi nhánh theo tỉnh||Chi nhánh<br>|Filter||
|||Filter: Xảy ra khi Admin tìm kiếm chi nhánh theo tỉnh|Hệ thống đọc tuỳ chọn của người dùng và hiển thị các chi nhánh theo tỉnh||Chi nhánh|||



## Mẫu phản hồi

### Mẫu phản hồi tin chính chủ

***Screen design***

***Đặc tả use case***

|**Use case ID:**||**Tên use case:**|Mẫu phản hồi tin chính chủ|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|14/11/2024|
|**Các tác nhân chính:**|Admin|||
|**Mô tả:**|Admin quản lý mẫu phản hồi tin chính chủ|||
|**Điều kiện trước:**|Người đăng nhập bằng tài khoản của Admin|||
|**Luồng chính:**<br>|1. Người dùng Đăng nhập vào hệ thống<br>2. Hệ thống di chuyển vào trang chủ<br>3. Bấm vào trang quản trị ở sidebar<br>4. Hệ thống mở trang với tên miền quantri\.khonhapho<br>5. Bấm vào Quản lý mẫu phản hồi, chọn mẫu phản hồi tin chính chủ<br>6. Hệ thống hiển thị danh sách các mẫu phản hồi<br>7. Người dùng có thể thực hiện 1 trong 4 hành động<br>7\.1\. Người dùng chọn \[Thêm mới\]<br>7\.1\.2 Hệ thống hiển thị form<br>7\.1\.3 Người dùng nhập thông tin và bấm \[Lưu\]<br>7\.1\.4\. Hệ thống lưu vào CSDL, thông báo thành công<br>7\.2\. Người dùng chọn icon Xoá<br>7\.2\.1 Hệ thống hiển thị form xác nhận<br>7\.2\.2 Người dùng chọn Xoá<br>7\.2\.2\.1 Người dùng chọn huỷ<br>7\.2\.2\.2 Hệ thống tắt form<br>7\.2\.3 Hệ thống lưu vào CSDL, thông báo xoá thành công<br>7\.3\. Người dùng chọn icon sửa<br>7\.3\.1 Hệ thống hiển thị form sửa<br>7\.3\.2 Người dùng nhập thông tin và bấm Lưu<br>7\.3\.3 Hệ thống lưu vào CSDL, thông báo cập nhật thành công|||
|**Luồng ngoại lệ:**|7\.1\.3 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại thông tin<br>7\.3\.2 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại trường thông tin không hợp lệ|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi Admin tạo Mẫu phản hồi tin nhắn hỗ trợ|Admin tạo mẫu phản hồi tin nhắn hỗ trợ|||Logging, Validation||
|||Validation: Xảy ra khi người dùng nhập sai dữ liệu|Hệ thống từ chối thực hiện hành động, yêu cầu người dùng nhập lại|||||
|||Xảy ra khi Admin cập nhật mẫu phản hồi tin nhắn hỗ trợ|Admin cập nhật mẫu phản hồi tin nhắn hỗ trợ|||Logging, Validation||
|||Xảy ra khi Admin xoá mẫu phản hồi tin nhắn hỗ trợ|Admin xoá mẫu phản hồi tin nhắn hỗ trợ|||||

### Mẫu phản hồi tin nhắn hỗ trợ \(New\)

***Screen design***

***Đặc tả use case***

|**Use case ID:**||**Tên use case:**|Mẫu phản hồi tin nhắn hỗ trợ|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**||
|**Các tác nhân chính:**|Admin|||
|**Mô tả:**|Admin quản lý mẫu phản hồi tin nhắn theo tuỳ chọn ban đầu của người dùng khi sử dụng chức năng chat hỗ trợ|||
|**Điều kiện trước:**|Người đăng nhập bằng tài khoản của Admin|||
|**Luồng chính:**<br>|1. Người dùng Đăng nhập vào hệ thống<br>2. Hệ thống di chuyển vào trang chủ<br>3. Bấm vào trang quản trị ở sidebar<br>4. Hệ thống mở trang với tên miền quantri\.khonhapho<br>5. Bấm vào Quản lý mẫu phản hồi, chọn mẫu tin nhắn phản hồi<br>6. Hệ thống hiển thị danh sách mẫu tin nhắn phản hồi<br>7. Người dùng có thể thực hiện 1 trong 4 hành động<br>7\.1\. Người dùng chọn \[Thêm mới\]<br>7\.1\.2 Hệ thống hiển thị form<br>7\.1\.3 Người dùng nhập thông tin và bấm \[Lưu\]<br>7\.1\.4\. Hệ thống lưu vào CSDL, thông báo thành công<br>7\.2\. Người dùng chọn icon Xoá<br>7\.2\.1 Hệ thống hiển thị form xác nhận<br>7\.2\.2 Người dùng chọn Xoá<br>7\.2\.2\.1 Người dùng chọn huỷ<br>7\.2\.2\.2 Hệ thống tắt form<br>7\.2\.3 Hệ thống lưu vào CSDL, thông báo xoá thành công<br>7\.3\. Người dùng chọn icon sửa<br>7\.3\.1 Hệ thống hiển thị form sửa<br>7\.3\.2 Người dùng nhập thông tin và bấm Lưu<br>7\.3\.3 Hệ thống lưu vào CSDL, thông báo cập nhật thành công|||
|**Luồng ngoại lệ:**|7\.1\.3 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại thông tin<br>7\.3\.2 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại trường thông tin không hợp lệ|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi Admin tạo Mẫu phản hồi tin nhắn hỗ trợ|Admin tạo mẫu phản hồi tin nhắn hỗ trợ|||Logging, Validation||
|||Validation: Xảy ra khi người dùng nhập sai dữ liệu|Hệ thống từ chối thực hiện hành động, yêu cầu người dùng nhập lại|||||
|||Xảy ra khi Admin cập nhật mẫu phản hồi tin nhắn hỗ trợ|Admin cập nhật mẫu phản hồi tin nhắn hỗ trợ|||Logging, Validation||
|||Xảy ra khi Admin xoá mẫu phản hồi tin nhắn hỗ trợ|Admin xoá mẫu phản hồi tin nhắn hỗ trợ|||||

## Log activity theo danh mục \(New\)

***Screen design***

***Đặc tả use case***

|**Use case ID:**||**Tên use case:**|Xem activity log theo danh mục|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|12/11/2024|
|**Các tác nhân chính:**|Admin|||
|**Mô tả:**|Admin xem danh sách các activity log theo danh mục|||
|**Điều kiện trước:**|Người dùng đăng nhập với tài khoản Admin|||
|**Luồng chính:**<br>|1. Người dùng Đăng nhập vào hệ thống<br>2. Hệ thống di chuyển vào trang chủ<br>3. Bấm vào trang quản trị ở sidebar<br>4. Hệ thống mở trang với tên miền quantri\.khonhapho<br>5. Bấm vào dropdownlist hệ thống \- Chọn Log<br>6. Hệ thống hiển thị danh sách activity log của người dùng<br>6\.1\. Người dùng bấm vào thanh dropdownlist danh mục log<br>6\.2\. Hệ thống hiển thị danh sách các danh mục<br>6\.3\. Người dùng chọn danh mục<br>6\.4\. Hệ thống hiển thị danh sách các bản ghi log theo danh mục người dùng đã chọn|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi Admin xem activity log|Admin xem danh sách activity log trên hệ thống|||||
|||Xảy ra khi Admin xem activity log theo danh mục|Admin Xem danh sách activity log theo danh mục|||Filter||
|||Filter: Xảy ra khi Admin xem activity log theo các danh mục đã chọn|Hệ thống ghi nhận lựa chọn của người dùng, hiển thị danh sách log theo tuỳ chọn của người dùng|||||

## System validation configuration \(Cấu hình hệ thống\)

***Screen design***

***Đặc tả use case***

|**Use case ID:**||**Tên use case:**|System validation configuration|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|12/11/2024|
|**Các tác nhân chính:**|Admin|||
|**Mô tả:**|Admin chỉnh sửa điều kiện hoạt động của các trường dữ liệu|||
|**Điều kiện trước:**|Người dùng đăng nhập với tài khoản Admin|||
|**Luồng chính:**<br>|1. Người dùng Đăng nhập vào hệ thống<br>2. Hệ thống di chuyển vào trang chủ<br>3. Người dùng Bấm vào trang quản trị ở sidebar<br>4. Hệ thống mở trang với tên miền quantri\.khonhapho<br>5. Người dùng Bấm vào Hệ thống \- Chọn Cài đặt \- Cấu hình <br>6. Hệ thống hiển thị Form điều kiện cho các chức năng<br>7. Người dùng chỉnh sửa điều kiện các trường dữ liệu<br>8. Hệ thống cập nhật vào CSDL, thông báo cập nhật thành công|||
|**Luồng ngoại lệ:**||||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||<br>||||||

## Cài đặt dữ liệu công ty

### Profile công ty

***Screen design***

***Đặc tả use case***

|**Use case ID:**||**Tên use case:**|Profile Công ty|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|12/11/2024|
|**Các tác nhân chính:**|Admin|||
|**Mô tả:**|Cho phép thay đổi ảnh, tên công ty|||
|**Điều kiện trước:**|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Admin|||
|**Luồng chính:**<br>|1. Người dùng Click chọn Trang quản trị \- cài đặt dữ liệu công ty, chọn Profile công ty<br>2. Hệ thống mở màn hình cài đặt công ty<br>3. Người dùng click vào logo công ty<br>4. Hệ thống mở chọn file trong máy<br>5. Người dùng chọn file từ thiết bị<br>6. Hệ thống cập nhật ảnh profile thành công<br>7. Người dùng bấm vào thanh nhập tên công ty và nhập<br>8. Hệ thống lưu vào CSDL thành công, thông báo cập nhật thành công|||
|**Luồng ngoại lệ:**|5\.1 Người dùng chọn file không hợp lệ hoặc file quá dung lượng|||
|**Ưu tiên:**|Low|||
|**Tần suất sử dụng :**|Low|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi Admin cập nhật thông tin công ty<br>|Admin cập nhật tên công ty||Công ty|Logging<br>||
|||Xảy ra khi Admin cập nhật ảnh của công ty|Admin cập nhật ảnh đại diện của công ty||Công ty|Logging, Validation||
|||Validation: Xảy ra khi Admin upload ảnh dung lượng lớn|Hệ thống thông báo lỗi, ảnh quá dung lượng||Công ty|||

### Quản lý Sticker

***Screen design***

***Đặc tả use case***

|**Use case ID:**||**Tên use case:**|Quản lý sticker|
|---|---|---|---|
|**Tác giả:**|NamNP|**Ngày:**|12/11/2024|
|**Các tác nhân chính:**|Admin|||
|**Mô tả:**|Admin quản lý sticker trong hệ thống\. Có thể tạo, sửa, xoá, xem danh sách và tìm kiếm sticker|||
|**Điều kiện trước:**|Người dùng đăng nhập với tài khoản Admin|||
|**Luồng chính:**<br>|1. Người dùng Đăng nhập vào hệ thống<br>2. Hệ thống di chuyển vào trang chủ<br>3. Bấm vào trang quản trị ở sidebar<br>4. Hệ thống mở trang với tên miền quantri\.khonhapho<br>5. Bấm vào dropdownlist dữ liệu thành viên \- Chọn Khu vực/Vùng<br>6. Hệ thống hiển thị danh sách các vùng<br>7. Người dùng có thể thực hiện 1 trong 3 hành động<br>7\.1\. Người dùng chọn \[Thêm mới\]<br>7\.1\.2 Hệ thống hiển thị form<br>7\.1\.3 Người dùng nhập thông tin và bấm \[Lưu\]<br>7\.1\.4\. Hệ thống lưu vào CSDL, thông báo thành công<br>7\.2\. Người dùng chọn icon Xoá<br>7\.2\.1 Hệ thống hiển thị form xác nhận<br>7\.2\.2 Người dùng chọn Xoá<br>7\.2\.2\.1 Người dùng chọn huỷ<br>7\.2\.2\.2 Hệ thống tắt form<br>7\.2\.3 Hệ thống lưu vào CSDL, thông báo xoá thành công<br>7\.3\. Người dùng chọn icon sửa<br>7\.3\.1 Hệ thống hiển thị form sửa<br>7\.3\.2 Người dùng nhập thông tin và bấm Lưu<br>7\.3\.3 Hệ thống lưu vào CSDL, thông báo cập nhật thành công<br>7\.4\. Người dùng bấm vào thành tìm kiếm, nhập từ khoá và bấm nút tìm kiếm<br>7\.4\.1 Hệ thống hiển thị danh sách sticker khớp với từ khoá|||
|**Luồng ngoại lệ:**|7\.1\.3 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại thông tin<br>7\.3\.2 Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại trường thông tin không hợp lệ|||
|**Ưu tiên:**|High|||
|**Tần suất sử dụng :**|High|||
|**Quy tắc nghiệp vụ:**||||
|**Tin nhắn thông báo :**||||

***Diagram***

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi Admin xem danh sách sticker|Admin xem danh sách sticker||Sticker|Logging||
|||Xảy ra khi Admin tìm kiếm sticker|Admin xem danh sách sticker bằng từ khoá ||Sticker|Search||
|||Search: Xảy ra khi ngườ dùng nhập từ khoá tìm kiếm sticker|Hệ thống hiển thị danh sách sticker khớp với từ khoá||Sticker|||
|||Xảy ra khi Admin tạo mới sticker|Admin tạo sticker||Sticker|Logging, Validation||
|||Validation: Xảy ra khi Admin nhập dữ liệu không hợp lệ|Hệ thống thông báo lỗi, yêu cầu người dùng nhập lại thông tin||Sticker|||
|||Xảy ra khi Admin chỉnh sửa thông tin sticker|Admin cập nhật bộ sticker||Sticker|Logging, Validation||
|||Xảy ra khi Admin xoá sticker|Admin xoá sticker||Sticker|Logging||

## Trung tâm hướng dẫn trợ giúp 

### Quản lý danh mục trợ giúp

*Đặc tả use case*

|Use case ID:|UC\-|Tên use case:|**Quản lý danh mục trợ giúp**|
|---|---|---|---|
|Tác giả:|Quỳnh Anh|Ngày:|16/12/2024|
|Các tác nhân chính:|Admin|Figma:|N/A|
|Mô tả:|Quản lý danh mục trợ giúp|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào quản lý trợ giúp|||
|Luồng chính:|1\. Người dùng Đăng nhập thành công và truy cập vào danh mục trợ giúp<br>2\. Người dùng chọn Thêm mới để thêm mới danh mục trợ giúp   <br>3\.Người dùng nhập thông tin và chọn lệnh Lưu                                             <br>4\. Hệ thống xác thực thông tin <br>4\.1 Nếu thông tin sai, người dùng quay lại bước 3 nhập thông tin<br>4\.2 Nếu thông tin đúng, hệ thống lưu thông tin vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:||||
|Tần suất sử dụng :||||
|Quy tắc nghiệp vụ:|BR\-11: Mục Yêu cầu không được nhập quá 1000 ký tự|||
|Tin nhắn thông báo :|\- MSG16: *Bạn cần chọn mục này*<br>\- MSG18: *Thêm tin đăng thành công*|||

*Activity diagram*

### Quản lý trung tâm trợ giúp 

*Đặc tả use case*

|**Use case ID:**|UC \- |**Tên use case:**||
|---|---|---|---|
|**Tác giả:**|Quỳnh Anh|**Ngày:**|16/12/2024|
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









