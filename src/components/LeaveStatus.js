// LeaveStatus.js
import React, { useState } from 'react';
import '../styles/leavestatus.css';

function LeaveStatus(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const leavesPerPage = 10; // Number of leave cards per page

    // Calculate total pages
    const totalPages = Math.ceil(props.leaves.length / leavesPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    // Calculate the index of the first and last leave card to display on the current page
    const startIndex = (currentPage - 1) * leavesPerPage;
    const endIndex = Math.min(startIndex + leavesPerPage, props.leaves.length);

    return (
        <div className='leave-status-container'>
            <div className='leave-status-title'>{props.title}</div>
            <p className='leavedescription'>Gives a quick update on whether a leave is Pending, Approved, or Rejected.</p>
            {props.leaves.slice(startIndex, endIndex).map((leave, index) => (
                <div key={index} className={`leave-status-card ${leave.status.toLowerCase()}`}>
                    <div className="leave-part">
                        <p className="leave-label">Leave Type:</p>
                        <p className="leave-value">{leave.leaveType}</p>
                    </div>
                    <div className="leave-part">
                        <p className="leave-label">Start Date:</p>
                        <p className="leave-value">{leave.startDate}</p>
                    </div>
                    <div className="leave-part">
                        <p className="leave-label"> Number of Days:</p>
                        <p className="leave-value">{leave.noOfDays}</p>
                    </div>
                    <div className="leave-part">
                        <p className="leave-label">Status:</p>
                        <p className={`status-leave-value ${leave.status.toLowerCase()}`}>{leave.status}</p>
                    </div>
                </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button onClick={handlePreviousPage} style={{ marginRight: '10px' }} disabled={currentPage === 1}>Previous</button>
                {[...Array(totalPages).keys()].map((page) => (
                    <button 
                        key={page + 1} 
                        onClick={() => handlePageChange(page + 1)} 
                        style={{ marginRight: '10px' }} 
                        className={`pagination-button ${currentPage === page + 1 ? 'active' : ''}`}
                    >
                        {page + 1}
                    </button>
                ))}
                <button onClick={handleNextPage} style={{ marginLeft: '10px' }} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
}

export default LeaveStatus;
