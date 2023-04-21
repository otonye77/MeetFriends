const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const socketServer = require("./socketserver");

const authRoutes = require("./routes/authRoute");
const friendInvitationRoutes = require("./routes/friendInvitationRoute")

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/friend-invitation", friendInvitationRoutes)

const server = http.createServer(app);
socketServer.registerSocketServer(server)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed.");
    console.log(err);
  });
