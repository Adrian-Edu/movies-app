"use client";

import { React, useState } from "react";

function App() {
  const [changeName, setChangeName] = useState("Ex: Edu");
  const [changeLastName, setLastName] = useState("Ex: Adrian");
  const [changePhone, setChangePhone] = useState("Ex: +40 0766 775 420");
  const [changeDetails, setChangeDetails] = useState("Cum va putem ajuta?");
  const [showMessage, setShowMessage] = useState("");

  const handleName = (e) => {
    setChangeName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setChangePhone(e.target.value);
  };

  const handleMessage = (e) => {
    setChangeDetails(e.target.value);
  };

  const handleSubmit = (e) => {
    const newCandidate = [
      {
        Nume: changeName,
        Prenume: changeLastName,
        Mobil: changePhone,
        Mesaj: changeDetails,
      },
    ];

    console.log(newCandidate);

    setShowMessage(
      changeName +
        " " +
        changeLastName +
        " " +
        changePhone +
        " " +
        changeDetails
    );

    setChangeName("");
    setLastName("");
    setChangePhone("");
    setChangeDetails("");

    e.preventDefault();
  };

  const handleNameDefault = (e) => {
    setChangeName("");
  };

  const handleLastNameDefault = (e) => {
    setLastName("");
  };

  const handlePhoneDefault = (e) => {
    setChangePhone("");
  };

  const handleMessageDefault = (e) => {
    setChangeDetails("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="jr-container">
          <label>Nume</label>
          <input
            onClick={handleNameDefault}
            value={changeName}
            onChange={handleName}
            type="text"
          ></input>

          <label>Prenume</label>
          <input
            onClick={handleLastNameDefault}
            value={changeLastName}
            onChange={handleLastName}
            type="text"
          ></input>

          <label>Telefon</label>
          <input
            onClick={handlePhoneDefault}
            value={changePhone}
            onChange={handlePhone}
            type="text"
          ></input>

          <label>Mesaj</label>
          <input
            onClick={handleMessageDefault}
            value={changeDetails}
            onChange={handleMessage}
            className="message"
            type="text"
          ></input>

          <label className="submit"></label>
          <input type="submit"></input>
        </div>
      </form>

      <div className="show-message">
        {" "}
        <p> {showMessage} </p>{" "}
      </div>
    </div>
  );
}

export default App;
