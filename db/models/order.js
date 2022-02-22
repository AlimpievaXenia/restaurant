const {
  Model,
} = require('sequelize');
const user = require('./user');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: 'userId' });
      Order.hasMany(models.OrderItem, { foreignKey: 'orderId' });
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
