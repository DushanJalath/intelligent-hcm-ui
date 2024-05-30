import React from "react";
import ManagerSidebar from '../components/ManagerSidebar.jsx'
import LeavePredictionchart from '../components/LeavePredictionchart.js'
import TimeAndDate from '../components/TimeAndDate.js'
import '../styles/hrleavepredictionpage.css'

export default function EmployeeLeavePredictionPage() {
  
  return (
    <div className='hr-leave-predict'>
      <div>
        <ManagerSidebar/>
      </div>
      <div className="Leave_section">
        {/* <TimeAndDate className="leave-page-date" title="Time and Date"/> */}
      <LeavePredictionchart/>
      </div>
    </div>
  )
}
