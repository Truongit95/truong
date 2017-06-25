/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Chapters', {
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
    Content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ParentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    SubjectId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Subjects',
        key: 'Id'
      }
    },
    ManagementOrder: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'Chapters'
  });
};
