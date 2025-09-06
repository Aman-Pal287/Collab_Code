const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

function initSocketServer(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      allowedHeaders: ["Authorization", "Content-Type"],
      credentials: true,
    },
  });

  /* Socket.io middleware*/
  io.use(async (socket, next) => {
    const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

    if (!cookies.token) {
      next(new Error("Authentication error: No token provided"));
    }

    try {
      const decoded = jwt.verify(cookies.token, process.env.JWT_SECRET);

      const user = await userModel
        .findOne({ _id: decoded.id })
        .select(`-password`);

      socket.user = user;

      next();
    } catch (error) {
      next(new Error("Authentication error: No token provided"));
    }
  });

  io.on("connection", (socket) => {
    console.log("user connected");

    socket.on("ai-message", async (messagePayload) => {
      socket.emit("ai-response", {
        content: response,
        chat: messagePayload.chat,
      });
    });
  });
}

module.exports = initSocketServer;
