const User = require("./../model/userModel");

exports.signup = async (req, res, next) => {
  await User.create(req.body);
  res.status(201).json({
    status: "success",
  });
};
