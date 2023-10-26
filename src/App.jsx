import { useState } from "react";
import Container from "./components/container/Container";
import PropTypes from "prop-types";
import Logo from "./assets/logo.svg";
import "./app.css";

App.propTypes = {
  setInputValue: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  setButton: PropTypes.func.isRequired,
  nmbPeople: PropTypes.number.isRequired,
  setNmbPeople: PropTypes.func.isRequired,
};
function App() {
  const [button, setButton] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const [nmbPeople, setNmbPeople] = useState(null);
  const [anyNumber, setAnyNumber] = useState(null);
  return (
    <>
      <div className="logo">
        <img src={Logo} />
      </div>

      <Container
        setInputValue={setInputValue}
        inputValue={inputValue}
        button={button}
        setButton={setButton}
        nmbPeople={nmbPeople}
        setNmbPeople={setNmbPeople}
        anyNumber={anyNumber}
        setAnyNumber={setAnyNumber}
      />
    </>
  );
}

export default App;
