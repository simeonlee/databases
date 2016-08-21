var models = require('../models/index');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(result) {
        res.send(result);
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, function() {
        res.sendStatus(201);
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function(result) {
        res.send(result);
      });
    },
    post: function (req, res) {
      models.users.post(req.body, function() {
        res.sendStatus(201);
      });
    }
  }
};