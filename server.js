const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authController = require("./controller/authController");
const express = require("express");
const router = express.Router();
router.post("/signup", authController.signup);
dotenv.config({ path: "./.env" });
const DB = process.env.DATABASE_CONNECTION_STRING.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
// mongoose.connect(DB,);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => console.log(err.message));
