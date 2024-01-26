import React from "react";
import '../styles/Dropdown.css';

const DropDown = (props)=>{
    const {label,options,selectedValue,onChange,placeholder}=props;

    return(
        <div className="input">
            <label>{label} </label>:
            <div className="box">
                <select value={selectedValue} onChange={onChange} className="custom-dropdown">
                    <option className="dropdown-item" value="" disabled >{placeholder}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                     </option>
                     ))}
        
                </select>
            </div>
        </div>
       
    )
}

export default DropDown;