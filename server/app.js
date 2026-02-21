const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Static frontend
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use("/api", require("./routes"));

// Start server
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
