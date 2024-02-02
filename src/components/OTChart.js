import React from "react";
import { Doughnut } from "react-chartjs-2";
import '../styles/OTChart.css'
import NameTag from "./NameTag";

import {Chart as ChartJS,
ArcElement,
Tooltip,
Legend} from 'chart.js';

ChartJS.register (
    ArcElement,
    Tooltip,
    Legend
);


const OTChart = ({values})=>{

    const chartData={
        labels: ['Completed','Remaining'],
        datasets:[{
            data:values,
            backgroundColor:['#16C098','#000000'],
        }]
    };

    const chartOptions={
        cutout: '70%',
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
    <div className="container2">

        <NameTag/>

        <div className="chart">
            <Doughnut 
                data={chartData} 
                options={chartOptions}>
            </Doughnut>
        </div>
        </div>
    )
}

export default OTChart;