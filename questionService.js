const DataTypes = require('sequelize');
var sequelize = require('../models/db');
var Questions = require('../models/Questions')(sequelize, DataTypes);
var Answers = require('../models/Answers')(sequelize, DataTypes);

// Eager loading
// Questions - Answers
Answers.belongsTo(Questions);
Questions.hasMany(Answers);

var getQuestion = (id) => {
    return Questions.findById(id);
}

var getAnswerByQuestion = (id) => {
    return Answers.findOne({
        where: {
            QuestionId: id
        }
    });
}

exports.getQuestion = getQuestion;
exports.getAnswerByQuestion = getAnswerByQuestion;