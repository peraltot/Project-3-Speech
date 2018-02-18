import React from "react";

const StoryPanel = ({ children }) =>
    <div className="card blue-grey darken-1">
        <div className="card-content white-text">
            {children}
        </div>
    </div>

export default StoryPanel;
