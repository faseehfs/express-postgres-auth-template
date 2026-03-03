/*
This is the entry point of our application.
To host the website, run this file.
*/

require("dotenv").config();

const express = require("express");
const path = require("path");
const session = require("express-session");

// You can import modules either by require (CommonJS) or import (ES6).
// ES6 modules are the modern approach. However, here we use CommonJS.
// CommonJS modules are loaded synchronusly, while ES6 modules are loaded
// asynchronously.

const app = express();
const PORT = 3000;

app.use(express.json());

// express.json() reads the req.body, parses it into an JavaScript object, and
// sets req.body = that parsed object.
// NOTE: It only parses requests with Content-Type: application/json.

app.use(express.static(path.join(__dirname, "../public")));

// express.static(path) middleware serves static files in the path.
// If a matching file is found, it ends the request-response cycle.

app.use(express.urlencoded());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "shhh...",
  }),
);

app.use("/api", require("./routes"));

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
