
<<<<<<< HEAD
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
=======
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// define import paths

import Navpills from "./components/Navpills";


import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";

const App = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} /> */}
    </div>
  </Router>;

export default App;
>>>>>>> 8a44a99d5ba22a1a8b71ea969536bcc1c6ce114b
