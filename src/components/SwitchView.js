import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
import '../styles/SwitchView.css';

const SwitchView =(props)=>{
    const {option1,option2,page1,page2}=props;
    const navigate= useNavigate();

    const[selectedOption,setSelectedOption]=useState(option1);

    const handleOptionCHange= (option,page)=>{
        setSelectedOption(option);
        navigate(page);
    }

    return(
    
    <div className="switch-view">
        <div className="switch-container">
        <button onClick={()=>handleOptionCHange(option1,page1)}
        className={selectedOption===option1?'active':''}>
            {option1}
        </button>

        <button onClick={()=>handleOptionCHange(option2,page2)}
        className={selectedOption===option2?'active':''}>
            {option2}
        </button> 

      
        </div>
    </div>
    )
}

export default SwitchView;