const DB = require("./db");

async function getAll() {
  return await DB.get("SELECT * FROM product");
}

async function get(id) {
  return await DB.get(`SELECT * FROM product WHERE id = ${id}`);
}

module.exports = {
  getAll,
  get
};