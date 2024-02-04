import React from 'react';
import '../styles/jobcard.css';

const JobCard = ({ jobTitle, jobType, company, location, description,butval }) => {
  return (
    <div className="job-card">
          <h2 style={{fontSize:25}}>{jobTitle}</h2>
          <p style={{fontSize:18,fontWeight:500}}>{jobType} - {company} / {location}</p>
          <p style={{fontSize:15}}>{description}</p>
          <button className="job-details-btn">{butval}</button>
    </div>

    
  );
};

export default JobCard;