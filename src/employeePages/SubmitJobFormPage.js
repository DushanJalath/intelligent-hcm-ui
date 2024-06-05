import React from "react";
import EmployeeSubmitForm from "../components/EmployeeSubmitForm";
import Sidebar from "../components/Sidebar.jsx";

export default function SubmitJobFormPage (){
    return(
        <div>
            <Sidebar/>
            <EmployeeSubmitForm title="Submit Form" />
        </div>
    )
}