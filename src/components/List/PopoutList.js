import React from "react";
<<<<<<< HEAD
import CollapsibleItem from "react-materialize";
=======
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

>>>>>>> c88f40b351df31572f20b8cc7d2b1fe775da88a4

const PopoutList = props => {
    return (
        <div>
            <ul className="collapsible" data-collapsible="accordion">
                <li>
                {props.children}
                </li>
            </ul>
        </div>
    )
}

export default PopoutList;
