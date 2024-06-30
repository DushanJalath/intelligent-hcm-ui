import {React,useState} from 'react'
import TimeAndDate from '../components/TimeAndDate.js'
import TodayWorkingHours from '../components/TodayWorkingHours.js'
import StartIntra from '../components/StartIntra.js'
import SetWorkingHours from '../components/SetWorkingHours.js'
import '../styles/employeeTimeAndReportingPageStyle.css'
import Sidebar from "../components/Sidebar";
import ManagerSidebar from "../components/ManagerSidebar";


function TimeAndReportingPage(pardafedms) {
    const userType = localStorage.getItem('userType');
    const [elaspsedTime,setElapsedTime]=useState('')
        return(
            <>
                {userType === 'Employee' && <Sidebar/>}
                {userType === 'Manager' && <ManagerSidebar/>}   
            
                <div class="time-report">
                    <div className='timeDate'>
                        <TimeAndDate title="Time and Date"/>
                    </div>

                    <div className='todayWorkingHours'>
                        <TodayWorkingHours 
                        title="Today Working Hours"
                        time={elaspsedTime}
                        />
                    </div>
                </div>

                <div className='start-intra'>
                    <StartIntra/>
                </div>

                <div className='working-hours'>
                    <SetWorkingHours title="Select Project" getTodayWorkingHours={setElapsedTime}/>
                </div>
            </>
        );
}

export default TimeAndReportingPage;