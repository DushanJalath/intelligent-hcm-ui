import React from 'react';
import { FaFilePdf } from 'react-icons/fa'; // Using react-icons for the PDF icon
import styles from '../styles/jobcard.module.css';

const JobCard = ({ jobTitle, jobType, workMode, pdfLink }) => {
  const pdfIconStyle = {
    marginTop: '10px', // Added margin to separate the text and icon
    color: '#ff0000', // Red color for the PDF icon
    fontSize: '28px', // Increased size of the PDF icon
    cursor: 'pointer', // Cursor changes to pointer on hover
  };

  const handlePdfOpen = () => {
    window.open(pdfLink, '_blank'); // Open the PDF link in a new tab
  };

  return (
    <div className={styles.jobcard}>
      <div className={styles.text1}>{jobTitle}</div>
      <div className={styles.text2}>Job Type: {jobType}</div>
      <div className={styles.text3}>Work Mode: {workMode}</div>
      <div className={styles.text4}>
        For more details
        <a
          href={pdfLink}
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Add rel attribute for security reasons
          style={{ marginLeft: '5px' }}
          onClick={(e) => e.stopPropagation()} // Prevent default behavior for anchor click
        >
          View PDF.
        </a>
        <br />
        <FaFilePdf style={pdfIconStyle} onClick={handlePdfOpen} />
      </div>
    </div>
  );
};

export default JobCard;
