const uuidv1 = require("uuid/v1");
const DB = require("./db");


async function getUser(username, password) {
  const query = {
    text: "SELECT * FROM login WHERE username = $1 and password = $2 ",
    values: [ username, password ]
  };
  return await DB.get(query);
}

async function findById(id) {
  const query = {
    text: "SELECT * FROM login where id = $1",
    values: [id]
  };
  return await DB.get(query);
}

async function signup(username, password) {
  const id = uuidv1();
  const query = {
    text: "INSERT INTO login (id, username, password) VALUES ($1, $2, $3)",
    values: [ id, username, password ]
  };
  await DB.mutate(query);
  return id;
}

module.exports = {
  getUser,
  findById,
  signup
};
