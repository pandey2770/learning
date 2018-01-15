const uuidv1 = require("uuid/v1");
const DB = require("./db");

async function get(username, password) {
  const query = {
    text: "SELECT * FROM demouser WHERE username = $1 and password = $2 ",
    values: [username, password]
  };
  const users = await DB.get(query);
  console.log(users)
  return users;
}

async function getById(id) {
  const query = {
    text: "SELECT * FROM demouser where id = $1",
    values: [id]
  };
  return await DB.get(query);
}

async function signUp(username, password) {
  const id = uuidv1();
  const query = {
    text: "INSERT INTO demouser (id, username, password) VALUES ($1, $2, $3)",
    values: [id, username, password]
  };
  await DB.mutate(query);
  return id;
}

async function updateData (id,user ) {
  const query = {
    text: "UPDATE demouser SET username = $2, password = $3, name = $4, number = $5 , address = $6  where id = $1",
    values: [id, user.username, user.password, user.name, user.number, user.address],
  };
  return await DB.mutate(query);
}

module.exports = {
  get,
  getById,
  signUp,
  updateData,
};