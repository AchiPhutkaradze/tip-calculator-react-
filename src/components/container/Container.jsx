import "./container.css";
import Buttons from "../buttons/Buttons";
import Amount from "../total/Amount";
import PropTypes from "prop-types";

Container.propTypes = {
  button: PropTypes.any,
  setButton: PropTypes.any,
  inputValue: PropTypes.any,
  setInputValue: PropTypes.any,
  nmbPeople: PropTypes.any,
  setNmbPeople: PropTypes.any,
};

function Container(props) {
  return (
    <>
      <div className="container">
        <div className="div-desk">
          <div className="bill-input-div">
            <span className="input title">Bill</span>
            <span className="error">
              {props.inputValue == 0
                ? "Can’t be zero"
                : props.inputValue < 0
                ? "can't be below  zero"
                : ""}
            </span>
            <input
              type="number"
              className="bill-input"
              value={props.inputValue}
              onChange={(e) => props.setInputValue(e.target.value)}
              placeholder="0"
            />
          </div>
          <Buttons
            button={props.button}
            setButton={props.setButton}
            anyNumber={props.anyNumber}
            setAnyNumber={props.setAnyNumber}
          />
          <div className="second-input-div">
            <span className="input title">Number of People</span>
            <span className="error">
              {props.nmbPeople == 0
                ? "Can’t be zero"
                : props.nmbPeople < 0
                ? "can't be below  zero"
                : ""}
            </span>
            <input
              type="number"
              className="peoples-input"
              placeholder="0"
              value={props.nmbPeople}
              onChange={(e) => props.setNmbPeople(e.target.value)}
            ></input>
          </div>
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
