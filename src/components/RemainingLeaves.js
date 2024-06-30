import React from "react";
import '../styles/RemainingLeaves.css';

const RemainingLeaves = ({ leaveCounts }) => {
    return (
        <div className="remaining-leaves-container">
            <div className="remaining-leaves-menu">
                <p className="remaining-leaves-title">Remaining Leave Count</p>
                <p className='requestLeavedescription'>View your remaining leave balance here.</p>
            </div>
            <div className="remaining-leaves-block">
                <div className="remaining-leaves-data">
                    <p>Sick leave</p>
                    <div className="remaining-leaves-number">
                        {leaveCounts.SickLeaveCount}
                    </div>
                </div>
                <div className="remaining-leaves-data">
                    <p>Annual Leave</p>
                    <div className="remaining-leaves-number">
                        {leaveCounts.AnnualLeaveCount}
                    </div>
                </div>
                <div className="remaining-leaves-data">
                    <p>Casual Leave</p>
                    <div className="remaining-leaves-number">
                        {leaveCounts.CasualLeaveCount}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RemainingLeaves;
