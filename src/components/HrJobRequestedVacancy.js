import React from 'react'
import { useState } from 'react';
import '../styles/hrjobrequestedvacancy.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HrJobRequestedVacancyIcons from './HrJobRequestedVacancyIcons';

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
  
  function createDataforHR(
    IDs,
    Categorys,
    Vacancies,
    Numvacancy,
    Documents,
  ) {
    return { IDs, Categorys, Vacancies, Numvacancy, Documents,};
  }
  
  const rows = [
    createDataforHR(1, 'Quality Assurance', 'QA Engineer', 5, 'download'),
    createDataforHR(2, 'UI/UX Design', 'UI Designer', 1, 'download'),
    createDataforHR(3, 'Software Development', 'Full Stack Developer', 3, 'download'),
    createDataforHR(4, 'Quality Assurance', 'QA Engineer', 4, 'download'),
    createDataforHR(5, 'UI/UX Design', 'UI Designer', 3, 'download',),
    createDataforHR(6, 'Software Development', 'Full Stack Developer', 2, 'download'),
    createDataforHR(7, 'UI/UX Design', 'UI Designer', 1, 'download'),
    createDataforHR(8, 'Quality Assurance', 'QA Engineer', 3, 'download'),
    createDataforHR(9, 'Quality Assurance', 'QA Engineer', 2, 'download'),
  
  ];
  
  const itemsPerPages = 5;

export default function HrJobRequestedVacancy(props) {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPages;
    const indexOfFirstItem = indexOfLastItem - itemsPerPages;
    const currentItems = rows.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(rows.length / itemsPerPages);

  const handlePageChange = (newPage1) => {
    setCurrentPage(newPage1);
     };
  return (
        <div className='container5'>
            <div className='title5'><p className='title-para5'>{props.title}</p></div>
            <div className='table-div1'>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Vacancy ID</StyledTableCell>
                        <StyledTableCell align="center">Vacancy Category</StyledTableCell>
                        <StyledTableCell align="center">Job Vacancy</StyledTableCell>
                        <StyledTableCell align="center">Number of vacancies</StyledTableCell>
                        <StyledTableCell align="center">Document</StyledTableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {currentItems.map((row) => (
                        <StyledTableRow key={row.ID}>
                        <StyledTableCell align="center">{row.IDs}</StyledTableCell>
                        <StyledTableCell align="center">{row.Categorys}</StyledTableCell>
                        <StyledTableCell align="center">{row.Vacancies}</StyledTableCell>
                        <StyledTableCell align="center">{row.Numvacancy}</StyledTableCell>
                        <StyledTableCell align="center"><HrJobRequestedVacancyIcons ImageType="download" /></StyledTableCell>
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
