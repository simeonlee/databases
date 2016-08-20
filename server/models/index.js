var controller = require('../controllers/index');
var db = require('../db/index');

module.exports = {
  messages: {
    get: function (callback) {
      var query = 'SELECT * FROM messages';
      db.query(query, function(err, result) {
        if (err) { throw err; }
        callback(result);
      });
    },
    post: function (data, callback) {
      var query = 'INSERT INTO messages (timestamp, text, user_id, room_id) \
                   VALUES (?, ?, ?, ?)';
      var params = [ new Data(), data.text, data.username, data.roomname ];
      db.query(query, params, function(err, result) {
        if (err) { throw err; }
        callback(result);
      });
    }
  },

  users: {
    get: function (callback) {
      var query = 'SELECT * FROM users';
      db.query(query, function(err, result) {
        if (err) { throw err; }
        callback(result);
      });
    },
    post: function (data, callback) {
      var query = 'INSERT INTO users (username) \
                   VALUES (?)';
      var params = [ data.username ];
      db.query(query, params, function(err, result) {
        if (err) { throw err; }
        callback(result);
      });
    }
  }
};