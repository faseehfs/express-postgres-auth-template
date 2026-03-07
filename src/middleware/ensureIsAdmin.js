function ensureIsAdmin(req, res, next) {
  if (req.session?.role === "admin") {
    return next();
  }
  res.status(403).json({ error: "Forbidden" });
}

module.exports = ensureIsAdmin;
