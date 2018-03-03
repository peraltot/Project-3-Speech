import React from "react";
import { Link } from "react-router-dom";
import {Button, Icon} from "react-materialize";


// Navbar = React.createClass({
//   componentDidMount() {

//   },
//   render() {
// return (
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
	//  {/* <nav  className="teal lighten-2"> */ }
	// {/* <div className="navigation">
	// <ul id="dropdown1"  className="dropdown-content font-size=36px">
	//   <Link to="/">Home</Link>
	//   <Link to="/About">About</Link>
	//   <Link to="/AllStories">Stories</Link>
	// </ul>
	// {/* //   </div> */} */}

	// {<div className="nav-wrapper teal lighten-2" id="navigation-bar">  
	// <a href="/" className="brand-logo right">
	// <p className="site-title">ChatterDox</p>
	// </a>
	// {/* <ul className="right"> */ }
	// {/* <ul id="nav-mobile" class="left hide-on-med-and-down"> */ }

	// {/* <li> */ }
	// <a>
	// {/* <a className="dropdown-button" href="#!" data-activates="dropdown1"> */ }
	// {/* <i className="material-icons left" id="nav-icon"><Link to="/">Home</Link> */ }
	// {/* </i> */ }
	// {/* <i className="material-icons left" id="nav-icon"> */ }
	// {/* <Link to="/About">About</Link> */ }
	// {/* </i> */ }
	// {/* <i className="material-icons left" id="nav-icon">  */ }
	// {/* <Link to="/AllStories">Stories</Link></i> */ }
	// </a >
	// {/* </li> */ }
	// {/* </ul> */ }
	// {/* </div> */ }
	// {/* // </nav> */ } 
	// <div className="main-container">
		< nav className="navbar navbar-default" role="navigation" >
			{/* <div className="container-fluid"> */}
				{/* <div className="navbar-header"> */}
					<button className="base--button_clear">
					<span className="nav navbar-nav navbar-left"></span>
						{/* <span className="sr-only">Toggle navigation</span> */}
						{/* <span className="icon-bar"><a className="nav navbar-nav navbar-left"><Link to="/">Home</Link></a></span> */}
						{/* <span className="icon-bar"><Link to="/">Home</Link></span> */}
						<Link to="/"><Icon>home</Icon></Link>
					</button>
					<button className="base--button_clear">
						<span className="nav navbar-nav navbar-left"></span><Link to="/About"><Icon>group</Icon></Link>
					</button>
					<button className="base--button_clear">
						<span className="nav navbar-nav navbar-left"></span><Link to="/AllStories"><Icon>assignment</Icon></Link>
					</button>
					<span className="icon-bar"></span>
			{/* </button> */}
				{/* <ul className="nav navbar-nav navbar-left"> */}
				{/* <a className="nav navbar-nav navbar-left"><Link to="/">Home__  </Link></a> */}
				{/* <a className="nav navbar-nav navbar-left"><Link to="/About">About__  </Link></a> */}
				{/* <a className="nav navbar-nav navbar-left"><Link to="/AllStories">Stories</Link></a> */}
				<a className="nav navbar-nav navbar-center" id="title_1" href="#">ChatterDoX</a>
				{/* </ul> */}
			{/* </div> */}

			{/* <div className="collapse navbar-collapse navbar-ex1-collapse">
			<ul className="nav navbar-nav navbar-left">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/About">About</Link></li>
				<li><Link to="/AllStories">Stories</Link></li>
			</ul>
		</div> */}
	{/* </div> */}
</nav >
// </div >
//    )
//  }
//    });

export default Navbar;
