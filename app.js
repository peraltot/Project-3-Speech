import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// define import paths

import Navbar from "./src/components/Navbar";
import Home from "./src/components/pages/Home";
import About from "./src/components/pages/About";
import AllStories from "./src/components/pages/AllStories";
import Login from './src/Home/Login';
import history from './src/history';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}



const App = () =>
  <Router history={history}>
    <div>
      <Navbar />
      <Route path="/" render={(props) => <App auth={auth} {...props} />} />
      <Route exact path="/watson" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/allstories" component={AllStories} />
    </div>
  </Router>;

export default App;

