import React, { useState, useEffect } from 'react';
import { FaFilePdf, FaUserPlus, FaTrash } from 'react-icons/fa';
import styles from '../styles/jobcard.module.css';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ jobTitle, jobType, workMode, file_id, vacancy_id, applyLink }) => {
    const navigate = useNavigate();
    const userType = localStorage.getItem('userType');
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handlePdfDownload = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/download_vacancy-pdf/${file_id}`);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${jobTitle}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (error) {
            console.error("Failed to download PDF:", error);
        }
    };

    const handleApply = () => {
        if (userType === 'Employee' || userType === 'Manager' || userType === 'HR') {
            navigate('/staff-submit-form', { state: { vacancy_id } });
        } else {
            navigate('/candidate-submit-form', { state: { vacancy_id } });
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/vacancy/${vacancy_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers as needed
                },
                // Optionally, pass a body if your backend expects data
            });
            if (response.ok) {
                console.log(`Vacancy with ID ${vacancy_id} deleted successfully.`);
                // Refresh the page after deletion
                window.location.reload();
            } else {
                console.error(`Failed to delete vacancy with ID ${vacancy_id}.`);
                // Handle error scenario
            }
        } catch (error) {
            console.error("Error deleting vacancy:", error);
            // Handle network or other errors
        } finally {
            // Close the modal regardless of success or failure
            setShowDeleteModal(false);
        }
    };

    const renderStopButton = () => {
        if (userType === 'HR') {
            return (
                <>
                    <button className={`${styles.cvuploadbutton} ${styles.stopButton}`} onClick={() => setShowDeleteModal(true)}>
                        Delete <FaTrash className={styles.applyIcon} />
                    </button>
                    {showDeleteModal && (
                        <div className={styles.modal}>
                            <div className={styles.modalContent}>
                                <p>Are you sure you want to delete this vacancy?</p>
                                <div>
                                    <button className={styles.modalButton} onClick={handleDelete}>Yes</button>
                                    <button className={styles.modalButton} onClick={() => setShowDeleteModal(false)}>No</button>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            );
        }
        return null; // Don't render the button for other user types
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
                        e.stopPropagation();
                        e.preventDefault();
                        handlePdfDownload();
                    }}
                >
                    <FaFilePdf style={{ color: '#ff0000', fontSize: '30px', cursor: 'pointer' }} />
                </a>
                <br />
                <button className={styles.cvuploadbutton} onClick={handleApply}>
                    Apply <FaUserPlus className={styles.applyIcon} />
                </button>
                {renderStopButton()} {/* Render Stop button conditionally */}
            </div>
        </div>
    );
};

export default JobCard;
