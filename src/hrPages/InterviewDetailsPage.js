import React from 'react'
import '../styles/managerrequestvacancypage.css'
import InterviewDetails from '../components/InterviewDetails'
import HRSidebar from '../components/HRSidebar.jsx';

export default function InterviewDetailsPage() {
    return (
        <div>
          <div>
            <HRSidebar/>
          </div>
          <div>
            <InterviewDetails/>  
          </div>
        </div>
      )
}
