const deleteBookmarkController = async (req, res, next) => {
  if (!req.body.ok) res.status(500).json({ ok: false });
  else res.status(200).json({ ok: true });
};

module.exports = deleteBookmarkController;
