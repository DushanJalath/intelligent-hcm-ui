import React, { useState, useEffect } from 'react';
import '../styles/BillStatus.css';
import { AiOutlineFileText } from 'react-icons/ai';
import axios from 'axios';

function BillStatus(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [billDetails, setBillDetails] = useState([]);
    const billsPerPage = 10;

    useEffect(() => {
        const fetchBillDetails = async () => {
            const accessToken = localStorage.getItem('token');
            
            try {
                const response = await axios.get('http://127.0.0.1:8000/bill-details', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                setBillDetails(response.data.bill_details);
            } catch (error) {
                console.error('Error fetching bill details:', error);
            }
        }

        fetchBillDetails();
    }, []);

    // Calculate total pages
    const totalPages = Math.ceil(billDetails.length / billsPerPage);

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
    const endIndex = Math.min(startIndex + billsPerPage, billDetails.length);

    return (
        <div className='bill-status-container'>
            <div className='bill-status-title'>{props.title}</div>
            <p className='billdescription'>Gives a quick update on whether a bill is Pending, Approved, or Rejected.</p>
            
            {billDetails.length === 0 ? (
                <p>No Bills Found</p>
            ) : (
                <>
                    {billDetails.slice(startIndex, endIndex).map((bill, index) => (
                        <div key={index} className={`bill-status-card ${bill.status.toLowerCase()}`}>
                            <div className="bill-part">
                                <p className="bill-label">Bill Type:</p>
                                <p className="bill-value">{bill.category}</p>
                            </div>
                            <div className="bill-part">
                                <p className="bill-label">Submit Date:</p>
                                <p className="bill-value">{bill.submitdate}</p>
                            </div>
                            <div className="bill-part">
                                <p className="bill-label">Bill Icon:</p>
                                {bill.image_url ? (
                                    <a href={bill.image_url} target="_blank" rel="noopener noreferrer">
                                        <AiOutlineFileText className="bill-icon" />
                                    </a>
                                ) : (
                                    <AiOutlineFileText className="bill-icon" />
                                )}
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
                </>
            )}
        </div>
    );
}

export default BillStatus;
