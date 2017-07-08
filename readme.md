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
## return array

```
2. GET `/api/users/id` lấy ra thông tin tài khoản có mã là id
```
## ví dụ:
localhost:3000/api/users/1
## return object

```
3. POST `/api/users/register` đăng ký một user mới trong database
```
## ví dụ
localhost:3000/api/users/register
## kiểu dữ liệu nhận vào
{
    "username":"username",     // tên tài khoản
    "password":"password",    // passwork mã hóa md5 nhe rồi mới truyền vào
    "name":"name"  /// tên người dùng
}
kiểu dữ liệu trả về
return string
```
4. POST `/api/users/login` đăng nhập tài khoản vào hệ thống với username và password
```
## Ví dụ
localhost:3000/api/users/login
object đầu vào 
{
    "username":"username",    // tên tài khoản người dùng 
    "password":"password"   //  mật khẩu mã hóa md5
}
kiểu dữ liệu trả về
return object
```
5. POST `/api/users/update` cập nhật thông tin của tài khoản
```
## Ví dụ
localhost:3000/api/users/update
object đầu vàoobject đầu vào
{
    "id":"id",    // id user cần được update
    "name":"name",   // tên người dùng cần update
    "email":"youremail",   // email cần update
    "phone":"yourphone"    // số điện thoại update
}
kiểu dữ liệu trả về
return string

Nếu có mật khẩu mới sẽ cập nhật mật khẩu mới với 
{
    "id":"id",    // id user cần được update
    "name":"name",   // tên người dùng cần update
    "newpass" : "Your new password" // mật khẩu mới của bạn
}
```

# Subjects (môn học)
1. GET `/api/subjects` lấy ra tất cả các môn học có theo khoa
```
##ví dụ
localhost:3000/api/subjects
kiểu dữ liệu trả về array

```
2. GET `/api/subjects/faculties` lấy ra danh sách các khoa có trong database
```
## Ví dụ
localhost:3000/api/subjects/faculties
kiểu dữ liệu trả về array
```
3. GET `/api/subjects/id` lấy ra thông tin chi tiết môn học theo id môn học
```
## Ví dụ
localhost:3000/api/subjects/1
kiểu dữ liệu trả về object
```
4. GET `/api/subjects/faculties/id` lấy ra các môn học theo khoa (FacultyId)
```
## Ví dụ
localhost:3000/api/subjects/faculties/4
kiểu dữ liệu trả về array
```
5. GET `/api/subjects/getmark` trả về số điểm của đề thi với tham số là id đề thi
```
# ví dụ
dử liệu đầu vào
localhost:3000/api/subjects/getmark?questionSheetId=24             //id đề thi là 24
kiểu dữ liệu trả về array
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
kiểu dữ liệu trả về array

```
7. GET `/api/subjects/getexam` lấy ra thông tin đề thi
```
# Ví dụ
localhost:3000/api/subjects/getexam/?questionSheetId=63&userId=23   //63 là id đề thi và 23 là id user => load chi tiết đề thi theo iduser và id đề
kiểu dữ liệu trả về object
```
8. GET `/api/subjects/getexam/detail?questionSheetId=id` lấy ra chi tiết đề thi với id đề thi truyền vào
```
# Ví dụ
localhost:3000/api/subjects/getexam/detail/?questionSheetId=63
kiểu dữ liệu trả về array

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
kiểu dữ liệu trả về object
{
    "message": "Tạo đề thành công", // thông báo thành công
    "QuestionSheet": "24"  // trả về id đề thi vừa được tạo
}
```
10. POST `/api/subjects/update/answer` cập nhật đáp án khi người dùng chọn đáp án lúc làm bài
```
# ví dụ
dử liệu đầu vào
{
	"questionSheetId":"24",  // id đề thi
	"questionId":"13363",    // id câu hỏi
	"answerId":"17369"	// id đáp án chọn
}
kiểu dữ liệu trả về string
update thành công
```

11. GET `/api/subjects/completed/:id` cập nhật đáp án khi người dùng chọn đáp án lúc làm bài
```
# ví dụ

kiểu dữ liệu trả về : mảng cái question sheet id hiện đang chưa hoàn thành
return string update thành công
```

# Cài đặt nâng cao
1. Để dễ sử dụng có thể cài Postman để tiện cho việc sử dụng các API tại cửa hàng Google chrome: `https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?utm_source=chrome-ntp-icon`.
    
