const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to FuTourist" });
});

// Routes
app.use("/api/sendMessage", require("./send_sms"));


module.exports = app;
