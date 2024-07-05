import Jobvacancy from "../components/newjobvacancies.js";
import "../styles/employeeJobVacancyPage.css";

import buttonImage from "../assets/bot.png";
import Modal from "react-modal";
import Chatbot from "../components/Chatbot.js";
import React, { useState } from "react";

export default function JobVacancyDetailsPage() {
  const userType = localStorage.getItem("userType");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <Jobvacancy title="Job Vacancies" className="leave-status" />
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
              width: "80%",
              maxWidth: "600px",
              height: "80vh",
              padding: "0",
              border: "none",
              borderRadius: "10px",
              overflow: "hidden",
            },
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <Chatbot />
        </Modal>
      </div>
    </div>
  );
}
