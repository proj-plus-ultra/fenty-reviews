const mysql = require('mysql');

//USE PERSONAL USER AND PASSWORD
const connection = mysql.createConnection({
    user: 'root', 
    password: 'root',
    database: 'fenty_reviews'
});

connection.connect();

module.exports = connection;