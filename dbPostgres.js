// PostgreSQL
const pg = require('pg');
const passwordPostgres = require('../password_variables/postgres')

const pool = new pg.Pool({
    user: "me",
    host: "localhost",
    database: "sprint3",
    password: passwordPostgres,
    port: 5432,
  });