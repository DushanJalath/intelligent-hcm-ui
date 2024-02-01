import React, { useState } from 'react';
import '../styles/requestedvacancy.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RequestedVacancyIcons from './RequestedVacancyIcons';

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

function createData(
  ID: number,
  Category: string,
  Vacancy: string,
  Numvacancies: number,
  Document: string,
  Action: string,
  Publish: string,
) {
  return { ID, Category, Vacancy, Numvacancies, Document, Action, Publish };
}

const rows = [
  createData(1, 'Quality Assurance', 'QA Engineer', 5, 'check', 'clock', 'reject'),
  createData(2, 'UI/UX Design', 'UI Designer', 1, 'reject', 'clock', 'check'),
  createData(3, 'Software Development', 'Full Stack Developer', 3, 'check', 'clock', 'reject'),
  createData(4, 'Quality Assurance', 'QA Engineer', 4, 'check', 'reject', 'clock'),
  createData(5, 'UI/UX Design', 'UI Designer', 3, 'reject', 'check', 'reject'),
  createData(6, 'Software Development', 'Full Stack Developer', 2, 'clock', 'clock', 'check'),
  createData(7, 'UI/UX Design', 'UI Designer', 1, 'check', 'reject', 'check'),
  createData(8, 'Quality Assurance', 'QA Engineer', 3, 'clock', 'reject', 'clock'),
  createData(9, 'Quality Assurance', 'QA Engineer', 2, 'clock', 'reject', 'clock'),

];

const itemsPerPage = 3; // Adjust the number of items per page

export default function RequestedVacancy(props) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rows.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(rows.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='container4'>
      <div className='title4'><p className='title-para4'>{props.title}</p></div>
      <div className='table-div'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Vacancy ID</StyledTableCell>
                <StyledTableCell align="center">Vacancy Category</StyledTableCell>
                <StyledTableCell align="center">Job Vacancy</StyledTableCell>
                <StyledTableCell align="center">Number of vacancies</StyledTableCell>
                <StyledTableCell align="center">Document</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
                <StyledTableCell align="center">Publish</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.map((row) => (
                <StyledTableRow key={row.ID}>
                  <StyledTableCell align="center">{row.ID}</StyledTableCell>
                  <StyledTableCell align="center">{row.Category}</StyledTableCell>
                  <StyledTableCell align="center">{row.Vacancy}</StyledTableCell>
                  <StyledTableCell align="center">{row.Numvacancies}</StyledTableCell>
                  <StyledTableCell align="center"><RequestedVacancyIcons ImageType={row.Document}/></StyledTableCell>
                  <StyledTableCell align="center"><RequestedVacancyIcons ImageType={row.Action}/></StyledTableCell>
                  <StyledTableCell align="center"><RequestedVacancyIcons ImageType={row.Publish}/></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <nav aria-label="Page-navigation">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className={`page-link1 ${currentPage === 1 ? 'active' : ''}`} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`page-item1 ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className={`page-link ${currentPage === index + 1 ? 'active' : ''}`} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className={`page-link1 ${currentPage === totalPages ? 'active' : ''}`} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
}
