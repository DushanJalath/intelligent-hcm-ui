import React from 'react'
import '../styles/HRAddVacancy.css';
import AvDropdown from './AvDropdown';
import AvInputs from './AvInputs';
import AvTextArea from './AvTextArea'
import AvButtons from './AvButtons';
import { useState } from 'react';

export default function HRAddVacancy(props) {
    //project type
    const [projectType, setProjectType] = useState('');
    const handleProjectTypeChange = (value) => {
        setProjectType(value);
    };

    //Job vacancy category
    const [category, setCategory] = useState(''); 
    const handleCategoryChange = (value) => {
      setCategory(value);
    };

    //Job vacancy
    const [vacancy, setVacancy] = useState('');
    const handleVacancyChange = (value) => {
      setVacancy(value);
    };

    //Number of job vacancies
    const [numOfVacancies, setNumOfVacancies] = useState('');
    const handleNumOfVacanciesChange = (value) => {
      setNumOfVacancies(value);
    };

    // More about the vacancy 
    const [moreDetails, setMoreDetails] = useState('');
    const handleMoreDetailsChange = (value) => {
      setMoreDetails(value);
    };

    const HandleGenarate = (event)=>{
        event.preventDefault();
        console.log ('projectType : ', projectType);
        console.log ('category :', category);
        console.log ('vacancy :', vacancy);
        console.log ('numOfVacancies :', numOfVacancies);
        console.log ('moreDetails :', moreDetails);
    }
    const handleFormReset = () => {
        setProjectType('');
        setCategory('');
        setVacancy('');
        setNumOfVacancies('');
        setMoreDetails('');
      };


  return (
    <div className='container'>
        <div className='title'><p className='title-para'>{props.title}</p></div>
        <div className='para-form'>
            <div className='paragraph1'>
                <p>Please fill in the details below and generate system suggestions for the job vacancy. If the requirements are satisfactory, submit your form to the HR. If you need to edit the requirements, make 
                    the necessary changes and forward them to the HR for review.</p>
            </div>
            <div className='form'>
                <form onSubmit={HandleGenarate} onReset={handleFormReset}>
                    <div className='In1'>
                        <AvDropdown label="Project type :" value={projectType} onChange={handleProjectTypeChange} placeholder="Select leave type"/>
                    </div>
                    <div className='In2'>
                        <AvInputs label="Job vacancy category :" value={category} onChange={handleCategoryChange} placeholder="Enter the category"/>
                    </div>
                    <div className='In2'>
                        <AvInputs label=" Job vacancy : " value={vacancy} onChange={handleVacancyChange} placeholder="Enter the vacancy"/>
                    </div>
                    <div className='In2'>
                        <AvInputs label="Number of job vacancies :" value={numOfVacancies} onChange={handleNumOfVacanciesChange} placeholder="Enter the number"/>
                    </div>
                    <div className='In2'>
                        <AvTextArea label="More about the vacancy :" value={moreDetails} onChange={handleMoreDetailsChange} placeholder="Enter more details"/>
                    </div>
                    <div className="AV-Buttons">
                        <div className="genarate">
                            <AvButtons type="submit" label="genarate" onClick= {HandleGenarate}/>
                        </div>
                    </div>   
                </form>
            </div>
        </div>
        
    </div>
  )
}
