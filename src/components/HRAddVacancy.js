import React from 'react'
import '../styles/HRAddVacancy.css';
import AvDropdown from './AvDropdown';
import AvInputs from './AvInputs';
import AvTextArea from './AvTextArea'
import AvButtons from './AvButtons';
import { useState } from 'react';
import api from "../api";
import AvDropdown2 from './AvDropdown2';

export default function HRAddVacancy(props) {
    const [successMessage, setSuccessMessage] = useState('');

    //project type
    const [jobType, setJobType] = useState('');
    const handleJobTypeChange = (value) => {
        setJobType(value);
    };

    const [workMode, setWorkMode] = useState('');
    const handleWorkModeChange = (value) => {
        setWorkMode(value);
    }


    //Job vacancy category
    const [possition, setPossition] = useState(''); 
    const handlePossitionChange = (value) => {
      setPossition(value);
    };

    //Job vacancy
    const [pre_requisits, setPre_requisits] = useState('');
    const handlePre_requisitsChange = (value) => {
      setPre_requisits(value);
    };
    //Job vacancy
    const [responsibilities, setResponsibilities] = useState('');
    const handleResponsibilitiesChange = (value) => {
      setResponsibilities(value);
    };

    //Number of job vacancies
    const [num_of_vacancies, setNumOfVacancies] = useState('');
    const handleNumOfVacanciesChange = (value) => {
      setNumOfVacancies(value);
    };

    // More about the vacancy 
    const [moreDetails, setMoreDetails] = useState('');
    const handleMoreDetailsChange = (value) => {
      setMoreDetails(value);
    };

    const HandleGenarate = async (event) => {
        event.preventDefault();
        const formData = {
            job_type: jobType,
            work_mode: workMode,
            pre_requisits: pre_requisits,  
            possition: possition,
            num_of_vacancies: parseInt(num_of_vacancies),
            responsibilities: responsibilities,
            more_details: moreDetails
        };
        try {
            const accessToken = localStorage.getItem('token');
            console.log('Access Token:', accessToken);
            console.log('Request Headers:', {
                Authorization: `Bearer ${accessToken}`
            }); // Assuming you store the access token in localStorage
            const response = await api.post('/create_vacancy', formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            setSuccessMessage('Vacancy created successfully');
            alert("Vacancy created successfully");
            // console.log(response.data);
            // Refresh the page after successful submission
            window.location.reload();
        } catch (error) {
            setSuccessMessage('An error occurred');
            alert("An error occurred");
            // console.error('Error:', error);
        }
    };
    
  return (
    <div className='container-HRADD'>
        <div className='title-hrv'><p className='title-para'>{props.title}</p></div>
        <div className='para-form'>
            <div className='paragraph1'>
                <p>Please fill in the details below and generate system suggestions for the job vacancy. If the requirements are satisfactory, submit your form.</p>
            </div>
            <div className='form-hrv'>
                <form onSubmit={HandleGenarate}>
                    <div className='In1'>
                        <AvDropdown label="Job type :" value={jobType} onChange={handleJobTypeChange} placeholder="Select leave type"/>
                    </div>
                    <div className='In1'>
                        <AvDropdown2 label="Work mode :" value={workMode} onChange={handleWorkModeChange} placeholder="Select work mode"/>
                    </div>
                    <div className='In2'>
                        <AvInputs label="Job possition :" value={possition} onChange={handlePossitionChange} placeholder="Enter the possition"/>
                    </div>
                    <div className='In2'>
                        <AvInputs label=" Job pre-requisits : " value={pre_requisits} onChange={handlePre_requisitsChange} placeholder="Enter the pre-requisits"/>
                    </div>
                    <div className='In2'>
                        <AvInputs label="Responsibilities :" value={responsibilities} onChange={handleResponsibilitiesChange} placeholder="Enter responsibilities"/>
                    </div>
                    <div className='In2'>
                        <AvInputs label="Number of job vacancies :" value={num_of_vacancies} onChange={handleNumOfVacanciesChange} placeholder="Enter the number"/>
                    </div>
                    <div className='In2'>
                        <AvTextArea label="More about the vacancy :" value={moreDetails} onChange={handleMoreDetailsChange} placeholder="Enter more details"/>
                    </div>
                    <div className="AV-Buttons">
                        <div className="genarate">
                            <AvButtons type="submit" label="Submit"/>
                        </div>
                    </div>
                    {/* <p className='success-message'>{successMessage}</p>    */}
                </form>
            </div>
        </div>
        
    </div>
  )
}
