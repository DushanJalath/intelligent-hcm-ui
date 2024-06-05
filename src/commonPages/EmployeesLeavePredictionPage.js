import React from "react";
import HRSidebar from "../components/HRSidebar";
import ManagerSidebar from "../components/ManagerSidebar";
import LeavePredictionchart from "../components/LeavePredictionchart";
import TimeAndDate from "../components/TimeAndDate";
import "../styles/hrleavepredictionpage.css";
import EmpLeaveResults from "../components/EmpLeaveResults";

export default function EmployeesLeavePredictionPage() {
  const userType = localStorage.getItem("userType");
  return (
    <>
      {userType === "Manager" && <ManagerSidebar />}
      {userType === "HR" && <HRSidebar />}

      <div className="hr-leave-predict">
        <div className="Leave_section">
          <div className="manager-leave">
            <div className="leave-page-title1">
              <TimeAndDate className="leave-page-date" title="Time and Date" />
            </div>
            <div className="emp-leave-title2">
              <EmpLeaveResults />
            </div>
          </div>
          <LeavePredictionchart />
        </div>
      </div>
    </>
  );
}
