import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeLeaveDashboard() {
    const [employeeLeaveData, setEmployeeLeaveData] = useState(null); // Only one latest record
    const [loading, setLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackColor, setFeedbackColor] = useState('');

    useEffect(() => {
        const fetchEmployeeLeaveData = async () => {
            setLoading(true);
            try {
                const accessToken = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8000/get_employee_leave_count', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });
                const sortedData = response.data.sort((a, b) => new Date(b.submitdate) - new Date(a.submitdate));
                setEmployeeLeaveData(sortedData[0]);
            } catch (error) {
                console.error('Error fetching employee leave data:', error);
                setFeedbackMessage('Error fetching data. Please try again.');
                setFeedbackColor('red');
            } finally {
                setLoading(false);
            }
        };

        fetchEmployeeLeaveData();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className='dashboard-container'>
            <h2>Employee Leave Count Dashboard</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                employeeLeaveData && (
                    <div>
                        <h3>Latest Employee Leave Counts:</h3>
                        <ul>
                            <li>
                                <strong>Sick Leave Count:</strong> {employeeLeaveData.sickLeaveCount}<br />
                                <strong>Annual Leave Count:</strong> {employeeLeaveData.annualLeaveCount}<br />
                                <strong>Casual Leave Count:</strong> {employeeLeaveData.casualLeaveCount}<br />
                                <strong>Submit Date:</strong> {formatDate(employeeLeaveData.submitdate)}<br />
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

export default EmployeeLeaveDashboard;
