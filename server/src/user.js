const uuidv1 = require("uuid/v1");
const DB = require("./db");
const {cryptPassword} = require('./password');



async function get(email, password) {
  const query = {
    text: "SELECT * FROM demouser WHERE email = $1 and password = $2 ",
    values: [email, password]
  };
  const users = await DB.get(query);
  return users;
}

async function getById(id) {
  const query = {
    text: "SELECT * FROM demouser where id = $1",
    values: [id]
  };
  return await DB.get(query);
}

async function signUp(email, password) {
  const id = uuidv1();
  const pwd = await cryptPassword(password);
  const query = {
    text: "INSERT INTO demouser (id, email, password) VALUES ($1, $2, $3)",
    values: [id, email, password],  
  };
  await DB.mutate(query);
  return id;
}

async function updateData (id,user ) {
  const query = {
    text: "UPDATE demouser SET email = $2, password = $3, name = $4, number = $5 , address = $6  where id = $1",
    values: [id, user.email, user.password, user.name, user.number, user.address],
  };
  return await DB.mutate(query);
}

module.exports = {
  get,
  getById,
  signUp,
  updateData,
};