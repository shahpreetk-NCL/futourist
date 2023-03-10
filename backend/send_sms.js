var express = require("express");
var router = express.Router();
require("dotenv").config();
const accountSid =
  process.env.TWILIO_ACCOUNT_SID;
const authToken =
  process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require("twilio")(accountSid, authToken);

router.post("/", (req, res) => {
  console.log(req.body);
  client.messages
    .create({
      body: `Thank you for booking with Futourist. Here are your booking details - Name: ${req.body.name}, Departure Date: ${req.body.date}, Time of Departure: ${req.body.time}hrs, Number of travellers: ${req.body.noOfPeople}, From: ${req.body.fromPlanet}, To: ${req.body.toPlanet}. Total Amount Paid: ${req.body.price} crypto coins. Hope you have a safe journey!`,
      from: twilioPhoneNumber,
      to: req.body.phoneNumber,
    })
    .then((message) => console.log(message.sid)).done();
  res.sendStatus(200);
});

module.exports = router;