import React from "react";
import '../styles/TextInputs.css';
const TextInputs = (props)=>{
    const {label,value,onChange}=props;

    return (
        <div className="input">
            <label>{label} </label>:
            <div className="box">
                 <input type="text" value={value} onChange={onChange}/>
            </div>
        </div>
    
        
    )

}

export default TextInputs;