import { Button } from "@mui/material";
import React, { useState } from "react";

function Ratingpoint({ question, score, sentScore }) {
  const points = [1, 2, 3, 4, 5];

  const[clickedvalue,setClickedvalue]=useState("")

  const handlePointClick = (point) => {
    console.log("Question:", question, "points", point);
    
     sentScore(point);
    //  setClickedvalue(point)

  };

//   console.log(clickedvalue,"clicks");

  const circleStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "40px",
    cursor: "pointer",
    marginRight: "5px",
  };

  return (
   <>
    <div>
      <div className="full-div">
        {/* <div></div> */}
        <p>{question}</p>
        <div
          className="black-back"
          style={{
            background: "#fff",
            padding: "2px",
            borderRadius: "50px",
            width: "100%",
            border: "1px solid black",
          }}
        >
          <div
            className="numbers"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            {points.map((point) => (
              <div
                key={point}
                style={{
                  ...circleStyle,
                  background: point === score ? "blue" : "#fff",
                  color: point === score ? "#fff" : "#777",
                }}
                onClick={() => handlePointClick(point)}
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   
  
   </>
   
  );
}

export default Ratingpoint;
