const express = require("express");
const path = require("path");

async function handleGetBooking(req,res){
    return res.sendFile(path.resolve(__dirname, "../views/book_venue.html"));
}

async function handlePostBooking(req,res){
    return res.sendFile(path.resolve(__dirname, "../views/book_venue.html"));
}

module.exports = {
    handleGetBooking,
    handlePostBooking
}