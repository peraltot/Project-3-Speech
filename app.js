
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// define import paths

import Navpills from "./src/components/Navpills";

import Home from "./src/components/pages/Home";

import About from "./src/components/pages/About";

// import Search from "./components/pages/search";
// import Contact from "./components/pages/Contact";

const App = () =>
<div>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      {/* <Route exact path="/search" component={Search} /> */}
      
   
    </div>
  </Router>
  </div>;

export default App;
