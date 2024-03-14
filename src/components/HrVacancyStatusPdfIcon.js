import React from 'react';
import pdfw from "../assets/pdfw.png";
import '../styles/requestedvacancyicons.css'

export default function HrVacancyStatusPdfIcon({ ImageType }) {
    let img1
    if (ImageType === 'pdf') {
        img1 = pdfw;     
    }else{
        img1='';
    }
    return (
        <div className='img-types align-items-center'>
            <div className='img-panel flex '>
                <img src={img1} alt={`Cover for ${ImageType}`} className='single-user' />
            </div>
        </div>
    );
}
