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
<nav  className="teal lighten-2">
<div className="navigation">
    <ul id="dropdown1"  className="dropdown-content font-size=36px">
      {/* <li className={window.location.pathname === "/" ? "active" : ""}></li> */}
      <Link to="/">Home</Link>
      {/* <li className={window.location.pathname === "/about" ? "active" : ""}></li> */}
      <Link to="/about">About</Link>
      {/* <li className={window.location.pathname === "/" ? "active" : ""}></li> */}
      {/* <li className={window.location.pathname === "/StoryDetail" ? "active" : ""}></li> */}
      <Link to="/AllStories">Stories</Link>
      {/* <li className={window.location.pathname === "/" ? "active" : ""}></li> */}
    
    </ul>
  </div>

<div className="nav-wrapper teal lighten-2" id="navigation-bar">
			<a href="/" className="brand-logo center">
				<p className="site-title">ChatterDox</p>
			</a>
			<ul className="right">
				<li>
					<a className="dropdown-button" href="#!" data-activates="dropdown1">
						<i className="material-icons right" id="nav-icon">account_circle</i>
					</a>
				</li>
			</ul>
		</div>
  </nav>
export default Navbar;
