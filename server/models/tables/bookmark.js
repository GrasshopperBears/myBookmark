const Sequelize = require('sequelize');
const sequelize = require('../model');

const Bookmark = sequelize.define('Bookmark', {
  id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  uid: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    references: { model: 'Users', key: 'id' },
    allowNull: false,
  },
  book_id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    references: { model: 'Books', key: 'id' },
    allowNull: false,
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  highlights: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  omits: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  created: {
    type: Sequelize.TIME,
    allowNull: false,
    defaultValue: new Date(),
  },
});

module.exports = Bookmark;
