import React from "react";
import '../styles/RemainingLeaves.css';

const RemainingLeaves =(props)=>{
    return (
        
        <div className="container1">
        <div className="container1-menu">
           <p className="container1-title">Remaining Leaves</p>
        </div>
        <div className="block">
        <div className="data">
            <p>Sick leave</p>:
            <div className="number">
                02
            </div>

        </div>
        <div className="data">
            <p>Vacation</p>:
            <div className="number">
                04
            </div>
       </div>
        <div className="data">
            <p>Personal Leave</p>:
            <div className="number">
                05
            </div>
        </div>
        </div>
        </div>
     
    )
}

export default RemainingLeaves;