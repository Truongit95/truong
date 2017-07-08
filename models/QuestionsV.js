/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuestionsV', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Interchange: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SubjectiveDifficulty: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SelectedTimes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CorrectTimes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ChapterId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UpdateDate: {
      type: DataTypes.DATE,
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
    }
  }, {
    timestamps: false,
    tableName: 'QuestionsV'
  });
};
