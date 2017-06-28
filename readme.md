# Cách cài đặt
1. Cài đặt Node js: https://nodejs.org/en/
2. Cài đăt thư viện: tại thư mục chứ project mở cmd gỏ vào lệnh: `npm install`
# Cách sử dụng
1. Tại thư mục chứa project mở cmd gỏ lệnh:`nodemon` để bắt đầu start serve.
2. Sau khi serve start thành công thì trình duyệt có thể sử dụng:`http://localhost:3000`
# Danh sách các API

# Users (người dùng)

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
    "username":"truong",     // tên tài khoản
    "password":"123456789",    // passwork mã hóa md5 nhe rồi mới truyền vào
    "name":"Nguyễn Nhựt Trường"  /// tên người dùng
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
    "username":"truong",    // tên tài khoản người dùng 
    "password":"123456789"   //  mật khẩu mã hóa md5
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
    "id":"27",    // id user cần được update
    "name":"truong",   // tên người dùng cần update
    "email":"truong@gmail.com",   // email cần update
    "phone":"01648935841"    // số điện thoại update
}
kiểu dữ liệu trả về
Cập nhật thành công
```

# Subjects (môn học)
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
5. GET `/api/subjects/getmark` trả về số điểm của đề thi với tham số là id đề thi
```
# ví dụ
dử liệu đầu vào
localhost:3000/api/subjects/getmark?questionSheetId=24             //id đề thi là 24
kiểu dữ liệu trả về
[
    {
        "Total": 5,   // đề thi có 5 câu
        "NumberOfCorrect": 0,   // 0 câu đúng
        "Mark": 0   // 0 điểm
    }
]
```
6. GET `/api/subjects/getresult` trả vè chi tiết các câu hỏi trong đề thi với id đề thi được truyền vào
```
# ví dụ
dử liệu đầu vào
localhost:3000/api/subjects/getresult?questionSheetId=24            //24 là đề thi số 24
kiểu dữ liệu trả về
[
    {
        "QuestionSheetId": "24",        /// id đề thi
        "QuestionId": "13363",		/// id câu hỏi
        "Order": 3,			/// số thứ tự
        "Correct": null			///đúng hay sai, nếu đ1ung = 1, sai = 0 và NULL chưa làm
    },
    {
        "QuestionSheetId": "24",
        "QuestionId": "13382",
        "Order": 5,
        "Correct": null
    },
    {
        "QuestionSheetId": "24",
        "QuestionId": "13389",
        "Order": 4,
        "Correct": null
    },
    {
        "QuestionSheetId": "24",
        "QuestionId": "13398",
        "Order": 1,
        "Correct": null
    },
    {
        "QuestionSheetId": "24",
        "QuestionId": "13399",
        "Order": 2,
        "Correct": null
    }
]
```
7. GET `/api/subjects/getexam` lấy ra thông tin đề thi
```
# Ví dụ
localhost:3000/api/subjects/getexam/?questionSheetId=63&userId=23   //63 là id đề thi và 23 là id user => load chi tiết đề thi theo iduser và id đề
kiểu dữ liệu trả về
{
    "Id": "63",
    "Name": "Mạng máy tính 23 20",
    "CreateDate": "2017-06-28T00:00:00.000Z",
    "Approved": null,
    "Started": null,
    "Completed": false,
    "ExtraTime": null,
    "ExtraTimeReason": null,
    "Mark": null,
    "ShiftSubjectStudentId": null,
    "NumberOfCorrect": null,
    "Total": null,
    "Difficulty": null,
    "UserId": 23
}
```
8. GET `/api/subjects/getexam/detail?questionSheetId=id` lấy ra chi tiết đề thi với id đề thi truyền vào
```
# Ví dụ
localhost:3000/api/subjects/getexam/detail/?questionSheetId=63
kiểu dữ liệu trả về
[
    {
        "QuestionSheetId": "63",
        "QuestionId": "13355",
        "Order": 16,
        "AnswerId": null,
        "Correct": null,
        "CreateDate": "2017-06-28T00:00:00.000Z",
        "UpdateDate": null,
        "ListenTimes": null,
        "Question": {
            "Id": "13355",
            "Content": "\r\n<p><b>Câu\r\n3. </b>Một vật chuyển động thẳng đều với vận tốc v. Chọn\r\ntrục toạ độ ox có\r\nphương trùng với phương chuyển động, chiều dương là chiều chuyển động, gốc toạ độ\r\nO cách vị trí vật xuất phát một khoảng OA = x<sub>0 . </sub>Phương trình chuyển\r\nđộng của vật là:</p>\r\n",
            "ParentId": "-1",
            "Audio": false,
            "Answers": [
                {
                    "Id": "17337",
                    "Content": "http://i.imgur.com/DiajPQ7.jpg",
                    "Order": 1,
                    "Correct": false
                },
                {
                    "Id": "17338",
                    "Content": "http://i.imgur.com/DiajPQ7.jpg",
                    "Order": 2,
                    "Correct": true
                },
                {
                    "Id": "17339",
                    "Content": "http://i.imgur.com/DiajPQ7.jpg",
                    "Order": 3,
                    "Correct": false
                },
                {
                    "Id": "17340",
                    "Content": "http://i.imgur.com/DiajPQ7.jpg",
                    "Order": 4,
                    "Correct": false
                }
            ]
        }
    },
    {
        "QuestionSheetId": "63",
        "QuestionId": "13356",
        "Order": 19,
        "AnswerId": null,
        "Correct": null,
        "CreateDate": "2017-06-28T00:00:00.000Z",
        "UpdateDate": null,
        "ListenTimes": null,
        "Question": {
            "Id": "13356",
            "Content": "http://zmp3-mp3-s1-tr.zadn.vn/e7563f83e7c70e9957d6/727637092126384063?key=ASGr_LiWCzO3OEYrRtjKng&expires=1498728752",
            "ParentId": "-1",
            "Audio": true,
            "Answers": [
                {
                    "Id": "17341",
                    "Content": "http://zmp3-mp3-s1-tr.zadn.vn/3151ea8332c7db9982d6/8766360630999056592?key=Bl2zhQTnYnSit76yA0Eh1g&expires=1498728520",
                    "Order": 1,
                    "Correct": false
                },
                {
                    "Id": "17342",
                    "Content": "http://zmp3-mp3-s1-tr.zadn.vn/3151ea8332c7db9982d6/8766360630999056592?key=Bl2zhQTnYnSit76yA0Eh1g&expires=1498728520",
                    "Order": 2,
                    "Correct": false
                },
                {
                    "Id": "17343",
                    "Content": "http://zmp3-mp3-s1-tr.zadn.vn/3151ea8332c7db9982d6/8766360630999056592?key=Bl2zhQTnYnSit76yA0Eh1g&expires=1498728520",
                    "Order": 3,
                    "Correct": true
                },
                {
                    "Id": "17344",
                    "Content": "http://zmp3-mp3-s1-tr.zadn.vn/3151ea8332c7db9982d6/8766360630999056592?key=Bl2zhQTnYnSit76yA0Eh1g&expires=1498728520",
                    "Order": 4,
                    "Correct": false
                }
            ]
        }
    }
]
```
9. POST `/api/subjects/generatesheet` tạo đề thi với các giá trị đầu vào
```
# Ví dụ
localhost:3000/api/subjects/generatesheet
dử liệu đầu vào
{
	"number":"5", // số câu cần tạo cho 1 đề
	"subjectId":"155",  // id môn học cần tạo đề
	"subjectName":"tiếng anh 7",   // tiêu đề cho đề thi
	"userId":"1"  // đề thi này của user nào
}
kiểu dữ liệu trả về
{
    "message": "Tạo đề thành công", // thông báo thành công
    "QuestionSheet": "24"  // trả về id đề thi vừa được tạo
}
```
10. POST `/api/subjects/update/answer` cập nhật đáp án khi người dùng chọn đáp án lúc làm bài
```
# ví du
dử liệu đầu vào
{
	"questionSheetId":"24",  // id đề thi
	"questionId":"13363",    // id câu hỏi
	"answerId":"17369"	// id đáp án chọn
}
kiểu dữ liệu trả về
update thành công
```
# Cài đặt nâng cao
1. Để dễ sử dụng có thể cài Postman để tiện cho việc sử dụng các API tại cửa hàng Google chrome: `https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?utm_source=chrome-ntp-icon`.
    
