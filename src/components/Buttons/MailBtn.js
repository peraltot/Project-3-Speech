import React, { Component } from "react";
import API from '../../utils/api-axios'
import {  Modal, TextInput } from 'watson-react-components/dist/components';
 
class MailBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleModal : false,
            email : ""
        }
        
        // this.modalShow = this.modalShow.bind(this);
        this.onExit = this.onExit.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.mailStory = this.mailStory.bind(this);
    }
    
    onExit() {
        console.log('on exit' + this.state.email);
        this.setState({
          toggleModal: false,
        });
      }

      onEnter() {
        console.log('on enter');
        this.setState({
          toggleModal: true,
        });
      }

    mailStory() {
        this.onExit();//closes modal
        const msg = {
            to: this.state.email,
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
        <div className="mailBtnDiv">
            <a className="btn-floating btn-large waves-effect waves-light" onClick={this.onEnter}>
            <i className="material-icons">mail</i></a>
 

        <Modal
        id="emailModal"
        isOpen={this.state.toggleModal} // boolean
        onExit={this.onExit}
        onEnter={this.onEnter}
        >
        <h3 className="emailModalHeader" style={{ textAlign: 'center' }}>Enter the email address you would like to send your story to:</h3>
        
        <TextInput
        style={{ textAlign: 'center' }}
        id="text-input-1"
        placeholder="Sendee"
        onInput={(e) => {
        this.setState({ email: e.target.value });
        }}
        />
        <button className="emailModalSubmitBtn" onClick={this.mailStory}>Submit</button>
        </Modal>
        </div>
 
        )
    }
}

export default MailBtn;

