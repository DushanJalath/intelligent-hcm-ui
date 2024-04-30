import React from "react";
import {Route, Routes} from "react-router-dom";
import HRRootLayout from "../components/HRRootLayout";


export default function HRFinalPage () {
    return (

        <HRRootLayout>
            <Routes>
                {/*<Route path="/" element={<TimeReporting />} />*/}
                {/*<Route path="/settings" element={<Settings />} />*/}
            </Routes>
        </HRRootLayout>

    )
}