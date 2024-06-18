import React from "react";
import profile_picture from "../assets/profile_picture.webp"
import '../styles/NameTag.css';

const NameTag = (props) => {
    const {name,role}=props;
    
    return (
        <div className="name-tag-container">
            <div className="name-tag">
                <div className="profile rounded-full overflow-hidden">
                    <img src={profile_picture}
                    width={45}
                    alt=""
                    className="rounded-full"
                    style={{ width: 50, height: 50, borderRadius: '50%' }}
                    />
                </div>
                <div className="name-tag-details">
                {
                    <>
                        <div className="name-tag-name">
                        <span className="text-xl whitespace-pre">
                            {name}
                            {/*{employeeDetails.name}*/}
                        </span> 
                        </div>
                        <div className="name-tag-role">
                        <span className="text-sm text-gray-500">
                            {role}
                            {/*{employeeDetails.role}*/}
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