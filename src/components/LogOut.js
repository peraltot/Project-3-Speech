import React, { Component } from "react";
import googleApi from "../utils/googleApi";
import { Card, CardText } from 'material-ui/Card';


class LogOut extends Component {

    constructor(props) {
        super(props)
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        googleApi.init()
            .then(() => {
                console.log("in logOut component");
                googleApi.logOut();
            })
            .catch(err => {
                alert(err);
                console.log("error with init and logout");
            });
    }

    render() {
        return (
            <div>
                <div>
                    {this.logOut()}
                </div>
                {/* <Card>
                    <CardText>
                        <p>You have logged out</p>
                    </CardText>
                </Card> */}
            </div>
        )
    }
}

export default LogOut;