const logger = require("../utils/logger");

const unKnownEndPoint = (req, res, next) => {
  res.status(404).json({ err: "Unknown endpoint." });
};

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);

  if (err.name === "CastError") {
    res.status(400).send({ err: "malformatted id" });
  } else if (err.name === "ValidationError") {
    res.status(400).send({ err: err.message });
  } else if (err.name === "JsonWebTokenError") {
    res.status(401).send({ err: err.message });
  } else if (err.name === "TokenExpiredError") {
    res.status(401).send({ err: err.message });
  }

  next(err);
};

module.exports = {
  unKnownEndPoint,
  errorHandler,
};
