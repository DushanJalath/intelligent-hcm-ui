import React from 'react';
import '../styles/logincoverimage.css';
import coverimage from '../assets/coverimage.png';

export default function LoginCoverImage() {
  return (
    <div className='left-side-container'>
      <img src={coverimage} alt=" " className='cover-image' />
    </div>
  );
}
