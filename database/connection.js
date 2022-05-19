const { Pool } = require("pg");

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL env var");
}
//console.log('initiate')

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});

//console.log(db)
module.exports = db;
