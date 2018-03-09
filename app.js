import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import Home from "./src/components/pages/Home";
import About from "./src/components/pages/About";
import AllStories from "./src/components/pages/AllStories";
import Login from "./src/components/pages/Login";

// Page Component Navigation
const App = () =>
  <Router>
    <div>
      <Route path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/allstories" component={AllStories} />
    </div>
  </Router>;

export default App;