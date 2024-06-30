import React from 'react';
import Jobvacancy from "../components/newjobvacancies.js";
import "../styles/newjobvacancies.module.css";

export default function CandidateJobVacancyDetailsPage() {
    return (
        <div className="app-container">
            <div className="main-content">
                <Jobvacancy title="Job Vacancies" className="leave-status"/>
            </div>
        </div>
    );
}
