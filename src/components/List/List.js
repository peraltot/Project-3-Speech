import React from "react";

export const List = ({ children }) => {
    return (
        <div>
            <ul className="collection">
                {children}
            </ul>
        </div>
    );
};