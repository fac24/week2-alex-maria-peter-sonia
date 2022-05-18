const db = require("../database/connection.js");

function get(request, response) {
    db.query(`SELECT users.username, users.age, ice_cream_posts.base_flavour 
    FROM users
    INNER JOIN ice_cream_posts
    ON users.id = ice_cream_posts.user_id`).then((result) => {
        const posts = result.rows;
        console.log(posts);
        const postList = posts.map((post) => `<li>${post.username} likes ${post.base_flavour}</li>`).join("");
        response.send(`<ul>${postList}</ul>`);
    });
}

module.exports = {get};