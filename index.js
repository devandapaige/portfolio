const path = require("path");
const express = require("express");
const server = require("./build/api/server");
const port = process.env.PORT;

server.use(express.static(path.join(__dirname, "client/dist")));
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});
server.listen(port, () => {
  console.log(`listening on server: http://localhost:${port}`);
});
