"use client";

import AddForm from "./modal/create-account/page";
import Modal from "./modal/page";
import { useState, useEffect, useRef } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Link from "next/link";
import { useStore } from "../../api/store";

export default function Input() {
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [visible, setVisible] = useState(false);

  const [formState, setFormState] = useState({
    isValid: false,
    emailValidation: false,
    emailExist: true,
    validPassword: false,
  });

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const emailInput = useRef();
  const resetInputEmail = () => (emailInput.current.value = "");
  const logIn = useStore((state) => state.logIn);
  const users = useStore((state) => state.users);
  const isModalOpen = useStore((state) => state.isModalOpen);
  const openModal = useStore((state) => state.openModal);

  const handleEmailInput = (e) => {
    setUserEmail(e.target.value.toLowerCase());
  };

  const handlePasswordInput = (e) => {
    setUserPassword(e.target.value);
  };

  const handleVisibilityChange = (e) => {
    setVisible((prevState) => !prevState);

    e.preventDefault();
  };

  const validemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);

  const onForward = (e) => {
    if (userEmail === "") {
      setFormState({ ...formState, emailValidation: true });
    } else if (userEmail.length < 12) {
      setFormState({ ...formState, emailValidation: true });
    } else if (!validemail) {
      setFormState({ ...formState, emailValidation: true });
    } else if (!users.some((item) => item.email === userEmail)) {
      setFormState({ ...formState, emailValidation: true });
      setFormState({ ...formState, emailExist: false });
    } else {
      setFormState({ ...formState, emailValidation: false });
      setFormState({ ...formState, isValid: true });
    }

    if (formState.isValid && userPassword === "") {
      setPasswordValidation(true);
    } else if (formState.isValid && userPassword < 10) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
    }

    e.preventDefault();
  };

  const changeState = () => {
    users.some((item) =>
      item.email === userEmail && item.password === userPassword
        ? logIn()
        : null
    );
  };

  useEffect(() => {
    if (userEmail === "" || !users.some((item) => item.email === userEmail)) {
      setFormState({ ...formState, isValid: false });
    }

    if (isModalOpen === true) {
      resetInputEmail();
      setFormState({ ...formState, isValid: false });
    }
  }, [isModalOpen, userEmail, userPassword]);

  return (
    <>
      <section className="h-full flex justify-center items-center text-center -mt-8 ">
        <div className="bg-yellow-100  w-4/5 md:w-5/12 xl:w-3/12 rounded-md">
          <h1 className="text-2xl  mt-5 mb-3 font-bold">Authentification</h1>
          <h2 className="text-xl mt-5 mb-3 mx-2 ">
            See the movie list by logging in.
          </h2>
          <p className="text-xl mt-3 mb-3 ">Email</p>
          <form>
            <div>
              <input
                onChange={handleEmailInput}
                className="py-2 pl-3 w-4/5 outline-0 bg-white border-2  border-stone-700 mb-3 rounded-xl box-border truncate font-normal"
                type="email"
                name="user_email"
                ref={emailInput}
                placeholder="Please insert your email ..."
              ></input>
              {formState.emailValidation && userEmail.length < 12 ? (
                <div>
                  <span style={{ color: `red` }}>
                    Email must have at least 12 characters!
                  </span>
                </div>
              ) : null}
              {userEmail.length > 11 &&
              !users.some((item) => item.email === userEmail) ? (
                <div>
                  <span style={{ color: `red` }}>
                    There is no account with this email address.
                  </span>
                </div>
              ) : null}
            </div>
            {formState.emailValidation &&
            userEmail.length > 11 &&
            !validemail ? (
              <div>
                <span style={{ color: `red` }}>
                  Email must contain @ and . !
                </span>
              </div>
            ) : null}

            {formState.isValid ? (
              <div className="pt-1 flex justify-center items-center flex-col ">
                <div className="flex justify-center   border-2  border-stone-700 font-bold w-90  bg-white w-4/5 outline-0 rounded-xl box-border truncate">
                  <input
                    onChange={handlePasswordInput}
                    className="truncate py-2 pl-3 w-4/5 outline-0  bg-white font-normal"
                    id="passowrd"
                    name="user_passowrd"
                    placeholder="Please insert your password ..."
                    type={visible ? "text" : "password"}
                  ></input>
                  <div className="pt-3 py-2 w-1/5">
                    <button onClick={handleVisibilityChange}>
                      {visible ? <IoIosEye /> : <IoIosEyeOff />}
                    </button>
                  </div>
                </div>

                {passwordValidation ? (
                  <div className="pt-2">
                    <span style={{ color: `red` }}>
                      The password must have at least 10 characters!
                    </span>
                  </div>
                ) : null}
                {userPassword.length > 9 &&
                !users.some(
                  (item) =>
                    item.password === userPassword && item.email === userEmail
                ) ? (
                  <div className="pt-2">
                    <span style={{ color: `red` }}>
                      The password you have provided is invalid!
                    </span>
                  </div>
                ) : null}
              </div>
            ) : null}
          </form>
          <div>
            {formState.isValid &&
            userPassword.length > 10 &&
            users.some(
              (item) =>
                item.password === userPassword && item.email === userEmail
            ) ? (
              <>
                <Link href="/">
                  <button
                    onClick={changeState}
                    className=" mt-3 mb-3 bg-cyan-400 py-2 w-4/5 rounded-lg border-2 border-stone-700 font-bold"
                  >
                    Log in
                  </button>
                </Link>
              </>
            ) : (
              <button
                onClick={onForward}
                className=" mt-3 mb-3 bg-cyan-400 py-2 w-4/5 rounded-lg border-2 border-stone-700 font-bold"
              >
                Next
              </button>
            )}
          </div>

          <p className="text-xl  mt-1 mb-3 ">You don't have an account?</p>
          <button
            onClick={openModal}
            className=" mb-3 bg-cyan-400 py-2 w-4/5 rounded-lg border-2 border-stone-700 font-bold"
          >
            Create account
          </button>
          <p className="text-xl mt-1 mb-5 mx-1 m:px-5 l:px-8 md:px-0  ">
            Data are stored only for logging in!
          </p>
        </div>
        <Modal>
          <AddForm />
        </Modal>
      </section>
    </>
  );
}
