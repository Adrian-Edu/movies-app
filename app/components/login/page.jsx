"use client";
import AddForm from "../addtodoform/page";
import Modal from "../modal/page";
import { useState, useEffect } from "react";

export default function Input() {
  const [isValid, setValid] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [passowrdValidation, setPasswordValidation] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [customer, setCustomer] = useState(null);
  const [sender, setSender] = useState({
    email: "",
    password: "",
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleEmailInput = (e) => {
    setSender({ ...sender, email: e.target.value });
  };

  const handlePasswordInput = (e) => {
    setSender({ ...sender, password: e.target.value });
  };

  const onForword = (e) => {
    if (sender.email === "") {
      setEmailValidation(true);
    } else if (sender.email.length < 15) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
      setValid(true);
    }

    if (isValid && sender.password === "") {
      setPasswordValidation(true);
    } else if (isValid && sender.password < 10) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
    }

    e.preventDefault();
  };

  useEffect(() => {
    if (isOpen === false || sender.email === "") {
      if (isOpen === false) {
        setCustomer(null);
      }
      if (sender.email === "") {
        setValid(false);
      }
    }
  }, [isOpen, sender.email]);

  return (
    <>
      <section className=" flex justify-center content-center text-center my-32 w-5/5">
        <div className="bg-yellow-100 w-4/5 md:w-6/12 xl:w-3/12 rounded-md">
          <h1 className="text-2xl  mt-5 mb-3 font-bold">Authentification</h1>
          <h2 className="text-xl  mt-5 mb-3 ">
            The movie list can be viewed by logging in.
          </h2>
          <p className="text-xl mt-5 mb-2 ">Email</p>
          <form>
            <input
              onChange={handleEmailInput}
              className="py-2 md:pr-36 pl-3 mb-3 rounded-lg border-2  border-stone-700 font-bold "
              type="email"
              id="email"
              name="user_email"
              placeholder="Please insert your email"
              required
            ></input>
            {emailValidation && sender.email.length < 15 ? (
              <div>
                <span style={{ color: `red` }}>
                  Email must have at least 15 characters!
                </span>
              </div>
            ) : null}

            {isValid ? (
              <>
                <input
                  onChange={handlePasswordInput}
                  className="py-2 mt-3 md:pr-36 pl-3 mb-3  rounded-lg border-2  border-stone-700 font-bold "
                  type="password"
                  id="passowrd"
                  name="user_passowrd"
                  placeholder="Please insert your password"
                  required
                ></input>
                {passowrdValidation && sender.password.length < 10 ? (
                  <div>
                    <span style={{ color: `red` }}>
                      The password must have at least 10 characters!
                    </span>
                  </div>
                ) : null}
              </>
            ) : null}
          </form>

          {isValid && sender.password.length > 10 ? (
            <>
              <button className=" mt-3 mb-3 bg-cyan-400 py-2 px-16 md:px-36 rounded-lg border-2 border-stone-700 font-bold">
                Log in
              </button>
            </>
          ) : (
            <button
              onClick={onForword}
              className=" mt-3 mb-3 bg-cyan-400 py-2 px-16 md:px-36 rounded-lg border-2 border-stone-700 font-bold"
            >
              Forward
            </button>
          )}

          <p className="text-xl  mt-3 mb-3 ">You don't have an account?</p>
          <button
            onClick={openModal}
            className=" mb-3 bg-cyan-400 py-2 px-10 md:px-28 rounded-lg border-2 border-stone-700 font-bold"
          >
            Create account
          </button>
          <p className="text-xl  mt-2 mb-5 ">
            Login data is only stored for logging in !
          </p>
        </div>
        <Modal isOpen={isOpen} onClose={closeModal}>
          {!customer ? <AddForm onCreateClick={openModal} /> : null}
        </Modal>
      </section>
    </>
  );
}
