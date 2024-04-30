import Jobvacancy from "../components/newjobvacancies.js"
import "../styles/employeeJobVacancyPage.css"
import Navbar from "../components/Sidebar.jsx"

export default function EmployeeJobVacancyPageNew (){
    return (
        <div className="app-container">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main-content">
                <Jobvacancy title="New Job Vacancies"/>
            </div>

        </div>
    )
}