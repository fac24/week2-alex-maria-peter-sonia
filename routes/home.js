const db = require("../database/connection.js").default;

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
    <link rel="stylesheet" href="style.css" />
    <title>iScream</title>
  </head>
  <body>
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

function post(request, response) {
  const insert_user = /*sql*/ `
      INSERT INTO users(username, age, base_flavour, fandom) VALUES($1, $2, $3, $4)
    `;
  const values = [
    request.body.username,
    request.body.age,
    request.body.base_flavour,
    request.body.fandom,
  ];

  db.query(insert_user, values).then(() => {
    response.redirect("/");
  });
}

// exporting for server.js
module.exports = { get, post };
