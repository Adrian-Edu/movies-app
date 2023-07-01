"use client";

import AddForm from "../create-account/page";
import Modal from "../modal/page";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Input() {
  const [passowrdValidation, setPasswordValidation] = useState(false);

  const [formState, setFormState] = useState({
    isValid: false,
    emailValidation: false,
    isModalOpen: false,
  });

  const [customer, setCustomer] = useState(null);
  const [sender, setSender] = useState({
    email: "",
    password: "",
  });

  const closeModal = () => {
    setFormState({ ...formState, isModalOpen: false });
  };

  const openModal = () => {
    setFormState({ ...formState, isModalOpen: true });
  };

  const handleEmailInput = (e) => {
    setSender({ ...sender, email: e.target.value });
  };

  const handlePasswordInput = (e) => {
    setSender({ ...sender, password: e.target.value });
  };

  const onForward = (e) => {
    if (sender.email === "") {
      setFormState({ ...formState, emailValidation: true });
    } else if (sender.email.length < 15) {
      setFormState({ ...formState, emailValidation: true });
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

  useEffect(() => {
    if (formState.isModalOpen === false || sender.email === "") {
      if (formState.isModalOpen === false) {
        setCustomer(null);
      }
      if (sender.email === "") {
        setFormState({ ...formState, isValid: false });
      }
    }
  }, [formState.isModalOpen, sender.email]);

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
            {formState.emailValidation && sender.email.length < 15 ? (
              <div>
                <span style={{ color: `red` }}>
                  Email must have at least 15 characters!
                </span>
              </div>
            ) : null}

            {formState.isValid ? (
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

          {formState.isValid && sender.password.length > 10 ? (
            <>
              <Link href="/components/movies">
                <button className=" mt-3 mb-3 bg-cyan-400 py-2 px-16 md:px-36 rounded-lg border-2 border-stone-700 font-bold">
                  Log in
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={onForward}
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
        <Modal isOpen={formState.isModalOpen} onClose={closeModal}>
          {!customer ? <AddForm onCreateClick={openModal} /> : null}
        </Modal>
      </section>
    </>
  );
}
