import React, { useEffect, useState } from "react";
import LeaveRequestForm from "../components/LeaveRequestForm";
import RemainingLeaves from "../components/RemainingLeaves";
import Sidebar from "../components/Sidebar";
import ManagerSidebar from "../components/ManagerSidebar";
import axios from "axios";

export default function RequestLeavePage() {
    const userType = localStorage.getItem('userType');
    const [leaveCounts, setLeaveCounts] = useState({
        SickLeaveCount: 0,
        AnnualLeaveCount: 0,
        CasualLeaveCount: 0
    });

    useEffect(() => {
        const fetchLeaveCounts = async () => {
            try {
                const accessToken = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8000/employee_remaning_leaves', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (response.status === 200) {
                    setLeaveCounts(response.data);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching leave counts:', error);
            }
        };

        fetchLeaveCounts();
    }, []);

    return (
        <div>
            {userType === 'Employee' && <Sidebar />}
            {userType === 'Manager' && <ManagerSidebar />}
            <LeaveRequestForm title="Request Leave" leaveCounts={leaveCounts} />
            <RemainingLeaves leaveCounts={leaveCounts} />
        </div>
    )
}
