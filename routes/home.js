function get(request, response) {
  const form = `
    <form method="POST">
      <label for="username">Username:</label>
      <input id="username" name="username" type="text" />
      <label for="age">Age:</label>
      <input id="age" name="age" type="number" />
      <label for="base_flavour">Ice cream flavour:</label>
      <input id="base_flavour" name="base_flavour" type="text" />
      <label for="topping">Topping:</label>
      <select id="topping" name="topping">
        <option value="sprinkles">Sprinkles</option>
        <option value="flake">Chocolate flake</option>
        <option value="rasp_syrup">Raspberry syrup</option>
        <option value="choc_syrup">Chocolate syrup</option>
      </select>
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

// exporting for server.js
module.exports = { get };
