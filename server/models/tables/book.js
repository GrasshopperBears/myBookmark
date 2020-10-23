const Sequelize = require('sequelize');
const sequelize = require('../model');

const Book = sequelize.define('Book', {
  id: {
    type: Sequelize.STRING(13),
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING(80),
    allowNull: false,
  },
  authors: {
    type: Sequelize.STRING(45),
    allowNull: true,
  },
  published_date: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  thumbnail_url: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

module.exports = Book;
