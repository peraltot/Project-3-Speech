import axios from "axios";

export default {
  // Gets all stories
  getStories: function() {
    return axios.get("/stories");
  },

//   // Gets the story with the given id
  getStory: function(id) {
    return axios.get("/story/" + id);
  },

  // Deletes the story with the given id
  deleteStory: function(id) {
    return axios.delete("/story/" + id);
  }
//   // Saves a story to the database
//   saveStory: function(StoryData) {
//     return axios.post("/stories", StoryData);
//   }
};
