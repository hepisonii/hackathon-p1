const express = require("express");
const app = express();
const PORT = process.env.PORT;

const {connectMongoDB} = require("./connections/connect");
const Path = require("path");
const cookieParser = require("cookie-parser");
const {checkAuth} = require("./middlewares/auth");
const userRouter = require("./routes/user")
connectMongoDB(process.env.MONGODB_URL);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkAuth());

app.set("view engine","ejs")
app.set("views", Path.resolve("./views"));

app.use("/user", userRouter);
ap.get("/", async () => {
    const user = req.user;
    if(!user) return res.redirect("/user/login");
    return res.send("Hello World");
})

app.listen(PORT, () => {
    console.log("Server Started");
});