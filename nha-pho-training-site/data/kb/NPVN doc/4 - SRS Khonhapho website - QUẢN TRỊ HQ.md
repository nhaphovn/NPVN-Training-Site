# 4 \- SRS Khonhapho website \- QUẢN TRỊ HQ

# [3 \- SRS Khonhapho website \- Quản lý Phòng/Nhóm](https://v4cueke6gq8.sg.larksuite.com/wiki/UA7SwaSc0iiR2zkoBQIlzHuIg9e)

# VII\. Quản lý phân cấp quyền \(New 2\.1\)

## Quản lý khu vực 

Quản lý khu vực có quyền "CRUD" các chức năng các bộ phận theo khu vực đấy\. Phân quyền truy cập Quản lý khu vực bao gồm GĐ Khu vực, Thư ký bộ phận nhân sự theo Khu vực

## Quản lý tỉnh

Quản lý khu vực có quyền "CRUD" các chức năng các bộ phận theo tỉnh đấy\. Phân quyền truy cập Quản lý Tỉnh bao gồm GĐ Tỉnh, Thư ký bộ phận nhân sự theo Tỉnh

## Quản lý chi nhánh

Quản lý khu vực có quyền "CRUD" các chức năng các bộ phận theo Chi nhánh đấy\. Phân quyền truy cập Quản lý Chi nhánh bao gồm GĐ Chi nhánh, Thư ký bộ phận nhân sự theo Chi nhánh nhưng sẽ bị giới hạn quyền truy cập và thực hiện chức năng so với quản lý khu vực và tỉnh

## Quản lý phòng

Quản lý phòng có quyền "CRUD" các chức năng các bộ phận theo Phòng\. Phân quyền truy cập Quản lý Phòng bao gồm GĐ Kinh doanh, PGĐ Kinh doanh, GĐ Khối, Trưởng phòng, Phó Phòng và Trợ Lý

## Quản lý nhóm

# VIII\. Use case tổng thể Trang quản trị HQ \(Head Quarter\)

## Quản lý feeds

### Vụ chốt \(Modify 2\.2\)

Use case

#### Chờ duyệt

*Đặc tả use case*

|Use case ID:|UC \- 15\.1\.1|Tên use case:|Chờ duyệt|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký|Tác nhân phụ:|N/A|
|Mô tả:|- Cho phép user xem các bài viết trong trạng thái chờ duyệt<br>- Cho phép duyệt hoặc từ chối bài viết trên feed quản lý vụ chốt|||
|Điều kiện trước:|- Hệ thống đang ở trạng thái hoạt động<br>- Người dùng đăng nhập hệ thống thành công với quyền Thư kí<br>- Người dùng ĐC đã điền form ai chốt ai bán ở kho nhà phố \(Ver 2\.2\)|||
|Luồng chính:|1. Người dùng Click Trang quản trị \-  quản lý feed \- vụ chốt<br>2. Hệ thống hiển thị màn hình "Vụ chốt", tab chờ duyệt<br>3. Người dùng click "duyệt", bài viết được chuyển sang tab đã duyệt và hiển thị trên bảng tin\. Hệ thống thông báo đến user đăng bài bài viết đã được duyệt<br>4. Người dùng click "từ chối", bài viết được chuyển sang tab "từ chối"<br>5. Hệ thống thông báo đến user đăng bài bài viết đã bị từ chối|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi thư ký xem bài viết theo trạng thái <br>|Thư ký trở lên Xem bài viết thông báo vụ chốt theo trạng thái bài viết<br>|Thông báo vụ chốt\.feed\_status|Tin hoạt động<br>|Logging, StateUpdate||
|<br>||Xảy ra khi thư ký xét duyệt bài viết tin hoạt động<br>|Thư ký trở lên Sửa \(Xét duyệt\) Trạng thái bài viết vụ chốt<br>||Tin hoạt động<br>|Logging, StateUpdate, Notification||
|||Notification: Xảy ra khi thư ký cập nhật trạng thái bài viết|Hệ thống gửi thông báo đến người đăng bài||Tin hoạt động|||

#### Đã duyệt

*Đặc tả use case*

|Use case ID:|UC \- 15\.1\.2|Tên use case:|Đã duyệt|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư kí |Tác nhân phụ:|N/A|
|Mô tả:|- Cho phép user xem các bài viết trong trạng thái  bị từ chối<br>- Cho phép duyệt bài viết trên feed quản lý vụ chốt|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1. Người dùng Click Trang quản trị \-  quản lý feed \- vụ chốt<br>2. Hệ thống hiển thị màn hình "Vụ chốt", tab chờ duyệt<br>3. Người dùng click "duyệt", bài viết được chuyển sang tab đã duyệt và hiển thị trên bảng tin\. <br>4. Hệ thống thông báo đến user đăng bài bài viết đã được duyệt|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|\(MSG57\)Cập nhật thành công|||

*Activity diagram*

#### Xem danh sách từ chối

*Đặc tả use case*

|Use case ID:|UC \- 15\.1\.3|Tên use case:|Xem danh sách từ chối|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư kí |Tác nhân phụ:|N/A|
|Mô tả:|- Cho phép user xem các bài viết trong trạng thái bị từ chối<br>- Cho phép duyệt bài viết trên feed quản lý vụ chốt|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1. Người dùng Click Trang quản trị \-  quản lý feed \- vụ chốt<br>2. Hệ thống hiển thị màn hình "Vụ chốt", tab chờ duyệt<br>3. Người dùng click tab từ chối, <br>4. Hệ thống chuyển sang tab "Từ chối"<br>    4\.1\. Nếu Click Button "Duyệt", bài viết được chuyển sang tab "đã duyệt" và hiển thị trên bảng tin\.|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

### Khách cần mua gấp

Use case

#### Chờ duyệt

*Đặc tả use case*

|Use case ID:|UC \- 15\.2\.1|Tên use case:|Chờ duyệt|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư kí |Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user xem các bài viết trong trạng thái chờ duyệt<br>\-Cho phép duyệt hoặc từ chối bài viết trên feed quản lý vụ chốt|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng Click Trang quản trị \-  quản lý feed \- Khách cần mua gấp<br>2\.Hệ thống hiển thị màn hình "Khách cần mua gấp", tab chờ duyệt<br>2\.1\. Người dùng click "duyệt", bài viết được chuyển sang tab đã duyệt và hiển thị trên bảng tin\. Hệ thống thông báo đến user đăng bài bài viết đã được duyệt<br>2\.2\.Người dùng click "từ chối", bài viết được chuyển sang tab "từ chối"\.Hệ thống thông báo đến user đăng bài bài viết đã bị từ chối|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi thư ký xét duyệt bài viết khách cần mua gấp<br>|Thư ký trở lên Sửa \(Xét duyệt\) trạng thái Bài viết Khách cần mua gấp||Khách cần mua gấp<br>|Logging, StateUpdate, Notification||
|||Xảy ra khi thư ký theo cấp tổ chức xét duyệt bài viết khách cần mua gấp|Thư ký trở lên Sửa \(Xét duyệt\) trạng thái Bài viết Khách cần mua gấp theo khu vực||Khách cần mua gấp|Logging, StateUpdate, Notification||
|||Notification: Xảy ra khi thư ký cập nhật trạng thái bài viết|Hệ thống gửi thông báo đến người đăng bài||Tin hoạt động|||

#### Đã duyệt

Đặc tả

|Use case ID:|UC \- 15\.2\.2|Tên use case:|Đã duyệt|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư kí |Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user xem các bài viết trong trạng thái  bị từ chối<br>\-Cho phép duyệt bài viết trên feed quản lý vụ chốt|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng Click Trang quản trị \-  quản lý feed \- Khách cần mua gấp<br>2\.Hệ thống hiển thị màn hình "khách cần mua gấp", tab chờ duyệt<br>3\. Người dùng click "duyệt", bài viết được chuyển sang tab đã duyệt và hiển thị trên bảng tin\. <br>4\.Hệ thống thông báo đến user đăng bài bài viết đã được duyệt|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

#### Xem danh sách từ chối

|Use case ID:|UC \- 15\.2\.3|Tên use case:|Xem danh sách từ chối|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư kí |Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user xem các bài viết trong trạng thái chờ duyệt, đã duyệt hoặc bị từ chối<br>\-Cho phép duyệt bài viết trên feed quản lý vụ chốt|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng click Trang quản trị \-  quản lý feed \- Khách cần mua gấp<br>2\.Hệ thống hiển thị màn hình "Khách cần mua gấp", tab chờ duyệt<br>3\. Người dùng cick tab từ chối, <br>4\.Hệ thống chuyển sang tab "Từ chối"<br>4\.1\.Nếu click Button "Duyệt", bài viết được chuyển sang tab "đã duyệt" và hiển thị trên bảng tin\.|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

### Chia sẻ kỹ năng

Use case

#### Chờ duyệt

*Đặc tả use case*

|Use case ID:|UC \- 15\.3\.1|Tên use case:|Chờ duyệt|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký Đào tạo|Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user xem các bài viết trong trạng thái chờ duyệt<br>\-Cho phép duyệt hoặc từ chối bài viết trên feed quản lý vụ chốt|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng click Trang quản trị \-  quản lý feed \- chia sẻ kĩ năng<br>2\.Hệ thống hiển thị màn hình "Chia sẻ kĩ năng", tab chờ duyệt<br>2\.1 Nếu người dùng click "duyệt", bài viết được chuyển sang tab đã duyệt và hiển thị trên bảng tin\. Hệ thống thông báo đến user đăng bài bài viết đã được duyệt<br>2\.1 Nếu người dùng click "từ chối", bài viết được chuyển sang tab "từ chối"\.Hệ thống thông báo đến user đăng bài bài viết đã bị từ chối|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi thư ký xét duyệt trạng thái bài viết Thư viện Nhà Phố<br>|Thư ký trở lên Sửa \(Xét duyệt\) Trạng thái feed đào tạo<br>||Thư viện Nhà Phố<br>|Logging, StateUpdate||
|||Notification: Xảy ra khi thư ký cập nhật trạng thái bài viết|Hệ thống gửi thông báo đến người đăng bài||Tin hoạt động|||

#### Đã duyệt

*Đặc tả use case*

|Use case ID:|UC \- 15\.3\.2|Tên use case:|Đã duyệt|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký đào tạo|Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user xem các bài viết trong trạng thái bị từ chối<br>\-Cho phép duyệt bài viết trên feed quản lý vụ chốt|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng click Trang quản trị \-  quản lý feed \- Chia sẻ kĩ năng<br>2\.Hệ thống hiển thị màn hình "Chia sẻ kĩ năng", tab chờ duyệt<br>3\.Người dùng click "duyệt", bài viết được chuyển sang tab đã duyệt và hiển thị trên bảng tin\. <br>4\.Hệ thống thông báo đến user đăng bài bài viết đã được duyệt|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

#### Xem danh sách từ chối

*Đặc tả use case*

|Use case ID:|UC \- 15\.3\.3|Tên use case:|Xem danh sách từ chối|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký đào tạo|Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user xem các bài viết trong trạng thái chờ duyệt, đã duyệt hoặc bị từ chối<br>\-Cho phép duyệt bài viết trên feed quản lý vụ chốt|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng click Trang quản trị \-  quản lý feed \- Chia sẻ kĩ năng<br>2\.Hệ thống hiển thị màn hình "Chia sẻ kĩ năng", tab chờ duyệt<br>3\.Người dùng click tab từ chối, <br>4\.Hệ thống chuyển sang tab "Từ chối"<br>4\.1\.Nếu click button "Duyệt", bài viết được chuyển sang tab "đã duyệt" và hiển thị trên bảng tin\.|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

#### Search

*Đặc tả use case*

|Use case ID:|UC \- 15\.3\.4|Tên use case:|Search|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký đào tạo|Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user tìm kiếm nội dung trên feed |||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng click Trang quản trị \-  quản lý feed \- Chia sẻ kĩ năng<br>2\.Người dùng hập input vào text box, click icon tìm kiếm<br>3\.Hệ thống hiển thị kết quả tìm kiếm phù hợp|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với tiêu chí tìm kiếm|||
|Ưu tiên:|Low|||
|Tần suất sử dụng :|Low|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

#### Filter

*Đặc tả use case*

|Use case ID:|UC \- 15\.3\.5|Tên use case:|Filter|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký đào tạo|Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user tìm kiếm nội dung trên feed |||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng Click Trang quản trị \-  quản lý feed \- Chia sẻ kĩ năng<br>2\.Người dùng chọn các options từ drop list<br>3\.Hệ thống hiển thị kết quả tìm kiếm phù hợp|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với tiêu chí tìm kiếm|||
|Ưu tiên:|Low|||
|Tần suất sử dụng :|Low|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

### Thư viện kiến thức

Use case

### Thư viện đầu chủ 

Use case

### Thư viện trưởng phòng 

Use case

### Thư viện trợ lý

Use case

### Danh mục Feed

Use case

#### Filter loại feed

*Đặc tả use case*

|Use case ID:|UC \- 15\.8\.1|Tên use case:|Filter loại feed|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký đào tạo|Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user tìm kiếm các danh mục đào tạo|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng di chuyển đến trang quản trị<br>2\.Hệ thống mở màn hình "Trang quản trị"<br>3\.Người dùng chọn Quản lý feeds \- danh mục<br>4\.Hệ thống mở màn hình danh mục<br>5\.Người dùng chọn các options từ các field tìm kiếm<br>6\.Hệ thống hiển thị danh sách tìm kiếm phù hợp|||
|Luồng ngoại lệ:|Không có kết quả theo tiêu chí tìm kiếm|||
|Ưu tiên:|Low|||
|Tần suất sử dụng :|Low|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57 : Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi thư ký xem danh sách các loại danh mục đào tạo<br>|Thư ký trở lên xem các loại danh mục đào tạo<br>||Danh mục đào tạo<br>|Logging||
|||Xảy ra khi thư ký tìm kiếm các danh mục đào tạo theo loại danh mục|Thư ký trở lên tìm kiếm các danh mục đào tạo theo loại danh mục ||Danh mục đào tạo|Logging||

#### Search loại feed

*Đặc tả use case*

|Use case ID:|UC \- 15\.8\.2|Tên use case:|Search loại feed|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký đào tạo|Tác nhân phụ:|N/A|
|Mô tả:|- Cho phép user tìm kiếm các danh mục đào tạo|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng di chuyển đến trang quản trị<br>2\.Hệ thống mở màn hình "Trang quản trị"<br>3\.Người dùng chọn Quản lý feeds \- danh mục<br>4\.Hệ thống mở màn hình danh mục<br>5\.Người dùng nhập data vào Field tìm kiếm<br>6\.Hệ thống hiển thị danh sách tìm kiếm phù hợp|||
|Luồng ngoại lệ:|Không có kết quả theo tiêu chí tìm kiếm|||
|Ưu tiên:|Low|||
|Tần suất sử dụng :|Low|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký tìm kiếm các danh mục đào tạo với từ khoá|Thư ký trở lên tìm kiếm các danh mục đào tạo với từ khoá||Danh mục đào tạo|Logging||

#### Thêm danh mục

*Đặc tả use case*

|Use case ID:|UC \- 15\.8\.3|Tên use case:|Thêm danh mục|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký đào tạo|Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user thêm các danh mục đào tạo|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Truy cập vào trang quản trị <br>2\.Hệ thống mở màn hình trang quản trị<br>3\.Người dùng chọn danh mục, hệ thống mở màn hình danh mục<br>4\.Người dùng click button "Thêm mới", hệ thống mở màn hình thêm mới<br>5\.Người dùng nhập data hợp lệ vào các field, Click button "Lưu"<br>6\.Hệ thống lưu danh mục đã lưu|||
|Luồng ngoại lệ:||||
|Ưu tiên:|Low|||
|Tần suất sử dụng :|Low|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57 : Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký tạo mới danh mục đào tạo theo loại danh mục|Thư ký trở lên tìm kiếm các danh mục đào tạo với từ khoá||Danh mục đào tạo|Logging, Validate||
|||Xảy ra khi người dùng nhập sai thông tin|Hệ thống không tạo danh mục do người dùng chưa hợp lệ|||||

#### Sửa danh mục

*Đặc tả use case*

|Use case ID:|UC \- 15\.8\.4|Tên use case:|Sửa danh mục|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký đào tạo|Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user sửa thông tin các danh mục đào tạo|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng truy cập vào trang quản trị <br>2\.Hệ thống mở màn hình trang quản trị<br>3\.Người dùng chọn danh mục, hệ thống mở màn hình danh mục<br>4\.Người dùng click icon sửa của 1 danh mục, hệ thống mở màn hình sửa danh mục<br>5\.Người dùng nhập data hợp lệ vào các field,Click button "Lưu"<br>6\.Hệ thống lưu thông tin đã sửa vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:|Low|||
|Tần suất sử dụng :|Low|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký sửa danh mục đào tạo theo loại danh mục|Thư ký trở lên cập nhật các danh mục đào tạo||Danh mục đào tạo|Logging, Validate||

#### Xoá danh mục

*Đặc tả use case*

|Use case ID:|UC \- 15\.8\.5|Tên use case:|Xoá danh mục|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký đào tạo|Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user xoá các danh mục đào tạo|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.User truy cập vào trang quản trị <br>2\.Hệ thống mở màn hình trang quản trị<br>3\.User Chọn danh mục, hệ thống mở màn hình danh mục<br>4\.Người dùng click icon xoá của 1 danh mục, hệ thống mở pop\-up xác nhận<br>4\.1\.Nếu Click xác nhận, hệ thống xoá danh mục đã chọn<br>4\.2\.Nếu Click huỷ, hệ thống đóng pop\-up, danh mục không bị xoá|||
|Luồng ngoại lệ:||||
|Ưu tiên:|Low|||
|Tần suất sử dụng :|Low|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký xoá danh mục đào tạo theo loại danh mục|Thư ký trở lên xoá các danh mục đào tạo||Danh mục đào tạo|Logging, Validate||

## Quản lý kho hàng

Use case

### Sửa tin đăng

*Đặc tả use case*

|Use case ID:|UC \- 16\.1\.1|Tên use case:|Sửa tin đăng|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký Kho|||
|Mô tả:|- Cho phép user sửa tin đăng|||
|Điều kiện trước:|- Hệ thống đang ở trạng thái hoạt động<br>- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1. Hệ thống mở màn hình trang quản trị<br>2. User Click "kho hàng", hệ thống mở màn hình kho hàng<br>3. User chọn 1 tin đăng, Chọn "sửa tin đăng", hệ thống mở màn hình sửa tin đăng<br>4. User nhập data hợp lệ vào các Field, Click "Sửa tin"<br>5. Hệ thống lưu tin đã được sửa vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:|Low|||
|Tần suất sử dụng :|Low|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký sửa tin đăng|Thư ký trở lên cập nhật tin đăng kho tài nguyên||Tin đăng kho tài nguyên, BĐS kho tài nguyên|Logging, Validate||
|||Validate: Xảy ra khi thư ký nhập các trường thông tin không hợp lệ|Hệ thống từ chối cập nhật tin đăng do người dùng nhập thông tin không hợp lệ|||||
|||||||||

### Thay đổi trạng thái tin 

*Đặc tả use case*

|Use case ID:|UC \- 16\.1\.2|Tên use case:|Sửa trạng thái tin|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký Kho|Tác nhân phụ:|N/A|
|Mô tả:|- Cho phép user thay đổi trạng thái tin đăng |||
|Điều kiện trước:|- Hệ thống đang ở trạng thái hoạt động<br>- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1. Người dùng truy cập vào trang quản trị <br>2. Hệ thống mở màn hình trang quản trị<br>3. Người dùng click "kho hàng", hệ thống mở màn hình kho hàng<br>4. Màn hình hiển thị ở tab "Chờ duyệt"<br>    4\.1\. Nếu người dùng click "Chấp nhận" và tích vào checkbox, hệ thống chuyển tin đăng sang tab đã duyệt<br>    4\.2\. Nếu người dùng click "Từ chối" và điền lý do, hệ thống chuyển tin đăng sang tab từ chối|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|- Đối với các tin đăng bị trùng, hệ thống sẽ làm nổi bật SĐT chủ nhà và số sổ đỏ|||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký sửa trạng thái tin đăng|Thư ký trở lên cập nhật trạng thái tin đăng<br>||Tin đăng kho tài nguyên, BĐS kho tài nguyên|Logging, Validate, Notification||
|||Xảy ra khi thư ký nhập các trường thông tin không hợp lệ|Hệ thống từ chối cập nhật trạng thái tin đăng do người dùng nhập thông tin không hợp lệ|||||

### Filter kho hàng

*Đặc tả use case*

|Use case ID:|UC \- 16\.1\.3|Tên use case:|Filter danh sách theo tab|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký Kho|Tác nhân phụ:|N/A|
|Mô tả:|- Cho phép user lọc tin đăng theo tiêu chí|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1. Người dùng truy cập vào trang quản trị <br>2. Hệ thống mở màn hình trang quản trị<br>3. Người dùng click "kho hàng", hệ thống mở màn hình kho hàng<br>4. Màn hình hiên thị ở tab "Chờ duyệt"<br>    4\.1\.Nếu người dùng click tab "Đã duyệt", hệ thống chuyển tin sang tab "Đã duyệt'<br>    4\.2\.Nếu người dùng click tab "Từ chối" , hệ thống chuyển tin sang tab "Từ chối"<br>    4\.3\.Nếu người dùng click tab "Tự do', hệ thống chuyển tin sang tab "Tự do"<br>    4\.4\.Nếu người dùng click tab "Thùng rác' hệ thống chuyển tin sang tab "Thùng rác"<br>5. Người dùng nhập hoặc chọn data hợp lệ vào các Filter và trường sắp xếp theo thứ tự, hệ thống hiển thị kết quả tìm kiếm theo tiêu chí|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với tiêu chí tìm kiếm|||
|Ưu tiên:|Medium|||
|Tần suất sử dụng :|Medium|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký xem danh sách các tin đăng theo các trạng thái|Thư ký trở lên xem tin đăng theo trạng thái tin||Tin đăng kho tài nguyên, BĐS kho tài nguyên|Logging||
|||Xảy ra khi thư ký tìm kiếm danh sách các tin đăng theo các trạng thái bằng tiêu chí|Thư ký trở lên tìm kiếm tin đăng theo trạng thái tin bằng tiêu chí ||Tin đăng kho tài nguyên, BĐS kho tài nguyên|Logging, Filter||
|||Filter||||||

### Search kho hàng

*Đặc tả use case*

|Use case ID:|UC \- 16\.1\.3|Tên use case:|Search danh sách theo tab|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký Kho|Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user tìm tin đăng theo tiêu chí|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng truy câpj vào trang quản trị <br>2\.Hệ thống mở màn hình trang quản trị<br>3\.Người dùng click "kho hàng", hệ thống mở màn hình kho hàng<br>4\.Màn hình hiên thị ở tab "Chờ duyệt"<br>4\.1 Người dùng nếu click tab "Đã duyệt", hệ thống chuyển tin sang tab "Đã duyệt'<br>4\.2 Người dùng nếu click tab "Từ chối" , hệ thống chuyển tin sang tab "Từ chối"<br>4\.3 Người dùng nếu Click tab "Tự do', hệ thống chuyển tin sang tab "Tự do"<br>4\.4 Người dùng nếu Click tab "Thùng rác' hệ thống chuyển tin sang tab "Thùng rác"<br>5\.Người dùng nhập data hợp lệ vào textbox, hệ thống hiển thị kết quả tìm kiếm theo tiêu chí|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với tiêu chí tìm kiếm|||
|Ưu tiên:|Medium|||
|Tần suất sử dụng :|Medium|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký tìm kiếm danh sách các tin đăng theo các trạng thái bằng từ kkhoá|Thư ký trở lên tìm kiếm tin đăng theo trạng thái tin bằng từ khoá||Tin đăng kho tài nguyên, BĐS kho tài nguyên|Search||
|||Search||||||

## Quản lý tin chính chủ \(Thiếu mô tả thay đổi trạng thái tin, tạo, sửa, xoá\)

Use case design

### Xem danh sách tin chính chủ

*Đặc tả use case*

|Use case ID:|UC \- 17\.1|Tên use case:|Xem danh sách tin chính chủ|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký kho|Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user xem chính chủ|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng Click Trang quản trị , hệ thống mở màn hình trang quản trị  <br>2\.Người dùng click tin chính chủ, hệ thống mở màn hình tin chính chủ|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký xem danh sách các tin chính chủ|Thư ký trở lên xem tin chính chủ||Tin chính chủ|Logging||
|||Xảy ra khi thư ký tạo tin chính chủ|Thư ký trở lên tạo tin chính chủ||Tin chính chủ|Logging, Validate||
|||Validate: Xảy ra khi thư ký nhập sai thông tin dữ liệu|Hệ thống từ chối tạo tin chính chủ do người dùng nhập sai thông tin|||||
|||Xảy ra khi thư ký xem danh sách các tin chính chủ theo loại tin|Thư ký trở lên xem tin chính chủ theo loại tin||Tin chính chủ|||

## Quản lý nhân sự 

### Đánh giá đầu chủ 

*Đặc tả use case*

|Use case ID:|UC \- |Tên use case:||
|---|---|---|---|
|Tác giả:|Quỳnh Anh|Ngày:|11/12/2024|
|Các tác nhân chính:|Thư ký Hành chính nhân sự|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user xem các tài khoản online và thống kê phòng|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư ký|||
|Luồng chính:|1\.Người dùng Click Trang quản trị \- Tài khoản Online<br>2\.Hệ thống mở tab Trang quản trị<br>3\.Người dùng chọn các tiêu chí phù hợp<br>4\.Hệ thống hiển thị kết quả tìm kiếm|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với tiêu chí tìm kiếm|||
|Ưu tiên:|Medium|||
|Tần suất sử dụng :|Medium|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi thư ký tìm kiếm người dùng đang hoạt động trên hệ thống bằng các tiêu chí<br>|Thư ký trở lên tìm kiếm người dùng đang hoạt động bằng các tiêu chí<br>|Account\.operating\_time<br>Account\.department\_id<br>|Account<br>|Filter,<br>logging||
|||Filter: xảy ra khi người dùng tìm kiếm bằng các tiêu chí<br>|Hệ thống đọc các tài khoản online theo yêu cầu \(tiêu chí\)|Account\.operating\_time<br>Account\.department\_id|Account|||
|||Xảy ra khi thư ký xem danh sách người dùng đang hoạt động trên hệ thống<br>|Thư ký trở lên xem danh sách người dùng đang hoạt động<br>|Account\.operating\_time|Account|Logging||

### Quản lý tài khoản thành viên

Use case

#### Search thành viên

*Đặc tả use case*

|Use case ID:|UC \- 18\.1|Tên use case:|Search thành viên|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user tìm kiếm thành viên có trên CSDL|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng Click Trang quản trị , hệ thống mở màn hình trang quản trị  <br>2\.Người dùng click thành viên, hệ thống mở màn hình thành viên<br>3\.Người dùng nhập data vào text box tìm kiếm, hệ thống hiển thị kết quả tìm kiếm theo tiêu chí|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với tiêu chí tìm kiếm|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký xem danh sách các thành viên|Thư ký trở lên xem danh sách thành viên<br>||Account, Profile, Authentication|Logging||
|||Xảy ra khi thư ký xem danh sách các thành viên theo danh mục|Thư ký trở lên xem danh sách thành viên theo trạng thái|Account\.status|Account, Profile, Authentication|Logging||
|||Xảy ra khi thư ký tìm kiếm thành viên bằng từ khoá|Thư ký trở lên tìm kiếm thành viên theo trạng thái||Account, Profile, Authentication|Search||
|||Search||||||

#### Filter thành viên

*Đặc tả use case*

|Use case ID:|UC \- 18\.2|Tên use case:|Filter thành viên|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user tìm kiếm thành viên có trên CSDL|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng Click Trang quản trị , hệ thống mở màn hình trang quản trị  <br>2\.Người dùng click thành viên, hệ thống mở màn hình thành viên<br>2\.1 Nếu Click tab " Sắp hết hạn", hệ thống mở màn hình "Sắp hết hạn"<br>2\.2 Nếu Click tab " Đã khoá", hệ thống mở màn hình "Đã khoá"<br>2\.3 Nếu Click tab "Chưa kích hoạt", hệ thống mở màn hình "Chưa kích hoạt"|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với tiêu chí tìm kiếm|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký tìm kiếm thành viên bằng các tiêu chí|Thư ký trở lên tìm kiếm thành viên theo các tiêu chí||Account, Profile, Authentication|Filter||
|||Filter: Xảy ra khi thư ký chọn 1 trong các tiêu chí để tìm kiếm<br>|Hệ thống đọc các tài khoản theo yêu cầu \(tiêu chí\)|Account\.role\_id<br>Account\.organize\_id<br>Account\.department\_id|Account|||

#### Thêm thành viên

*Đặc tả use case*

|Use case ID:|UC \- 18\.3|Tên use case:|Thêm tài khoản|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user thêm mới thành viên|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng Click Trang quản trị , hệ thống mở màn hình trang quản trị  <br>2\.Người dùng click thành viên, hệ thống mở màn hình thành viên<br>3\.Người dùng click "thêm mới", hệ thống mở màn hình thêm mới<br>4\.Người dùng nhập data hợp lệ vào các Field, Click "tạo"<br>5\.Hệ thống lưu account vừa tạo vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký tạo tài khoản |Thư ký trở lên tạo tài khoản ||Account, Profile, Authentication|Logging,<br>Validate||
|||Validate: Xảy ra khi người dùng nhập thông tin không hợp lệ|Hệ thống từ chối tạo tài khoản do người dùng nhập thông tin không hợp lệ||Account, Profile, Authentication|||

#### Sửa tài khoản

*Đặc tả use case*

|Use case ID:|UC \- 18\.4|Tên use case:|Sửa tài khoản|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user sửa thông tin, chức danh, trạng thái của thành viên|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng click Trang quản trị , hệ thống mở màn hình trang quản trị  <br>2\.Người dùng click thành viên, hệ thống mở màn hình thành viên<br>3\.Người dùng click"Xem/sửa" tài khoản, hệ thống mở màn hình sửa tài khoản<br>4\.Người dùng nhập input hợp lệ vào các Field, Click "lưu"<br>5\.Hệ thống lưu thông tin đã thay đổi vào CSDL|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với tiêu chí tìm kiếm|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký sửa tài khoản |Thư ký trở lên sửa tài khoản |Account\.id|Account, Profile, Authentication|Logging,<br>Validate||
|||Validate: Xảy ra khi người dùng nhập thông tin không hợp lệ|Hệ thống từ chối cập nhật do người dùng nhập thông tin không hợp lệ||Account, Profile, Authentication|||
|||Xảy ra khi thư ký khoá tài khoản thành viên|Thư ký trở lên Khóa tài khoản không giới hạn|Account\.status|Account|Logging, Transfer Tin đăng||
|||||||||
|||Xảy ra khi thư ký dừng hợp tác với thành viên|Thư ký trở lên Kick \(dừng hợp tác\) tài khoản|Account\.status|Account|Logging||
|||Xảy ra khi thư ký gia hạn tài khoản thành viên |Thư ký trở lên thay đổi \(Gia hạn\) tất cả thành viên có chức danh ứng viên, học viên, chuyên viên|Account\.date\_expired|Account|Logging||
|||Xảy ra khi thư ký cập nhật huy hiệu cho tài khoản thành viên|Thư ký trở lên Cập nhật huy hiệu cho tài khoản người dùng|Account\.achievement\_id|Account|Logging||
|||Xảy ra khi thư ký reset lại mật khẩu cho thành viên|Thư ký Cấp lại mật khẩu user \(không hạn chế\)|Authentication\.password|Authentication|Logging||

#### Sửa chức danh thành viên

*Đặc tả use case*

|Use case ID:|UC \- 18\.4\.1|Tên use case:|Sửa chức danh thành viên|
|---|---|---|---|
|Tác giả:|NamNP|Ngày:|11/07/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|Cho phép thư ký sửa chức danh của thành viên|||
|Điều kiện trước:|Hệ thống đang ở trạng thái hoạt động<br>Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1. Người dùng truy cập Trang quản trị <br>2. Hệ thống mở màn hình trang quản trị  <br>3. Người dùng bấm "\.\.\." của thành viên<br>4. Hệ thống hiển thị tuỳ chọn đối với thành viên<br>5. Người dùng chọn "Thay đổi chức danh"<br>6. Hệ thống mở form thay đổi chức danh <br>7. Người dùng chọn chức danh phù hợp và bấm "Lưu"<br>8. Hệ thống lưu thông tin đã thay đổi vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký sửa chức danh tài khoản của thành viên |Thư ký trở lên Thay đổi \(Nâng hạ\) chức danh tài khoản \(nhiều cấp chức danh\)\.|Account\.role\_id|Account|Logging||

#### Xem đánh giá đầu chủ

*Đặc tả use case*

|Use case ID:|UC \- 18\.5|Tên use case:|Đánh giá đầu chủ|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user xem đánh giá của các account có chức danh đầu chủ|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng click Trang quản trị , hệ thống mở màn hình trang quản trị  <br>2\.Người dùng click thành viên, hệ thống mở màn hình thành viên<br>3\.Người dùng Filter chức danh đầu chủ, hệ thống hiển thị danh sách account đầu chủ<br>4\.Người dùng click xem đánh giá, hệ thống mở màn hình đánh giá|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với tiêu chí tìm kiếm|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký xem đánh giá của thành viên có chức danh đầu chủ trở lên|Thư ký trở lên Xem đánh giá của các thành viên có chức danh đầu chủ trở lên|Đánh giá đầu chủ\.user\_id|Account, Đánh giá đầu chủ<br>|Logging||

#### Gán/Gỡ huy hiệu \-\-\-\-\-\> bỏ gán huy hiệu \(11/2/25\)

*Đặc tả use case*

|Use case ID:|UC \- 18\.6|Tên use case:|Gán huy hiệu|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user gán huy hiệu các account |||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng Click Trang quản trị , hệ thống mở màn hình trang quản trị  <br>2\.Người dùng click thành viên, hệ thống mở màn hình thành viên<br>3\.Người dùng chọn gán huy hiệu của 1 account, hệ thống hiển thị danh sách gán huy hiệu<br>4\.Người dùng chọn huy hiệu từ droplist, hệ thống lưu huy hiệu đã chọn|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với tiêu chí tìm kiếm|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký gán huy hiệu cho tài khoản thành viên|Thư ký trở lên \(Cập nhật\) gán huy hiệu cho tài khoản thành viên|Account\.achievement\_id|Account<br>|Logging||
|||Xảy ra khi thư ký gỡ huy hiệu cho tài khoản thành viên|Thư ký trở lên \(Cập nhật\) gỡ huy hiệu cho tài khoản thành viên|Account\.achievement\_id|Account<br>|Logging||

#### Thêm vào ban đào tạo

*Đặc tả use case*

|Use case ID:|UC \- 18\.7|Tên use case:|Thêm vào ban đào tạo|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user thêm account vào ban đào tạo|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng Click Trang quản trị , hệ thống mở màn hình trang quản trị  <br>2\.Người dùng click thành viên, hệ thống mở màn hình thành viên<br>3\.Người dùng click thêm vào ban đào tạo, hệ thống thêm account đã chọn sang tab "Ban đào tạo"|||
|Luồng ngoại lệ:||||
|Ưu tiên:|Low|||
|Tần suất sử dụng :|low|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG57: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký cập nhật trạng thái thành viên ban đào tạo<br>|Thư ký trở lên \(Cập nhật\) trạng thái thành viên ban đào tạo của thành viên|Account\.is\_training\_member\_status|Account<br>|Logging||

#### Kick khỏi ban đào tạo

*Đặc tả use case*

|Use case ID:|UC \- 18\.8|Tên use case:|Kick khỏi ban đào tạo|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user xoá account khỏi ban đào tạo|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí<br>\- Account có trong ban đào tạo|||
|Luồng chính:|1\.Người dùng Click Trang quản trị , hệ thống mở màn hình trang quản trị  <br>2\.Người dùng click thành viên, hệ thống mở màn hình thành viên<br>3\.Người dùng click tab "Ban đào tạo", hệ thống chuyển sang tab ban đào tạo<br>4\.Người dùng chọn Kick khỏi ban đào tạo, hệ thống chuyển account đã chọn sang tab "Thành viên"|||
|Luồng ngoại lệ:||||
|Ưu tiên:|Low|||
|Tần suất sử dụng :|low|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG30: Kick out training member success\!|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký kick thành viên khỏi ban đào tạo<br>|Thư ký trở lên \(Cập nhật\) gỡ trạng thái thành viên ban đào tạo của thành viên|Account\.is\_training\_member\_status|Account<br>|Logging||

#### Khoá đăng tin Đầu chủ \(New 2\.3\)

*Đặc tả use case*

|Use case ID:|UC \- 18\.9|Tên use case:|Khoá đăng tin|
|---|---|---|---|
|Tác giả:|NamNP|Ngày:|11/11/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|Thư ký khoá chức năng đăng tin của đầu chủ trong 1 khoảng thời gian nhất định|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1. Người dùng Click Trang quản trị , hệ thống mở màn hình trang quản trị  <br>2. Người dùng click thành viên, hệ thống mở màn hình thành viên<br>3. Bấm tuỳ chọn của thành viên<br>4. Hệ thống hiển thị danh sách các tuỳ chọn<br>5. Người dùng chọn "Khoá đăng tin"<br>6. Hệ thống hiển thị form mốc thời gian<br>7. Người dùng chọn thời gian và bấm xác nhận<br>8. Hệ thống lưu vào CSDL, thông báo thành công và gửi thông báo đến đầu chủ bị khoá|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

#### Gia hạn tài khoản thành viên \(Chưa làm\)

*Đặc tả use case*

|Use case ID:|UC \- 18\.9|Tên use case:|Khoá đăng tin|
|---|---|---|---|
|Tác giả:|NamNP|Ngày:|11/11/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|Thư ký khoá chức năng đăng tin của đầu chủ trong 1 khoảng thời gian nhất định|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1. Người dùng Click Trang quản trị , hệ thống mở màn hình trang quản trị  <br>2. Người dùng click thành viên, hệ thống mở màn hình thành viên<br>3. Bấm tuỳ chọn của thành viên<br>4. Hệ thống hiển thị danh sách các tuỳ chọn<br>5. Người dùng chọn "Khoá đăng tin"<br>6. Hệ thống hiển thị form mốc thời gian<br>7. Người dùng chọn thời gian và bấm xác nhận<br>8. Hệ thống lưu vào CSDL, thông báo thành công và gửi thông báo đến đầu chủ bị khoá|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

### Thống kê Phòng

#### Search phòng

*Đặc tả use case*

|Use case ID:|UC \- 14\.2\.1|Tên use case:|Search phòng|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|User Thư kí |Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user xem các tài khoản online và thống kê phòng|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư ký|||
|Luồng chính:|1. Người dùng click Trang quản trị<br>2. Hệ thống hiển thị Trang quản trị<br>3. Người dùng click tab thống kê phòng<br>4. Nngười dùng nhập data vào field tìm kiếm<br>5. Hệ thống hiển thị kết quả tìm kiếm|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với tiêu chí tìm kiếm|||
|Ưu tiên:|Medium|||
|Tần suất sử dụng :|Medium|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi thư ký tìm kiếm phòng ban bằng từ khoá<br>|Thư ký trở lên tìm kiếm các phòng ban bằng từ khoá|Repartment\.department\_id<br>|Department<br>|Logging||

#### Filter phòng trong chi nhánh

*Đặc tả use case*

|Use case ID:|UC \- 14\.2\.1|Tên use case:|Filter phòng trong chi nhánh|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|User Thư kí |Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user xem các tài khoản online và thống kê phòng|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư ký|||
|Luồng chính:|1. Người dùng click Trang quản trị<br>2. Hệ thống hiển thị Trang quản trị<br>3. Người dùng click tab thống kê phòng<br>4. Người dùng chọn các tiêu chí phù hợp<br>5. Hệ thống hiển thị kết quả tìm kiếm|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với tiêu chí tìm kiếm|||
|Ưu tiên:|Medium|||
|Tần suất sử dụng :|Medium|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|<br>||Xảy ra khi thư ký xem danh sách các phòng ban trong công ty<br>|Thư ký trở lên xem các phòng ban trong công ty|Department\.department\_id|Department<br>|Logging||
|<br>||Xảy ra khi thư ký tìm kiếm phòng ban theo các chi nhánh<br>|Thư ký trở lên tìm kiếm các phòng ban theo các chi nhánh|Department\.department\_id, Department\.organize\_id|Department<br>|Logging,<br>Filter<br>||
|||Filter: Xảy ra khi thư ký chọn các phòng ban trong chi nhánh|Hệ thống đọc các phòng ban trong chi nhánh theo yêu cầu của người dùng|Department\.department\_id, Department\.organize\_id|Department|||

### Dữ liệu thành viên

#### Khối

Screen Design

Đặc tả use case

|Use case ID:|UC \- 22\.2\.1|Tên use case:|Thêm khối|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng tạo thêm khối|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:<br>|1\.Người dùng truy cập vào "trang quản trị", hệ thống hiển thị trang quản trị<br>2\.Người dùng chọn "khối", hệ thống chuyển đến tab "Quản lý khối"<br>3\.Người dùng chọn thêm mới, hệ thống mở pop\-up thêm mới<br>4\.Nhập input hợp lệ vào các Field,chọn lưu<br>5\.Hệ thống thêm khối vừa tạo vào CSDL|||
|Luồng ngoại lệ:|Không có kết quả tìm kiếm phù hợp|||
|Ưu tiên:|Medium|||
|Tần suất sử dụng :|Medium|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký trở lên tạo khối|Thư ký trở lên tạo khối||Khối|Logging, Validate||
|||Validate: Xảy ra khi người dùng nhập sai dữ liệu|Hệ thống từ chối tạo khối do người dùng nhập sai dữ liệu|||||
|||Xảy ra khi thư ký trở lên sửa khối|Thư ký trở lên sửa khối||Khối|Logging, Validate||
|||Validate: Xảy ra khi người dùng nhập sai dữ liệu|Hệ thống từ chối cập nhật khối do người dùng nhập sai dữ liệu||Khối|||
|||Xảy ra khi thư ký trở lên xoá khối|Thư ký trở lên xoá khối||Khối|Logging||
|||Xảy ra khi thư ký trở lên xem danh sách khối|Thư ký trở lên xem danh sách khối||Khối|Logging||
|||Xảy ra khi thư ký trở lên tìm kiếm khối bằng từ khoá|Thư ký trở lên tìm kiếm khối bằng từ khoá||Khối|Search||
|||Search: Xảy ra khi thư ký trở lên tìm kiếm khối bằng từ khoá|Hệ thống đọc từ khoá của người dùng và hiển thị dữ liệu theo từ khoá||Khối|||

#### Phòng

*Screen Design*

Đặc tả use case

|Use case ID:|UC \- 22\.3\.1|Tên use case:|Thêm phòng|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng thêm phòng|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:<br>|1\.Người dùng truy cập vào trang quản trị, hệ thống hiển thị "trang quản trị"<br>2\.Người dùng chọn "Dữ liệu thành viên \- phòng", hệ thống chuyển đến tab phòng<br>3\.Người dùng chọn thêm mới, hệ thống mở ra pop\-up thêm mới<br>4\.Người dùng nhập input hợp lệ vào các field, chọn lưu<br>5\.Hệ thống lưu chi nhánh vừa mới tạo vào CSDL|||
|Luồng ngoại lệ:|Không có kết quả tìm kiếm phù hợp|||
|Ưu tiên:|Medium|||
|Tần suất sử dụng :|Medium|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký trở lên tạo Phòng|Thư ký trở lên tạo Phòng||Phòng|Logging, Validate||
|||Validate: Xảy ra khi người dùng nhập sai dữ liệu|Hệ thống từ chối tạo phòng do người dùng nhập sai dữ liệu||Phòng|||
|||Xảy ra khi thư ký trở lên sửa phòng|Thư ký trở lên sửa phòng||Phòng|Logging, Validate||
|||Validate: Xảy ra khi người dùng nhập sai dữ liệu|Hệ thống từ chối cập nhật phòng do người dùng nhập sai dữ liệu||Phòng|||
|||Xảy ra khi thư ký trở lên xoá phòng|Thư ký trở lên xoá phòng||Phòng|Logging||
|||Xảy ra khi thư ký trở lên xem danh sách phòng|Thư ký trở lên xem danh sách phòng||Phòng|Logging||
|||Xảy ra khi thư ký trở lên tìm kiếm phòng bằng từ khoá|Thư ký trở lên tìm kiếm phòng bằng từ khoá||Phòng|Search||
|||Search: Xảy ra khi thư ký trở lên tìm kiếm phòng bằng từ khoá|Hệ thống đọc từ khoá của người dùng và hiển thị dữ liệu theo từ khoá||Phòng|||

#### Nhóm

*Screen design*

Đặc tả use case

|Use case ID:|UC \- 22\.4\.1|Tên use case:|Thêm nhóm|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng thêm nhóm|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:<br>|1\.Người dùng truy cập vào trang quản trị, hệ thống mở trang quản trị<br>2\.Người dùng chọn nhóm, chuyển đến tab "Quản lý nhóm"<br>3\.Người dùng chọn "Thêm mới", hệ thống hiển thị pop\-up sửa nhóm<br>4\.Người dùng nhập input hợp lệ, chọn "Lưu"<br>5\.Hệ thống lưu nhóm mới sửa vào  CSDL<br>|||
|Luồng ngoại lệ:||||
|Ưu tiên:|Medium|||
|Tần suất sử dụng :|Medium|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký trở lên tạo nhóm |Thư ký trở lên tạo nhóm||Nhóm|Logging, Validate||
|||Validate: Xảy ra khi người dùng nhập sai dữ liệu|Hệ thống từ chối tạo nhóm do người dùng nhập sai dữ liệu||Nhóm|||
|||Xảy ra khi thư ký trở lên sửa nhóm|Thư ký trở lên sửa nhóm||Nhóm|Logging, Validate||
|||Validate: Xảy ra khi người dùng nhập sai dữ liệu|Hệ thống từ chối cập nhật nhóm do người dùng nhập sai dữ liệu||Nhóm|||
|||Xảy ra khi thư ký trở lên xoá nhóm|Thư ký trở lên xoá nhóm||Nhóm|Logging||
|||Xảy ra khi thư ký trở lên xem danh sách nhóm|Thư ký trở lên xem danh sách nhóm||Nhóm|Logging||
|||Xảy ra khi thư ký trở lên tìm kiếm nhóm bằng từ khoá|Thư ký trở lên tìm kiếm nhóm bằng từ khoá||Nhóm|Search||
|||Search: Xảy ra khi thư ký trở lên tìm kiếm nhóm bằng từ khoá|Hệ thống đọc từ khoá của người dùng và hiển thị dữ liệu theo từ khoá||Nhóm|||

#### Huy hiệu

Đặc tả use case

|Use case ID:|UC \- 22\.5\.1|Tên use case:|Thêm huy hiệu|
|---|---|---|---|
|Tác giả:|Quỳnh Anh|Ngày:|11/02/2025|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng thêm danh sách huy hiệu vào hệ thống|||
|Điều kiện trước:<br>|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:<br>|1\.Người dùng truy cập vào trang quản trị, hệ thống hiển thị trang quản trị<br>2\.Người dùng chọn huy hiệu, hệ thống hiển thị tab quản lý huy hiệu<br>3\.Người dùng chọn thêm mới, hệ thống mở màn hình thêm mới: phân theo năm và tên huy hiệu<br>4\.Người dùng nhập input hợp lệ, chọn "thêm"<br>5\.Huy hiệu mới được lưu vào CSDL|||
|Luồng ngoại lệ:|Không có kết quả tìm kiếm phù hợp|||
|Ưu tiên:|Low|||
|Tần suất sử dụng :|Low|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký trở lên tạo huy hiệu|Thư ký trở lên tạo huy hiệu||Huy hiệu|Logging, Validate||
|||Validate: Xảy ra khi người dùng nhập sai dữ liệu|Hệ thống từ chối tạo huy hiệu do người dùng nhập sai dữ liệu||Huy hiệu|||
|||Xảy ra khi thư ký trở lên sửa huy hiệu|Thư ký trở lên sửa huy hiệu||Huy hiệu|Logging, Validate||
|||Validate: Xảy ra khi người dùng nhập sai dữ liệu|Hệ thống từ chối cập nhật huy hiệu do người dùng nhập sai dữ liệu||Huy hiệu|||
|||Xảy ra khi thư ký trở lên xoá huy hiệu|Thư ký trở lên xoá huy hiệu||Huy hiệu|Logging||
|||Xảy ra khi thư ký trở lên xem danh sách huy hiệu|Thư ký trở lên xem danh sách huy hiệu||Huy hiệu|Logging||
|||Xảy ra khi thư ký trở lên tìm kiếm huy hiệu bằng từ khoá|Thư ký trở lên tìm kiếm huy hiệu bằng từ khoá||Huy hiệu|Search||
|||Search: Xảy ra khi thư ký trở lên tìm kiếm bằng từ khoá|Hệ thống đọc và hiển thị dữ liệu theo từ khoá||Huy hiệu|||

#### Gán huy hiệu 

|Use case ID:|UC \- |Tên use case:|Gán huy hiệu|
|---|---|---|---|
|Tác giả:|Quỳnh Anh|Ngày:|11/02/2025|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|Cho phép người dùng gán huy hiệu cho thành viên|||
|Điều kiện trước:<br>|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:<br>|1\.Người dùng truy cập vào trang quản trị, hệ thống hiển thị trang quản trị<br>2\.Người dùng chọn huy hiệu, hệ thống hiển thị tab quản lý huy hiệu<br>3\.Người dùng chọn một huy hiệu cần gán, ấn "tương tác", chọn "gán huy hiệu"<br>4\.Hệ thống hiển thị ô tìm kiếm tên thành viên \(có kèm theo list đề xuất\)<br>5\.Người dùng tìm kiếm tên và chọn úng thành viên cần gán huy hiệu\. Ấn "Lưu" để kết thúc|||
|Luồng ngoại lệ:|Không có kết quả tìm kiếm phù hợp|||
|Ưu tiên:|Low|||
|Tần suất sử dụng :|Low|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

## Quản lý tuyển dụng \(Ứng viên vòng 0 \+ Mã giới thiệu\)

### QL ứng viên vòng 0

*use case*

#### Search danh sách ứng viên

*Đặc tả use case*

|Use case ID:|UC \- 19\.1|Tên use case:|Search danh sách ứng viên vòng 0|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user tìm kiếm ứng viên đã được thêm|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng Click Trang quản trị , hệ thống mở màn hình trang quản trị  <br>2\.Người dùng click QL ứng viên vòng 0, hệ thống mở màn hình ứng viên vòng 0<br>3\.Người dùng nhập data hợp lệ vào field tìm kiếm, hệ thống hiển thị danh sách theo tiêu chí|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với tiêu chí tìm kiếm|||
|Ưu tiên:|Medium|||
|Tần suất sử dụng :|Medium|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký xem danh sách ứng viên vòng 0<br>|Thư ký trở lên xem danh sách ứng viên vòng 0<br>||Ứng viên vòng 0|Logging||
|||Xảy ra khi thư ký tìm kiếm ứng viên vòng 0 bằng từ khoá|Thư ký trở lên tìm kiếm ứng vòng 0 bằng từ khoá||Ứng viên vòng 0|Logging, Search||
|||Search: Xảy ra khi thư ký tìm kiếm bằng từ khoá|Hệ thống đọc và hiển thị các dữ liệu khớp với từ khoá||Ứng viên vòng 0|||

#### Filter danh sách ứng viên

*Đặc tả use case*

|Use case ID:|UC \- 19\.2|Tên use case:|Filter danh sách ứng viên vòng 0|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user tìm kiếm ứng viên đã được thêm|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng Click Trang quản trị , hệ thống mở màn hình trang quản trị  <br>2\.Người dùng click QL ứng viên vòng 0, hệ thống mở màn hình ứng viên vòng 0<br>3\.Người dùng Filter chi nhánh/phòng ban, hệ thống hiển thị danh sách theo tiêu chí|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với tiêu chí tìm kiếm|||
|Ưu tiên:|Medium|||
|Tần suất sử dụng :|Medium|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký tìm kiếm ứng viên vòng 0 bằng các tiêu chí|Thư ký trở lên tìm kiếm ứng viên vòng 0 bằng các tiêu chí|Account\.department\_id, Account\.organize\_id, Ứng viên vòng 0\.user\_id|Account, Ứng viên vòng 0|Filter||
|||Filter: Xảy ra khi thư ký chọn 1 trong các tiêu chí để tìm kiếm<br>|Hệ thống đọc các ứng viên theo yêu cầu \(tiêu chí\)|Account\.department\_id, Account\.organize\_id|Account, Ứng viên vòng 0|||

#### Xem trùng của 1 ứng viên

*Đặc tả use case*

|Use case ID:|UC \- 19\.3|Tên use case:|Xem trùng của 1 ứng viên|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký |Tác nhân phụ:|N/A|
|Mô tả:|\-Cho phép user xem các ứng viên đã thêm có thông tin trùng nhau|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí|||
|Luồng chính:|1\.Người dùng Click Trang quản trị , hệ thống mở màn hình trang quản trị  <br>2\.Người dùng click QL ứng viên vòng 0, hệ thống mở màn hình ứng viên vòng 0<br>3\.Người dùng click "Xem trùng", hệ thống hiển thị danh sách ứng viên trùng thông tin|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với tiêu chí tìm kiếm|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|- Ứng viên bị trùng sẽ được bôi đỏ phần trùng như CCCD, SĐT|||
|Tin nhắn thông báo :||||

*Activity diagram*

### Quản lý giới thiệu

*Đặc tả use case*

|Use case ID:|UC\-20|Tên use case:|Mã giới thiệu|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|22/04/2024|
|Các tác nhân chính:|Thư ký|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép tạo mã giới thiệu mới, account mới có thể nhập mã giới thiệu\.|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền Thư kí trở lên|||
|Luồng chính:|1\. Người dùng Click chọn Trang quản trị \-  mã giới thiệu<br>2\.Người dùng click button "Thêm mới", Hệ thống mở màn hình tạo mã giới thiệu<br>3\.Người dùng nhập các data hợp lệ vào các Field<br>4\.Người dùng click "tạo mã"<br>|||
|Luồng mở rộng:||||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG38: Tạo mã giới thiệu thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi thư ký xem danh sách mã giới thiệu<br>|Thư ký trở lên xem mã giới thiệu đã tạo||Mã giới thiệu|Logging||
|||Xảy ra khi thư ký tạo mã giới thiệu|Thư ký trở lên tạo mã giới thiệu||Mã giới thiệu|Logging||

## 

# [5 \- SRS Khonhapho website \- Trang quản trị](https://v4cueke6gq8.sg.larksuite.com/wiki/Sz5zw1uLHiTUSgkxF28lr3QSgLe)



