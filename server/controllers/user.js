const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ msg: "All fields are required!" });
    }

    if (password.length < 3) {
      return res
        .status(400)
        .json({ msg: "Password must be at least 4 character long." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
