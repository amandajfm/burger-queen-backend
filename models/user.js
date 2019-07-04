'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Orders, {
      foreignKey: 'uid'
    });
  };

  // Maneira de popular as models manualmente, sem o dbeaver => 
  // User.create({email:"amanda1@gmail.com"})
  // User.create({email:"jessica1@gmail.com"})
  // User.create({email:"joao1@gmail.com"})

  return User;
};