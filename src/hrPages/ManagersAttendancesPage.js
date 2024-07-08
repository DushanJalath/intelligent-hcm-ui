import ManagersAttendances from "../hrPages/ManagersAttendances.js";
import { React, useState } from "react";
import buttonImage from "../assets/bot.png";
import Modal from "react-modal";
import Chatbot from "../components/Chatbot.js";

export default function ContactPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <ManagersAttendances title="Manager Attendance Today" />
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
  );
}
