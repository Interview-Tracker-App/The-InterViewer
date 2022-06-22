const { Pool } = require('pg')

const PG_URI = 'postgres://qgpawvjj:qvdqCzE2_NBL0RN7H5st7M6mlKvPDhjc@heffalump.db.elephantsql.com/qgpawvjj';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};