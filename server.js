const express = require("express");
const home = require("./routes/home.js");
const addPost = require("./routes/addPost.js");

const server = express();

server.get("/", home.get);
server.get("/add-post", addPost.get);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
