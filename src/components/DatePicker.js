import React from "react";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.module.css';
import '../styles/DatePicker.css';

import {BsCalendar} from 'react-icons/bs';

const CustomDatePickerInput = ({ value, onClick,placeholder}) => (
    <div className="custom-datepicker-input" onClick={onClick}>
      <input
        type="text"
        value={value}
        readOnly
        className="form-control"
        placeholder={placeholder}
      />
      <span className="calendar-icon">
        <BsCalendar />
      </span>
    </div>
  )


const DatePicker = (props)=>{
    const {label,selectedDate, onChange,placeholderText}= props;

    return (
        <div className="input">
            <label>{label} </label>:
            <div className="box">
                <div className="react-datepicker__input-container">
                    <ReactDatePicker className="form-control"
                    selected={selectedDate}
                    onChange={onChange}
                    dateFormat="dd/MM/yyyy"
                    popperPlacement="right-start"
                    placeholderText={placeholderText}
                    showMonthDropdown
                    showYearDropdown
                    customInput={<CustomDatePickerInput placeholder={placeholderText}/>}
                    />

                </div>


            </div>

        </div>
       
    )
}

export default DatePicker;