// CONTAINER COMPONENT

import React, { Component } from "react";
//Import the presentational component
import StoryPanel from "../../components/StoryPanel";
import API from "../../utils/api-axios";
import googleApi from "../../utils/googleApi";
import MailModal from '../Mail-Modal';
import {Button, Icon} from "react-materialize";
class AllStories extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stories: [],
            title: "",
            words: ""
        }
        this.loadStories = this.loadStories.bind(this);
        this.delStory = this.delStory.bind(this)
        this.gdUploadStory = this.gdUploadStory.bind(this);
    }

    componentDidMount() {
        this.loadStories();
    };

    // Loads all stories
    loadStories() {
        API.getStories()
            .then(res =>
                // to do add in error checking here if no stories display heading and no stories
                // if (!res.data) {
                //   console.log("no stories");

                // }
                this.setState({ stories: res.data })
            )
            .catch(err => console.log(err));
    };

    // Deletes a story from the database with a given id, then reloads stories from the db
    delStory(id) {
        console.log("del story");
        API.deleteStory(id)
            .then(res => this.loadStories())
            .catch(err => console.log(err));
    };

    gdUploadStory(id, words) {
        console.log("Google Drive Upload clicked");
        googleApi.init()
            .then(() => {
                googleApi.saveFile(id, words)
                    .then(() => {
                        alert('File uploaded');
                        console.log('File uploaded');
                    });
            })
            .catch(err => {
                alert(err);
                console.log('error uploading to google drive ' + err);
            });

    };

    mailStory() {
        const msg = {
            to: 'connorjohnmelnick@gmail.com',
            from: 'test@example.com',
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
          };

        API.mail(msg)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    render() {
        const allStoryPanels = this.state.stories.map(story => {
            return (

                <StoryPanel
                    key={story._id}
                    title={story.title}
                    words={story.words}

                />
            );
        });


        return (
            <div>
                {/* {allStoryPanels} */}
                My Stories:
                {StoryPanel}
            </div>
        )
    }

    render() {
        const theButtons = this.state.stories.map(storyBtns => {
            return (
                
                <div key={storyBtns._id}>
                    <h4>
                        {storyBtns.title}:
                    </h4>
                    <Button onClick={() => this.delStory(storyBtns._id)}
                    ><Icon>delete</Icon>
                  </Button>

                    <Button onClick={() =>
                        this.gdUploadStory(storyBtns._id, storyBtns.words)}
                    ><Icon>backup</Icon>
                  </Button>
   <MailModal nickTest={this.mailStory}/>
                  <p>
                   {storyBtns.words}
                   </p>

                </div>
            )
        });
        return (
            <div>
                {theButtons}
            </div>
        )
    }

};

export default AllStories;


import React from "react";
import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { StoryPanel } from "../../components/StoryPanel";

class Stories extends Component {
  // Setting our component's initial state
  state = {
    stories: [],
    title: "",
    words: ""
  };

  // When the component mounts, get all books and save them to this.state.stories
  componentDidMount() {
    this.loadStories();
  }

  // Loads all stories  and sets them to this.state.stories
  loadStories = () => {
    API.getStories()
      .then(res =>
        this.setState({ stories: res.data, title: "", words: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a story from the database with a given id, then reloads stories from the db
  deleteStory = id => {
    API.deleteStory(id)
      .then(res => this.loadStories())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="lg12">
            <StoryPanel>
              {this.state.stories.length ? (
                <List>
                  {this.state.stories.map(story => {
                    return (
                      <ListItem key={story._id}>
                        <a href={"/story/" + story._id}>
                          <strong>
                            {story.title}
                          </strong>
                        </a>
                        <DeleteBtn onClick={() => this.deleteStory(story._id)} />
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </StoryPanel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Stories;