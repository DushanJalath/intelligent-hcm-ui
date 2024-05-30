import React from 'react'
import '../styles/managerrequestvacancypage.css'
import HrApproveBills from '../components/HrApproveBills.js';
import HRSidebar from '../components/HRSidebar.jsx';

export default function HrApproveBillsPage() {
    return (
        <div className="container-RVP">
          <div>
            <HRSidebar/>
          </div>
          <div className="component-RVP">
            <HrApproveBills title="Details about the Bills"/>  
          </div>
        </div>
      )
}
