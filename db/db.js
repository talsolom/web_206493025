const mysql = require('mysql2');
const DBconfig = require('./db.config');

// create the connection to db using the configuration
const connection = mysql.createConnection({
    host: DBconfig.HOST,
    user: DBconfig.USER,
    password: DBconfig.PASSWORD,
    database: DBconfig.DB
});

connection.connect();

connection.query('USE web', function (err, results) {
    if (err) throw err;
    console.log('Selected database');
  });


// open the mysql connection
connection.connect(error =>{
    if (error) {
        throw error
    }
    console.log("successfully connected to DB");
});

// export the connection

module.exports= connection;