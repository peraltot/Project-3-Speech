import React from "react";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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
