import TimeAndDate from '../components/TimeAndDate.js'
import TodayWorkingHours from '../components/TodayWorkingHours.js'
import StartIntra from '../components/StartIntra.js'
import SetWorkingHours from '../components/SetWorkingHours.js'
import NavBar from '../components/Sidebar.jsx'
import '../styles/employeeTimeAndReportingPageStyle.css'


function EmployeeTimeAndReportingPage(params) {
    return(
        <>
            <NavBar/>
            <div class="time-report">
                <div className='timeDate'>
                    <TimeAndDate title="Time and Date"/>
                </div>
                <div className='todayWorkingHours'>
                    <TodayWorkingHours title="Today Working Hours"/>
                </div>
            </div>
            <div className='start-intra'>
                <StartIntra/>
            </div>
            <div className='working-hours'>
                <SetWorkingHours title="Set Working Hours"/>
            </div>
            

        </>
            
    );
}

export default EmployeeTimeAndReportingPage;