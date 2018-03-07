
import React, { Component } from 'react';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>

        <div className="container">
          <div className="row valign-wrapper">
            <div className="col l4 valign">
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src="./public/images/owl.jpg" alt="owl with book" />
                </div>
                <div className="card-content">
                  {
                    !isAuthenticated() && (
                      <a id="loginBtn" className="waves-effect waves-light btn" onClick={this.login.bind(this)}><i className="material-icons left">verified_user</i>Login</a>
                    )
                  }
                  {
                    isAuthenticated() && (
                      <a id="logoutBtn" className="waves-effect waves-light btn" onClick={this.logout.bind(this)}><i className="material-icons left">exit_to_app</i>Logout</a>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ReactDOM from 'react-dom';


// // define import paths
// import Home from "./src/components/pages/Home";
// import About from "./src/components/pages/About";
// import AllStories from "./src/components/pages/AllStories";
// import Login from "./src/components/pages/Login";

// if(document.getElementById("app")) {
//   ReactDom.render(
//     <div>
//       <Router>
//         <Route exact path="/login" component={Login}>
//         </Route>
//       </Router>
//     </div>
//   )
// }

// Page Component Navigation
// const App = () =>
//   <Router>
//     <div>
//       <Route path="/" component={Login} />
//       <Route exact path="/watson" component={Home} />
//       <Route exact path="/About" component={About} />
//       <Route exact path="/AllStories" component={AllStories} />
//     </div>
//   </Router>;

// export default App;