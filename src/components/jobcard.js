import React from 'react';
import { FaFilePdf, FaUserPlus } from 'react-icons/fa';
import styles from '../styles/jobcard.module.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from React Router DOM

const JobCard = ({ jobTitle, jobType, workMode, file_id, vacancy_id, applyLink }) => {
    const navigate = useNavigate(); // Navigate hook for programmatic navigation

    const pdfIconStyle = {
        color: '#ff0000',
        fontSize: '30px',
        cursor: 'pointer',
    };

    const userType = localStorage.getItem('userType');

    const handlePdfDownload = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/file/${file_id}`);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${jobTitle}.pdf`); // Set desired file name here
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (error) {
            console.error("Failed to download PDF:", error);
            // Handle error gracefully
        }
    };

    const handleApply = () => {
        if (userType === 'Employee' || userType === 'Manager' || userType === 'HR') {
            navigate('/staff-submit-form', { state: { vacancy_id } });
        } else {
            navigate('/candidate-submit-form', { state: { vacancy_id } });
        }
    };

    return (
        <div className={styles.jobcard}>
            <div className={styles.text1}>{jobTitle}</div>
            <div className={styles.text2}>Job Type: {jobType}</div>
            <div className={styles.text3}>Work Mode: {workMode}</div>
            <div className={styles.text4}>
                <p style={{ fontWeight: 550, fontSize: '14px' }}>For more detailed information about this job vacancy, please download the PDF.</p>
                <a
                    href={`/file/${file_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: '5px' }}
                    onClick={(e) => {
                        e.stopPropagation(); // Prevents event propagation
                        e.preventDefault(); // Prevents default anchor behavior (optional)
                        handlePdfDownload(); // Initiates PDF download
                    }}
                >
                </a>
                <br />
                <FaFilePdf style={pdfIconStyle} onClick={handlePdfDownload} />
                <br />
                <button className={styles.cvuploadbutton} onClick={handleApply}>
                    Apply <FaUserPlus className={styles.applyIcon} />
                </button>
            </div>
        </div>
    );
};

export default JobCard;
