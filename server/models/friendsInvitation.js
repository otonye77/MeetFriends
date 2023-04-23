const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendsInvitationSchema  = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

module.exports = FriendsInvitation = mongoose.model("FriendsInvitation", friendsInvitationSchema)