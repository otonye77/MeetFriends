const authSocket = require("./middleware/authSocket");
const newConnectionHandler = require("./socketHandler/newConnectionHandler");
//imported in the server.js
const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.use((socket, next) => {
    authSocket(socket, next);
  });

  io.on("connection", (socket) => {
    console.log("user connected");
    console.log(socket.id);
    newConnectionHandler(socket, io);

    socket.on("disconnect", () => {
      disconnectHandler(socket)
    })

  });
};

module.exports = {
  registerSocketServer,
};
