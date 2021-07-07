import React from "react";

const Display = props => {
  console.log(props);
  //const [data, setData] = useState(display);

  return (
    <div className="display">
      {/* Display any props data here */}
      {props.display}
    </div>
  );
};

export default Display;
