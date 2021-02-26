const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Someone connected!");

  socket.on("onMsgFromClient", (msg) => {
    io.emit("onMsgFromServer", msg); //custom event
  });
});

server.listen(3000, () => console.log("Server Started!"));
