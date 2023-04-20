const connectedUser = new Map();

const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUser.set(socketId, { userId });
  console.log({"new connecteduser": connectedUser});
};

module.exports = {
    addNewConnectedUser
}