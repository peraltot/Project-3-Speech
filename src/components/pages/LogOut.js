import React, { Component } from "react";
import googleApi from "../../utils/googleApi";



class LogOut extends Component {

    constructor(props) {
        super(props)
        this.logOut = this.logOut.bind(this);
    }

    logOut(){
        googleApi.init()
            .then(() => {
                console.log("in logOut component");
                googleApi.logOut();
                //redirect to home
            })
            .catch(err => {
                console.log("error with init and logout" + err);
            });
        } 

    render() {
    return (
        <div>
      {this.logOut()}
      </div>
    )
  }
}

export default LogOut;