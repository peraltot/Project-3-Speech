import React, { Component } from "react";
import {Button, Icon, Card, CardHeader, CardTitle} from "react-materialize";



class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: [ 
        { title: "Language", text: "Choose the language to record in.", img:"./images/record-audio.png" }, 
        { title: "Record speach to text", text: "Click the Record Audio button to start and stop recording.", img: "./images/record-audio.png"  }
      ]   
    }
}



  render() {
    return (

      <div className="container">
      <h1 className="center-align">About ChatterDoX</h1>
       <p>
         ChatterDoX is enabled by IBM's WATSON API for speech to text, it also provides an story management system and allows for export to various tools for editing.  The [IBM Bluemix](https://www.bluemix.net/) service site uses IBM's speech recognition capabilities to convert speech in multiple languages into text. The transcription of incoming audio is continuously sent back to the client with minimal delay, and it is corrected as more speech is heard.
        </p>
     <h3 className="center-align">How to use ChatterDoX!</h3>
    <p>
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
              <p className="left">{card.text}</p>
              <img className="right" src={card.img} />
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
