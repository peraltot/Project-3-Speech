import React, { Component } from "react";
import { Modal, Button } from 'react-materialize';
import API from '../utils/api-axios'

class MailButton extends Component {
    constructor(props) {
        super(props)
        this.mailStory = this.mailStory.bind(this);
        this.promptForEmail = this.promptForEmail.bind(this);
    }

    promptForEmail() {
        var sendee = prompt("Enter the address you would like to send your note to.")
        alert(sendee)
        this.mailStory(sendee);
    }

    mailStory(sendee) {
        const msg = {
            to: sendee,
            from: 'mystory@chatterdox.com',
            subject: this.props.subject,
            text: this.props.text,
        };
        console.log(msg);
        API.mail(msg)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Button onClick={()=>this.promptForEmail()}>Test</Button>
        )
    }
}

export default MailButton;