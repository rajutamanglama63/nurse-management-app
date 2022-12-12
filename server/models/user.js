const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: "String",
  },
  email: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
});

userSchema.set("toJSON", {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;

    delete returnObject.password;
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
