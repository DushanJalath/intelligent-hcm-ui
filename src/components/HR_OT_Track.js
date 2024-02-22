import React from "react";
import'../styles/HR_OT_Track.css';
import HROTChart from "../components/HROTChart";



const HRTrackOT =()=>{
    
    const chartData_1=[45,55];

    const chartData_2=[20,80];

    const chartData_3=[75,25];

    const chartData_4=[32,68];
    
    const chartData_5=[56,44];

    const chartData_6=[20,80];

    const options={
        Tooltip:{
            enabled:false
        },
        legend: {
                display: false, 
        }
    }

    return(
       <div className="hrOTContainer">
        <div className="table">
            <table>
                <tr>
                    <td>
                        <div className="chart-container">
                            <HROTChart values={chartData_1} options={options}/>
                        </div>
                    </td>

                    <td>
                    <div className="chart-container">
                            <HROTChart values={chartData_2}/>
                        </div>
                    </td>

                    <td>
                    <div className="chart-container">
                            <HROTChart values={chartData_3}/>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                    <div className="chart-container">
                            <HROTChart values={chartData_4}/>
                        </div>
                    </td>

                    <td>
                    <div className="chart-container">
                            <HROTChart values={chartData_5}/>
                        </div>
                    </td>

                    <td>
                    <div className="chart-container">
                            <HROTChart values={chartData_6}/>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
       </div>
    )
}

export default HRTrackOT;