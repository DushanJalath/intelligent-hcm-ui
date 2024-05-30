import Monthlyreport from "../components/Monthlyreport.js"
import Overtimecount from "../components/Overtimecount.js"
import Totalovertime from "../components/Totalovertime.js"
import TimeAndDate from "../components/TimeAndDate.js"
import "../styles/employeeOvertimeTrackingPage.css"
import Sidebar from "../components/Sidebar";
import ManagerSidebar from "../components/ManagerSidebar";


export default function OverTimeTrackingPage (){
    const userType = localStorage.getItem('userType');
    return (
        
        <div className="appcontainer">
            {userType === 'Employee' && <Sidebar/>}
            {userType === 'Manager' && <ManagerSidebar/>}

            <div className="column1">
                <TimeAndDate title="Time and Date"/>
                <Overtimecount title="Overtime count"/>
                <Totalovertime title="Remainings Overtime"/>
                <Totalovertime title="Total Overflow"/>
            </div>

            <div className="column2">
                <Monthlyreport title="Monthly report"/>
            </div>
        </div>
    )
}