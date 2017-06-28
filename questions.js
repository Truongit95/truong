var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('lodash');
var questionService = require('../services/questionService');

// get answer by question id
router.get('/:id/answer', function (req, res, next) {
    var questionId = req.params.id;

    questionService.getAnswerByQuestion(questionId)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404);
        });
});

// get question by id
router.get('/:id', function (req, res, next) {
    var questionId = req.params.id;

    questionService.getQuestion(questionId)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404);
        });
});



module.exports = router;