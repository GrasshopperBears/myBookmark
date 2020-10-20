const Sequelize = require('sequelize');
const sequelize = require('../model');

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_id: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  user_name: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(60),
  },
  provider: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
});

module.exports = User;
