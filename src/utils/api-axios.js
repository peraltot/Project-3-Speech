import axios from "axios";

export default {
  // Gets all stories
  getStories: function () {
    return axios.get("/stories");
  },

//   // Gets the story with the given id
//   getStory: function(id) {
//     return axios.get("/stories/" + id);
//   },

  // Deletes the story with the given id
  deleteStory: function (id) {
    return axios.delete("/stories/" + id);
  },
  //   // Saves a story to the database
  //   saveStory: function(StoryData) {
  //     return axios.post("/stories", StoryData);
  //   }

  mail: function (msg) {
    return axios.post("/mail", {
      msg: msg
    });
    
  }

};



