// YOU DO NOT NEED TO EDIT this code.
//
// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.
if (!/(&|\?)username=/.test(window.location.search)) {
  var newSearch = window.location.search;
  if (newSearch !== '' & newSearch !== '?') {
    newSearch += '&';
  }
  newSearch += 'username=' + (prompt('What is your name?') || 'anonymous');
  window.location.search = newSearch;

  server: 'http://127.0.0.1:3000/classes',

  // POST the username to the server
  $.ajax({
    url: app.server,
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: function (data) {
      // Trigger a fetch to update the messages, pass true to animate
      app.fetch();
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message', data);
    }
  });
}

// Put your parse application keys here!
// $.ajaxPrefilter(function (settings, _, jqXHR) {
//   jqXHR.setRequestHeader('X-Parse-Application-Id', 'PARSE_APP_ID');
//   jqXHR.setRequestHeader('X-Parse-REST-API-Key', 'PARSE_API_KEY');
// });
