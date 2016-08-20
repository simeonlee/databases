// var db = require('../db');
var controller = require('../controllers/index');
var dbConnection = require('../index').dbConnection;
//dbConnection.connect();
module.exports = {
  messages: {
    get: function (callback) { // TODO: DO WE REMOVE REQ, RES?
      dbConnection.query('SELECT * FROM messages', function(err, result) {
        if (err) { throw err; }
        callback(result);
      });
    }, // a function which produces all the messages
    post: function (post, callback) {
     // TODO: DO WE REMOVE REQ, RES?
      console.log(post);
      var username = post.username;
      var roomname = post.roomname;
      var user_id;
      var room_id;
      // var messageData = {'timestamp': new Date(), 'text': post.text, 'user_id': user_id, 'room_id': room_id};
      //If User doesnt exist,Add user to Users table, immediately after get UserId, add to MessageData
      //If Room exist, Add room to Rooms table, immediately after get roomID, add to MessageData
      // dbConnection.query('INSERT INTO users SET ?', user, function(err, result) {
      dbConnection.query('INSERT INTO users (name) VALUES (?) ON DUPLICATE KEY UPDATE', username, function(err, result) {
        dbConnection.query('SELECT id FROM users WHERE name="' + username + '"', function(err, result) {
          if (err) {
            console.log(err);
          }
          console.log('waht is result??????', result);
          user_id = result[0].id;
          if (post.roomname) {
            dbConnection.query('INSERT INTO rooms (name) VALUES (?) ON DUPLICATE KEY UPDATE', roomname, function(err, result) {
              dbConnection.query('SELECT id FROM rooms WHERE name="' + roomname + '"', function(err, result) {
                if (err) {
                  console.log(err);
                }
                room_id = result[0].id;
                if (post.text) {
                  dbConnection.query('INSERT INTO messages (timestamp, text, user_id, room_id) VALUES (?, ?, ?, ?)', [new Date(), post.text, user_id, room_id], function(err, result) {
                    if (err) {
                      console.log(err);
                    }
                    callback();
                  });
                } else {
                  callback();
                }
              });
            });
          } else {
            callback();
          }
        });
      });
      //add message to Messages Table
      // post = post || {timestamp: new Date(), text: 'Hello world! :)'};
      
      // Upon load of client, we'll do a post request with just the username to the user table
      // That can be configured by doing a check if the post data has a message or not



    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      dbConnection.query('SELECT * FROM users', function(err, result) {
        if (err) { throw err; }
        callback(result);
      });
    },
    post: function (user, callback) {
      var userData = { name: user.username };
      console.log('what is userdata ' + userData);
      dbConnection.query('INSERT INTO users SET ?', userData, function(err, result) {
        if (err) { throw err; }
        callback(result);
      });
    }
  }
};

