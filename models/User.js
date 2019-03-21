const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const UserSchema = new Schema ({
    username:{
        type: String,
        required: "username is required"
    },
    kudos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Kudos"
        }
    ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;