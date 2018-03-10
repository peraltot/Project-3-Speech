import React from "react";

const StoryPanel = (props) =>
<div className="center-align">
    <div className="card" id="storyCards">
        <div className="card-content center-align black-text">
            {props.children}
        </div>
    </div>
</div>

export default StoryPanel;