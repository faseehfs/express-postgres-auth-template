/*
This is the entry point of our application.
To host the website, run this file.
*/

// Importing modules:

const express = require("express");
const path = require("path");
const session = require("express-session");

// You can import modules either by require (CommonJS) or import (ES6).
// ES6 modules are the modern approach. However, here we use CommonJS.
// CommonJS modules are loaded synchronusly, while ES6 modules are loaded
// asynchronously.

const app = express();
const PORT = 3000;

// Middleware:

app.use(express.json());

// express.json() reads the req.body, parses it into an JavaScript object, and
// sets req.body = that parsed object.
// NOTE: It only parses requests with Content-Type: application/json.

app.use(express.static(path.join(__dirname, "../public")));

// express.static(path) serves static files in the path.
// If a matching file is found, it ends the request-response cycle.

app.use(express.urlencoded());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "shhh...",
  }),
);

// The above middleware functions have no mount path, meaning they will execute
// every time the app recieves a request.
// However, the below middleware has a mount path.
// Middleware functions are executed in the order in which they are defined.

app.use("/api", require("./routes"));

// This mounts the router (from ./routes/index.js) on the app.
// index.js is loaded by default, so we don't need to give the full path.
// Also, index.js exports the router, so it is automatically imported without
// specifying.

// See https://expressjs.com/en/guide/using-middleware.html to learn more about
// middleware functions.

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
