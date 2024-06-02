import React from 'react';
import Card from '../styles/jobcard.module.css';

const JobCard = ({ jobTitle, jobType, company, location, description,butval }) => {
  return (
    <div className={Card.jobcard}>
          <div className={Card.text1}>{jobTitle}</div>
          <div className={Card.text2}>{jobType} - {company} / {location}</div>
          <div className={Card.text3}>{description}</div>
          <button className={Card.jobdetailsbtn}>{butval}</button>
    </div>

    
  );
};

export default JobCard;