const {Schema, model} = require("mongoose");

const sessionSchema = new Schema({
    manager: {
        type: Schema.Types.objectId,
        ref: "user",
    },
    players: {
        type: Schema.Types.ObjectId,
        ref: "player"
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
    is_locked: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

const Session = model("session", sessionSchema);

module.exports = Session;