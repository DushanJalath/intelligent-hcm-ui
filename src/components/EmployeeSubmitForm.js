import '../styles/employeeSubmitForm.css'
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.module.css';
import DatePicker from 'react-datepicker'; 
import {BsCalendar} from 'react-icons/bs';

const CustomDatePickerInput = ({ value, onClick,placeholder}) => (
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
  )

function EmployeeSubmitForm(props) {
    const [name, setName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [cvFile, setCvFile] = useState(null);
    const [birthdate, setBirthdate] = useState(null);

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

    const handleBirthdateChange = (date) => {
        setBirthdate(date);
    };

    return(
        <div className='container'>
            <div className='title'>{props.title}</div>
            <form>
                <div className='grp'>
                    <label>Name:</label>
                    <input type="text" placeholder='Full Name' value={name} onChange={handleNameChange} />
                </div>
                <div className='grp'>
                    <label>Contact No:</label>
                    <input type="text" placeholder='Contact No'value={contactNo} onChange={handleContactNoChange} />
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
                        style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center',borderRadius:'15px' }}
                    >
                        {cvFile ? (
                        <p>File uploaded: {cvFile.name}</p>
                        ) : (
                        <>
                            <p>Drag &amp; drop your CV here</p>
                            <img src="path-to-pdf-icon.png" alt="PDF icon" style={{ width: '50px', height: '50px' }} />
                        </>
                        )}
                    </div>
                </div>
                <div className='grp'>
                    <label>Birthdate:</label>
                    <DatePicker label="Birthdate" 
                    className="form-control"
                    dateFormat="dd/MM/yyyy"
                    popperPlacement="right-start"
                    customInput={<CustomDatePickerInput />}  selected={birthdate} onChange={handleBirthdateChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
  );
}

export default EmployeeSubmitForm;