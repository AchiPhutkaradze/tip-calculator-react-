import "./buttons.css";
import PropTypes from "prop-types";

Buttons.propTypes = {
  setButton: PropTypes.func.isRequired,
};
export default function Buttons(props) {
  const numbers = [5, 10, 15, 25, 50];

  return (
    <>
      <div className="buttons">
        <div className="select">
          <span className="title">Select Tip %</span>
        </div>
        {numbers.map((number) => {
          return (
            <button
              className="button"
              key={number}
              onClick={() => {
                props.setButton(number);
              }}
            >
              {`${number}%`}
            </button>
          );
        })}
        <input
          type="number"
          className="custom"
          placeholder="Custom"
          onChange={(e) => props.setButton(parseInt(e.target.value))}
        />
      </div>
    </>
  );
}
