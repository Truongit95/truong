/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShiftSubjectStudents', {
    ShiftSubjectId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ShiftSubjects',
        key: 'Id'
      }
    },
    StudentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Students',
        key: 'Id'
      }
    },
    QuestionSheetId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'QuestionSheets',
        key: 'Id'
      }
    },
    LogIn: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LastLogIn: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LastLogOut: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'ShiftSubjectStudents'
  });
};
