const { insertBook, findBook } = require('../models/queries');

const addBook = async (req, res, next) => {
  try {
    const id = req.body.isbn;
    const existingBook = await findBook(id);
    if (!existingBook) await insertBook(id, req.body.title, req.body.authors, req.body.publishedDate, thumbnailUrl);
    req.body.ok = true;
    next();
  } catch (e) {
    req.body.ok = false;
    req.body.message = '도서 추가 중 오류가 발생했습니다.';
    next();
  }
};

module.exports = addBook;
