import React from "react";
import ManagerSidebar from '../components/ManagerSidebar.jsx'
import LeavePredictionchart from '../components/LeavePredictionchart'
import TimeAndDate from '../components/TimeAndDate'
import '../styles/hrleavepredictionpage.css'

export default function ManagerLeavePredictionPage() {
  
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
