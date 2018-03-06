import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import env from "../.env";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';



var webAuth = new auth0.WebAuth({
  domain: AUTH0_DOMAIN,
  clientID: AUTH0_CLIENT_ID,
  redirectUri: AUTH0_CALLBACK_URL,
  audience: 'https://' + AUTH0_DOMAIN + '/userinfo',
  responseType: 'token id_token',
  scope: 'openid',
  leeway: 60
});

function setSession(authResult) {
  // Set the time that the access token will expire at
  var expiresAt = JSON.stringify(
    authResult.expiresIn * 1000 + new Date().getTime()
  );
  localStorage.setItem('access_token', authResult.accessToken);
  localStorage.setItem('id_token', authResult.idToken);
  localStorage.setItem('expires_at', expiresAt);
}

function logout() {
  // Remove tokens and expiry time from localStorage
  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('expires_at');
  displayButtons();
}

function isAuthenticated() {
  // Check whether the current time is past the
  // access token's expiry time
  var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  return new Date().getTime() < expiresAt;
}

function handleAuthentication() {
  webAuth.parseHash(function (err, authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
      window.location.hash = '';
      setSession(authResult);
      loginBtn.style.display = 'none';
      // homeView.style.display = 'inline-block';
    } else if (err) {
      // homeView.style.display = 'inline-block';
      console.log(err);
      alert(
        'Error: ' + err.error + '. Check the console for further details.'
      );
    }
    // displayButtons();
  });
}

// function displayButtons() {
//   if (isAuthenticated()) {
//     loginBtn.style.display = 'none';
//     logoutBtn.style.display = 'inline-block';
//     loginStatus.innerHTML = 'You are logged in!';
//   } else {
//     loginBtn.style.display = 'inline-block';
//     logoutBtn.style.display = 'none';
//     loginStatus.innerHTML =
//       'You are not logged in! Please log in to continue.';
//   }
// }

class Login extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: null
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState({ isLoggedIn: true })
    console.log(this.state.isLoggedIn);
    webAuth.authorize()
    handleAuthentication();
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