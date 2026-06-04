const express = require("express");
const path = require("path");
const User = require("../models/user");
async function handleGetBooking(req,res){
    return res.sendFile(path.resolve(__dirname, "../views/book_venue.html"));
}

async function handlePostBooking(req,res){
    const sport = req.body;
    const city = req.user.city;
    const venues = await User.find(
  {
    role: "venue-owner",
    sports: { $in: sport },
    city
  },
  {
    venue_name: 1,
    venue_address: 1,
    fullname: 1,
    _id: 1
  }
);
    console.log("Venues", venues);
    return res.json({
        venues
    });
}

module.exports = {
    handleGetBooking,
    handlePostBooking
}