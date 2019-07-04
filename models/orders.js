'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    uid: DataTypes.INTEGER
  }, {});
  Orders.associate = function(models) {
     Orders.belongsTo(models.User, {foreignKey:'uid'});
     Orders.hasMany(models.OrderProd, {foreignKey: 'idOrder'})
  };

  // Maneira de popular as models manualmente, sem o dbeaver => 
  // Orders.create({status:"Servido", uid:1})
  // Orders.create({status:"Pronto para servir", uid:2})
  // Orders.create({status:"Na cozinha", uid:3})

  return Orders;
};