import React from "react";

import '../styles/Buttons.css';

const ButtonComponent = (props)=>{
    const {label, onClick}= props;

    return (
        <div className="buttons">
            <button onClick={onClick}>
                {label}
            </button>

        </div>

    )
}

export default ButtonComponent;