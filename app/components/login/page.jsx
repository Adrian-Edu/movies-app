"use client";
import AddForm from "../addtodoform/page";
import Modal from "../modal/page";
import { useState, useEffect } from "react";

export default function page() {
  const [userExists, setUserExists] = useState(false);
  const [isValid, setValid] = useState(false);
  const [forwordValidation, setForwordValidation] = useState(false);
  const [sender, setSender] = useState({
    email: "",
    password: "",
  });

  const [editState, setEditState] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleEmailInput = (e) => {
    setSender({ ...sender, email: e.target.value });
  };

  const onForword = (e) => {
    if (sender.email !== "" && sender.email.length > 12) {
      setValid(true);
      setUserExists(true);
    }
    setForwordValidation(true);
    e.preventDefault();
  };

  useEffect(() => {
    if (isOpen === false) {
      setEditState(null);
    }
  }, [isOpen]);

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
            ></input>
            {forwordValidation && sender.email.length <= 12 ? (
              <div>
                <span style={{ color: `red` }}>
                  Email must have at least 12 characters!
                </span>
              </div>
            ) : null}

            {userExists && isValid ? (
              <input
                className="py-2 mt-3 md:pr-36 pl-3 mb-3  rounded-lg border-2  border-stone-700 font-bold "
                type="password"
                id="passowrd"
                name="user_passowrd"
                placeholder="Please insert your password"
              ></input>
            ) : null}
          </form>
          <button
            onClick={onForword}
            className=" mt-3 mb-3 bg-cyan-400 py-2 px-16 md:px-36 rounded-lg border-2 border-stone-700 font-bold"
          >
            Forward
          </button>
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
          {!editState ? <AddForm onCreateClick={openModal} /> : null}
        </Modal>
      </section>
    </>
  );
}
