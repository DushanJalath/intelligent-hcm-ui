import Jobvacancy from "../components/newjobvacancies.js"
import "../styles/employeeJobVacancyPage.css"
import Sidebar from "../components/Sidebar";
import ManagerSidebar from "../components/ManagerSidebar";

export default function JobVacancyDetailsPage (){
    const userType = localStorage.getItem('userType');
    return (
        <div className="app-container">
            {userType === 'Employee' && <Sidebar/>}
            {userType === 'Manager' && <ManagerSidebar/>}
                <div className="main-content">
                    <Jobvacancy title="Job Vacancies" className="leave-status"/>
                </div>
        </div>
    )
}