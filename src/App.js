import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");

  const changeColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(changeColor)}
      >
        Change to {changeColor}
      </button>
    </div>
  );
}

export default App;
