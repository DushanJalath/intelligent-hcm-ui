import React from "react";
import Sidebar from "../components/Sidebar";
import ManagerSidebar from "../components/ManagerSidebar";
import HRSidebar from '../components/HRSidebar';
import StaffForm from "../components/StaffForm";
import { useLocation } from 'react-router-dom'; // Import useLocation hook from React Router DOM

export default function StaffFormPage() {
    const location = useLocation();
    const { vacancy_id } = location.state || {}; // Access vacancy_id from location state
    const userType = localStorage.getItem('userType');

    return (
        <div>
            {userType === 'Employee' && <Sidebar/>}
            {userType === 'Manager' && <ManagerSidebar/>}   
            {userType === 'HR' && <HRSidebar/>}   
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <StaffForm title="Apply for Vacancy" vacancy_id={vacancy_id} /> {/* Pass vacancy_id as a prop */}
            </div>
        </div>
    );
}
