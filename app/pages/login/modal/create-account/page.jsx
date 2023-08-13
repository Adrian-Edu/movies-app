"use client";

import React from "react";
import { useState, useEffect } from "react";
import Button from "../../../../components/button/page";
import Card from "../../../../components/card/page";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useStore } from "../../../../api/store";

export default function CreateUser(props) {
  const [userName, setUserName] = useState("");
  const [userSurName, setUserSurName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [errorMessage, setErrorMessage] = useState({
    name: false,
    surName: false,
    email: false,
    password: false,
    isValid: false,
    createUser: false,
    disabled: false,
  });

  const [visible, setVisible] = useState(false);
  const isModalOpen = useStore((state) => state.isModalOpen);
  const validemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);
  const [buttonColor, setButtonColor] = useState("changeButtonColor");
  const users = useStore((state) => state.users);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setUserSurName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value.toLowerCase());
  };

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const createAccount = (e) => {
    if (userName < 2 || userSurName < 2 || userEmail < 11 || userPassword < 9) {
      setErrorMessage({
        ...errorMessage,
        name: true,
        surName: true,
        email: true,
        password: true,
        isValid: false,
      });
    } else if (
      userName.length > 2 &&
      userSurName.length > 2 &&
      userEmail.length > 11 &&
      userPassword.length > 9
    ) {
      setErrorMessage({
        ...errorMessage,
        name: false,
        surName: false,
        email: false,
        password: false,
        isValid: true,
      });
    }

    if (errorMessage.isValid === true) {
      users.push({
        id: "",
        name: userName,
        surname: userSurName,
        email: userEmail,
        password: userPassword,
      });
      setUserName("");
      setUserEmail("");
      setUserSurName("");
      setUserPassword("");
      setSubmitted(true);
    }

    if (submitted === true) {
      setErrorMessage({
        ...errorMessage,
        name: false,
        surName: false,
        email: false,
        password: false,
        isValid: false,
      });
    }

    e.preventDefault();
  };

  useEffect(() => {
    if (
      userName.length > 2 &&
      userSurName.length > 2 &&
      userEmail.length > 11 &&
      userPassword.length >= 9
    ) {
      setErrorMessage({
        ...errorMessage,
        name: false,
        surName: false,
        email: false,
        password: false,
        isValid: true,
      });
    }

    if (errorMessage.isValid === false) {
      setButtonColor("changeButtonColor");
    } else {
      setButtonColor("primary-button");
    }

    if (!isModalOpen) {
      setUserName("");
      setUserEmail("");
      setUserSurName("");
      setUserPassword("");
      setErrorMessage({ ...errorMessage, isValid: false });
      setSubmitted(false);
      setErrorMessage({
        ...errorMessage,
        name: false,
        surName: false,
        email: false,
        password: false,
        isValid: false,
      });
    }

    if (submitted === true) {
      setButtonColor("changeButtonColor");
    }
  }, [
    userName,
    userSurName,
    userPassword,
    userPassword,
    isModalOpen,
    submitted,
  ]);

  const handleVisibilityChange = (e) => {
    setVisible((prevState) => !prevState);

    e.preventDefault();
  };

  return (
    <div>
      <Card>
        <h2 className="text-2xl font-bold">Create Account</h2>
        <form onSubmit={createAccount}>
          <div className="flex justify-center items-center flex-col pt-2">
            <input
              className="py-1 pl-3 w-4/5 outline-0 bg-white border-2  border-stone-700 font-bold rounded-xl box-border truncate"
              value={userName}
              onChange={handleNameChange}
              placeholder="Name"
              type="text"
            />
            {errorMessage.name === true && userName.length < 3 ? (
              <span>The name should have at least 3 characters!</span>
            ) : null}
          </div>

          <div className="flex justify-center items-center flex-col pt-1">
            <input
              className="py-1 pl-3 w-4/5 outline-0 bg-white border-2  border-stone-700 font-bold rounded-xl box-border truncate"
              value={userSurName}
              onChange={handleSurnameChange}
              placeholder="Surname"
              type="text"
            />
            {errorMessage.surName === true && userSurName.length < 3 ? (
              <span>The surname should have at least 3 characters!</span>
            ) : null}
          </div>

          <div className="flex justify-center items-center flex-col pt-1">
            <input
              className="py-1 pl-3 w-4/5 outline-0 bg-white border-2  border-stone-700 font-bold   rounded-xl box-border truncate "
              value={userEmail}
              onChange={handleEmailChange}
              placeholder="Email"
            />
            {errorMessage.email === true && userEmail.length < 11 ? (
              <span>The email should have at least 12 characters!</span>
            ) : null}
            {errorMessage.email === true &&
            userEmail.length > 11 &&
            !validemail ? (
              <span>The email should contain @ and .</span>
            ) : null}
          </div>

          <div className="pt-1 flex justify-center items-center flex-col ">
            <div className="flex justify-center   border-2  border-stone-700 font-bold  bg-white w-4/5 outline-0 rounded-xl box-border truncate">
              <input
                value={userPassword}
                onChange={handlePasswordChange}
                className="truncate py-2 pl-3 w-4/5 outline-0  bg-white text-m"
                id="passowrd"
                name="user_passowrd"
                placeholder="Please insert your password"
                type={visible ? "text" : "password"}
              ></input>
              <div className="pt-2.5 w-1/5">
                <button onClick={handleVisibilityChange}>
                  {visible ? <IoIosEye /> : <IoIosEyeOff />}
                </button>
              </div>
            </div>
            {errorMessage.password === true && userPassword.length <= 9 ? (
              <div className="pt-2">
                <span>The password must have at least 10 characters!</span>
              </div>
            ) : null}
          </div>

          <Button className={` ${buttonColor} `} type="submit">
            Create user
          </Button>

          <div className="flex justify-center items-center">
            {submitted ? (
              <div
                className="w-4/5 py-1 text-lg"
                style={{
                  backgroundColor: "red",
                  fontWeight: 700,
                  height: "4.5%",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                You have successfully created your account!
              </div>
            ) : null}
          </div>
        </form>
      </Card>
    </div>
  );
}
