import '../styles/todayWHours.css'
import React, { useState, useEffect } from 'react';

const TodayWorkingHours = (props) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // Format the time components with leading zeros
      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

      // Combine the components into the time string
      const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

      // Update the state with the current time
      setCurrentTime(formattedTime);
    };

    // Update the time immediately when the component mounts
    updateCurrentTime();

    // Update the time every second
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='container-2'>
        <div className='title-2'>{props.title}</div>
        <p className='time-2'>{currentTime}</p>
    </div>
  );
};

export default TodayWorkingHours;
