import React from "react";
import HRTrackOT from "../components/HR_OT_Track";
import HRSidebar from "../components/HRSidebar";
import SwitchView from "../components/SwitchView";
import '../styles/HROTTrackingPage.css';

const OverTimetrackingPageEmp=()=>{
    return(
        <>
        <div className="hr-ot-tracking">
        
            <HRSidebar/>

            <div className="slide-bar">
                <SwitchView option1="Employee" page1="" option2="Manager" page2=""/>
            </div>

            <div className="hr-ot-sub-container">
                <HRTrackOT/>
            </div>
        </div>
        
          
        </>
    )
}

export default OverTimetrackingPageEmp