import React from 'react';
import Jobvacancy from "../components/newjobvacancies.js";
import "../styles/newjobvacancies.module.css";
import NewCandidateSidebar from "../components/NewCandidateSidebar";

export default function CandidateJobVacancyDetailsPage() {
    return (
        <div className="app-container">
            <NewCandidateSidebar />
            <div className="main-content">
                <Jobvacancy/>
            </div>
        </div>
    );
}
