//var models = require('../models');
var models = require('../models/index');
// var controllersIndex = require('./index.js');

var dummyData = [
  {
    text: 'hello world',
    username: 'robert',
    objectId: 0
  }
];

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(messages) {
        messages = messages || dummyData;
        res.send({results: messages});
        //console.log(messages);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('looking at body', req.body);
      models.messages.post(req.body, function() {
         //controllersIndex.messages.get(req, res);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {


    },
    post: function (req, res) {
      models.messages.post(req.body, function(result) {
        console.log('Posted username to database');
        console.log(result);
      });
    }
  }
};

