import Jobvacancy from "../components/newjobvacancies.js"
import "../styles/employeeJobVacancyPage.css"
import Sidebar from "../components/Sidebar";
import ManagerSidebar from "../components/ManagerSidebar";
import HRSidebar from '../components/HRSidebar';

export default function JobVacancyDetailsPage (){
    const userType = localStorage.getItem('userType');
    return (
        <div className="app-container">
            {userType === 'Employee' && <Sidebar/>}
            {userType === 'Manager' && <ManagerSidebar/>}
            {userType === 'HR' && <HRSidebar/>}
                <div className="main-content">
                    <Jobvacancy title="Job Vacancies" className="leave-status"/>
                </div>
        </div>
    )
}