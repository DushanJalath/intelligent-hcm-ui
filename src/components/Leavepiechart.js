import React from "react";
import { Doughnut } from "react-chartjs-2";
import '../styles/Leavepiechart.css';
//import NameTag from "./NameTag";

import {Chart as ChartJS,
ArcElement,
Tooltip,
Legend} from 'chart.js';

ChartJS.register (
    ArcElement,
    Tooltip,
    Legend
);


export default function Leavepiechart({values}) {
    const chartData={
        labels: ['present','leaves'],
        datasets:[{
            data:values,
            backgroundColor:['#16C098','#000000'],
        }]
    };

    const chartOptions={
        cutout: '65%',
        tooltip:{
            enabled:false
        },
        
        plugins: {
                legend: {
                    display: false,
                }
            }  
    }

    return (
    <div className="hrot-container-piechart">

        <div className="hrot-chart-pie">
            
        
            <Doughnut 
                data={chartData} 
                options={chartOptions}>
            </Doughnut>

            <div className="hrot-values-pie">
                <p className="leavechart-p">Leave count: {values[1]}</p>
                {/* <p>{values[1]}</p> */}
            </div>
            
        </div>
        </div>
    )
}
