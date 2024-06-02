import React from 'react'
import '../styles/addvacancy.css';
import AvDropdown from './AvDropdown';
import AvInputs from './AvInputs';
import AvTextArea from './AvTextArea'
import AvButtons from './AvButtons';
import { useState } from 'react';
import axios from 'axios';

export default function AddVacancy(props) {
    const [successMessage, setSuccessMessage] = useState('');

    //project type
    const [projectType, setProjectType] = useState('');
    const handleProjectTypeChange = (value) => {
        setProjectType(value);
    };

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
            project_type: projectType,
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
            const response = await axios.post('http://localhost:8000/create_vacancy', formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            setSuccessMessage('Vacancy created successfully');
            console.log(response.data);
            // Refresh the page after successful submission
            window.location.reload();
        } catch (error) {
            setSuccessMessage('An error occurred');
            console.error('Error:', error);
        }
    };
    
    const handleFormReset = () => {
        setProjectType('');
        setPossition('');
        setPre_requisits('');
        setNumOfVacancies('');
        setResponsibilities('');
        setMoreDetails('');
      };


  return (
    <div className='container-AV'>
        <div className='title-AV'><p className='title-para-AV'>{props.title}</p></div>
        <div className='para-form-AV'>
            <div className='paragraph1-AV'>
                <p>Please fill in the details below and generate system suggestions for the job vacancy. If the requirements are satisfactory, submit your form to the HR. If you need to edit the requirements, make 
                    the necessary changes and forward them to the HR for review.</p>
            </div>
            <div className='form-AV'>
                <form onSubmit={HandleGenarate} onReset={handleFormReset}>
                    <div className='In1'>
                        <AvDropdown label="Project type :" value={projectType} onChange={handleProjectTypeChange} placeholder="Select leave type"/>
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
                    <div className="AV-Buttons-manager">
                        <div className="copy">
                            <AvButtons  type="reset" label="copy"/>
                        </div>
                        <div className="genarate">
                            <AvButtons type="submit" label="genarate"/>
                        </div>
                    </div>
                    <p className='success-message'>{successMessage}</p>
                    
                </form>
            </div>
        </div>
        
    </div>
  )
}
