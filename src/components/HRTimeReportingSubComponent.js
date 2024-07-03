import React,{useState} from "react";
import TimeReportingInnerComponent from "./TimeReportingInnerComponent";
import Jobv from '../styles/newjobvacancies.module.css'
import '../styles/HRTimeReportingSubComponent.css';

const HRTimeReportingSubComponent=(props)=>{
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
      };

    const renderTimeReportingInnerComponents=()=>{
        return props.data.map((item, index)=>(
            <TimeReportingInnerComponent
            key={index}
            dp={item.dp}
            name={item.name}
            details={item.details}/>
        )
        )
    }
    return (
        <div className="hr-time-report-sub-container">
            <div className="title">
                {props.title}
            </div>
            <div className="content">
                {renderTimeReportingInnerComponents()}
            </div>
            <div className="page-buttons">
                <div className={Jobv.pagination}>
                    <button onClick={() => handlePageChange(currentPage - 1)} className={Jobv.btn} disabled={currentPage === 1}>Previous</button>
                    <button onClick={() => handlePageChange(1)} className={`${Jobv.btn} ${currentPage === 1 ? Jobv.active : ''}`}>1</button>
                    <button onClick={() => handlePageChange(2)} className={`${Jobv.btn} ${currentPage === 2 ? Jobv.active : ''}`}>2</button>
                    <button onClick={() => handlePageChange(3)} className={`${Jobv.btn} ${currentPage === 3 ? Jobv.active : ''}`}>3</button>
                    <button onClick={() => handlePageChange(currentPage + 1)} className={Jobv.btn} disabled={currentPage === 3}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default HRTimeReportingSubComponent;
