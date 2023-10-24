import "./buttons.css";
export default function Buttons(props) {
  const numbers = [5, 10, 15, 25, 50];
  console.log(props.button);
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
        <input type="number" className="custom" placeholder="Custom" />
      </div>
    </>
  );
}
