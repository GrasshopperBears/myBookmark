const Book = require('./tables/book');
const User = require('./tables/user');
const Bookmark = require('./tables/bookmark');

exports.findExistingUser = async (user_id, provider) => {
  try {
    const result = await User.findOne({ attribute: ['user_id'], where: { user_id, provider } });
    return result;
  } catch (e) {
    return e;
  }
};

exports.findUserInfo = async (user_id, provider) => {
  try {
    const result = await User.findOne({ where: { user_id, provider } });
    return result;
  } catch (e) {
    return e;
  }
};

exports.insertUser = async (user_id, user_name, password, provider) => {
  try {
    const result = await User.create({ user_id, user_name, password, provider });
    return result;
  } catch (e) {
    return e;
  }
};

exports.findBook = async (id) => {
  try {
    const result = await Book.findOne({ where: { id } });
    return result;
  } catch (e) {
    return e;
  }
};

exports.insertBook = async (id, title, authors, published_date, thumbnail_url) => {
  try {
    const result = await Book.create({ id, title, authors, published_date, thumbnail_url });
    return result;
  } catch (e) {
    return e;
  }
};

exports.insertBookmark = async (uid, book_id, text, highlights, omits, created, page) => {
  try {
    const result = await Bookmark.create({ uid, book_id, text, highlights, omits, created, page });
    return result;
  } catch (e) {
    return e;
  }
};
