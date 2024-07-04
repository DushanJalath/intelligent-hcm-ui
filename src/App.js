import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../src/pages/LandingPage";
import LoginPage from "../src/pages/LoginPage";
import TimeAndReportingPage from "../src/commonPages/TimeAndReportingPage";
import OverTimetrackingPage from "../src/commonPages/OverTimetrackingPage";
import ViewIndividualAttendancePage from "../src/commonPages/ViewIndividualAttendancePage";
import EmployeeViewIndividualAttendancePage from "../src/employeePages/IndividualEmployeeViewAttendancePage";
import RequestLeavePage from "../src/commonPages/RequestLeavePage";
import AddBillsPage from "../src/commonPages/AddBillsPage";
import JobVacancyDetailsPage from "../src/commonPages/JobVacancyDetailsPage";
import LeaveStatusPage from "../src/managerPages/LeaveStatusPage";
import RequestVacancyPage from "../src/managerPages/RequestVacancyPage";
import TimeAndReportingPageEmp from "../src/hrPages/TimeAndReportingPagEmp";
import TimeAndReportingPageManager from "../src/hrPages/TimeAndReportingPageManager";
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
import CandidateJobVacancyDetailsPage from "../src/candidatePages/CandidateJobVacancyDetailsPage";
import CandidateSubmitFormPage from "../src/candidatePages/CandidateSubmitFormPage";
import CandidateDonePage from "../src/candidatePages/CandidateDonePage";
import CandidateErrorPage from "../src/candidatePages/CandidateErrorPage";
import EmpLeaveStatusPage from "./employeePages/EmpLeaveStatusPage";
import BillStatusPage from "./commonPages/BillStatusPage";
import LeaveCountPage from "./commonPages/LeaveCountPage";
import LeaveReportPage from "./hrPages/LeaveReportPage";
import StaffFormPage from "./commonPages/StaffFormPage";
import ManagerLeaveRequest from "./managerPages/ManagerLeaveRequest";
import InterviewDetailsPage from "./hrPages/InterviewDetailsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ContactPage from "./hrPages/ContactPage";
import ManagerViewIndividualAttendancePage from "../src/managerPages/IndividualManagerViewAttendancePage";

const App = () => {
  const [userType, setUserType] = useState("Newcandidate");

  useEffect(() => {
    const storedUserType = localStorage.getItem("userType");
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LoginPage />} />
          <Route path="/land" element={<LandingPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route
            path="/candidate-job-vacancy-details"
            element={<CandidateJobVacancyDetailsPage />}
          />
          <Route
            path="/candidate-submit-form"
            element={<CandidateSubmitFormPage />}
          />
          <Route path="/done" element={<CandidateDonePage />} />
          <Route path="/error" element={<CandidateErrorPage />} />

          {userType === "Employee" && (
            <>
              <Route
                path="/time and reporting"
                element={<TimeAndReportingPage />}
              />
              <Route
                path="/Absence Management/View Attendance"
                element={<EmployeeViewIndividualAttendancePage />}
              />
              <Route
                path="/Absence Management/Request Leave"
                element={<RequestLeavePage />}
              />
              <Route
                path="/Absence Management/Leave Status"
                element={<EmpLeaveStatusPage />}
              />
              <Route
                path="/over time tracking"
                element={<OverTimetrackingPage />}
              />
              <Route path="/Job Details" element={<JobVacancyDetailsPage />} />
              <Route path="/staff-submit-form" element={<StaffFormPage />} />
              <Route path="/Claim Bills/Send Bill" element={<AddBillsPage />} />
              <Route
                path="/Claim Bills/Bill Status"
                element={<BillStatusPage />}
              />
            </>
          )}

          {userType === "Manager" && (
            <>
              <Route
                path="/time and reporting"
                element={<TimeAndReportingPage />}
              />

              <Route
                path="/Absence Management/View Attandance"
                element={<ManagerViewIndividualAttendancePage />}
              />
              <Route
                path="/Absence Management/Employees Attendances"
                element={<EmployeesAttendances />}
              />
              <Route
                path="/Absence Management/Manager Request Leave"
                element={<ManagerLeaveRequest />}
              />
              <Route
                path="/Absence Management/Leave Status"
                element={<EmpLeaveStatusPage />}
              />
              <Route
                path="/over time tracking"
                element={<OverTimetrackingPage />}
              />
              <Route
                path="/leave prediction"
                element={<EmployeesLeavePredictionPage />}
              />
              <Route
                path="/Job Vacancies/View job vacancies"
                element={<JobVacancyDetailsPage />}
              />
              <Route
                path="/Job Vacancies/Request job vacancy"
                element={<RequestVacancyPage />}
              />
              <Route path="/Claim Bills/Send Bill" element={<AddBillsPage />} />
              <Route
                path="/Claim Bills/Bill Status"
                element={<BillStatusPage />}
              />
            </>
          )}

          {/* Routes for HR */}
          {userType === "HR" && (
            <>
              <Route
                path="/Time Reporting/Employees"
                element={<TimeAndReportingPageEmp />}
              />
              <Route
                path="/Time Reporting/Managers"
                element={<TimeAndReportingPageManager />}
              />
              <Route
                path="/Absence Management/Set Leave Count"
                element={<LeaveCountPage />}
              />
              <Route
                path="/Absence Management/Leave Report"
                element={<LeaveReportPage />}
              />
              <Route
                path="/Absence Management/Leave Requests"
                element={<ApproveEmployeesLeavePage />}
              />
              <Route
                path="/Absence Management/Employees Attendances"
                element={<EmployeesAttendances />}
              />
              <Route
                path="/Absence Management/Managers Attendances"
                element={<ManagersAttendances />}
              />
              <Route
                path="/Overtime Tracking/Employees"
                element={<OverTimetrackingPageEmp />}
              />
              <Route
                path="/Overtime Tracking/Managers"
                element={<OvertimetrackingPageManager />}
              />
              <Route
                path="/Leave Prediction/Employees"
                element={<EmployeesLeavePredictionPage />}
              />
              <Route
                path="/Job Vacancies/Add Job Vacancy"
                element={<AddJobVacancyPage />}
              />
              <Route
                path="/Job Vacancies/Vacancy Requests"
                element={<ApproveJobVacancypage />}
              />
              <Route
                path="/Job Vacancies/View Job Vacancies"
                element={<JobVacancyDetailsPage />}
              />
              <Route
                path="/Candidates/New Candidate Details"
                element={<CandidateApplyPage />}
              />
              <Route
                path="/Candidates/Interview Details"
                element={<InterviewDetailsPage />}
              />
              <Route path="/manage bills" element={<ApproveBillsPage />} />
              <Route path="/register" element={<UserRegPage />} />
              <Route path="/contactTable" element={<ContactPage />} />
            </>
          )}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
