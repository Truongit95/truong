/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuestionSheetDetails', {
    QuestionSheetId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'QuestionSheets',
        key: 'Id'
      }
    },
    QuestionId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Questions',
        key: 'Id'
      }
    },
    Order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AnswerId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Correct: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CreateDate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UpdateDate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ListenTimes: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'QuestionSheetDetails'
  });
};
