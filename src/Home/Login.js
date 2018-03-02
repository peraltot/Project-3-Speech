import React, { Component } from 'react';



class Login extends Component {


  loginModal() {
    res.redirect("/login")
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <button onClick={() => this.loginModal()} >Login to ChatterDox</button>
    </div >
    )
  }
}



  // login() {
  //   this.props.auth.login();
  // }
  // render() {
  //   const { isAuthenticated } = this.props.auth;
  //   return (
  //     <div className="container">
  //       {
  //         isAuthenticated() && (
  //             <h4>
  //               You are logged in!
  //             </h4>
  //           )
  //       }
  //       {
  //         !isAuthenticated() && (
  //             <h4>
  //               You are not logged in! Please{' '}
  //               <a
  //                 style={{ cursor: 'pointer' }}
  //                 onClick={this.login.bind(this)}
  //               >
  //                 Log In
  //               </a>
  //               {' '}to continue.
  //             </h4>
  //           )
  //       }
  //     </div>
  //   );
  // }


export default Login;
