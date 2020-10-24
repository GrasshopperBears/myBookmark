const modelsConfig = () => {
  const User = require('./tables/user');
  const Book = require('./tables/book');
  const Bookmark = require('./tables/bookmark');

  Bookmark.belongsTo(User, { foreignKey: 'uid' });
  Bookmark.belongsTo(Book, { foreignKey: 'book_id' });
};

module.exports = modelsConfig;
