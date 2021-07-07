import React, { useState } from "react";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file
import { operators } from "../../../data";




const Operators = () => {
  // STEP 2 - add the imported data to state
  //const [operatorState, setOperatorState] = setState(operators);
  const [dataOp, setDataOp] = useState(operators);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {dataOp.map(operator => (
        <OperatorButton operator={operator.char} />
      ))}
    </div>
  );
};
export default Operators;
