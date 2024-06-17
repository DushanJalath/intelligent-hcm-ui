import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ManagerLeaveDashboard() {
    const [managerLeaveData, setManagerLeaveData] = useState(null); // Only one latest record
    const [loading, setLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackColor, setFeedbackColor] = useState('');

    useEffect(() => {
        const fetchManagerLeaveData = async () => {
            setLoading(true);
            try {
                const accessToken = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8000/get_manager_leave_count', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });
                const sortedData = response.data.sort((a, b) => new Date(b.submitdate) - new Date(a.submitdate));
                setManagerLeaveData(sortedData[0]);
            } catch (error) {
                console.error('Error fetching manager leave data:', error);
                setFeedbackMessage('Error fetching data. Please try again.');
                setFeedbackColor('red');
            } finally {
                setLoading(false);
            }
        };

        fetchManagerLeaveData();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className='dashboard-container'>
            <h2>Manager Leave Count Dashboard</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                managerLeaveData && (
                    <div>
                        <h3>Latest Manager Leave Counts:</h3>
                        <ul>
                            <li>
                                <strong>Sick Leave Count:</strong> {managerLeaveData.sickLeaveCount}<br />
                                <strong>Annual Leave Count:</strong> {managerLeaveData.annualLeaveCount}<br />
                                <strong>Casual Leave Count:</strong> {managerLeaveData.casualLeaveCount}<br />
                                <strong>Submit Date:</strong> {formatDate(managerLeaveData.submitdate)}<br />
                            </li>
                        </ul>
                    </div>
                )
            )}
            {feedbackMessage && (
                <p className="feedback-message" style={{ color: feedbackColor }}>
                    {feedbackMessage}
                </p>
            )}
        </div>
    );
}

export default ManagerLeaveDashboard;
