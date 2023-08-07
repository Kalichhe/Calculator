import React, { useState } from "react";
import "../index.css";

function Keys() {
  const [displayText, setDisplayText] = useState("0");

  const handleButtonClick = (buttonPressed) => {
    if (buttonPressed === "C" || buttonPressed === "Error!") {
      setDisplayText("0");
      return;
    } else if (buttonPressed === "←") {
      if (displayText.length === 1 || displayText === "Error!") {
        setDisplayText("0");
      } else {
        setDisplayText((prevText) => prevText.slice(0, -1));
      }
      return;
    } else if (buttonPressed === "=") {
      try {
        const result = eval(displayText);
        setDisplayText(result.toString());
      } catch (error) {
        setDisplayText("Error!");
      }
      return;
    } else if (buttonPressed === "%") {
      try {
        const result = parseFloat(displayText) / 100;
        setDisplayText(result.toString());
      } catch (error) {
        setDisplayText("Error!");
      }
      return;
    }

    if (displayText === "0" || displayText === "Error!") {
      setDisplayText(buttonPressed);
    } else {
      setDisplayText((prevText) => prevText + buttonPressed);
    }
  };

  return (
    <div className="calculator">
      <div className="screen"> {displayText} </div>
      <button id="c" className="btn" onClick={() => handleButtonClick("C")}>
        C
      </button>
      <button
        id="borrar"
        className="btn"
        onClick={() => handleButtonClick("←")}
      >
        ←
      </button>
      <button className="btn" onClick={() => handleButtonClick("%")}>
        %
      </button>
      <button className="btn" onClick={() => handleButtonClick("/")}>
        /
      </button>
      <button className="btn" onClick={() => handleButtonClick("7")}>
        7
      </button>
      <button className="btn" onClick={() => handleButtonClick("8")}>
        8
      </button>
      <button className="btn" onClick={() => handleButtonClick("9")}>
        9
      </button>
      <button className="btn" onClick={() => handleButtonClick("*")}>
        *
      </button>
      <button className="btn" onClick={() => handleButtonClick("4")}>
        4
      </button>
      <button className="btn" onClick={() => handleButtonClick("5")}>
        5
      </button>
      <button className="btn" onClick={() => handleButtonClick("6")}>
        6
      </button>
      <button className="btn" onClick={() => handleButtonClick("-")}>
        -
      </button>
      <button className="btn" onClick={() => handleButtonClick("1")}>
        1
      </button>
      <button className="btn" onClick={() => handleButtonClick("2")}>
        2
      </button>
      <button className="btn" onClick={() => handleButtonClick("3")}>
        3
      </button>
      <button className="btn" onClick={() => handleButtonClick("+")}>
        +
      </button>
      <button id="zero" className="btn" onClick={() => handleButtonClick("0")}>
        0
      </button>
      <button className="btn" onClick={() => handleButtonClick(".")}>
        .
      </button>
      <button id="equal" className="btn" onClick={() => handleButtonClick("=")}>
        {" "}
        ={" "}
      </button>
    </div>
  );
}

export default Keys;
