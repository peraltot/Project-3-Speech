// load environment properties from a .env file for local development
// require('dotenv').load({
//   silent: true
// });
require('dotenv').config()

const express = require('express');
const api = require('./routes/api.js');
const db = require("./models");
const mongoose = require("mongoose");
const watson = require('watson-developer-cloud');
const bodyParser = require("body-parser");
const app = express();
// Deployment tracking
require('cf-deployment-tracker-client').track();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/', api);

// Get token using your credentials
require('./config/express')(app);

const stt = new watson.SpeechToTextV1({
  // if left undefined, username and password to fall back to the SPEECH_TO_TEXT_USERNAME and
  // SPEECH_TO_TEXT_PASSWORD environment properties, and then to VCAP_SERVICES (on Bluemix)
  // username: '',
  // password: ''
});

const authService = new watson.AuthorizationV1(stt.getCredentials());
app.get('/api/token', (req, res, next) => {
    authService.getToken((err, token) => {
      if (err) {
        next(err);
      } else {
        res.send(token);
      }
    });
  });

const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
// Database configuration with mongoose
var databaseUri = "mongodb://localhost/Stories";

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}

var dbase = mongoose.connection;

// Show any mongoose errors
dbase.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
dbase.once("open", function () {
  console.log("Mongoose connection successful.");
});

app.listen(port);
console.log('listening at:', port);
