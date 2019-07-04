'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Products.associate = function (models) {
    Products.hasMany(models.OrderProd, { foreignKey: 'idProduct' })
  };

  // Maneira de popular as models manualmente, sem o dbeaver => 
  // Products.create({name:"Hambúrguer Simples", price:10})
  // Products.create({name:"Hambúrguer Duplo", price:15})
  // Products.create({name:"Batata Frita", price:5})
  // Products.create({name:"Anéis de Cebola", price:5})
  // Products.create({name:"Bebida Gaseificada 500ml", price:7})

  return Products;
};