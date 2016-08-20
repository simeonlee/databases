var models = require('../models');

var messages = [
  {
    text: 'hello world',
    username: 'fred',
    objectId: 0
  }
];

module.exports = {
  messages: {
    get: function (req, res) {
      res.send({results: messages});
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

