import React from 'react';
import { Route, Routes } from "react-router-dom"; //AllNavBars
import TimeReporting from "./components/TimeReporting"; //AllNavBars
import Settings from "./components/Settings"; //AllNavBars
// import RootLayout from "./components/RootLayout"; //EmployeeNavBar
// import ManagerRootLayout from "./components/ManagerRootLayout"; //ManagerNavBar
// import HRRootLayout from "./components/HRRootLayout"; //HRNavBar
import NewCandidateRootLayout from "./components/NewCandidateRootLayout";

/*
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



// import EmpLeave from "./components/EmpLeave";
// import RemainingLeaves from "./components/RemainingLeaves";
// import LeaveApprove from "./components/LeaveApprove";


function App() {
    return (
        <div className='App'>

            {/*Employee NavBar*/}
            {/*<RootLayout>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<TimeReporting />} />*/}
            {/*        <Route path="/settings" element={<Settings />} />*/}
            {/*    </Routes>*/}
            {/*</RootLayout>*/}



            {/*Manager NavBar*/}
            {/*<ManagerRootLayout>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<TimeReporting />} />*/}
            {/*        <Route path="/settings" element={<Settings />} />*/}
            {/*    </Routes>*/}
            {/*</ManagerRootLayout>*/}




            {/*HR NavBar*/}
            {/*<HRRootLayout>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<TimeReporting />} />*/}
            {/*        <Route path="/settings" element={<Settings />} />*/}
            {/*    </Routes>*/}
            {/*</HRRootLayout>*/}


            <NewCandidateRootLayout>
                <Routes>
                    <Route path="/" element={<TimeReporting />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </NewCandidateRootLayout>


            {/*<EmpLeave/>*/}
            {/*<RemainingLeaves />*/}
            {/*<LeaveApprove />*/}

        </div>
    );
}

export default App;