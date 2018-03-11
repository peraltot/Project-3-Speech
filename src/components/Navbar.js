import React from "react";
import { Link } from "react-router-dom";

const Navbar = props =>
	<nav id="chatterdoxNav" role="navigation">
		<div className="nav-wrapper">
			<span className="nav navbar-nav navbar-left" id="navbarLinkSpans"></span>
				<Link to="/" id="navbarLinks">
					<span >
						<i className="material-icons" id="navIcons">home</i>
					Home</span>
				</Link>
			<span className="nav navbar-nav navbar-left" id="navbarLinkSpans"></span>
				<Link to="/about" id="navbarLinks">
					<span>
						<i className="material-icons" id="navIcons">info</i>
					About</span>
				</Link>
			<span className="nav navbar-nav navbar-left" id="navbarLinkSpans"></span>
				<Link to="/allstories" id="navbarLinks">
					<span>
						<i className="material-icons" id="navIcons">library_books</i>
					My Stories</span>
				</Link>
		<span className="icon-bar"></span>
		<a id="chatterdoxLogo" className="nav navbar-nav navbar-center" href="/">ChatterDoX</a>
		</div>
	</nav>

export default Navbar;
