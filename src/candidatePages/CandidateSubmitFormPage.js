import React from "react";
import EmployeeSubmitForm from "../components/EmployeeSubmitForm";
import NewCandidateSidebar from "../components/NewCandidateSidebar"
import { Route } from "react-router-dom";


export default function CandidateSubmitFormPage (){
    return(
        <div>
            <NewCandidateSidebar />
            <EmployeeSubmitForm title="Job Vacancies"/>
        </div>
    )
}