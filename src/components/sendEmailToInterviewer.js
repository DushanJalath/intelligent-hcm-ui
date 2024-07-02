// sendEmailToInterviewer.js
import emailjs from 'emailjs-com';
import api from '../api';

const sendEmailToInterviewer = async (c_id) => {
  try {
    const response = await api.get('/interviewer_email_details', { params: { c_id } });

    const templateParams = {
      interviewer_email: response.data.email,
      job_title:response.data.job_title,
      name: response.data.name,
      date: response.data.date,
      time: response.data.time,
      venue: response.data.venue,
      candidate_cv: response.data.cv,
    };

    const emailResponse = await emailjs.send('service_a8d9tus', 'template_fmg54ax', templateParams, 'Kb3F9Pq_XpJsyixUQ');
    console.log('Email sent successfully:', emailResponse);
    return emailResponse;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Email sending failed. Please try again.');
  }
};

export default sendEmailToInterviewer;
