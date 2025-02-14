const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: [true, "Please enter the name"],
    type: String,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide valid email"],
  },
  password: {
    required: true,
    type: String,
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  photo: String,
});
const User = new mongoose.model("User", userSchema);
module.exports = User;
