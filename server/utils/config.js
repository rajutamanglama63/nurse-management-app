const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 4000;

module.exports = {
  PORT,
};
