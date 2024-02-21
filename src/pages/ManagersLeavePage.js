import React from "react";
import { Route, Routes } from "react-router-dom";
import TimeReporting from "../components/TimeReporting";
import Settings from "../components/Settings";
import ManagerRootLayout from "../components/ManagerRootLayout";
import EmpLeave from "../components/EmpLeave";
import RemainingLeaves from "../components/RemainingLeaves";


export default function ManagersLeavePage (){
    return(
        <div>
            <ManagerRootLayout>
                <Routes>
                    <Route path="/" element={<TimeReporting />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </ManagerRootLayout>
            <EmpLeave title="Request Leave"/>
            <RemainingLeaves />
        </div>
    )
}