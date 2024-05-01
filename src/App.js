import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import LoginPage from "./fianalPages/LoginPage";
import TimeAndReportingPage from "../src/UI/employeePages/TimeAndReportingPage";
import ViewAttendancePage from "../src/UI/employeePages/ViewAttendancePage";
import RequestLeavePage from "./UI/common/RequestLeavePage";
import OvertimeTrackingPage from "../src/UI/employeePages/OvertimeTrackingPage";
import JobVacancyDetailsPage from "../src/UI/employeePages/JobVacancyDetailsPage";
import AddBillsPage from "../src/UI/employeePages/AddBillsPage";





function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />

            {/*Employee Routes*/}
            <Route path="/Time and Reporting Employee" element={<TimeAndReportingPage/>}/>
            <Route path="/Absence Management/View Attendance" element={<ViewAttendancePage/>}/>
            <Route path="/Absence Management/Request Leave" element={<RequestLeavePage/>}/>
            <Route path="/Overtime Tracking" element={<OvertimeTrackingPage/>}/>
            <Route path="/Job Vacancies" element={<JobVacancyDetailsPage/>}/>
            <Route path="/Add Bills" element={<AddBillsPage/>}/>

            {/*Manager Routes*/}
            <Route path="/Time and Reporting Manager" element={<TimeAndReportingPage1/>}/>




        </Routes>

    );
}

export default App;