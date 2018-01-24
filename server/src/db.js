const { Pool, Client } = require('pg');

const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'demo',
  password: ''
})

async function get(query) {
  const res = await pool.query(query);
  return res.rows;
}

async function mutate(query) {
  const res = await pool.query(query);
  return res.rowCount;
}

module.exports = {
  get,
  mutate
};
