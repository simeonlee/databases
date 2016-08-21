var controller = require('../controllers/index');
var db = require('../db/index');

module.exports = {
  messages: {
    get: function (callback) {
      var query = 'SELECT m.id, m.timestamp, m.text, u.name username, r.name roomname FROM messages m \
                   LEFT OUTER JOIN users u ON (m.user_id = u.id) \
                   LEFT OUTER JOIN rooms r ON (m.room_id = r.id) \
                   ORDER BY m.id DESC \
                  ';
      db.query(query, function(err, result) {
        if (err) { throw err; }
        callback(result);
      });
    },
    post: function (data, callback) {
      var query = 'INSERT INTO messages (timestamp, text, user_id, room_id) \
                   VALUES (?, ?, \
                   (SELECT u.id FROM users u WHERE u.name=? limit 1), \
                   (SELECT r.id FROM rooms r WHERE r.name=? limit 1)) \
                  ';
      var params = [ (new Date()).toString(), data.text, data.username, data.roomname ];
      db.query(query, params, function(err, result) {
        if (err) { throw err; }
        callback();
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
      var query = 'INSERT INTO users (name) \
                   VALUES (?) \
                   ON DUPLICATE KEY UPDATE name=?';
      var params = [ data.username, data.username ];
      db.query(query, params, function(err, result) {
        if (err) { throw err; }
        callback();
      });
    }
  }
};