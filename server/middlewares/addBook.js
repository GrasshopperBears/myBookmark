const { insertBook, findBook } = require('../models/queries');
const { v4: uuidv4 } = require('uuid');

const addBook = async (req, res, next) => {
  try {
    const id = req.body.isbn || uuidv4();
    const publishedDate = req.body.publishedDate || undefined;
    const thumbnailUrl = req.body.thumbnailUrl || undefined;
    const existingBook = await findBook(id);
    if (!existingBook) await insertBook(id, req.body.title, req.body.authors, publishedDate, thumbnailUrl);
    req.body.bookId = id;
    req.body.ok = true;
    next();
  } catch (e) {
    req.body.ok = false;
    req.body.message = '도서 추가 중 오류가 발생했습니다.';
    next();
  }
};

module.exports = addBook;
