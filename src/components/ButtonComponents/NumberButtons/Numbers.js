import React, { useState } from "react";
import NumberButton from "./NumberButton";
//import any components needed

//Import your array data to from the provided data file
import { numbers } from "../../../data";



const Numbers = props => {
  // STEP 2 - add the imported data to state
  ////Warren: setState is tracking the activity inside numberState and setNumberState for changes
  ////Warren: So what is numbers inside the argument at setState? The original array?
  const [dataNum, setDataNum] = useState(numbers);
  console.log(dataNum);
  return (
    <div className = "numberControl">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {dataNum.map((number, index) => (
        <NumberButton
          number={number}
          key={index}
          display={props.display}
          setDisplay={props.setDisplay}
        />
      ))}
    </div>
  );
};
export default Numbers;
