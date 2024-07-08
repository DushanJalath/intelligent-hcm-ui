import React from 'react';
import { Routes,Route } from 'react-router-dom';
import LandingPage from "../src/pages/LandingPage";
import LoginPage from "../src/pages/LoginPage";
import TimeAndReportingPage from "../src/commonPages/TimeAndReportingPage";
import OverTimetrackingPage from "../src/commonPages/OverTimetrackingPage";
import ViewIndividualAttendancePage from "./commonPages/ViewIndividualAttendancePage.js";
import RequestLeavePage from "../src/commonPages/RequestLeavePage";
import AddBillsPage from "../src/commonPages/AddBillsPage";
import JobVacancyDetailsPage from "../src/commonPages/JobVacancyDetailsPage";
import RequestVacancyPage from "../src/managerPages/RequestVacancyPage";
import TimeAndReportingPageEmp from "../src/hrPages/TimeAndReportingPagEmp";
import TimeAndReportingPageManager from "../src/hrPages/TimeAndReportingPageManager";
import OverTimetrackingPageEmp from "../src/hrPages/OverTimetrackingPageEmp";
import OvertimetrackingPageManager from "../src/hrPages/OvertimetrackingPageManager";
import EmployeesLeavePredictionPage from "../src/commonPages/EmployeesLeavePredictionPage";
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
import BillStatusPage from './commonPages/BillStatusPage'
import LeaveCountPage from './commonPages/LeaveCountPage'
import LeaveReportPage from './hrPages/LeaveReportPage'
import StaffFormPage from './commonPages/StaffFormPage'
import ManagerLeaveRequest from './managerPages/ManagerLeaveRequest'
import InterviewDetailsPage from './hrPages/InterviewDetailsPage'
import EmployeeViewIndividualAttendancePage from '../src/employeePages/IndividualEmployeeViewAttendancePage'
import UserLayout from './UserLayout.js';
import ContactPage from './hrPages/ContactPage'
import ContactUsPage from './pages/ContactUsPage'
import EmployeesAttendancesPage from '../src/hrPages/EmployeesAttendancesPage.js'
import ManagersAttendancesPage from '../src/hrPages/ManagersAttendancesPage.js'

const App = () => {

  return (
    <div>   
            <div>
            
                <Routes>
                <Route path="/" element={<LandingPage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/logout" element={<LoginPage/>} />
                    <Route path="/land" element={<LandingPage/>} />
                    <Route path="/candidate-job-vacancy-details" element={<CandidateJobVacancyDetailsPage/>} /> 
                    <Route path="/candidate-submit-form" element={<CandidateSubmitFormPage/>} /> 
                    <Route path="/done" element={<CandidateDonePage/>} />  
                    <Route path="/error" element={<CandidateErrorPage/>} />  
                    <Route path="/contact" element={<ContactUsPage/>} />  
                                      

                <Route element={<UserLayout />}>
                    <Route path="/time and reporting" element={<TimeAndReportingPage />} />
                    <Route path="/Absence Management/View Attandance" element={<EmployeeViewIndividualAttendancePage />} />
                    <Route path="/Absence Management/Request Leave" element={<RequestLeavePage />} />
                    <Route path="/Absence Management/Leave Status" element={<EmpLeaveStatusPage/>} /> 
                    <Route path="/over time tracking" element={<OverTimetrackingPage/>} />
                    <Route path="/Job Details" element={<JobVacancyDetailsPage/>} />
                    <Route path="/staff-submit-form" element={<StaffFormPage/>} />
                    <Route path="/Claim Bills/Send Bill" element={<AddBillsPage/>} />
                    <Route path="/Claim Bills/Bill Status" element={<BillStatusPage/>} />
                    <Route path="/Absence Management/Employees Attendance" element={<ViewIndividualAttendancePage/>} />
                    <Route path="/Absence Management/Manager Request Leave" element={<ManagerLeaveRequest/>} />
                    <Route path="/Leave Prediction" element={<EmployeesLeavePredictionPage/>} /> 
                    <Route path="/Job Vacancies/View job vacancies" element={<JobVacancyDetailsPage/>} /> 
                    <Route path="/Job Vacancies/Request job vacancy" element={<RequestVacancyPage/>} />
                    <Route path="/Time Reporting/Employees" element={<TimeAndReportingPageEmp/>} />
                    <Route path="/Time Reporting/Managers" element={<TimeAndReportingPageManager/>} /> 
                    <Route path="/Absence Management/Set Leave Count" element={<LeaveCountPage/>} />
                    <Route path="/Absence Management/Leave Report" element={<LeaveReportPage/>} /> 
                    <Route path="/Absence Management/Leave Requests" element={<ApproveEmployeesLeavePage/>} /> 
                    <Route path="/Absence Management/Employees Attendances" element={<EmployeesAttendancesPage/>} />
                    <Route path="/Absence Management/Managers Attendances" element={<ManagersAttendancesPage/>} />
                    <Route path="/Overtime Tracking/Employees" element={<OverTimetrackingPageEmp/>} /> 
                    <Route path="/Overtime Tracking/Managers" element={<OvertimetrackingPageManager/>} /> 
                    <Route path="/Leave Prediction/Employees" element={<EmployeesLeavePredictionPage/>} /> 
                    <Route path="/Job Vacancies/Add Job Vacancy" element={<AddJobVacancyPage/>} />
                    <Route path="/Job Vacancies/Vacancy Requests" element={<ApproveJobVacancypage/>} />
                    <Route path="/Job Vacancies/View Job Vacancies" element={<JobVacancyDetailsPage/>} />
                    <Route path="/Candidates/New Candidate Details" element={<CandidateApplyPage/>} />
                    <Route path="/Candidates/Interview Details" element={<InterviewDetailsPage/>} />
                    <Route path="/manage bills" element={<ApproveBillsPage/>} />
                    <Route path="/register" element={<UserRegPage/>} />
                    <Route path="/contactTable" element={<ContactPage/>} />
                </Route>
                </Routes>
            </div>
    </div>
  );
};

export default App;
