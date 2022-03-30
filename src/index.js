//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const today = new Date();
const time = today.getHours();
let greeting;

const customStyle = {
  color: "black"
};

if (time < 12) {
  greeting = "Good Morning!";
  customStyle.color = "red";
} else if (time > 12 && time < 18) {
  greeting = "Good Afternoon!";
  customStyle.color = "yellow";
} else {
  greeting = "Good Night!";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {" "}
      {greeting}{" "}
    </h1>
  </div>,
  document.getElementById("root")
);
