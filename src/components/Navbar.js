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
    {/* <div className="navigation">
    <ul id="dropdown1"  className="dropdown-content font-size=36px">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/AllStories">Stories</Link>
    </ul>
  </div> */}

    <div className="nav-wrapper teal lighten-2" id="navigation-bar">  
			<a href="/" className="brand-logo right">
				<p className="site-title">ChatterDox</p>
			</a>
			{/* <ul className="right"> */}
			<ul id="nav-mobile" class="left hide-on-med-and-down">

				{/* <li> */}
				<a>
					{/* <a className="dropdown-button" href="#!" data-activates="dropdown1"> */}
					<i className="material-icons left" id="nav-icon"><Link to="/">Home</Link>
					</i>
					<i className="material-icons left" id="nav-icon">
					<Link to="/About">About</Link>
					 </i>
					<i className="material-icons left" id="nav-icon"> 
					<Link to="/AllStories">Stories</Link></i>
					</a>
				{/* </li> */}
			</ul>
		</div>
</nav>
export default Navbar;
