import React from "react";
import AddVacancy from "../components/AddVacancy.js"
// import SendDetails from '../components/SendDetails.js'
import RequestedVacancy from '../components/RequestedVacancy.js'
import ManagerSidebar from '../components/ManagerSidebar.jsx'
import '../styles/managerrequestvacancypage.css'


export default function RequestVacancyPage() {
  return (
    <div className="container-RVP">
      <div>
        <ManagerSidebar/>
      </div>
      <div className="component-RVP">
        <AddVacancy title="Add Vacancy"/>
        {/* <SendDetails title="Send details to the HR"/> */}
        <RequestedVacancy title="Requested Vacancy"/>
      </div>
    </div>
  )
}
