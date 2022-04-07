const dotenv = require('dotenv');

module.exports = {
    host: 'localhost',
    user: 'root',
    password: dotenv.config().parsed.DB_PASSWORD,
    database: 'analysis_tool'
};