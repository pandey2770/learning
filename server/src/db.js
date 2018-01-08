const { Pool, Client } = require('pg')


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'demo',
    password: 'Mahatmaji@1',
    port: 5432
});


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