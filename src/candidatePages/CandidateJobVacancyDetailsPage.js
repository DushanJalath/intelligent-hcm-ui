import Jobvacancy from "../components/newjobvacancies.js"
import "../styles/employeeJobVacancyPage.css"
import NewCandidateSidebar from "../components/NewCandidateSidebar"


export default function CandidateJobVacancyDetailsPage (){
    return (
        <div className="app-container">
            <NewCandidateSidebar />
            <div className="main-content">
                <Jobvacancy title="New Job Vacancies"/>
            </div>
        </div>
    )
}