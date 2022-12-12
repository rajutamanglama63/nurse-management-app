const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const config = require("../utils/config");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res, next) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ msg: "All fields are required!" });
    }

    if (password.length <= 3) {
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
      fullname,
      email,
      password: hashedPassword,
    });

    newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/signin", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "All fields are require!" });
    }

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ msg: "User does not exist!" });
    }

    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const userForToken = {
      fullname: userExist.fullname,
      id: userExist._id,
    };

    const token = jwt.sign(userForToken, config.SECRET, { expiresIn: 60 * 60 });

    res.status(200).json({
      token,
      id: userExist.id,
      fullname: userExist.fullname,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
