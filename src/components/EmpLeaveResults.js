import React, { useState, useEffect } from "react";
import "../styles/empleaveresult.css";
import api from '../api';

function EmpLeaveResults() {
  const [leaveresult, setLeaveresult] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("token");
        console.log("Access Token:", accessToken);

        const response = await api.get(
          "/predictResult",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log("Response:", response.data);
        setLeaveresult(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container123">
      <div className="container123-menu">
        <p className="container123-title">Today Leaves Result</p>
      </div>
      <div className="blockemp">
        <div className="dataemp">
          <p>Today Total Attendance&nbsp;&nbsp;</p>:
          <div className="numberemp">
            {leaveresult.Today_predicted_attendance}
          </div>
        </div>
        <div className="dataemp">
          <p>
            Today Total Leave
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          </p>
          <div className="numberemp">{leaveresult.Today_Total_Leave}</div>
        </div>
        <div className="dataemp">
          <p>Today Predicted Leave&nbsp;&nbsp;&nbsp;&nbsp;</p>:
          <div className="numberemp">{leaveresult.Today_Predicted_Leave}</div>
        </div>
        <div className="dataemp">
          <p>Total Employee Count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>:
          <div className="numberemp">{leaveresult.total_empolyee_count}</div>
        </div>
      </div>
    </div>
  );
}

export default EmpLeaveResults;
