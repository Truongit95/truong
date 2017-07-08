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
      allowNull: false,
      defaultValue: '0'
    },
    Started: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    Completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
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
    },
    ShiftSubjectId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Desktop: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    timestamps: false,
    tableName: 'QuestionSheets'
  });
};
