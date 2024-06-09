import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import '../styles/sendBill.css';

function SendBill(props) {
    const [userID, setUserID] = useState('');
    const [category, setCategory] = useState('');
    const [billImage, setBillImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackColor, setFeedbackColor] = useState('');

    const handleUserIDChange = (e) => {
        setUserID(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleBillImageDrop = (e) => {
        e.preventDefault();
        const droppedFiles = e.dataTransfer.files;

        if (droppedFiles.length === 1) {
            const file = droppedFiles[0];
            if (file.type.startsWith('image/')) {
                setBillImage(file);
            } else {
                alert('Please upload an image file.');
            }
        }
    };

    const handleBillImageDragOver = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        if (userID && category && billImage) {
            setIsSubmitEnabled(true);
        } else {
            setIsSubmitEnabled(false);
        }
    }, [userID, category, billImage]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('file', billImage);
            formData.append('bill_type', category);
            formData.append('user_id', userID);

            const response = await axios.post('http://localhost:8000/upload-bill/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);

            // Set success feedback message
            setFeedbackMessage('Bill submitted successfully');
            setFeedbackColor('green');

            // Reset form after submission
            setUserID('');
            setCategory('');
            setBillImage(null);
        } catch (error) {
            console.error('Error uploading file:', error);
            setFeedbackMessage('Error submitting. Please try again.');
            setFeedbackColor('red');
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setUserID('');
        setCategory('');
        setBillImage(null);
        setFeedbackMessage('');
    };

    return (
        <div className='container-send-bill'>
            <div className='title-send-bill'>{props.title}</div>
            <p className='sendBilldescrption'>Submit your bill for HR review.Upload a clear photo of the bill (JPG or PNG format). </p>
            <form onSubmit={handleSubmit}>
                <div className='grpSendBill'>
                    <label>User ID:</label>
                    <input type="text" placeholder='User ID' value={userID} onChange={handleUserIDChange} />
                </div>
                <div className='grpSendBill'>
                    <label>Bill Category:</label>
                    <input type="text" placeholder='Bill Category' value={category} onChange={handleCategoryChange} />
                </div>
                <div className='grpSendBill'>
                    <label>Upload Bill Image:</label>
                    <div
                        onDrop={handleBillImageDrop}
                        onDragOver={handleBillImageDragOver}
                        className="upload-area"
                    >
                        {billImage ? (
                            <p>File uploaded: {billImage.name}</p>
                        ) : (
                            <>
                                <p>Drag &amp; drop your bill image here</p>
                                <CloudUploadIcon className="cloud-icon" />
                            </>
                        )}
                    </div>
                </div>
                <div className='grpSendBill buttons'>
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
                    <p style={{ color: feedbackColor, fontSize: '12px', fontWeight: 'bold', marginTop: '10px' }}>
                        {feedbackMessage}
                    </p>
                )}
            </form>
        </div>
    );
}

export default SendBill;
