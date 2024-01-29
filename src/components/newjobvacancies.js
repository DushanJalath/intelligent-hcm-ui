import {useState} from 'react'
import '../styles/jobcard.css';
import '../styles/newjobvacancies.css'
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
        <div className='container4'>
            <div className='title4'>{props.title}</div>
            <Jobcard {...job1}/>
            <Jobcard {...job1}/>



            <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} className="btn" disabled={currentPage === 1}>Previous</button>
            <button onClick={() => handlePageChange(1)} className={`btn ${currentPage === 1 ? 'active' : ''}`}>1</button>
            <button onClick={() => handlePageChange(2)} className={`btn ${currentPage === 2 ? 'active' : ''}`}>2</button>
            <button onClick={() => handlePageChange(3)} className={`btn ${currentPage === 3 ? 'active' : ''}`}>3</button>
            <button onClick={() => handlePageChange(currentPage + 1)} className="btn" disabled={currentPage === 3}>Next</button>
        </div>
        </div>
    );
}

export default Frame;