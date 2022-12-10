const express = require("express");
const { connectDB } = require("./utils/config");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("hello");
});

module.exports = app;
