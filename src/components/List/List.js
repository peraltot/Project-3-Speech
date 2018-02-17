import React from "react";
import "./List.css";

export const List = ({ children }) => {
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4>Your Saved Stories</h4>
            </li>
            {children}
        </ul>
    );
};
