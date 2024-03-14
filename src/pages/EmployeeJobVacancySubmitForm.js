import Sidebar from "../components/Sidebar";
import EmployeeSubmitForm from "../components/EmployeeSubmitForm";

function EmployeeVacancySubmitFormPage(params) {
    return(
        <>
            <Sidebar/>
            <div className="submit-form">
                <EmployeeSubmitForm title="Submit Form"/>
            </div>
        </>
    );
}

export default EmployeeVacancySubmitFormPage