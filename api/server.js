const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/", async (req, res, next) => {
  try {
    res.status(200).json({
      message: "Welcome to the backend. Things seem to be working.",
    });
  } catch (err) {
    next(err);
  }
});
server.use((err, req, res, next) => {
  console.log(`500 error: ${err}`);
  res.status(500).json({
    message: "Something went wrong with the server.",
  });
});

module.exports = server;
