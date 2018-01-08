const uuid = require("uuid/v1");
const DB = require("./db");




async function getAllHistory() {
    return await DB.get('SELECT * FROM loginuser');
}

  
  module.exports = {
    getAllHistory,
  };
