const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KudosSchema = new Schema ({
    title: {
        type: String
    },
    body: {
        type: String
    },
    timePosted: {
        type: Date,
        default: Date.now
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Kudos = mongoose.model("Kudos", KudosSchema);

module.exports = Kudos;