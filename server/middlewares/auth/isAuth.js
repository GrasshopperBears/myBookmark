const jwt = require('jsonwebtoken');
const path = require('path');
const dotenv = require('dotenv');
const { findExistingUser } = require('../../models/queries');
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const isAuth = async (req, res, next) => {
  try {
    const userToken = req.header('Authorization').split(' ')[1];
    if (!userToken) {
      req.body.authorized = false;
    } else {
      const decoded = jwt.verify(userToken, process.env.JWT_SECRET);
      const result = await findExistingUser(decoded.id, decoded.provider);
      if (!result) req.body.authorized = false;
      else {
        req.body.authorized = true;
        req.body.uid = result.dataValues.id;
      }
    }
    req.body.ok = true;
    next();
  } catch (e) {
    req.body.ok = false;
    next();
  }
};

module.exports = isAuth;
