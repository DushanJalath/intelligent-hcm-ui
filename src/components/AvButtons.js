import React from 'react'
import '../styles/avbuttons.css'

export default function AvButtons(props) {
    const {type,label,onClick}=props;
  return (
    <div className='av-buttons'>
      <button type={type} onSubmit={onClick} className='button-AV'>{label}</button>
    </div>
  )
}
