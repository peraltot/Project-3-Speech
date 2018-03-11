import React, { Component } from "react";
import {Button, Icon, Card, CardHeader, CardTitle} from "react-materialize";



class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: [ 
        { title: "Language", text: "Choose a language.", img:"./images/language-resize.jpg" }, 
        { title: "Record speach to text", text: "Start recording.", img: "./images/record-audio.png" },
        { title: "Recorded Text", text: "Displays recorded text.", img: "./images/mystory-resize.png" },
        { title: "Download Story", text: "Download story locally.", img: "./images/download.png" },
        { title: "Save Story", text: "Save story to view in My Stories.", img: "./images/save.png" },
        { title: "MyStories Page", text: "Go to saved stories page to view your stories.", img: "./images/mystories.png"  },
        { title: "View Story", text: "Expand to view your story.", img: "./images/story-card-resize.png" },
        { title: "Delete Story", text: "Delete a story.", img: "./images/delete.png"  },
        { title: "Google Drive", text: "Upload your story to Google Drive.", img: "./images/google.png"  },
        { title: "Mail Story", text: "Email your story to yourself or someone else.", img: "./images/email.png"  },
        

      ]   
    }
}



  render() {
    return (

      <div className="container">
      <h1 className="center-align">About ChatterDoX</h1>
       <p className="about-text">
         ChatterDoX is enabled by IBM's WATSON API for speech to text, it also provides an story management system and allows for export to various tools for editing.  The [IBM Bluemix](https://www.bluemix.net/) service site uses IBM's speech recognition capabilities to convert speech in multiple languages into text. The transcription of incoming audio is continuously sent back to the client with minimal delay, and it is corrected as more speech is heard.
        </p>
     <h3 className="center-align">How to use ChatterDoX!</h3>
    <p className="about-text">
      ChatterDoX is very simple to use.  With the click of a few buttons you will have a great story saved to your medium of choice in no time at all.  
    </p>

    
    { this.state.cards.map(card => {
      return (
      <div className="row" key={card.title}>
      <div className="col s12 m12">
        <div className="card-panel orange z-depth-4">
          <div className="card-content white-text">
              <div className="card-title left">{card.title}</div>
            <br />
            <br />
            <div className="divider"></div>
            <div className="section">
              <p className="left text-left about-text">{card.text}</p>
              <img className="right img-right" src={card.img} />
            </div>
          </div>
        </div>
      </div>
    </div>
      )
    })}

  </div>
    );
  }
}

export default About;
