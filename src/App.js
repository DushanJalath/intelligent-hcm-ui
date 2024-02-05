import React from 'react';
import { Route, Routes } from "react-router-dom"; 
import TimeReporting from "./components/TimeReporting"; /
import Settings from "./components/Settings"; 
import NewCandidateRootLayout from "./components/NewCandidateRootLayout";
import LeaveApprove from '../src/components/LeaveApprove';
import Overtime from './pages/employeeOvertimeTrackingPage';
import Manager from './pages/managerOvertimeTrackingPage'
import Vacan from './pages/employeeJobVacancypage'
import Details from './pages/employeeJobDetailsPage'
import HR from './pages/hrOvertimeTrackingPage'
function App() {
    return (
        <>
            <HR/>
        </>
    );

}

export default App;