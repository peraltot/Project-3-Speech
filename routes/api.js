const express = require("express");
const api = express.Router();
const db = require('../models/')
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
// Route for retrieving all stories from the db
api.get("/stories", function(req, res) {
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
  api.post("/saved", function(req, res) {
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

  module.exports = api;