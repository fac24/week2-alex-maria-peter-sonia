const db = require("../database/connection.js");


function get(request, response) {
    db.query(`SELECT users.username, users.age, ice_cream_posts.base_flavour, ice_cream_posts.comment 
    FROM users
    INNER JOIN ice_cream_posts
    ON users.id = ice_cream_posts.user_id`).then((result) => {
        const posts = result.rows;
        const postList = posts.map((post) => 
        `<li class="user-post">${post.username}, ${post.age}!      
        </li>`).join("");
        response.send(`<ul>${postList}</ul>`);
    })
    .catch(error => {console.error(error.status); <h1>Problem loading page</h1>});
}

module.exports = {get};

// likes ${post.base_flavour} ice cream.
//         ${post.username} said: ${post.comment}
