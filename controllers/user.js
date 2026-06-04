const express = require("express");
const User = require("../models/user");
const {cloudinary,upload} = require("../cloudConfig")
const fs = require("fs");


async function handleGetUserSignUp(req,res){
    return res.render("signup");
}

async function handleGetUserSignUpVenue(req,res){
    return res.render("venue_signup");
}

async function handlePostUserSignUp(req,res){
    console.log("Body: ",req.body);
    const {fullname,username,password,age,gender,role,city} = req.body;
    const entry = await User.findOne({username});
    if(entry){
        return res.render("signup", {
            error: "Username already exists"
        })
    }
    if(role === "venue-owner"){
        const {venue_name, venue_address} = req.body;
        const user = await User.create({
            fullname,
            username,
            password,
            age,
            gender,
            role,
            city,
            venue_name,
            venue_address,
        });
    }
    else if(role === "participant"){
        const user = await User.create({
            fullname,
            username,
            password,
            age,
            gender,
            role,
            city
        });
    }
    else{
        return res.json({error: "Role is not defined"})
    }
    return res.redirect("/user/login");
}

async function handleGetUserLogin(req,res){
    return res.render("login");
}

async function handlePostUserLogin(req,res){
    console.log("Login Body: ", req.body);
    const {username,password} = req.body;
    const token = await User.matchPassword(username,password)
     if(!token){
        return res.render("login", {
            error: "Invalid username or password"
        });
    }
    else{
    res.cookie("uid", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
    });
    return res.redirect("/about");
    }
}

async function handleGetUserLogout(req,res){
    res.clearCookie("uid", {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
    });
    return res.redirect("/user/login");
}

module.exports = {
    handleGetUserSignUp,
    handlePostUserSignUp,
    handleGetUserLogin,
    handlePostUserLogin,
    handleGetUserLogout,
    handleGetUserSignUpVenue
}