import React from "react";

export const Col = ({size, props}) =>
  <div className={size.split(" ").map(size => "col" + size).join(" ")}>
    {props.children}
  </div>;
