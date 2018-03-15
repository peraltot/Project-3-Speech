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
        
        this.modalShow = this.modalShow.bind(this);
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

    modalShow() {
        this.setState({
            toggleModal: true,
        });
        // var sendee = this.email;
        // prompt("Enter the address you would like to send your note to.")
        // alert(sendee)
        // this.mailStory(sendee);
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
        <div>
            <a className="btn-floating btn-large waves-effect waves-light" onClick={this.modalShow}>
            <i className="material-icons">mail</i></a>
 

        <Modal
        isOpen={this.state.toggleModal} // boolean
         onExit={this.onExit}
        onEnter={this.state.onEnter}
        >
        <h3 className="modalHeader" style={{ textAlign: 'center' }}>Enter the address you would like to send your note to.</h3>
        
        <TextInput
        id="text-input-1"
        placeholder="Sendee"
        onInput={(e) => {
        this.setState({ email: e.target.value });
        }}
        />
        <button id="modalSubmitBtn" onClick={this.mailStory}>Submit</button>
        </Modal>
        </div>
 
        )
    }
}

export default MailBtn;

