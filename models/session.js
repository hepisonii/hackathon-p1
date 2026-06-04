const {Schema, model} = require("mongoose");

const sessionSchema = new Schema({
    manager: {
        type: Schema.Types.objectId,
        ref: "user",
    },
    players: {
        type: Number,
        default: 0,
    },
    startTime: {
        type: Date,
    },
    endTime: {
        type: Date,
    },
    sport: {
        type: String,
        required: true,
    },
    venue_name: {
        type: String,
        required: true,
    },
    venue_address: {
        type: String,
    },
}, {timestamps: true});

const Session = model("session", sessionSchema);

module.exports = Session;