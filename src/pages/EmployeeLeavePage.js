import React from "react";
import EmpLeave from '../components/EmpLeave';
import RemainingLeaves from '../components/RemainingLeaves';
import Sidebar from "../components/Sidebar";
import LeaveStatus from "../components/LeaveStatus";
import '../styles/EmployeeLeavePage.css';

const EmployeeLeavePage=()=>{
    return(
        <>
        <div className="emp-leave-page">
        
            <Sidebar/>

            <div className="main-container">
                <EmpLeave title="Request Leave"/>
            </div>

            <div className="sub-container">
                <RemainingLeaves title="Remaining Leaves"/>
            </div>

            <div className="leave-status">
                <LeaveStatus title="Leave Status"/>
            </div>
        </div>
        
          
        </>
    )
}

export default EmployeeLeavePage