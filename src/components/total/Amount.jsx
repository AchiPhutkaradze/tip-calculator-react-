import "./amount.css";
import PropTypes from "prop-types";

Amount.propTypes = {
  inputValue: PropTypes.number.isRequired,
  button: PropTypes.number.isRequired,
  nmbPeople: PropTypes.number.isRequired,
};

export default function Amount(props) {
  const tipAmount = (
    ((props.inputValue / 100) * props.button) /
    props.nmbPeople
  ).toFixed(2);

  const total = (props.inputValue / props.nmbPeople + props.inputValue);

  console.log(tipAmount);

  const reset = () => {
    props.setInputValue(null);
    props.setNmbPeople(null);
    props.setButton(null);
  };

  //custom functionalization
  console.log(props.reset);
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
            // onChange={(e) => props.setReset(e.target.textContent)}
          >
            {!isNaN(tipAmount) && isFinite(tipAmount) ? tipAmount : "$00.00"}
          </div>
        </div>
        <div className="total-person">
          <p className="total x">
            Total <br />
            <span id="person">/person</span>
          </p>
          <span className="number">
            {!isNaN(total) && isFinite(total) ? total : "$00.00"}
          </span>
        </div>
        <button className="reset" onClick={reset}>
          RESET
        </button>
      </div>
    </>
  );
}
