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

  const [errorMessage, setErrorMessage] = useState({
    name: false,
    surName: false,
    email: false,
    password: false,
    isValid: false,
    createUser: false,
  });

  const [visible, setVisible] = useState(false);
  const isModalOpen = useStore((state) => state.isModalOpen);

  const validemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);
  const [buttonColor, setButtonColor] = useState("changeButtonColor");

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
    if (
      userName === "" ||
      userSurName === "" ||
      userEmail === "" ||
      userPassword === ""
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
    if (userName.length > 2) {
      setErrorMessage({
        ...errorMessage,
        name: false,
      });
    } else if (userSurName.length > 2) {
      setErrorMessage({
        ...errorMessage,
        surName: false,
      });
    } else if (userEmail.length > 11) {
      setErrorMessage({
        ...errorMessage,
        email: false,
      });
    } else if (userPassword.length > 9) {
      setErrorMessage({
        ...errorMessage,
        password: false,
      });
    }

    if (
      userName.length > 2 &&
      userSurName.length > 2 &&
      userEmail.length > 11 &&
      userPassword.length >= 9
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
  }, [userName, userSurName, userPassword, userPassword]);

  useEffect(() => {
    if (!isModalOpen) {
      setUserName("");
      setUserEmail("");
      setUserSurName("");
      setUserPassword("");
    }
  }, [isModalOpen]);

  const handleVisibilityChange = (e) => {
    setVisible((prevState) => !prevState);

    e.preventDefault();
  };

  return (
    <div>
      <Card>
        <h2 className="text-2xl font-bold">Create Account</h2>
        <form onSubmit={() => {}}>
          <div className="flex justify-center items-center flex-col pt-2">
            <input
              className="py-1 pl-3  w-4/5 outline-0 bg-white border-2  border-stone-700 font-bold  rounded-xl box-border truncate"
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
            {errorMessage.email === true && userEmail.length < 12 ? (
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
            {errorMessage.password === true && userPassword.length < 10 ? (
              <div className="pt-2">
                <span>The password must have at least 10 characters!</span>
              </div>
            ) : null}
          </div>

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
