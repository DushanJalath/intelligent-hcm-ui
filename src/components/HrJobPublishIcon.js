import React from 'react'
import Publish from '../assets/publish.png'
import '../styles/requestedvacancyicons.css'


export default function HrJobPublishIcon({ ImageType }) {
    let img3;
    if (ImageType === 'publish') {
        img3 = Publish;     
    }else{
        img3='';
    }
    return (
        <div className='img-types align-items-center'>
            <div className='img-panel flex '>
            <button className='image-button'><img src={img3} alt={`Cover for ${ImageType}`} className='single-user' /></button>
            </div>
        </div>
    );
}
