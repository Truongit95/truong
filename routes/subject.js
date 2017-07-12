var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('lodash');
var subjectService = require('../services/subjectService');

// check question sheet is completed 
router.get('/completed/:id', function (req, res, next) {
    var id = req.params.id;
    subjectService.isCompleteSheet(id)
        .then((data) => {
            // if there are sheets isn't completed
            if (_.isEmpty(data)) {
                res.status(200).json(null);
            }
            res.status(200).json({ questionSheetId: data });
        })
        .catch((err) => {
            res.status(404);
        });
});

// generate exam
router.post('/generatesheet', function (req, res, next) {
    var number = req.body.number;
    var subjectId = req.body.subjectId;
    var subjectName = req.body.subjectName;
    var userId = req.body.userId;
    subjectService.generateExamBySubject(number, subjectId)
        .then((data) => {
            var arrayQuestions = data[0];
            // create questionsheet
            var questionsheet = {
                Name: subjectName,
                CreateDate: moment().format('YYYY-MM-DD'),
                Completed: false,
                UserId: userId
            }
            subjectService.createQuestionSheet(questionsheet)
                .then((sheet) => {
                    // return questionSheetId to create questionSheetDetail
                    for (var i = 0; i < arrayQuestions.length; i++) {
                        let detail = {
                            QuestionSheetId: sheet.Id,
                            QuestionId: arrayQuestions[i].Id,
                            Order: i + 1,
                            CreateDate: moment().format('YYYY-MM-DD')
                        }
                        subjectService.createQuestionSheetDetail(detail).then((data) => {
                        }).catch((err) => {
                            console.error('Không thể tạo câu hỏi vì', err);
                        });
                    }
                    res.status(200).json({ message: 'Tạo đề thành công', QuestionSheet: sheet.Id });
                })
                .catch((err) => {
                    res.status(404).send('Không thể tạo đề thi');
                });
        })
        .catch((err) => {
            res.status(404).send('Không thể tạo đề thi');
        });
});

// get exam info
router.get('/getexam', function (req, res, next) {
    var questionSheetId = req.query.questionSheetId;
    var userId = req.query.userId;

    subjectService.getQuestionSheetInfo(questionSheetId, userId)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).send('Không thể lấy thông tin đề thi,', err);
        });
});

// get exam details
router.get('/getexam/detail', function (req, res, next) {
    var questionSheetId = req.query.questionSheetId;

    subjectService.getQuestionSheetDetails(questionSheetId)
        .then((data) => {
            // handle for url
            var result = _.map(data, (v, i) => {
                return {
                    QuestionSheetId: v.QuestionSheetId,
                    QuestionId: v.QuestionId,
                    Order: v.Order,
                    AnswerId: v.AnswerId,
                    Correct: v.Correct,
                    CreateDate: v.CreateDate,
                    UpdateDate: v.UpdateDate,
                    ListenTimes: v.ListenTimes,
                    Question: {
                        Id: v.Question.Id,
                        Content: v.Question.Content.replace(/D:\\\\Files\\/g, '104.198.181.185:3000\\public\\Files\\'),
                        ParentId: v.Question.ParentId,
                        Audio: v.Question.Audio,
                        Answers: _.map(v.Question.Answers, (v, i) => {
                            return {
                                Id: v.Id,
                                Content: v.Content.replace(/D:\\\\Files\\/g, '104.198.181.185:3000\\public\\Files\\'),
                                Order: v.Order,
                                Correct: v.Correct
                            }
                        })
                    }
                }
            })

            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(404).send('Không thể lấy chi tiết đề thi,', err);
        });
});

router.get('/review/exam', (req, res, next) => {
    var questionSheetId = req.query.questionSheetId;
    subjectService.getReviewQuestions(questionSheetId)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).send(false);
        })
})

// update current answer
router.post('/update/answer', function (req, res, next) {
    var questionSheetId = req.body.questionSheetId;
    var questionId = req.body.questionId;
    var answerId = req.body.answerId;

    subjectService.updateAnswer(questionSheetId, questionId, answerId)
        .then((data) => {
            res.status(200).send('update thành công');
        })
        .catch((err) => {
            res.status(404).send('Không thể cập nhật câu trả lời vì: ', err);
        });
});

// get mark
router.get('/getmark', function (req, res, next) {
    var questionSheetId = req.query.questionSheetId;

    subjectService.getMark(questionSheetId)
        .then((data) => {
            res.status(200).json(data[0]);
        })
        .catch((err) => {
            res.status(404).send('Không thể tính điểm vì, ', err);
        });
});

// get result
router.get('/getresult', function (req, res, next) {
    var questionSheetId = req.query.questionSheetId;

    subjectService.getResult(questionSheetId)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).send('Không thể lấy kết quả vì, ', err);
        });
});

// get faculties
router.get('/faculties', function (req, res, next) {
    subjectService.getListFaculties()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).send('Không tìm thấy môn học này');
        });
});

// get subject by id
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    subjectService.getSubject(id)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).send('Không tìm thấy môn học này');
        });
});

// get subject by id
router.get('/faculties/:id', function (req, res, next) {
    var id = req.params.id;
    subjectService.getSubjectByFaculty(id)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).send('Không tìm thấy môn học này');
        });
});

// get all subject
router.get('/', function (req, res, next) {
    subjectService.getListSubject()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).send('Không tìm thấy môn học này', err);
        });
});





module.exports = router;
