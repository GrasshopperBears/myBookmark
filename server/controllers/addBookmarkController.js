const addBookmarkController = async (req, res, next) => {
  if (!req.body.ok) return res.status(500).json({ ok: false, message: req.body.message });
  res.header('Access-Control-Allow-Origin', '*');
  return res.status(200).json({ ok: true, result: req.body.result });
};

module.exports = addBookmarkController;
