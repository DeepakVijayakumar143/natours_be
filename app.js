const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.status(201).json({
    result: "success",
  });
});

module.exports = app;
