import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// define import paths

import Navbar from "./src/components/Navbar";
import Home from "./src/components/pages/Home";
import About from "./src/components/pages/About";
import AllStories from "./src/components/pages/AllStories";


const App = () =>
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/watson" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/allstories" component={AllStories} />
      </Switch>
    </div>
  </Router>;

export default App;

