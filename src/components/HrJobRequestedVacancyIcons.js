import React from 'react';
import upload2 from "../assets/upload2.png";
import '../styles/requestedvacancyicons.css';


export default function HrJobRequestedVacancyIcons({ ImageType }) {
    let img2;
    if (ImageType === 'download') {
        img2 = upload2;        
    }else{
        img2='';
    }
    return (
        <div className='img-types align-items-center'>
            <div className='img-panel flex '>
                <img src={img2} alt={`Cover for ${ImageType}`} className='single-user' />
            </div>
        </div>
    );
}
