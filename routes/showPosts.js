const db = require("../database/connection.js");

//function to generate fandom rating
const fandom = (num) => {
  let fandomRating = "";
  for (let i = 0; i < num; i++) {
    fandomRating += "🍧";
  }
  return fandomRating;
};

function get(request, response) {
  db.query(
    `SELECT users.username, users.age, users.fandom, ice_cream_posts.base_flavour, ice_cream_posts.comment 
    FROM users
    INNER JOIN ice_cream_posts
    ON users.id = ice_cream_posts.user_id`
  )
    .then((result) => {
      let postsHTML = "";
      const posts = result.rows;
      posts.map(
        (post) =>
          (postsHTML = `
        <div class="post-container">
        <p>User: ${post.username}  <span>${fandom(post.fandom)}</p>
        <p>Loves: ${post.base_flavour}</p>
        <p>Comment: ${post.comment}</p>
        </div>
        `.concat(postsHTML))
      );
      return postsHTML;
    })
    .then((postsHTML) => {
      response.send(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>iScream</title>
  </head>
  <body>
    <h1>I-Scream</h1>
    <a href="/">Click here to add a post!</a>

    ${postsHTML}
  </body>
</html>
`);
    })
    //catch at end of chain to catch all!
    .catch((error) => {
      console.error(error);
      response.status(500).send("<h1>Problem loading page.</h1>");
    });
}

module.exports = { get };
