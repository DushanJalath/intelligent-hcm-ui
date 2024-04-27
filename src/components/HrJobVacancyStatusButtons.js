import React, { useState } from "react";
import { ImCheckmark, ImCross } from "react-icons/im";
import "../styles/hrjobvacancystatusbuttons.css";
import axios from "axios";

export default function HrJobVacancyStatusButtons({ onStatusChange, vacancy_id }) {
  const [status, setStatus] = useState(null);

  const handleStatusChange = async (newStatus) => {
    setStatus(newStatus);

    const url = `http://127.0.0.1:8000/update_hr_vacancy/${vacancy_id}`;
    const accessToken = localStorage.getItem("token");

    try {
      const response = await axios.put(
        url,
        { new_status: newStatus },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        onStatusChange(data.message);
      } else {
        throw new Error("Failed to update vacancy status");
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
            <button
              className="img-button1"
              onClick={() => handleStatusChange("approved")}
            >
              Approve
            </button>

            <button
              className="img-button2"
              onClick={() => handleStatusChange("rejected")}
            >
              Reject
            </button>
          </>
        )}
      </div>
      {status && <p className="btn-status">{status}</p>}
    </div>
  );
}
