/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const express = require("express");
const api = express.Router();
const db = require('../models/')
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
// Route for retrieving all stories from the db



api.get('/', (req, res) => {
  res.render('index', {
    bluemixAnalytics: !!process.env.BLUEMIX_ANALYTICS,
  });
});

//sample: to test search to external api if we need this later

const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};



api.get("/stories", function(req, res) {
    // Find all Notes
    db.Story
      .find({})
      .then(function(dbStory) {
        // If all Notes are successfully found, send them back to the client
        res.json(dbStory);
        // res.render('stories', dbStory);

      })
      .catch(function(err) {
        // If an error occurs, send the error back to the client
        res.json(err);
      });
  });
  
//find one story - to do - add in .populate (user)
  api.get("/stories/:id", function(req, res) {
    // Find all Notes
    db.Story
      .findOne({
        _id: req.params.id
      })
      .then(function(dbStory) {
        // If all Notes are successfully found, send them back to the client
        res.json(dbStory);
        // res.render('stories', dbStory);
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