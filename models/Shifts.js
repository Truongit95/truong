/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Shifts', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    StartTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EndTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Activated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    ActivateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Ended: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExamId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Exams',
        key: 'Id'
      }
    },
    QuestionSheetCreated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    Desktop: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    timestamps: false,
    tableName: 'Shifts'
  });
};
