const friendsInvitation = require("../../models/friendsInvitation");
const friendUpdates = require("../../socketHandler/updates/friends");

const postReject = async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req.user;
    const invitationExists = await friendsInvitation.exists({ _id: id });
    if (invitationExists) {
      await friendsInvitation.findByIdAndDelete(id);
    }
    friendUpdates.updateFriendsPendingInvitation(userId);
    return res.status(201).send("Invitation successfully rejected");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
};

module.exports = {
  postReject,
};
