import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {

  loginModal() {
    fetch("/login")
    .then(data => {
      console.log(data)
    })
  };

  render() {
    return (
    <div>
    <button onClick={() => this.loginModal()}>Login to ChatterDox</button>
    </div>
    )
  }
}

// class Login extends Component {
//   render() {
//     return (
//       <div>
//       <button>Login to ChatterDox</button>
//       </div>
//     )
//   }
// }

export default Login;
