import React from "react";
import {Route, Routes} from "react-router-dom";
import HRRootLayout from "../components/HRRootLayout";
import HRTimeReportingPage from "../pages/HRTimeReportingPage";


export default function HRFinalPage () {
    return (

        <HRRootLayout>
            <Routes>
                <Route path="/HRTimeAndReporting" element={<HRTimeReportingPage/>}/>
                {/*<Route path="/" element={<TimeReporting />} />*/}
                {/*<Route path="/settings" element={<Settings />} />*/}
            </Routes>
        </HRRootLayout>

    )
}