import React, { useState } from "react";
import Input from "./input/page";
import Button from "./button/page";
import Card from "./card/page";
import { useEffect } from "react";

export default function CreateUser(props) {
  const [userData, setUserData] = useState({
    name: "",
    surName: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    saveName: "",
    Surname: "",
    email: "",
    password: "",
    isValid: "",
  });

  const [buttonColor, setButtonColor] = useState("changeButtonColor");
  const [createAnUser, setcreateAnUser] = useState(false);

  const handleNameChange = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };

  const handleSurnameChange = (e) => {
    setUserData({ ...userData, surName: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };

  const createAccount = (e) => {
    e.preventDefault();

    //  props.onAddTeam({
    //     name: saveName,
    //   surname: Surname,
    //   email: email,
    // });

    // setSaveName("");
    // setSurname("");
    // setEmail("");
  };

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
        <form onSubmit={createAnUser}>
          <Input
            value={userData.name}
            onChange={handleNameChange}
            placeholder="Name"
            type="text"
          />
          <span>{errorMessage.saveName}</span>
          <Input
            value={userData.surName}
            onChange={handleSurnameChange}
            placeholder="Surname"
            type="text"
          />
          <span>{errorMessage.Surname}</span>
          <Input
            value={userData.email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <span>{errorMessage.email}</span>
          <Input
            value={userData.password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <span>{errorMessage.password}</span>
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
}

/*
  useEffect(() => {
    if (
      userData.name.trim().length <= 2 &&
      userData.surName.trim().length <= 2 &&
      userData.email.trim().length <= 11 &&
      userData.password.trim().length <= 11
    ) {
      setErrorMessage((prevState) => ({
        ...prevState,
        saveName: "The name should have at least 3 characters!",
        Surname: "The surname should have at least 3 characters!",
        email: "Email should have at least 12 characters!",
        password: "The password should have at least 9 numbers!",
        isValid: true,
      }));
    } else if (userData.name.trim().length <= 2) {
      setErrorMessage((prevState) => ({
        ...prevState,
        saveName: "The name should have at least 3 characters!",
        Surname: "",
        email: "",
        password: "",
        isValid: true,
      }));
    } else if (userData.surName.trim().length <= 2) {
      setErrorMessage((prevState) => ({
        ...prevState,
        saveName: "",
        Surname: "The surname should have at least 3 characters!",
        email: "",
        password: "",
        isValid: true,
      }));
    } else if (userData.email.trim().length <= 11) {
      setErrorMessage((prevState) => ({
        ...prevState,
        saveName: "",
        Surname: "",
        email: "The email should have at least 12 characters!",
        isValid: true,
      }));
    } else if (userData.password.trim().length <= 9) {
      setErrorMessage((prevState) => ({
        ...prevState,
        saveName: "",
        Surname: "",
        email: "",
        password: "The password should have at least 10 number!",
        isValid: true,
      }));
    } else {
      setErrorMessage((prevState) => ({
        ...prevState,
        saveName: "",
        Surname: "",
        email: "",
        password: "",
        isValid: false,
      }));
    }
  }, [userData.name, userData.surName, userData.email, userData.password]);


  */
