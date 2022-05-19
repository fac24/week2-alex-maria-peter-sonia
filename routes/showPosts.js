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
        <p>User: ${post.username}  <span>⭐${post.fandom}</span></p>
        <p>Loves: ${post.base_flavour}</p>
        <p>Comment: ${post.comment}</p>
        </div>
        `)
    );
    response.send(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>iScream</title>
  </head>
  <body>
    ${postsHTML}
  </body>
</html>
`)
  })
      .catch((error) => {
        console.error(error); 
        response.status(500).send("<h1>Problem loading page.</h1>");
    });
}

module.exports = { get };
