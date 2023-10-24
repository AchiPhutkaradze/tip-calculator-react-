import React from "react";
import "./container.css";
import Buttons from "../buttons/Buttons";
import Amount from "../total/total";
// import Person from "../../assets./icon-person.svg";
function Container(props) {
  // console.log(props.inputValue);
  // console.log(props.nmbPeople);
  return (
    <>
      <div className="container">
        <div className="bill-input-div">
          <span className="input title">Bill</span>
          <input
            type="number"
            className="first-input"
            value={props.inputValue}
            onChange={(e) => props.setInputValue(e.target.value)}
            placeholder="0"
          />
        </div>
        <Buttons button={props.button} setButton={props.setButton} />
        <div className="second-input-div">
          <span className="input title">Number of People</span>
          <input
            type=" number"
            className="second-input"
            placeholder="0"
            value={props.nmbPeople}
            onChange={(e) => props.setNmbPeople(e.target.value)}
          ></input>
        </div>
        <Amount
          setInputValue={props.setInputValue}
          inputValue={props.inputValue}
          nmbPeople={props.nmbPeople}
          setNmbPeople={props.setNmbPeople}
          button={props.button}
          setButton={props.setButton}
        />
      </div>
    </>
  );
}
export default Container;
