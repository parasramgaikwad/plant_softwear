const mysql = require('mysql');
const util = require('util');

const conn = mysql.createConnection({
    // host:"localhost",
    // user:"root",
    // password:"",
    // database:"plant_softwear"

     host: "bsykq4fotenahhjywzfd-mysql.services.clever-cloud.com",
     user: "unjxfk9e7iphtdvd",
     password: "b0hkuoWQ23Pa7Pr9RTjz",
     database: "bsykq4fotenahhjywzfd",
    
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
