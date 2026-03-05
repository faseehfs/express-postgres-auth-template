function restrict(req, res, next) {
  if (req.session.username) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}

module.exports = restrict;
