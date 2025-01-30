const express = require('express');
const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app);

// const { Server } = require("socket.io");

// const io = new Server(server);

app.use(express.static(path.join(__dirname, "client")));

app.get("/healthcheck", (req, res) => {
  res.send("App running...");
});

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

const port = 5000;
server.listen(port, () => {
  console.log(`listening on *:${port}`);
});