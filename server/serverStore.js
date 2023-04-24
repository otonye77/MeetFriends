const connectedUser = new Map();

let io = null;

const setSocketServerInstance = (ioInstance) => {
  io = ioInstance;
};

const getSocketServerInstance = () => {
  return io;
};

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
  connectedUser.forEach((value, key) => {
    if (value.userId === userId) {
      activeConnections.push(key);
    }
  });
  return activeConnections;
};

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
  getActiveConnections,
  getSocketServerInstance,
  setSocketServerInstance,
};
