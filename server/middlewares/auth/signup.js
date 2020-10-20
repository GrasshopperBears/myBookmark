const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const path = require('path');
const dotenv = require('dotenv');
const { insertUser, findExistingUser } = require('../../models/queries');
dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

const signup = async (req, res, next) => {
  try {
    const findResult = await findExistingUser(req.body.id, 'local');
    if (findResult) {
      req.body.result = { ok: false };
      return next();
    }
    const salt = bcrypt.genSaltSync(+process.env.SALT_ROUNDS);
    const hash = bcrypt.hashSync(req.body.password, salt);
    await insertUser(req.body.id, req.body.userName, hash, 'local');
    const data = { id: req.body.id, provider: 'local' };
    const token = jwt.sign(data, process.env.JWT_SECRET);
    req.body.result = { ok: true, token };
    next();
  } catch (e) {
    req.body.result = { ok: false, error: e };
    next();
  }
};

module.exports = signup;
