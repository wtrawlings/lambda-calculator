import React, { useState } from "react";
import NumberButton from "./NumberButton";
//import any components needed

//Import your array data to from the provided data file
import { numbers } from "../../../data";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  ////Warren: setState is tracking the activity inside numberState and setNumberState for changes
  ////Warren: So what is numbers inside the argument at setState? The original array?
  const [data, setData] = useState(numbers);
  console.log(data);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {data.map((number, index) => (
        <NumberButton number={number} key={index} />
      ))}
    </div>
  );
};
export default Numbers;
