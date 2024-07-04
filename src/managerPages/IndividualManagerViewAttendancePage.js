import React from 'react';
import CalendarComponent from '../components/ViewAttendanceCalender.js';
import ManagerSidebar from "../components/ManagerSidebar";
import '../styles/individualEmployeeViewAttendancePage.css'
import WeeklyViewAttendanceBarchart from '../components/WeeklyViewAttendanceBarchart.js'
import YearlyWorkHourBarchart from '../components/YearlyWorkHourBarchart.js'

export default function ViewAttendancePage (){
  return (
    <div className="app-container">
      <div className="navbar">
            <ManagerSidebar/>
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

