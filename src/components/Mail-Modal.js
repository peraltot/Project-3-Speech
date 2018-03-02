import React from 'react';
import { Modal, Button } from 'react-materialize';

const MailModal = props => {
    return (
        <Modal
        header='Modal Header'
        trigger={<Button onClick={ () => props.nickTest()}>Mail</Button>}>
        <h1>Test</h1>
      </Modal>
    );
}

export default MailModal;