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

async function postCart (id , userid, status ) {
  const query = {
    text : "INSERT INTO CART (id, productid, status) VALUES ($1, $2, $3)",
    values: [userid, id, status]
  }
  await DB.mutate(query);console.log(query)
}

async function deleteFromCatr (id , userid  ) {
  const query = {
    text : "DELETE FROM cart productid = $2 WHERE id = $1 ",
    values: [userid, id ]
  }
  await DB.mutate(query);console.log(query)
}

module.exports = {
  getAll,
  get,
  postCart,
  deleteFromCatr
};