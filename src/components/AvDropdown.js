import React from 'react'
import '../styles/avdropdown.css'

export default function AvDropdown(props) {
    const {label,value, onChange } =props;
  return (
    <div className='input1'>
        <label className='labels'>{label}</label>
        <div className='dropdown'>
            <select value={value} onChange={(e)=>onChange(e.target.value)} className='drop' required>
                <option value="" disabled className='options'>Select the job type..</option>
                <option value="Full time">Full time</option>
                <option value="Part time" >Part time</option>
                <option value="Intern" >Intern</option>

            </select>
        </div>
        
    </div>
  )
}
