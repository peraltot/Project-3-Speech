import React from "react";

const PopoutList = ({children}) => {
    return (
        <div>
            <ul className="collapsible popout" data-collapsible="accordion">
                {children}
            </ul>
        </div>
    );
};

export default PopoutList;