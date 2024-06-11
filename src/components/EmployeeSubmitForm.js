import '../styles/employeeSubmitForm.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from 'react-router-dom';

function EmployeeSubmitForm(props) {
    const [name, setName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [cvFile, setCvFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const [contactError, setContactError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [cvError, setCvError] = useState('');
    const [selectedJob, setSelectedJob] = useState('');
    const [selectedJobType, setSelectedJobType] = useState('');
    const [isResetDisabled, setIsResetDisabled] = useState(false);
    const [jobTitles, setJobTitles] = useState([]);
    const [jobTypes, setJobTypes] = useState([]);
    const [selectedJobTypes, setSelectedJobTypes] = useState([]);

    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchJobVacancies = async () => {
            try {
                const response = await axios.get('http://localhost:8000/jobvacancies/');
                setJobTitles(response.data.job_titles);
                setJobTypes(response.data.job_types);
            } catch (error) {
                console.error('Error fetching job vacancies:', error);
            }
        };

        fetchJobVacancies();
    }, []);

    useEffect(() => {
        if (selectedJob) {
            const fetchJobTypes = async () => {
                try {
                    const response = await axios.get(`http://localhost:8000/jobtypes/${selectedJob}`);
                    setSelectedJobTypes(response.data.job_types);
                } catch (error) {
                    console.error('Error fetching job types:', error);
                }
            };

            fetchJobTypes();
        }
    }, [selectedJob]);

    useEffect(() => {
        if (name && contactNo && email && cvFile && selectedJob && selectedJobType && !contactError && !emailError && !cvError) {
            setIsSubmitEnabled(true);
        } else {
            setIsSubmitEnabled(false);
        }
    }, [name, contactNo, email, cvFile, selectedJob, selectedJobType, contactError, emailError, cvError]);

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
            formData.append('file', cvFile);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('contact_number', contactNo);
            formData.append('job_title', selectedJob);
            formData.append('job_type', selectedJobType);

            const response = await axios.post('http://localhost:8000/CVUpload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);
            navigate('/done');
        } catch (error) {
            console.error('Error uploading file:', error);
            navigate('/error');
        } finally {
            setLoading(false);
            setIsResetDisabled(false);
        }
    };

    const handleReset = () => {
        setName('');
        setContactNo('');
        setEmail('');
        setCvFile(null);
        setSelectedJob('');
        setSelectedJobType('');
        setContactError('');
        setEmailError('');
        setCvError('');
    };

    return (
        <div className='container-ncSubmitForm'>
            <div style={{ fontSize: '18px', fontWeight: '800', marginBottom: '5px', color:'#02936F' }}>{props.title}</div>
            <p className='employeeSubmitform'>Submit yor CV and fill necessary details.</p>
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
                    <label>Job Title:</label>
                    <select value={selectedJob} onChange={(e) => setSelectedJob(e.target.value)}>
                        <option value="">Select Job Title</option>
                        {jobTitles.map((title, index) => (
                            <option key={index} value={title}>{title}</option>
                        ))}
                    </select>
                </div>
                <div className='grp_form'>
                    <label>Job Type:</label>
                    <select value={selectedJobType} onChange={(e) => setSelectedJobType(e.target.value)}>
                        <option value="">Select Job Type</option>
                        {selectedJobTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
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
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '90px' }}>
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
            </form>
        </div>
    );
}

export default EmployeeSubmitForm;
