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
    post: function (post, callback) { // TODO: DO WE REMOVE REQ, RES?

      post = post || {timestamp: new Date(), text: 'Hello world! :)'};
      var messageData = {timestamp: new Date(), text: post.text};

      // Upon load of client, we'll do a post request with just the username to the user table
      // That can be configured by doing a check if the post data has a message or not

      dbConnection.query('INSERT INTO messages SET ?', messageData, function(err, result) {
        if (err) { throw err; }
        callback();
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

