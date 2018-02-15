
<<<<<<< Updated upstream
=======
const express = require('express');
// const DocumentApp = require('google-documents-api');
const bodyParser = require("body-parser");
const app = express();
const watson = require('watson-developer-cloud');
const api = require('./routes/api');
// Bootstrap application settings
require('./config/express')(app);


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/', api);
const stt = new watson.SpeechToTextV1({
  // if left undefined, username and password to fall back to the SPEECH_TO_TEXT_USERNAME and
  // SPEECH_TO_TEXT_PASSWORD environment properties, and then to VCAP_SERVICES (on Bluemix)
  // username: '',
  // password: ''
});

const authService = new watson.AuthorizationV1(stt.getCredentials());

app.get('/', (req, res) => {
  res.render('index', {
    bluemixAnalytics: !!process.env.BLUEMIX_ANALYTICS,
  });
});

// Get token using your credentials
app.get('/api/token', (req, res, next) => {
  authService.getToken((err, token) => {
    if (err) {
      next(err);
    } else {
      res.send(token);
    }
  });
});

module.exports = app;
>>>>>>> Stashed changes
