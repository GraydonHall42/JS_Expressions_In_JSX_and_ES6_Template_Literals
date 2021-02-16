import React from "react";
import ReactDOM from "react-dom";

//define variables to be inserted into HTML
const fName = "Graydon";
const lName = "Hall";

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <h1> {"Hello " + `${fName} ${lName}`}</h1>
    <h1> Hello {`${fName} ${lName}`}</h1>
    <p>Your Lucky Number is {38 + 4}</p>
    <p>Your Random Number of the day is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
