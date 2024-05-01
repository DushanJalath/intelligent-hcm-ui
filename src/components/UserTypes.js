import React from 'react';
import '../styles/usertypes.css';
import HRImage from '../assets/HR.png';
import EMImage from '../assets/EM.png';
import MNImage from '../assets/MN.png';

export default function UserTypes({ userType, onSelectType, selectedUserType }) {
  let src;

  switch (userType) {
    case 'HR':
      src = HRImage;
      break;
    case 'Employee':
      src = EMImage;
      break;
    case 'Manager':
      src = MNImage;
      break;
    default:
      src = '';
  }

  return (
      <div className='user-types'>
        <button
            className={`user-panel ${userType === selectedUserType ? 'selected' : ''}`}
            onClick={() => onSelectType(userType)}
        >
          <img src={src} alt={`Cover for ${userType}`} className='single-user'/>
          <p className='user-para'>{userType}</p>
        </button>
      </div>
  );
}
