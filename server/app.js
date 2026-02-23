/*
This is the entry point of our application.
To host the website, run this file.
*/

// Importing modules:

const express = require("express");
const path = require("path");

// You can import modules either by require (CommonJS) or import (ES6).
// ES6 modules are the modern approach. However, here we use CommonJS.
// CommonJS modules are loaded synchronusly, while ES6 modules are loaded
// asynchronously.

const app = express();
const PORT = 3000;

// By convension, constants are named using the SCREAMING_SNAKE_CASE.

// Middleware:

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// The above middleware functions has no mount path, meaning they will execute
// every time the app recieves a request.
// However, the below middleware has a mount path.

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
