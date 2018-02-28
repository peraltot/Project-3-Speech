// CONTAINER COMPONENT

import React, { Component } from "react";
//Import the presentational component
import StoryPanel from "../../components/StoryPanel";
import API from "../../utils/api-axios";
import googleApi from "../../utils/googleApi";
import sgMail from '@sendgrid/mail';

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
            .then(res => this.loadStories())
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
                {allStoryPanels}
            </div>
        )
    }

    render() {
        const theButtons = this.state.stories.map(storyBtns => {
            return (
                <div key={storyBtns._id}>
                    {storyBtns.title} and {storyBtns.words}
                    <button onClick={() => this.delStory(storyBtns._id)}
                        type="button"
                    >
                        Delete
                  </button>

                    <button onClick={() =>
                        this.gdUploadStory(storyBtns._id, storyBtns.words)}
                        type="button"
                    >
                        Google Drive Upload
                  </button>

                    <button onClick={() =>
                        this.mailStory("This is my story", "Title")}
                        type="button"
                    >
                        Mail
                  </button>

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
