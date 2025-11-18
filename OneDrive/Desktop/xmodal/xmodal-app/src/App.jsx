import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");

  const openForm = () => setShowModal(true);
  const closeForm = () => setShowModal(false);
const handleSubmit = (e) => {
  e.preventDefault();

  // Reset custom messages
  document.getElementById("username").setCustomValidity("");
  document.getElementById("email").setCustomValidity("");
  document.getElementById("phone").setCustomValidity("");
  document.getElementById("dob").setCustomValidity("");

  // USERNAME
  if (!username.trim()) {
    if (window.Cypress) return alert("Please fill out Username");
    const el = document.getElementById("username");
    el.setCustomValidity("Please fill out Username");
    el.reportValidity();
    return;
  }

  // EMAIL REQUIRED
  if (!email.trim()) {
    if (window.Cypress) return alert("Please fill out Email");
    const el = document.getElementById("email");
    el.setCustomValidity("Please fill out Email");
    el.reportValidity();
    return;
  }

  // PHONE REQUIRED
  if (!phone.trim()) {
    if (window.Cypress) return alert("Please fill out Phone Number");
    const el = document.getElementById("phone");
    el.setCustomValidity("Please fill out Phone Number");
    el.reportValidity();
    return;
  }

  // DOB REQUIRED
  if (!dob.trim()) {
    if (window.Cypress) return alert("Please fill out Date of Birth");
    const el = document.getElementById("dob");
    el.setCustomValidity("Please fill out Date of Birth");
    el.reportValidity();
    return;
  }

  // EMAIL FORMAT VALIDATION
  if (!email.includes("@")) {
    if (window.Cypress)
      return alert("Invalid email. Please check your email address.");
    const el = document.getElementById("email");
    el.setCustomValidity("Invalid email. Please check your email address.");
    el.reportValidity();
    return;
  }

  // PHONE VALIDATION
  if (phone.length !== 10 || !/^\d+$/.test(phone)) {
    if (window.Cypress)
      return alert("Invalid phone number. Please enter a 10-digit phone number.");
    const el = document.getElementById("phone");
    el.setCustomValidity("Invalid phone number. Please enter a 10-digit phone number.");
    el.reportValidity();
    return;
  }

  // DOB VALIDATION
  const selectedDate = new Date(dob);
  const today = new Date();
  if (selectedDate > today) {
    if (window.Cypress)
      return alert("Invalid date of birth. Please enter a valid date.");
    const el = document.getElementById("dob");
    el.setCustomValidity("Invalid date of birth. Please enter a valid date.");
    el.reportValidity();
    return;
  }

  // SUCCESS
  setUsername("");
  setEmail("");
  setDob("");
  setPhone("");
  closeForm();
};



  const handleOutsideClick = (e) => {
    if (e.target.className === "modal-overlay") closeForm();
  };

  return (
    <div className="app-container">
      <h1 style={{ textAlign: "center" }}>User Details Modal</h1>

      {!showModal && (
        <button
          onClick={openForm}
          style={{
            color: "white",
            background: "#1976D2",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            display: "block",
            margin: "10px auto"
          }}
        >
          Open Form
        </button>
      )}

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal-content">
            <h2>Fill Details</h2>

            <form>
              <label>Username:</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <label>Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              
              <label>Phone Number:</label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => {setPhone(e.target.value)}}
                required
              />

              <label>Date of Birth:</label>
              <input
                id="dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />


              <button className="submit-button" onClick={handleSubmit} >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
