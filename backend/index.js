const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connnected"))
  .catch((err) => console.log(err));

app.use("/", (req, res) => {
  res.send("this main");
});

app.listen("5000", () => {
  console.log("connected to port");
});
