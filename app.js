import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// define import paths

import Navbar from "./src/components/Navbar";


import Home from "./src/components/pages/Home";
// import About from "./components/pages/About";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} /> */}
    </div>
  </Router>;

export default App;
