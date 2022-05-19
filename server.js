const express = require("express");
const home = require("./routes/home.js");
const showPosts = require("./routes/showPosts.js");

const server = express();

server.get("/", home.get);
server.get("/show-posts", showPosts.get);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
