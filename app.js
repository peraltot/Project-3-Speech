import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// define import paths

<<<<<<< Updated upstream
import Navpills from "./components/Navpills";
=======

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/', api);
const stt = new watson.SpeechToTextV1({
  // if left undefined, username and password to fall back to the SPEECH_TO_TEXT_USERNAME and
  // SPEECH_TO_TEXT_PASSWORD environment properties, and then to VCAP_SERVICES (on Bluemix)
  // username: '',
  // password: ''
});
>>>>>>> Stashed changes


import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";

const App = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} /> */}
    </div>
  </Router>;

export default App;
