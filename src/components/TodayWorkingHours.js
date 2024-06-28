import '../styles/todayWHours.css';
import React, { useState, useEffect } from 'react';
import api from '../api';

const TodayWorkingHours = ({ title, time }) => {
  const [currentTime, setCurrentTime] = useState('');

  const getTimeFromDB = async () => {
    try {
      const accessToken = localStorage.getItem('token');
      console.log('Access Token:', accessToken);
      console.log('Request Headers:', {
        Authorization: `Bearer ${accessToken}`
      });

      const timeData = {
        date: new Date().toISOString().split('T')[0]
      };

      const response = await api.post('http://localhost:8000/total-work-milliseconds', timeData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data.totalTime;
    } catch (error) {
      console.error('Error:', error);
      return 0;
    }
  };

  useEffect(() => {
    const convertMillisecondsToTime = (ms) => {
      const totalSeconds = Math.floor(ms / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    const fetchAndSetTime = async () => {
      const dbTime = await getTimeFromDB();
      console.log("time get from db ",dbTime)
      const totalTime = time + dbTime;
      console.log("total time ",totalTime)
      const formattedTime = convertMillisecondsToTime(totalTime);
      setCurrentTime(formattedTime);
      console.log("fromatted time ",formattedTime)
    };

    fetchAndSetTime();
  }, [time]);

  return (
    <div className='container-2'>
      <div className='title-2'>{title}</div>
      <p className='time-2'>{currentTime}</p>
    </div>
  );
};

export default TodayWorkingHours;
