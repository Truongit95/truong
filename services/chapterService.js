const DataTypes = require('sequelize');
var sequelize = require('../models/db');
var Subjects = require('../models/Subjects')(sequelize, DataTypes);
var Chapters = require('../models/Chapters')(sequelize, DataTypes);

var getChapterById = (id) => {
    return Chapters.findById(id);
}

var getChapterBySubjectId = (subjectId) => {
    return Chapters.findAll({
        where: {
            SubjectId: subjectId
        }
    });
}

exports.getChapterBySubjectId = getChapterBySubjectId;
exports.getChapterById = getChapterById;