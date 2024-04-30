import React from 'react';
import upload2 from "../assets/upload2.png";
import axios from 'axios'; // Import Axios for HTTP requests
import '../styles/requestedvacancyicons.css';

export default function HrJobRequestedVacancyIcons({ endpointUrl, jobId,}) {
    let img2 = upload2;

    const handleUpload = async (file) => {
        const accessToken = localStorage.getItem('token'); // Get the access token from local storage or wherever it's stored

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post(`${endpointUrl}/${jobId}`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, // Include authorization header with the token
                    'Content-Type': 'multipart/form-data', // Set content type for FormData
                },
            });

            console.log("Upload Response:", response.data);

            // Add your logic for handling the upload response here
        } catch (error) {
            console.error("Error uploading document:", error.message);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            handleUpload(file);
        }
    };

    return (
        <div className='img-types align-items-center'>
            <div className='img-panel flex'>
                <input type='file' accept='.pdf' onChange={handleFileChange} style={{ display: 'none' }} id='upload-input' />
                <label htmlFor='upload-input'>
                    <img src={img2} className='single-user' alt='Upload Icon' />
                </label>
            </div>
        </div>
    );
}
