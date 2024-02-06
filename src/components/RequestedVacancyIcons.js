import React from 'react'
import check from '../assets/check.png'
import clock from '../assets/clock.png'
import reject from '../assets/reject.png'
import '../styles/requestedvacancyicons.css'

export default function RequestedVacancyIcons({ImageType}) {
    let img;

    switch (ImageType) {
      case 'check':
        img = check;
        break;
      case 'clock':
        img = clock;
        break;
      case 'reject':
        img = reject;
        break;
      default:
        img = '';
    }
  
    return (
      <div className='img-types'>
        <div className='img-panel'>
          <img src={img} alt={`Cover for ${ImageType}`} className='single-user'/>
        </div>
      </div>
    );
}
