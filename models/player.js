const {Schema, model} = require("mongoose")

const playerSchema = new Schema({
    
}, {timestamps: true});

const Player = model("player", playerSchema);

module.exports = Player;