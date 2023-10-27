import "./amount.css";
import PropTypes from "prop-types";

Amount.propTypes = {
  inputValue: PropTypes.any,
  button: PropTypes.any,
  nmbPeople: PropTypes.any,
  setInputValue: PropTypes.any,
  setButton: PropTypes.any,
  setNmbPeople: PropTypes.any,
  reset: PropTypes.any,
};

export default function Amount(props) {
  const tipAmount = (
    ((Number(props.inputValue) / 100) * Number(props.button)) /
    Number(props.nmbPeople)
  ).toFixed(2);

  const total = (
    Number(props.inputValue) / Number(props.nmbPeople) +
    Number(tipAmount)
  ).toFixed(2);

  const reset = () => {
    props.setInputValue("");
    props.setNmbPeople("");
    props.setButton("");
  };

  return (
    <>
      <div className="box">
        <div className="tip-amount">
          <p className="tipAmount x">
            Tip Amount <br />
            <span id="person">/person</span>
          </p>
          <div className="number">
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
