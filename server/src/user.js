const uuid = require("uuid/v1");
const DB = require("./db");




async function getAllHistory() {
    return await DB.get('SELECT * FROM login');
}

async function createLogin({id, email, password}){
  const id = uuidv1();
  const query = {
    text : "INSTER INTO login id ,email, password VALUES ($1, $2, $3 ) ",
    values : [id, email, password] 
  };
  await DB.mutate(query);
  return id;
}

  
  module.exports = {
    getAllHistory,
    createLogin
  };
