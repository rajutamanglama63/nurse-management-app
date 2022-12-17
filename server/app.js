const express = require("express");
const fileUpload = require("express-fileupload");

const { connectDB } = require("./utils/config");
const middleware = require("./utils/middleware");
const userRouter = require("./controllers/user");
const nurseRouter = require("./controllers/nurse");

const app = express();

connectDB();

app.use(express.json({ limit: "50mb" }));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// app.get("/", (req, res) => {
//   res.send("Hello there!!!");
// });

app.use(middleware.userExtractor);

app.use("/api/user", userRouter);
app.use("/api/nurse", nurseRouter);

app.use(middleware.unKnownEndPoint);

app.use(middleware.errorHandler);

module.exports = app;
