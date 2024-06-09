import React from "react";
import '../styles/RemainingLeaves.css';

const RemainingLeaves = (props) => {
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
                        02
                    </div>
                </div>
                <div className="remaining-leaves-data">
                    <p>Vacation</p>
                    <div className="remaining-leaves-number">
                        04
                    </div>
                </div>
                <div className="remaining-leaves-data">
                    <p>Personal Leave</p>
                    <div className="remaining-leaves-number">
                        05
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RemainingLeaves;
