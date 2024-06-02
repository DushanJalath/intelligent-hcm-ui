import React from "react";
import { Doughnut } from "react-chartjs-2";
import '../styles/HROTChart.css'
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


const HROTChart = ({values})=>{

    const chartData={
        labels: ['Completed','Remaining'],
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
    <div className="hrot-container">

        <div className="hrot-chart">
            <div className= "hrot-name">
            <NameTag/>
            </div>
        
            <Doughnut 
                data={chartData} 
                options={chartOptions}>
            </Doughnut>
        </div>
        </div>
    )
}

export default HROTChart;