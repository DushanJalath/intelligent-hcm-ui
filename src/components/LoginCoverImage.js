import React from 'react';
import '../styles/logincoverimage.css';
import coverimage from '../assets/coverimage.png';
// import '../styles/newCandidateApplyJob.css';
// import { FaPlus } from 'react-icons/fa';

export default function LoginCoverImage() {
  return (
    <div className='left-side-container'>
      <img src={coverimage} alt=" " className='cover-image' />
      {/* <button className='apply-job-button'>
        Apply Job Page
        <FaPlus className="icon" />
      </button> */}
    </div>
  );
}
