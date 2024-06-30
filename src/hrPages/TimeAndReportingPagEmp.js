// import TimeAndDate from "./components/TimeAndDate";
import HRTimeReportingSubComponent from "../components/HRTimeReportingSubComponent";
import '../styles/HRTimeReportingPage.css';
import HRSidebar from '../components/HRSidebar';
import TimeAndDate from "../components/TimeAndDate";
import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function TimeAndReportingPageEmp (){

    const [employeeTimeReports, setEmployeeTimeReports] = useState([]);
    const [managerTimeReports, setManagerTimeReports] = useState([]);
    useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8000/employees_timereporting'); 
            setEmployeeTimeReports(response.data); 
            console.log(response.data);
            const response1 = await axios.get('http://127.0.0.1:8000/managers_timereporting'); 
            setManagerTimeReports(response1.data);
          } catch (err) {
            console.log(err.message);
          }
        };
    
        fetchData();
      }, []);
    
   const managerTimeReportingData=[
    { dp: 'https://picsum.photos/200/300', name: 'John', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/301', name: 'Sam', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/302', name: 'Jane', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/303', name: 'Robert', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/304', name: 'Paul', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/305', name: 'Mery', details:'Total hours 10:20:25'},
];

const employeesTimeReportingData=[
    { dp: 'https://picsum.photos/200/306', name: 'Geny', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/307', name: 'Tessa', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/308', name: 'Lourie', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/309', name: 'Ben', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/310', name: 'Vicky', details:'Total hours 10:20:25'},
    { dp: 'https://picsum.photos/200/311', name: 'Lee', details:'Total hours 10:20:25'},
]
    return (
        <>
        <div>
            <HRSidebar/>
        </div>

        <div className="main-container">
            <div className="upper-container">
                <TimeAndDate title="Time and Date"/>
            </div>

            <div className="lower-container">
                <div className="manager-data">
                    <HRTimeReportingSubComponent 
                        title="Managers"
                        data={managerTimeReports}
                    />
                </div>

                <div className="employees-data">
                    <HRTimeReportingSubComponent 
                        title="Employees"
                        data={employeeTimeReports}
                    />
                </div>


            </div>

        </div>
        
        
    </>
   
    )
}