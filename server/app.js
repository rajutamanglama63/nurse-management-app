const express = require("express");
const userRouter = require("./controllers/user");

const { connectDB } = require("./utils/config");
const middleware = require("./utils/middleware");

const app = express();

connectDB();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello there!!!");
// });

app.use("/api/users", userRouter);

app.use(middleware.unKnownEndPoint);

app.use(middleware.errorHandler);

module.exports = app;
