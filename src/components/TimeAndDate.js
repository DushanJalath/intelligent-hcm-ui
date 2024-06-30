import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import '../styles/timeNDate.css';

const TimeAndDate = (props) => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const formattedTime = format(now, 'h:mm a');
      setCurrentTime(formattedTime);
      console.log(formattedTime);
    };

    const updateCurrentDate = () => {
      const now = new Date();

      // Get day, month, and year components
      const day = now.getDate();
      const month = now.toLocaleString('default', { month: 'long' });
      const year = now.getFullYear();

      // Update the state with the formatted date
      setCurrentDay(day);
      setCurrentMonth(month);
      setCurrentYear(year);
      console.log(day, month, year);
    };

    // Update the date immediately when the component mounts
    updateCurrentDate();

    // Update the date every day (you might need to adjust the interval)
    const intervalsId = setInterval(updateCurrentDate, 86400000); // 86400000 milliseconds = 1 day

    // Update the time immediately when the component mounts
    updateCurrentTime();

    // Update the time every minute
    const intervalId = setInterval(updateCurrentTime, 60000);

    // Clean up the intervals when the component unmounts
    return () => {
      clearInterval(intervalId);
      clearInterval(intervalsId);
    };
  }, []);

  return (
    <div className='container-1-timeNDate'>
      <div className='title-1-timeNDate'>{props.title}</div>
      <div className='timeGrp-timeNDate'>
        <span className='time-timeNDate'>{currentTime}</span>
        <div className='date-timeNDate'>
          <span>{currentDay}</span>
          <br />
          <span>{currentMonth}</span>
          <br />
          <span>{currentYear}</span>
        </div>
      </div>
    </div>
  );
};

export default TimeAndDate;
