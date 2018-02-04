// load environment properties from a .env file for local development
require('dotenv').load({ silent: true });

const app = require('./app.js');
// Require all models
var db = require("./models");
var mongoose = require("mongoose");

// Deployment tracking
require('cf-deployment-tracker-client').track();

const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;
// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost/Stories", {
//   useMongoClient: true
// });
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

// When the server starts, create and save a new User document to the db
// The "unique" rule in the User model's schema will prevent duplicate users from being added to the server
// db.User
//   .create({ name: "Ernest Hemingway" })
//   .then(function(dbUser) {
//     console.log(dbUser);
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });

// Routes

// Route for retrieving all Notes from the db
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

// Route for saving a new Note to the db and associating it with a User
app.post("/submit", function(req, res) {
  // Create a new Note in the db
  db.Story
    .create(req.body)
    .then(function(dbStory) {
      // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Story.create({ name: "Use JSON story variable here" });
    })
    .then(function(dbStory) {
      // If the User was updated successfully, send it back to the client
      res.json(dbStory);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});


app.listen(port);
console.log('listening at:', port);
