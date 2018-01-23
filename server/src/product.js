const DB = require("./db");

async function getAll() {
  return await DB.get("SELECT * FROM product");
}

async function get(id) {
  const query = {
    text: "SELECT * FROM product WHERE id = $1",
    values: [id]
  };
  const products = await DB.get(query);
  return products[0];
}

module.exports = {
  getAll,
  get
};