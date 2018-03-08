import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';


// define import paths
import Home from "./src/components/pages/Home";
import About from "./src/components/pages/About";
import AllStories from "./src/components/pages/AllStories";
import Login from "./src/components/pages/Login";

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
const App = () =>
  <Router>
    <div>
      <Route path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/AllStories" component={AllStories} />
    </div>
  </Router>;

export default App;