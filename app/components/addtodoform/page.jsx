import React, { useState } from "react";
import Input from "./input/page";
import Button from "./button/page";
import Card from "./card/page";
import { useEffect } from "react";

const AddForm = (props) => {
  const [saveName, setSaveName] = useState("");
  const [Surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [errorMessage, setErrorMessage] = useState({
    saveName: "",
    Surname: "",
    email: "",
    mobile: "",
    isValid: "",
  });
  const [buttonColor, setButtonColor] = useState("changeButtonColor");

  const handleInputChange = (e) => {
    setSaveName(e.target.value);
  };

  const handleTextAreaInput = (e) => {
    setSurname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const createUser = (e) => {
    e.preventDefault();

    props.onAddTeam({
      name: saveName,
      surname: Surname,
      email: email,
    });

    setSaveName("");
    setSurname("");
    setEmail("");
  };

  useEffect(() => {
    if (saveName.trim().length <= 2 && Surname.trim().length <= 2) {
      setErrorMessage((prevState) => ({
        ...prevState,
        saveName: "The name should have at least 3 characters!",
        Surname: "The surname should have at least 3 characters!",
        email: "Email should have at least 12 characters!",
        mobile: "Mobile should have at least 9 numbers!",
        isValid: true,
      }));
    } else if (saveName.trim().length <= 2) {
      setErrorMessage((prevState) => ({
        ...prevState,
        saveName: "The name should have at least 3 characters!",
        Surname: "",
        isValid: true,
      }));
    } else if (Surname.trim().length <= 2) {
      setErrorMessage((prevState) => ({
        ...prevState,
        saveName: "",
        Surname: "The surname should have at least 3 characters!",
        isValid: true,
      }));
    } else {
      setErrorMessage((prevState) => ({
        ...prevState,
        saveName: "",
        Surname: "",
        isValid: false,
      }));
    }
  }, [saveName, Surname]);

  useEffect(() => {
    if (errorMessage.isValid === true) {
      setButtonColor("changeButtonColor");
    } else {
      setButtonColor("primary-button");
    }
  }, [errorMessage]);

  return (
    <div>
      <Card>
        <h2 className="text-2xl font-bold">Create Account</h2>
        <form onSubmit={createUser}>
          <Input
            value={saveName}
            onChange={handleInputChange}
            placeholder="Name"
            type="text"
          />
          <span>{errorMessage.saveName}</span>
          <Input
            value={Surname}
            onChange={handleTextAreaInput}
            placeholder="Surname"
          />
          <span>{errorMessage.Surname}</span>
          <Input
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <span>{errorMessage.email}</span>
          <Input
            value={mobile}
            onChange={handleMobileChange}
            placeholder="Mobile"
          />
          <span>{errorMessage.mobile}</span>
          <Button
            className={` ${buttonColor} `}
            disabled={errorMessage.isValid}
            onClick={props.onCreateClick}
          >
            Create
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddForm;
