import React, { useState } from "react";
import TimeAndDate from "../components/TimeAndDate.js";
import TodayWorkingHours from "../components/TodayWorkingHours.js";
import StartIntra from "../components/StartIntra.js";
import SetWorkingHours from "../components/SetWorkingHours.js";
import "../styles/employeeTimeAndReportingPageStyle.css";

import buttonImage from "../assets/bot.png";
import Modal from "react-modal";
import Chatbot from "../components/Chatbot.js";

function TimeAndReportingPage() {
  const userType = localStorage.getItem("userType");
  const [elapsedTime, setElapsedTime] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="time-report">
        <div className="timeDate">
          <TimeAndDate title="Time and Date" />
        </div>

        <div className="todayWorkingHours">
          <TodayWorkingHours title="Today Working Hours" time={elapsedTime} />
        </div>
      </div>

      <div className="start-intra">
        <StartIntra />
      </div>

      <div className="working-hours">
        <SetWorkingHours
          title="Select Project"
          getTodayWorkingHours={setElapsedTime}
        />
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
    </>
  );
}

export default TimeAndReportingPage;
