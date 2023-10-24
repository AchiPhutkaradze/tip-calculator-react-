import "./amount.css";
import React, { useRef, useEffect } from "react";

export default function Amount(props) {
  const divRef = useRef(null);
  useEffect(() => {
    if (divRef.current) {
      let textContent = divRef.current.textContent;
    }
  });
  console.log(divRef.current);

  function reset() {
    return null;
  }
  // console.log(divRef.current);

  return (
    <>
      <div className="box">
        <div className="tip-amount">
          <p className="tipAmount x">
            Tip Amount <br />
            <span id="person">/person</span>
          </p>
          <div
            className="number"
            ref={divRef}
            onChange={() => {
              reset;
            }}
          >
            {((props.inputValue / 100) * props.button) / props.nmbPeople}
          </div>
        </div>
        <div className="total-person">
          <p className="total x">
            Total <br />
            <span id="person">/person</span>
          </p>
          <span className="number">{props.inputValue / props.nmbPeople}</span>
        </div>
        <button className="reset" onClick={reset}>
          RESET
        </button>
      </div>
    </>
  );
}
