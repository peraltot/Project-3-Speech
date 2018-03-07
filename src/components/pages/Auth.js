import React from "react";
import auth0 from 'auth0-js';
import history from '../utils/history';

var AUTH0_CLIENT_ID = 'lBSBehjiwfS3GUcbk2cWrMXJzy1v5Xzd';
var AUTH0_DOMAIN = 'msherman83.auth0.com';
var AUTH0_CALLBACK_URL = 'http://localhost:3000/watson';

export default class Auth {

  auth0 = new auth0.WebAuth({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    redirectUri: AUTH0_CALLBACK_URL,
    audience: 'https://YOUR_AUTH0_DOMAIN/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/watson');
      } else if (err) {
        history.replace('/');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/home');
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}



  
// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// // import env from "../.env";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ReactDOM from 'react-dom';
// import auth from "../../utils/auth";
// import StoryPanel from "../../components/StoryPanel";


// class Login extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn: null
//     }
//     this.handleLogin = this.handleLogin.bind(this);
//   }

//   handleLogin() {
//     // this.setState({ isLoggedIn: true })    
//     auth.handleAuthentication()
//       .then(() => {
//         auth.isLoggedIn(true)
//         .then(() => {
//           this.setState({ isLoggedIn: true })            
//         })
//       })
//       // .then(res =>
//       //   this.setState({ isLoggedIn: true })
//       // )
//       // .catch(err => console.log(err));
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;

//     return (
//       <div>
//         {isLoggedIn === true ? (
//           <div>
//             <StoryPanel>
//               </StoryPanel>
//             {/* test */}
//             {/* {Home} */}
//           </div>
//         ) : (
//             <div className="container">
//               <div className="row valign-wrapper">
//                 <div className="col l4 valign">
//                   <div className="card">
//                     <div className="card-image waves-effect waves-block waves-light">
//                       <img className="activator" src="../images/owl.jpg" alt="bird with scroll" />
//                     </div>
//                     <div className="card-content">
//                       <a id="loginBtn" className="waves-effect waves-light btn" onClick={this.handleLogin}><i className="material-icons left">verified_user</i>Login</a>
//                       {/* <a id="logoutBtn" className="waves-effect waves-light btn"><i className="material-icons left">exit_to_app</i>Logout</a> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//       </div>
//     );
//   }

// }

export default Auth;