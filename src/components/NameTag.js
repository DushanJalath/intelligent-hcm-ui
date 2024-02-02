import React,{useState} from "react";
import dp from "../assets/profile_picture_dummy.webp"
import '../styles/NameTag.css';

const NameTag = (props) => {
    const {name,role}=props;
    const [employeeDetails] = useState({
        name: "John Doe",
        role: "Software Engineer",
      });
    return (
        <div className="name-tag-container">
            <div className="name-tag">
                <div className="profile rounded-full overflow-hidden">
                    <img src={dp}
                    width={45}
                    alt=""
                    className="rounded-full"
                    style={{ width: 50, height: 50, borderRadius: '50%' }}
                    />
                </div>
                <div className="details">
                {
                    <>
                        <div className="name">
                        <span className="text-xl whitespace-pre">
                            {employeeDetails.name}
                        </span> 
                        </div>
                        <div className="role">
                        <span className="text-sm text-gray-500">
                            {employeeDetails.role}
                        </span>
                        </div>
                    </>
                }
                </div>
                    
            </div>
        </div>
    )
}
export default NameTag;