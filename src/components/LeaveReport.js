import React, { useState } from 'react';
import { Button } from "@mui/material";
import axios from 'axios';
import '../styles/leaveReport.css'; // Assuming this is your CSS file for LeaveReport

function LeaveReport() {
    const [userEmail, setUserEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackColor, setFeedbackColor] = useState('');

    const handleDownloadPDF = async () => {
        setLoading(true);

        try {
            const accessToken = localStorage.getItem('token');
            const url = `http://localhost:8000/leave_report${userEmail ? `?email=${encodeURIComponent(userEmail)}` : ''}`;
            
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                responseType: 'blob', // Ensure response type is blob for binary data like PDF
            });

            // Simulate downloading the PDF
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const urlPdf = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = urlPdf;
            link.setAttribute('download', `leave_report_${userEmail || 'all'}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);

            setFeedbackMessage('PDF downloaded successfully');
            setFeedbackColor('green');
        } catch (error) {
            console.error('Error downloading PDF:', error);
            setFeedbackMessage('Error downloading PDF. Please try again.');
            setFeedbackColor('red');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='container-leave-report'>
            <div className='title-leave-report'>Leave Report</div>
            <p className='leaveReportDescription'>Download leave report as PDF.</p>
            <form>
                <div className='grpLeaveReport'>
                    <label>User Email:</label>
                    <input type="email" placeholder='Your Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="email-input" />
                </div>
                <div className='grpLeaveReport buttons'>
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        style={{ borderRadius: "20px", textTransform: "none" }}
                        onClick={handleDownloadPDF}
                        disabled={loading}
                    >
                        {loading ? 'Downloading...' : 'Download PDF'}
                    </Button>
                </div>
                {feedbackMessage && (
                    <p className="feedback-message" style={{ color: feedbackColor }}>
                        {feedbackMessage}
                    </p>
                )}
            </form>
        </div>
    );
}

export default LeaveReport;
