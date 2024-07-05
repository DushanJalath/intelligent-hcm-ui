import Monthlyreport from "../components/Monthlyreport.js";
import Totalovertime from "../components/Totalovertime.js";
import TimeAndDate from "../components/TimeAndDate.js";
import "../styles/OvertimeTrackingPage.css";

import buttonImage from "../assets/bot.png";
import Modal from "react-modal";
import Chatbot from "../components/Chatbot.js";
import React, { useState } from "react";

export default function OverTimetrackingPage() {
  const userType = localStorage.getItem("userType");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="appcontainer">
      <div className="overtime-tracking-main-content">
        <div className="overtime-tracking-content-1">
          <TimeAndDate title="Time and Date" />
          <Totalovertime
            title="Remainings Overtime"
            url="http://127.0.0.1:8000/get_remaining_overtime"
          />
          <Totalovertime
            title="Total Overtime"
            url="http://127.0.0.1:8000/get_total_overtime"
          />
        </div>
        <div className="overtime-tracking-content-2">
          <Monthlyreport title="Monthly report" />
        </div>
        <div className="chat-bot-icon">
          <button className="round-button-chatbot" onClick={openModal}>
            <img
              src={buttonImage}
              alt="Button"
              className="button-image-chatbot"
            />
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{
              content: {
                top: "50%",
                left: "40%",
                right: "20%",
                bottom: "auto",
                marginRight: "100px",
                transform: "translate(-50%, -50%)",
                width: "80%", // Adjusted width for better responsiveness
                maxWidth: "600px",
                height: "80vh", // Adjusted height to fit better in the viewport
                padding: "0", // Remove default padding
                border: "none", // Remove default border
                borderRadius: "10px", // Match chatbot border-radius
                overflow: "hidden",
              },
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Add overlay color
              },
            }}
          >
            <Chatbot />
          </Modal>
        </div>
      </div>
    </div>
  );
}
