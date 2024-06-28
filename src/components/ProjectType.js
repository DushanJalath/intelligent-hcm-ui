import '../styles/projectType.css';
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCircleStop, faCirclePause } from '@fortawesome/free-solid-svg-icons';
import api from '../api';

function ProjectType({ content, getTime }) {
    const [isChecked, setIsChecked] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const startTimeRef = useRef(null);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const startTimeTrack = () => {
        if (!isRunning) {
            setIsRunning(true);
            startTimeRef.current = Date.now() - elapsedTime; // Resume from where paused
            const id = setInterval(() => {
                const newElapsedTime = Date.now() - startTimeRef.current;
                setElapsedTime(newElapsedTime);
                getTime(newElapsedTime); // Call getTime with the updated time
            }, 1000);
            setIntervalId(id);
        }
    };
    

    const stopAndSaveTimeTrack = async () => {
        clearInterval(intervalId);
        setIsRunning(false);
        setIntervalId(null);
        startTimeRef.current = null;
        // Save the elapsed time to a JSON object
        const timeData = {
            date: new Date().toISOString().split('T')[0],
            project_type: content,
            totalWorkMilliSeconds: elapsedTime // Convert milliseconds to hours
        };
        
        console.log('Time Data:', JSON.stringify(timeData));
        // Reset the timer
        setElapsedTime(0);


        try {
            const accessToken = localStorage.getItem('token');
            console.log('Access Token:', accessToken);
            console.log('Request Headers:', {
                Authorization: `Bearer ${accessToken}`
            });

            const response = await api.post('http://localhost:8000/empTimeReport', timeData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'  // Ensure Content-Type header is correct
                }
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const pauseTimeTrack = () => {
        clearInterval(intervalId);
        setIsRunning(false);
        setIntervalId(null);
    };

    return (
        <div>
            {isChecked ? (
                <label className='checkbox-container checked'>
                    <input type="checkbox" onChange={handleCheckboxChange}></input>
                    <span className="checkmark"></span>
                    {content}
                    <button onClick={startTimeTrack}>
                        <FontAwesomeIcon icon={faCirclePlay} style={{ color: 'green', marginRight: '9px', marginLeft: '20px' }}/>
                    </button>
                    <button onClick={stopAndSaveTimeTrack}>
                        <FontAwesomeIcon icon={faCircleStop} style={{ color: 'red', marginRight: '9px' }}/>
                    </button>
                    <button onClick={pauseTimeTrack}>
                        <FontAwesomeIcon icon={faCirclePause} style={{ color: 'orange', marginRight: '9px' }}/>
                    </button>
                </label>
            ) : (
                <label className='checkbox-container'>
                    <input type="checkbox" onChange={handleCheckboxChange}></input>
                    <span className="checkmark"></span>
                    {content}
                </label>
            )}
        </div>
    );
}

export default ProjectType;
