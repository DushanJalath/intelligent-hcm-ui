import React, { useState } from 'react';
import { ImCheckmark,ImCross } from "react-icons/im";
import '../styles/hrjobvacancystatusbuttons.css';

export default function HrJobVacancyStatusButtons({ onStatusChange }) {
  const [status, setStatus] = useState(null);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    onStatusChange(newStatus);
  };

  return (
    <div className='btn-types align-items-center'>
      <div className='btn-panel flex '>
        {status === null && (
          <>
           <button className='img-button1' onClick={() => handleStatusChange(<span className='apre1'>Approved&nbsp;&nbsp;<ImCheckmark /></span>)}>
            Approve
            </button>

            <button className='img-button2' onClick={() => handleStatusChange(<span className='apre2'>Rejected&nbsp;&nbsp;<ImCross /></span>)}>
              Reject
            </button>
          </>
        )}
      </div>
      {status && <p className='btn-status'>{status}</p>}
    </div>
  );
}
