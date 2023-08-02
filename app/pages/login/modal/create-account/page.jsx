"use client";

import React from "react";
import { useState, useEffect } from "react";
import Button from "../../../../components/button/page";
import Card from "../../../../components/card/page";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useStore } from "../../../../api/store";

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

  const [visible, setVisible] = useState(false);
  const isModalOpen = useStore((state) => state.isModalOpen);

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
      userData.password.length >= 9
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

  useEffect(() => {
    isModalOpen ? console.log("Modal deschis") : console.log("Modal Inchis");
  });

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
              value={userData.name}
              onChange={handleNameChange}
              placeholder="Name"
              type="text"
            />
            {errorMessage.name === true && userData.name.length < 3 ? (
              <span>The name should have at least 3 characters!</span>
            ) : null}
          </div>

          <div className="flex justify-center items-center flex-col pt-1">
            <input
              className="py-1 pl-3 w-4/5 outline-0 bg-white border-2  border-stone-700 font-bold rounded-xl box-border truncate"
              value={userData.surName}
              onChange={handleSurnameChange}
              placeholder="Surname"
              type="text"
            />
            {errorMessage.surName === true && userData.surName.length < 3 ? (
              <span>The surname should have at least 3 characters!</span>
            ) : null}
          </div>

          <div className="flex justify-center items-center flex-col pt-1">
            <input
              className="py-1 pl-3 w-4/5 outline-0 bg-white border-2  border-stone-700 font-bold   rounded-xl box-border truncate "
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
          </div>

          <div className="pt-1 flex justify-center items-center flex-col ">
            <div className="flex justify-center   border-2  border-stone-700 font-bold  bg-white w-4/5 outline-0 rounded-xl box-border truncate">
              <input
                value={userData.password}
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
            {errorMessage.password === true && userData.password.length < 10 ? (
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
