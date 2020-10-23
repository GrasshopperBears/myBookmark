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
    type: Sequelize.Sequelize.STRING(13),
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
  },
  page: {
    type: Sequelize.INTEGER(6).UNSIGNED,
    allowNull: true,
  },
});

module.exports = Bookmark;
