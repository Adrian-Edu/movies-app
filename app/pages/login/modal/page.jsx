"use client";

import React, {  useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {  useStore } from "../../../api/store";

const Modal = (props) => {

  const isModalOpen = useStore((state) => state.isModalOpen);
  const closeModal = useStore((state) => state.closeModal);

  useEffect(() => {
    const escKey = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
      }
    };
    const clickOutside = (event) => {
      if (event.target.className === "modal-wrapper") {
        closeModal();
      }
    };

    document.addEventListener("keydown", escKey);
    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("keydown", escKey);
      document.removeEventListener("click", clickOutside);
    };
  });

  return (
    <div className={`${isModalOpen ? "modal-wrapper" : "modal-hidden"}`}>
      <div className="z-1001"></div>
      {props.children}
      <AiOutlineClose
        onClick={closeModal}
        className="text-2xl absolute top-5 right-5 cursor-pointer text-yellow-300"
        aria-hidden="true"
      />
    </div>
  );
};

export default Modal;
