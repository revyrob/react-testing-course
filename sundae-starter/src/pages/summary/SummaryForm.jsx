import { useState } from "react";
import "./Summary.scss";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function SummaryForm() {
  const [disabledBtn, setDisabledBtn] = useState(true);
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will be delivered</Popover.Body>
    </Popover>
  );
  const termsHover = (
    <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
      <span>Terms and Conditions</span>
    </OverlayTrigger>
  );
  return (
    <form className="summaryForm">
      <div>
        <input
          onClick={() => setDisabledBtn((prev) => !prev)}
          type="checkbox"
          id="checkboxSubmit"
        />{" "}
        <label htmlFor="checkboxSubmit">I agree to {termsHover}</label>
      </div>
      <button disabled={disabledBtn} type="submit">
        Confirm order
      </button>
    </form>
  );
}
