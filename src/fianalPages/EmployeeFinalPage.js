import React from "react";
import RootLayout from "../components/RootLayout";
import {Route, Routes} from "react-router-dom";
import NewEmployeeTimeAndReporting from "../pages/NewEmployeeTimeAndReporting";
import EmployeeOvertimeTrackingPageNew from "../pages/EmployeeOvertimeTrackingPageNew";
import EmployeeJobVacancyPageNew from "../pages/EmployeeJobVacancyPageNew";
import AddBillsPage from "../pages/AddBillsPage";


export default function EmployeeFinalPage () {
    return (

        <RootLayout>
            <Routes>
                <Route path="/NewEmployeeTimeAndReporting" element={<NewEmployeeTimeAndReporting/>}/>
                <Route path="/EmployeeOvertimeTrackingPageNew" element={<EmployeeOvertimeTrackingPageNew/>}/>
                {/*<Route path="/leavePrediction" element={<leavePrediction/>}/>*/}
                {/*<Route path="/Absence Management/View Absence" element={<AddBillsPage/>}/>*/}
                {/*<Route path="/Absence Management/Request Leave" element={<AddBillsPage/>}/>*/}
                <Route path="/EmployeeJobVacancyPageNew" element={<EmployeeJobVacancyPageNew/>}/>
                <Route path="/AddBillsPage" element={<AddBillsPage/>}/>
                {/*<Route path="/Settings" element={<Settings/>}/>*/}
                {/*<Route path="/Logout" element={<Logout/>}/>*/}
            </Routes>
        </RootLayout>

    )
}