# Cách cài đặt
1. Cài đặt Node js: https://nodejs.org/en/
2. Cài đăt thư viện: tại thư mục chứ project mở cmd gỏ vào lệnh: `npm install`
# Cách sử dụng
1. Tại thư mục chứa project mở cmd gỏ lệnh:`nodemon` để bắt đầu start serve.
2. Sau khi serve start thành công thì trình duyệt có thể sử dụng:`http://localhost:3000`
# Danh sách các API

# Users (tài khoản)

1. GET `/api/users/getall` lấy ra danh sách các User có trong database
```
##ví dụ:
localhost:3000/api/users/getall
##trả về
[
    {
        "Id": 1,
        "Username": "hieu",
        "Password": "hieu",
        "Name": "nguy?n mai hi?u",
        "CreateDate": "2017-05-25T12:12:37.360Z",
        "Deleted": false,
        "LogOut": false,
        "LastActivity": "2017-05-25T12:25:09.310Z",
        "LastLogIn": "2017-05-25T12:25:09.310Z",
        "LastPasswordChanged": null,
        "LastLogOut": null,
        "Salt": null,
        "Comment": "Users have updated their information",
        "BuildInUser": false,
        "Email": "hieu@gmail.com",
        "Phone": "12312312"
    },
    {
        "Id": 2,
        "Username": "admin",
        "Password": "admin",
        "Name": "HUTECH",
        "CreateDate": "2016-01-01T00:00:00.000Z",
        "Deleted": false,
        "LogOut": null,
        "LastActivity": null,
        "LastLogIn": null,
        "LastPasswordChanged": null,
        "LastLogOut": null,
        "Salt": null,
        "Comment": null,
        "BuildInUser": null,
        "Email": null,
        "Phone": null
    },
]
```
2. GET `/api/users/id` lấy ra thông tin tài khoản có mã là id
```
## ví dụ:
localhost:3000/api/users/1
## trả về
{
    "Id": 1,
    "Username": "hieu",
    "Password": "hieu",
    "Name": "nguyễn mai hiếu",
    "CreateDate": "2017-05-25T12:12:37.360Z",
    "Deleted": false,
    "LogOut": false,
    "LastActivity": "2017-05-25T12:25:09.310Z",
    "LastLogIn": "2017-05-25T12:25:09.310Z",
    "LastPasswordChanged": null,
    "LastLogOut": null,
    "Salt": null,
    "Comment": "Users have updated their information",
    "BuildInUser": false,
    "Email": "hieu@gmail.com",
    "Phone": "12312312"
}
```
3. POST `/api/users/register` đăng ký một user mới trong database
```
## ví dụ
localhost:3000/api/users/register
## kiểu dữ liệu nhận vào
{
    "username":"truong",
    "password":"123456789", 
    "name":"Nguyễn Nhựt Trường" 
}
kiểu dữ liệu trả về
Tạo tài khoản thành công
```
4. POST `/api/users/login` đăng nhập tài khoản vào hệ thống với username và password
```
## Ví dụ
localhost:3000/api/users/login
object đầu vào 
{
    "username":"truong",
    "password":"123456789"
}
kiểu dữ liệu trả về
{
    "Id": 27,
    "Username": "truong",
    "Password": "123456789",
    "Name": "Nguyễn Nhựt Trường",
    "CreateDate": "2017-06-25T00:00:00.000Z",
    "Deleted": false,
    "LogOut": null,
    "LastActivity": null,
    "LastLogIn": null,
    "LastPasswordChanged": null,
    "LastLogOut": null,
    "Salt": null,
    "Comment": "Reg user",
    "BuildInUser": null,
    "Email": null,
    "Phone": null
}
```
5. POST `/api/users/update` cập nhật thông tin của tài khoản
```
## Ví dụ
localhost:3000/api/users/update
object đầu vào
{
	"id":"27",
    "name":"truong",
    "email":"truong@gmail.com",
    "phone":"01648935841"
}
kiểu dữ liệu trả về
Cập nhật thành công
```

# Subject (môn học)
1. GET `/api/subjects` lấy ra tất cả các môn học có theo khoa
```
##ví dụ
localhost:3000/api/subjects
kiểu dữ liệu trả về
[
    {
        "Id": 1,
        "Code": "412030",
        "Name": "Mạng máy tính",
        "Deleted": false,
        "FacultyId": 4,
        "ManagementOrder": null,
        "Faculty": {
            "Id": 4,
            "Name": "Công Nghệ Thông Tin"
        }
    },
    {
        "Id": 2,
        "Code": "412025",
        "Name": "Lập trình trên môi trường Windows",
        "Deleted": false,
        "FacultyId": 4,
        "ManagementOrder": null,
        "Faculty": {
            "Id": 4,
            "Name": "Công Nghệ Thông Tin"
        }
    }
]
```
2. GET `/api/subjects/faculties` lấy ra danh sách các khoa có trong database
```
## Ví dụ
localhost:3000/api/subjects/faculties
kiểu dữ liệu trả về
[
    {
        "Id": 1,
        "Name": "Cao Đẳng Thực Hành",
        "Deleted": false,
        "Comment": null
    },
    {
        "Id": 2,
        "Name": "Cơ Khí",
        "Deleted": false,
        "Comment": null
    }
]
```
3. GET `/api/subjects/id` lấy ra thông tin chi tiết môn học theo id môn học
```
## Ví dụ
localhost:3000/api/subjects/1
kiểu dữ liệu trả về
{
    "Id": 1,
    "Code": "412030",
    "Name": "Mạng máy tính",
    "Deleted": false,
    "FacultyId": 4,
    "ManagementOrder": null
}
```
4. GET `/api/subjects/faculties/id` lấy ra các môn học theo khoa (FacultyId)
```
## Ví dụ
localhost:3000/api/subjects/faculties/4
kiểu dữ liệu trả về
[
    {
        "Id": 1,
        "Code": "412030",
        "Name": "Mạng máy tính",
        "Deleted": false,
        "FacultyId": 4,
        "ManagementOrder": null
    },
    {
        "Id": 2,
        "Code": "412025",
        "Name": "Lập trình trên môi trường Windows",
        "Deleted": false,
        "FacultyId": 4,
        "ManagementOrder": null
    },
    {
        "Id": 3,
        "Code": "412021",
        "Name": "Kỹ thuật lập trình",
        "Deleted": false,
        "FacultyId": 4,
        "ManagementOrder": null
    }
]
```
5. POST `/api/subjects/generatesheet` tạo đề thi với gi////
```
```
# Cài đặt nâng cao
1. Để dễ sử dụng có thể cài Postman để tiện cho việc sử dụng các API tại cửa hàng Google chrome: `https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?utm_source=chrome-ntp-icon`.
    
