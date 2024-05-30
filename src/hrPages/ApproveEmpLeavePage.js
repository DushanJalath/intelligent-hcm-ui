import { Route, Routes } from "react-router-dom";
import TimeReporting from "../components/TimeReporting"
import Settings from "../components/Settings"
import HRRootLayout from "../components/HRRootLayout"
import React from "react";
import LeaveApprove from "../components/LeaveApprove";


export default function ApproveEmpLeavePage (){
    return(
        <div>
            <HRRootLayout>
                <Routes>
                    <Route path="/" element={<TimeReporting />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </HRRootLayout>
            <LeaveApprove/>
        </div>
    )
}