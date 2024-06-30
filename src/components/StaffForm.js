import '../styles/employeeSubmitForm.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from 'react-router-dom';

function StaffForm({ title, vacancy_id }) {
    // State variables using useState hook
    const [name, setName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [cvFile, setCvFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const [contactError, setContactError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [cvError, setCvError] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackColor, setFeedbackColor] = useState('');
    const [isResetDisabled, setIsResetDisabled] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (name && contactNo && email && cvFile && !contactError && !emailError && !cvError) {
            setIsSubmitEnabled(true);
        } else {
            setIsSubmitEnabled(false);
        }
    }, [name, contactNo, email, cvFile, contactError, emailError, cvError]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleContactNoChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setContactNo(value);
            setContactError('');
        } else {
            setContactError('Only numbers are allowed');
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!value.includes('@')) {
            setEmailError('Email must contain "@" sign');
        } else {
            setEmailError('');
        }
    };

    const handleCvDrop = (e) => {
        e.preventDefault();
        const droppedFiles = e.dataTransfer.files;

        if (droppedFiles.length === 1) {
            const file = droppedFiles[0];
            if (file.type === 'application/pdf') {
                setCvFile(file);
                setCvError('');
            } else {
                setCvFile(null);
                setCvError('Please upload a PDF file.');
            }
        }
    };

    const handleCvDragOver = (e) => {
        e.preventDefault();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setIsResetDisabled(true);

        try {
            const formData = new FormData();
            formData.append('cv', cvFile);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('contact_number', contactNo);
            formData.append('vacancy_id', vacancy_id); // Append vacancy_id to form data

            const response = await axios.post('http://localhost:8000/Candidate-CV-Upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);
            setFeedbackMessage('Successfully submitted your details.');
            setFeedbackColor('#02936F');
            setIsResetDisabled(false);
            handleReset(); // Reset form fields
        } catch (error) {
            console.error('Error uploading file:', error);
            setFeedbackMessage('Error. Try again.');
            setFeedbackColor('red');
        } finally {
            setLoading(false);

            // Automatically remove feedback message after 5 seconds
            setTimeout(() => {
                setFeedbackMessage('');
            }, 3000); // Adjust the timeout duration as needed
        }
    };

    const handleReset = () => {
        setName('');
        setContactNo('');
        setEmail('');
        setCvFile(null);
        setContactError('');
        setEmailError('');
        setCvError('');
    };

    return (
        <div className='container-ncSubmitForm'>
            <div style={{ fontSize: '18px', fontWeight: '800', marginBottom: '5px', color:'#02936F' }}>{title}</div>
            <p className='employeeSubmitform'>Submit your CV and fill necessary details.</p>
            <form onSubmit={handleSubmit}>
                <div className='grp_form'>
                    <label>Name:</label>
                    <input type="text" placeholder='Full Name' value={name} onChange={handleNameChange} />
                </div>
                <div className='grp_form'>
                    <label>Contact No:</label>
                    <input type="text" placeholder='Contact No' value={contactNo} onChange={handleContactNoChange} />
                    {contactError && <p style={{ color: 'red', fontSize: '14px', fontWeight: 'bold' }}>{contactError}</p>}
                </div>
                <div className='grp_form'>
                    <label>Email:</label>
                    <input type="text" placeholder='Email' value={email} onChange={handleEmailChange} />
                    {emailError && <p style={{ color: 'red', fontSize: '14px', fontWeight: 'bold' }}>{emailError}</p>}
                </div>
                <div className='grp_form'>
                    <label>Upload CV:</label>
                    <div
                        onDrop={handleCvDrop}
                        onDragOver={handleCvDragOver}
                        style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center', borderRadius: '15px' }}
                    >
                        {cvFile ? (
                            <p>File uploaded: {cvFile.name}</p>
                        ) : (
                            <>
                                <p>Drag &amp; drop your CV here</p>
                                <CloudUploadIcon style={{ fontSize: 40, color: '#02936F' }} />
                            </>
                        )}
                    </div>
                    {cvError && <p style={{ color: 'red', fontSize: '14px', fontWeight: 'bold' }}>{cvError}</p>}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
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
                        style={{ borderRadius: "20px", textTransform: "none", margin: '0 10px' }}
                        onClick={handleReset}
                        disabled={isResetDisabled}
                    >
                        Reset
                    </Button>
                </div>
                {feedbackMessage && (
                    <p style={{ color: feedbackColor, fontSize: '13px', fontWeight: 'bold', marginTop: '10px', textAlign: 'center' }}>
                        {feedbackMessage}
                    </p>
                )}
            </form>
        </div>
    );
}

export default StaffForm;
