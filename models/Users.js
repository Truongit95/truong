/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Users', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CreateDate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LogOut: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LastActivity: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastLogIn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastPasswordChanged: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastLogOut: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Salt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Comment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    BuildInUser: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
      timestamps: false,
      tableName: 'Users'
    });
};
