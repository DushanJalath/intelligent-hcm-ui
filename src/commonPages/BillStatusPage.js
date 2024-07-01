import React from "react";
import Sidebar from "../components/Sidebar";
import ManagerSidebar from "../components/ManagerSidebar";
import BillStatus from "../components/BillStatus";

export default function BillStatusPage() {
    const userType = localStorage.getItem('userType');

       return (
            <div> 
                {userType === 'Employee' && <Sidebar />}
                {userType === 'Manager' && <ManagerSidebar />}
                <BillStatus title="Bill Status" className="bill-status"/>
            </div>
    );
}
