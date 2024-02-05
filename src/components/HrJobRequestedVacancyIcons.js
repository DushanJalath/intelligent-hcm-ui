import React from 'react';
import downloadbtn1 from "../assets/downloadbtn1.png";
import pdfw from "../assets/pdfw.png";
import '../styles/requestedvacancyicons.css'
export default function HrJobRequestedVacancyIcons({ ImageType }) {
    let img1, img2;
    if (ImageType === 'download') {
        img1 = pdfw;
        img2 = downloadbtn1;        
    }else{
        img1='';
        img2='';
    }
    return (
        <div className='img-types align-items-center'>
            <div className='img-panel flex '>
                <img src={img1} alt={`Cover for ${ImageType}`} className='single-user' />
                <img src={img2} alt={`Cover for ${ImageType}`} className='single-user' />
            </div>
        </div>
    );
}
