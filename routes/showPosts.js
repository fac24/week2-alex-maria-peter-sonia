const db = require("../database/connection.js");

function get(request, response) {
  db.query(
    `SELECT users.username, users.age, users.fandom, ice_cream_posts.base_flavour, ice_cream_posts.comment 
    FROM users
    INNER JOIN ice_cream_posts
    ON users.id = ice_cream_posts.user_id`
  ).then((result) => {
    let postsHTML = "";
    const posts = result.rows;
    posts.map(
      (post) =>
        (postsHTML += `
        <div class="post-container">
        <p>User: ${post.username}  <span>${post.fandom}⭐</span></p>
        <p>Loves: ${post.base_flavour}</p>
        <p>Comment: ${post.comment}</p>
        </div>
        `)
    );
    response.send(`${postsHTML}`);
  });
}

module.exports = { get };
