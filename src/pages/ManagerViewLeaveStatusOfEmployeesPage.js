import { Route, Routes } from "react-router-dom";
import TimeReporting from "../components/TimeReporting"
import Settings from "../components/Settings"
import ManagerRootLayout from "../components/ManagerRootLayout"
import ViewEmployeeLeaveStatus from "../components/ViewEmployeeLeaveStatus";

export default function ManagerViewLeaveStatusOfEmployeesPage (){
    return(
        <div>
            <ManagerRootLayout>
                <Routes>
                    <Route path="/" element={<TimeReporting />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </ManagerRootLayout>
            <ViewEmployeeLeaveStatus/>
        </div>
    )
}