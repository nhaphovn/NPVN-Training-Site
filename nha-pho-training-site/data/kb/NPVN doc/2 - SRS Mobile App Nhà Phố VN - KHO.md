# 2 \- SRS Mobile App Nhà Phố VN \- KHO

# [SRS Mobile App Nhà Phố VN](https://v4cueke6gq8.sg.larksuite.com/docx/Tr8ZdymOjo3Jb1x2GhMle6CNgNR)

# II\.** Quản lý kho**

## **Kho tài nguyên**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Chat|Button|Không||Bấm để chuyển sang màn hình chat|
|3|Lý do không lọc diện tích/Mặt tiền/Hướng|Link|Không||Bấm để hiện cửa sổ các lý do|
|4|Đăng tin|Button|Không||Chuyển sang màn hình đăng tin|
|5|Tab danh sách \(Mặc định\)|Button|Không||Hiển thị danh sách tin đăng kho tài nguyên|
|6|Tab chi tiết|Button|Không||Hiển thị chi tiết tin đăng kho tài nguyên|
|7|Tab đã lưu|Button|Không||Hiển thị danh sách tin đăng kho tài nguyên đã lưu|
|8|Bộ lọc icon|Button|Không||Bấm để hiển thị cửa sổ lọc các tiêu chí|
|9|Ẩn icon|Button|Không||Bấm để hiển thị cửa sổ bỏ chọn các tiêu đề|
|10|Search icon|Button|Không||Bấm để hiển thị màn hình tìm kiếm|
|11|Lọc tiêu chí|Button|Không||Bấm để hiển thị danh sách tiêu chí|
|12|Lưu icon|Button|Không||Bấm để hiển thị cửa sổ chọn bộ sưu tập để lưu|
|13|Đặt lịch icon|Button|Không||Bấm để hiển thị cửa sổ đặt lịch|
|14|Xem icon|Button|Không||Bấm để hiển thị chi tiết tin đăng|

### **Search Kho tài nguyên**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|Không||Bấm để quay lại trang trước đó|
|2|Nhập thông tin tìm kiếm|Textbox<br>|Không|varchar\(100\)|Nhâp từ khoá để hệ thống hiển thị danh sách gợi ý|

**Use case Specification**

|**Use Case ID**||**UC\-3\.3**|**Use Case Name**||Search kho tài nguyên|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**3/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng tìm kiếm kho tài nguyên||||
|**Pre\-Condition**||Trong hệ thống có tin đăng khớp với từ khoá||||
|**Main Flows**||1. Người dùng bấm vào Search icon trong màn hình kho tài nguyên<br>2. Hệ thống hiển thị màn hình search<br>3. Người dùng nhập từ khoá<br>4. Hệ thống di chuyển sang màn hình kho tài nguyên và hiển thị các kết quả khớp với từ khóa||||
|**Exception Flows**||||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

### **Filter Kho tài nguyên**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Hiện trạng|Dropdownlist|Không||Bấm chọn hiện trạng bđs muốn lọc|
|3|Loại hình|Dropdownlist|Không||Bấm chọn loại hình bđs muốn lọc|
|4|Tỉnh/Thành phố|Dropdownlist|Không||Bấm chọn tỉnh/thành phố muốn lọc|
|5|Quận/Huyện|Dropdownlist|Không||Bấm chọn quận/huyện muốn lọc|
|6|Đường/Phố|Dropdownlist|Không||Bấm chọn đường/phố muốn lọc|
|7|Giá tối thiểu|Textbox|Không|int|Điền mức giá tối thiểu|
|8|Đơn vị|Dropdownlist|Không||Bấm chọn loại đơn vị tiền tệ|
|9|Giá tối đa|Textbox|Không|int|Điền mức giá tối đa|
|10|Khoảng giá|Dropdownlist|Không||Bấm chọn các mức giá muốn lọc|
|11|Đặc điểm BĐS|Dropdownlist|Không||Bấm chọn đặc điểm bđs muốn lọc|
|12|Mở rộng|Button|Không||Bấm chọn mở rộng để hiển thị thêm các đặc điểm của bđs|
|13|Dự án/Chung cư|Dropdownlist|Không||Bấm chọn hình thức bđs muốn lọc|
|14|Chi nhánh|Dropdownlist|Không||Bấm chọn chi nhánh muốn lọc|
|15|Phòng ban|Dropdownlist|Không||Bấm chọn phòng ban muốn lọc|
|16|Nhập tên tài khoản|Textbox autocomplete|Không||Nhập tên tài khoản muốn tìm kiếm|
|17|Lọc|Button|Không||Bấm chọn để hiển thị danh sách lọc theo tiêu chí đã chọn|
|18|Đặt lại|Button|Không||Bấm chọn để xoá hết tiêu chí vừa cài đặt|

**Use case Specification**

|**Use Case ID**||**UC\-3\.3**|**Use Case Name**||Lọc kho tài nguyên|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**6/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng lọc tin trong kho tài nguyên||||
|**Pre\-Condition**||Trong hệ thống có tin đăng khớp với từ khoá||||
|**Main Flows**||1. Người dùng Đăng nhập thành công và truy cập vào Kho tài nguyên<br>2. Người dùng chọn icon Lọc<br>3. Hệ thống hiển thị màn hình lọc<br>4. Người dùng chọn các tiêu chí phù hợp<br>5. Hệ thống di chuyển sang màn hình kho tài nguyên và hiển thị tiêu chí phù hợp với từ khóa||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

### Xem chi tiết tin đăng 

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Hình ảnh|Ảnh|Không||Bấm để xem hình ảnh toàn màn hình|
|3|Lịch sử chỉnh sửa|Button|Không||Bấm để xem lịch sử chỉnh sửa bài viết|
|4|\[Ảnh\]|Button|Không||Bấm để hiển màn hình profile đầu chủ|
|5|\[Tên\]|Button|Không||Bấm để hiển màn hình profile đầu chủ|
|6|\[Trạng thái\]|||||
|7|Text||||Nội dung bài viết|
|8|\[Tình trạng\]|||||
|9|Mã số|Button|Không||Bấm để xem chi tiết nhà có mã số đấy|
|10|\#\[hashtag\]|Button|Không||Bấm vào hashtag để xem các bài đăng tương ứng với người đăng, phòng ban và khối|
|11|Eye icon||||Hiển thị số lượng người xem |
|12|Tag icon||||Hiển thị số lượng người lưu tin|
|13|Icon khách khớp|Button|Không||Bấm vào để xem danh sách khách khớp với hàng|
|14|Điện thoại icon|Button|Không||Bấm để nhảy qua ứng dụng quay số điện thoại|
|15|Zalo icon|Button|Không||Bấm để nhảy qua ứng dụng zalo|
|16|Messenger icon|Button|Không||Bấm để nhảy qua ứng dụng messenger|
|17|Icon chat khonhapho|Button|Không||Bấm để di chuyển sang màn hình chat|
|18|Clock icon|Button|Không||Bấm để đặt lịch hẹn dẫn khách|
|19|Tag icon|Button|Không||Bấm để thêm hàng vào bộ sưu tập|
|20|Report icon|Button|Không||Bấm để thêm báo cáo dẫn khách|
|21|Thích|Button|Không||Bấm để thích bài viết|
|22|Bình luận|Button|Không||Bấm để hiển thị màn hình bình luận|
|23|Chia sẻ|Button|Không||Bấm để sao chép link chia sẻ|
|24|Viết bình luận|Textbox|Không|Varchar \(500\)||
|25|Send icon|Button|Không||Bấm để gửi bình luận|

#### Đặt lịch

**Screen Design**

**Screen Definition**

|**\#** |**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|x|Button|Không||Bấm để thoát khỏi đặt lịch|
|2|Thời gian xem nhà|datepicker|Có||Bấm chọn lịch phù hợp|
|3|Ghi chú|Textbox|Không|varchar\(500\)|Nhập ghi chú đặt lịch|
|4|Đặt lịch|Button|Có||Bấm để gửi lịch hẹn|
|5|Đóng|Button|Không||Bấm để thoát khỏi đặt lịch|

**Use case Specification**

|**Use Case ID**||**UC\-4\.1**|**Use Case Name**||Đặt lịch hẹn|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**10/5/2024**|
|**Actor**||User \(đầu khách\)||||
|**Description**||Người dùng đặt lịch hẹn xem hàng||||
|**Pre\-Condition**||||||
|**Main Flows**||Người dùng có thể đặt lịch hẹn ở màn hình kho tài nguyên, tab bạn quan tâm, quản lý khách \- khách tự khớp, bộ sưu tập \- Xem chi tiết tin\.<br>1. Người dùng chọn icon đặt lịch<br>2. Hệ thống hiển thị Đặt lịch hẹn dẫn khách xem nhà     <br>3. Người dùng chọn thời gian phù hợp và ấn Đặt lịch<br>4. Hệ thống lưu vào CSDL và thông báo đặt lịch thành công với đầu chủ<br>5. Hệ thống hiển thị lịch hẹn trong Lịch hẹn dẫn khách và gửi thông báo lịch hẹn cho đầu chủ||||
|**Exception Flows**||||||
|**Business Rules**||BR\-75: Thời gian đặt lịch được validate 30 phút sau thời gian hiện tại||||
|**Application Messages**||MSG\-31: Đặt lịch thành công\!||||

#### Lưu tin

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-4\.1**|**Use Case Name**||Lưu tin|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**10/5/2024**|
|**Actor**||User \(đầu khách\)||||
|**Description**||Người dùng đặt lịch hẹn xem hàng||||
|**Pre\-Condition**||||||
|**Main Flows**||1\. Người dùng Đăng nhập thành công và truy cập vào Kho tài nguyên<br>2\. Người dùng chọn các tiêu chí phù hợp<br>3\. Hệ thống lọc các bài viết có chứa các từ khoá trong tiêu chí và hiển thị tiêu chí phù hợp<br>4\. Nếu người dùng chọn Lưu tin<br>5\. Hệ thống hiển thị pop up chọn bộ sưu tập<br>6\. Người dùng chọn bộ sưu tập thích hợp và chọn lệnh Xong<br>7\. Hệ thống lưu thông tin vào CSDL và thông báo thành công||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

#### Báo cáo dẫn khách

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|x|Button|Không||Bấm để thoát khỏi đặt lịch|
|2|Họ tên|Textbox|Có|||
|3|CMND hoặc thẻ căn cước|Textbox|Có|||
|4|Địa chỉ|Textbox|Có|||
|5|Thời gian khách xem nhà|datepicker|Có|||
|6|Mục đích mua của khách|radio checkbox|Có|||
|7|Phản hồi của khách|radio checkbox|Có|||
|8|Đánh giá chủ nhà|radio checkbox|Có|||
|9|Tải ảnh|Button|Không|Tối đa 5 ảnh|Bấm để tải ảnh lên báo cáo|
|10|Ý kiến của đầu khách|Textbox|Không|||
|11|Gửi|Button|Có||Bấm để gửi báo cáo|
|12|Huỷ |Button||||

**Use case Specification**

|**Use Case ID**||**UC\-4\.1**|**Use Case Name**||Báo cáo dẫn khách|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**13/5/2024**|
|**Actor**||User \(đầu khách\)||||
|**Description**||Người dùng báo cáo dẫn khách của tin đăng bán nhà||||
|**Pre\-Condition**||||||
|**Main Flows**||1\. Người dùng Đăng nhập thành công và truy cập vào Kho tài nguyên<br>2\. Người dùng chọn các tiêu chí phù hợp<br>3\. Hệ thống lọc các bài viết có chứa các từ khoá trong tiêu chí và hiển thị tiêu chí phù hợp<br>4\. Người dùng chọn Báo cáo dẫn khách<br>5\. Hệ thống hiển thị form báo cáo dẫn khách<br>6\. Người dùng điền báo cáo dẫn khách và chọn lệnh Gửi<br>7\. Hệ thống xác thực định dạng thông tin báo cáo<br>7\.1 Nếu thông tin đúng, hệ thống lưu vào CSDL và thông báo thành công\. Gửi thông báo đến đầu chủ<br>7\.2 Nếu thông tin sai, người dùng quay lại bước 6 ||||
|**Exception Flows**||||||
|**Business Rules**||BR\-02: SĐT hoặc CCCD phải đúng định dạng <br>BR\-06: Họ và tên không được quá 50 ký tự<br>BR\-21: Ý kiến đầu khách nhập tối đa 500 ký tự<br>BR\-76: Thời gian dẫn khách đi xem trong báo cáo dẫn khách phải trước thời điểm hiện tại||||
|**Application Messages**||MSG\-17: Bạn cần điền thông tin này\.<br>MSG\-45: Báo cáo thành công\.||||

##### Đánh giá đầu chủ

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|x|Button|Không||Bấm để thoát khỏi đặt lịch|
|2|Các tiêu chí đánh giá|Radio box|Có||Bấm để đánh giá mức độ|
|3|Nhận xét|Textbox|Không|||
|4|Đầu chủ gạ chốt|Radio button|có|||
|5|Gửi đánh giá|Button|có||Bấm để gửi đánh giá|

#### Xem khách hợp tin

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Search icon|Button|||Bấm để hiển thị textbox tìm kiếm|
|3|Thời gian đăng hàng|Dropdownlist|Có|||
|4|Các cột hiển thị thông tin khách hàng|||||
|5|Xem icon|Button|Không||Bấm để hiển thị chi tiết tin đăng|

**Use case Specification**

|**Use Case ID**||**UC\-4\.1**|**Use Case Name**||Xem khách hợp tin|
|---|---|---|---|---|---|
|**Author**||**Quỳnh Anh**|**Date**||**13/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng xem khách hàng hợp tin||||
|**Pre\-Condition**||Trong hệ thống có bản ghi thông tin của khách hàng||||
|**Main Flows**||1\. Người dùng Đăng nhập thành công và truy cập vào Kho tài nguyên<br>2\. Người dùng chọn các tiêu chí phù hợp<br>3\. Hệ thống lọc các bài viết có chứa các từ khoá trong tiêu chí và hiển thị tiêu chí phù hợp<br>4\. Người dùng chọn Xem khách hàng phù hợp với tin đăng <br>5\. Hệ thống hiển thị danh sách khách phù hợp với tin đăng||||
|**Extension Flows**||ĐC có tin đăng của bản thân sẽ nhìn thấy được các khách hàng có tiêu chí khớp với tin đăng của mình||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

##### Xem chi tiết khách hợp tin

**Screen Definition**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Bảng thông tin khách hàng|Table||||
|3|Nguồn khách|Text button|Không||Bấm để đi tới trang cá nhân đầu khách|
|4|Liên hệ |Text button|Không||Bấm để quay số điện thoại|
|5|Icon zalo|Button|Không||Bấm để di chuyển sang ứng dụng zalo|
|6|Icon messenger|Button|Không||Bấm để di chuyển sang ứng dụng messenger|
|7|Icon Chat khonhapho|Button|Không||Bấm để di chuyển sang màn hình chat|

#### Xem lịch sử chỉnh sửa tin

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\(x\)|Button|Không||Bấm để thoát khỏi đặt lịch|
|2|\#\[hashtag\]|Link|Không||Bấm vào hashtag để xem các bài đăng tương ứng với người đăng, phòng ban và khối|

### Ẩn cột 

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Tên các cột|Slide button|Không||Bấm để hiển thị hoặc ẩn cột|

### Khảo sát nhà \(Chưa mô tả\)

## **Quản lý kho hàng cá nhân**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2|Icon tin nhắn|Button|||Bấm để di chuyển sang màn hình tin nhắn|
|3|\[Đăng tin\]|Button|||Bấm để di chuyển sang form đăng tin|
|4|Tab Chờ duyệt \(Mặc định\)|Button|||Bấm để di chuyển sang tab chờ duyệt|
|5|Tab Đã duyệt|Button|||Bấm để di chuyển sang tab đã duyệt|
|6|Tab Từ chối|Button|||Bấm để di chuyển sang tab từ chối |
|7|Tab Thùng rác|Button|||Bấm để di chuyển sang tab thùng rác|
|8|Icon filter|Button|||Bấm để bật bộ lọc|
|9|Icon search|Button|||Bấm để di chuyển sang trang search|
|10|Tin mới nhất|Dropdown|||Bấm để filter thứ tự tin|
|11|Icon cài đặt|Button|||Bấm để thay đổi trạng thái tin|
|12|Icon mắt gạch|Button|||Bấm để hiển thị SĐT chủ nhà|
|13|Icon lịch sử chỉnh sửa|Button|||Bấm để hiển thị lịch sử chỉnh sửa tin |
|14|\[Xoá\]|Button|||Bấm để di chuyển tin sang thùng rác|
|15|\[Sửa\]|Button|||Bấm để di chuyển sang form sửa tin|
|16|\[Xem\]|Button|||Bấm để xem chi tiết tin|

### **Đăng tin**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[Chọn tin\]|Button|Không||Bấm để sao chép các tin đã đăng trước đây|
|2|Loại hình|Dropdown|Có||Bấm để chọn loại hình BĐS|
|3|Đặc điểm|Multi\-select drop down list|Có||Bấm để chọn các đặc điểm<br>|
|4|Thành phố|Search/FilterDropdown|Có||Bấm để chọn thành phố|
|5|Quận/Huyện|Search/FilterDropdown|Có||Bấm để chọn quận huyện tương ứng với thành phố|
|6|Đường phố|Search/FilterDropdown|Có||Bấm để chọn đường phố tương ứng với quận huyện|
|7|Ngõ, hẻm, số nhà, số phòng|Textbox|Có||Bấm để nhập địa chỉ nhà<br>|
|8|Dự án/Khu đô thị/Chung cư|Search/FilterDropdown|Không||Bấm để chọn các dự án tương ứng với nhà \(Nếu có\)|
|9|Thông số nhà|Textbox|Có||Bấm để nhập thông số nhà|
|10|Hoa hồng|Textbox|Có||Bấm để nhập hoa hồng|
|11|Loại hợp đồng|Dropdown|Có||Bấm để chọn loại hợp đồng|
|12|Cầu đối tác|Textbox|Không||Bấm để nhập cầu đối tác \(Nếu nhà \>= 20 tỷ\)|
|13|Tiêu đề \(tự động\)|Textbox|Có||Tự động tạo ra tương ứng với các thông số đã nhập ở trên|
|14|Nội dung|Textbox|Có|varchar\(3000\)|Bấm để nhập nội dung |
|15|Pháp lý|Dropdown|Có||Bấm để chọn pháp lý|
|16|Serial sổ|Dropdowntextbox|Có||Bấm để nhập serial sổ|
|17|SĐT chủ nhà|Textbox|Có||Bấm để nhập SĐT chủ nhà|
|18|Ảnh|File|Có|Tối đa 12 ảnh|Bấm để upload ảnh nhà|
|19|Video|File|Không|Tối đa 4 videos, 50mb/video|Bấm để upload video|
|20|Ảnh sổ đổ, hợp đồng trích thưởng|File|Có|Tối đa 20 ảnh|Bấm để upload ảnh sổ đỏ, hợp đồng<br>|
|21<br>|Audio ghi âm pháp lý, hợp đồng trích thưởng|File|Không|Tối đa 4 audio|Bấm để upload ảnh audio|
|22|\[Đăng tin\]|Button|Có||Bấm để đăng tin cá nhân|

**Use case Specification**

|**Use Case ID**||**UC\-12\.1\.1**|**Use Case Name**||Đăng tin|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**03/03/2025**|
|**Actor**||Đầu chủ||||
|**Description**||Người dùng đăng tin nhà cần bán||||
|**Pre\-Condition**||Người dùng có quyền của Đầu chủ||||
|**Main Flows**<br>||1. Người dùng truy cập Quản lý kho hàng, chọn mục Kho cá nhân<br>2. Hệ thống chuyển hướng đến màn hình Kho cá nhân<br>3. Người dùng bấm nút \[Đăng tin\]<br>4. Hệ thống hiển thị form nhập tin đăng bán nhà<br>5. Người dùng nhập đầy đủ các trường thông tin có đánh dấu \* và bấm nút \[Đăng tin\]<br>6. Lưu vào CSDL và chờ duyệt||||
|**Exception Flows**||5\.1 Nếu có trường thông tin sai thì hệ thống sẽ yêu cầu người dùng nhập lại thông tin||||
|**Business Rules**<br>||- BR\-02: SĐT phải đúng định dạng <br>- BR\-10: Phải upload được mọi định dạng ảnh<br>- BR\-33: Video và audio up lên không được quá 50mb/video<br>- BR\-34: Nội dung tin đăng nhập tối đa 3000 ký tự<br>- BR\-44: Giới hạn ảnh upload là 5mb<br>- BR\-61: Đặc điểm BĐS chỉ được chọn 5 mục, khi chọn mặt phố thì không thể chọn ngõ và ngược lại\. Gara oto chỉ được chọn khi được chọn mặt phố hoặc ngõ oto<br>- BR\-62: Cầu đối tác được cho phép nhập khi giá nhà \>= 20 tỷ<br>- BR\-63: Serial sổ chỉ được nhập A\-Z \+ Đ và 0\-9 có thể nhập nhiều hơn 1 sổ, sau khi nhập serial của 1 sổ, bấm hoặc dấu cách thì sẽ được nhập 1 tag sổ mới<br>- BR\-64: Khi chọn chưa sổ/Chờ cấp sổ hoặc có sổ/thiếu seri sổ thì trường điền serial sổ sẽ bị disable<br>- BR\-66: Giá nhà tối thiểu phải từ 200 triệu đổ lên<br>- BR\-67: Chọn loại hình Thổ cư thì thông số nhà sẽ bao gồm Diện tích \- Diện tích sử dụng \- Số tầng \- Mặt tiền \- Giá tiền\. Diện tích, diện tích sử dụng được phân biệt bằng dấu "/" Ex: 40/45\. Số tầng nếu không phải số thì là "Đất"\. Mặt tiền nhập số\. Giá nhập số<br>- BR\-70: Loại hình Chung cư thì thông số nhà sẽ bao gồm Diện tích sổ \- Diện tích cơi nới thực tế \- Tầng \- Giá tiền\. Diện tích sổ nhập số và dấu chấm nếu diện tích là số thập phân, diện tích cơi nới thực tế được phân biệt bằng dấu "/" Ex: 40/45\. Tầng nhập số\. Giá tiền nhập số\. Loại hình dự án thì thông số sẽ như loại hình thổ cư \(Update 03/03/2025\)||||
|**Application Messages**<br>||- MSG\-11: Số điện thoại chưa hợp lệ\!<br>- MSG\-16: Không được bỏ trống mục này\.<br>- MSG\-20: Thêm tin đăng thành công\.<br>- MSG\-32: Video tải lên vượt quá 50MB vui lòng chọn lại<br>- MSG\-33: Tải audio không thành công<br>- MSG\-34: Số phải lớn hơn 0\!<br>- MSG\-35: Bạn cần chọn mục này<br>- MSG\-44: Serial sổ chưa đúng định dạng<br>- MSG\-48: Thông số nhà chưa đúng||||

### **Search tin**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button||||
|2|Thanh search|Textbox||||

**Use case Specification**

|**Use Case ID**||**UC\-12\.1\.2**|**Use Case Name**||Search tin đăng cá nhân|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng tìm kiếm tin đã đăng||||
|**Pre\-Condition**||Trong hệ thống có tin đăng của người dùng||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục Kho cá nhân<br>2. Hệ thống chuyển hướng đến màn hình Kho cá nhân<br>3. Người dùng bấm vào icon search<br>4. Hệ thống hiển thị màn hình search<br>5. Người dùng nhập đầy đủ từ khóa cần tìm và bấm nút gửi trên bàn phím<br>6. Hệ thống di chuyển sang trang kho cá nhân với các từ tin đăng khớp với từ khóa||||
|**Exception Flows**||5\.1 Nếu từ khóa nhập sai thì không hiển thị||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

### Xem chi tiết tin

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2|Icon chat|Button|||Bấm để di chuyển sang chat|
|3|Ảnh|Button|||Bấm để xem ảnh|
|4|Lịch sử chỉnh sửa|Button|||Bấm để xem lịch sử chỉnh sửa|
|5<br>|Icon khách phù hợp|Button|||Bấm để xem danh sách khách hàng phù hợp|
|6|Icon khách báo cáo|Button|||Bấm để xem danh sách khách báo cáo<br>|
|7|Icon điện thoại|Button|||Bấm để quay số điện thoại|
|8|Icon zalo|Button|||Bấm để di chuyển sang ứng dụng zalo|
|9|Icon messenger|Button|||Bấm để di chuyển sang ứng dụng messenger|
|10|Icon đặt lịch|Button|||Bấm để đặt lịch dẫn khách|
|11|Icon lưu|Button|||Bấm để lưu tin|
|12|Icon báo cáo dẫn khách|Button|||Bấm để báo cáo dẫn khách|
|13|Icon thích|Button|||Bấm để thích tin|
|14|Icon bình luận|Button|||Bấm để bình luận tin|
|15|Icon chia sẻ|Button|||Bấm để sap chép đường link của tin|
|16|Icon máy ảnh|Button|||Bấm để mở máy ảnh|
|17|Icon ảnh|Button|||Bấm để chọn ảnh trong máy|
|18|Icon emoji|Button|||Bấm để chọn emoji hoặc sticker|
|19|Thanh nhập bình luận|Textbox|||Nhập nội dung bình luận|
|20|Icon gửi|Button|||Bấm để đăng nội dung vừa nhập vào phần bình luận|

#### Tương tác tin

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|Icon khách khớp|Button|||Bấm vào để xem danh sách khách khớp với hàng|
|2|Điện thoại icon|Button|||Bấm để nhảy qua ứng dụng quay số điện thoại|
|3|Zalo icon|Button|||Bấm để nhảy qua ứng dụng zalo|
|4|Messenger icon|Button|||Bấm để nhảy qua ứng dụng messenger|
|5|Clock icon|Button|||Bấm để đặt lịch hẹn dẫn khách|
|6|Lưu icon|Button|||Bấm để thêm hàng vào bộ sưu tập|
|7|Report icon|Button|||Bấm để thêm báo cáo dẫn khách|
|8|Thích|Button|||Bấm để thích bài viết|
|9|Bình luận|Button|||Bấm để hiển thị màn hình bình luận|
|10|Chia sẻ|Button|||Bấm để sao chép link chia sẻ|
|11|Viết bình luận|Textbox||Varchar \(500\)|Bấm để nhập bình luận|
|12|Send icon|Button|||Bấm để gửi bình luận|

**Use case Specification**

|**Use Case ID**||**UC\-12\.1\.3\.3**|**Use Case Name**||Tương tác tin|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng tương tác với tin đăng của mình||||
|**Pre\-Condition**||Trên hệ thống có tin đăng của người dùng||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục Kho cá nhân<br>2. Hệ thống chuyển hướng đến màn hình Kho cá nhân<br>3. Người dùng bấm vào \[Xem\]<br>4. Hệ thống hiển thị màn hình chi tiết tin<br>5. Người dùng tương tác với tin<br>5\.1 Người dùng bấm thích<br>5\.2 Người dùng nhập nội dung bình luận và bấm nút gửi<br>6. Hệ thống hiển thị những nội dung người dùng đã nhập lên màn hình||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

#### Xem khách phù hợp tin đăng

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2|Thanh search|Textbox|||Bấm để nhập nội dung cần tìm|
|3|Ngày tạo mới nhất|Dropdown|||Bấm để lọc ngày khách hàng được tạo|
|4|Nút \[\] ở cột xem|Button|||Bấm để xem chi tiết khách|

**Use case Specification**

|**Use Case ID**||**UC\-12\.1\.3\.1**|**Use Case Name**||Search tin đăng cá nhân|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**3/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng đăng ký tài khoản mới||||
|**Pre\-Condition**||Người dùng tải ứng dụng ||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục Kho cá nhân<br>2. Hệ thống chuyển hướng đến màn hình Kho cá nhân<br>3. Người dùng bấm vào icon search<br>4. Hệ thống hiển thị màn hình search<br>5. Người dùng nhập đầy đủ từ khóa cần tìm và bấm nút gửi trên bàn phím<br>6. Hệ thống di chuyển sang trang kho cá nhân với các từ tin đăng khớp với từ khóa||||
|**Exception Flows**||5\.1 Nếu từ khóa nhập sai thì không hiển thị||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

##### Search khách phù hợp tin đăng

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button||||
|2|Thanh search|Textbox||||

**Use case Specification**

|**Use Case ID**||**UC\-12\.1\.3\.1\.1 **|**Use Case Name**||Search khách phù hợp tin đăng|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**3/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng đăng ký tài khoản mới||||
|**Pre\-Condition**||Người dùng tải ứng dụng ||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục Kho cá nhân<br>2. Hệ thống chuyển hướng đến màn hình Kho cá nhân<br>3. Người dùng bấm vào icon search<br>4. Hệ thống hiển thị màn hình search<br>5. Người dùng nhập đầy đủ từ khóa cần tìm và bấm nút gửi trên bàn phím<br>6. Hệ thống di chuyển sang trang kho cá nhân với các từ tin đăng khớp với từ khóa||||
|**Exception Flows**||5\.1 Nếu từ khóa nhập sai thì không hiển thị||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

##### Xem chi tiết khách phù hợp

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button||||
|2|Thanh search|Textbox||||

#### Xem báo cáo khách hàng

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2|Thanh search|Textbox|||Bấm để nhập nội dung cần tìm|
|3|Nút \[\] ở cột xem|Button|||Bấm để xem chi tiết báo cáo|

**Use case Specification**

|**Use Case ID**||**UC\-12\.1\.2**|**Use Case Name**||Xem báo cáo khách hàng|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**3/5/2024**|
|**Actor**||User||||
|**Description**||Người dùng đăng ký tài khoản mới||||
|**Pre\-Condition**||Người dùng tải ứng dụng ||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục Kho cá nhân<br>2. Hệ thống chuyển hướng đến màn hình Kho cá nhân<br>3. Người dùng bấm vào icon search<br>4. Hệ thống hiển thị màn hình search<br>5. Người dùng nhập đầy đủ từ khóa cần tìm và bấm nút gửi trên bàn phím<br>6. Hệ thống di chuyển sang trang kho cá nhân với các từ tin đăng khớp với từ khóa||||
|**Exception Flows**||5\.1 Nếu từ khóa nhập sai thì không hiển thị||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

#### Xác nhận tin đăng còn bán sau \(x\) ngày \- sau 30 ngày tin tự động xoá \(Chưa mô tả \- làm lại\)

#### Xem danh sách người xem tin \(Chưa mô tả\)

### Sửa tin

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[Chọn tin\]|Button|Không||Bấm để sao chép các tin đã đăng trước đây|
|2|Loại hình|Dropdown|Có||Bấm để chọn loại hình BĐS|
|3|Đặc điểm|Multi\-select drop down list|Có||Bấm để chọn các đặc điểm|
|4|Thành phố|Dropdown|Có||Bấm để chọn thành phố|
|5|Quận/Huyện|Dropdown|Có||Bấm để chọn quận huyện tương ứng với thành phố|
|6|Đường phố|Dropdown|Có||Bấm để chọn đường phố tương ứng với quận huyện|
|7|Ngõ, hẻm, số nhà, số phòng|Textbox|Có||Bấm để nhập địa chỉ nhà<br>|
|8|Dự án/Khu đô thị/Chung cư|Dropdown|Không||Bấm để chọn các dự án tương ứng với nhà \(Nếu có\)|
|9|Thông số nhà|Textbox|Có||Bấm để nhập thông số nhà|
|10|Hoa hồng|Textbox|Có||Bấm để nhập hoa hồng|
|11|Loại hợp đồng|Dropdown|Có||Bấm để chọn loại hợp đồng|
|12|Cầu đối tác|Textbox|Không||Bấm để nhập cầu đối tác \(Nếu nhà hơn 20 tỷ\)|
|13|Tiêu đề \(tự động\)|Textbox|Có||Tự động tạo ra tương ứng với các thông số đã nhập ở trên|
|14|Nội dung|Textbox|Có|varchar\(3000\)|Bấm để nhập nội dung |
|15|Pháp lý|Dropdown|Có||Bấm để chọn pháp lý|
|16|Serial sổ|Dropdowntextbox|Có||Bấm để nhập serial sổ|
|17|SĐT chủ nhà|Textbox|Có||Bấm để nhập SĐT chủ nhà|
|18|Ảnh|File|Có|Tối đa 12 ảnh|Bấm để upload ảnh nhà|
|19|Video|File|Không|Tối đa 4 videos, 50mb/video|Bấm để upload video|
|20|Ảnh sổ đổ, hợp đồng trích thưởng|File|Có|Tối đa 20 ảnh|Bấm để upload ảnh sổ đỏ, hợp đồng|
|21|Audio ghi âm pháp lý, hợp đồng trích thưởng|File|Không|Tối đa 4 audio|Bấm để upload ảnh audio|
|22|\[Lưu\]|Button|Có||Bấm để lưu tin|

**Use case Specification**

|**Use Case ID**||**UC\-12\.1\.4**|**Use Case Name**||Sửa tin|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**10/5/2024**|
|**Actor**||Đầu chủ||||
|**Description**||Người dùng sửa tin đã đăng||||
|**Pre\-Condition**||Người dùng có quyền của Đầu chủ||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục Kho cá nhân<br>2. Hệ thống chuyển hướng đến màn hình Kho cá nhân<br>3. Người dùng bấm nút \[Sửa\]<br>4. Hệ thống hiển thị form sửa tin đăng bán nhà với các trường thông tin đã điền<br>5. Người dùng nhập đầy đủ các trường thông tin có đánh dấu \* và bấm nút \[Đăng tin\]<br>6. Lưu vào CSDL<br>6\.1 Nếu bài viết đã được duyệt thì không cần chờ duyệt<br>6\.2 Nếu bài viết chưa được duyệt thì sẽ được cập nhật thông tin và tiếp tục chờ duyệt||||
|**Exception Flows**||5\.1 Nếu có trường thông tin sai thì hệ thống sẽ yêu cầu người dùng nhập lại thông tin||||
|**Business Rules**||- BR\-02: SĐT phải đúng định dạng <br>- BR\-10: Phải upload được mọi định dạng ảnh<br>- BR\-33: Video và audio up lên không được quá 50mb/video<br>- BR\-34: Nội dung tin đăng nhập tối đa 3000 ký tự<br>- BR\-44: Giới hạn ảnh upload là 5mb<br>- BR\-61: Đặc điểm BĐS chỉ được chọn 5 mục, khi chọn mặt phố thì không thể chọn ngõ và ngược lại\. Gara oto chỉ được chọn khi được chọn mặt phố hoặc ngõ oto<br>- BR\-62: Cầu đối tác được cho phép nhập khi giá nhà \>= 20 tỷ<br>- BR\-63: Serial sổ chỉ được nhập A\-Z \+ Đ và 0\-9 có thể nhập nhiều hơn 1 sổ, sau khi nhập serial của 1 sổ, bấm hoặc dấu cách thì sẽ được nhập 1 tag sổ mới<br>- BR\-64: Khi chọn chưa sổ/Chờ cấp sổ hoặc có sổ/thiếu seri sổ thì trường điền serial sổ sẽ bị disable<br>- BR\-66: Giá nhà tối thiểu phải từ 200 triệu đổ lên<br>- BR\-67: Loại hình Thổ cư thì thông số nhà sẽ bao gồm Diện tích \- Diện tích sử dụng \- Số tầng \- Mặt tiền \- Giá tiền\. Loại hình Chung cư thì thông số nhà sẽ bao gồm Diện tích \- Tầng \- Giá tiền\. Loại hình dự án thì thông số sẽ như loại hình thổ cư<br>- BR\-68: Tin đã đăng thì không thể sửa được các trường thông tin<br>\- Pháp lý<br>\- Serial sổ<br>\- Số điện thoại chủ nhà<br>\- Ảnh sổ đỏ pháp lý<br>\- Audio pháp lý||||
|**Application Messages**||- MSG\-11: Số điện thoại chưa hợp lệ\!<br>- MSG\-16: Không được bỏ trống mục này\.<br>- MSG\-20: Thêm tin đăng thành công\.<br>- MSG\-32: Video tải lên vượt quá 50MB vui lòng chọn lại<br>- MSG\-33: Tải audio không thành công<br>- MSG\-34: Số phải lớn hơn 0\!<br>- MSG\-35: Bạn cần chọn mục này||||

### Filter tin

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Hiện trạng|Dropdownlist|Không||Bấm chọn hiện trạng bđs muốn lọc|
|3|Loại hình|Dropdownlist|Không||Bấm chọn loại hình bđs muốn lọc|
|4|Tỉnh/Thành phố|Dropdownlist|Không||Bấm chọn tỉnh/thành phố muốn lọc|
|5|Quận/Huyện|Dropdownlist|Không||Bấm chọn quận/huyện muốn lọc|
|6|Đường/Phố|Dropdownlist|Không||Bấm chọn đường/phố muốn lọc|
|7|Giá tối thiểu|Textbox|Không|int|Điền mức giá tối thiểu|
|8|Đơn vị|Dropdownlist|Không||Bấm chọn loại đơn vị tiền tệ|
|9|Giá tối đa|Textbox|Không|int|Điền mức giá tối đa|
|10|Khoảng giá|Dropdownlist|Không||Bấm chọn các mức giá muốn lọc|
|11|Đặc điểm BĐS|Dropdownlist|Không||Bấm chọn đặc điểm bđs muốn lọc|
|12|Mở rộng<br>|Button|Không||Bấm chọn mở rộng để hiển thị thêm các đặc điểm của bđs|
|13|Dự án/Chung cư|Dropdownlist|Không||Bấm chọn hình thức bđs muốn lọc|
|14|Lọc|Button|Không||Bấm chọn để hiển thị danh sách lọc theo tiêu chí đã chọn|
|15|Đặt lại|Button|Không||Bấm chọn để xoá hết tiêu chí vừa cài đặt|

**Use case Specification**

|**Use Case ID**||**UC\-12\.1\.5**|**Use Case Name**||Filter tin đã đăng|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng lọc tin đã đăng với các tiêu chí||||
|**Pre\-Condition**||Trong hệ thống có tin người dùng đã đăng||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục Kho cá nhân<br>2. Hệ thống chuyển hướng đến màn hình Kho cá nhân<br>3. Người dùng bấm vào icon lọc<br>4. Hệ thống di chuyển sang bộ lọc<br>5. Người dùng chọn các tiêu chí phù hợp<br>6. Hệ thống lọc các tin đăng có chứa các từ khoá trong tiêu chí và hiển thị tiêu chí phù hợp||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

### Sửa trạng thái tin \(Modify\)

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-12\.1\.6**|**Use Case Name**||Sửa trạng thái tin|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**13/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng sửa trạng thái tin||||
|**Pre\-Condition**||Tin đã có trong CSDL||||
|**Main Flows**<br>||1. Người dùng bấm vào Kho cá nhân ở Tab slider trên trang chủ hoặc trong Menu<br>2. Hệ thống chuyển hướng đến màn hình Kho cá nhân<br>3. Người dùng bấm vào Icon cài đặt, chọn trạng thái tin và nhập lý do nếu chọn dừng bán hoặc đã bán<br>4. Hệ thống lưu vào CSDL, thông báo cập nhật trạng thái tin đăng thành công||||
|**Extension Flows**||3\.1 Người dùng bấm vào \[Sửa\] tin đăng<br>3\.2 Hệ thống hiển thị form sửa tin<br>3\.3 Người dùng chỉnh sửa thông số nhà \- giá tiền hạ hoặc tăng 50 triệu và bấm nút \[Sửa tin\]||||
|**Exception Flows**||||||
|**Business Rules**||BR\-69: Tin có trạng thái "Đã bán" sau 15 ngày sẽ tự động chuyển vào thùng rác||||
|**Application Messages**||- MSG\-22: Cập nhật trạng thái thành công\!||||

### Bum chốt \(V2\.2\)

*Đặc tả use case*

|Use case ID:|UC \- |Tên use case:|Bum chốt|
|---|---|---|---|
|Tác giả:|Quỳnh Anh|Ngày:|12/11/2024|
|Các tác nhân chính:||Tác nhân phụ:|N/A|
|Mô tả:|Đăng tin bum chốt|||
|Điều kiện trước:|- Đầu chủ thay đổi trạng thái hàng thành đã chốt|||
|Luồng chính:|1\.Sau khi user thay đổi trạng thái hàng<br>2\.Hệ thống hiển thị form điền thông tin các bên liên quan vụ chốt<br>3\.User nhập thông tin<br>4\.Hệ thống lưu vào CSDL, thông báo chờ duyệt đến user<br>5\.Thư ký nhận tin, xác nhận thông tin\. Duyệt tin<br>5\.1 Thư ký từ chối tin<br>5\.1\.2 Thông báo đến user lý do bị từ chối<br>5\.2 Thư ký chấp nhận tin<br>5\.2\.1 Hệ thống đăng tin vụ chốt\. Thông báo đến user|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi người dùng cập nhật trạng thái hàng thành đã chốt|Người dùng cập nhật trạng tin đăng của tin đăng đã được đăng<br>|Người dùng đã đổi trạng thái đã chốt thành công|<br>Kho cá nhân|Logging, coordinate<br>||

### Xoá tin

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-12\.1\.7**|**Use Case Name**||Xoá tin|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**13/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng chuyển tin đăng vào thùng rác||||
|**Pre\-Condition**||Tin đã có trong CSDL||||
|**Main Flows**<br>||1. Người dùng bấm vào Kho cá nhân ở Tab slider trên trang chủ hoặc trong Menu<br>2. Hệ thống chuyển hướng đến màn hình Kho cá nhân, Tab chờ duyệt<br>3. Người dùng bấm vào nút \[Xoá\]<br>4. Hệ thống hiển thị form xác nhận chuyển vào thùng rác<br>5. Người dùng bấm \[Có\]<br>6. Hệ thống lưu vào CSDL, thông báo thành công, tin được chuyển sang thùng rác||||
|**Extension Flows**||2\.1 Hệ thống chuyển hướng đến màn hình Kho cá nhân, Tab từ chối||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||- MSG\-37: Gỡ tin đăng thành công||||

### Khôi phục tin

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2|Icon tin nhắn|Button|||Bấm để di chuyển sang màn hình tin nhắn|
|3|\[Đăng tin\]|Button|||Bấm để di chuyển sang form đăng tin|
|4|Tab Chờ duyệt|Button|||Bấm để di chuyển sang tab chờ duyệt|
|5|Tab Đã duyệt|Button|||Bấm để di chuyển sang tab đã duyệt|
|6|Tab Từ chối|Button|||Bấm để di chuyển sang tab từ chối |
|7|Tab Thùng rác \(Đang chọn\)|Button|||Bấm để di chuyển sang tab thùng rác|
|8|Icon filter|Button|||Bấm để bật bộ lọc|
|9|Icon search|Button|||Bấm để di chuyển sang trang search|
|10|Chọn tất cả|Checkbox|||Tích vào để chọn toàn bộ tin|
|11|Xoá vĩnh viễn|Button|||Bấm để xoá vĩnh viễn những tin được chọn|
|12|Khôi phục|Button|||Bấm để khôi phục những tin được chọn|
|13|Tin mới nhất|Dropdown|||Bấm để filter thứ tự tin|
|14|Icon cài đặt|Button|||Bấm để thay đổi trạng thái tin|
|15|Icon mắt gạch|Button|||Bấm để hiển thị SĐT chủ nhà|
|16|Icon lịch sử chỉnh sửa|Button|||Bấm để hiển thị lịch sử chỉnh sửa tin |
|17|Icon khách phù hợp|Button|||Bấm để xem khách phù hợp tin|
|17|Icon khách báo cáo|Button|||Bấm để xem khách báo cáo|
|18|\[Xoá vĩnh viễn\]|Button|||Bấm để Xoá vĩnh viễn tin|
|19|\[Khôi phục\]|Button|||Bấm để khôi phục tin sang trạng thái chờ duyệt|
|20|\[Chọn\]|Button|||Bấm để chọn nhiều tin|

**Use case Specification**

|**Use Case ID**||**UC\-12\.1\.8**|**Use Case Name**||Khôi phục tin|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**3/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng khôi phục tin đăng đã xoá||||
|**Pre\-Condition**||Tin đã có trong CSDL, tin đã bị người dùng xoá trước đó||||
|**Main Flows**||1. Người dùng bấm vào Kho cá nhân ở Tab slider trên trang chủ hoặc trong Menu<br>2. Hệ thống chuyển hướng đến màn hình Kho cá nhân, Tab chờ duyệt<br>3. Người dùng bấm vào tab Thùng rác<br>4. Hệ thống chuyển hướng sang tab Thùng rác<br>5. Người dùng bấm vào nút \[Khôi phục\] của tin<br>6. Hệ thống hiển thị form xác nhận<br>7. Người dùng bấm \[Có\]<br>8. Hệ thống lưu vào CSDL, thông báo thành công, tin được chuyển tab Chờ duyệt||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||- MSG\-23: Khôi phục tin đăng thành công\!||||

### Xoá vĩnh viễn tin

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-12\.1\.9**|**Use Case Name**||Xóa vĩnh viễn tin đăng|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng Xoá vĩnh viễn tin đăng trong Thùng rác||||
|**Pre\-Condition**||Tin đã có trong CSDL, tin đã bị người dùng di chuyển vào thùng rác trước đó||||
|**Main Flows**||1. Người dùng bấm vào Kho cá nhân ở Tab slider trên trang chủ hoặc trong Menu<br>2. Hệ thống chuyển hướng đến màn hình Kho cá nhân, Tab chờ duyệt<br>3. Người dùng bấm vào tab Thùng rác<br>4. Hệ thống chuyển hướng sang tab Thùng rác<br>5. Người dùng bấm vào nút \[Xoá vĩnh viễn\] của tin<br>6. Hệ thống hiển thị form xác nhận<br>7. Người dùng bấm \[Có\]<br>8. Hệ thống lưu vào CSDL, thông báo thành công, tin được chuyển tab Chờ duyệt||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||- MSG\-24: Xoá thành công\.||||



## **Danh sách tin chính chủ**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2|Icon lọc|Button|||Bấm để di chuyển vào bộ lọc|
|3|Icon search|Button|||Bấm để di chuyển sang màn hình search|
|4|Tab tin chính chủ|Button|||Bấm để di chuyển sang tab tin chính chủ|
|5|Tab tin nhanh|Button|||Bấm để di chuyển sang tab tin nhanh|
|6|Tab tin đã lưu|Button|||Bấm để di chuyển sang tab tin đã lưu|
|7|Phản hồi|Button|||Bấm để hiển thị form phản hồi|
|8|Lưu|Button|||Bấm để lưu tin|

### **Search tin chính chủ**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2|Thanh search|Textbox|||Bấm để nhập nội dung cần tìm|

**Use case Specification**

|**Use Case ID**||**UC\-12\.2\.2**|**Use Case Name**||**Search tin chính chủ**|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng tìm kiếm tin đã đăng||||
|**Pre\-Condition**||Trong hệ thống có tin đăng của người dùng||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục Tin chính chủ<br>2. Hệ thống chuyển hướng đến màn hình Tin chính chủ<br>3. Người dùng bấm vào icon search<br>4. Hệ thống hiển thị màn hình search<br>5. Người dùng nhập đầy đủ từ khóa cần tìm và bấm nút gửi trên bàn phím<br>6. Hệ thống di chuyển sang trang Tin chính chủ với các tin đăng khớp với từ khóa<br>||||
|**Exception Flows**||5\.1 Nếu từ khóa nhập sai thì không hiển thị||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

### **Filter tin chính chủ**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[x\]|Button|||Bấm để tắt bộ lọc|
|2|Loại hình|Dropdownlist|||Bấm để chọn loại hình|
|3|Thành phố|Dropdownlist|||Bấm để chọn thành phố|
|4|Quận/Huyện|Dropdownlist|||Bấm để chọn quận huyện tương ứng với thành phố|
|5|Khoảng giá|Dropdownlist|||Bấm để chọn khoảng giá|
|6|Khoảng diện tích|Dropdownlist|||Bấm để chọn diện tích|
|7|Đặt lại|Button|||Bấm để cài lại các tiêu chí đã chọn|
|8|Tìm kiếm|Button|||Bấm để tìm kiếm các tiêu chí đã chọn|

**Use case Specification**

|**Use Case ID**||**UC\-12\.2\.3**|**Use Case Name**||**Filter tin chính chủ**|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng lọc tin chính chủ với các tiêu chí||||
|**Pre\-Condition**||Trong hệ thống có tin chính chủ||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục tin chính chủ<br>2. Hệ thống chuyển hướng đến màn hình tin chính chủ<br>3. Người dùng bấm vào icon lọc<br>4. Hệ thống di chuyển sang bộ lọc<br>5. Người dùng chọn các tiêu chí phù hợp<br>6. Hệ thống lọc các tin đăng có chứa các từ khoá trong tiêu chí và hiển thị tiêu chí phù hợp||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

### **Lưu tin chính chủ**

**Use case Specification**

|**Use Case ID**||**UC\-12\.2\.5**|**Use Case Name**||**Lưu tin chính chủ**|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng lưu tin chính chủ||||
|**Pre\-Condition**||Trong hệ thống có tin chính chủ||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục tin chính chủ<br>2. Hệ thống chuyển hướng đến màn hình tin chính chủ<br>3. Người dùng bấm vào \[Lưu\] của tin chính chủ<br>4. Hệ thống Lưu vào CSDL<br>5. Người dùng chọn tab tin đã lưu<br>6. Hệ thống di chuyển sang tab tin đã lưu và hiển thị tin vừa mới lưu||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

### **Phản hồi tin**

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-12\.2\.4**|**Use Case Name**||Phản hồi tin chính chủ|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng phản hồi tin chính chủ||||
|**Pre\-Condition**||Trong hệ thống có tin chính chủ||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục tin chính chủ<br>2. Hệ thống chuyển hướng đến màn hình tin chính chủ<br>3. Người dùng bấm vào \[Phản hồi\] của tin chính chủ<br>4. Hệ thống hiển thị form phản hồi<br>5. Người dùng chọn lí do phản hồi và bấm nút \[Phản hồi\]<br>6. Hệ thống thông báo thêm thành công||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

### **Tab tin nhanh**

**Screen Design**

### Tab tin đã lưu

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2|Icon lọc|Button|||Bấm để di chuyển vào bộ lọc|
|3|Icon search|Button|||Bấm để di chuyển sang màn hình search|
|4|Tab tin chính chủ|Button|||Bấm để di chuyển sang tab tin chính chủ|
|5|Tab tin nhanh|Button|||Bấm để di chuyển sang tab tin nhanh|
|6|Tab tin đã lưu \(Đang chọn\)|Button|||Bấm để di chuyển sang tab tin đã lưu|
|7|Phản hồi|Button|||Bấm để hiển thị form phản hồi|
|8|Lưu|Button|||Bấm để lưu tin|
|9|Ghi chú|Button|||Bấm để hiển thị form ghi chú|

#### Ghi chú

**Screen Design**

**Use case Specification**

|**Use Case ID**||**UC\-12\.2\.6**|**Use Case Name**||Ghi chú tin chính chủ|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng ghi chú tin chính chủ đã lưu||||
|**Pre\-Condition**||Trong hệ thống có tin chính chủ người dùng đã lưu||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục tin chính chủ<br>2. Hệ thống chuyển hướng đến màn hình tin chính chủ<br>3. Người dùng bấm vào tab tin đã lưu<br>4. Hệ thống di chuyển sang trang tin đã lưu<br>5. Người dùng bấm vào nút \[Ghi chú\] của tin chính chủ<br>6. Hệ thống hiển thị form ghi chú<br>7. Người dùng nhập nội dung và bấm nút lưu<br>8. Hệ thống lưu vào CSDL và thông báo thành công||||
|**Exception Flows**||||||
|**Business Rules**||- BR\-18: Ghi chú bộ sưu tập tối đa 500 ký tự||||
|**Application Messages**||- MSG\-27: Cập nhật thành công\!||||

**Activity \& Sequence Diagram**

## **Xem kho hàng tự do**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|Không||Bấm để quay lại trang trước đó|
|2|Card chi tiết lịch hẹn<br>|Button<br>|Không||Bấm để hiển thị màn hình chat với đầu chủ|

### **Search kho hàng tự do**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button||||
|2|Thanh search|Textbox||||

**Use case Specification**

|**Use Case ID**||**UC\-12\.1\.2**|**Use Case Name**||Search kho hàng tự do|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**13/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng tìm kiếm tin trong kho hàng tự do||||
|**Pre\-Condition**||Trong hệ thống có tin kho hàng tự do||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục Kho hàng tự do<br>2. Hệ thống chuyển hướng đến màn hình Kho cá nhân<br>3. Người dùng bấm vào icon search<br>4. Hệ thống hiển thị màn hình search<br>5. Người dùng nhập đầy đủ từ khóa cần tìm và bấm nút gửi trên bàn phím<br>6. Hệ thống di chuyển sang trang kho cá nhân với các từ tin đăng khớp với từ khóa<br>||||
|**Exception Flows**||5\.1 Nếu từ khóa nhập sai thì không hiển thị||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

### **Filter kho hàng tự do**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|Không||Bấm để quay lại trang trước đó|
|2|Hiện trạng|Dropdownlist|Không||Bấm chọn hiện trạng bđs muốn lọc|
|3|Loại hình|Dropdownlist|Không||Bấm chọn loại hình bđs muốn lọc|
|4|Tỉnh/Thành phố|Dropdownlist|Không||Bấm chọn tỉnh/thành phố muốn lọc|
|5|Quận/Huyện|Dropdownlist|Không||Bấm chọn quận/huyện muốn lọc|
|6|Đường/Phố|Dropdownlist|Không||Bấm chọn đường/phố muốn lọc|
|7|Giá tối thiểu|Textbox|Không|int|Điền mức giá tối thiểu|
|8|Đơn vị|Dropdownlist|Không||Bấm chọn loại đơn vị tiền tệ|
|9|Giá tối đa|Textbox|Không|int|Điền mức giá tối đa|
|10|Khoảng giá|Dropdownlist|Không||Bấm chọn các mức giá muốn lọc|
|11|Đặc điểm BĐS|Dropdownlist|Không||Bấm chọn đặc điểm bđs muốn lọc|
|12|Mở rộng<br>|Button|Không||Bấm chọn mở rộng để hiển thị thêm các đặc điểm của bđs|
|13|Dự án/Chung cư|Dropdownlist|Không||Bấm chọn hình thức bđs muốn lọc|
|14|Lọc|Button|Không||Bấm chọn để hiển thị danh sách lọc theo tiêu chí đã chọn|
|15|Đặt lại|Button|Không||Bấm chọn để xoá hết tiêu chí vừa cài đặt|

**Use case Specification**

|**Use Case ID**||**UC\-12\.3\.3**|**Use Case Name**||**Filter kho hàng tự do**|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**13/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng lọc kho hàng tự do với các tiêu chí||||
|**Pre\-Condition**||Trong hệ thống có tin trong kho hàng tự do||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục Kho hàng tự do<br>2. Hệ thống chuyển hướng đến màn hình kho hàng tự do<br>3. Người dùng bấm vào icon lọc<br>4. Hệ thống di chuyển sang bộ lọc<br>5. Người dùng chọn các tiêu chí phù hợp<br>6. Hệ thống lọc các tin đăng có chứa các từ khoá trong tiêu chí và hiển thị tiêu chí phù hợp||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

### **Xem chi tiết kho hàng tự do**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2|Thích |Button|||Bấm để thích bài đăng|
|3|Bình luận|Button|||Bấm để hiển thị màn hình bình luận|
|4|Viết bình luận|Textbox|||Bấm để hiển thị màn hình bình luận|

#### **Tương tác kho hàng tự do**

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
|12|Send icon|Button|||Bấm để gửi bình luận|

**Use case Specification**

|**Use Case ID**||**UC\-12\.3\.1\.1**|**Use Case Name**||Tương tác kho hàng tự do|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**13/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng tương tác với tin đăng của mình||||
|**Pre\-Condition**||Trên hệ thống có tin đăng của người dùng||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục Kho hàng tự do<br>2. Hệ thống chuyển hướng đến màn hình Kho hàng tự do<br>3. Người dùng bấm vào \[Xem\]<br>4. Hệ thống hiển thị màn hình chi tiết tin<br>5. Người dùng tương tác với tin<br>5\.1 Người dùng bấm thích<br>5\.2 Người dùng nhập nội dung bình luận và bấm nút gửi<br>6. Hệ thống hiển thị những nội dung người dùng đã nhập lên màn hình||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

### **Ẩn cột tiêu đề kho hàng tự do**

**Screen Design**

## **Quản lý Lịch sử khách đặt lịch**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|Không||Bấm để quay lại trang trước đó|
|2|Card chi tiết lịch hẹn<br>|Button<br>|Không||Bấm để hiển thị màn hình chat với đầu chủ|

### **Xem lịch sử chat đặt lịch**

**Screen Design**



**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]<br>|Button<br>|<br>||Bấm để quay lại trang trước đó|
|2<br>|Icon camera<br>|Button<br>|||Bấm để bật camera|
|3|Icon chọn ảnh|Button|||Bấm để chọn ảnh trong thư viện máy|
|4|Icon emoji|Button|||Bấm để cho emoji|
|5|Icon mic|Button|||Bấm để ghi âm|
|6|Nhắn tin|Textbox|||Bấm để nhập nội dung|
|7|\[\>\]|Button|||Bấm để gửi tin nhắn|

**Use case Specification**

|**Use Case ID**||**UC\-12\.4\.1**|**Use Case Name**||Xem lịch sử chat|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng chat với nhau để xác nhận||||
|**Pre\-Condition**||Người dùng có khách đặt lịch trước đó||||
|**Main Flows**||1. Người dùng bấm vào Quản lý lịch sử khách đặt lịch<br>2. Hệ thống hiển thị danh sách lịch khách đặt<br>3. Người dùng bấm vào block chi tiết của lịch đặt<br>4. Hệ thống hiển thị màn hình chat chi tiết<br>5. Người dùng nhập nội dung sau đấy bấm nút gửi<br>6. Hệ thống lưu vào CSDL, hệ thống hiển thị nội dung mới nhập lên màn hình||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

## **Quản lý Lịch sử khách báo cáo**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2|Thanh search|Textbox|||Bấm để nhập nội dung cần tìm|
|3|Nút \[\] ở cột xem|Button|||Bấm để xem chi tiết khách|

### **Search báo cáo của khách**

**Use case Specification**

|**Use Case ID**||**UC\-12\.5\.2**|**Use Case Name**||Search báo cáo của khách|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng tìm báo cáo của khách với từ khóa||||
|**Pre\-Condition**||Trong hệ thống có tin đăng của người dùng đã có đầu khách báo cáo||||
|**Main Flows**||1. Người dùng bấm vào quản lý lịch sử khách báo cáo<br>2. Hệ thống chuyển sang trang lịch sử khách báo cáo<br>3. Người dùng bấm vào nút Xem chi tiết của báo cáo<br>4. Hệ thống hiển thị màn hình chi tiết báo cáo||||
|**Exception Flows**||4\.1 Nếu thông tin sai định dạng hệ thống sẽ yêu cầu người dùng nhập lại thông tin \(quay lại bước 3\)||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

### **Xem chi tiết báo cáo**

**Screen Design**

**Screen Definition**

|**\#**|**Tên trường**|**Loại**|**Bắt buộc**|**Giới hạn ký tự**|**Mô tả**|
|---|---|---|---|---|---|
|1|\[\<\]|Button|||Bấm để quay lại trang trước đó|
|2|Số điện thoại|Button|||Bấm để quay số đầu khách|
|3|Icon zalo|Button|||Bấm để di chuyển vào ứng dụng zalo|
|4|Icon messenger|Button|||Bấm để di chuyển vào ứng dụng messenger|
|5|Tag|Text button|||Bấm để tìm kiếm theo tag|
|6|Ảnh|Button|||Bấm để xem ảnh toàn màn hình|

**Use case Specification**

|**Use Case ID**||**UC\-12\.5\.1**|**Use Case Name**||Xem chi tiết báo cáo của khách|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng xem chi tiết báo cáo của khách||||
|**Pre\-Condition**||Trong hệ thống có tin đăng của người dùng đã có khách báo cáo||||
|**Main Flows**||1. Người dùng bấm vào quản lý lịch sử khách báo cáo<br>2. Hệ thống chuyển sang trang lịch sử khách báo cáo<br>3. Người dùng bấm vào nút Xem chi tiết của báo cáo<br>4. Hệ thống hiển thị màn hình chi tiết báo cáo||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||





