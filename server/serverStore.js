const connectedUser = new Map();

const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUser.set(socketId, { userId });
  console.log({ "new connecteduser": connectedUser });
};

const removeConnectedUser = (socketId) => {
  if (connectedUser.has(socketId)) {
    connectedUser.delete(socketId);
    console.log({"new connected user": connectedUser})
  }
};

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
};
