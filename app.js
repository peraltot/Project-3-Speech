import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// define import paths


import Navpills from "./src/components/Navpills";

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
import Home from "./src/components/pages/Home";

import About from "./src/components/pages/About";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";

const App = () =>
<div>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
   
    </div>
  </Router>
  </div>;

export default App;
