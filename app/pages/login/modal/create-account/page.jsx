"use client";

import { useState, useEffect, React } from "react";
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
  });

  const [visible, setVisible] = useState(false);
  const isModalOpen = useStore((state) => state.isModalOpen);
  const validemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);
  const [buttonColor, setButtonColor] = useState("changeButtonColor");
  const users = useStore((state) => state.users);
  const closeModal = useStore((state) => state.closeModal);

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
      userName.length > 2 &&
      userSurName.length > 2 &&
      userEmail.length > 9 &&
      userPassword.length > 9 &&
      validemail
    ) {
      setErrorMessage({
        ...errorMessage,
        name: false,
        surName: false,
        email: false,
        password: false,
        isValid: true,
      });
      setSubmitted(true);
    } else {
      setErrorMessage({
        ...errorMessage,
        name: true,
        surName: true,
        email: true,
        password: true,
        isValid: false,
      });
      setSubmitted(false);
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
      userEmail.length > 9 &&
      userPassword.length >= 9 &&
      validemail
    ) {
      setErrorMessage({
        ...errorMessage,
        name: false,
        surName: false,
        email: false,
        password: false,
        isValid: true,
      });
    } else {
      setErrorMessage({
        ...errorMessage,
        isValid: false,
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

    validemail ? console.log(true) : console.log(false);
  }, [userName, userSurName, userPassword, isModalOpen, submitted, validemail]);

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
            {errorMessage.email === true && userEmail.length < 10 ? (
              <span>The email should have at least 10 characters!</span>
            ) : null}
            {errorMessage.email === true &&
            userEmail.length > 8 &&
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
            type="submit"
            disabled={submitted}
          >
            Create user
          </Button>

          {submitted ? (
            <div className="flex justify-center ">
              <div className="flex flex-col w-4/5">
                <p className="py-1 text-lg bg-red-600 font-bold rounded-md">
                  You have successfully created your account!
                </p>
                <button
                  onClick={closeModal}
                  className="py-1 text-lg bg-lime-500 font-bold mt-2 rounded-md"
                >
                  Go back to login
                </button>
              </div>
            </div>
          ) : null}
        </form>
      </Card>
    </div>
  );
}
