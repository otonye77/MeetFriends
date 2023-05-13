const serverStore = require("../serverStore");
const roomsUpdate = require("./updates/rooms");

const roomLeaveHandler = (socket, data) => {
  const { roomId } = data;
  const activeRoom = serverStore.getActiveRooms();
  if (activeRoom) {
    serverStore.leaveActiveRoom(roomId, socket.id);
    roomsUpdate.updateRooms();
  }
};

module.exports = roomLeaveHandler;
