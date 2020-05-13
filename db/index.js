const mysql = require('mysql');

const connection = mysql.createConnection({
    user: 'root', 
    password: 'root',
    database: 'fenty_reviews'
});

connection.connect();

module.exports = connection;