import React from 'react'
import '../styles/managerrequestvacancypage.css'
import HrJobVacancyStatus from "../components/HrJobVacancyStatus";
import HRSidebar from '../components/HRSidebar.jsx';

export default function ApproveJobVacancypage() {
  return (
    <div className="container-RVP">
      <div>
        <HRSidebar/>
      </div>
      <div className="component-RVP">
        <HrJobVacancyStatus title="Vacancy Status"/>  
      </div>
    </div>
  )
}