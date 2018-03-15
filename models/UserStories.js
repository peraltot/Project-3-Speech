var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var StorySchema = new Schema({
  // `name` must be unique and of type String
  title: {
    type: String,
    required: true
  },
  words: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  }
  
});

// This creates our model from the above schema, using mongoose's model method
var Story = mongoose.model("UserStories", StorySchema);

// Export the User model
module.exports = Story;
