import React, { useState } from 'react';
import '../styles/BillStatus.css';
import { BsFileText } from 'react-icons/bs';

function BillStatus(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const billsPerPage = 10; // Number of bill cards per page

    // Calculate total pages
    const totalPages = Math.ceil(props.bills.length / billsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    // Calculate the index of the first and last bill card to display on the current page
    const startIndex = (currentPage - 1) * billsPerPage;
    const endIndex = Math.min(startIndex + billsPerPage, props.bills.length);

    return (
        <div className='bill-status-container'>
            <div className='bill-status-title'>{props.title}</div>
            <p className='bill-description'>Gives a quick update on the status of bills - Pending, Paid, or Overdue.</p>
            {props.bills.slice(startIndex, endIndex).map((bill, index) => (
                <div key={index} className={`bill-status-card ${bill.status.toLowerCase()}`}>
                    <div className="bill-part">
                        <p className="bill-label">Bill Category:</p>
                        <p className="bill-value">{bill.billType}</p>
                    </div>
                    <div className="bill-part">
                    <p className="bill-label">Uploaded Bill:</p>
                        <BsFileText className="bill-icon" />
                    </div>
                    <div className="bill-part">
                        <p className="bill-label">Status:</p>
                        <p className={`status-bill-value ${bill.status.toLowerCase()}`}>{bill.status}</p>
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

export default BillStatus;
