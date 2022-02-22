const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BasketItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BasketItem.belongsTo(models.User, { foreignKey: 'userId' });
      BasketItem.belongsTo(models.Item, { foreignKey: 'itemId' });
    }
  }
  BasketItem.init({
    userId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'BasketItem',
  });
  return BasketItem;
};
