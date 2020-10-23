const jwt = require('jsonwebtoken');
const path = require('path');
const dotenv = require('dotenv');
const { findExistingUser } = require('../models/queries');
dotenv.config({ path: path.join(__dirname, '..', '.env') });

exports.afterSignup = async (req, res, next) => {
  const result = req.body.result;
  if (!result.ok) {
    if (result.error)
      return res.status(500).json({ ok: false, message: '서버에서 오류가 발생했습니다. 다시 시도해주세요' });
    return res.status(409).json({ ok: false, message: '이미 존재하는 유저입니다.' });
  }
  return res.status(200).json({ ok: true, token: result.token });
};

exports.afterSignin = async (req, res, next) => {
  const result = req.body.result;
  if (!result.ok) {
    if (result.error)
      return res.status(500).json({ ok: false, message: '서버에서 오류가 발생했습니다. 다시 시도해주세요' });
    return res.status(404).json({ ok: false, message: '존재하지 않는 유저입니다.' });
  }
  return res.status(200).json({ ok: true, token: result.token });
};

exports.isAuth = async (req, res, next) => {
  try {
    const userToken = req.header('Authorization').split(' ')[1];
    if (!userToken) return res.status(200).json({ authorized: false });
    const decoded = jwt.verify(userToken, process.env.JWT_SECRET);
    const result = findExistingUser(decoded.id, decoded.provider);
    if (!result) return res.status(200).json({ authorized: false });
    return res.status(200).json({ authorized: true });
  } catch (e) {
    return res.status(500).json({ ok: false });
  }
};
