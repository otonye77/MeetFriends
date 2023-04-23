const User = require("../../models/user");
const FriendInvitation = require("../../models/friendsInvitation");
const serverStore = require("../../serverStore");

const updateFriendsPendingInvitation = async (userId) => {
  try {
    const pendingInvitations = await FriendInvitation.find({
      receiverId: userId,
    }).populate("senderId", "_id username mail");
  } catch (err) {
    console.log(err);
  }
};
