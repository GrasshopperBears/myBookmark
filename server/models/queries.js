const Book = require('./tables/book');
const User = require('./tables/user');

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

exports.insertBook = async (title, authors, published_date, thumbnail_url) => {
  try {
    const result = await Book.create({ title, authors, published_date, thumbnail_url });
    return result;
  } catch (e) {
    return e;
  }
};

exports.insertBookmark = async (id, uid, book_id, text, highlights, omits, created) => {
  try {
    const result = await Book.create({ id, uid, book_id, text, highlights, omits, created });
    return result;
  } catch (e) {
    return e;
  }
};
