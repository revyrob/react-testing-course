import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [checkTrigger, setCheckTrigger] = useState(false);
  function changeColor() {
    color === "red" ? setColor("blue") : setColor("red");
  }
  function triggerDisable() {
    checkTrigger === false ? setCheckTrigger(true) : setCheckTrigger(false);
  }
  return (
    <>
      <button
        className={color}
        onClick={() => changeColor()}
        disabled={checkTrigger}
      >{`Change to ${color}`}</button>
      <input
        type="checkbox"
        id="buttonDisable"
        onClick={() => triggerDisable()}
      ></input>
      <label htmlFor="buttonDisable">Disable</label>
    </>
  );
}

export default App;
