import React from "react";
import Sidebar from "../components/Sidebar";
import ManagerSidebar from "../components/ManagerSidebar";
import LeaveStatus from "../components/LeaveStatus";

export default function EmpLeaveStatusPage (){
    const userType = localStorage.getItem('userType');
    const leaves = [
        {
            leaveType: 'Personal Leave',
            startDate: '2020-10-10',
            endDate: '2020-10-15',
            status: 'Pending'
        },
        {
            leaveType: 'Sick Leave',
            startDate: '2020-11-05',
            endDate: '2020-11-07',
            status: 'Approved'
        },
        {
            leaveType: 'Vacation',
            startDate: '2021-01-20',
            endDate: '2021-01-25',
            status: 'Rejected'
        },
        {
            leaveType: 'Sick Leave',
            startDate: '2020-11-05',
            endDate: '2020-11-07',
            status: 'Approved'
        },
        {
            leaveType: 'Sick Leave',
            startDate: '2020-11-05',
            endDate: '2020-11-07',
            status: 'Rejected'
        }
    ];
    return(
        <div>
            {userType === 'Employee' && <Sidebar/>}
            {userType === 'Manager' && <ManagerSidebar/>}
                <LeaveStatus title="Leave Status" className="leave-status" leaves={leaves}/>
        </div>
    )
}
