import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "@mui/material";
import '../styles/leaveRequestForm.css';

function LeaveRequestForm(props) {
    const { title, leaveCounts } = props;
    const [category, setCategory] = useState('');
    const [startDate, setStartDate] = useState('');
    const [numOfDays, setNumOfDays] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackColor, setFeedbackColor] = useState('');

    useEffect(() => {
        setIsSubmitEnabled(category && startDate && numOfDays && !isExceedingLeaveCount());
    }, [category, startDate, numOfDays, leaveCounts]);

    const isExceedingLeaveCount = () => {
        if (category === 'Sick Leave' && numOfDays > leaveCounts.SickLeaveCount) {
            setFeedbackMessage('Exceed Leave Count');
            setFeedbackColor('red');
            return true;
        } else if (category === 'Annual Leave' && numOfDays > leaveCounts.AnnualLeaveCount) {
            setFeedbackMessage('Exceed Leave Count');
            setFeedbackColor('red');
            return true;
        } else if (category === 'Casual Leave' && numOfDays > leaveCounts.CasualLeaveCount) {
            setFeedbackMessage('Exceed Leave Count');
            setFeedbackColor('red');
            return true;
        } else {
            setFeedbackMessage('');
            setFeedbackColor('');
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const timezoneOffset = 5.5 * 60 * 60 * 1000; // Offset in milliseconds for UTC+5:30
            const submitdate = new Date(Date.now() + timezoneOffset).toISOString().split('T')[0];
            const submitdatetime = new Date(Date.now() + timezoneOffset).toISOString();        

            const data = {
                user_email: 't@gmail.com', // Assuming this is static for now
                leaveType: category,
                startDate: startDate,
                dayCount: numOfDays,
                submitdate: submitdate,
                submitdatetime: submitdatetime,
            };

            const accessToken = localStorage.getItem('token');
            const response = await axios.post('http://localhost:8000/manager_create_leave_request', data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.data);

            // Set success feedback message
            setFeedbackMessage('Leave request submitted successfully');
            setFeedbackColor('green');

            // Reset form after successful submission
            setCategory('');
            setStartDate('');
            setNumOfDays('');
            setIsSubmitEnabled(false); // Disable submit button after successful submission
        } catch (error) {
            console.error('Error submitting request:', error);
            // Set error feedback message
            setFeedbackMessage('Error submitting. Please try again.');
            setFeedbackColor('red');
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setCategory('');
        setStartDate('');
        setNumOfDays('');
        setFeedbackMessage('');
        setFeedbackColor('');
        setIsSubmitEnabled(false); // Ensure submit button is disabled after reset
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className='container-request-leave'>
            <div className='title-request-leave'>{title}</div>
            <p className='requestLeavedescription'>Submit your leave request for HR.</p>
            <form onSubmit={handleSubmit}>
                <div className='grpRequestLeave'>
                    <label>Leave Type:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className='select-leave-type'>
                        <option value=''>Select Leave Type</option>
                        <option value='Sick Leave' disabled={leaveCounts.SickLeaveCount === 0}>Sick Leave</option>
                        <option value='Annual Leave' disabled={leaveCounts.AnnualLeaveCount === 0}>Annual Leave</option>
                        <option value='Casual Leave' disabled={leaveCounts.CasualLeaveCount === 0}>Casual Leave</option>
                    </select>
                </div>
                <div className='grpRequestLeave'>
                    <label>Leave Start Date:</label>
                    <input type="date" placeholder='Leave Start Date' value={startDate} onChange={(e) => setStartDate(e.target.value)} className="date-input" min={today} />
                </div>
                <div className='grpRequestLeave'>
                    <label>Number of Days:</label>
                    <input type="number" placeholder='Number of Days' value={numOfDays} onChange={(e) => setNumOfDays(e.target.value)} />
                </div>
                <div className='grpRequestLeave buttons'>
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
                {feedbackMessage && (
                    <p className="feedback-message" style={{ color: feedbackColor }}>
                        {feedbackMessage}
                    </p>
                )}
            </form>
        </div>
    );
}

export default LeaveRequestForm;