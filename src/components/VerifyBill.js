import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "@mui/material";
import '../styles/verifyBill.css';

function VerifyBill(props) {
    const [customerName, setCustomerName] = useState('');
    const [storeName, setStoreName] = useState('');
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [billDate, setBillDate] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackColor, setFeedbackColor] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'customerName':
                setCustomerName(value);
                break;
            case 'storeName':
                setStoreName(value);
                break;
            case 'invoiceNumber':
                setInvoiceNumber(value);
                break;
            case 'billDate':
                setBillDate(value);
                break;
            case 'totalAmount':
                setTotalAmount(value);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (customerName && storeName && invoiceNumber && billDate && totalAmount) {
            setIsSubmitEnabled(true);
        } else {
            setIsSubmitEnabled(false);
        }
    }, [customerName, storeName, invoiceNumber, billDate, totalAmount]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = {
                customer_name: customerName,
                store_name: storeName,
                invoice_number: invoiceNumber,
                bill_date: billDate,
                total_amount: totalAmount,
            };

            const response = await axios.post('http://localhost:8000/verify-bill/', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.data);

            // Set success feedback message
            setFeedbackMessage('Bill verified successfully');
            setFeedbackColor('green');

            // Reset form after submission
            setCustomerName('');
            setStoreName('');
            setInvoiceNumber('');
            setBillDate('');
            setTotalAmount('');
        } catch (error) {
            console.error('Error verifying bill:', error);
            setFeedbackMessage('Error submitting. Please try again.');
            setFeedbackColor('red');
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setCustomerName('');
        setStoreName('');
        setInvoiceNumber('');
        setBillDate('');
        setTotalAmount('');
        setFeedbackMessage('');
    };

    return (
        <div className='verifyBillss'>
            <div className='title-send-bill'>{props.title}</div>
            <p className='sendBilldescrption'>Verify your bill details for send HR.</p>
            <form onSubmit={handleSubmit}>
                <div className='grpSendBill'>
                    <label>Customer Name:</label>
                    <input
                        type="text"
                        placeholder='Customer Name'
                        name="customerName"
                        value={customerName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='grpSendBill'>
                    <label>Store Name:</label>
                    <input
                        type="text"
                        placeholder='Store Name'
                        name="storeName"
                        value={storeName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='grpSendBill'>
                    <label>Invoice Number:</label>
                    <input
                        type="text"
                        placeholder='Invoice Number'
                        name="invoiceNumber"
                        value={invoiceNumber}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='grpSendBill'>
                    <label>Bill Date:</label>
                    <input
                        type="date"
                        name="billDate"
                        value={billDate}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='grpSendBill'>
                    <label>Total Amount:</label>
                    <input
                        type="number"
                        placeholder='Total Amount'
                        name="totalAmount"
                        value={totalAmount}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='grpSendBill buttons'>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="medium"
                        style={{ borderRadius: "20px", textTransform: "none" }}
                        disabled={!isSubmitEnabled || loading}
                    >
                        {loading ? 'Submitting...' : 'Verify'}
                    </Button>
                    <Button
                        variant="contained"
                        color="inherit"
                        size="medium"
                        style={{ borderRadius: "20px", textTransform: "none", backgroundColor: "black", color: "white" }}
                        onClick={handleReset}
                        disabled={loading}
                    >
                        Edit
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

export default VerifyBill;
