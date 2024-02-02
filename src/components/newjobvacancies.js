import {useState} from 'react'
import '../styles/jobcard.css';
import Jobv from '../styles/newjobvacancies.module.css'
import Jobcard from './jobcard.js'
function Frame(props) {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
      };

    const job1 = {jobTitle:'Job Title',
        jobType:'Full Time/Permanent',
        company:'Company', 
        location:'Location', 
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.'}

    return(
        <div className={Jobv.container}>
            <div className={Jobv.title}>{props.title}</div>
            <div className={Jobv.content}>
            <Jobcard {...job1} butval="JOB DETAILS"/>
            <Jobcard {...job1} butval="JOB DETAILS"/>
            <Jobcard {...job1} butval="JOB DETAILS"/>
            


            <div className={Jobv.pagination}>
            <button onClick={() => handlePageChange(currentPage - 1)} className={Jobv.btn} disabled={currentPage === 1}>Previous</button>
            <button onClick={() => handlePageChange(1)} className={`${Jobv.btn} ${currentPage === 1 ? Jobv.active : ''}`}>1</button>
            <button onClick={() => handlePageChange(2)} className={`${Jobv.btn} ${currentPage === 2 ? Jobv.active : ''}`}>2</button>
            <button onClick={() => handlePageChange(3)} className={`${Jobv.btn} ${currentPage === 3 ? Jobv.active : ''}`}>3</button>
            <button onClick={() => handlePageChange(currentPage + 1)} className={Jobv.btn} disabled={currentPage === 3}>Next</button>
        </div>
        </div>
        </div>
        
        
    );
}

export default Frame;