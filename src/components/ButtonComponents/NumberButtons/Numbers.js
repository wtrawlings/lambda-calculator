import React from "react";

//import any components needed

//Import your array data to from the provided data file
import { numbers } from "../../../data";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  //Warren: setState is tracking the activity inside numberState and setNumberState for changes
  //Warren: So what is numbers inside the argument at setState?
  const [numberState, setNumberState] = setState(numbers);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
