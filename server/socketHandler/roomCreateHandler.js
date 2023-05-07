const serverStore = require("../serverStore");
const roomsUpdate = require("./updates/rooms");

const roomCreateHandler = (socket) => {
  console.log("handling creating room event");
  const socketId = socket.id;
  const userId = socket.user.userId;
  const roomDetails = serverStore.addNewActiveRoom(userId, socketId);
  socket.emit("room-create", {
    roomDetails,
  });
  roomsUpdate.updateRooms();
};

module.exports = roomCreateHandler;
