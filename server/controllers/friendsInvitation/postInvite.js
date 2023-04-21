const User = require("../../models/user");

const postInvite = async (req, res) => {
  const { targetMailAddress } = req.body;
  const { userId, mail } = req.user;

  if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
    return res.status(409).send("Sorry, you cannot add yourself.");
  }

  const targetUser = await User.findOne({
    mail: targetMailAddress.toLowerCase(),
  });

  if (!targetUser) {
    return res
      .status(404)
      .send(`Friend of ${targetMailAddress} cannot be found`);
  }

  const invitationAlreadyReceived = await Invitation.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  });

  if (invitationAlreadyReceived) {
    return res.status(409).send("Invitation already sent");
  }

  const usersAlreadyFriends = targetUser.friends.find(
    (friendId) => friendId.toString() === userId.toString()
  );

  if (usersAlreadyFriends) {
    return res.status(409).send("You are already friends with this user");
  }
};

module.exports = {
  postInvite,
};
