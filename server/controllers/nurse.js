const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
const sharp = require("sharp");

const Nurse = require("../models/nurse");
const User = require("../models/user");
const config = require("../utils/config");

dotenv.config();

const nurseRouter = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// nurseRouter.post("/photo/upload", async (req, res, next) => {
//   try {
//     console.log(req.files);
//     if (!req.files || Object.keys(req.files).length === 0) {
//       return res.status(400).json({ msg: "No files were uploaded." });
//     }

//     const file = req.files.file;

//     // 1024*1024*1 = 1mb, 1024*1024*3 = 3mb

//     if (file.size > 1024 * 1024 * 3) {
//       removeTem(file.tempFilePath);
//       return res.status(400).json({ msg: "File size is too large." });
//     }

//     if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
//       removeTem(file.tempFilePath);
//       return res.status(400).json({ msg: "Invalid file format." });
//     }

//     cloudinary.v2.uploader.upload(
//       file.tempFilePath,
//       { folder: "nurse" },
//       (err, result) => {
//         if (err) throw err;
//         removeTem(file.tempFilePath);
//         res
//           .status(200)
//           .json({ publicId: result.public_id, url: result.secure_url });
//       }
//     );
//   } catch (error) {
//     next(error);
//     res.status(500).json({ msg: error.message });
//   }
// });

// const removeTem = (path) => {
//   fs.unlink(path, (err) => {
//     if (err) throw err;
//   });
// };

nurseRouter.post("/", async (req, res, next) => {
  try {
    const {
      fullname,
      email,
      contact,
      address,
      gender,
      photo,
      workingDays,
      dutyStartTime,
      dutyEndTime,
      role,
    } = req.body;

    const decodedUser = userDecodedFromToken(req.user);

    if (!decodedUser.id) {
      return res.status(401).json({ msg: "token missing or invalid" });
    }

    const user = await User.findById(decodedUser.id);

    if (!user) {
      res.status(401).json({ msg: "token missing or invalid" });
    }

    // let img = sharp(photo).resize(200, 200);

    const myCloud = await cloudinary.v2.uploader.upload(
      photo,
      {
        folder: "nurse",
      },
      (err, result) => {
        if (err) throw err;
        return result.secure_url;
      }
    );

    // console.log(myCloud);

    const newNurse = new Nurse({
      fullname,
      email,
      contact,
      address,
      gender,
      photo: myCloud.secure_url,
      workingDays,
      dutyStartTime,
      dutyEndTime,
      role,
      registeredBy: user.fullname,
    });

    await newNurse.save();

    res.status(201).json({ newNurse });
  } catch (error) {
    next(error);
  }
});

nurseRouter.get("/", async (req, res, next) => {
  try {
    let nurses = await Nurse.find({}).sort({ fullname: 1 });

    nurses.forEach(function (nurse, index) {
      if (nurse.role === "Rounding manager") {
        nurses.splice(index, 1);
        nurses.unshift(nurse);
      }
    });

    res.status(200).json(nurses);
  } catch (error) {
    next(error);
  }
});

nurseRouter.get("/:nurse_id", async (req, res, next) => {
  try {
    const nurse = await Nurse.findById(req.params.nurse_id);

    res.status(200).json(nurse);
  } catch (error) {
    next(error);
  }
});

nurseRouter.delete("/:nurse_id", async (req, res, next) => {
  try {
    const id = req.params.nurse_id;
    const nurseToBeRemoved = await Nurse.findById(id);

    const decodedUser = userDecodedFromToken(req.user);

    if (!decodedUser.id) {
      return res.status(401).json({ msg: "token missing or invalid" });
    }

    nurseToBeRemoved.remove();
    res.status(200).json({ msg: "Removed successfully." });
  } catch (error) {
    next(error);
  }
});

nurseRouter.put("/:nurse_id", async (req, res, next) => {
  try {
    const id = req.params.nurse_id;

    const {
      fullname,
      email,
      contact,
      address,
      gender,
      photo,
      workingDays,
      dutyStartTime,
      dutyEndTime,
      role,
    } = req.body;

    const decodedUser = userDecodedFromToken(req.user);

    if (!decodedUser.id) {
      return res.status(401).json({ msg: "token missing or invalid" });
    }

    const nurseWithUpdatedData = {
      fullname,
      email,
      contact,
      address,
      gender,
      photo,
      workingDays,
      dutyStartTime,
      dutyEndTime,
      role,
    };

    await Nurse.findByIdAndUpdate(id, nurseWithUpdatedData, { new: true });

    res.status(200).json({ msg: "Updated successfully." });
  } catch (error) {
    next(error);
  }
});

const userDecodedFromToken = (user) => {
  const decodedUser = jwt.verify(user, config.SECRET);

  return decodedUser;
};

module.exports = nurseRouter;
