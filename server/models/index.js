// var db = require('../db');
var dbConnection = require('./index');
module.exports = {
  messages: {
    get: function (req, res) { // TODO: DO WE REMOVE REQ, RES?
      res.send('----> You are in the models/index.js get request handler');
    }, // a function which produces all the messages
    post: function (req, res) { // TODO: DO WE REMOVE REQ, RES?
      console.log(req.body);
      var post = {timestamp: new Date(), text: req.body};
      dbConnection.query('INSERT INTO messages SET ?', post, function(err, result) {
        if (err) { throw err; }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

