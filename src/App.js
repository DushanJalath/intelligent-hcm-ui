import React from 'react';
import { Routes,Route } from 'react-router-dom';
import LandingPage from "../src/pages/LandingPage";
import LoginPage from "../src/pages/LoginPage";
import TimeAndReportingPage from "../src/commonPages/TimeAndReportingPage";
import OverTimetrackingPage from "../src/commonPages/OverTimetrackingPage";
import ViewIndividualAttendancePage from "../src/commonPages/ViewIndividualAttendancePage";
import RequestLeavePage from "../src/commonPages/RequestLeavePage"; //CSS conflict with Login Page
// import ViewAttendancePage from "./employeePages/ViewAttendancePage";
import AddBillsPage from "../src/commonPages/AddBillsPage";
import JobVacancyDetailsPage from "../src/commonPages/JobVacancyDetailsPage";
import LeaveStatusPage from "../src/managerPages/LeaveStatusPage";
import RequestVacancyPage from "../src/managerPages/RequestVacancyPage";
import TimeAndReportingPageEmp from "../src/hrPages/TimeAndReportingPagEmp";
import TimeAndReportingPageManager from "../src/hrPages/TimeAndReportingPageManager";
import ApproveManagerLeavePage from "../src/hrPages/ApproveManagerLeavePage";
import OverTimetrackingPageEmp from "../src/hrPages/OverTimetrackingPageEmp";
import OvertimetrackingPageManager from "../src/hrPages/OvertimetrackingPageManager";
import EmployeesLeavePredictionPage from "../src/commonPages/EmployeesLeavePredictionPage";
import EmployeesAttendances from "../src/commonPages/EmployeesAttendances";
import ManagersAttendances from "../src/hrPages/ManagersAttendances";
import AddJobVacancyPage from "../src/hrPages/AddJobVacancyPage";
import ApproveJobVacancypage from "../src/hrPages/ApproveJobVacancypage";
import ApproveBillsPage from "../src/hrPages/ApproveBillsPage";
import UserRegPage from "../src/hrPages/UserRegPage";
import CandidateApplyPage from "../src/hrPages/CandidateApplyPage";
import ApproveEmployeesLeavePage from "../src/hrPages/ApproveEmployeesLeavePage";
import CandidateJobVacancyDetailsPage from '../src/candidatePages/CandidateJobVacancyDetailsPage';
import CandidateSubmitFormPage from '../src/candidatePages/CandidateSubmitFormPage';
import CandidateDonePage from '../src/candidatePages/CandidateDonePage';
import CandidateErrorPage from '../src/candidatePages/CandidateErrorPage';
import EmpLeaveStatusPage from './employeePages/EmpLeaveStatusPage';
import SubmitJobFormPage from './employeePages/SubmitJobFormPage';
import BillStatusPage from './commonPages/BillStatusPage'





const App = () => {
  return (
    <div>   
            <div>
            
                <Routes>
                <Route path="/" element={<LandingPage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/logout" element={<LoginPage/>} />
                    <Route path="/land" element={<LandingPage/>} />
                                      
                    {/* Employees Pages */}
                    <Route path="/time and reporting" element={<TimeAndReportingPage/>} />
                    <Route path="/Absence Management/View Attandance" element={<ViewIndividualAttendancePage/>} />
                    <Route path="/Absence Management/Request Leave" element={<RequestLeavePage/>} />
                    <Route path="/Absence Management/Leave Status" element={<EmpLeaveStatusPage/>} /> 
                    <Route path="/over time tracking" element={<OverTimetrackingPage/>} />
                    <Route path="/Job Vacancies/Job Details" element={<JobVacancyDetailsPage/>} />
                    <Route path="/Job Vacancies/Apply Job" element={<SubmitJobFormPage/>} />
                    <Route path="/Clam Bills/Send Bill" element={<AddBillsPage/>} />
                    <Route path="/Clam Bills/Bill Status" element={<BillStatusPage/>} />

                    {/* Managers Routes */}
                    <Route path="/time and reporting" element={<TimeAndReportingPage/>} />
                    <Route path="/Absence Management/View Attandance" element={<ViewIndividualAttendancePage/>} />
                    <Route path="/Absence Management/Employees Attendances" element={<EmployeesAttendances/>} />
                     <Route path="/Absence Management/Request Leave" element={<RequestLeavePage/>} />
                    <Route path="/Absence Management/Leave Status" element={<LeaveStatusPage/>} /> 
                    <Route path="/over time tracking" element={<OverTimetrackingPage/>} />
                    <Route path="/Leave Prediction" element={<EmployeesLeavePredictionPage/>} /> 
                    <Route path="/Job Vacancies/View job vacancies" element={<JobVacancyDetailsPage/>} /> 
                    <Route path="/Job Vacancies/Request job vacancy" element={<RequestVacancyPage/>} />
                    <Route path="/Clam Bills/Send Bill" element={<AddBillsPage/>} />


                    {/* HR Routes */}
                    <Route path="/Time Reporting/Employees" element={<TimeAndReportingPageEmp/>} />
                    <Route path="/Time Reporting/Managers" element={<TimeAndReportingPageManager/>} /> 
                    <Route path="/Absence Management/Employees Leave Requests" element={<ApproveEmployeesLeavePage/>} /> 
                    <Route path="/Absence Management/Managers Leave Requests" element={<ApproveManagerLeavePage/>} /> 
                    <Route path="/Absence Management/Employees Attendances" element={<EmployeesAttendances/>} />
                    <Route path="/Absence Management/Managers Attendances" element={<ManagersAttendances/>} />
                    <Route path="/Overtime Tracking/Employees" element={<OverTimetrackingPageEmp/>} /> 
                    <Route path="/Overtime Tracking/Managers" element={<OvertimetrackingPageManager/>} /> 
                    <Route path="/Leave Prediction/Employees" element={<EmployeesLeavePredictionPage/>} /> 
                    <Route path="/Leave Prediction/Managers" element={<EmployeesLeavePredictionPage/>} /> 
                    <Route path="/Job Vacancies/Add Job Vacancy" element={<AddJobVacancyPage/>} />
                    <Route path="/Job Vacancies/Managers Requests" element={<ApproveJobVacancypage/>} />
                    <Route path="/manage bills" element={<ApproveBillsPage/>} />
                    <Route path="/register" element={<UserRegPage/>} />
                    <Route path="/candidates" element={<CandidateApplyPage/>} /> 

                    {/* candidate */}
                    <Route path="/candidate-job-vacancy-details" element={<CandidateJobVacancyDetailsPage/>} /> 
                    <Route path="/candidate-submit-form" element={<CandidateSubmitFormPage/>} /> 
                    <Route path="/done" element={<CandidateDonePage/>} />  
                    <Route path="/error" element={<CandidateErrorPage/>} />                  
                </Routes>
            </div>
    </div>
  );
};

export default App;

