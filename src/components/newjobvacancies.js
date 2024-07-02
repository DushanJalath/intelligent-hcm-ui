import React, { useState, useEffect } from 'react';
import JobCard from './jobcard';

function JobVacancy(props) {
    const [jobVacancies, setJobVacancies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const jobsPerPage = 5;

    useEffect(() => {
        const fetchJobVacancies = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/vacancies');
                const data = await response.json();
                setJobVacancies(data);
                const totalPages = Math.ceil(data.length / jobsPerPage);
                setTotalPages(totalPages);
            } catch (error) {
                console.error("Failed to fetch job vacancies", error);
            }
        };

        fetchJobVacancies();
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = Math.min(startIndex + jobsPerPage, jobVacancies.length);

    return (
        <div
            className='job-vacancy-container mx-auto w-3/4'
            style={{
                marginTop: '50px',
                width: '680px',
                backgroundColor: '#EAEAEA',
                borderRadius: '10px',
                position: 'relative',
                marginBottom: '50px',
            }}
        >
            <div style={{ padding: '20px' }}>
                <div style={{ fontSize: '18px', fontWeight: '800', marginBottom: '5px', color:'#02936F' }}>{props.title}</div>
                <p className='leavedescription'>Deatils about job vacancies.</p>
                <div>
                    {jobVacancies.slice(startIndex, endIndex).map((job) => (
                        <JobCard
                            jobTitle={job.possition}
                            jobType={job.job_type}
                            workMode={job.work_mode}
                            file_id={job.pdf_file_id}
                            vacancy_id={job.vacancy_id}
                        />
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <button onClick={handlePreviousPage} style={{ marginRight: '10px' }} disabled={currentPage === 1}>Previous</button>
                        {[...Array(totalPages).keys()].map((page) => (
                            <button key={page + 1} onClick={() => handlePageChange(page + 1)} style={{ marginRight: '10px' }} className={`pagination-button ${currentPage === page + 1 ? 'active' : ''}`}>{page + 1}</button>
                        ))}
                        <button onClick={handleNextPage} style={{ marginLeft: '10px' }} disabled={currentPage === totalPages}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobVacancy;
