import React, {useState} from "react";

import TextInputs from "./TextInputs";
import DatePicker from "./DatePicker";
import DropDown from "./Dropdown";
import ButtonComponent from "./Buttons";

import '../styles/EmpLeave.css';

const EmpLeave= (props)=>{
    //Enter Employee Name
  const [name, setName]= useState('');

  const updateName = (event) =>{
      setName(event.target.value);
  }

  //Enter Employee ID
  const [empID, setEmpID]= useState('');

  const updateID = (event) =>{
      setEmpID(event.target.value)
  }

   //Select Leave Start date and Leave End date
   const[startDate, setStartDate]= useState(null);
   const updateStartDate = (date)=>{
       setStartDate(date);
   }

   const[endDate, setEndDate]= useState(null);
   const updateEndtDate = (date)=>{
       setEndDate(date);
   }

   //Select leave type
   const [leaveType, setLeaveType]= useState('');

   const updateLeaveType = (event)=>{
       setLeaveType(event.target.value);
   }

   const options=[
    {label:'Sick leave',value:'Sick leave'},
    {label:'Vacation',value:'Vacation'},
    {label:'Personal leave',value:'Personal leave'},
   ]

   const handleSubmit = (event)=>{
    event.preventDefault();
    console.log ('Employee Name : ', name);
    console.log ('Employee ID :', empID);
    console.log ('Leave Start Date :', startDate);
    console.log ('Leave End Date :', endDate);
    console.log ('Leave Type :', leaveType);
}

const handleCancel = (event)=>{
    event.preventDefault();
    console.log ('Form Cancelled');

}
    return(
        
        <div className="container-leave-form">
        <div className="title">
            {props.title}
        </div>
        <div className="form">
            <form onSubmit={handleSubmit}>

                <div className="Input1">
                    <TextInputs label="Employee Name" value={name} onChange={updateName}/>
                </div>

                <div className="Input2">
                    <TextInputs label="Employee ID" value={empID} onChange={updateID}/>
                </div>

                <div className="Input3">
                    <DatePicker label="Leave start date" placeholderText="Select leave start date" selectedDate={startDate} onChange={updateStartDate}/>
                </div>

                <div className="Input4">
                    <DatePicker label="Leave end date" placeholderText="Select leave end date" selectedDate={endDate} onChange={updateEndtDate}/>
                </div>

                <div className="Input5">
                    <DropDown label="Leave type" options={options} placeholder="Select leave type" selectedValue={leaveType} onChange={updateLeaveType}/>
                </div>

                <div className="Buttons">
                    <div className="submit">
                        <ButtonComponent label="Submit" onClick= {handleSubmit}/>
                    </div>
                    <div className="cancel">
                        <ButtonComponent label="Cancel"onClick= {handleCancel}/>
                    </div>
                </div>
            </form>
        </div>
    </div>


    )
    
}
export default EmpLeave;