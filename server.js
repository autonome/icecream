// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// jsonify
app.use(bodyParser.json());

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Configure push server
var webPush = require('web-push');
webPush.setGCMAPIKey(process.env.FCM_API_KEY);

// Set up push registration
app.post('/register', function(req, res) {
  res.sendStatus(201);
});

// Test notification route
app.post('/sendNotification', function(req, res) {
  setTimeout(function() {
    webPush.sendNotification({
      endpoint: req.query.endpoint,
      TTL: req.query.ttl,
    })
    .then(function() {
      res.sendStatus(201);
    })
    .catch(function(error) {
      res.sendStatus(500);
      console.log(error);
    })
  }, req.query.delay * 1000);
});

// Handle report submissions
app.post('/report', function(req, res) {
  //console.log('/report', req.body);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});