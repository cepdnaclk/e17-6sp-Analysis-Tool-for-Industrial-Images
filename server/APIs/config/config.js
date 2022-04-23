const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    server: 'analysistooldata',
    user: 'dataadmin',
    password: process.env.DB_PASSWORD,
    database: 'analysis_tool',
    instaceName: 'analysistooldata.database.windows.net',
};