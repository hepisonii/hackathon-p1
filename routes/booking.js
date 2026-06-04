const express = require("express");
const bookingRouter = express.Router();
const {
    handleGetBooking,
    handlePostBooking,
    handleGetVenue
} = require("../controllers/booking")


bookingRouter.get("/", handleGetBooking);
bookingRouter.post("/api", handlePostBooking);
bookingRouter.get("/venue", handleGetVenue);
module.exports = bookingRouter;