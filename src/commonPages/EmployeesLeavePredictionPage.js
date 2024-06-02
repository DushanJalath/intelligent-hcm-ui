import React from 'react'
import HRSidebar from '../components/HRSidebar'
import ManagerSidebar from '../components/ManagerSidebar'
import LeavePredictionchart from '../components/LeavePredictionchart'
// import TimeAndDate from '../components/TimeAndDate'
import '../styles/hrleavepredictionpage.css'

export default function EmployeesLeavePredictionPage() {
  const userType = localStorage.getItem('userType');
    return (
      <>
        {userType === 'Manager' && <ManagerSidebar/>}
        {userType === 'HR' && <HRSidebar/>} 

        <div className='hr-leave-predict'>
          <div className="Leave_section">
            {/* <TimeAndDate className="leave-page-date" title="Time and Date"/> */}
            <LeavePredictionchart/>
          </div>
        </div>
      </>
   )
}
