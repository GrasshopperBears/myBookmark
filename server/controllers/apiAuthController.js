const apiAuthController = async (req, res, next) => {
  if (req.body.ok && req.body.authorized) next();
  else res.status(401).json({ ok: false, message: '비정상적인 접근입니다.' });
};

module.exports = apiAuthController;
