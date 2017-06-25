/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserRoles', {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'Id'
      }
    },
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Roles',
        key: 'Id'
      }
    }
  }, {
    timestamps: false,
    tableName: 'UserRoles'
  });
};
