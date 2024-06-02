import React from 'react'
import '../styles/managerrequestvacancypage.css'
import HrNewCandidate from '../components/HrNewCandidate.js';
import HRSidebar from '../components/HRSidebar.jsx';


export default function CandidateApplyPage() {
    return (
        <div className="container-RVP">
          <div>
            <HRSidebar/>
          </div>
          <div className="component-RVP">
            <HrNewCandidate title="Details about the New Candidates"/>  
          </div>
        </div>
      )
}
