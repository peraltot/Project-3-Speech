import React from "react";
import { Link } from "react-router-dom";

const Navbar = props =>
	<nav id="chatterdoxNav" role="navigation">
		<div className="nav-wrapper">
		<button id="title_2" className="base--button_clear">
			<span className="nav navbar-nav navbar-left"></span>
				<Link to="/">
					<span>
						<i className="material-icons" id="navIcons">home</i>
					Home</span>
				</Link>
		</button>
		<button id="title_2" className="base--button_clear">
			<span className="nav navbar-nav navbar-left"></span>
				<Link to="/about">
					<span>
						<i className="material-icons" id="navIcons">info</i>
					About</span>
				</Link>
		</button>
		<button id="title_2" className="base--button_clear">
			<span className="nav navbar-nav navbar-left"></span>
				<Link to="/allstories">
					<span>
						<i className="material-icons" id="navIcons">library_books</i>
					My Stories</span>
				</Link>
		</button>
		<span className="icon-bar"></span>
		<a id="title_1" className="nav navbar-nav navbar-center" href="/">ChatterDoX</a>
		</div>
	</nav>

export default Navbar;
