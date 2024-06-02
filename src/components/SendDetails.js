// SendDetails.js
import React, { useState } from 'react';
import Uploader from './Uploader';
import '../styles/senddetails.css';
import AvButtons from './AvButtons';

export default function SendDetails(props) {
  const [pdfUploaded, setPdfUploaded] = useState(false);

  const handlePdfUpload = (uploaded) => {
    setPdfUploaded(uploaded);
    console.log("PDF uploaded");
  };
  const handleSubmitButton = (e) => {
    e.preventDefault();
    // Perform any actions you need on form submission
    console.log('Form submitted!');
    // You can check if the PDF is uploaded before performing actions
    if (pdfUploaded) {
      // Additional actions specific to a submitted form with a PDF
    }
  };

  return (
    <div className='container2'>
      <div className='title2'><p className='title-para2'>{props.title}</p></div>

      <div className='container3'>
        <div className='upload-pdf'>
          {/* Ensure you pass onChange prop here */}
          <Uploader label="Add Your PDF document :" onUpload={handlePdfUpload} onChange={(value) => console.log(value)} />
        </div>
        <div className='send-button'>
          <AvButtons type="submit" label="Send" onClick={handleSubmitButton}/>
        </div>
      </div>
    </div>
  );
}
