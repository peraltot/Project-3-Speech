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
const sgMail = require('@sendgrid/mail');

// deliver home page

api.get('/', (req, res) => {
  res.render('index', {});
});

// Route for retrieving all stories from the db

api.get("/stories", function (req, res) {
  // Find all Notes
  db.Story
    .find({userEmail: req.body.userEmail})
    .then(function (dbStory) {
      // If all Notes are successfully found, send them back to the client
      res.json(dbStory);
      // res.render('stories', dbStory);

    })
    .catch(function (err) {
      // If an error occurs, send the error back to the client
      res.json(err);
      //SEND BACK HERE
    });
});

//find one story - to do - add in .populate (user)
api.get("/stories/:id", function (req, res) {
  // Find all Notes
  db.Story
    .findOne({
      _id: req.params.id
    })
    .then(function (dbStory) {
      // If all Notes are successfully found, send them back to the client
      res.json(dbStory);
      // res.render('stories', dbStory);
    })
    .catch(function (err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

// Route for saving a new story
api.post("/saved", function (req, res) {
  db.Story
    .create(req.body)
    .then(function (dbStory) {
      res.json(dbStory);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

//route for del of story
api.delete("/stories/:id", function (req, res) {
  console.log("del it");
  db.Story.findByIdAndRemove(req.params.id, function (err, removed) {
    if (err)
      res.send(err);
    else
      res.json({
        removed: 'story Deleted!'
      });

  }); //end findByIdAndRemove
}); //endapp.delete

api.post("/mail", function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail.send(req.body.msg, (error, result) => {
    if (error) {
      console.log("---------------------Fail----------------------")
      console.log(error);
    } else {
      console.log("---------------------Success----------------------")

      console.log(result);
    }
  });

});

module.exports = api;
