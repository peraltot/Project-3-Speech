import React, { Component } from "react";
import WhatsonSpeechToText from '../../../views/whatson-speechtotext.jsx';

// Home is the callback component after authentication is handled
class Home extends Component {
  render() {
    return (
      <div>
        <WhatsonSpeechToText />
      </div>
    )
  }
}

export default Home;

// const Home = () =>
//     <div>
//   {/* <Navbar/> */}
//   <WhatsonSpeechToText/>
//   </div>;

// export default Home;
