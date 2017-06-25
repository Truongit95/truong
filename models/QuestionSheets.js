/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuestionSheets', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CreateDate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Approved: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Started: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ExtraTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExtraTimeReason: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Mark: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ShiftSubjectStudentId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    NumberOfCorrect: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Total: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Difficulty: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'QuestionSheets'
  });
};
