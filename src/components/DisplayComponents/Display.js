import React from "react";

const Display = props => {
  return (
    <div className="display">
      {/* Display any props data here */}
      {props.number}
      {props.operator}
    </div>
  );
};

export default Display;
