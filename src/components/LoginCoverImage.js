import React from 'react';
import loginGif from '../assets/newLog.gif';

export default function LoginCoverImage() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <img src={loginGif} alt="Login GIF" className='max-w-full max-h-full object-contain' />
    </div>
  );
}
