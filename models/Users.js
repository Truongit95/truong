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
      type: DataTypes.STRING,
      allowNull: true
    },
    LastLogIn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LastPasswordChanged: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LastLogOut: {
      type: DataTypes.STRING,
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
    FacultyId: {
      type: "NCHAR",
      allowNull: true
    },
    SubjectId: {
      type: "NCHAR",
      allowNull: true
    }
  }, {
      timestamps: false,
      tableName: 'Users'
    });
};
