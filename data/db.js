 const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'demo_kavi'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    else {
        console.log('Connected to the MySQL database.');
    }
});

module.exports = connection;