const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Item }) {
      // define association here
      OrderItem.belongsTo(Order, { foreignKey: 'orderId' });
      OrderItem.belongsTo(Item, { foreignKey: 'itemId' });
    }
  }
  OrderItem.init({
    itemId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};
