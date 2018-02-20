import React, { Component } from "react";
// import StoryPanel from '../../components/StoryPanel';
import {Row, Col, CardPanel} from "react-materialize";
import API from "../../utils/api-axios";

class AllStories extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      stories:[],
      title:"",
      words:""
    }
    this.loadStories = this.loadStories.bind(this);
    // this.deleteStory = this.deleteStory.bind(this)
  }
   
   // Loads all stories
   loadStories (){
    API.getStories()
      .then(res =>
        this.setState({ stories: res.data })
      )
      .catch(err => console.log(err));
  };
  
    // Deletes a story from the database with a given id, then reloads stories from the db
  // deleteStory(id) {
    // API.deleteStory(id)
    //   .then(res => this.loadStories())
    //   .catch(err => console.log(err));
  // };
  
render() {
  return (
   <Row>
      <Col s={20} m={10}>
          <CardPanel className="blue-grey darken-1">
              <h1>View All Stories</h1>
              <button
                onClick={this.loadStories}
                type="button"
              >
                View Stories
              </button>
            {this.state.stories.map(function(story) {
            return <div>{story.title} and {story.words}</div>
            })}
          </CardPanel>
      </Col>
      </Row>
);
}
}  

export default AllStories;
