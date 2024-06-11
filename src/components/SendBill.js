import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import '../styles/sendBill.css';
import CircularProgress from '@mui/material/CircularProgress';

function SendBill(props) {
    const [userID, setUserID] = useState('');
    const [category, setCategory] = useState('');
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [date, setDate] = useState('');
    const [storeName, setStoreName] = useState('');
    const [total, setTotal] = useState('');
    const [billImage, setBillImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackColor, setFeedbackColor] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [uploading, setUploading] = useState(false);

    const handleUserIDChange = (e) => {
        setUserID(e.target.value);
    };

    const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    // Clear feedback message when category is filled
    if (feedbackMessage) {
        setFeedbackMessage('');
        setFeedbackColor('');
    }
};

    const handleInvoiceChange  = (e) => {
        setInvoiceNumber(e.target.value);
    };

    const handleDateChange  = (e) => {
        setDate(e.target.value);
    };

    const handleStoreNameChange  = (e) => {
        setStoreName(e.target.value);
    };

    const handleTotalChange  = (e) => {
        setTotal(e.target.value);
    };

    function resetBillinfo(){
        setIsVisible(false);
        setInvoiceNumber('');
        setDate('');
        setStoreName('');
        setTotal('');
    };
    

    const handleBillImageDrop = async (e) => {
        e.preventDefault();
        const droppedFiles = e.dataTransfer.files;

        if (!category) {
            setFeedbackMessage('Please fill the Bill Category field.');
            setFeedbackColor('red');
            return;
        }

        if (droppedFiles.length === 1) {
            const file = droppedFiles[0];
            if (file.type.startsWith('image/')) {
                setBillImage(file);
            } else {
                alert('Please upload an image file.');
                return;
            }
        } else {
            alert('Please drop exactly one file.');
            return;
        }

        setUploading(true);

        try {
            const formData = new FormData();
            formData.append('file', droppedFiles[0]);
            formData.append('bill_type', category);

            const accessToken = localStorage.getItem('token');
            const response = await axios.post('http://127.0.0.1:8000/upload-bill/', formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Upload successful:', response.data);

            const billEntities = response.data.bill_entities;
            setInvoiceNumber(billEntities.invoicenumber);
            setDate(billEntities.date);
            setStoreName(billEntities.storename);
            setTotal(billEntities.totalamount);
            setIsVisible(true);
        } catch (error) {
            console.log('Error uploading file:', error);
        } finally {
            setUploading(false); // Set uploading state to false after upload processing is complete
        }
    };

    const handleBillImageDragOver = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        if (userID && category && billImage && invoiceNumber && date && storeName && total) {
            setIsSubmitEnabled(true);
        } else {
            setIsSubmitEnabled(false);
        }
    }, [userID, category, billImage, invoiceNumber, date, storeName, total]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1;
            const day = currentDate.getDate();
            const formattedDate = `${day}-${month}-${year}`;
            const newData = {
                u_id:userID,
                amount:total,
                category:category,
                storename:storeName,
                Date:date,
                status:"pending",
                submitdate:formattedDate,
                invoice_number:invoiceNumber
            };
            const accessToken = localStorage.getItem('token');
            console.log(newData);
            await axios.post('http://127.0.0.1:8000/create_bill', newData,{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
      
            setFeedbackMessage('Bill submitted successfully');
            setFeedbackColor('green');

    
            setUserID('');
            setCategory('');
            setBillImage(null);
            resetBillinfo();
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
        resetBillinfo();
    };

    return (
        <div className='container-send-bill'>
            <div className='title-send-bill'>{props.title}</div>
            <p className='sendBilldescrption'>Submit your bill for HR review.Upload a clear photo of the bill (JPG or PNG format). </p>
            <form onSubmit={handleSubmit}>
                <div className='grpSendBill'>
                    <label>User ID:</label>
                    <input 
    type="text" 
    placeholder='User ID' 
    value={userID} 
    onChange={handleUserIDChange} 
    disabled={billImage ? true : false} // Disable if billImage is not null
/>
                </div>
                <div className='grpSendBill'>
                    <label>Bill Category:</label>
                    <input 
    type="text" 
    placeholder='Bill Category' 
    value={category} 
    onChange={handleCategoryChange} 
    disabled={billImage ? true : false} // Disable if billImage is not null
/>
                </div>
                <div className='grpSendBill'>
                    <label>Upload Bill Image:</label>
                    <div
                        onDrop={handleBillImageDrop}
                        onDragOver={handleBillImageDragOver}
                        className="upload-area"
                    >
                        {billImage ? (
                            <>
                                <img src={URL.createObjectURL(billImage)} alt="Uploaded Bill" className="uploaded-image" />
                                <p>File uploaded: {billImage.name}</p>
                            </>
                        ) : (
                            <>
                                <p>Drag &amp; drop your bill image here</p>
                                <CloudUploadIcon className="cloud-icon" />
                            </>
                        )}
                    </div>
                </div>
                {uploading && (
                    <div className="waiting-message">
                        <CircularProgress size={20} style={{ marginRight: '10px' }} />
                            <p>Waiting for Response...</p>
                    </div>
                )}
                
                {isVisible && (
                <div>
                    <div className='grpSendBill'>
                        <label>Invoice Number:</label>
                        <input type="text" value={invoiceNumber} onChange={handleInvoiceChange} />
                    </div>
                    <div className='grpSendBill'>
                        <label>Date:</label>
                        <input type="text" value={date} onChange={handleDateChange} />
                    </div>
                    <div className='grpSendBill'>
                        <label>StoreName:</label>
                        <input type="text" value={storeName} onChange={handleStoreNameChange} />
                    </div>
                    <div className='grpSendBill'>
                        <label>Total:</label>
                        <input type="text" value={total} onChange={handleTotalChange} />
                    </div>
                </div>
                )}
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
                        disabled={!isVisible || loading}
                    >
                    Reset</Button>
                </div>
                {feedbackMessage && (
                    <p style={{ color: feedbackColor, fontSize: '13px', fontWeight: 'bold', marginTop: '10px' }}>
                        {feedbackMessage}
                    </p>
                )}
            </form>
        </div>
    );
}

export default SendBill;