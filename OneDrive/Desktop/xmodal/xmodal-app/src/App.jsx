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

  // Required field validation
  if (!username.trim()) return alert("Please fill out Username");
  if (!email.trim()) return alert("Please fill out Email");
  if (!phone.trim()) return alert("Please fill out Phone Number");
  if (!dob.trim()) return alert("Please fill out Date of Birth");

  // Email validation
  if (!email.includes("@"))
    return alert("Invalid email. Please check your email address.");

  // Phone validation
  if (phone.length !== 10 || !/^\d+$/.test(phone))
    return alert("Invalid phone number. Please enter a 10-digit phone number.");

  // DOB validation
  const selectedDate = new Date(dob);
  const today = new Date();
  if (selectedDate > today)
    return alert("Invalid date of birth. Please enter a valid date.");

  // Success → clear + close modal
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
