// BillStatus.js
import React from 'react';
import '../styles/BillStatus.css';

function BillStatus(props) {
    return (
        <div className='bill-status-container'>
            <div className='bill-status-title'>{props.title}</div>
            <p className='billdescription'>Gives a quick update on whether a bill is Pending, Approved, or Rejected.</p>
            {props.bills.map((bill, index) => (
                <div key={index} className={`bill-status-card ${bill.status.toLowerCase()}`}>
                    <div className="bill-part">
                        <p className="bill-label">Leave Type:</p>
                        <p className="bill-value">{bill.leaveType}</p>
                    </div>
                    <div className="bill-part">
                        <p className="bill-label">Start Date:</p>
                        <p className="bill-value">{bill.startDate}</p>
                    </div>
                    <div className="bill-part">
                        <p className="bill-label">End Date:</p>
                        <p className="bill-value">{bill.endDate}</p>
                    </div>
                    <div className="bill-part">
                        <p className="bill-label">Status:</p>
                        <p className={`status-bill-value ${bill.status.toLowerCase()}`}>{bill.status}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BillStatus;
