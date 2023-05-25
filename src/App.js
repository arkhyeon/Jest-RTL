import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const changeColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonDisabled ? "gray" : buttonColor }}
        onClick={() => setButtonColor(changeColor)}
        disabled={buttonDisabled}
      >
        Change to {changeColor}
      </button>
      <label htmlFor="manageButton">
        Change Disable Property
        <input
          id="manageButton"
          type="checkbox"
          defaultChecked={buttonDisabled}
          onChange={() => setButtonDisabled((bd) => !bd)}
        />
      </label>
    </div>
  );
}

export default App;
