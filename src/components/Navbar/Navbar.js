import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

const Navbar = props =>



	<div className = 'dope-nav-bar'>
		<Link className="logo" to="/">
			ChatterDox
		</Link>

			<ul>
				<li
					className={
						window.location.pathname === "/home" ? "active" : ""
					}
				>
					<Link to="/">Home</Link>
				</li>
				<li
					className={
						window.location.pathname === "/about" ? "active" : ""
					}
				>
					<Link to="/about">About</Link>
				</li>
				<li
					className={
						window.location.pathname === "/AllStories" ? "active" : ""
					}
				>
					<Link to="/AllStories">View All Stories</Link>
				</li>

			</ul>

		</div>

export default Navbar;
