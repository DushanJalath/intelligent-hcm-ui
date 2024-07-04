import React from 'react';
import CalendarComponent from '../components/ViewAttendanceCalender.js';
import Sidebar from "../components/Sidebar.jsx";
import '../styles/individualEmployeeViewAttendancePage.css'
import WeeklyViewAttendanceBarchart from '../components/WeeklyViewAttendanceBarchart.js'
import YearlyWorkHourBarchart from '../components/YearlyWorkHourBarchart.js'
import ManagerSidebar from '../components/ManagerSidebar';

export default function ViewAttendancePage (){
  const userType = localStorage.getItem('userType');
  return (
    <div className="app-container">
      <div className="navbar">
      {userType === 'Employee' && <Sidebar />}
      {userType === 'Manager' && <ManagerSidebar/>}  
      </div>
      <div className="main-content">
              <div className="main-content-firstrow">
              <CalendarComponent title = "View Attendance"/>
              <WeeklyViewAttendanceBarchart title = "Weekly Work Hour Summary"/>
              </div>
              <YearlyWorkHourBarchart title = "Yearly Work Hour Summary"/>
      </div>
    </div>
  );
};

