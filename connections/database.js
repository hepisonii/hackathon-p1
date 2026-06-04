const mongoose = require("mongoose");

function connectMongoDB(url){
    mongoose.connect(url)
    .then(() => {
        console.log("MongoDB connected")
    })
    .catch((err) => {
        console.log("Error: ",err);
    })
}

module.exports = {
    connectMongoDB
}