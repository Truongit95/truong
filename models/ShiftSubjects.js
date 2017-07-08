/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShiftSubjects', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ShiftId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Shifts',
        key: 'Id'
      }
    },
    SubjectId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Subjects',
        key: 'Id'
      }
    },
    MatrixId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Matrices',
        key: 'Id'
      }
    }
  }, {
    timestamps: false,
    tableName: 'ShiftSubjects'
  });
};
