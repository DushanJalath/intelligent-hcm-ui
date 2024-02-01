import React from 'react'
import '../styles/avdropdown.css'

export default function AvDropdown(props) {
    const {label,value, onChange } =props;
  return (
    <div className='input1'>
        <label className='labels'>{label}</label>
        <div className='dropdown'>
            <select value={value} onChange={(e)=>onChange(e.target.value)} className='drop' required>
                <option value="" disabled className='options'>Select the project type..</option>
                <option value="work">Work Task</option>
                <option value="shop" >Shop Order Task</option>
                <option value="Project" >Project Activities</option>
                <option value="external" >External Task</option>

            </select>
        </div>
        
    </div>
  )
}
