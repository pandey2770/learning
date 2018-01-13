const uuidv1 = require("uuid/v1");
const DB = require("./db");


async function getUser(username) {
  const query = {
    text: "SELECT * FROM login WHERE username = $1",
    values: [ username ]
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
<<<<<<< HEAD
=======
  const pwd = await cryptPassword(password);
>>>>>>> 019fe04... Adding paddword encryption
  const query = {
    text: "INSERT INTO login (id, username, password) VALUES ($1, $2, $3)",
    values: [ id, username, password ]
  };
  await DB.mutate(query);
  return id;
}

async function changeSetting (id,user ) {
  const query = {
    text: "UPDATE login SET id = $1, username = $2, password = $3, name = $4, number = $5 WHERE address = $6 ",
    values : [id, user.username, user.password, user.name, user.number, user.address ],
  };
  return await DB.mutate(query);
}

async function data(id) {
  const query = {
    text: "SELECT * FROM items where id = $1",
    values: [id]    
  };
  return await DB.get(query);
}

module.exports = {
  getUser,
  findById,
  signup,
  changeSetting
};