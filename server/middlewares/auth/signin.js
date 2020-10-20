const passport = require('passport');
const jwt = require('jsonwebtoken');

const signin = async (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, id, message) => {
    if (err) {
      req.body.result = { ok: false, error: err };
      return next();
    } else if (!id) {
      req.body.result = { ok: false, message };
      return next();
    }
    try {
      const data = { id: req.body.id, provider: 'local' };
      const token = jwt.sign(data, process.env.JWT_SECRET);
      req.body.result = { ok: true, token };
      return next();
    } catch (e) {
      req.body.result = { ok: false, error: e };
      return next();
    }
  })(req, res, next);
};

module.exports = signin;
