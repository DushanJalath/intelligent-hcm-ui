import TimeAndDate from '../components/TimeAndDate.js'
import TodayWorkingHours from '../components/TodayWorkingHours.js'
import StartIntra from '../components/StartIntra.js'
import SetWorkingHours from '../components/SetWorkingHours.js'
import NavBar from '../components/Sidebar.jsx'
import '../styles/employeeTimeAndReportingPageStyle.css'


function EmployeeTimeAndReportingPage(params) {
    return(
        <div className="container">
            <div className="navbar">
                <NavBar/>
            </div>
            <div className="row">
                <div className="time-and-date">
                    <TimeAndDate/>
                </div>
                <div className="today-working-hours">
                    <TodayWorkingHours/>
                </div>
            </div>
            <div className="start-intra">
                <StartIntra/>
            </div>
            <div className="set-working-hours">
                <SetWorkingHours/>
            </div>
        </div>
    );
}

export default EmployeeTimeAndReportingPage;