import React from 'react';
import CompanyLogo from '../components/CompanyLogo';
import '../styles/LandingPage.css'; // Make sure to create this CSS file
import gif from '../assets/gif.gif'; // Make sure to update the path
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();

    const handleUser = () => {
        navigate('/login');
        // Add logic for handling User button click
    };

    const handleApplyJob = () => {
        navigate('/candidate-job-vacancy-details');
        // Add logic for handling Job Vacancies button click
    };

    const handleContact = () => {
        // Add logic for handling Contact Us button click
    };

    return (
        <div className="landing-page">
            <div className="landingheader">
                <CompanyLogo />
            </div>
            <div className="content">
                <div className="left-content">
                    <h1 className="main-heading">Let's Start Something Big Together</h1>
                    <p className="sub-heading">Join our community and explore exciting career opportunities. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="landbuttons">
                    <button className='landing-button' onClick={handleUser}>
                        Log In
                    </button>
                    <button className='landing-button' onClick={handleApplyJob}>
                        Job Vacancies
                    </button>
                    <button className='landing-button' onClick={handleContact}>
                        Contact Us
                    </button>
                </div>
            </div>
            <img src={gif} alt="Animated GIF" className="bottom-right-gif" />
        </div>
    );
};

export default LandingPage;
