import React from 'react';
import {  Routes } from 'react-router-dom';
// import TimeAndReportingPageEmp from "../src/hrPages/TimeAndReportingPagEmp";
// import ManagerLeavePredictionPage from "../src/commonPages/ManagerLeavePredictionPage";
// import HRVacancyPage from './pages/HRVacancyPage';
// import HrjobPage from './pages/HrJobPage';
// import HrNewCandidatePage from './pages/HrNewCandidatePage';
// import HrLeavePredictionPage from './managerPages/HrLeavePredictionPage';
import CandidateSubmitFormPage from "./candidatePages/CandidateSubmitFormPage";
// import ManagerReuestVacancypage1 from './pages/ManagerRequestVacancyPage1';


const App = () => {
  return (
    <div>


            <div>
                <Routes>
                  <Route path="/candidateSubmitFormPage" element={<CandidateSubmitFormPage />} />
                  
                    {/* <Route path="/" element={<LoginPage />} />
                    <Route path="/managerReuestVacancypage" element={<ManagerReuestVacancypage1 />} />
                    <Route path="/hrvacancypage" element={<HRVacancyPage />} />
                    <Route path="/hrjobpage" element={<HrjobPage />} />
                    <Route path="/hrnewcandidatepage" element={<HrNewCandidatePage />} />
                    <Route path="/managerleavepredictionpage" element={<ManagerLeavePredictionPage />} />
                    <Route path="/hrleavepredictionpage" element={<HRLeavePredictionPage />} />
                    <Route path="/hrapprovebillspage" element={<HrApproveBillsPage />} />                       */}
                </Routes>
            </div>
    </div>
  );
};

export default App;

