import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const changeColor = buttonColor === "red" ? "blue" : "red";

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
