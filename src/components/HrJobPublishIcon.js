import React from 'react';
import Publish from '../assets/publish.png';
import axios from 'axios'; // Import Axios for HTTP requests
import '../styles/requestedvacancyicons.css';

export default function HrJobPublishIcon({ endpointUrl, jobId }) {
    let img3 = Publish;

    const handlePublish = async () => {
        const accessToken = localStorage.getItem('token'); // Get the access token from local storage or wherever it's stored

        try {
            const response = await axios.post(`${endpointUrl}/${jobId}`, null, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, // Include authorization header with the token
                },
            });

            console.log("Publish Response:", response.data);

            // Add your logic for handling the publish response here
        } catch (error) {
            console.error("Error publishing job:", error.message);
        }
    };

    return (
        <div className='img-types align-items-center'>
            <div className='img-panel flex'>
                <button onClick={handlePublish} className='image-button'>
                    <img src={img3} className='single-user' alt='Publish Icon' />
                </button>
            </div>
        </div>
    );
}
