function errorHandler(err, req, res, next) {
  console.log("This message is printed by errorHandler.js:\n", err);
  return res.status(500).json({ error: "Internal Server Error" });
}

module.exports = errorHandler;
