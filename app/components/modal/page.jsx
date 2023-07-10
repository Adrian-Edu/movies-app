"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = (e) => {
    setIsOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

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
    <div className={`${isOpen ? "modal-wrapper" : "modal-hidden"}`}>
      <FontAwesomeIcon
        onClick={closeModal}
        icon={faTimesCircle}
        className="text-2xl absolute top-5 right-5 cursor-pointer text-yellow-300"
        aria-hidden="true"
      />
      <div className="z-1001"></div>
      {props.children}
    </div>
  );
};

export default Modal;

//proba
