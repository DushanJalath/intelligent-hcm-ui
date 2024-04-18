import React from 'react';
import '../styles/LeaveStatusButton.css'; // Import the CSS file

const LeaveStatusButton = ({ status }) => {
    return (
        <div>
            <div>
                <button
                    className={`status-button ${status}`} // Apply dynamic classes based on status
                    disabled
                >
                    {status === 'approved' ? 'Approved' : status === 'pending' ? 'Pending' : 'Rejected'}
                </button>
            </div>
        </div>
    );
};

export default LeaveStatusButton;