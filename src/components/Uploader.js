// Uploader.js
import React, { useState } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import '../styles/uploader.css';

export default function Uploader(props) {
    const { label, value, onChange, placeholder, onUpload } = props;
    const [image, setImage] = useState(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(file);
        // Ensure that onChange is a function before calling it
        if (typeof onChange === 'function') {
          onChange(file);
        }
        // Notify parent component about the upload
        onUpload(true);
      }
    };

  return (
    <div className="input-av">
      <label className='labels-SD'>{label} </label>
      <div className="box-SD" onClick={() => document.querySelector(".input-text-SD").click()}>
        <input
          type="file"
          accept='image/*'
          hidden
          value={value}
          onChange={handleFileChange}
          className='input-text-SD'
          placeholder={placeholder}
        />
        {image ? (
          <div className="image-container">
            <img src={URL.createObjectURL(image)} width={60} height={68} alt='fileName' />
            <MdDelete className="delete-icon" onClick={() => setImage(null)} />
          </div>
        ) : (
          <MdCloudUpload color='#02936F' size={60} className='mdcloud-icon'/>
        )}
      </div>
    </div>
  );
}
