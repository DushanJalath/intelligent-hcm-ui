import React from "react";
import'../styles/EmployeeOT.css';
import OTChart from "./OTChart.js";


const EmployeeOT =()=>{
    
    const chartData_1=[45,55];

    const chartData_2=[10,90];

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
       <div className="OTcharts">
        <div className="table">
            <table>
                <tr>
                    <td>
                        <div className="chart-container">
                            <OTChart values={chartData_1} options={options}/>
                        </div>
                    </td>

                    <td>
                    <div className="chart-container">
                            <OTChart values={chartData_2}/>
                        </div>
                    </td>

                    <td>
                    <div className="chart-container">
                            <OTChart values={chartData_3}/>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                    <div className="chart-container">
                            <OTChart values={chartData_4}/>
                        </div>
                    </td>

                    <td>
                    <div className="chart-container">
                            <OTChart values={chartData_5}/>
                        </div>
                    </td>

                    <td>
                    <div className="chart-container">
                            <OTChart values={chartData_6}/>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
       </div>
    )
}

export default EmployeeOT;