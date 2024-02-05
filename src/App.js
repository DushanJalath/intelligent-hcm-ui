import React from 'react';

import { Route, Routes } from "react-router-dom"; 
import TimeReporting from "./components/TimeReporting"; /
import Settings from "./components/Settings"; 
import NewCandidateRootLayout from "./components/NewCandidateRootLayout";



import LeaveApprove from '../src/components/LeaveApprove';



function App() {
    return (
        <div className='App'>



            <NewCandidateRootLayout>
                <Routes>
                    <Route path="/" element={<TimeReporting />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </NewCandidateRootLayout>


        </div>
    );

}

export default App;