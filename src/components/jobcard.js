import React from 'react';
import '../styles/jobcard.css';

const JobCard = ({ jobTitle, jobType, company, location, description }) => {
  return (
    <div className="job-card">
          <h2 style={{fontSize:25}}>{jobTitle}</h2>
          <p style={{fontSize:18,fontWeight:500}}>{jobType} - {company} / {location}</p>
          <p style={{fontSize:15}}>{description}</p>
          <button className="job-details-btn">JOB DETAILS</button>
    </div>

    
  );
};

export default JobCard;