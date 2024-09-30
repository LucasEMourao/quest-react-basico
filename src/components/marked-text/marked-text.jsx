import React from "react";
import "./marked-text.css";

const MarkedText = (props) => {
  return (
    <>
      <div
        className="marked-text"
        style={{ color: props.color, textTransform: props.textTransform }}
      >
        {props.children}
      </div>

    </>
  );
};

MarkedText.defaultProps = {
  color: "red",
  textTransform: "uppercase",
};

export default MarkedText;
