/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Subjects', {
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
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    FacultyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Faculties',
        key: 'Id'
      }
    },
    ManagementOrder: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'Subjects'
  });
};
