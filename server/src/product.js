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

async function postCart (id , cartid, state ) {
  const query = {
    text : "INSERT INTO CART (id, productid, state) VALUES ($1, $2, $3)",
    values: [id, cartid, state]
  }
  return await DB.mutate(query);
}

async function deleteFromCatr (id, userid  ) {
  const query = {
    text : "DELETE FROM cart WHERE id=$1 AND productid=$2 ",
    values: [ id, userid ]
  }
  const data = await DB.mutate(query);
  return data;
}

async function cartdetail (id) {
  const state = 'addCart';
  const query = {
    text: "SELECT * FROM cart WHERE id = $1 and  state = $2",
    values: [id, state]
  };
  const data = await DB.get(query);
  return data;
}

async function cashOrder (id, state ) {
  const pymethod = 'Cash Order';  
  const query = {
    text: "UPDATE cart SET state = $2, pymethod = $3 where id = $1",
    values: [ id, state, pymethod ]
  };
  return await DB.get(query);
}

async function orderData (id) {
  const state = 'Pending';
  const query = {
    text: "SELECT * FROM cart WHERE id = $1 and  state = $2",
    values: [id, state]
  };
  const data = await DB.get(query);
  return data;
}

module.exports = {
  getAll,
  postCart,
  deleteFromCatr,
  cartdetail,
  get,
  cashOrder,
  orderData
};