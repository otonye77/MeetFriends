const connectedUser = new Map();

const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUser.set(socketId, { userId });
  console.log({ "new connecteduser": connectedUser });
};

const removeConnectedUser = (socketId) => {
  if (connectedUser.has(socketId)) {
    connectedUser.delete(socketId);
    console.log({ "disconneted user": connectedUser });
  }
};

const getActiveConnections = (userId) => {
  const activeConnections = [];
  connectedUser.forEach((key, value) => {
    if(value.userId === userId){
      activeConnections.push(key)
    }
  })
  return activeConnections
};

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
};
