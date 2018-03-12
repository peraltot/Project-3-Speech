import React, { Component } from "react";
import API from "../../utils/api-axios";
import googleApi from "../../utils/googleApi";
import { Container, Row, Col } from '../Grid';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import MailBtn from '../Buttons/MailBtn';
import DeleteBtn from '../Buttons/DeleteBtn';
import DriveBtn from '../Buttons/DriveBtn';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// THE STORY CARDS
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
        const theStories = this.state.stories.map(story => {
            return (
                <Container>
                    <Row>
                        <Col>
                            <MuiThemeProvider>
                                <Card>
                                    <CardHeader
                                        className="orange-text"
                                        id="storyCardHeader"
                                        title={story.title}
                                        actAsExpander={true}
                                        showExpandableButton={true}
                                    />
                                    <CardText expandable={true}>
                                        {story.words}
                                    </CardText>
                                    <CardActions>
                                        <DeleteBtn label="delete" onClick={() => this.delStory(story._id)} />
                                        <DriveBtn label="drive" onClick={() => this.gdUploadStory(story._id, story.words)} />
                                        <MailBtn label="mail" subject={story.title} text={story.words} />
                                    </CardActions>
                                </Card>
                            </MuiThemeProvider>
                        </Col>
                    </Row>
                </Container>
            )
        });
        return (
            <div>
                {theStories}
            </div>
        )
    }

};

export default AllStories;