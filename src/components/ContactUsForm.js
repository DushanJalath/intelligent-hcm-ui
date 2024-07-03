import React, { useState,useEffect } from 'react';
import axios from "axios";
import { Button } from "@mui/material";
import '../styles/contactUsForm.css';

function ContactUsForm(props) {
    const { title } = props;
    const [userEmail, setUserEmail] = useState('');
    const [userContactNumber, setUserContactNumber] = useState('');
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackColor, setFeedbackColor] = useState('');

    useEffect(() => {
        setIsSubmitEnabled(userEmail && userContactNumber && feedback);
    }, [userEmail, userContactNumber, feedback]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = {
                user_email: userEmail,
                user_contact_number: userContactNumber,
                feedback: feedback,
            };

            const response = await axios.post('http://localhost:8000/contact_us', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.data);

            // Set success feedback message
            setFeedbackMessage('Feedback submitted successfully');
            setFeedbackColor('green');

            // Reset form after successful submission
            setUserEmail('');
            setUserContactNumber('');
            setFeedback('');
            setIsSubmitEnabled(false); // Disable submit button after successful submission
        } catch (error) {
            console.error('Error submitting feedback:', error);
            // Set error feedback message
            setFeedbackMessage('Error submitting. Please try again.');
            setFeedbackColor('red');
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setUserEmail('');
        setUserContactNumber('');
        setFeedback('');
        setFeedbackMessage('');
        setFeedbackColor('');
        setIsSubmitEnabled(false); // Ensure submit button is disabled after reset
    };

    return (
        <div className='container-contact-us'>
            <div className='title-contact-us'>{title}</div>
            <p className='contactUsDescription'>We'd love to hear from you!</p>
            <form onSubmit={handleSubmit}>
                <div className='grpContactUs'>
                    <label>User Email:</label>
                    <input type="email" placeholder='User Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="text-input" />
                </div>
                <div className='grpContactUs'>
                    <label>User Contact Number:</label>
                    <input type="text" placeholder='User Contact Number' value={userContactNumber} onChange={(e) => setUserContactNumber(e.target.value)} className="text-input" />
                </div>
                <div className='grpContactUs'>
                    <label>Feedback:</label>
                    <textarea placeholder='Your Feedback' value={feedback} onChange={(e) => setFeedback(e.target.value)} className="textarea-input" />
                </div>
                <div className='grpContactUs buttons'>
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        size="medium"
                        style={{ borderRadius: "20px", textTransform: "none" }}
                        disabled={!isSubmitEnabled || loading}
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        size="medium"
                        style={{ borderRadius: "20px", textTransform: "none" }}
                        onClick={handleReset}
                        disabled={loading}
                    >
                        Reset
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

export default ContactUsForm;
