import React from "react";
import { Link } from "react-router-dom";

// Navbar = React.createClass({
//   componentDidMount() {

//   },
//   render() {
//     return (
//       <nav>
//         <div className="nav-wrapper">
//           <a href="/" className="brand-logo">ChatterDocs</a>
//           <ul id="nav-mobile" className="right hide-on-med-and-down">
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About</a></li>
//             <li><a href="/StoryDetial">StoreyDetail</a></li>
//           </ul>
//         </div>
//       </nav>
//     )
//   }
// });

const Navbar = props =>
<div>
<nav>
  <div className="nav-wrapper">
    <a href="/" className="brand-logo">ChatterDocs</a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">


      <li className={window.location.pathname === "/" ? "active" : ""}></li>
      <Link to="/">Home</Link>
      <li className={window.location.pathname === "/about" ? "active" : ""}></li>
      <Link to="/about">About</Link><li className={window.location.pathname === "/" ? "active" : ""}></li>
      <li className={window.location.pathname === "/StoryDetail" ? "active" : ""}></li>
      <Link to="/StoryDetail">Stories</Link><li className={window.location.pathname === "/" ? "active" : ""}></li>

      {/* <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/StoryDetial">StoreyDetail</a></li> */}


    </ul>
  </div>
</nav>
</div>;

export default Navbar;
