require("dotenv").config();

const express = require("express");
const path = require("path");
const errorHandler = require("./middleware/errorHandler");
const session = require("express-session");

const app = express();
const PORT = 3000;

app.use(express.json()); // Only applies to requests whose Content-Type is application/json.

app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "shhh...",
  }),
);

app.use("/api", require("./routes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
