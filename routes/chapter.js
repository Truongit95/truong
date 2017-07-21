var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('lodash');
var chapterService = require('../services/chapterService');

// get chapter by id
router.get('/getChapter/:id', function (req, res, next) {
    var id = req.params.id;
    chapterService.getChapterById(id)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.send(false);
        })
});

// get all chapter by subjectid
router.get('/getAll', function (req, res, next) {
    var subjectId = req.query.subjectId;
    chapterService.getChapterBySubjectId(subjectId)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.send(false);
        })
});

module.exports = router;