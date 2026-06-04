const express = require("express");
const bookingRouter = express.Router();
const {
    handleGetBooking,
    handlePostBooking
} = require("../controllers/booking")


bookingRouter.get("/", handleGetBooking)
bookingRouter.post("/", handlePostBooking);

module.exports = bookingRouter;