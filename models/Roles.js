/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Roles', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'Roles'
  });
};
