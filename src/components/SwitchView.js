import React,{useState} from "react";
import '../styles/SwitchView.css';

const SwitchView =(props)=>{
    const {option1,option2}=props;

    const[selectedOption,setSelectedOption]=useState(option1);

    const handleOptionCHange= (option)=>{
        setSelectedOption(option);
    }

    return(
    
    <div className="switch-view">
        <div className="switch-container">
        <button onClick={()=>handleOptionCHange(option1)}
        className={selectedOption===option1?'active':''}>
            {option1}
        </button>

        <button onClick={()=>handleOptionCHange(option2)}
        className={selectedOption===option2?'active':''}>
            {option2}
        </button> 

      
        </div>
    </div>
    )
}

export default SwitchView;