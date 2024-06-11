import Sidebar from "../components/Sidebar";
import ManagerSidebar from "../components/ManagerSidebar";
import React from 'react';
import SendBill from '../components/SendBill';
import '../styles/addBillsPage.css';

function AddBillsPage(params) {
    const userType = localStorage.getItem('userType');
    return (
        <>
            {userType === 'Employee' && <Sidebar/>}
            {userType === 'Manager' && <ManagerSidebar/>}
            <div className="add-bills-page">
                <div className="bills-container">
                    <SendBill title="Send Bill" userType={userType} className="send-bill"/>
                </div>
            </div>
        </>
    );
}

export default AddBillsPage;
