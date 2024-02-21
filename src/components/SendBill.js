import '../styles/sendBill.css';
import React, { useState } from 'react';

function SendBill(props) {
    const [name, setCategory] = useState('');
    const [billFile, setBill] = useState(null);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleBillDragOver = (e) => {
        e.preventDefault();
    };

    const handleBillDrop = (e) => {
        e.preventDefault();
        const droppedFiles = e.dataTransfer.files;

        if (droppedFiles.length === 1) {
        const file = droppedFiles[0];
        if (file.type === 'application/pdf') {
            setBill(file);
        } else {
            alert('Please upload a PDF file.');
        }
        }
    };


    return(
        <>
        <div className='container'>
            <div className='title'>{props.title}</div>
            <form>
                <div className='grp'>
                    <label>Bill Category:</label>
                    <input type="text" placeholder='Bill Category' value={name} onChange={handleBillDrop} />
                </div>

                <div className='grp'>
                    <label>Upload Bill:</label>
                    <div
                        onDrop={handleBillDrop}
                        onDragOver={handleBillDragOver}
                        style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center',borderRadius:'15px' }}
                    >
                        {billFile ? (
                        <p>File uploaded: {billFile.name}</p>
                        ) : (
                        <>
                            <p>Drag &amp; drop your Bill here</p>
                            <img src="path-to-pdf-icon.png" alt="PDF icon" style={{ width: '50px', height: '50px' }} />
                        </>
                        )}
                    </div>
                </div>
                <button type='submit' className='submit'>Submit</button>
            </form>
        </div>
        </>
    );
}

export default SendBill