const {Schema, model} = require("mongoose");

const sessionSchema = new Schema({
    manager: {
        type: Schema.Types.objectId,
        ref: "user",
    },
    players: [{
        type: Schema.Types.objectId,
        ref: "user",
    }],
    timing: {
        type: TimeRanges,
        required: true,
    },

}, {timestamps: true});