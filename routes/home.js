const db = require("../database/connection.js");

function get(request, response) {
  const form = `
    <form method="POST" action="/show-posts">
      <label for="username">Username:</label>
      <input id="username" name="username" type="text" required />
        <br />
      <label for="age">Age:</label>
      <input id="age" name="age" type="number" />
        <br />
      <label for="base_flavour">Ice cream flavour:</label>
      <input id="base_flavour" name="base_flavour" type="text" />
        <br />
      <label for="fandom">Fandom rating:</label>
      <input type="range" id="fandom" name="fandom" min="1" max="5" value="1">
        <br />
      <label for="topping">Toppings:</label>
      <select id="topping" name="topping">
        <option value="sprinkles">Sprinkles</option>
        <option value="flake">Chocolate flake</option>
        <option value="rasp_syrup">Raspberry syrup</option>
        <option value="choc_syrup">Chocolate syrup</option>
        <option value="hot_fudge">Hot fudge</option>
        <option value="marshmellow">Melted marshmellow</option>
        <option value="none">None</option>
      </select>
        <br />
      <label for="comment">Comment:</label>
      <textarea id="comment" name="comment"></textarea>
        <br />
      <button type="submit" class="btn">Submit</button>
    </form>
  `;

  const html = `<!DOCTYPE html>
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
        <section class="ice-cream-container">
        <div class="yum-yum-ice-cream"></div>
          <div class="lolly-stick"></div>
          <div class="bubblegum"></div>
      </section>
  ${form}
  </body>
</html>
`;

  response.send(html);
}

// function post(req, res) {
//   console.log(req.body);
//   return null;
// }

//INSERT INTO ice_cream_posts(base_flavour, topping, comment) VALUES(LAST_INSERT_ID(), $5, $6);

function post(request, response) {
  // const insert_user = /*sql*/ `
  //     INSERT INTO users(username, age, fandom) VALUES($1, $2, $3);
  //   `;
  const values = [
    request.body.username,
    request.body.age,
    request.body.fandom,
    // request.body.base_flavour,
    // request.body.topping,
    // request.body.comment
  ];

  db.query(
    `INSERT INTO users(username, age, fandom) VALUES($1, $2, $3) RETURNING id`,
    [request.body.username, request.body.age, request.body.fandom]
  ).then((newUser) => {
    // console.log(newUser) will return everything that has changed in the database, returns an array of all the elems
    const id = newUser.rows[0].id;
    return db
      .query(
        `INSERT INTO ice_cream_posts(user_id, base_flavour, topping, comment) VALUES($1, $2, $3, $4)`,
        [
          id,
          request.body.base_flavour,
          request.body.topping,
          request.body.comment,
        ]
      )
      .then(() => {
        response.redirect("/show-posts");
      })
      .catch((err) => {
        console.log(err);
        response.status(500).send("<h1>Oops, something went wrong.</h1>");
      });
  });
}

// exporting for server.js
module.exports = { get, post };
