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
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '(getdate())'
    },
    UpdateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '(getdate())'
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
    }
  }, {
    timestamps: false,
    tableName: 'Questions'
  });
};
