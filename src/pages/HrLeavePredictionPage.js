import React from 'react'
import HRSidebar from '../components/HRSidebar'
import LeavePredictionchart from '../components/LeavePredictionchart'
import TimeAndDate from '../components/TimeAndDate'
import '../styles/hrleavepredictionpage.css'

export default function HrLeavePredictionPage() {
  
  return (
    <div className='hr-leave-predict'>
      <div>
        <HRSidebar/>
      </div>
      <div className="Leave_section">
        {/* <TimeAndDate className="leave-page-date" title="Time and Date"/> */}
        <LeavePredictionchart/>
      </div>
    </div>
  )
}
