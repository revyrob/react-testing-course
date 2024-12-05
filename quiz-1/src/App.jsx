import { useState } from "react";
import "./App.scss";
import { kebabCaseToTitleCase } from "./helper";

function App() {
  //I need this stated for showing disabled or not and defaults to false
  const [disabled, setDisabled] = useState(false);
  //here is the color change state that defaults to red
  const [clickColor, setClickColor] = useState("medium-violet-red");
  //I need a function that updates if the button is disabled
  const nextColor =
    clickColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const newButtonColor = disabled ? "grey" : clickColor;

  return (
    <>
      <label htmlFor="checkbox" name="disable" id="disableCheckBox1">
        Disable Button
      </label>
      <input type="checkbox" onClick={(e) => setDisabled(e.target.checked)} />
      <button
        disabled={disabled}
        className={newButtonColor}
        onClick={() => setClickColor(nextColor)}
      >
        {kebabCaseToTitleCase(newButtonColor)}
      </button>
    </>
  );
}

export default App;
