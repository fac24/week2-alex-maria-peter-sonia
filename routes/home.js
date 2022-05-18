const db = require('../database/connection.js')

function get(request, response) {
  const form = `
    <form method="POST" action="/add-posts">
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

function post((req, res) => {

})

// exporting for server.js
module.exports = { get };
