import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// define import paths
import Navbar from "./src/components/Navbar";
import Home from "./src/components/pages/Home";
import About from "./src/components/pages/About";
import AllStories from "./src/components/pages/AllStories";
// import Login from './src/components/pages/Login';

const App = () =>
  <Router>
    <div>
      {/* <Route path="/" component={Login} /> */}
      <Route exact path="/watson" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/AllStories" component={AllStories} />
    </div>
  </Router>;

export default App;