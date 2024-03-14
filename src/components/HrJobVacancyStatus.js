import React from 'react'
import '../styles/hrjobvacancystatus.css'
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HrJobRequestedVacancyIcons from './HrJobRequestedVacancyIcons';
import HrVacancyStatusPdfIcon from './HrVacancyStatusPdfIcon';
import HrJobPublishIcon from './HrJobPublishIcon';
import HrJobVacancyStatusButtons from './HrJobVacancyStatusButtons';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      fontFamily: 'Inter',
      fontSize: '19px',
      fontStyle: 'normal',
      fontWeight: 800,
      lineHeight: 'normal',
      letterSpacing: '0.18px',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: '14px',
      color: '#000',
      fontFamily: 'Inter',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: '0.18px',
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#939393',
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createDataforHRVS(
    IDs,
    Categorys,
    Vacancies,
    Numvacancy,
    DownloadD,
    UploadD,
    Publish,
  ) {
    return { IDs, Categorys, Vacancies, Numvacancy, DownloadD, UploadD,Publish};
  }
  
  const rows2 = [
    createDataforHRVS(1, 'Quality Assurance', 'QA Engineer', 5, 'pdf','download','publish'),
    createDataforHRVS(2, 'UI/UX Design', 'UI Designer', 1, 'pdf','download','publish'),
    createDataforHRVS(3, 'Software Development', 'Full Stack Developer', 3, 'pdf','download','publish'),
    createDataforHRVS(4, 'Quality Assurance', 'QA Engineer', 4, 'pdf','download','publish'),
    createDataforHRVS(5, 'UI/UX Design', 'UI Designer', 3, 'pdf','download','publish'),
    createDataforHRVS(6, 'Software Development', 'Full Stack Developer', 2, 'pdf','download','publish'),
    createDataforHRVS(7, 'UI/UX Design', 'UI Designer', 1, 'pdf','download','publish'),
    createDataforHRVS(8, 'Quality Assurance', 'QA Engineer', 3, 'pdf','download','publish'),
    createDataforHRVS(9, 'Quality Assurance', 'QA Engineer', 2, 'pdf','download','publish'),
    createDataforHRVS(10, 'Quality Assurance', 'QA Engineer', 4, 'pdf','download','publish'),
    createDataforHRVS(11, 'UI/UX Design', 'UI Designer', 3, 'pdf','download','publish'),
    createDataforHRVS(12, 'Software Development', 'Full Stack Developer', 2, 'pdf','download','publish'),
    createDataforHRVS(13, 'UI/UX Design', 'UI Designer', 1, 'download','download','publish'),
    createDataforHRVS(14, 'Quality Assurance', 'QA Engineer', 3, 'download','download','publish'),
    createDataforHRVS(15, 'Quality Assurance', 'QA Engineer', 2,'download','download','publish'),
  
  ];
  
  const itemsPerPages = 8;

export default function HrJobVacancyStatus(props) {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPages;
    const indexOfFirstItem = indexOfLastItem - itemsPerPages;
    const currentItems = rows2.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(rows2.length / itemsPerPages);

    const handlePageChange = (newPage1) => {
    setCurrentPage(newPage1);
     };

    const handleStatusChange = (id, newStatus) => {
        // Update the status in your data structure (rows2)
        const updatedRows = rows2.map((row) => (row.IDs === id ? { ...row, status: newStatus } : row));
        // Update the data
        // You might want to update your state or perform other actions based on the status change
        console.log(updatedRows);
    };

  return (
        <div className='container6'>
            <div className='title6'><p className='title-para6'>{props.title}</p></div>
            <div className='table-div2'>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Vacancy ID</StyledTableCell>
                        <StyledTableCell align="center">Vacancy Category</StyledTableCell>
                        <StyledTableCell align="center">Job Vacancy</StyledTableCell>
                        <StyledTableCell align="center">Number of vacancies</StyledTableCell>
                        <StyledTableCell align="center">Download Document</StyledTableCell>
                        <StyledTableCell align="center">Upload Document</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                        <StyledTableCell align="center">Publish</StyledTableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {currentItems.map((row2) => (
                        <StyledTableRow key={row2.ID}>
                        <StyledTableCell align="center">{row2.IDs}</StyledTableCell>
                        <StyledTableCell align="center">{row2.Categorys}</StyledTableCell>
                        <StyledTableCell align="center">{row2.Vacancies}</StyledTableCell>
                        <StyledTableCell align="center">{row2.Numvacancy}</StyledTableCell>
                        <StyledTableCell align="center"><HrVacancyStatusPdfIcon ImageType={row2.DownloadD}/></StyledTableCell>
                        <StyledTableCell align="center"><HrJobRequestedVacancyIcons ImageType={row2.UploadD}/></StyledTableCell>
                        <StyledTableCell align='center'><HrJobVacancyStatusButtons onStatusChange={(newStatus) => handleStatusChange(row2.IDs, newStatus)} /></StyledTableCell>
                        <StyledTableCell align="center"><HrJobPublishIcon ImageType={row2.Publish} /></StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>

                <nav aria-label="Page-navigation">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className={`page-link1 ${currentPage === 1 ? 'active-prev' : ''}`} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className={`page-item1 ${currentPage === index + 1 ? 'active' : ''}`}>
                        <button className={`page-link ${currentPage === index + 1 ? 'active' : ''}`} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                    </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className={`page-link1 ${currentPage === totalPages ? 'active-next' : ''}`} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                    </li>
                </ul>
                </nav>

            </div>
        </div>
  )
}
