# PRD \- Nhà Phố Việt Nam

**TẬP ĐOÀN NHÀ PHỐ VIỆT NAM**

# 



![Image](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=NDE1YTY0YWI5NzkyZjAzOWZlOTVmNzFjYTkwMTljZDdfOTYzNGU0M2YxYmVkNDAzNmVlNTViY2YyZDRjOWZiM2RfSUQ6NzM2NDA2MDA4ODgwMzMxMTY0OF8xNzgwNjQ1NjE0OjE3ODA3MzIwMTRfVjM)

# 

**TÀI LIỆU YÊU CẦU NGHIỆP VỤ**

Lưu hành nội bộ

# 

**Hà Nội, ngày 19 tháng 4 năm 2023**

**Table of content**

**VERSION HISTORY**

**DOCUMENT APPROVALS**

1\. **OVERVIEW**

2\. **SYSTEM REQUIREMENTS**

3\. **USER REQUIREMENTS**

4\. **FUNCTIONAL REQUIREMENTS**

# **VERSION HISTORY**

|**Phiên bản**|**Ngày**|**Thay đổi bởi**|**Lý do thay đổi**|
|---|---|---|---|
|1\.0|19/04/2024|Nguyễn Phương Nam|Tạo mới|
|1\.1|05/05/2024|Đỗ Đức Trung|Cập nhập Tổng quan|
|1\.1|24/07/2024|Nguyễn Phương Nam|Cập nhật use case, functional requirement|
|||||



# **DOCUMENT APPROVALS  **

|**Tên người**** chấp nhận**|**Chức danh trong dự**** án**|**Chữ ký điện tử/Phê**** duyệt**|**Ngày**|
|---|---|---|---|
|||||
|||||



# TỔNG QUAN

## Tập đoàn Nhà Phố Việt Nam

- Tập đoàn Nhà Phố Việt Nam hoạt động trong lĩnh vực kinh doanh dịch vụ bất động sản\. Hệ sinh thái Nhà Phố Việt Nam đáp ứng nhu cầu người dùng là các nhà môi giới bất động sản, hướng tới mở rộng cho các môi giới bất động sản cả thứ cấp \(BĐS mua bán lại\) và sơ cấp \(BĐS mở bán lần đầu\)\.

- Tập đoàn Nhà Phố Việt Nam đã phát triển ra các trang web, ứng dụng hỗ trợ những nhà môi giới trong lĩnh vực dịch vụ bất động sản như nhaphonet\.vn và khonhapho\.com

    - Trong đó khonhapho\.com là website lưu trữ và quản lý các sản phẩm bất động sản \(thông tin giao dịch của bất động sản\), và thành viên tham gia vào quá trình trao đổi, môi giới các sản phẩm đó\.

    - khonhapho\.com cung cấp một môi trường cho những nhà môi giới và các đầu chủ có thể truy cập vào kho lưu trữ sản phẩm \(nhà đất, chung cư,\.\.\) để tham khảo, định giá cũng như tiến hành các thủ tục mua bán một cách dễ dàng, tiện lợi và hoạt động 24/7\.

- Tập đoàn hướng tới xây dựng hệ sinh thái dịch vụ Bất động sản tập trung vào các nhà môi giới \(Agents \& Brokers\), tạo môi trường hợp tác thuận tiện và tối ưu cho các môi giới hoạt động và phát triển\. Hiện tại Nhà Phố Việt Nam đang tập trung vào cải tiến các sản phẩm công nghệ để thân thiện với NSD hơn, cũng như mở rộng quy mô hệ sinh thái sang nhiều lĩnh vực \(ví dụ như leasing, tài chính, thanh toán,\.\.\.\)\.

- Trong quá trình xây dựng và phát triển web khonhapho\.com chưa đáp ứng được tốc độ scale up nhanh chóng của Tập đoàn, từ đó Ban Lãnh đạo đã quyết định thực hiện Tái cấu trúc toàn bộ lại hệ sinh thái công nghệ nhằm phục vụ tốt hơn cho việc mở rộng và phát triển của Tập đoàn\.

- Hệ thống web và app hiện tại sẽ được quy hoạch theo mục đích gồm:

    - Web: phục vụ công tác quản trị của Tập đoàn có kết nối đồng bộ với các nền tảng App\.

        - ID: quản lý Users môi giới và nhân sự Tập đoàn

        - Kho: quản lý kho hàng Bất động sản \(bán và cho thuê\)

    - App: nền tảng MXH hướng tới người dùng là các môi giới cùng hoạt động của môi giới\.

        - Giao diện MXH phiên bản web \(gồm cả các hoạt động quản trị\)\.

        - Các Application tích hợp và mở rộng khác\.

## Mục đích và phạm vi tài liệu

- Tài liệu bao gồm các quy trình và nội dung liên quan tới hệ sinh thái các sản phẩm công nghệ của Tập đoàn Nhà Phố Việt Nam bao gồm các phiên bản Web/App phù hợp mục tiêu kinh doanh của Tập đoàn\.

- Cùng với tài liệu này là các tài liệu chi tiết khác SRS, PRD, FRS,\.\.\. được xây dựng tuỳ theo yêu cầu của từng project cụ thể\.

    - Tài liệu yêu cầu Website khonhapho:

        - [SRS Khonhapho\.vn](https://v4cueke6gq8.sg.larksuite.com/docx/Dzsad7HoRokuzpxCakjlM4AXg7c?from=from_copylink)

        - [2 \- SRS Khonhapho website](https://v4cueke6gq8.sg.larksuite.com/wiki/FMylwVW5kiJYC6kvZzzlcycfgWd)

        - [3 \- SRS Khonhapho website \- QUẢN LÝ PHÂN QUYỀN](https://v4cueke6gq8.sg.larksuite.com/wiki/UA7SwaSc0iiR2zkoBQIlzHuIg9e)

        - [4 \- SRS Khonhapho website \- QUẢN TRỊ HQ](https://v4cueke6gq8.sg.larksuite.com/wiki/UDyLw1jlsiOkBbkOUhNl0q2KgTc)

        - [5 \- SRS Khonhapho website \- Trang quản trị](https://v4cueke6gq8.sg.larksuite.com/wiki/Sz5zw1uLHiTUSgkxF28lr3QSgLe)

        - [6 \- SRS Khonhapho website \- Admin](https://v4cueke6gq8.sg.larksuite.com/wiki/Y2aIwo1CqiAz2GkmHFZlUm8agHd)

    - Tài liệu yêu cầu App NPVN:

        - [SRS Mobile App Nhà Phố VN](https://v4cueke6gq8.sg.larksuite.com/docx/Tr8ZdymOjo3Jb1x2GhMle6CNgNR?from=from_copylink)

        - [2 \- SRS Mobile App Nhà Phố VN](https://v4cueke6gq8.sg.larksuite.com/wiki/YQnfwSl40io6PHkDP6IlSfzQgRb)

        - [3 \- SRS Mobile App Nhà Phố VN](https://v4cueke6gq8.sg.larksuite.com/wiki/DI3UwxAMniaWUjkRDwwlfUdugWJ)

    - Tài liệu yêu cầu các project khác: \(updating\)

## **Định nghĩa thuật ngữ và các từ viết tắt**

|**Thuật ngữ**|**Viết tắt**|**Mô tả**|
|---|---|---|
|Môi giới|||
|Đầu chủ|ĐC||
|Chuyên viên|CV||
|Trợ lý|TrL||
|Học viên|HV||
|Đầu khách|ĐK||
|Thư ký|TK||
|Trưởng phòng|TP||

## Kiến trúc Hệ sinh thái

## Users Personas

Đối với các sản phẩm web và app hiện tại \(khonhapho\.com\)

- Người dùng đăng nhập: Guest

- Môi giới Đầu khách \(Học viên, Chuyên viên\):

- Môi giới Đầu chủ

- Các cấp quản lý

    - Quản lý cấp phòng \(trưởng phòng, phó phòng, trợ lý,\.\.\.\):

    - Quản lý cấp Công ty \(thư ký các cấp, các giám đốc, BOD\.\.\.\):

    - Quản trị Hệ thống \(admin, BOD\-view, tổng thư ký\)\.

## Mô tả nghiệp vụ

### Business Process Flow

- Đầu chủ ký nhà sau đó đăng lên "kho tài nguyên"

- Đầu khách \(học viên/chuyên viên\) tìm kiếm khách có nhu cầu mua

- Đầu khách tìm kiếm trên kho tài nguyên các sản phẩm BĐS phù hợp nhu cầu của khách

- Sau khi đầu khách tìm được khách phù hợp, đầu khách sẽ đặt lịch dẫn khách với đầu chủ

- Đầu chủ xác nhận lịch hẹn với đầu khách, đầu khách sẽ dẫn khách đến xem nhà theo lịch hẹn đã được xác nhận

- Sau khi dẫn khách xem nhà, đầu khách thực hiện báo cáo dẫn khách và báo cáo đầu chủ

- Nếu như khách chốt nhà, đầu khách và đầu chủ sẽ thực hiện thủ tục mua bán \(đặt cọc, công chứng,\.\.\.\.\)

- Sau khi thương vụ hoàn tất, đầu khách đã chốt được khách sẽ đăng bài thông báo vụ chốt lên feed và đầu chủ sẽ cập nhập lại trạng thái trên kho của sản phẩm bds đã chốt đó\.

### **Phân quyền tổ chức các cấp quản trị**

- HĐQT \- Ban Lãnh đạo \(BOD\) \- Ban Giám đốc \(BOM\)\.

- Trung tâm \- Hệ thống Quản lý Môi giới với Cấp Phòng là cơ sở độc lập và trực thuộc 1 Tỉnh do Hội sở hoặc Trụ sở vùng quản lý \(Bắc, Trung, Nam\)\.

    - Quản trị cấp phòng và khối \(liên kết nhiều phòng\): tập trung phát triển kinh doanh, phát triển môi giới và chốt nhà\.

    - Quản trị cấp chi nhánh trở lên: tập trung quản lý nhân sự, tuyển dụng \- đào tạo, truyền thông,\.\.\. chịu quản lý chặt chẽ hơn từ Hệ quản trị Tập đoàn\.

    - Các hoạt động quản lý trên web \- app khonhapho \(cập nhập SRS3: QUẢN LÝ PHÂN QUYỀN\)\.

- Hệ quản trị vận hành Tập đoàn\.

    - Phải \- Khối Văn phòng quản trị: Văn phòng Tổng điều hành của Tập đoàn với các phòng ban quản trị\.

    - Trái \- Khối Hỗ trợ kinh doanh: Các phòng ban trực thuộc Tập đoàn hỗ trợ các hoạt động kinh doanh hệ thống môi giới\.

    - Các hoạt động quản trị trên Trang quản trị, và web \- app quản trị riêng của Tập đoàn \(Cập nhập SRS4: QUẢN TRỊ\)\.

#### Bảng chi tiết Policies \& Events

[Policies NPVN \(ABAC\)](https://v4cueke6gq8.sg.larksuite.com/base/AG3IbhvCyaF66OsoYqVlhwbBguX?from=from_copylink)



## Quy trình BCN\-NPVN

- Trưởng phòng Công nghệ tiếp nhận yêu cầu từ business đối với hệ thống \(bản yêu cầu nghiệp vụ\)

- Team BA/UX và TechLead tiếp nhận yêu cầu và phân tích nghiệp vụ \(các phiên bản tài liệu SRS\)

- QA QC xác lập các yêu cầu tiêu chuẩn hệ thống và lên test plan \(tài liệu SRS và test case\)

- UI lên design các giao diện và prototype \(xác nhận "ready for dev" trên figma\) \(figma\)

- Team dev dựa trên các tài liệu yêu cầu và UI design để lập trình \(github\)

- QA QC nhận kết quả sản phẩm từ team tech và thực hiện test plan

    - Phản hồi và fix bug

    - Xác nhận hoàn thành

- Trưởng phòng Công nghệ tiếp nhận bàn giao \& go live theo kế hoạch business \(BB nghiệm thu\)

    - Canary Release cho nhóm nhỏ user: lấy thêm feed back và truyền thông nội bộ, pre\-launch

    - Full Release: nhận feedback và các business requirements mới\.\.\.

\(quy trình có thể thay đổi/hoàn thiện dần khi team scale và/hoặc có các bước thủ tục Hành chính thêm\)

## UX flow \& Design

Sử dụng Figma dưới đây:

https://www\.figma\.com/files/team/1343802702981611946



## **Milestone**

|**Mốc thời gian**|**Mô tả**|
|---|---|
|01\-03/2024|Build team phát triển, tiếp nhận ứng dụng và tiếp tục phát triển|
|05\-06/2024|Release app mobile khonhapho|
|06/2024|Phát triển SSO ID \(id\.khonhapho\.com\)|
|2024\+|Hoàn thiện kiến trúc hạ tầng phục vụ và phát triển các project|
|||



# **Objective**

Xây dựng ứng dụng và web \+ app khonhapho theo kiến trúc hiện đại, bao gồm các microservice hoạt động độc lập và mở rộng dễ dàng:

Thiết kế hệ thống:

- Quy hoạch thiết kế kiến trúc và CSDL hiện đại\.

- Triển khai được trên hạ tầng cloud đảm bảo linh hoạt trong quá trình cập nhật, bổ sung năng lực hệ thống\.

- Đảm bảo khả năng sao lưu, dự phòng\.

Yêu cầu về tính năng:

- Cung cấp đầy đủ các nghiệp vụ cho người dùng và hệ quản trị hệ thống\.

Quản lý quy trình:

- Quản lý quy trình chuyên nghiệp\.

- Các phân hệ liên kết chặt chẽ với nhau, hướng đến vòng đời trải nghiệm của khách hàng\.

Trải nghiệm người dùng:

- Giao diện mới mẻ, trẻ trung và thân thiện phù hợp với tập khách hàng mục tiêu\.

# **Stakeholders**

|**Viết tắt**|**Mô tả**|**Vai trò**|
|---|---|---|
|\*|Authorize|Có quyền ký cuối cùng đối với bất kỳ thay đổi nào đối với tài liệu|
|R|Responsible|Chịu trách nhiệm tạo tài liệu này|
|A|Accountable|Chịu trách nhiệm về tính chính xác của tài liệu này |
|S|Supports|Cung cấp các dịch vụ hỗ trợ trong quá trình tạo ra tài liệu này|
|C|Consulted|Cung cấp đầu vào|
|I|Informed|Phải được thông báo về bất kỳ thay đổi nào|



|**Viết tắt**|**Vai trò**|**Mô tả**|
|---|---|---|
|**\-**|**Customer**|Trực tiếp đưa ra yêu cầu đối với dự án|
|**PM**|**Project manager**|Giám sát tiến độ hoạt động của dự án|
|**\-**|**Technical leader**|Người xây dựng cơ sở hạ tầng hệ thống|
|**DS**|**Designer**|Cung cấp đầu vào, phát triển giao diện và thu nhập trải nghiệm người dùng|
|**Dev**|**Developer**|Thiết kế app dựa theo đặc tả hệ thống phần mềm|
|**\-**|**Testers**|Thử nghiệm, kiểm tra và đánh giá lại app, viết tài liệu đặc tả|



|<br>**Vai trò**|**Mô tả cụ thể**||||||
|---|---|---|---|---|---|---|
||**\***|**R**|**A**|**S**|**C**|**I**|
|**Customer**|**x**||||**x**||
|**Project manager**||**x**|**x**|**x**||**x**|
|**Technical leader**||||**x**||**x**|
|**Designer**||**x**|**x**|**x**|**x**||
|**Dev**|||**x**|||**x**|
|**Testers**||**x**|**x**|**x**|**x**|**x**|



# **User Requirements**

## **Actors**** **

**khonhapho\.com**** **

|**\#**|**Tác nhân**|**Mô tả**|
|---|---|---|
|1|Khách|Là những người chưa có tài khoản trong hệ thống, tác nhân chính sẽ sử dụng chức năng đăng ký tài khoản|
|2|Học viên|**Học viên **là những người chưa có kinh nghiệm quá nhiều trong nghiệp vụ môi giới, đã tham gia vào trong hệ thống, tài khoản có thời hạn và được sử dụng các chức năng như:<br>- Xem và đăng tin khách cần mua gấp<br>- Xem các mặt hàng dưới 35 tỷ trong kho tài nguyên, tương tác và báo cáo dẫn khách<br>- Xem các loại tin hoạt động, quy định và hướng dẫn, thư viện kiến thức, chia sẻ kỹ năng và danh sách các thành viên thuộc chi nhánh<br>- Quản lý khách hàng, trang cá nhân, đặt lịch, báo cáo và bộ sưu tập<br>- Chat<br>- Xem thông báo hoạt động|
|3|Chuyên viên|**Chuyên viên **là những người đã có kinh nghiệm trong nghiệp vụ môi giới và dẫn khách, đã tham gia vào trong hệ thống, tài khoản có thời hạn và được sử dụng các chức năng như **Học viên** và cũng phân quyền chức năng như:<br>- Xem các mặt hàng trên 35 tỷ trong kho tài nguyên|
|4|Đầu chủ|**Đầu chủ** là người chuyên đi ký hợp đồng môi giới với chủ bất động sản kiếm nguồn hàng về công ty để cho những người khác bán cùng\. Hầu hết các đầu chủ họ đều có kinh nghiệm và thâm niên lâu trong nghề vì chỉ có vậy mới có thể tự tin khi làm việc với chủ nhà mà không lo bị chủ nhà bắt bí hay bắt ép gì trong quá trình đàm phán\. Các chức năng đầu chủ có thể sử dụng như** Chuyên viên** và được quyền truy cập các chức năng như:<br>- Quản lý kho hàng cá nhân<br>- Xem tin chính chủ và kho hàng tự do<br>- Quản lý lịch đặt và báo cáo của đầu khách|
|5|Trợ lý|**Trợ lý** là người hỗ trợ trong việc quản lý các phòng ban, có thể sử dụng các chức năng của **Chuyên viên **và được quyền truy cập vào các chức năng như: <br>- Đăng feed vụ chốt, khối và phòng<br>- Quản lý thành viên<br>- Quản lý ứng viên vòng 0<br>- Xem danh sách khách hàng của **Chuyên viên **và** Học viên**|
|6|Ứng viên trưởng phòng|**Ứng viên trưởng phòng** là người có khả năng ứng cử và lập thành 1 phòng ban mới\. Có thể sử dụng các chức năng của **Chuyên viên **và** Đầu chủ**|
|7|Phó phòng|**Phó phòng** là người có chức quyền dưới trưởng phòng, hỗ trợ trong công tác quản lý phòng\. Có thể sử dụng các chức năng của **Chuyên viên, Đầu chủ **và** Trợ lý**|
|8|Trưởng phòng|**Trưởng phòng** là người trực tiếp quản lý phòng, có thể sử dụng các chức năng của **Chuyên viên **và** Đầu chủ**\. Cũng có thể truy cập được thêm:<br>- Đăng feed phòng<br>Ngoài các chức năng của **Trợ lý** thì được quyền truy cập thêm các chức năng như:<br>- Quản lý mã giới thiệu<br>- Quản lý nhóm|
|9|Phó giám đốc kinh doanh|**Phó giám đốc kinh doanh** là người đứng sau giám đốc kinh doanh, cũng có kết quả nổi bật được tạo ra bởi nhiều thương vụ chốt nhà\. Có thể sử dụng các chức năng của **Chuyên viên, Đầu chủ **và** Trưởng phòng**|
|10|Giám đốc kinh doanh|**Giám đốc kinh doanh** là người có kết quả nổi bật được tạo ra bởi nhiều thương vụ chốt nhà\. Có thể sử dụng các chức năng của **Chuyên viên, Đầu chủ **và** Trưởng phòng**|
|11|Giám đốc khu vực \(chi nhánh\)|**Giám đốc khu vực** là người quản lý chi nhánh\. Có thể sử dụng các chức năng của** Đầu chủ **và** Trưởng phòng\. **Đối với chức năng của **Chuyên viên,** có thể sử dụng thêm các chức năng:<br>- Đăng feed chi nhánh <br>- Xem các thành viên ở các chi nhánh khác nhau|
|12|Thư ký|**Thư ký** là người hỗ trợ quản lý các hoạt động trong công ty\. Có thể sử dụng các chức năng của **Chuyên viên **và** Đầu chủ\. **Cũng có thể truy cập được thêm các chức năng như:<br>- Đăng feed công ty, chi nhánh, quy định và hướng dẫn, thư viện nhà phố <br>- Xem danh sách thành viên ở các chi nhánh khác nhau<br>- Ghim bài viết ở các feed<br>Được cấp quyền truy cập vào các chức năng quản trị như:<br>- Xem trang quản trị, tin chính chủ, dữ liệu kho hàng, sticker<br>- Quản lý feed, kho hàng, thành viên, ứng viên vòng 0, mã giới thiệu, dữ liệu thành viên<br>- Cài đặt công ty|
|13|Phó tổng giám đốc|**Phó tổng giám đốc **là người hỗ trợ tổng giám đốc điều hành công ty\. Có thể sử dụng các chức năng của **Chuyên viên, Đầu chủ và Thư ký**|
|14|Tổng giám đốc|**Tổng giám đốc **là người điều hành công ty, được bổ nhiệm bởi chủ tịch\. Có thể sử dụng các chức năng của** Chuyên viên, Đầu chủ và Thư ký**|
|15|Chủ tịch|**Chủ tịch **là người đứng đầu trong Hội đồng quản trị của tập đoàn\. Có thể sử dụng các chức năng của **Chuyên viên, Đầu chủ và Thư ký**|
|16|Ứng viên \(Mới\)||
|17|Giám đốc vùng \(Mới\)||



## **Use case**

### **Use case tổng quan của User**

### **Use case tổng quan của Quản lý kho hàng**

### **Use case tổng quan của Quản lý phòng/nhóm**

### **Use case tổng quan của Trang quản trị**



Danh sách Use case

|**ID**|**Use Case**|**Tác nhân**|**Mô tả use case**|
|---|---|---|---|
|1|Đăng nhập|Toàn bộ user|Người dùng truy cập vào trang và đăng nhập vào hệ thống|
|2 |Đăng ký|Khách|Người dùng đăng ký tài khoản mới|
|3|Kho tài nguyên|Toàn bộ user|Người dùng truy cập vào kho tài nguyên hệ thống, xem các danh sách mặt hàng phù hợp, tương tác, lưu những tin để xem sau, đặt lịch với đầu chủ xem nhà và báo cáo dẫn khách|
|4|Khách cần mua gấp|Toàn bộ user|Người dùng truy cập vào feed khách cần mua gấp để xem các bài viết hoặc người dùng có nhu cầu đăng bài viết với các tiêu chí khách đề ra |
|5|Tin hoạt động<br>|Toàn bộ user|Người dùng truy cập vào danh sách các loại feed, xem các loại feed trong vụ chốt, công ty, chi nhánh, khối, phòng, nhóm và người dùng tương tác với những bài viết\. Người đăng hoặc người có chức danh cao có thể ghim các bài viết để tạo sự nổi bật|
|6|Quy định và hướng dẫn|Toàn bộ user|Người dùng truy cập vào feed quy định và hướng dẫn, xem và tương tác với bài viết\. Người đăng hoặc người có chức danh cao có thể ghim các bài viết để tạo sự nổi bật|
|7|Danh sách công ty|Toàn bộ user|Người dùng truy cập vào danh sách công ty, tìm kiếm và lọc thông tin của các thành viên trong 1 chi nhánh hoặc toàn bộ công ty|
|8|Thư viện nhà phố<br>|Toàn bộ user|Người dùng truy cập vào danh sách các loại feed trong thư viện, xem và tương tác với những bài viết\. Người đăng hoặc người có chức danh cao có thể ghim các bài viết để tạo sự nổi bật|
|9|Tài khoản cá nhân|Toàn bộ user|Người dùng truy cập vào các chức năng bên trong tài khoản cá nhân, chỉnh sửa hồ sơ, đổi mật khẩu và quản lý các danh mục feed đã đăng|
|10|Quản lý lịch hẹn dẫn khách|Toàn bộ user|Người dùng truy cập vào quản lý lịch hẹn dẫn khách và hành động|
|11|Chat|Toàn bộ user|Người dùng truy cập vào chat|
|12|Quản lý kho hàng|Toàn bộ user ngoại trừ học viên, chuyên viên và trợ lý|Người dùng truy cập vào quản lý kho hàng, đăng tin lên trên kho, quản lý các mặt hàng đã đăng và tương tác\. Có thể tìm kiếm các tin chính chủ hoặc xem trong kho hàng tự do\. Quản lý các báo cáo và lịch xem nhà của khách<br>|
|13|Quản lý phòng/nhóm|Trưởng phòng, trợ lý, phó phòng, phó giám đốc kinh doanh, giám đốc kinh doanh và giám đốc khu vực|Người dùng truy cập vào quản lý phòng/nhóm, quản lý các thành viên trong phòng, mã giới thiệu, các khách của CV\. Hỗ trợ quản lý công tác tuyển dụng các ứng viên vòng 0\. Quản lý các nhóm trong phòng<br>|
|14|Quản lý trang quản trị|Thư ký trở lên|Người dùng truy cập vào trang quản trị, xem danh sách số người truy cập hiện tại và xem các thống kê phòng, có thể lọc và search|
|15|Quản lý feed|Thư ký trở lên|Người dùng truy cập vào trang quản lý các loại feed, duyệt, từ chối tin cho từng loại feed|
|16|Quản lý kho hàng|Thư ký trở lên|Người dùng truy cập vào trang quản lý kho hàng để quản lý các mặt hàng có trên hệ thống, duyệt, từ chối các tin hoặc xem xét chờ duyệt|
|17|Quản lý tin chính chủ|Thư ký trở lên|Người dùng truy cập vào trang quản lý tin chính chủ, thêm mới, chỉnh sửa hoặc xoá tin|
|18|Quản lý thành viên|Thư ký trở lên|Người dùng truy cập vào trang quản lý thành viên để quản lý các thành viên trong hệ thống, có thể chỉnh sửa hồ sơ, chức danh, trạng thái tài khoản, mời vào ban đào tạo, cấp lại mật khẩu và xem các đánh giá báo cáo dẫn khách|
|19|Quản lý ứng viên vòng 0|Thư ký trở lên|Người dùng truy cập vào trang quản lý ứng viên vòng 0 để quản lý công tác tuyển dụng, xem các ứng viên bị trùng, lọc và search|
|20|Quản lý mã giới thiệu|Thư ký trở lên|Người dùng truy cập vào trang quản lý mã giới thiệu để kiểm soát và cung cấp các mã kích hoạt tài khoản|
|21|Quản lý dữ liệu kho hàng|Thư ký trở lên|Người dùng truy cập vào trang quản lý dữ liệu kho hàng để quản lý các danh mục, xem các danh mục, thêm, sửa và xoá |
|22|Quản lý dữ liệu thành viên|Thư ký trở lên|Người dùng truy cập vào trang quản lý dữ liệu thành viên để quản lý các chi nhánh, phòng ban trong công ty, có thể thêm, sửa xoá với các dữ liệu|
|23|Cài đặt công ty|Thư ký trở lên|Người dùng truy cập vào trang cài đặt công ty để thay đổi nhận dạng công ty|
|24|Quản lý sticker|Thư ký trở lên|Người dùng truy cập vào trang quản lý sticker để quản lý các sticker|
|25|Quản lý nhóm chat hỗ trợ|Thư ký trở lên|Người dùng chat hỗ trợ các thắc mắc, hỗ trợ đối với danh mục hỗ trợ|
|26|Quét mã QR|Toàn bộ user|Người dùng quét mã QR để xác nhận lịch đào tạo hoặc lịch họp|
|27|Cài đặt nhóm chat|Thư ký trở lên|Người dùng quản lý các nhóm chat mặc định trên hệ thống|
|28|Quản lý lịch đào tạo|Thư ký trở lên|Người dùng quản lý lịch đào tạo trên hệ thống|
|29|Quản lý lịch họp|Thư ký trở lên|Người dùng quản lý lịch họp trên hệ thống|
|30|Quản lý hợp đồng|Thư ký trở lên|Người dùng quản lý hợp đồng trên hệ thống|



# **Functional Requirement**

## **Functional Requirement **

|**ID**|**Requirement Type**|**Requirement Description**|**Priority**|
|---|---|---|---|
|REQ 1|Đăng nhập|Người dùng có thể đăng nhập bằng SĐT hoặc CCCD 9 hoặc 12 số|High|
|REQ 2|Đăng ký|Người dùng đăng ký tài khoản khi chưa có tài khoản trong hệ thống|High|
|REQ 3<br>|Quên mật khẩu|Người dùng quên mật khẩu khi đăng nhập vào hệ thống|Medium|
|REQ 4|Tab bảng tin|Sau khi đăng nhập thì sẽ hiển thị trang bảng tin tổng hợp các feed trong hệ thống\. Các bài đăng có thể tương tác, ghim, khoá bình luận|Medium|
|REQ 5|Tab bạn quan tâm|Người dùng có thể xem danh sách các kho hàng sau khi filter|Medium|
|REQ 6|Kho tài nguyên|Nguồn kho hàng của công ty, người dùng sau khi truy cập thì sẽ hiển thị danh sách các tin đăng trong kho\. Để nhanh chóng, có thể tìm kiếm, filter hoặc kết hợp cả 2\. Đối với mỗi tin người dùng có thể:<br>\- Đặt lịch<br>\- Lưu tin<br>\- Báo cáo dẫn khách<br>\- Tương tác tin<br>\- Xem lịch sử chinh sửa tin<br>\- Đăng tin \(Đối với đầu chủ\)<br>\- Xem profile người đăng|High|
|REQ 7|Feed khách cần mua gấp|Người dùng có hàng có thể tìm kiếm các nhu cầu của bên khách và tương tác với các bài đăng\. <br>Đối với bên khách có thể đăng bài với yêu cầu\. Nếu tìm được rồi thì có thể khóa bình luận hoặc xoá bài<br>Thư ký có thể ghim bài viết có tài chính triệu đô|High|
|REQ 8|Feed thông báo vụ chốt<br>|Người dùng sau khi có một vụ chốt thành công sẽ đăng bài thông báo trên feed, bài viết sau khi đăng cần có account thư kí xét duyệt|Medium|
|REQ 9|Feed chi nhánh<br>|Người dùng trong cùng một chi nhánh có thể đăng trên feed\.\(không cần xét duyệt\)\.Bài viết có thể sửa/xoá hoặc khoá bình luận|Medium|
|REQ 10|Feed công ty|Người dùng có thể đăng trên feed\.\(không cần xét duyệt\)\.Bài viết có thể sửa/xoá hoặc khoá bình luận|Medium|
|REQ 11|Feed khối |Người dùng trong cùng một khối có thể đăng trên feed\.\(không cần xét duyệt\)\.Bài viết có thể sửa/xoá hoặc khoá bình luận|Medium|
|REQ 12|Feed phòng|Người dùng trong cùng một phòng có thể đăng trên feed\.\(không cần xét duyệt\)\.Bài viết có thể sửa/xoá hoặc khoá bình luận|Medium|
|REQ 13|Feed nhóm|Người dùng trong cùng một nhóm có thể đăng trên feed\.\(không cần xét duyệt\)\.Bài viết có thể sửa/xoá hoặc khoá bình luận|Medium|
|REQ 14|Feed quy định và hướng dẫn|Người dùng có thể đăng trên feed\.\(không cần xét duyệt\)\.Bài viết có thể sửa/xoá hoặc khoá bình luận|High|
|REQ 15|Xem danh sách công ty|Người dùng có thể tìm kiếm account các thành viên trong chi nhánh công ty theo tên, sdt, role, phòng ban|Low|
|REQ 16|Feed thư viện kiến thức|Người dùng có thể đăng bài trên feed\.\(không cần xét duyệt\)\.Bài viết có thể sửa/xoá hoặc khoá bình luận|Medium|
|REQ 17|Feed chia sẻ kỹ năng|Người dùng có thể đăng bài trên feed\.\(không cần xét duyệt\)\.Bài viết có thể sửa/xoá hoặc khoá bình luận|Medium|
|REQ 18|Feed thư viện đầu chủ|Người dùng có thể đăng bài trên feed\.\(không cần xét duyệt\)\.Bài viết có thể sửa/xoá hoặc khoá bình luận|Medium|
|REQ 19|Feed thư viện trưởng phòng|Người dùng có thể đăng bài trên feed\.\(không cần xét duyệt\)\.Bài viết có thể sửa/xoá hoặc khoá bình luận|Medium|
|REQ 20|Feed thư viện trợ lý|Người dùng có thể đăng bài trên feed\.\(không cần xét duyệt\)\.Bài viết có thể sửa/xoá hoặc khoá bình luận|Medium|
|REQ 21|Quản lý khách hàng|Người dùng có thể thêm/xóa thông tin khách hàng, tìm kiếm khách hàng đã lưu\. Quản lý khách hàng đã dẫn\. Chỉnh sửa hiện trạng của khách|High|
|REQ 22|Quản lý lịch sử đặt lịch|Người dùng có thể xem lịch sử đặt lịch và chat với khách\!|High|
|REQ 23|Quản lý lịch sử báo cáo|Người dùng có thể xem báo cáo dẫn khách, search lịch sử báo cáo|High|
|REQ 24|Quản lý bộ sưu tập|Người dùng có thể thêm/sửa/xoá bộ sưu tập\.Chỉnh sửa các thông tin đã lưu trong bộ sưu tập|High|
|REQ 25|Quản lý tài khoản cá nhân|Người dùng có thể thay đổi thông tin  trang cá nhân, thay đổi mật khẩu đăng nhập, ảnh đại diện|Medium|
|REQ 26|Xem thông báo|Người dùng sẽ nhận thông báo của hệ thống mỗi khi bài viết có tương tác, xét duyệt, xác nhận đặt lịch, tin nhắn đến|High|
|REQ 27|Chat|Cho phép chat với các account khác|High|
|REQ 28<br>|Quản lý lịch hẹn|Người dùng nhìn thấy thông báo sau khi đặt lịch, có thể thu hồi đối với người đặt lịch\. Đối với người đăng tin được đặt lịch, người đấy có thể xác nhận hoặc từ chối|High|
|REQ 29|Quản lý kho hàng cá nhân|Người dùng có thể đăng tin, tìm kiếm và lọc, xem, sửa tin\. Có thể tương tác tin, sửa trạng thái, xem báo cáo khách hàng và xem khách hàng hợp tin|High|
|REQ 30|Danh sách tin chính chủ|Người dùng có thể xem các bài đăng tin chính chủ, sao chép, phản hồi và lưu bài đăng\. Để phân loại bảng tin, người dùng có thể vào các tab “Tin chính chủ”, “Tin nhanh”, “Tin đã lưu”\. Ở tại các tab này, người dùng có thể tìm kiếm và lọc bài đăng theo mong muốn|High|
|REQ 31|Xem kho hàng tự do|Người dùng có thể xem danh sách tin ở tab Danh sách và xem chi tiết tin ở tab Chi tiết\. Có thể tìm kiếm và lọc tin, tương tác với bài đăng bằng cách thả tim thích và bình luận|High|
|REQ 32|Quản lý lịch sử khách đặt lịch|Người dùng có thể xem chi tiết lịch hẹn của đầu khách\. Có thể nhắn tin trao đổi với khách qua popup Lịch hẹn|High|
|REQ 33|Quản lý lịch sử khách báo cáo|Người dùng có thể xem danh sách báo cáo của khách, tìm kiếm và xem chi tiết báo cáo |High|
|REQ 34|Quản lý mã giới thiệu phòng|Người dùng có thể thêm mới và xem danh sách mã giới thiệu|High|
|REQ 35|Quản lý thành viên phòng|Người dùng có thể xem danh sách thành viên trong các phòng\. Có thể tìm kiếm, lọc và xem thông tin chi tiết của từng thành viên|High|
|REQ 36|Quản lý khách của CV|Người dùng có thể xem danh sách khách hàng của CV,tìm kiếm và lọc khách hàng theo tiêu chí lọc và xem thông tin chi tiết khách hàng|High|
|REQ 37|Quản lý báo cáo của CV|Người dùng có thể nhập tên hoặc nội dung tìm kiếm để tìm báo cáo của Chuyên viên\. Có thể xem thông tin chi tiết từng báo cáo của CV|High|
|REQ 38|Quản lý ứng viên vòng 0|Người dùng có thể thêm mới, tìm kiếm và xem ứng viên vòng 0 tại danh sách hiển thị\.|High|
|REQ 39|Quản lý nhóm|Người dùng có thể thêm mới, sửa hoặc xoá nhóm ở trong danh sách các nhóm\. Có thể tìm kiếm và xem danh sách nhóm|High|
|REQ 40|Quản lý thành viên nhóm|Người dùng có thể xem danh sách thành viên Đang hợp tác, Sắp hết hạn, Đã khoá trong các nhóm\. Có thể tìm kiếm, lọc và xem thông tin chi tiết của từng thành viên|High|
|REQ 41|Xem tài khoản online<br>|Người dùng có thể xem danh sách các tài khoản đang online tại thời điểm sử dụng tài khoản\. Có thể nhập tên hoặc số điện thoại để tìm kiếm và lọc tìm theo chi nhánh, phòng ban, nhóm|Medium|
|REQ 42|Xem thống kê phòng|Người dùng có thể xem thống kê số lượng nhân sự các phòng\. Có thể nhập tên tìm kiếm phòng và lọc tìm theo chi nhánh|Medium|
|REQ 43|Quản lý feed vụ chốt|Người dùng có thể duyệt tin vụ chốt\. Các tin được hiển thị ở các tab Chờ duyệt, Đã duyệt, Từ chối\. |Medium|
|REQ 44|Quản lý feed khách mua gấp|Người dùng có thể duyệt tin khách cần mua gấp\. Các tin được hiển thị ở các tab Chờ duyệt, Đã duyệt, Từ chối\. |High|
|REQ 45|Quản lý feed chia sẻ kỹ năng|Người dùng có thể duyệt tin chia sẻ kỹ năng\. Các tin được hiển thị ở các tab Chờ duyệt, Đã duyệt, Từ chối\. Có thể tìm kiếm và lọc tin|Medium|
|REQ 46|Quản lý feed thư viện kiến thức|Người dùng có thể duyệt tin thư viện kiến thức\. Các tin được hiển thị ở các tab Chờ duyệt, Đã duyệt, Từ chối\. Có thể tìm kiếm và lọc tin|Medium|
|REQ 47|Quản lý feed thư viện đầu chủ|Người dùng có thể duyệt tin thư viện đầu chủ\. Các tin được hiển thị ở các tab Chờ duyệt, Đã duyệt, Từ chối\. Có thể tìm kiếm và lọc tin|Medium|
|REQ 48|Quản lý feed thư viện trưởng phòng|Người dùng có thể duyệt thư viện trưởng phòng\. Các tin được hiển thị ở các tab Chờ duyệt, Đã duyệt, Từ chối\. Có thể tìm kiếm và lọc tin|Medium|
|REQ 49|Quản lý feed thư viện trợ lý|Người dùng có thể duyệt tin thư viện trợ lý\. Các tin được hiển thị ở các tab Chờ duyệt, Đã duyệt, Từ chối\. Có thể tìm kiếm và lọc tin|Medium|
|REQ 50|Quản lý danh mục feed đào tạo|Người dùng có thể tìm kiếm và xem thông tin các danh mục đào tạo của công ty theo loại feed\. Có thể thêm mới, sửa và xoá danh mục đào tạo|Medium|
|REQ 51|Quản lý kho hàng|Người dùng có thể xem danh sách tin theo các tab Chờ duyệt, Đã duyệt, Từ chối, Tự do\. Có thể sửa đăng tin, thay đổi trạng thái tin, tìm kiếm và lọc danh sách tin theo các tab|High|
|REQ 52|Quản lý tin chính chủ|Người dùng có thể xem danh sách và tìm kiếm tin ở 2 tab Tin chính chủ và Tin nhanh\. Có thể xem phản hồi, xoá và sửa tin |Medium|
|REQ 53|Quản lý thành viên công ty|Người dùng có thể xem danh sách các thành viên của công ty ở tab Thành viên và tab Ban đào tạo\. Có thể tìm kiếm, lọc và xem thông tin chi tiết ở mỗi tab\. Danh sách thành viên có thể thêm mới và xem trạng thái tài khoản của thành viên|High|
|REQ 54|Quản lý danh sách ứng viên vòng 0|Danh sách Ứng viên vòng 0\. Người dùng có thể tìm kiếm ứng viên; có thể thêm mới ứng viên hoặc xoá ứng viên vừa thêm mới\. Chức năng xoá sẽ mất hiệu lực trong vòng 15 phút sau khi thêm mới ứng viên|High|
|REQ 55|Quản lý mã giới thiệu công ty|Danh sách mã giới thiệu\. Người dùng có thể xem chi tiết thông tin mã giới thiệu, có thể thêm mới mã giới thiệu|High|
|REQ 56|Quản lý dữ liệu kho hàng|Người dùng có thể xem thông tin của dữ liệu kho hàng bao gồm:<br>- Tình trạng pháp lý<br>- Khoảng giá<br>- Khoảng diện tích<br>- Trạng thái mua bán<br>- Loại hợp đồng<br>- Loại hình BĐS<br>- Mục đích sử dụng<br>- Đặc điểm BĐS<br>- Dự án<br>- Tỉnh/TP/Quận/Huyện/Phường/Đường<br>Các thông tin về dữ liệu kho hàng đều có thể tìm kiếm, thêm mới, sửa hoặc xoá |Medium|
|REQ 57|Quản lý chi nhánh|Người dùng có thể xem danh sách tất cả các chi nhánh công ty trong hệ thống\. Có thể tìm kiếm, thêm mới, sửa hoặc xoá chi nhánh |High|
|REQ 58|Quản lý khối|Người dùng có thể xem danh sách tất cả các khối trong hệ thống\. Có thể tìm kiếm, thêm mới, sửa hoặc xoá khối\. Người dùng có thể xem danh sách các phòng có trong từng khối |High|
|REQ 59|Quản lý phòng|Người dùng có thể xem danh sách tất cả các phòng ban trong hệ thống\. Có thể tìm kiếm, thêm mới, sửa hoặc xoá phòng ban|High|
|REQ 60|Quản lý nhóm|Người dùng có thể xem danh sách tất cả các nhóm trong hệ thống\. Có thể tìm kiếm, thêm mới, sửa hoặc xoá nhóm |High|
|REQ 61|Quản lý huy hiệu|Người dùng truy cập sẽ hiển thị danh sách huy hiệu của công ty, có thể tìm kiếm, thêm mới, sửa hoặc xoá huy hiệu |High|
|REQ 62|Cài đặt công ty|Người dùng có thể xem tên công ty và avatar công ty\. Có thể thay đổi avatar Công ty|Medium|
|REQ 63|Quản lý sticker<br>|Kho lưu trữ nhãn dán \- stickers, sau khi truy cập sẽ hiển thị danh sách các stickers có trên hệ thống\. Có thể tìm kiếm theo tên của bộ sticker|Medium|
|REQ 65|Quét mã QR|Người dùng có thể quét mã QR của lịch đào tạo hoặc lịch họp\. Sau đấy xác nhận điểm danh|High|
|REQ 66|Quản lý nhóm chat hỗ trợ|Người dùng chat hỗ trợ liên quan đến các danh mục đến người người có nhu cầu hỗ trợ|High|
|REQ 67|Cài đặt nhóm chat|Người dùng quản lý các nhóm chat mặc định\. Có thể tìm kiếm, thêm, sửa và xoá|High|
|REQ 68|Quản lý lịch đào tạo|Người dùng quản lý lịch đào tạo\. Có thể tìm kiếm, thêm, sửa và xoá|High|
|REQ 69|Quản lý lịch họp|Người dùng quản lý lịch họp\. Có thể tìm kiếm, thêm, sửa và xoá|High|
|REQ 70|Quản lý hợp đồng|Người dùng quản lý hợp đồng của các thành viên trong hệ thống|High|



## **Non\-Functional Requirement **

|**ID**|**Requirement Type**|**Requirement Description**|**Priority**|
|---|---|---|---|
||Access Security|||
||Accessibility|||
||Availability|||
||Confidentiality|||
||Efficiency|||
||Integrity|||
||Reliability|||
||Safety|||
||Scalability|||
||Usability|||

## 

# Danh sách tài liệu liên quan

- Tài liệu yêu cầu Website khonhapho:

    - [1 \- SRS Khonhapho website \- USER \(ID\)](https://v4cueke6gq8.sg.larksuite.com/docx/Dzsad7HoRokuzpxCakjlM4AXg7c?from=from_copylink)

    - [2 \- SRS Khonhapho website \- KHO](https://v4cueke6gq8.sg.larksuite.com/wiki/FMylwVW5kiJYC6kvZzzlcycfgWd)

    - [3 \- SRS Khonhapho website \- QUẢN LÝ PHÂN QUYỀN](https://v4cueke6gq8.sg.larksuite.com/wiki/UA7SwaSc0iiR2zkoBQIlzHuIg9e)

    - [4 \- SRS Khonhapho website \- QUẢN TRỊ HQ](https://v4cueke6gq8.sg.larksuite.com/wiki/UDyLw1jlsiOkBbkOUhNl0q2KgTc)

    - [5 \- SRS Khonhapho website \- QUẢN TRỊ HQ 2](https://v4cueke6gq8.sg.larksuite.com/wiki/Sz5zw1uLHiTUSgkxF28lr3QSgLe)

    - [6 \- SRS Khonhapho website \- Admin](https://v4cueke6gq8.sg.larksuite.com/wiki/Y2aIwo1CqiAz2GkmHFZlUm8agHd)

- Tài liệu yêu cầu App NPVN:

    - [1 \- SRS Mobile App Nhà Phố VN \- USER \(ID\)](https://v4cueke6gq8.sg.larksuite.com/docx/Tr8ZdymOjo3Jb1x2GhMle6CNgNR?from=from_copylink)

    - [2 \- SRS Mobile App Nhà Phố VN \- KHO](https://v4cueke6gq8.sg.larksuite.com/wiki/YQnfwSl40io6PHkDP6IlSfzQgRb)

    - [3 \- SRS Mobile App Nhà Phố VN \- QUẢN LÝ PHÂN QUYỀN](https://v4cueke6gq8.sg.larksuite.com/wiki/DI3UwxAMniaWUjkRDwwlfUdugWJ)

- Tài liệu yêu cầu các project khác: \(updating\)

