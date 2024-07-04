import '../styles/Monthlyreport.css'
import Printer from '../assets/printer.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function Frame(props) {
    const [data, setData] = useState({total_OT: '',pay_per_hour: 0,total_payment: 0});
    useEffect(() => {
        const fetchAttendanceData = async () => {
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get('http://127.0.0.1:8000/get_monthly_report', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setData(response.data);
            
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching attendance data:', error);
            }
        };
        fetchAttendanceData();
    }, []);

    return(
        <div className="monthly-report-container">
            <div className="monthly-report-title">{props.title}</div>
            <div className="monthly-report-content">
                <div className="monthly-report-content1">
                Monthly Total Time :  {data.total_OT} (hr:min:sec)
                <p>Payment per hour     :  {data.pay_per_hour}$</p>
                </div>
            <div className="monthly-report-content2">
            Total Overtime payment :<br/> {data.total_payment}$
            </div>
            </div>
            {/*<button>
            <img className="monthly-report-img" src={Printer}></img>
            </button>*/}



        </div>
    );
}

export default Frame;