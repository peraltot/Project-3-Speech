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

app.listen(port);
console.log('listening at:', port);
