const friendsInvitation = require("../../models/friendsInvitation");
const User = require("../../models/user");
const friendUpdates = require("../../socketHandler/updates/friends");

const postAccept = async (req, res) => {
  try {
    const { id } = req.body;
    const invitation = await friendsInvitation.findById(id);
    if (!invitation) {
      return res.status(401).send("Error occured. Please try again later");
    }
    const { senderId, receiverId } = invitation;

    const senderUser = await User.findById(senderId);
    senderUser.friends = [...senderUser.friends, receiverId];

    const receiverUser = await User.findById(receiverId);
    receiverUser.friends = [...receiverUser.friends, senderId];

    await senderUser.save();
    await receiverUser.save();

    await friendsInvitation.findByIdAndDelete(id);

    friendUpdates.updateFriends(senderId.toString());
    friendUpdates.updateFriends(receiverId.toString());
    friendUpdates.updateFriendsPendingInvitation(receiverId.toString());

    return res.status(200).send("Friend successfully added");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong. Please try again");
  }
};

module.exports = {
  postAccept,
};
