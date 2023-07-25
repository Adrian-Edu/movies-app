"use client";

import AddForm from "./modal/create-account/page";
import Modal from "./modal/page";
import { useState, useEffect } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Link from "next/link";
import { useStore } from "../../api/store";

export default function Input() {
  const [passowrdValidation, setPasswordValidation] = useState(false);
  const [visible, setVisible] = useState(false);

  const [formState, setFormState] = useState({
    isValid: false,
    emailValidation: false,
    emailExist: true,
  });

  const [sender, setSender] = useState({
    email: "",
    password: "",
  });

  const logIn = useStore((state) => state.logIn);
  const userExists = useStore((state) => state.existentUsers);
  const isModalOpen = useStore((state) => state.isModalOpen);
  const openModal = useStore((state) => state.openModal);
  const closeModal = useStore((state) => state.closeModal);

  const handleEmailInput = (e) => {
    setSender({ ...sender, email: e.target.value.toLowerCase() });
  };

  const handlePasswordInput = (e) => {
    setSender({ ...sender, password: e.target.value });
  };

  const handleVisibilityChange = (e) => {
    setVisible((prevState) => !prevState);

    e.preventDefault();
  };

  const validemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sender.email);

  const onForward = (e) => {
    if (sender.email === "") {
      setFormState({ ...formState, emailValidation: true });
    } else if (sender.email.length < 12) {
      setFormState({ ...formState, emailValidation: true });
    } else if (!validemail) {
      setFormState({ ...formState, emailValidation: true });
    } else if (userExists[0].email !== sender.email) {
      setFormState({ ...formState, emailValidation: true });
      setFormState({ ...formState, emailExist: false });
    } else {
      setFormState({ ...formState, emailValidation: false });
      setFormState({ ...formState, isValid: true });
    }

    if (formState.isValid && sender.password === "") {
      setPasswordValidation(true);
    } else if (formState.isValid && sender.password < 10) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
    }

    e.preventDefault();
  };

  const changeState = () => {
    if (
      userExists[0].email === sender.email &&
      userExists[0].password === sender.password
    ) {
      logIn();
    }
  };

  useEffect(() => {
    if (sender.email === "" || userExists[0].email !== sender.email) {
      setFormState({ ...formState, isValid: false });
    }
  }, [isModalOpen, sender.email, sender.password]);

  return (
    <>
      <section className=" flex justify-center content-center text-center mt-32">
        <div className="bg-yellow-100  w-4/5 md:w-6/12 xl:w-3/12 rounded-md">
          <h1 className="text-2xl  mt-5 mb-3 font-bold">Authentification</h1>
          <h2 className="text-xl  mt-5 mb-3 ">
            The movie list can be viewed by logging in.
          </h2>
          <p className="text-xl mt-5 mb-2 ">Email</p>

          <form>
            <div>
              <input
                onChange={handleEmailInput}
                className="py-2 pl-3 w-4/5 outline-0 bg-white border-2  border-stone-700 mb-3 rounded-xl box-border truncate"
                type="email"
                name="user_email"
                placeholder="Please insert your email ..."
              ></input>
              {formState.emailValidation && sender.email.length < 12 ? (
                <div>
                  <span style={{ color: `red` }}>
                    Email must have at least 12 characters!
                  </span>
                </div>
              ) : null}
              {sender.email.length > 11 &&
              userExists[0].email !== sender.email ? (
                <div>
                  <span style={{ color: `red` }}>
                    There is no account with this email address.
                  </span>
                </div>
              ) : null}
            </div>

            {formState.emailValidation &&
            sender.email.length > 11 &&
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
                    className="truncate py-2 pl-3 w-4/5 outline-0  bg-white"
                    id="passowrd"
                    name="user_passowrd"
                    placeholder="Please insert your password"
                    type={visible ? "text" : "password"}
                  ></input>
                  <div className="pt-3 py-2 w-1/5">
                    <button onClick={handleVisibilityChange}>
                      {visible ? <IoIosEye /> : <IoIosEyeOff />}
                    </button>
                  </div>
                </div>
                {passowrdValidation ? (
                  <div className="pt-2">
                    <span style={{ color: `red` }}>
                      The password must have at least 10 characters!
                    </span>
                  </div>
                ) : null}
                {sender.password.length > 9 &&
                userExists[0].password !== sender.password ? (
                  <div className="pt-2">
                    <span style={{ color: `red` }}>
                      The password you have provided is invalid!
                    </span>
                  </div>
                ) : null}
              </div>
            ) : null}
          </form>

          {formState.isValid &&
          sender.password.length > 10 &&
          userExists[0].password === sender.password ? (
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

          <p className="text-xl  mt-3 mb-3 ">You don't have an account?</p>
          <button
            onClick={openModal}
            className=" mb-3 bg-cyan-400 py-2 w-4/5 rounded-lg border-2 border-stone-700 font-bold"
          >
            Create account
          </button>
          <p className="text-xl  mt-2 mb-5 ">
            Login data is only stored for logging in !
          </p>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <AddForm onCreateClick={openModal} />
        </Modal>
      </section>
    </>
  );
}
