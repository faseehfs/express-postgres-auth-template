function restrict(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.status(400).json({
      message: "Please log in to enter this page.",
      error: "You are not logged in.",
    });
  }
}

module.exports = restrict;
