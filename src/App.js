import React from 'react';
// import EmployeeLeavePage from "./pages/EmployeeLeavePage";
// import HRApproveMEmployeesLeavePage from "./pages/HRApproveEmployeesLeavePage";
// import ManagerRequestVacancyPage1 from "./pages/ManagerRequestVacancyPage1";
// import HrVacancyPage from "./pages/HrVacancyPage";
// import HRApproveMEmployeesLeavePage from "./pages/HRApproveEmployeesLeavePage";
// import HRApproveManagersLeavePage from "./pages/HRApproveManagersLeavePage";
// import ManagerViewLeaveStatusOfEmployeesPage from "./pages/ManagerViewLeaveStatusOfEmployeesPage";
// import ManagersLeavePage from "./pages/ManagersLeavePage";
// import HRApproveManagersLeavePage from "./pages/HRApproveEmployeesLeavePage";
// import HRApproveManagersLeavePage from "./pages/HRApproveManagersLeavePage";
// import LeaveApprove from "./components/LeaveApprove";
// import EmployeeLeavePage from "./pages/EmployeeLeavePage";
// import ManagersLeavePage from "./pages/ManagersLeavePage";
// import HRApproveManagersLeavePage from "./pages/HRApproveManagersLeavePage";
// import ManagerViewLeaveStatusOfEmployeesPage from "./pages/ManagerViewLeaveStatusOfEmployeesPage";
// import ViewEmployeeLeaveStatus from "./components/ViewEmployeeLeaveStatus";
// import LeaveApprove from "./components/LeaveApprove";
import StatusButton from "./components/StatusButton";
// import NewCandidateSubmitFormPage from "./pages/NewCandidateSubmitFormPage";
// import ManagersLeavePage from "./pages/ManagersLeavePage";
// import EmployeeSubmitForm from "./components/EmployeeSubmitForm";
import { Route, Routes } from "react-router-dom"; //AllNavBars
import TimeReporting from "./components/TimeReporting"; //AllNavBars
import Settings from "./components/Settings"; //AllNavBars
import RootLayout from "./components/RootLayout";
import ManagersLeavePage from "./pages/ManagersLeavePage";
import EmployeeJobDetailsPageNew from "./pages/EmployeeJobDetailsPageNew";
import EmployeeJobVacancyPageNew from "./pages/EmployeeJobVacancyPageNew";
import EmployeeLeavePage from "./pages/EmployeeLeavePage";
import EmployeeOvertimeTrackingPageNew from "./pages/EmployeeOvertimeTrackingPageNew";
// import EmployeeLeavePageNew from "./pages/EmployeeLeavePageNew";
import HRApproveMEmployeesLeavePage from "./pages/HRApproveEmployeesLeavePage";
import HRApproveManagersLeavePage from "./pages/HRApproveManagersLeavePage";
// import HrJobPage from "./pages/HrJobPage";
import HROvertimeTrackingPageNew from "./pages/HROvertimeTrackingPageNew";
import ManagerViewLeaveStatusOfEmployeesPage from "./pages/ManagerViewLeaveStatusOfEmployeesPage";
import NewCandidateSubmitFormPage from "./pages/NewCandidateSubmitFormPage";
import ManagerRequestVacancyPage1 from "./pages/ManagerRequestVacancyPage1";
// import ManagerOvertimeTrackingPageNew from "./pages/ManagerOvertimeTrackingPageNew";
import ViewEmployeeLeaveStatus from "./components/ViewEmployeeLeaveStatus"; //EmployeeNavBar
// import ManagerRootLayout from "./components/ManagerRootLayout"; //ManagerNavBar
// import HRRootLayout from "./components/HRRootLayout"; //HRNavBar
// import NewCandidateRootLayout from "./components/NewCandidateRootLayout";

//Manager NavBar
// import { Route, Routes } from "react-router-dom";
// import TimeReporting from "./components/TimeReporting";
// import Settings from "./components/Settings";
// import ManagerRootLayout from "./components/ManagerRootLayout";


// import EmpLeave from "./components/EmpLeave";
// import RemainingLeaves from "./components/RemainingLeaves";
// import LeaveApprove from "./components/LeaveApprove";

function App() {
    return (
        <div className='App'>

            <RootLayout>
                <Routes>
                    {/*<Route path="/" element={<EmployeeTimeReporting />} />*/}
                    {/*<Route path="/EmployeeJobDetailsPageNew" element={<EmployeeJobDetailsPageNew/>}/>*/}
                    <Route path="/managerLeavePage" element={<ManagersLeavePage/>}/>
                    {/*<Route path="/EmployeeOvertimeTrackingPageNew" element={<EmployeeOvertimeTrackingPageNew/>}/>*/}
                    <Route path="/managerLeavePage" element={<ManagersLeavePage/>}/>
                    {/*<Route path="/EmployeeJobVacancyPageNew" element={<EmployeeJobVacancyPageNew/>}/>*/}
                    <Route path="/managerLeavePage" element={<ManagersLeavePage/>}/>
                </Routes>
            </RootLayout>


            {/*<ManagerRootLayout>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<TimeReporting />} />*/}
            {/*        <Route path="/settings" element={<Settings />} />*/}
            {/*    </Routes>*/}
            {/*</ManagerRootLayout>*/}


            {/*<HRRootLayout>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<TimeReporting />} />*/}
            {/*        <Route path="/settings" element={<Settings />} />*/}
            {/*    </Routes>*/}
            {/*</HRRootLayout>*/}


            {/*<NewCandidateRootLayout>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<TimeReporting />} />*/}
            {/*        <Route path="/settings" element={<Settings />} />*/}
            {/*    </Routes>*/}
            {/*</NewCandidateRootLayout>*/}


            {/*<EmpLeave title="Request Leave"/>*/}
            {/*<RemainingLeaves />*/}
            {/*<LeaveApprove />*/}
            {/*<EmployeeSubmitForm title="sss" />*/}
            {/*<NewCandidateSubmitFormPage />*/}
            {/*<ManagersLeavePage />*/}
            {/*<NewCandidateSubmitFormPage/>*/}
            {/*<StatusButton status={approvedStatus}/>*/}

            {/*<LeaveApprove/>*/}
            {/*<ViewEmployeeLeaveStatus/>*/}

            {/*<ManagerViewLeaveStatusOfEmployeesPage/>*/}
            {/*<HRApproveManagersLeavePage/>*/}
            {/*<ManagersLeavePage/>*/}
            {/*<LeaveApprove/>*/}
            {/*<HRApproveMEmployeesLeavePage/>*/}
            {/*<ManagerRequestVacancyPage1/>*/}


            {/*Test Done*/}

            {/*Employee*/}
            {/*<EmployeeJobDetailsPageNew/>*/}
            {/*<EmployeeJobVacancyPageNew/>*/}

            {/*HR*/}
            {/*<HRApproveMEmployeesLeavePage/>*/}
            {/*<HRApproveManagersLeavePage/>*/}

            {/*Manager*/}
            {/*<ManagersLeavePage/>*/}
            {/*<ManagerViewLeaveStatusOfEmployeesPage/>*/}

            {/*New Candidate*/}
            {/*<NewCandidateSubmitFormPage/>*/}




            {/*Not Working*/}
            {/*<EmployeeLeavePage/>*/}




            {/*Working But Need to Modify Layouts*/}
            {/*<EmployeeOvertimeTrackingPageNew/>*/}
            {/*<HrJobPage/>*/}
            {/*<HROvertimeTrackingPageNew/>*/}
            {/*<ManagerRequestVacancyPage1/>*/}

            {/*<ManagerOvertimeTrackingPageNew/>*/}


















            {/*New Pages*/}


        </div>
    );
}

export default App;