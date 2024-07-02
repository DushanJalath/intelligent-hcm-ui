import React from "react";
import EmployeeSubmitForm from "../components/EmployeeSubmitForm";
import { useLocation } from 'react-router-dom';

export default function CandidateSubmitFormPage() {
    const location = useLocation();
    const { vacancy_id } = location.state || {};

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <EmployeeSubmitForm title="Apply for Vacancy" vacancy_id={vacancy_id} />
        </div>
    );
}
