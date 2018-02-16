//sample layout for navpills to be used to get pages started, to be reviewed

import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
  {/*  if in / it makes className where you are / active */}
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
      {/* Link is componenet router-dom gives you */}
      {/* when you click it shos it active */}
    </li>
    <li className={window.location.pathname === "/about" ? "active" : ""}>
      <Link to="/about">About</Link>
    </li>
    {/* <li className={window.location.pathname === "/discover" ? "active" : ""}>
      <Link to="/discover">Discover</Link>
    </li> */}
    {/* <li className={window.location.pathname === "/search" ? "active" : ""}>
      <Link to="/search">Search</Link>
    </li>
     */}
  </ul>;

export default Navpills;
