const express = require("express");
const home = require("./routes/home.js");
const showPosts = require("./routes/showPosts.js");

const server = express();

const staticHandler = express.static("public");

server.use(staticHandler);

const bodyHandler = express.urlencoded({ extended: false });

server.use(bodyHandler);

server.get("/", home.get);
server.get("/show-posts", showPosts.get);
server.post("/show-posts", bodyHandler, home.post);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
