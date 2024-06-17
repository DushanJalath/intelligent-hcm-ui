import React from "react";
import LeaveCount from "../components/LeaveCount";
import HRSidebar from "../components/HRSidebar";

export default function LeaveCountPage() {
    return (
        <div>
            <HRSidebar/>
            <LeaveCount title="Set Leave Count"/>          
        </div>
    );
}
