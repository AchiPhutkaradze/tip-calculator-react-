import "./background.css";
import React from "react";
import Logo from "../../assets/logo.svg";
import Container from "../container/Container";

function Background(props) {
  return (
    <>
      <div className="logo">
        <img src={Logo} />
      </div>

      <Container
        setInputValue={props.setInputValue}
        inputValue={props.inputValue}
        button={props.button}
        setButton={props.setButton}
        nmbPeople={props.nmbPeople}
        setNmbPeople={props.setNmbPeople}
      />
    </>
  );
}

export default Background;
