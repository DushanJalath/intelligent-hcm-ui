import React from 'react'
import '../styles/avdropdown.css'

export default function AvDropdown2(props) {
    const {label,value, onChange } =props;
    return (
      <div className='input1'>
          <label className='labels-av'>{label}</label>
          <div className='dropdown'>
              <select value={value} onChange={(e)=>onChange(e.target.value)} className='drop' required>
                  <option value="" disabled className='options'>Select the work mode..</option>
                  <option value="On-site">On-site (Office-based)</option>
                  <option value="Hybrid Work" >Hybrid Work</option>
                  <option value="Project-based" >Project-based</option>
  
              </select>
          </div>
          
      </div>
    )
}
