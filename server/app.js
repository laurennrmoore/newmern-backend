// modules
const express = require("express");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");

// configuration
const keys = require("./config/keys");

// models
require("./models/Todo"); // Example Model

// mongoDB connection
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// instance of express
const app = express();

// configure express
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(logger("dev"));

// routes
require("./routes/todos")(app); // example

// statically serve SPA (in production)
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

module.exports = app;
