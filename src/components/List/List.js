import React from "react";

export const List = props => {
    return (
        <div>
            <ul className="collection">
                {...props}
            </ul>
        </div>
    );
};