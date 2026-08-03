# 2 \- SRS Khonhapho website \- KHO

# [SRS Khonhapho website \- 1](https://v4cueke6gq8.sg.larksuite.com/docx/Dzsad7HoRokuzpxCakjlM4AXg7c)

# V\. Use case tổng thể Quản lý kho hàng

*Use case design*

## **Kho tài nguyên**

*Use case design*

### Đăng tin kho tài nguyên

*Đặc tả use case*

|Use case ID:|UC\-3\.4|Tên use case:|**Đăng tin**|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|23/04/2024|
|Các tác nhân chính:<br>|User \(trừ học viên, chuyên viên, trợ lý\)|Tác nhân phụ:|N/A|
|Mô tả:|Đăng tin|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Kho tài nguyên|||
|Luồng chính:|1\. Người dùng Đăng nhập thành công và truy cập vào Kho tài nguyên<br>2\. Người dùng chọn lệnh Đăng tin<br>3\. Hệ thống sẽ hiển thị form đăng tin<br>4\. Người dùng nhập thông tin và chọn lệnh Đăng tin<br>5\. Hệ thống xác thực thông tin<br>5\.1 Nếu thông tin sai, người dùng quay lại quay lại bước 4 để nhập thông tin<br>5\.2 Nếu thông tin đúng, hệ thống sẽ lưu thông tin vào CSDL và chờ duyệt<br>5\.2\.1 Nếu tin bị từ chối, hệ thống gửi thông báo bài viết bị từ chối <br>5\.2\.2 Nếu tin được duyệt, hệ thống đẩy bài viết lên trang chủ và gửi thông báo tin được duyệt <br>6\. Người dùng đọc thông báo |||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng không thành công, bài đăng trong hệ thống không đúng so với thông tin được duyệt|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|- BR\-02: SĐT phải đúng định dạng <br>- BR\-10: Phải upload được mọi định dạng ảnh<br>- BR\-33: Video và audio up lên không được quá 50mb/video<br>- BR\-34: Nội dung tin đăng nhập tối đa 3000 ký tự<br>- BR\-44: Giới hạn ảnh upload là 5mb<br>- BR\-61: Đặc điểm BĐS chỉ được chọn 5 mục, khi chọn mặt phố thì không thể chọn ngõ và ngược lại\. Gara oto chỉ được chọn khi được chọn mặt phố hoặc ngõ oto<br>- BR\-62: Cầu đối tác được cho phép nhập khi giá nhà \>= 20 tỷ<br>- BR\-63: Serial sổ chỉ được nhập A\-Z \+ Đ và 0\-9 có thể nhập nhiều hơn 1 sổ, sau khi nhập serial của 1 sổ, bấm hoặc dấu cách thì sẽ được nhập 1 tag sổ mới<br>- BR\-64: Khi chọn chưa sổ/Chờ cấp sổ hoặc có sổ/thiếu seri sổ thì trường điền serial sổ sẽ bị disable<br>- BR\-66: Giá nhà tối thiểu phải từ 200 triệu đổ lên<br>- BR\-67: Chọn loại hình Thổ cư thì thông số nhà sẽ bao gồm Diện tích \- Diện tích sử dụng \- Số tầng \- Mặt tiền \- Giá tiền\. Diện tích, diện tích sử dụng được phân biệt bằng dấu "/" Ex: 40/45\. Số tầng nếu không phải số thì là "Đất"\. Mặt tiền nhập số\. Giá nhập số<br>- BR\-70: Loại hình Chung cư thì thông số nhà sẽ bao gồm Diện tích sổ \- Diện tích cơi nới thực tế \- Tầng \- Giá tiền\. Diện tích sổ nhập số và dấu chấm nếu diện tích là số thập phân, diện tích cơi nới thực tế được phân biệt bằng dấu "/" Ex: 40/45\. Tầng nhập số\. Giá tiền nhập số\. Loại hình dự án thì thông số sẽ như loại hình thổ cư \(Update 03/03/2025\)|||
|Tin nhắn thông báo :|\- MSG18: *Thêm tin đăng thành công*<br>\- MSG16: *Bạn cần chọn mục này*<br>\- MSG01: *Bạn cần nhập mục này*<br>\- MSG47: *Nội dung dài ít nhất 50 ký tự\!*<br>\- MSG48: *Bạn cần nhập mục này*<br>*Số điện thoại chưa hợp lệ\!*<br>\- MSG49: *Bạn cần thêm mục này*<br>\- MSG50: *Bạn cần nhập chính xác diện tích\!*<br>\- MSG59: *Bạn cần nhập chính xác Số tầng\!*<br>\- MSG60: *Bạn cần nhập chính xác Giá\!*<br>\- MSG61: *Cần nhập số tiền tối thiểu từ 200 triệu trở lên*|||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|1||Xảy ra khi người dùng nhập thông tin và ấn nút đăng tin|Người dùng đăng tin kho tài nguyên<br>|Đầu chủ trở lên<br>|Kho tài nguyên|Validate<br>||
||1|`Validate`: Xảy ra khi người dùng nhập sai các trường thông tin|Hệ thống từ chối tạo tin đăng mới do người dùng nhập sai thông tin<br>|||||

*Sequence Diagram*

### Lọc kho tài nguyên

*Đặc tả use case*

|Use case ID:|UC\-3\.1|Tên use case:|**Lọc kho tài nguyên**|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|24/04/2024|
|Các tác nhân chính:|User |Tác nhân phụ:|N/A|
|Mô tả:|Lọc kho tài nguyên|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Kho tài nguyên|||
|Luồng chính:|1\. Người dùng Đăng nhập thành công và truy cập vào Kho tài nguyên<br>2\. Người dùng chọn các tiêu chí phù hợp<br>3\. Hệ thống lọc các bài viết có chứa các từ khoá trong tiêu chí và hiển thị tiêu chí phù hợp|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng không thành công, các tiêu chí tìm kiếm không đúng so với thông tin được lưu trong hệ thống|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|\- BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|||Xảy ra khi người dùng lọc tin đăng trong `kho tài nguyên`|Hệ thống trả về những tin đăng phù hợp với các tiêu chí|Role đầu chủ trở lên|Kho tài nguyên|Filer||
||1|`Filter`:|Hệ thống sẽ đọc những tin đăng phù hợp||Kho tài nguyên|||

***Sequence Diagram***

### Xem chi tiết tin đăng kho tài nguyên

*Đặc tả use case*

|Use case ID:|UC\-3\.2\.1|Tên use case:|**Xem chi tiết tin đăng**|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|24/04/2024|
|Các tác nhân chính:|User |Tác nhân phụ:|N/A|
|Mô tả:|Xem chi tiết tin đăng|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Kho tài nguyên|||
|Luồng chính:|1\. Người dùng Đăng nhập thành công và truy cập vào Kho tài nguyên<br>2\. Người dùng chọn các tiêu chí phù hợp<br>3\. Hệ thống lọc các bài viết có chứa các từ khoá trong tiêu chí và hiển thị tiêu chí phù hợp<br>4\. Người dùng lựa chọn hiển thị bài viết dưới dạng chi tiết <br>4\.1 Nếu người dùng chọn Xem khách hàng phù hợp với tin đăng <br>4\.1\.1 Hệ thống hiển thị danh sách khách phù hợp với tin đăng<br>4\.2 Nếu người dùng chọn Xem profile đầu chủ<br>4\.2\.1 Hệ thống chuyển hướng sang trang cá nhân của đầu chủ<br>4\.3 Nếu người dùng chọn Tương tác tin<br>4\.3\.1 Người dùng lựa chọn 1 trong 3 option Chia sẻ, Thích, Bình luận<br>4\.3\.2 Hệ thống lưu thông tin vào CSDL<br>4\.4 Nếu người dùng chọn Đặt lịch<br>4\.4\.1 Hệ thống hiển thị pop up hẹn ngày giờ<br>4\.4\.2 Người dùng chọn ngày giờ đặt lịch và chọn lệnh Đặt lịch<br>4\.4\.3 Hệ thống lưu thông tin vào CSDL và thông báo thành công<br>4\.5 Nếu người dùng chọn Lưu tin<br>4\.4\.1 Hệ thống hiển thị pop up chọn bộ sưu tập<br>4\.4\.2 Người dùng chọn bộ sưu tập thích hợp và chọn lệnh Xong<br>4\.4\.3 Hệ thống lưu thông tin vào CSDL và thông báo thành công<br>4\.6 Nếu người dùng chọn Báo cáo dẫn khách<br>4\.6\.1 Hệ thống hiển thị form báo cáo dẫn khách<br>4\.6\.2 Người dùng điền báo cáo dẫn khách và chọn lệnh Gửi<br>4\.6\.3 Hệ thống xác thực định dạng thông tin báo cáo<br>4\.6\.3\.1 Nếu thông tin đúng, hệ thống lưu vào CSDL và thông báo thành công<br>4\.6\.3\.2 Nếu thông tin sai, người dùng quay lại bước 4\.6\.2 Điền báo cáo dẫn khách  |||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng không thành công, các tiêu chí tìm kiếm không đúng so với thông tin được lưu trong hệ thống|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|\- BR\-18: Ghi chú bộ sưu tập tối đa 500 ký tự<br>\- BR\-19: Tên bộ sưu tập tối đa 50 ký tự<br>\- BR\-20: Các mục khác trong báo cáo dẫn khách nhập tối đa 200 ký tự<br>\- BR\-21: Ý kiến đầu khách nhập tối đa 500 ký tự<br>\- BR\-26: Trước 15 phút sau xác nhận, đầu chủ được quyền từ chối lịch hẹn<br>\- BR\-27: Trước 15 phút, đầu khách được quyền thu hồi lịch hẹn<br>\- BR\-28: Nhắc hẹn cả 2 bên 30 phút trước lịch hẹn đi xem nhà<br>\- BR\-79: Hệ thống gửi thông báo đến ĐC và TP của ĐK về lịch đặt<br>\- Thời gian đặt lịch bắt buộc phải \+ thêm 30 phút|||
|Tin nhắn thông báo :|\- MSG23: *Đặt lịch thành công\!*<br>\- MSG51: *Yêu cầu nhập trường này*<br>\- MSG62: *Cập nhật trạng thái thành công\!*<br>\- MSG63: Cập nhật thất bại\!<br>\- MSG64: *Thêm mới thành công\!*<br>\- MSG65: *Xóa thành công\!*|||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|E1<br>||Xảy ra khi người dùng truy cập trang`kho tài nguyên`|Hệ thống hiện thi danh sách tin đăng theo `role` của người dùng|`Học viên` trở lên<br>`Học viên` chỉ có thể xem tin đăng nhỏ hơn 9 tỷ<br>`Chuyên viên` trở lên có thể xem tin đăng từ 9 tỷ trở lên<br>`Thư ký`trở lên có thể xem kho hàng tổng|Kho tài nguyên|||
|E2||Xảy ra khi người dùng ấn vào xem `chi tiết 1 tin đăng`|Hệ thống hiện thi chi tiết tin đăng|như trên|Kho tài nguyên|||
|E3||Xảy ra khi người dùng xem `khách phù hợp với tin đăng`|Hệ thống hiện thị danh sách khách hàng phù hợp|`Khách hàng của mình`|Customer|||
|E4||Xảy ra khi người dùng bấm xem `chi tiết khách hàng`|Hệ thống hiện thị thông tin chi tiết của khách hàng|`Khách hàng của mình`|Customer|||
|E5||Xảy ra khi người dùng bấm vào `Tên đầu chủ`|Hệ thống sẽ chuyển hướng sang trang `profile` của đầu chủ|`Học viên` trở lên|Profile|||
|E6||Xảy ra khi người dùng bấm vào `Lịch sửa chỉnh sửa`|Hệ thống hiện thị danh sách `lịch sử chỉnh sửa` của tin đăng||\-|||
|E7||Xảy ra khi người dùng bấm vào `thích` tin đăng|Hệ thống sẽ hiện thị người dùng `đã thích bài viết`||Thích|LikeCount||
|E8||Xảy ra khi người dùng bấm vào `bỏ thích` tin đăng|Hệ thống sẽ hiển thị nút `đã thích` sang `chưa thích`|Người dùng dã thích bài viết|Thích|LikeCount||
||H1|LikeCount: Xảy ra khi người dùng `thích`hoặc `bỏ thích` tin đăng|Hệ thống sẽ cập nhật lại số lượng lượt `thích` bài viết||Thích|||
|E8||Xảy ra khi người dùng `bình luận`tin đăng|Hệ thống sẽ thêm và hiện thị `bình luận`của người dùng|Tin đăng không khoá bình luận|Bình luận|CommentCount,<br>ValidateComment||
|E9||Xảy ra khi người `xoá bình luận`tin đăng|Hệ thống sẽ xoá `bình luận`của người dùng|Người dùng đã bình luận thành công|Bình luận|CommentCount||
|E10||Xảy ra khi người dùng `trả lời bình luận`|Hệ thống sẽ tạo bình luận mới và hiện thi|Trả lời vào bình luận "cha"|Bình luận|CommentCount<br>ValidateComment||
||H2|`CommentCount`:  |Hệ thống sẽ cập nhật lại số lượng`bình luận` bài viết||Bình luận|||
|E11||Xảy ra khi người dùng `cập nhât bình luận`|Hệ thống sẽ cập nhật lại bình luận của người dùng và hiện thị lại|Người dùng là tác giả của bình luận<br>|Bình luận|ValidateComment<br>||
||H3|`ValidateComment`: |Hệ thống từ chối tạo/cập nhật bình luận khi người dùng nhập không hợp lệ|Số ký tự `tối đa 3000`|Bình luận|||
|E12||Xảy ra khi người dùng `khoá bình luận`|Hệ thống sẽ khoá mục bình luận lại|Người dùng là tác giả của tin đăng|Feed|||
|E12||Xảy ra khi người dùng bấm nút `chia sẻ`|Hệ thống sẽ hiện thi nút: `sao chép đường dẫn` và `chia sẻ nhóm chat` \(cập nhật sau\)||Feed|||
|E13||Xảy ra khi người dùng tạo lịch hẹn dẫn khách||`Học viên` trở lên|Lịch hẹn dẫn khách|ValidateTime||
||H4|`ValidateTime`: |`Học viên` trở lên có thể tạo lịch hẹn dẫn khách sau `30p hoặc dài hơn`so với thời gian hiện tại||Lịch hẹn dẫn khách|||
|E14||Xảy ra khi người dùng lưu tin vào `bộ sưu tập`|Hệ thống sẽ lưu tin đăng vào những bộ sưu tập đã chọn||Ghi chú|||
|E15||Xảy ra khi người dùng tạo`ghi chú`và gửi|Hệ thống sẽ tạo ghi chú mới|Người dùng đã lưu tin vào ít nhất 1 bộ sưu tập|Ghi chú|ValidateNote||
|E16||Xảy ra khi người dùng cập nhật ghi chú|- Hệ thống sẽ cập nhật ghi chú mới<br>- Hệ thống sẽ xoá ghi chú nếu `nội dung ghi chú` không có gì|Đã tạo thành công ghi chú trước đó|Ghi chú|||
||H5|`ValidateNote`|Hệ thống từ chối tạo/cập nhật ghi chú nếu người dùng nhập sai thông tin |Số ký tự `tối đa 3000`|Ghi chú|||
|H17||Xảy ra khi người dùng tạo báo cáo dẫn khách|Hệ thống sẽ tạo báo cáo dẫn khách mới|Học viên trở lên|Báo cáo dẫn khách|ValidateReport||
||H5|`ValidateReport`:|Hệ thống từ chối tạo báo cáo dẫn khách nếu người dùng nhập các trường thông tin||Báo cáo dẫn khách|||
|H18||Xảy ra khi người dùng đánh giá đầu chủ|Hệ thống sẽ tạo đánh giá mới cho đầu chủ|Người dùng đã tạo thành công `báo cáo dẫn khách`||||



### Search kho tài nguyên \(Modify 2\.2\)

*Đặc tả use case*

|Use case ID:|UC\-3\.3|Tên use case:|**Search kho tài nguyên**|
|---|---|---|---|
|Tác giả:|ThuHa|Ngày:|24/04/2024|
|Các tác nhân chính:|User |Tác nhân phụ:|N/A|
|Mô tả:|Tìm kiếm kho tài nguyên|||
|Điều kiện trước:|Người dùng đăng nhập thành công và truy cập vào Kho tài nguyên|||
|Luồng chính:|1\. Người dùng Đăng nhập thành công và truy cập vào Kho tài nguyên<br>2\. Người dùng điền từ khoá cần tìm kiếm vào textbox tìm kiếm và chọn lệnh Tìm kiếm<br>3\. Hệ thống lọc các bài viết có chứa các từ khoá và hiển thị nội dung tương ứng với từ khoá|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng không thành công, các tiêu chí tìm kiếm không đúng so với thông tin được lưu trong hệ thống|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|\- BR\-17: Các thành search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự|||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|WE01||Xảy ra khi người dùng `tìm kiếm` tin đăng trong `kho tài nguyên`|Hệ thống hiện thị những tin đăng hợp lệ<br>||Kho tài nguyên|Search||
||WE01H1|Search: <br>|Hệ thống đọc dữ liệu theo keyword yêu cầu||Kho tài nguyên|||

### Định giá và cho vay \(2\.4\)

*Đặc tả use case*

|Use case ID:|UC\-|Tên use case:||
|---|---|---|---|
|Tác giả:|Quỳnh Anh|Ngày:|20/11/2024|
|Các tác nhân chính:||Tác nhân phụ:|N/A|
|Mô tả:|Định giá và cho vay|||
|Điều kiện trước:||||
|Luồng chính:|1\. Ngân hàng sẽ thẩm định hàng được đưa lên kho, sau đó trả lại kết quả là căn nào có thể được vay\.<br>2\. Hệ thống hiển thị button "Tạo hồ sơ vay" với những căn được vay\.<br>3\. ĐC/CV khi ấn vào tạo hồ sơ vay có thể xem được hạn mức vay tối đa và lịch trả góp chi tiết\.<br>4. ĐC/CV điền hồ sơ vay giúp khách hàng<br>5. Hệ thống lưu hồ sơ vay và gửi sang cho ngân hàng\. Thông báo đến ĐC/CV chờ duyệt hồ sơ\.|||
|Luồng ngoại lệ:|Người dùng thực hiện chức năng không thành công, các tiêu chí tìm kiếm không đúng so với thông tin được lưu trong hệ thống|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

## Kho cá nhân

*Use case design*

### Đăng tin \(Như 1\.1\)

*Đặc tả use case*

|Use case ID:|UC \- 12\.1\.1|Tên use case:|Đăng tin|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|6/5/2024|
|Các tác nhân chính:|Đầu chủ|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user đăng tin lên kho tài nguyên|||
|Điều kiện trước:|\- Người dùng đăng nhập hệ thống thành công với quyền đầu chủ trở lên|||
|Luồng chính:|1\.User truy cập vào "quản lý kho hàng"<br>2\.User truy cập vào kho cá nhân, hệ thống mở kho cá nhân<br>3\.User click "Đăng tin", hệ thống hiển thị form đăng tin<br>4\.User nhập Data hợp lệ vào các field<br>5\.User click "Đăng tin"<br>6\.Hệ thống định dạng thông tin<br>6\.1\.Nếu thông tin đúng, hệ thống lưu tin vào CSDL chờ duyệt<br>6\.1\.1 Nếu tin đăng được thư kí duyệt, hệ thống đẩy tin đăng lên trang chủ<br>6\.1\.1\.1 Hệ thống thông báo đến user đăng bài tin đăng đã được duyệt <br>6\.1\.2 Nếu tin đăng không được thư kí duyệt, hệ thống không đẩy tin đăng lên trang chủ<br>6\.1\.2\.1 Hệ thống thông báo đến user đăng bài tin đăng không được duyệt <br>6\.2\.Nếu thông tin sai, hệ thống quay trở lại bước nhập thông tin|||
|Luồng ngoại lệ:|Nội dung tin đăng không đúng với thẩm định trong CSDL|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|- BR\-02: SĐT phải đúng định dạng <br>- BR\-10: Phải upload được mọi định dạng ảnh<br>- BR\-33: Video và audio up lên không được quá 50mb/video<br>- BR\-34: Nội dung tin đăng nhập tối đa 3000 ký tự<br>- BR\-44: Giới hạn ảnh upload là 5mb<br>- BR\-61: Đặc điểm BĐS chỉ được chọn 5 mục, khi chọn mặt phố thì không thể chọn ngõ và ngược lại\. Gara oto chỉ được chọn khi được chọn mặt phố hoặc ngõ oto<br>- BR\-62: Cầu đối tác được cho phép nhập khi giá nhà \>= 20 tỷ<br>- BR\-63: Serial sổ chỉ được nhập A\-Z \+ Đ và 0\-9 có thể nhập nhiều hơn 1 sổ, sau khi nhập serial của 1 sổ, bấm hoặc dấu cách thì sẽ được nhập 1 tag sổ mới<br>- BR\-64: Khi chọn chưa sổ/Chờ cấp sổ hoặc có sổ/thiếu seri sổ thì trường điền serial sổ sẽ bị disable<br>- BR\-66: Giá nhà tối thiểu phải từ 200 triệu đổ lên<br>- BR\-67: Chọn loại hình Thổ cư thì thông số nhà sẽ bao gồm Diện tích \- Diện tích sử dụng \- Số tầng \- Mặt tiền \- Giá tiền\. Diện tích, diện tích sử dụng được phân biệt bằng dấu "/" Ex: 40/45\. Số tầng nếu không phải số thì là "Đất"\. Mặt tiền nhập số\. Giá nhập số<br>- BR\-70: Loại hình Chung cư thì thông số nhà sẽ bao gồm Diện tích sổ \- Diện tích cơi nới thực tế \- Tầng \- Giá tiền\. Diện tích sổ nhập số và dấu chấm nếu diện tích là số thập phân, diện tích cơi nới thực tế được phân biệt bằng dấu "/" Ex: 40/45\. Tầng nhập số\. Giá tiền nhập số\. Loại hình dự án thì thông số sẽ như loại hình thổ cư \(Update 03/03/2025\)|||
|Tin nhắn thông báo :|- MSG\-11: Số điện thoại chưa hợp lệ\!<br>- MSG\-16: Không được bỏ trống mục này\.<br>- MSG\-20: Thêm tin đăng thành công\.<br>- MSG\-32: Video tải lên vượt quá 50MB vui lòng chọn lại<br>- MSG\-33: Tải audio không thành công<br>- MSG\-34: Số phải lớn hơn 0\!<br>- MSG\-35: Bạn cần chọn mục này<br>- MSG\-44: Serial sổ chưa đúng định dạng<br>- MSG\-48: Thông số nhà chưa đúng|||

*Activity diagram*

***Mô tả Event \& Policy:***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|1||Xảy ra khi người dùng nhập thông tin và ấn nút đăng tin|Người dùng đăng tin kho tài nguyên<br>|Đầu chủ trở lên<br>|Kho tài nguyên|Validate<br>||
||1|`Validate`: Xảy ra khi người dùng nhập sai các trường thông tin|Hệ thống từ chối tạo tin đăng mới do người dùng nhập sai thông tin<br>|||||

*Sequence Diagram*

### Search tin

*Đặc tả use case*

|Use case ID:|UC \- 12\.1\.2|Tên use case:|Search tin|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|6/5/2024|
|Các tác nhân chính:|Đầu chủ|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user tìm kiếm tin phù hợp trên kho tài nguyên|||
|Điều kiện trước:|\- Người dùng đăng nhập hệ thống thành công với quyền đầu chủ trở lên|||
|Luồng chính:|1\.User truy cập vào "quản lý kho hàng"<br>2\.User truy cập vào kho cá nhân, hệ thống mở kho cá nhân<br>3\.User điền từ khoá vào text box tìm kiếm, click icon "tìm kiếm'<br>4\.Hệ thống hiển thị kết quả tìm kiếm phù hợp với từ khoá đã nhập|||
|Luồng ngoại lệ:|không có kết quả phù hợp với data đã nhập|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG 14 : Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|WE01||Xảy ra khi người dùng `tìm kiếm` tin đăng trong `kho cá nhân`|Hệ thống hiện thị những tin đăng hợp lệ<br>||Kho cá nhân|Search||
||WE01H1|Search: <br>|Hệ thống đọc dữ liệu theo keyword yêu cầu||Kho cá nhân|||

*Sequence Diagram*

### Xem chi tiết tin

*Đặc tả use case*

|Use case ID:|UC \- 12\.1\.3|Tên use case:|Xem tin|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|6/05/2024|
|Các tác nhân chính:|Đầu chủ|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user xem các tin hiện có trên kho cá nhân|||
|Điều kiện trước:|\- Người dùng đăng nhập hệ thống thành công với quyền đầu chủ trở lên|||
|Luồng chính:|1. User di chuyển đến trang chủ<br>2. User di chuyển đến quản lý kho hàng \- kho cá nhân<br>3. Hệ thống mở kho cá nhân<br>4. User bấm vào xem 1 tin|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi người dùng xem chi tiết tin đăng|Hệ thống hiện thị chi tiết của tin đăng||Kho cá nhân|ViewDetails||
||\-|ViewDetails:|Hệ thống đọc tin đăng theo id |||||

*Sequence Diagram*

### Sửa tin

*Đặc tả use case*

|Use case ID:|UC \- 12\.1\.4|Tên use case:|Sửa tin|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|6/05/2024|
|Các tác nhân chính:|Đầu chủ, thư kí|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user thay đổi thông tin bài đăng|||
|Điều kiện trước:|\- Người dùng đăng nhập hệ thống thành công với quyền đầu chủ trở lên<br>\-Bài đăng đã được duyệt trên kho hàng trước đó|||
|Luồng chính:|1\.Truy cập vào quản lý kho hàng<br>2\.User click kho cá nhân, hệ thống mở "kho cá nhân"<br>3\.User chọn tin cần sửa, click button "sửa"<br>4\.Hệ thống hiển thị form chỉnh sửa<br>5\.User nhập data hợp lệ vào các Field<br>6\.Click button "sửa tin"<br>7\.Hệ thống thẩm dịnh thông tin<br>7\.1Nếu thông tin đúng với định dạng, hệ thống lưu vào CSDL<br>7\.2 Nếu thông tin sai định dạng, hệ thống quay trở lại bước nhập data|||
|Luồng ngoại lệ:|Sửa thông tin sai định dạng|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR34: Video up lên không được quá 50mb/video<br>BR35: Nội dung tin đăng nhập tối đa 3000 ký tự<br>BR\-67: Tin đã đăng thì không thẻ sửa được các trường thông tin<br>\- Pháp lý<br>\- Serial sổ<br>\- Số điện thoại chủ nhà<br>\- Ảnh sổ đỏ pháp lý<br>\- Audio pháp lý|||
|Tin nhắn thông báo :|MSG14 : Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi người dùng cập nhật tin đăng trong `kho cá nhân`|Người dùng sửa tin đăng của mình|Người dùng đã tạo tin đăng thành công|<br>Kho cá nhân|InvalidValidationData||
|||`InvalidValidationData`: Xảy ra khi người dùng nhập sai thông tin|Hệ thống từ chối cập nhật tin đăng do người dùng nhập sai các trường thông tin||Kho cá nhân|||

*Sequence Diagram*

### Filter Tin

*Đặc tả use case*

|Use case ID:|UC \- 12\.1\.5|Tên use case:|Filter tin|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|6/05/2024|
|Các tác nhân chính:|Đầu chủ, thư kí|Tác nhân phụ:|N/A|
|Mô tả:||||
|Điều kiện trước:|\- Người dùng đăng nhập hệ thống thành công với quyền đầu chủ trở lên|||
|Luồng chính:|1\.User truy cập vào quản lý kho hàng<br>2\.User click Kho cá nhân<br>3\.Hệ thống mở kho cá nhân<br>4\.User chọn các tiêu chí phù hợp<br>5\.Hệ thống hiển thị kết quả phù hợp với tiêu chí|||
|Luồng ngoại lệ:|Hệ thống không tìm thấy kết quả phù hợp với tiêu chí|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG 57 : Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|WE01<br>||Xảy ra khi người dùng lọc tin đăng trong `kho cá nhân`|Hệ thống hiện thị những tin đăng phù hợp||Kho cá nhân<br>|Filter||
|||`Filter`: |Hệ thống đọc những tin đăng phù hợp||Kho cá nhân|||

*Sequence Diagram*

### Sửa trạng thái tin \(Modify 2\.3\)

*Đặc tả use case*

|Use case ID:|UC \- 12\.1\.6|Tên use case:|Sửa trạng thái tin|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|6/05/2024|
|Các tác nhân chính:|Đầu chủ, thư kí|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user thay đổi trạng thái bài đăng|||
|Điều kiện trước:|\- Người dùng đăng nhập hệ thống thành công với quyền đầu chủ trở lên<br>\-Bài đăng đã được duyệt trước đó|||
|Luồng chính:|1. User truy cập vào quản lý kho hàng<br>2. User click Kho cá nhân<br>3. Hệ thống mở kho cá nhân<br>4. User click icon "sửa" của tin đã chọn, hệ thống hiển thị danh sách trạng thái<br>5. User chọn trạng thái và nhập lý do<br>6. Hệ thống lưu vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG14: Cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi người dùng cập nhật trạng thái tin đăng|Người dùng cập nhật trạng tin đăng của tin đăng đã được đăng<br>|Người dùng đã tạo tin đăng thành công|<br>Kho cá nhân|Logging||

### Bum chốt \(Modify 2\.3\)

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

### Xoá Tin

*Đặc tả use case*

|Use case ID:|UC \- 12\.1\.7|Tên use case:|Xoá tin|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|6/05/2024|
|Các tác nhân chính:|Đầu chủ, thư kí|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user chuyển tin vào thùng rác|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền đầu chủ trở lên<br>\-Bài đăng đã được duyệt trên kho hàng trước đó|||
|Luồng chính:|1\.User truy cập vào quản lý kho hàng<br>2\.User click Kho cá nhân<br>3\.Hệ thống mở Kho cá nhân<br>4\.User chọn 1 tin, click button "Xoá"<br>5\.Hệ thống hiển thị pop\-up xác nhận<br>5\.1\.Nếu ciick đồng ý, hệ thống chuyển tin vào thùng rác<br>5\.2\.Nếu click huỷ, hệ thống đóng pop\-up, tin không được xoá|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG14: cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi người dùng `xoá tin` đã đăng trong `kho cá nhân`<br>|Tin đăng của người dùng sẽ chuyển sang trạng thái đã xoá|Người dùng đã tạo tin đăng thành công|Kho cá nhân|Logging<br>||

*Sequence Diagram*

### Khôi phục tin

*Đặc tả use case*

|Use case ID:|UC \- 12\.1\.8|Tên use case:|Khôi phục tin|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|6/05/2024|
|Các tác nhân chính:|Đầu chủ, thư kí|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user khôi phục lại bài đăng khi đã xoá tin|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền đầu chủ trở lên<br>\-Bài đăng đã được chuyển vào thùng rác|||
|Luồng chính:|1. User truy cập vào quản lý kho hàng<br>2. User click Kho cá nhân<br>3. User hệ thống mở Kho cá nhân<br>4. User chọn tab thùng rác<br>5. Hệ thống mở tab thùng rác<br>6. User chọn 1 tin trong thủng rác, Click button "khôi phục"<br>7. Hệ thống hiển thị pop\-up xác nhận<br>    7\.1 Nếu click xác nhận, bài viết chuyển tin sang tab chờ duyệt<br>    7\.2 Nếu click huỷ, bài viết không được khôi phục,pop up đóng|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG14: cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi người dùng khôi phục lại tin đăng đã xoá|Tin đăng của người dùng sẽ bỏ trạng thái đã xoá|Tin đăng đã bị xoá|Kho cá nhân|Logging||

*Sequence Diagram*

### Xoá vĩnh viễn tin

*Đặc tả use case*

|Use case ID:|UC \- 12\.1\.9|Tên use case:|Xoá vĩnh viễn tin|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|6/5/2024|
|Các tác nhân chính:|Đầu chủ, thư kí|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user xoá vĩnh viễn bài đăng đã đăng trước đó|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền đầu chủ trở lên<br>\-Bài đăng đã được chuyển vào thùng rác|||
|Luồng chính:|1\.User truy cập vào quản lý kho hàng<br>2\.User click Kho cá nhân<br>3\.Hệ thống mở Kho cá nhân<br>4\.User chọn tab thùng rác<br>5\.Click button "Xoá vĩnh viễn"<br>6\.Hệ thống hiển thị pop\-up xác nhận<br>6\.1 Nếu click xác nhận, bài viết được xoá khỏi CSDL<br>6\.2Nếu click huỷ, bài viết không được xoá,pop up đóng|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG14: cập nhật thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi người dùng xoá tin nhắn vĩnh viễn|Tin đăng của người dùng sẽ được xoá mà không thể khôi phục lại|Tin đăng ở trong thùng rác|Kho cá nhân|Logging||

### Xem danh sách người xem tin \(Chưa có mô tả Ver 2\.x\)

## Tin chính chủ

*Use case design*

### Xem danh sách tin đăng

*Đặc tả use case*

|Use case ID:|UC \- 12\.2\.1|Tên use case:|Xem danh sách tin đăng|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|7/5/2024|
|Các tác nhân chính:|Đầu chủ, thư kí|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user xem list danh sách tin chính chủ|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền đầu chủ trở lên|||
|Luồng chính:|1\.User truy cập vào quản lý kho hàng<br>2\.User click Kho tin chính chủ<br>3\.Hệ thống hiển thị kho tin chính chủ|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi người dùng xem danh sách tin đăng trong `Quản lý kho hàng`|Đầu chủ trở lên có thể xem danh sách tin chính chủ|Role đầu chủ trở lên|Tin chính chủ|Logging<br>||

### Search tin chính chủ

*Đặc tả use case*

|Use case ID:|UC \- 12\.2\.2|Tên use case:|Search tin chính chủ|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|7/5/2024|
|Các tác nhân chính:|Đầu chủ, thư kí|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user tìm kiếm tin chính chủ|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền đầu chủ trở lên|||
|Luồng chính:|1\.User truy cập vào quản lý kho hàng<br>2\.User click Kho tin chính chủ<br>3\.Hệ thống hiển thị kho tin chính chủ<br>4\.User nhập data vào text box tìm kiếm, clcik icon "tìm kiếm"<br>5\.Hệ thống hiển thị kết quả tìm kiếm phù hợp với data đã nhập ở text box|||
|Luồng ngoại lệ:|Không có kết quả tìm kiếm phù hợp với data trong text box|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi người dùng tìm kiếm `Tin chính chủ`|Đầu chủ trở lên có thể tìm kiếm `tin chính chủ` theo từ khoá|Role đầu chủ trở lên|Tin chính chủ|Logging<br>||

### Filter tin chính chủ

*Đặc tả use case*

|Use case ID:|UC \- 12\.2\.3|Tên use case:|Search tin chính chủ|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|7/5/2024|
|Các tác nhân chính:|Đầu chủ, thư kí|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user lọc tin chính chủ phù hợp với tiêu chí của khách|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền đầu chủ trở lên|||
|Luồng chính:|1\.User truy cập vào quản lý kho hàng<br>2\.User click Kho tin chính chủ<br>3\.Hệ thống hiển thị kho tin chính chủ<br>4\.User chọn các tiêu chí<br>5\.Hệ thống hiển thị kết quả tìm kiếm phù hợp với data đã nhập ở text box|||
|Luồng ngoại lệ:|Không có kết quả phù hợp với với tiêu chí tìm kiếm|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi người dùng tìm kiếm \`Tin chính chủ\`|Đầu chủ trở lên có thể lọc và xem danh sách `tin chính chủ`|Role đầu chủ trở lên|Tin chính chủ|Logging<br>||

### Phản hồi tin chính chủ

*Đặc tả use case*

|Use case ID:|UC \- 12\.2\.4|Tên use case:|Phản hồi tin chính chủ|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|7/5/2024|
|Các tác nhân chính:|Đầu chủ, thư kí|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user phản hồi lại tin chính chủ|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền đầu chủ trở lên|||
|Điều kiện sau:||||
|Luồng chính:|1. User truy cập vào quản lý kho hàng<br>2. User click Kho tin chính chủ<br>3. Hệ thống hiển thị kho tin chính chủ<br>4. User Click button "phản hồi của 1 tin"<br>5. Hệ thống hiển thị form phản hồi <br>    5\.1 Nếu chọn 1 trong 3 lý do bất kì, Click button "lưu" hệ thống lưu vào CSDL <br>    5\.2 Nếu chọn lý do khác, nhập data vào field, click button "lưu" hệ thống lưu vào CSDL|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG 52 : Thêm thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi `Đầu chủ trở lên` phản hồi `tin chính chủ`<br>|`Đầu chủ` trở lên có thể lọc và xem danh sách `tin chính chủ`|Role đầu chủ trở lên|Tin chính chủ|InvalidValidationData, Logging<br>||
||\-|Xảy ra khi người dùng không nhập mục `Lý do khác` trong phần phản hồi|Người dùng chọn `lý do khác`trong mục phản hồi và không ghi lý do<br>|Người dùng chọn `Lý do khác`||||

### Lưu tin chính chủ

*Đặc tả use case**1*

|Use case ID:|UC \- 12\.2\.5|Tên use case:|Phản hồi tin chính chủ|
|---|---|---|---|
|Tác giả:|DucAn|Ngày:|7/5/2024|
|Các tác nhân chính:|Đầu chủ, thư kí|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user phản hồi lại tin chính chủ bằng lý do cụ thể\.|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền đầu chủ trở lên|||
|Luồng chính:|1\.User truy cập vào quản lý kho hàng<br>2\.User click Kho tin chính chủ<br>3\.Hệ thống mở Kho tin chính chủ<br>4\.User click button "lưu", hệ thống hiển thị button "lưu" chuyển<br>5\.User click tab tin đã lưu<br>6\.Hệ thống chuyển sang tab tin đã lưu|||
|Luồng ngoại lệ:||||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:||||
|Tin nhắn thông báo :|MSG 52 :Thêm thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi `Đầu chủ trở lên` phản hồi `tin chính chủ`<br>|`Đầu chủ` trở lên có thể lọc và xem danh sách `tin chính chủ`|Role đầu chủ trở lên|Tin chính chủ|InvalidValidationData, Logging<br>||
||\-|Xảy ra khi người dùng không nhập mục `Lý do khác` trong phần phản hồi|Người dùng chọn `lý do khác`trong mục phản hồi và không ghi lý do<br>|Người dùng chọn `Lý do khác`||||

### Ghi chú tin chính chủ \(Tin đã lưu\)

*Đặc tả use case*

|Use case ID:|UC \- 12\.2\.5|Tên use case:|Phản hồi tin chính chủ|
|---|---|---|---|
|Tác giả:|Quang Trọng|Ngày:|7/5/2024|
|Các tác nhân chính:|Đầu chủ, thư kí|Tác nhân phụ:|N/A|
|Mô tả:|Cho phép user phản hồi lại tin chính chủ bằng lý do cụ thể\.|||
|Điều kiện trước:|\- Hệ thống đang ở trạng thái hoạt động<br>\- Người dùng đăng nhập hệ thống thành công với quyền đầu chủ trở lên|||
|Luồng chính:|1. User truy cập vào `quản lý kho hàng`<br>2. User truy cập vào `kh``o tin chính chủ`<br>3. Hệ thống hiện thị danh sách tin đăng<br>4. User truy cập vào `tin đã lưu`<br>5. Hiển thị danh sách tin đã lưu<br>6. User click button `Ghi chú` của 1 tin đã lưu bất kỳ<br>7. Hệ thống hiển thị form `nhập ghi chú`<br>8. User nhập data vào field, click button `lưu`, hệ thống lưu vào CSDL|||
|Luồng ngoại lệ:|Bỏ trống Field lý do khách, click button lưu|||
|Ưu tiên:|High|||
|Tần suất sử dụng :|High|||
|Quy tắc nghiệp vụ:|BR\-21 Ý kiến đầu khách nhập tối đa 500 kí tự|||
|Tin nhắn thông báo :|MSG 52 Thêm thành công|||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi `Đầu chủ trở lên` ghi chú 1 tin đăng đã lưu trong `tin chính chủ`|`Đầu chủ` trở lên có thể viết ghi chú một bài viết đã lưu|Role đầu chủ trở lên|Tin chính chủ|Logging<br>||
|||Xảy ra khi người dùng cập nhật `ghi chú` mà để trống dữ liệu|Người dùng có thể xoá `ghi chú` bằng cách cập nhật `dữ liệu trống` trong `field nhập ghi trú`để xoá ghi chú đã lưu|Người dùng đã tạo ghi chú trước đó|Tin chính chủ|Logging||

## K**ho hàng tự do**

*Use case Design*

### **Search kho hàng tự do**

**Use case Specification**

|**Use Case ID**||**UC\-12\.1\.2**|**Use Case Name**||Search kho hàng tự do|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**13/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng tìm kiếm tin trong kho hàng tự do||||
|**Pre\-Condition**||Trong hệ thống có tin kho hàng tự do||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục Kho hàng tự do<br>2. Hệ thống chuyển hướng đến màn hình Kho cá nhân<br>3. Người dùng bấm vào thanh search<br>4. Người dùng nhập đầy đủ từ khóa cần tìm và bấm nút gửi trên bàn phím<br>5. Hệ thống hiển thị tin đăng khớp với từ khóa<br>||||
|**Exception Flows**||5\.1 Nếu từ khóa nhập sai thì không hiển thị||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi người dùng tìm kiếm theo từ khoá trong `kho hàng tự do`|`Đầu chủ trở lên` có thể tìm kiếm và xem `kho hàng tự do`|Role đầu chủ trở lên|Kho hàng tự do|Logging<br>||

### **Filter kho hàng tự do**

**Use case Specification**

|**Use Case ID**||**UC\-12\.3\.3**|**Use Case Name**||**Filter kho hàng tự do**|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**13/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng lọc kho hàng tự do với các tiêu chí||||
|**Pre\-Condition**||Trong hệ thống có tin trong kho hàng tự do||||
|**Main Flows**||1. Người dùng truy cập Quản lý kho hàng, chọn mục Kho hàng tự do<br>2. Hệ thống chuyển hướng đến màn hình kho hàng tự do<br>3. Người dùng bấm vào bộ lọc và chọn các tiêu chí phù hợp<br>4. Hệ thống lọc các tin đăng có chứa các từ khoá trong tiêu chí và hiển thị tiêu chí phù hợp||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi người dùng lọc `kho hàng tự do`theo các tiêu chí|`Đầu chủ trở lên` có thể lọc và xem `kho hàng tự do`|Role đầu chủ trở lên|Kho hàng tự do|Logging<br>||

### **Xem chi tiết kho hàng tự do**

#### **Tương tác kho hàng tự do**

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

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi người ấn xem chi tiết `kho hàng tự do`|`Đầu chủ trở lên` có thể xem và tương tác với tin đăng trong`kho hàng tự do`|Role đầu chủ trở lên|Kho hàng tự do|Logging<br>||

## **Quản lý Lịch sử khách đặt lịch**

*Use case Design*

### **Xem lịch sử chat đặt lịch**

**Use case Specification**

|**Use Case ID**||**UC\-12\.4\.1**|**Use Case Name**||Xem lịch sử chat|
|---|---|---|---|---|---|
|**Author**||**NamNP**|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng chat với nhau để xác nhận||||
|**Pre\-Condition**||Người dùng có khách đặt lịch trước đó||||
|**Main Flows**||1. Người dùng bấm vào Quản lý kho hàng, chọn Quản lý lịch sử khách đặt lịch<br>2. Hệ thống hiển thị danh sách lịch khách đặt<br>3. Người dùng bấm vào block chi tiết của lịch đặt<br>4. Hệ thống hiển thị màn hình chat chi tiết<br>5. Người dùng nhập nội dung sau đấy bấm nút gửi<br>6. Hệ thống lưu vào CSDL, hệ thống hiển thị nội dung mới nhập lên màn hình||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||

*Activity diagram*

***Mô tả Event \& Policy ***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|UE01<br>||Xảy ra khi người dùng truy cập vào `lịch sử đầu khách đặt lịch`|Đầu chủ trở lên có thể xem danh sách `lịch sử đầu khách đặt lịch`<br>||Lịch hẹn dẫn khách|Read<br>||
||\-|||||||
|2||Xảy ra khi người dùng xem chi tiết 1 `lịch khách đặt`||||SendMessage||
||\-|`SendMessage`: Sảy ra khi người dùng gửi tin nhắn mới|Hệ thống tạo tin nhắn mới|||||

## Q**uản lý Lịch sử khách báo cáo**** **

*Use case design*

### **Search báo cáo của khách**

**Use case Specification**

|**Use Case ID**||**UC\-12\.5\.2**|**Use Case Name**||Search báo cáo của khách|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng tìm báo cáo của khách với từ khóa||||
|**Pre\-Condition**||Trong hệ thống có tin đăng của người dùng đã có đầu khách báo cáo||||
|**Main Flows**||1. Người dùng bấm vào Quản lý kho hàng, chọn lịch sử khách báo cáo<br>2. Hệ thống chuyển sang trang lịch sử khách báo cáo<br>3. Người dùng bấm vào nút Xem chi tiết của báo cáo<br>4. Hệ thống hiển thị màn hình chi tiết báo cáo||||
|**Exception Flows**||4\.1 Nếu thông tin sai định dạng hệ thống sẽ yêu cầu người dùng nhập lại thông tin \(quay lại bước 3\)||||
|**Business Rules**||BR\-17: Các thanh search đều phải bỏ dấu cách đầu cuối và cắt dấu cách thừa giữa các ký tự||||
|**Application Messages**||||||

*Activity diagram*

***Mô tả Event \& Policy***

|**ID**||**Event**|**Policy**|**Policy Condition**|**Resource**|**Event Handler**|**Additional Actions**|
|---|---|---|---|---|---|---|---|
|WE01||Xảy ra khi người dùng `tìm kiếm` tin đăng trong `lịch sử báo cáo dẫn khách`|Hệ thống hiện thị những báo cáo  hợp lệ<br>||Báo cáo dẫn khách|Search||
||WE01H1|Search: <br>|Hệ thống đọc dữ liệu theo keyword yêu cầu||Báo cáo dẫn khách|||

### **Xem chi tiết báo cáo**

**Use case Specification**

|**Use Case ID**||**UC\-12\.5\.1**|**Use Case Name**||Xem chi tiết báo cáo của khách|
|---|---|---|---|---|---|
|**Author**||NamNP|**Date**||**10/5/2024**|
|**Actor**||User \(Đầu chủ\)||||
|**Description**||Người dùng xem chi tiết báo cáo của khách||||
|**Pre\-Condition**||Trong hệ thống có tin đăng của người dùng đã có khách báo cáo||||
|**Main Flows**||1. Người dùng bấm vào Quản lý kho hàng, chọn lịch sử khách báo cáo<br>2. Hệ thống chuyển sang trang lịch sử khách báo cáo<br>3. Người dùng bấm vào nút Xem chi tiết của báo cáo<br>4. Hệ thống hiển thị màn hình chi tiết báo cáo||||
|**Exception Flows**||||||
|**Business Rules**||||||
|**Application Messages**||||||



### 

### 

### 

### 

## 

## 

## 

## 

## 

## 

### 

# [3 \- SRS Khonhapho website \- Quản lý Phòng/Nhóm](https://v4cueke6gq8.sg.larksuite.com/wiki/UA7SwaSc0iiR2zkoBQIlzHuIg9e)



