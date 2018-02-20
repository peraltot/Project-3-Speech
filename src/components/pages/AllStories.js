import React, { Component } from "react";
// import StoryPanel from '../../components/StoryPanel';
import {Button, Row, Col, CardPanel} from "react-materialize";
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
    this.delStory = this.delStory.bind(this);
    this.gdUploadStory = this.gdUploadStory.bind(this);
    
    
  }

  // componentDidMount() {
  //   this.loadStories();
  // };

  
   loadStories (){
    API.getStories()
      .then(res =>
        this.setState({ stories: res.data })
      )
      .catch(err => console.log(err));
  };

  delStory (id) {
    console.log("del story");
    API.deleteStory(id)
    .then(res => this.loadStories())
    .catch(err => console.log(err));
  };
 
  gdUploadStory (id, words) {
    console.log("Google Drive Upload clicked");
  //to do implement google upload html + javascript to react

  };


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
              <h2> Title </h2> 
            {this.state.stories.map(story => 
            <div key={story._id}>
            {story.title} and {story.words}
              <button onClick={() => this.delStory(story._id)} 
              type = "button"
              >
              Delete
              </button>
              <button onClick={() => this.gdUploadStory(story._id, story.words)} 
              type = "button"
              >
              Google Drive Upload
              </button>
            </div>
            )}
          </CardPanel>
      </Col>
      </Row>
);
}
}  

export default AllStories;
