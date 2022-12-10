const express = require("express");

const { connectDB } = require("./utils/config");
const middleware = require("./utils/middleware");
const userRouter = require("./controllers/user");
const nurseRouter = require("./controllers/nurse");

const app = express();

connectDB();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello there!!!");
// });

app.use(middleware.userExtractor);

app.use("/api/user", userRouter);
app.use("/api/nurses", nurseRouter);

app.use(middleware.unKnownEndPoint);

app.use(middleware.errorHandler);

module.exports = app;
