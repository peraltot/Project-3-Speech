import React, { Component } from "react";
import API from "../../utils/api-axios";
import googleApi from "../../utils/googleApi";
import MailModal from '../Mail-Modal';

//Import componednts
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { StoryPanel } from "../../components/StoryPanel";
import { DeleteBtn, MailBtn, DownloadBtn } from "../../components/Buttons";

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





    // render() {
    //     const allStoryPanels = this.state.stories.map(story => {
    //         return (

    //             <StoryPanel
    //                 key={story._id}
    //                 title={story.title}
    //                 words={story.words}

    //             />
    //         );
    //     });


    render() {
        const allStoryPanels = this.state.stories.map(story => {
            return (
                <Container>
                    <Row>
                        <Col size="lg12">
                            <StoryPanel>
                                {this.state.stories.length ? (
                                    <List>
                                        <ListItem key={story._id}>
                                            <a href={"/story/" + story._id}>
                                                <strong>
                                                    {story.title}
                                                </strong>
                                                <p>
                                                    {story.words}
                                                </p>
                                            </a>
                                            <DownloadBtn onClick={() => this.gdUploadStory(story._id, story_words)} />
                                            <DeleteBtn onClick={() => this.delStory(story._id)} />
                                            <MailBtn subject={story.title} text={story.words} />
                                        </ListItem>
                                        )}
                                </List>
                                ) : (
                                        <h3>No Results to Display</h3>
                                    )}
                            </StoryPanel>
                        </Col>
                    </Row>
                </Container>
            )
        });
        return (
            <div>
                {allStoryPanels}
            </div>
        )
    }
}

// render() {
//     const theButtons = this.state.stories.map(storyBtns => {
//         return (

//             <div key={storyBtns._id}>
//                 <h4>
//                     {storyBtns.title}:
//                 </h4>
//                 <Button onClick={() => this.delStory(storyBtns._id)}
//                 ><Icon>delete</Icon>
//               </Button>

//                 <Button onClick={() =>
//                     this.gdUploadStory(storyBtns._id, storyBtns.words)}
//                 ><Icon>backup</Icon>
//               </Button>
// <MailModal nickTest={this.mailStory}/>
//               <p>
//                {storyBtns.words}
//                </p>

//             </div>
//         )
//     });
//     return (
//         <div>
//             {theButtons}
//         </div>
//     )
// }

// };



export default AllStories;