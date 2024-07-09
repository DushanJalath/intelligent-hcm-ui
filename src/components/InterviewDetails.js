// InterviewDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import sendEmailToInterviewer from './sendEmailToInterviewer';
import '../styles/InterviewDetails.css';

const InterviewDetails = ({ title }) => {
    const [interviews, setInterviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sentEmails, setSentEmails] = useState({}); 
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchInterviews = async () => {
            try {
                const accessToken = localStorage.getItem('token'); // Adjust based on your authentication method
                const response = await axios.get('http://localhost:8000/get_interviews', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });
                setInterviews(response.data);
            } catch (error) {
                setError('Failed to fetch interviews');
            } finally {
                setLoading(false);
            }
        };

        fetchInterviews();
    }, []);

    const handleSendEmail = async (c_id) => {
        try {
            await sendEmailToInterviewer(c_id);
            setSentEmails((prev) => ({ ...prev, [c_id]: true }));
            alert('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Email sending failed. Please try again.');
        }
    };

    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = interviews.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(interviews.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handlePreviousPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="interview-details-container">
            <div className="interview-details-title">{title}</div>
            {interviews.length === 0 ? (
                <div>No interviews to show</div>
            ) : (
                <>
                    <table className="interview-details-table">
                        <thead>
                            <tr>
                                <th>I ID</th>
                                <th>C ID</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Venue</th>
                                <th>Interviewer</th>
                                <th>Confirmed Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((interview) => (
                                <tr key={interview.ID}>
                                    <td>{interview.i_id}</td>
                                    <td>{interview.c_id}</td>
                                    <td>{interview.date}</td>
                                    <td>{interview.time}</td>
                                    <td>{interview.venue}</td>
                                    <td>{interview.interviewer_id}</td>
                                    <td>{interview.confirmed_date}</td>
                                    <td>{interview.result}</td>
                                    <td>
                                        <button
                                            className="interview-details-button"
                                            onClick={() => handleSendEmail(interview.c_id)}
                                            disabled={sentEmails[interview.c_id]}
                                        >
                                            {sentEmails[interview.c_id] ? 'Email Sent' : 'Send Email'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              onClick={handlePreviousPage}
              style={{ marginRight: "10px", fontWeight: 600 }}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map((page) => {
              const isActive = currentPage === page + 1;
              return (
                <button
                  key={page + 1}
                  onClick={() => handlePageChange(page + 1)}
                  style={{
                    marginRight: "10px",
                    padding: "8px 16px",
                    borderRadius: "25px",
                    backgroundColor: isActive ? "#218838" : "#f0f0f0",
                    color: isActive ? "white" : "black",
                    fontWeight: isActive ? "900" : "normal",
                    border: isActive ? "none" : "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  {page + 1}
                </button>
              );
            })}
            <button
              onClick={handleNextPage}
              style={{ marginLeft: "10px", fontWeight: 600 }}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
                </>
            )}
        </div>
    );
};

export default InterviewDetails;
