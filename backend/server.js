require("dotenv").config();
PORT = process.env.PORT || 3000;
const connectToDB = require("./src/db/db");
const initSocketServer = require("./src/socket/socket.server");
const app = require("./src/app");
const httpServer = require("http").createServer(app);

connectToDB();
initSocketServer(httpServer);

httpServer.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});
