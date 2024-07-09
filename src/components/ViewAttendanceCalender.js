
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/ViewAttendanceCalender.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



const CalendarComponent = ({ title }) => {
    const attendance1 = [
          { day: 1, month: 5, year: 2023 },
          { day: 3, month: 5, year: 2023 },
          { day: 11, month: 5, year: 2024 },
          { day: 12, month: 5, year: 2024 },
          { day: 20, month: 6, year: 2024 },
    ];
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        // Function to get token (assuming it's stored in localStorage)
        
    
        const fetchAttendanceData = async () => {
          const token = localStorage.getItem('token');
    
          try {
            const response = await axios.get('http://127.0.0.1:8000/employee_view_attendance_calender', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            setAttendance(response.data);
            console.log(response.data)
          } catch (error) {
            console.error('Error fetching attendance data:', error);
          }
        };
        fetchAttendanceData();
      }, []);
      
        const tileClassName = ({ date, view }) => {
          if (view === 'month') {
            const day = date.getDate();
            const month = date.getMonth() + 1; // Months are 0-indexed
            const year = date.getFullYear();
      
            const isPresent = attendance.some(
              (d) => d.day === day && d.month === month && d.year === year
            );
            if (isPresent) return 'present';

            return 'absent';
          }
          return null;
        };
       
          
  return (
    <div className='view-attendance-calender-container'>
                        <div className="managers-attendances-title">{title}</div>
            <p className='requestLeavedescription'>
            Overview of attendance patterns.
            </p>
    <div>
        <Calendar tileClassName={tileClassName}  />
    </div>
    </div>
  );
};

export default CalendarComponent;
