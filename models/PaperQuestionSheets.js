/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PaperQuestionSheets', {
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
      type: DataTypes.DATE,
      allowNull: true
    },
    ExportDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TestDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Exported: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    PaperShiftSubjectId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'PaperShiftSubjects',
        key: 'Id'
      }
    },
    ObjectiveDifficulty: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Total: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'PaperQuestionSheets'
  });
};
