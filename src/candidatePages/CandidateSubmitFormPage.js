import React from "react";
import EmployeeSubmitForm from "../components/EmployeeSubmitForm";
import { useLocation } from 'react-router-dom'; // Import useLocation hook from React Router DOM

export default function CandidateSubmitFormPage() {
    const location = useLocation();
    const { vacancy_id } = location.state || {}; // Access vacancy_id from location state

    return (
        <div>
            <EmployeeSubmitForm title="Apply for Vacancy" vacancy_id={vacancy_id} /> {/* Pass vacancy_id as a prop */}
        </div>
    );
}
