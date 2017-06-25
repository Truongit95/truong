/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Exams', {
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
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '(getdate())'
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'Exams'
  });
};
