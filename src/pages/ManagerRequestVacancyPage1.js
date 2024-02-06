import React from "react";
import AddVacancy from "../components/AddVacancy.js"
import SendDetails from '../components/SendDetails.js'
import RequestedVacancy from '../components/RequestedVacancy.js'
import Sidebar from '../components/Sidebar.jsx'
import '../styles/managerrequestvacancypage.css'


export default function ManagerRequestVacancyPage1() {
  return (
    <div className="container-RVP">
      <div>
        <Sidebar/>
      </div>
      <div className="component-RVP">
        <AddVacancy title="Add Vacancy"/>
        <SendDetails title="Send details to the HR"/>
        <RequestedVacancy title="Requested Vacancy"/>
      </div>
    </div>
  )
}
