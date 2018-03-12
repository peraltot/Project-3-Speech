import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Icon from 'watson-react-components';


// * Dialog with action buttons for adding the title when saving a story to your local machine.
// The actions are passed in as an array of React objects.
class DownloadBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    // componentDidMount() {
    //     this.handleClose();
    // };

    // Open the modal for adding a story title when saving a story
    handleOpen() {
        this.setState({ open: true });
    };

    // Close this modal
    handleClose() {
        this.setState({ open: false });
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <button onClick={this.handleOpen}>
                    <Icon fill="#ffffff" type={'link-out'} />
                    Download Story
                </button>

                <Dialog
                    title="Enter the name of this story:"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    {/* can add text to the modal here if desired. uncomment to preview */}
                </Dialog>
            </div>
        );
    }
}

export default DownloadBtn;