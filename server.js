// load environment properties from a .env file for local development
require('dotenv').load({
  silent: true
});
const express = require('express');
const api = require('./routes/api.js');
const db = require("./models");
const mongoose = require("mongoose");
const watson = require('watson-developer-cloud');
const bodyParser = require("body-parser");
const app = express();
// Deployment tracking
require('cf-deployment-tracker-client').track();

///////////////////////////////////////////////////////
//  Auth0
//////////////////////////////////////////////////////

const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const flash = require('connect-flash');


const routes = require('./routes/index');
const user = require('./routes/user');

// This will configure Passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);

// you can use this section to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});



app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(
  session({
    secret: 'shhhhhhhhh',
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());

// Handle auth failure error messages
app.use(function(req, res, next) {
  if (req && req.query && req.query.error) {
    req.flash("error", req.query.error);
  }
  if (req && req.query && req.query.error_description) {
    req.flash("error_description", req.query.error_description);
  }
  next();
 });
 
 // Check logged in
 app.use(function(req, res, next) {
   res.locals.loggedIn = false;
   if (req.session.passport && typeof req.session.passport.user != 'undefined') {
     res.locals.loggedIn = true;
   }
   next();
 });
 
 app.use('/', routes);
 app.use('/user', user);
 
 // catch 404 and forward to error handler
//  app.use(function(req, res, next) {
//    const err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//  });
 
 // error handlers
 
 // development error handler
 // will print stacktrace
//  if (app.get('env') === 'development') {
//    app.use(function(err, req, res, next) {
//      res.status(err.status || 500);
//      res.render('error', {
//        message: err.message,
//        error: err
//      });
//    });
//  }
 
//  // production error handler
//  // no stacktraces leaked to user
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: {}
//    });
//  });
 
 module.exports = app;

 // =======================================


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
