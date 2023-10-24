import { useState } from "react";
import React from "react";
import Background from "./components/background/Background";

function App() {
  const [button, setButton] = useState(0);
  const [inputValue, setInputValue] = useState(null);
  const [nmbPeople, setNmbPeople] = useState(null);
  return (
    <>
      <Background
        setInputValue={setInputValue}
        inputValue={inputValue}
        button={button}
        setButton={setButton}
        nmbPeople={nmbPeople}
        setNmbPeople={setNmbPeople}
      />
    </>
  );
}

export default App;
