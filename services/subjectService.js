const DataTypes = require('sequelize');
var sequelize = require('../models/db');
var Subjects = require('../models/Subjects')(sequelize, DataTypes);
var Faculties = require('../models/Faculties')(sequelize, DataTypes);
var Questions = require('../models/Questions')(sequelize, DataTypes);
var Answers = require('../models/Answers')(sequelize, DataTypes);
var QuestionSheets = require('../models/QuestionSheets')(sequelize, DataTypes);
var QuestionSheetDetails = require('../models/QuestionSheetDetails')(sequelize, DataTypes);

// Eager loading
// Faculties - Subjects
Subjects.belongsTo(Faculties);
Faculties.hasMany(Subjects);

// QuestionSheets - QuestionSheetDetails
QuestionSheetDetails.belongsTo(QuestionSheets);
QuestionSheets.hasMany(QuestionSheetDetails);

// Questions - Answers
Answers.belongsTo(Questions);
Questions.hasMany(Answers);

// QuestionSheetDetails - Questions
QuestionSheetDetails.belongsTo(Questions);

var getListSubject = () => {
    return Subjects.findAll({
        include: [{ model: Faculties, attributes: ['Id', 'Name'] }]
    });
}

var getSubject = (id) => {
    return Subjects.findById(id);
}

var getListFaculties = () => {
    return Faculties.findAll();
}

var getSubjectByFaculty = (id) => {
    return Subjects.findAll({
        where: {
            FacultyId: id
        }
    })
}

var generateExamBySubject = (number, subjectId) => {
    return sequelize.query(`EXEC dbo.GenerateExam @number = ${number}, @subjectId = ${subjectId}`);
}

var createQuestionSheet = (object) => {
    return QuestionSheets.create(object);
}

var createQuestionSheetDetail = (object) => {
    return QuestionSheetDetails.create(object);
}

var getQuestionSheetInfo = (id, userId) => {
    return QuestionSheets.findOne({
        where: {
            Id: id,
            UserId: userId
        }
    });
}

var getQuestionSheetDetails = (id) => {
    return QuestionSheetDetails.findAll({
        where: {
            QuestionSheetId: id
        },
        include: [
            {
                model: Questions, attributes: ['Id', 'Content', 'ParentId', 'Audio'],
                include: [{ model: Answers, attributes: ['Id', 'Content', 'Order', 'Correct'] }]
            }
        ]
    })
}

var updateAnswer = (questionSheetId, questionId, answerId) => {
    return QuestionSheetDetails.update({
        AnswerId: answerId
    }, {
            where: {
                QuestionSheetId: questionSheetId,
                QuestionId: questionId
            }
        });
}

var getMark = (questionSheetId) => {
    return sequelize.query(`EXEC CalculateUserSheet @questionSheetId = ${questionSheetId}`);
}

var getResult = (id) => {
    return QuestionSheetDetails.findAll({
        where: {
            QuestionSheetId: id
        },
        attributes: ['QuestionSheetId', 'QuestionId', 'Order', 'Correct']
    });
}

exports.getListSubject = getListSubject;
exports.getSubject = getSubject;
exports.getSubjectByFaculty = getSubjectByFaculty;
exports.getListFaculties = getListFaculties;
exports.generateExamBySubject = generateExamBySubject;
exports.createQuestionSheet = createQuestionSheet;
exports.createQuestionSheetDetail = createQuestionSheetDetail;
exports.getQuestionSheetInfo = getQuestionSheetInfo;
exports.getQuestionSheetDetails = getQuestionSheetDetails;
exports.updateAnswer = updateAnswer;
exports.getMark = getMark;
exports.getResult = getResult;