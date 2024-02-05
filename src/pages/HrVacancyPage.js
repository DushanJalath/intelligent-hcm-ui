import React from 'react'
import AddVacancy from "../components/AddVacancy.js"
import Sidebar from '../components/Sidebar.jsx'
import '../styles/hrvacancypage.css'

export default function HrVacancyPage() {
  return (
    <div className="container-RVP">
      <div>
        <Sidebar/>
      </div>
      <div className="component-RVP">
        <AddVacancy title="Add Vacancy"/>
      </div>
    </div>
  )
}
