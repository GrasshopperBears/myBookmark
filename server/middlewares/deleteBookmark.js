const { destroyBookmarkById, destroyBookmarkByBookId } = require('../models/queries');

exports.deleteBookmarkById = async (req, res, next) => {
  try {
    await destroyBookmarkById(parseInt(req.params.id), req.body.uid);
    req.body.ok = true;
    next();
  } catch (e) {
    console.log(e);
    req.body.ok = false;
    req.body.message = '삭제 중 오류가 발생했습니다.';
    next();
  }
};

exports.deleteBookmarkByBookId = async (req, res, next) => {
  try {
    await destroyBookmarkByBookId(req.body.uid, req.body.bookId);
    req.body.ok = true;
    next();
  } catch (e) {
    req.body.ok = false;
    req.body.message = '삭제 중 오류가 발생했습니다.';
    next();
  }
};
