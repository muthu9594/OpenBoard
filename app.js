const express = require("express");
const socket = require("socket.io");
const app = express();

app.use(express.static("public"));
let server = app.listen(5000, () => console.log("Server started"));

let io = socket(server);

io.on("connection", (socket) => {
  console.log("Made socket connection");

  //received data
  socket.on("beginPath", (data) => {
    //data from frontend
    //now transfer data to all connected computers
    io.sockets.emit("beginPath", data);
  });

  socket.on("drawStroke", (data) => {
    io.sockets.emit("drawStroke", data);
  });

  socket.on("redoUndo", (data) => {
    io.sockets.emit("redoUndo", data);
  });
});
