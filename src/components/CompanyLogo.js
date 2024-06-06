import React from 'react';
import '../styles/CompanyLogo.css'; // Create and style this CSS file as needed
import logo from '../assets/newLogo.png'; // Make sure to have your logo image in the same directory or update the path

const CompanyLogo = () => {
    return (
        <div className="company-logo">
            <img src={logo} alt="Company Logo" className="logo-image" />
        </div>
    );
};

export default CompanyLogo;
