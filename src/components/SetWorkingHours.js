import '../styles/setWorkingHours.css';
import ProjectType from './ProjectType';
import React, { useState, useEffect } from 'react';

function SetWorkingHours({ title, getTodayWorkingHours }) {
    const [time, setTime] = useState('');

    const handleTime = (time2) => {
        setTime(time2);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            getTodayWorkingHours(time);
        }, 500);
        
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [time, getTodayWorkingHours]);

    return (
        <div className='container-working-hours-set-working-hours'>
            <div className='selectProject-title-set-working-hours'>{title}</div>
            <div className='list-set-working-hours'>
                <ProjectType
                    content="Work Task"
                    getTime={handleTime}
                />
                <ProjectType
                    content="Shop Order Operations"
                    getTime={handleTime}
                />
                <ProjectType
                    content="Project Activities"
                    getTime={handleTime}
                />
                <ProjectType
                    content="External"
                    getTime={handleTime}
                />
            </div>
        </div>
    );
}

export default SetWorkingHours;
