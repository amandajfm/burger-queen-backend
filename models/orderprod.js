'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProd = sequelize.define('OrderProd', {
    idOrder: DataTypes.INTEGER,
    idProduct: DataTypes.INTEGER
  }, {});
  OrderProd.associate = function (models) {
    OrderProd.belongsTo(models.Products, { foreignKey: 'idProduct' });
    OrderProd.belongsTo(models.Orders, { foreignKey: 'idOrder' })
  };
  return OrderProd;
};