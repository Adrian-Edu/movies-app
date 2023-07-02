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
    name: false,
    surName: false,
    email: false,
    password: false,
    isValid: false,
    createUser: false,
  });

  const validemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email);
  const [buttonColor, setButtonColor] = useState("changeButtonColor");

  const handleNameChange = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };

  const handleSurnameChange = (e) => {
    setUserData({ ...userData, surName: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUserData({ ...userData, email: e.target.value.toLowerCase() });
  };

  const handlePasswordChange = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };

  const createAccount = (e) => {
    if (
      userData.name === "" ||
      userData.surName === "" ||
      userData.email === "" ||
      userData.password === ""
    ) {
      setErrorMessage({
        ...errorMessage,
        name: true,
        surName: true,
        email: true,
        password: true,
        isValid: false,
      });
    }
    e.preventDefault();
  };

  useEffect(() => {
    if (userData.name.length > 2) {
      setErrorMessage({
        ...errorMessage,
        name: false,
      });
    } else if (userData.surName.length > 2) {
      setErrorMessage({
        ...errorMessage,
        surName: false,
      });
    } else if (userData.email.length > 11) {
      setErrorMessage({
        ...errorMessage,
        email: false,
      });
    } else if (userData.password.length > 9) {
      setErrorMessage({
        ...errorMessage,
        password: false,
      });
    }

    if (
      userData.name.length > 2 &&
      userData.surName.length > 2 &&
      userData.email.length > 11 &&
      userData.password.length > 9
    ) {
      setErrorMessage({ ...errorMessage, isValid: true });
    } else {
      setErrorMessage({ ...errorMessage, isValid: false });
    }

    if (errorMessage.isValid === false) {
      setButtonColor("changeButtonColor");
    } else {
      setButtonColor("primary-button");
    }
  }, [userData]);

  return (
    <div>
      <Card>
        <h2 className="text-2xl font-bold">Create Account</h2>
        <form onSubmit={() => {}}>
          <Input
            value={userData.name}
            onChange={handleNameChange}
            placeholder="Name"
            type="text"
          />
          {errorMessage.name === true && userData.name.length < 3 ? (
            <span>The surname should have at least 3 characters!</span>
          ) : null}

          <Input
            value={userData.surName}
            onChange={handleSurnameChange}
            placeholder="Surname"
            type="text"
          />
          {errorMessage.surName === true && userData.surName.length < 3 ? (
            <span>The surname should have at least 3 characters!</span>
          ) : null}
          <Input
            value={userData.email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          {errorMessage.email === true && userData.email.length < 12 ? (
            <span>The email should have at least 12 characters!</span>
          ) : null}
          {errorMessage.email === true &&
          userData.email.length > 11 &&
          !validemail ? (
            <span>The email should contain @ and .</span>
          ) : null}
          <Input
            value={userData.password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          {errorMessage.password === true && userData.password.length < 10 ? (
            <span>The password should have at least 10 characters!</span>
          ) : null}
          <Button
            className={` ${buttonColor} `}
            disabled={errorMessage.isValid}
            onClick={createAccount}
          >
            Create
          </Button>
        </form>
      </Card>
    </div>
  );
}
