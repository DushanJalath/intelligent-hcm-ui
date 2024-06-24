import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import "../styles/sendEmailToCandidate.css";
import api from '../api';

const SendEmail = ({onEmailSent,c_id}) => {
    const [candidateID, setCandidateID] = useState(c_id);
    const [candidateEmail, setCandidateEmail] = useState('');
    const [interviewDate, setInterviewDate] = useState('');
    const [interviewTime, setInterviewTime] = useState('');
    const [interviewLocation, setInterviewLocation] = useState('');
    const [confirmationDate, setConfirmationDate] = useState('');
    const [interviewerEmail, setInterviewerEmail] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const templateParams = {
        candidate_id: candidateID,
        interview_date: interviewDate,
        interview_time: interviewTime,
        confirmation_date: confirmationDate,
        to_email: candidateEmail,
        interview_location: interviewLocation,
        interviewer_email:interviewerEmail
      };


      const interviewData = {
        i_id:' ',
        c_id: candidateID,
        date: interviewDate,
        time: interviewTime,
        venue: interviewLocation,
        interviewer_id: interviewerEmail,
        result: 'pending' // Assuming the initial result is pending
      };
    try{
    const response = await api.post('/add_interview',interviewData);
    console.log(response.data);
} catch (error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    console.error('Error:', error);
}
     
      emailjs.send('service_a8d9tus', 'template_y6shqgv', templateParams,'Kb3F9Pq_XpJsyixUQ')
        .then((response) => {
          console.log('Email sent successfully:', response);
          alert('Email sent successfully!');
          onEmailSent();
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          alert('Email sending failed. Please try again.');
        });
    };
  
    return (
      <form onSubmit={handleSubmit} className='sendEmail'>

        <div className='sendEmail-form-elements'>
          <label>Candidate ID</label>:
          <input type="text" value={candidateID} readOnly />
          
        </div>
        
        <div className='sendEmail-form-elements'>
          <label>Candidate Email</label>:
          <input type="email" value={candidateEmail} onChange={(e) => setCandidateEmail(e.target.value)} />
        
        </div>
        

        <div className='sendEmail-form-elements'>
          <label>Interview Date </label>:
          <input type="date" value={interviewDate} onChange={(e) => setInterviewDate(e.target.value)} />

        </div>
        

        <div className='sendEmail-form-elements'>
          <label>Interview Time</label>:
            <input type="time" value={interviewTime} onChange={(e) => setInterviewTime(e.target.value)} />
        </div>


        <div className='sendEmail-form-elements'>
          <label>Interview Location</label>:
          <input type="text" value={interviewLocation} onChange={(e) => setInterviewLocation(e.target.value)} />
        </div>
        

        <div className='sendEmail-form-elements'>
          <label>Confirmation Deadline</label>:
          <input type="date" value={confirmationDate} onChange={(e) => setConfirmationDate(e.target.value)} />
        </div>
        

        <div className='sendEmail-form-elements'>
          <label>Interviewer Email</label>:
          <input type="text" value={interviewerEmail} onChange={(e) => setInterviewerEmail(e.target.value)} />
        </div>
        
        <button type="submit">Send Email</button>
      </form>
    );
};

export default SendEmail;