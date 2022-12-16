const mongoose = require("mongoose");

const nurseSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  workingDays: [],
  dutyStartTime: {
    type: String,
    required: true,
  },
  dutyEndTime: {
    type: String,
    required: true,
  },
  isRoundingManager: {
    type: Boolean,
    default: false,
  },
  registeredBy: {
    type: String,
  },
});

nurseSchema.set("toJSON", {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
  },
});

const Nurse = mongoose.model("nurse", nurseSchema);

module.exports = Nurse;
