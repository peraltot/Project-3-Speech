import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>
  <nav>
    <div className="nav-wrapper">
      {/* <a href="#!" className="brand-logo">Logo</a> */}
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="left hide-on-med-and-down">
        {/* <li className={window.location.pathname === "/" ? "active" : ""}></li> */}
        {/* </ul> */}
        <ul className={window.location.pathname === "/" ? "active" : ""}></ul>
        <Link to="/">Home</Link>
        {/* Link is componenet router-dom gives you */}
        {/* when you click it shos it active */}
        {/* <ul className="right hide-on-med-and-down"> */}
        <ul className={window.location.pathname === "/about" ? "active" : ""}></ul>
        <Link to="/about">About</Link>
        <ul className={window.location.pathname === "/StoryDetail" ? "active" : ""}></ul>
        <Link to="/StoryDetail">Stories</Link>
      </ul>
      {/* <ul className="side-nav" id="mobile-demo">
        <li className={window.location.pathname === "/" ? "active" : ""}>Home</li>
        <Link to="/">Home</Link>
        {/* Link is componenet router-dom gives you */}
        {/* when you click it shos it active */}
        {/* <li className={window.location.pathname === "/about" ? "active" : ""}>About</li>
        <Link to="/">Home</Link> */}
      {/* </ul> */} */}
    </div>
  </nav>;

export default Navbar;
