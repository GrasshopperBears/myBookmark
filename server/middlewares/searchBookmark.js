const { findBookmark } = require('../models/queries');

const searchBookmark = async (req, res, next) => {
  try {
    const result = await findBookmark(req.body.uid);
    req.body.result = result;
    req.body.ok = true;
    next();
  } catch (e) {
    req.body.ok = false;
    req.body.message = '북마크 조회 중 오류가 발생했습니다.';
    next();
  }
};

module.exports = searchBookmark;
