const mysql = require('mysql');
const util = require('util');

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"plant_softwear"

    // host: "bun9fq9ycki9avlxsm6h-mysql.services.clever-cloud.com",
    // user: "uhfctuxbu0ljcj9m",
    // password: "s97lFinSkHJXw8Mmwq2c",
    // database: "bun9fq9ycki9avlxsm6h",
    
});

// Promisify the query function for easier use with async/await
const exe = util.promisify(conn.query).bind(conn);

// Handle connection errors
conn.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message || err);
        return;
    }
    console.log('Connected to MySQL database!');
});

// Graceful error handling for the module
conn.on('error', (err) => {
    console.error('MySQL connection error:', err.code || err);
    // Optional: Decide whether to reconnect based on the error type
});

module.exports = exe;
