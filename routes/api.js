const express = require("express");
const api = express.Router();
const db = require('../models/')
const sgMail = require('@sendgrid/mail');
var axios = require("axios");
var bodyParser = require("body-parser");
var path = require('path');

api.get('/', (req, res) => {
  res.render('index', {});
});


api.get("/stories", function (req, res) {
  // Find all Notes
  db.Story
    .find({})
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
      console.log(error);
    } else {
      console.log(result);
    }
  });

});

module.exports = api;
