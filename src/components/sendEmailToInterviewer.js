import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import "../styles/sendEmailToCandidate.css";
import api from '../api';

const sendEmailToInterviewer=async(c_id)=>{
    
    const response= await api.get('/interviewer_email_details',c_id)

    const templateParams={
        "interviewer_email": response.data.email,
        "name":response.data.name,
        "date":response.data.date,
        "time":response.data.time,
        "venue":response.data.venue,
        "candidate_cv":response.data.cv,

    }

    emailjs.send('service_a8d9tus', 'template_fmg54ax', templateParams,'Kb3F9Pq_XpJsyixUQ')
        .then((response) => {
          console.log('Email sent successfully:', response);
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          alert('Email sending failed. Please try again.');
        });
        
}

export default sendEmailToInterviewer;