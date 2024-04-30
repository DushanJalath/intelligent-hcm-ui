import React from 'react'
import '../styles/avtextarea.css'

export default function AvInputs(props) {
    const {label,value,onChange}=props;

    return (
        <div className="input-av">
            <label className='labels-textarea'>{label} </label>
            <div className="box-AVT">
                 <textarea type="textarea" value={value} onChange={(e) => onChange(e.target.value)} className='input-textarea' placeholder={props.placeholder}/>
            </div>
        </div>
    )
}
