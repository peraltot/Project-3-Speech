import React, { Component } from "react";
import API from "../../utils/api-axios";
import googleApi from "../../utils/googleApi";
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

    componentWillMount() {
        this.loadStories();
    };

    componentDidMount() {
        this.loadStories();
    };

    // Loads all stories
    loadStories() {
    let userEmail = "";
        //call googleApi to extract email of user
        googleApi.init()
        .then(() => {
          userEmail = googleApi.getEmail()
          .then(userEmail => {
            console.log('Email extracted' + userEmail);
        
            API.getStories(userEmail)
             .then(res =>
                // to do add in error checking here if no stories display heading and no stories
                // if (!res.data) {
                //   console.log("no stories");

                // }
                this.setState({ stories: res.data })
                )
             .catch(err => console.log(err));
            })
            .catch(err => {
                console.log("error extracting email from googleAPI.getEmail " + err);
            });
        })
        .catch(err => {
            console.log("error calling googleAPI.init while loading user stories" + err);
        });
     
    };

    // Deletes a story from the database with a given id, then reloads stories from the db
    delStory(id) {
        console.log("del story");
        API.deleteStory(id)
            .then(res => this.loadStories())
            .catch(err => console.log(err));
    };

    gdUploadStory(title, words) {
        console.log("Google Drive Upload clicked");
        googleApi.init()
            .then(() => {
                googleApi.saveFile(title, words)
                    .then(() => {
                        console.log('File uploaded');
                    })
            })
            .catch(err => {
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

                <div className="container center-align">
                    <div className="row">
                      <div className="col s12 m12">
                            <MuiThemeProvider>
                                <Card className="theStoryCards">
                                    <CardHeader
                                        id="storyCardHeader"
                                        title={story.title}
                                        actAsExpander={true}
                                        showExpandableButton={true}
                                    />
                                    <CardText expandable={true} className="cardText">
                                        {story.words}
                                    </CardText>
                                    <CardActions className="storyCardButtonsDiv">
                                        <DeleteBtn label="delete" onClick={() => this.delStory(story._id)} />
                                        <DriveBtn label="drive" onClick={() => this.gdUploadStory(story._id, story.words)} />
                                        <MailBtn label="mail" subject={story.title} text={story.words} />
                                    </CardActions>
                                </Card>
                            </MuiThemeProvider>
                       </div>
                    </div>
                </div>

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