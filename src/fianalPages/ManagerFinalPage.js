import React from "react";
import {Route, Routes} from "react-router-dom";
import ManagerRootLayout from "../components/ManagerRootLayout";


export default function ManagerFinalPage () {
    return (

        <ManagerRootLayout>
            <Routes>
                {/*<Route path="/" element={<TimeReporting />} />*/}
                {/*<Route path="/settings" element={<Settings />} />*/}
            </Routes>
        </ManagerRootLayout>
    )
}