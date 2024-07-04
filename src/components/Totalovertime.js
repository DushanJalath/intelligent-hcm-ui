import  '../styles/Totalovertime.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Totalovertime(props) {
    const [data, setData] = useState();
    useEffect(() => {
        
        const fetchData = async () => {
            const token = localStorage.getItem('token');
          try {
            const response = await axios.get(props.url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }); 
            setData(response.data); 
            console.log(response.data);
          } catch (err) {
            console.log(err.message);
          }
        };
    
        fetchData();
      }, []);

    return(
        

        <div className="total-overtime-container">
            <div className="total-overtime-title">{props.title}</div>
            
                <div className="total-overtime-content">
                    <span id="total-overtime-time1">{data}</span>
                    <span id="total-overtime-time2">(hr : min : sec)</span>
                </div>
                
            </div>
    );
}

export default Totalovertime;