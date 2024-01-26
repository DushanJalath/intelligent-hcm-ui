import '../styles/projectType.css'
import React, { useState } from 'react'

function ProjectType(props) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <label className={`checkbox-container ${isChecked ? 'checked' : ''}`}>
                <input type="checkbox" onChange={handleCheckboxChange}></input>
                <span className="checkmark"></span>
                {props.content}
            </label>
        </div>
    );
}

export default ProjectType;