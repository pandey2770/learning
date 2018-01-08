const pg = require("pg");

const pool =new pg.pool({
    user: 'myuser',
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

module.export = {
    get,
    mutate
};