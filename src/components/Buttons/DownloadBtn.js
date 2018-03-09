import React from "react";

export const DownloadBtn = props =>
    <a className="btn-floating btn-large waves-effect waves-light">
        <i className="material-icons">cloud_download</i>
        {...props}
    </a>

export default DownloadBtn;