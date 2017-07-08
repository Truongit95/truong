/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AnswersV', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    QuestionId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Correct: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Interchange: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SelectedTimes: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'AnswersV'
  });
};
