// HrJobVacancyStatusButtons.js
import React, { useState } from "react";
import SendEmail from './sendEmailToCandidate';
import Modal from "react-modal";
import axios from "axios";
import { ImCheckmark, ImCross } from "react-icons/im";
import "../styles/hrjobvacancystatusbuttons.css";
import "../styles/CandidateEmailModal.css"
import { set } from "date-fns";

Modal.setAppElement('#root');

export default function HrJobVacancyStatusButtons({ onStatusChange, id, endpointUrl }) {
  const [status, setStatus] = useState(null);
  const [modalIsOpen,setModalIsOpen]= useState(false);

  const openModal=()=>{
    setModalIsOpen(true);
  }

  const closeModal=()=>{
    setModalIsOpen(false);
  }

  const handleStatusChange = async (newStatus) => {
    setStatus(newStatus);

    const accessToken = localStorage.getItem("token");

    try {
      const response = await axios.put(
        endpointUrl.replace("{id}", id),
        { new_status: newStatus },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Response:", id, response.data.message);

      if (response.status === 200) {
        const data = response.data;
        onStatusChange(data.message);
      } else {
        throw new Error("Failed to update status");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };


  return (
    <div className="btn-types align-items-center">
      <div className="btn-panel flex ">
        {status === null && (
          <>
            <button className="img-button1" onClick={openModal}>
              Approve
            </button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
              <button className="modal-close" onClick={closeModal} >X</button>
            <SendEmail onEmailSent={()=>handleStatusChange('Approved')} c_id={id}/>
            </Modal>
            {/*<button className="img-button2" onClick={() => handleStatusChange("rejected")}>
              Reject
            </button>*/}
          </>
        )}
      </div>
      {status && <p className="btn-status">{status}</p>}
    </div>
  );
}
