import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import env from "../.env";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import auth from "../../utils/auth";


class Login extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: null
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    auth.handleAuthentication()
      .then(res =>
        this.setState({ isLoggedIn: true })
      )
      .catch(err => console.log(err));
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            test
            {/* {Home} */}
          </div>
        ) : (
            <div className="container">
              <div className="row valign-wrapper">
                <div className="col l4 valign">
                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="../images/owl.jpg" alt="bird with scroll" />
                    </div>
                    <div className="card-content">
                      <a id="loginBtn" className="waves-effect waves-light btn" onClick={this.handleLogin}><i className="material-icons left">verified_user</i>Login</a>
                      {/* <a id="logoutBtn" className="waves-effect waves-light btn"><i className="material-icons left">exit_to_app</i>Logout</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }


}


export default Login;