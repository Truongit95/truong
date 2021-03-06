/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Questions', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Interchange: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    },
    SubjectiveDifficulty: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '((0.5))'
    },
    SelectedTimes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    CorrectTimes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    ChapterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Chapters',
        key: 'Id'
      }
    },
    CreateDate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UpdateDate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Mark: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ParentId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Audio: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Discrimination: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ManagementOrder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ListenedTimes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ObjectiveDifficulty: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Valided: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    timestamps: false,
    tableName: 'Questions'
  });
};
