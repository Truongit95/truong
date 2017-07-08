var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('lodash');
var usersService = require('../services/usersService');

// get all users
router.get('/getall', function (req, res, next) {
  usersService.getAll()
    .then((data) => {
      res.json(data);
    });
});

// get user by id
router.get('/:id', function (req, res, next) {
  var id = req.params.id;
  usersService.getById(id)
    .then((data) => {
      res.json(data);
    });
});

// reg a user
router.post('/register', function (req, res, next) {
  var user = {
    Username: req.body.username,
    Password: req.body.password,
    Name: req.body.name,
    CreateDate: moment().format('YYYY-MM-DD'),
    Deleted: false,
    Comment: 'Reg user'
  }
  usersService.checkExistUsername(req.body.username)
    .then((data) => {
      if (data) {
        res.status(401).send('Người dùng này đã tồn tại');
      } else {
        usersService.create(user)
          .then(() => {
            res.status(201).json({ message: 'Tạo tài khoản thành công' });
          })
          .catch((err) => {
            console.error(err);
            res.status(404).json({ message: 'Không thể tạo người dùng' });
          });
      }
    })
    .catch((err) => {
      res.status(404);
    });

});

// login user
router.post('/login', function (req, res, next) {
  var user = {
    username: req.body.username,
    password: req.body.password
  }
  usersService.login(user)
    .then((data) => {
      if (_.isNull(data)) {
        res.status(404).send('Không thể tìm thấy người dùng này');
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).send({ message: 'Lỗi hệ thống, ' + err });
    });
});

// update user
router.post('/update', function (req, res, next) {
  var id = req.body.id;
  var user = {
    Name: req.body.name,
    // Email: req.body.email,
    // Phone: req.body.phone
  }

  usersService.update(user, id)
    .then(() => {
      // if have new password
      if (req.body.newpass) {
        usersService.changePassword(req.body.newpass, id)
          .then(() => {
            res.status(200).json({ message: 'Cập nhật thành công' });
          })
          .catch((err) => {
            res.status(404).json({ message: 'Không thể cập nhật vì, ' + err });
          });
      }
      res.status(200).json({ message: 'Cập nhật thành công' });
    })
    .catch((err) => {
      res.status(404).json({ message: 'Không thể cập nhật vì, ' + err });
    });

});


module.exports = router;
