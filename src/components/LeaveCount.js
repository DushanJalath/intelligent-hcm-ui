import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "@mui/material";
import '../styles/leaveCount.css';
import ManagerLeaveDashboard from './ManagerLeaveDashboard.js';
import EmployeeLeaveDashboard from './EmployeeLeaveDashboard.js';

function LeaveCount({ title }) {
    const [type, setType] = useState('');
    const [sickLeaveCount, setSickCount] = useState('');
    const [casualLeaveCount, setCasualCount] = useState('');
    const [annualLeaveCount, setAnnualCount] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackColor, setFeedbackColor] = useState('');

    useEffect(() => {
        setIsSubmitEnabled(sickLeaveCount !== '' && casualLeaveCount !== '' && annualLeaveCount !== '' && type !== '');
    }, [sickLeaveCount, casualLeaveCount, annualLeaveCount, type]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const timezoneOffset = 5.5 * 60 * 60 * 1000;
            const submitdate = new Date(Date.now() + timezoneOffset).toISOString();

            const data = {
                sickLeaveCount: sickLeaveCount,
                casualLeaveCount: casualLeaveCount,
                annualLeaveCount: annualLeaveCount,
                submitdate: submitdate,
            };

            const accessToken = localStorage.getItem('token');
            let endpoint = '';

            if (type === 'Manager') {
                endpoint = 'http://localhost:8000/manager_leave_count';
            } else if (type === 'Employee') {
                endpoint = 'http://localhost:8000/employee_leave_count';
            }

            const response = await axios.post(endpoint, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.data);
            setFeedbackMessage('Leave Count Submit Successfully.');
            setFeedbackColor('green');

            setSickCount('');
            setCasualCount('');
            setAnnualCount('');
            setType('');
            setIsSubmitEnabled(false);
        } catch (error) {
            console.error('Error submitting request:', error);
            setFeedbackMessage('Error submitting. Please try again.');
            setFeedbackColor('red');
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setSickCount('');
        setCasualCount('');
        setAnnualCount('');
        setType('');
        setFeedbackMessage('');
        setFeedbackColor('');
        setIsSubmitEnabled(false);
    };

    const handleSickCountChange = (e) => {
        setSickCount(e.target.value);
    };

    const handleCasualCountChange = (e) => {
        setCasualCount(e.target.value);
    };

    const handleAnnualCountChange = (e) => {
        setAnnualCount(e.target.value);
    };

    return (
        <div className='container-request-count'>
            <div className='title-request-leave'>{title}</div>
            <p className='requestLeavedescription'>Set employees and managers sick,annual and casul leaves.</p>
            <form onSubmit={handleSubmit}>
            <div className='grpRequestLeaveCount'>
                    <label>Select User Type</label>
                    <select value={type} onChange={(e) => setType(e.target.value)} className='select-leave-type'>
                        <option value=''>Select Type</option>
                        <option value='Manager'>Manager</option>
                        <option value='Employee'>Employee</option>
                    </select>
                </div>
                <div className='grpRequestLeaveCount'>                
                    <label>Sick Leave Count :</label>
                    <input
                        type="number"
                        placeholder='Sick Leave Count'
                        value={sickLeaveCount}
                        onChange={handleSickCountChange}
                    />
                    <label>Casual Leave Count :</label>
                    <input
                        type="number"
                        placeholder='Casual Leave Count'
                        value={casualLeaveCount}
                        onChange={handleCasualCountChange}
                    />
                    <label>Annual Leave Count :</label>
                    <input
                        type="number"
                        placeholder='Annual Leave Count'
                        value={annualLeaveCount}
                        onChange={handleAnnualCountChange}
                    />
                    {feedbackMessage && <p className="feedback-message" style={{ color: feedbackColor }}>{feedbackMessage}</p>}
                </div>
                <div className='grpRequestLeaveCount buttons'>
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        size="medium"
                        style={{ borderRadius: "20px", textTransform: "none" }}
                        disabled={!isSubmitEnabled || loading}
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        size="medium"
                        style={{ borderRadius: "20px", textTransform: "none" }}
                        onClick={handleReset}
                        disabled={loading}
                    >
                        Reset
                    </Button>
                </div>
            </form>
            <ManagerLeaveDashboard/>
            <EmployeeLeaveDashboard/>
        </div>
    );
}

export default LeaveCount;