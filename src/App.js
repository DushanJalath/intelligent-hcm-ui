import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import ManagerReuestVacancypage1 from './pages/ManagerRequestVacancyPage1';
import HRVacancyPage from './pages/HRVacancyPage';
import HrjobPage from './pages/HrJobPage';
import HrNewCandidatePage from './pages/HrNewCandidatePage';
import ManagerLeavePredictionPage from './pages/ManagerLeavePredictionPage';
import HRLeavePredictionPage from './pages/HrLeavePredictionPage';


const App = () => {
  return (
    <div>

            <div>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/managerReuestVacancypage" element={<ManagerReuestVacancypage1 />} />
                    <Route path="/hrvacancypage" element={<HRVacancyPage />} />
                    <Route path="/hrjobpage" element={<HrjobPage />} />
                    <Route path="/hrnewcandidatepage" element={<HrNewCandidatePage />} />
                    <Route path="/managerleavepredictionpage" element={<ManagerLeavePredictionPage />} />
                    <Route path="/hrleavepredictionpage" element={<HRLeavePredictionPage />} />                      
                </Routes>
            </div>
    </div>
  );
};

export default App;

