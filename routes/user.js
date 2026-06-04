const express = require("express");
const userRouter = express.Router();
const {upload} = require("../cloudConfig")
const {
    handleGetUserSignUp,
    handlePostUserSignUp,
    handleGetUserLogin,
    handlePostUserLogin,
    handleGetUserLogout,
    handleGetUserSignUpVenue
} = require("../controllers/user");
const { limiter } = require("../middlewares/auth");

userRouter.get("/signup/participant",handleGetUserSignUp);
userRouter.get("/signup/venue-owner",handleGetUserSignUpVenue);
userRouter.post("/signup",upload.single("photo"), handlePostUserSignUp);
userRouter.get("/login", handleGetUserLogin);
userRouter.post("/login",limiter, handlePostUserLogin);
userRouter.get("/logout", handleGetUserLogout);

module.exports = userRouter;