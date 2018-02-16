import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>
<nav>
<div className="nav-wrapper">
  <a href="#!" className="brand-logo">Logo</a>
  <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
  <ul className="right hide-on-med-and-down">
    <li className={window.location.pathname === "/" ? "active" : ""}>Home</li>
    <Link to="/">Home</Link>
      {/* Link is componenet router-dom gives you */}
      {/* when you click it shos it active */}
    <li><a href="badges.html">About</a></li>
  </ul>
  <ul className="side-nav" id="mobile-demo">
    <li><a href="sass.html">Home</a></li>
    <li><a href="badges.html">About</a></li>
  </ul>
</div>
</nav>;

// const Navpills = () =>
//   <ul className="nav nav-tabs">
//   {/*  if in / it makes className where you are / active */}
//     <li className={window.location.pathname === "/" ? "active" : ""}>
//       <Link to="/">Home</Link>
//       {/* Link is componenet router-dom gives you */}
//       {/* when you click it shos it active */}
//     </li>
//     <li className={window.location.pathname === "/about" ? "active" : ""}>
//       <Link to="/about">About</Link>
//     </li>
//     {/* <li className={window.location.pathname === "/discover" ? "active" : ""}>
//       <Link to="/discover">Discover</Link>
//     </li> */}
//     <li className={window.location.pathname === "/search" ? "active" : ""}>
//       <Link to="/search">Search</Link>
//     </li>
    
//   </ul>;

export default Navbar;
