import React from "react";
//import {useState} from "react";
import '../styles/timeReportingInnerComponent.css';

const TimeReportingInnerComponent= (props)=>{
    //const [name, setName] = useState('');
    //const [details, setDetails] = useState('');
    //const [dp,setDp]= useState('');

return(
    <div className="inner-container">
    
        <div className="profile rounded-full overflow-hidden">
            <span>
                <img src={props.dp}
                width={45}
                alt=""
                className="rounded-full"
                style={{ width: 60, height: 50, borderRadius: '50%' }}
                />

            </span>
            
        </div>

        <div className="name">
            <span>{props.name}</span>
        </div>

        <div className="details">
            <span>{props.details}</span>
        </div>

    </div>


)
    

}
 export default TimeReportingInnerComponent;
