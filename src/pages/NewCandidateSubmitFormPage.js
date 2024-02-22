import React from "react";
import EmployeeSubmitForm from "../components/EmployeeSubmitForm";
import { Route, Routes } from "react-router-dom";
import TimeReporting from "../components/TimeReporting"; //AllNavBars
import Settings from "../components/Settings"; //AllNavBars
import NewCandidateRootLayout from "../components/NewCandidateRootLayout";

export default function NewCandidateSubmitFormPage (){
    return(
        <div>
            <NewCandidateRootLayout>
                <Routes>
                    <Route path="/" element={<TimeReporting />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </NewCandidateRootLayout>
            <EmployeeSubmitForm title="Submit Form" />
        </div>
    )
}