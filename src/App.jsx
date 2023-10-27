import { useState } from "react";
import Container from "./components/container/Container";
import PropTypes from "prop-types";
import Logo from "./assets/logo.svg";
import "./app.css";

App.propTypes = {
  setInputValue: PropTypes.any,
  inputValue: PropTypes.any,
  button: PropTypes.any,
  setButton: PropTypes.any,
  nmbPeople: PropTypes.any,
  setNmbPeople: PropTypes.any,
};
function App() {
  const [button, setButton] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [nmbPeople, setNmbPeople] = useState("");
  const [anyNumber, setAnyNumber] = useState("");
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
