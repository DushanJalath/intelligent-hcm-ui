import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "@mui/material";
import '../styles/leaveRequestForm.css';

function LeaveRequestForm(props) {
    const [userName, setUserName] = useState('');
    const [userID, setUserID] = useState('');
    const [category, setCategory] = useState('');
    const [startDate, setStartDate] = useState('');
    const [numOfDays, setNumOfDays] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackColor, setFeedbackColor] = useState('');

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleUserIDChange = (e) => {
        setUserID(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    useEffect(() => {
        if (userName && userID && category && startDate && numOfDays) {
            setIsSubmitEnabled(true);
        } else {
            setIsSubmitEnabled(false);
        }
    }, [userName, userID, category, startDate, numOfDays]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = {
                user_name: userName,
                user_id: userID,
                request_type: category,
                start_date: startDate,
                num_of_days: numOfDays
            };

            const response = await axios.post('http://localhost:8000/upload-request/', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.data);

            // Set success feedback message
            setFeedbackMessage('Leave request submitted successfully');
            setFeedbackColor('green');

            // Reset form after submission
            setUserName('');
            setUserID('');
            setCategory('');
            setStartDate('');
            setNumOfDays('');
        } catch (error) {
            console.error('Error submitting request:', error);
            setFeedbackMessage('Error submitting. Please try again.');
            setFeedbackColor('red');
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setUserName('');
        setUserID('');
        setCategory('');
        setStartDate('');
        setNumOfDays('');
        setFeedbackMessage('');
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className='container-request-leave'>
            <div className='title-request-leave'>{props.title}</div>
            <p className='requestLeavedescription'>Submit your leave request for HR.</p>
            <form onSubmit={handleSubmit}>
                <div className='grpRequestLeave'>
                    <label>User Name:</label>
                    <input type="text" placeholder='User Name' value={userName} onChange={handleUserNameChange} />
                </div>
                <div className='grpRequestLeave'>
                    <label>User ID:</label>
                    <input type="text" placeholder='User ID' value={userID} onChange={handleUserIDChange} />
                </div>
                <div className='grpRequestLeave'>
                    <label>Leave Type:</label>
                    <select value={category} onChange={handleCategoryChange} className='select-leave-type'>
                        <option value=''>Select Leave Type</option>
                        <option value='Sick Leave'>Sick Leave</option>
                        <option value='Casual Leave'>Casual Leave</option>
                        <option value='Maternity Leave'>Maternity Leave</option>
                        <option value='Paternity Leave'>Paternity Leave</option>
                        <option value='Annual Leave'>Annual Leave</option>
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
