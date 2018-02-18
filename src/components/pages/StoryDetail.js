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