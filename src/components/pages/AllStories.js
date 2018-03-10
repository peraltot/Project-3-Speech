import React, { Component } from "react";
import StoryPanel from "../../components/StoryPanel";
import API from "../../utils/api-axios";
import googleApi from "../../utils/googleApi";
import MailBtn from '../Buttons/MailBtn';
import DeleteBtn from '../Buttons/DeleteBtn';
import DriveBtn from '../Buttons/DriveBtn';
import PopoutList from '../List/PopoutList';
import ListItem from '../List/ListItem';


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

                <StoryPanel key={story._id}>
                    <PopoutList>
                        <ListItem key={story._id}>
                            <div className="collapsible-header">{story.title}</div>
                            <div class="collapsible-body"><span>{story.words}</span></div>
                        </ListItem>
                    </PopoutList>

                    <DeleteBtn onClick={() => this.delStory(story._id)} />
                    <DriveBtn onClick={() => this.gdUploadStory(story._id, story.words)} />
                    <MailBtn subject={story.title} text={story.words} />
                    <p>
                        {story.words}
                    </p>

                </StoryPanel>
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