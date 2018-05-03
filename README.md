Các bước cần thực hiện để  khởi chạy app
B1: Install node version > 8.10 Kiểm tra xem node và npm đã được cài đặt chưa bằng lệnh node -v và npm -v
B2: Install các module bằng npm install(hoặc sudo npm install);
B3: Install sails với lệnh sudo npm install -g sails
B4: Vào thư mục config/datastores.js chỉnh sửa url(username, password) kết nối với cơ sở dữ liệu mysql(MariaDb cài sẵn cùng xampp)
B5: Taọ cơ sở dự liệu có tên như trong phần link kết nối cơ sở dữ liệu ở B4
B6: Start server bằng lệnh sails lift (or sails lift --hookTimeout=80000 nếu có lỗi timeout)
B7: Sử dụng trình duyệt vào localhost:1337 để sử dụng app


#Contact for helps
Phone: 0974066924
Email: minh1996bk@gmail.com
