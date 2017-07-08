/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Matrices', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SubjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'Matrices'
  });
};
