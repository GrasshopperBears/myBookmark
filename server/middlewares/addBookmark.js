const { insertBookmark, findInsertedBookmark } = require('../models/queries');

const addBookmark = async (req, res, next) => {
  if (!req.body.ok) return next();
  try {
    const insertResult = await insertBookmark(
      req.body.uid,
      req.body.bookId,
      req.body.text,
      req.body.highlights,
      req.body.omits,
      new Date(),
      req.body.page
    );
    const result = await findInsertedBookmark(insertResult.dataValues.id);
    req.body.ok = true;
    req.body.result = result;
    next();
  } catch (e) {
    req.body.ok = false;
    req.body.message = '책갈피 추가 중 오류가 발생했습니다.';
    next();
  }
};

module.exports = addBookmark;
