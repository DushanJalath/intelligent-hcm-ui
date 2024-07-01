import React from "react";
import Sidebar from "../components/Sidebar";
import ManagerSidebar from "../components/ManagerSidebar";
import LeaveStatus from "../components/LeaveStatus";

export default function EmpLeaveStatusPage (){
    const userType = localStorage.getItem('userType');
    return(
        <div>
            {userType === 'Employee' && <Sidebar/>}
            {userType === 'Manager' && <ManagerSidebar/>}
            <LeaveStatus title="Leave Status" className="leave-status" />
        </div>
    )
}
