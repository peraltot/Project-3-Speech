import React from 'react';
import { Route, Router } from 'react-router-dom';
import Auth from '../pages/Auth';
import Home from '../pages/Home';
// import Auth from './Auth/Auth';
import history from './history';
import App from "../../App";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/watson" render={(props) => {
          handleAuthentication(props);
          return <Home {...props} /> 
        }}/>
      </div>
    </Router>
  );
}



// import history from "../history";

// export default {

//     // isAuthenticated: false,

//     isLoggedIn: function(x) {
//         return x;
//     },

//     handleAuthentication: function () {
//         return new Promise((resolve, reject) => {
//             var AUTH0_CLIENT_ID = 'lBSBehjiwfS3GUcbk2cWrMXJzy1v5Xzd';
//             var AUTH0_DOMAIN = 'msherman83.auth0.com';
//             var AUTH0_CALLBACK_URL = 'http://localhost:3000/watson';

//             var webAuth = new auth0.WebAuth({
//                 domain: AUTH0_DOMAIN,
//                 clientID: AUTH0_CLIENT_ID,
//                 redirectUri: AUTH0_CALLBACK_URL,
//                 audience: 'https://' + AUTH0_DOMAIN + '/userinfo',
//                 responseType: 'token id_token',
//                 scope: 'openid',
//                 leeway: 60
//             });

//             webAuth.authorize()

//             webAuth.parseHash(function (err, authResult) {
//                 if (authResult && authResult.accessToken && authResult.idToken) {
//                     // window.location.hash = '';
//                     setSession(authResult);
//                     history.replace("/watson");
//                 } else if (err) {
//                     history.replace("/");
//                     console.log(err);
//                 }
//             });

//             function setSession(authResult) {
//                 // Set the time that the access token will expire at
//                 let expiresAt = JSON.stringify(
//                     authResult.expiresIn * 1000 + new Date().getTime()
//                 );
//                 localStorage.setItem('access_token', authResult.accessToken);
//                 localStorage.setItem('id_token', authResult.idToken);
//                 localStorage.setItem('expires_at', expiresAt);
//                 // navigate to the watson route
//                 history.replace("/watson");
//             }

//             function logout() {
//                 // Clear Access Token and ID Token from local storage
//                 localStorage.removeItem("access_token");
//                 localStorage.removeItem("id_token");
//                 localStorage.removeItem("expires_at");
//                 // navigate to the login route
//                 history.replace("/");
//             }

//             function isAuthenticated() {
//                 // Check whether the current time is past the
//                 // Access token's expiry time
//                 var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
//                 return new Date().getTime() < expiresAt;
//             }
            
//         }).then(() => {
//             console.log("logged in");
//         })
//         .catch(err => {
//             console.log("error logging in");
//         })
//     }
// };
