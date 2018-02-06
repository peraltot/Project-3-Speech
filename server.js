// load environment properties from a .env file for local development
require('dotenv').load({ silent: true });
const app = require('./app.js');
var db = require("./models");
var mongoose = require("mongoose");

// Deployment tracking
require('cf-deployment-tracker-client').track();

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

// Routes

// Route for retrieving all stories from the db
app.get("/stories", function(req, res) {
  // Find all Notes
  db.Story
    .find({})
    .then(function(dbStory) {
      // If all Notes are successfully found, send them back to the client
      res.json(dbStory);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

// Route for saving a new story
app.post("/saved", function(req, res) {
  db.Story
    .create(req.body)
    .then(function(dbStory) {
      res.json(dbStory);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});


app.listen(port);
console.log('listening at:', port);
