import React from 'react'
import '../styles/managerrequestvacancypage.css'
import HrJobVacancyStatus from "../components/HrJobVacancyStatus";
import HrJobRequesdedVacancy from "../components/HrJobRequestedVacancy"
import Sidebar from '../components/Sidebar';

export default function HrJobPage() {
  return (
    <div className="container-RVP">
      <div>
        <Sidebar/>
      </div>
      <div className="component-RVP">
        <HrJobRequesdedVacancy title="Requested Vacancy"/>
        <HrJobVacancyStatus title="Vacancy Status"/>  
      </div>
    </div>
  )
}