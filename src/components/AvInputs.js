import React from 'react'
import '../styles/avinputs.css'

export default function AvInputs(props) {
    const {label,value,onChange}=props;

    return (
        <div className="input-av">
            <label className='labels'>{label} </label>
            <div className="box">
                 <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className='input-text' placeholder={props.placeholder} required/>
            </div>
        </div>
    )
}
