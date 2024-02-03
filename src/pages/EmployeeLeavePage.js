import React from "react";
import EmpLeave from '../components/EmpLeave';
import RemainingLeaves from '../components/RemainingLeaves';
import Sidebar from "../components/Sidebar";
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
        </div>
        
          
        </>
    )
}

export default EmployeeLeavePage