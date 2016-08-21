var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

dbConnection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'marinara',
  database: 'chat'
});

dbConnection.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('You are now connected to the "chats" database');
});

module.exports = dbConnection;