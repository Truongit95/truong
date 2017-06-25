/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Students', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'Students'
  });
};
