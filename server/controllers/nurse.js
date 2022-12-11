const express = require("express");
const jwt = require("jsonwebtoken");

const Nurse = require("../models/nurse");
const User = require("../models/user");
const config = require("../utils/config");

const nurseRouter = express.Router();

nurseRouter.post("/", async (req, res, next) => {
  try {
    const {
      fullname,
      email,
      contact,
      address,
      gender,
      workingDays,
      dutyStartTime,
      dutyEndTime,
    } = req.body;

    const decodedUser = userDecodedFromToken(req.user);

    if (!decodedUser.id) {
      return res.status(401).json({ error: "token missing or invalid" });
    }

    const user = await User.findById(decodedUser.id);

    if (!user) {
      res.status(401).json({ error: "token missing or invalid" });
    }

    const newNurse = new Nurse({
      fullname,
      email,
      contact,
      address,
      gender,
      workingDays,
      dutyStartTime,
      dutyEndTime,
      registeredBy: user.username,
    });

    await newNurse.save();

    res.status(201).json(newNurse);
  } catch (error) {
    next(error);
  }
});

nurseRouter.get("/", async (req, res, next) => {
  try {
    const nurses = await Nurse.find({});

    res.status(200).json(nurses);
  } catch (error) {
    next(error);
  }
});

nurseRouter.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const nurseToBeRemoved = await Nurse.findById(id);

    const decodedUser = userDecodedFromToken(req.user);

    if (!decodedUser.id) {
      return res.status(401).json({ error: "token missing or invalid" });
    }

    nurseToBeRemoved.remove();
    res.status(200).json({ msg: "Removed successfully.", nurseToBeRemoved });
  } catch (error) {
    next(error);
  }
});

const userDecodedFromToken = (user) => {
  const decodedUser = jwt.verify(user, config.SECRET);

  return decodedUser;
};

module.exports = nurseRouter;
