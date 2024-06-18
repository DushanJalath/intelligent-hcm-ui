import React from "react";
import LeaveRequestForm from "../components/LeaveRequestForm";
import RemainingLeaves from "../components/RemainingLeaves";
import Sidebar from "../components/Sidebar";
import ManagerSidebar from "../components/ManagerSidebar";


export default function RequestLeavePage (){
    const userType = localStorage.getItem('userType');
    return(
        <div>
            {userType === 'Employee' && <Sidebar/>}
            {userType === 'Manager' && <ManagerSidebar/>}
                <LeaveRequestForm title="Request Leave"/>
                <RemainingLeaves />
        </div>
    )
}