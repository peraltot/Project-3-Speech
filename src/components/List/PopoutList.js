import React from "react";
import CollapsibleItem from "react-materialize";

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
