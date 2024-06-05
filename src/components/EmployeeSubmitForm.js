import '../styles/employeeSubmitForm.css';
import React, { useState } from 'react';
import { BsCalendar } from 'react-icons/bs';
import { Button } from "@mui/material";

const CustomDatePickerInput = ({ value, onClick, placeholder }) => (
    <div className="custom-datepicker-input" onClick={onClick}>
        <input
            type="text"
            value={value}
            readOnly
            className="form-control"
        />
        <span className="calendar-icon">
            <BsCalendar />
        </span>
    </div>
);

function EmployeeSubmitForm(props) {
    const [name, setName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [cvFile, setCvFile] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleContactNoChange = (e) => {
        setContactNo(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCvDrop = (e) => {
        e.preventDefault();
        const droppedFiles = e.dataTransfer.files;

        if (droppedFiles.length === 1) {
            const file = droppedFiles[0];
            if (file.type === 'application/pdf') {
                setCvFile(file);
            } else {
                alert('Please upload a PDF file.');
            }
        }
    };

    const handleCvDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className='container-ncSubmitForm'>
            <div className='title-ncSubmitForm'>{props.title}</div>
            <form>
                <div className='grp'>
                    <label>Name:</label>
                    <input type="text" placeholder='Full Name' value={name} onChange={handleNameChange} />
                </div>
                <div className='grp'>
                    <label>Contact No:</label>
                    <input type="text" placeholder='Contact No' value={contactNo} onChange={handleContactNoChange} />
                </div>
                <div className='grp'>
                    <label>Email:</label>
                    <input type="text" placeholder='E mail' value={email} onChange={handleEmailChange} />
                </div>
                <div className='grp'>
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
                                <img src="/icons8-import-pdf-50.png" alt="PDF icon"
                                     style={{ width: '30px', height: '27px', marginLeft: '235px' }} />
                            </>
                        )}
                    </div>
                </div>
                <div id="ncSubmitForm-submit-button" style={{ marginLeft: "10px", marginTop: "30px", marginBottom: "30px" }}>
                    <Button variant="contained" color="success" size="small" style={{ borderRadius: "20px", textTransform: "none" }}>Submit</Button>
                </div>
            </form>
        </div>
    );
}

export default EmployeeSubmitForm;
