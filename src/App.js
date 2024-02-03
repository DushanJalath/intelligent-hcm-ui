/* //NavBar Code
import RootLayout from "./components/RootLayout"; //NavBar
import { Route, Routes } from "react-router-dom"; //NavBar
import TimeReporting from "./components/TimeReporting"; //NavBar
import Settings from "./components/Settings"; //NavBar



const App = () => {
    return (
        <RootLayout>
            <Routes>
                <Route path="/" element={<TimeReporting />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </RootLayout>
    );
};

export default App;
 */



import React from 'react';
import LeaveApprove from '../src/components/LeaveApprove';


function App() {
    return (
        <div className='App'>
            <LeaveApprove />
        </div>
    );
}

export default App;