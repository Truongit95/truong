/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PaperQuestionSheetDetails', {
    PaperQuestionSheetId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PaperQuestionSheets',
        key: 'Id'
      }
    },
    QuestionId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'PaperQuestionSheetDetails'
  });
};
