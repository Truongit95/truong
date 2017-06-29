# Cách cài đặt
1. Cài đặt Node js: https://nodejs.org/en/
2. Cài đăt thư viện: tại thư mục chứ project mở cmd gỏ vào lệnh: `npm install`
# Cách sử dụng
1. Tại thư mục chứa project mở cmd gỏ lệnh:`nodemon` để bắt đầu start serve.
2. Sau khi serve start thành công thì trình duyệt có thể sử dụng:`http://localhost:3000`
# Danh sách các API

# Questions (câu hỏi)

1. GET `/api/questions/:id` lấy chi tiết câu hỏi theo mã

2. GET `/api/questions/:id/answer` lấy chi tiết câu trả lời theo mã câu hỏi

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
object đầu vàoobject đầu vào
{
    "id":"27",    // id user cần được update
    "name":"truong",   // tên người dùng cần update
    "email":"truong@gmail.com",   // email cần update
    "phone":"01648935841"    // số điện thoại update
}
kiểu dữ liệu trả về
Cập nhật thành công

Nếu có mật khẩu mới sẽ cập nhật mật khẩu mới với 
{
    "id":"27",    // id user cần được update
    "name":"truong",   // tên người dùng cần update
    "email":"truong@gmail.com",   // email cần update
    "phone":"01648935841"    // số điện thoại update
    "newpass" : "Your new password" // mật khẩu mới của bạn
}
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
7. GET `/api/subjects/getexam` lấy ra danh sách các hỏi câu và câu trả lời để người dùng làm bài
```
# Ví dụ
localhost:3000/api/subjects/getexam/?questionSheetId=24&userId=1   //24 là id đề thi và 1 là id user => load chi tiết đề thi theo iduser và id đề
kiểu dữ liệu trả về
{
    "info": {                                // thông tin đề thi
        "Id": "24",
        "Name": "tiếng anh 7",
        "CreateDate": "2017-06-25T00:00:00.000Z",
        "Approved": null,
        "Started": null,
        "Completed": true,
        "ExtraTime": null,
        "ExtraTimeReason": null,
        "Mark": 0,
        "ShiftSubjectStudentId": null,
        "NumberOfCorrect": null,
        "Total": null,
        "Difficulty": null,
        "UserId": 1
    },
    "details": [   // danh sách câu hỏi và câu trả lời
        {
            "QuestionSheetId": "24",
            "QuestionId": "13363",
            "Order": 3,
            "AnswerId": null,
            "Correct": null,
            "CreateDate": "2017-06-25T00:00:00.000Z",
            "UpdateDate": null,
            "ListenTimes": null,
            "Question": {
                "Id": "13363",
                "Content": "\r\n<p><b>Câu\r\n11.</b>\r\nChọn đáp án <b><i>sai</i></b>.</p>\r\n",
                "ParentId": "-1",
                "Audio": false,
                "Answers": [
                    {
                        "Id": "17369",
                        "Content": "Tại \r\n\r\nmột \r\n\r\nvị \r\n\r\ntrí \r\n\r\nxác \r\n\r\nđịnh \r\n\r\ntrên \r\n\r\nTrái \r\n\r\nĐất \r\n\r\nvà \r\n\r\nở \r\n\r\ngần \r\n\r\nmặt \r\n\r\nđất\r\n\r\n, \r\n\r\ncác \r\n\r\nvật \r\n\r\nđều \r\n\r\nrơi \r\n\r\ntự \r\n\r\ndo \r\n\r\nvới \r\n\r\ncùng \r\n\r\nmột \r\n\r\ngia \r\n\r\ntốc \r\n\r\ng\r\n\r\n.",
                        "Order": 1,
                        "Correct": false
                    },
                    {
                        "Id": "17370",
                        "Content": "Trong \r\n\r\nchuyển \r\n\r\nđộng \r\n\r\nnhanh \r\n\r\ndần \r\n\r\nđều \r\n\r\ngia \r\n\r\ntốc \r\n\r\ncùng \r\n\r\ndấu \r\n\r\nvới \r\n\r\nvậntốcv<sub>0</sub>\r\n\r\n.",
                        "Order": 2,
                        "Correct": false
                    },
                    {
                        "Id": "17371",
                        "Content": "Gia \r\n\r\ntốc \r\n\r\ncủa \r\n\r\nchuyển \r\n\r\nđộng \r\n\r\nthẳng \r\n\r\nbiến \r\n\r\nđổi \r\n\r\nđều \r\n\r\nlà \r\n\r\nđại \r\n\r\nlượng \r\n\r\nkhông \r\n\r\nđổi\r\n\r\n.",
                        "Order": 3,
                        "Correct": false
                    },
                    {
                        "Id": "17372",
                        "Content": "Chuyển \r\n\r\nđộng \r\n\r\nrơi \r\n\r\ntự \r\n\r\ndo \r\n\r\nlà \r\n\r\nchuyển \r\n\r\nđộng \r\n\r\nthẳng \r\n\r\nchậm \r\n\r\ndầnđều\r\n\r\n.",
                        "Order": 4,
                        "Correct": true
                    }
                ]
            }
        },
        {
            "QuestionSheetId": "24",
            "QuestionId": "13382",
            "Order": 5,
            "AnswerId": null,
            "Correct": null,
            "CreateDate": "2017-06-25T00:00:00.000Z",
            "UpdateDate": null,
            "ListenTimes": null,
            "Question": {
                "Id": "13382",
                "Content": "\r\n<p><b>Câu 30.</b> Chọn câu\r\nđúng.</p>\r\n",
                "ParentId": "-1",
                "Audio": false,
                "Answers": [
                    {
                        "Id": "17445",
                        "Content": "Trong \r\n\r\ncác \r\n\r\nchuyển \r\n\r\nđộng \r\n\r\ntròn \r\n\r\nđều \r\n\r\ncó \r\n\r\ncùng \r\n\r\nbán \r\n\r\nkính\r\n\r\n, \r\n\r\nchuyển \r\n\r\nđộng \r\n\r\nnào \r\n\r\ncó \r\n\r\nchu \r\n\r\nkỳ \r\n\r\nquay \r\n\r\nlớn \r\n\r\nhơn \r\n\r\nthì \r\n\r\ncó \r\n\r\nvận \r\n\r\ntốc \r\n\r\ndài \r\n\r\nlớn \r\n\r\nhơn\r\n\r\n.",
                        "Order": 1,
                        "Correct": false
                    },
                    {
                        "Id": "17446",
                        "Content": "Trong \r\n\r\nchuyển \r\n\r\nđộng \r\n\r\ntròn \r\n\r\nđều\r\n\r\n, \r\n\r\nchuyển \r\n\r\nđộng \r\n\r\nnào \r\n\r\ncó \r\n\r\nchu \r\n\r\nkỳ \r\n\r\nquay \r\n\r\nnhỏ \r\n\r\nhơn \r\n\r\nthì \r\n\r\ncó \r\n\r\nvận \r\n\r\ntốc \r\n\r\ngóc \r\n\r\nnhỏ \r\n\r\nhơn\r\n\r\n.",
                        "Order": 2,
                        "Correct": false
                    },
                    {
                        "Id": "17447",
                        "Content": "Trong \r\n\r\ncác \r\n\r\nchuyển \r\n\r\nđộng \r\n\r\ntròn \r\n\r\nđều\r\n\r\n, \r\n\r\nchuyển \r\n\r\nđộng \r\n\r\nnào \r\n\r\ncó \r\n\r\ntần \r\n\r\nsố \r\n\r\nlớn \r\n\r\nhơn \r\n\r\nthì \r\n\r\ncó \r\n\r\nchu \r\n\r\nkỳ \r\n\r\nnhỏ \r\n\r\nhơn\r\n\r\n.",
                        "Order": 3,
                        "Correct": true
                    },
                    {
                        "Id": "17448",
                        "Content": "Trong \r\n\r\ncác \r\n\r\nchuyển \r\n\r\nđộng \r\n\r\ntròn \r\n\r\nđều\r\n\r\n, \r\n\r\nvới \r\n\r\ncùng \r\n\r\nchu \r\n\r\nkỳ\r\n\r\n, \r\n\r\nchuyển \r\n\r\nđộng \r\n\r\nnào \r\n\r\ncó \r\n\r\nbán \r\n\r\nkính \r\n\r\nnhỏ \r\n\r\nhơn \r\n\r\nthì \r\n\r\ncó \r\n\r\nvận \r\n\r\ntốc \r\n\r\ngóc \r\n\r\nnhỏ \r\n\r\nhơn\r\n\r\n.",
                        "Order": 4,
                        "Correct": false
                    }
                ]
            }
        },
    ]
}
```
8. POST `/api/subjects/generatesheet` tạo đề thi với các giá trị đầu vào
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
9. POST `/api/subjects/update/answer` cập nhật đáp án khi người dùng chọn đáp án lúc làm bài
```
# ví dụ
dử liệu đầu vào
{
	"questionSheetId":"24",  // id đề thi
	"questionId":"13363",    // id câu hỏi
	"answerId":"17369"	// id đáp án chọn
}
kiểu dữ liệu trả về
update thành công
```

10. GET `/api/subjects/completed/:id` cập nhật đáp án khi người dùng chọn đáp án lúc làm bài
```
# ví dụ

kiểu dữ liệu trả về : mảng cái question sheet id hiện đang chưa hoàn thành
update thành công
```

# Cài đặt nâng cao
1. Để dễ sử dụng có thể cài Postman để tiện cho việc sử dụng các API tại cửa hàng Google chrome: `https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?utm_source=chrome-ntp-icon`.
    
