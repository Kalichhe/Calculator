import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import "../style/Keys.css";

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
    <div className="calculator" >
      <div className="screen"> {displayText} </div>
      <Button id="c" variant="outline-danger" onClick={() => handleButtonClick("C")}>
        C
      </Button>
      <Button
        id="borrar"
        variant="outline-warning"
        onClick={() => handleButtonClick("←")}
      >
        ←
      </Button>
      <Button variant="outline-light" onClick={() => handleButtonClick("%")}>
        %
      </Button>
      <Button variant="outline-success" onClick={() => handleButtonClick("/")}>
        /
      </Button>
      <Button variant="outline-primary" onClick={() => handleButtonClick("7")}>
        7
      </Button>
      <Button variant="outline-primary" onClick={() => handleButtonClick("8")}>
        8
      </Button>
      <Button variant="outline-primary" onClick={() => handleButtonClick("9")}>
        9
      </Button>
      <Button variant="outline-info" onClick={() => handleButtonClick("*")}>
        *
      </Button>
      <Button variant="outline-primary" onClick={() => handleButtonClick("4")}>
        4
      </Button>
      <Button variant="outline-primary" onClick={() => handleButtonClick("5")}>
        5
      </Button>
      <Button variant="outline-primary" onClick={() => handleButtonClick("6")}>
        6
      </Button>
      <Button variant="outline-light" onClick={() => handleButtonClick("-")}>
        -
      </Button>
      <Button variant="outline-primary" onClick={() => handleButtonClick("1")}>
        1
      </Button>
      <Button variant="outline-primary" onClick={() => handleButtonClick("2")}>
        2
      </Button>
      <Button variant="outline-primary" onClick={() => handleButtonClick("3")}>
        3
      </Button>
      <Button variant="outline-warning" onClick={() => handleButtonClick("+")}>
        +
      </Button>
      <Button id="zero" variant="outline-light" onClick={() => handleButtonClick("0")}>
        0
      </Button>
      <Button variant="outline-primary" onClick={() => handleButtonClick(".")}>
        .
      </Button>
      <Button id="equal" variant="outline-danger" onClick={() => handleButtonClick("=")}>
        {" "}
        ={" "}
      </Button>
    </div>
  );
}

export default Keys;
