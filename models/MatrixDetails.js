/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MatrixDetails', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MatrixId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Matrices',
        key: 'Id'
      }
    },
    ChapterId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Excluded: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'MatrixDetails'
  });
};
