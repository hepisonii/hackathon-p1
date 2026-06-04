const {Schema, model} = require("mongoose")

const playerSchema = new Schema({
    sessionID: {
        type: Schema.Types.ObjectId,
        ref: "session",
    },
    playerID: {
        type:Schema.Types.ObjectId,
        ref: "user"
    },
}, {timestamps: true});

const Player = model("player", playerSchema);

module.exports = Player;