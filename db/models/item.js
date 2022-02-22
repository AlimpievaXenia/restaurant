const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Category, Photo, OrderItem, BasketItem,
    }) {
      // define association here
      Item.belongsTo(Category, { foreignKey: 'categoryId' });
      Item.hasMany(Photo, { foreignKey: 'itemId' });
      Item.hasMany(BasketItem, { foreignKey: 'itemId' });
      Item.hasMany(OrderItem, { foreignKey: 'itemId' });
    }
  }
  Item.init({
    title: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    price: DataTypes.STRING,
    weight: DataTypes.STRING,
    proteins: DataTypes.STRING,
    fats: DataTypes.STRING,
    carbs: DataTypes.STRING,
    colories: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
