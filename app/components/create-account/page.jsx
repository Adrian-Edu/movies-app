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

  const [buttonColor, setButtonColor] = useState("changeButtonColor");

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
    if (errorMessage.isValid === false) {
      setButtonColor("changeButtonColor");
    } else {
      setButtonColor("primary-button");
    }

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
  }, [errorMessage]);

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

/*

AICI INCEPE COMPONENTA VECHE import React, { useState } from "react";
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
  };

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

  */
