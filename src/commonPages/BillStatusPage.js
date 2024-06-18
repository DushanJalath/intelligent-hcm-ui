import React from "react";
import Sidebar from "../components/Sidebar";
import ManagerSidebar from "../components/ManagerSidebar";
import BillStatus from "../components/BillStatus";

export default function BillStatusPage() {
    const userType = localStorage.getItem('userType');
    const bills = [
        {
            billType: 'Electricity',
            status: 'Pending'
        },
        {
            billType: 'Internet',
            status: 'Paid'
        },
        {
            billType: 'Water',        
            status: 'Overdue'
        },
        {
            billType: 'Gas',
            status: 'Pending'
        },
        {
            billType: 'Rent',
            status: 'Paid'
        }
    ];
    return (
        <div>
            {userType === 'Employee' && <Sidebar />}
            {userType === 'Manager' && <ManagerSidebar />}
            <BillStatus title="Bill Status" className="bill-status" bills={bills} />
        </div>
    )
}
