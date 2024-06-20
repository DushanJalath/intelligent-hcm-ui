import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';
import '../styles/InterviewDetails.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
     // backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      fontFamily: 'Inter',
      fontSize: '19px',
      fontStyle: 'normal',
      fontWeight: 800,
      lineHeight: 'normal',
      letterSpacing: '0.18px',
    },
    [`&.${tableCellClasses.body}`]: {
      //fontSize: '14px',
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
  
  
  
  const InterviewDetails = ({ vacancies }) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = vacancies.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(vacancies.length / itemsPerPage);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
  
    return (
      <div className='container4'>
        <div className='title4'>
          Interview Details
        </div>
        <div className='table-div'>
          <TableContainer>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#02936f' }} >
                  <StyledTableCell align="center">Date</StyledTableCell>
                  <StyledTableCell align="center">Time</StyledTableCell>
                  <StyledTableCell align="center">Venue</StyledTableCell>
                  <StyledTableCell align="center">Interviewer</StyledTableCell>
                  <StyledTableCell align="center">Candidate</StyledTableCell>
                  <StyledTableCell align="center">Confirmed Date</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentItems.map((row) => (
                  <StyledTableRow key={row.ID}>
                    <StyledTableCell align="center">{row.date}</StyledTableCell>
                    <StyledTableCell align="center">{row.time}</StyledTableCell>
                    <StyledTableCell align="center">{row.venue}</StyledTableCell>
                    <StyledTableCell align="center">{row.interviewer}</StyledTableCell>
                    <StyledTableCell align="center">{row.candidate}</StyledTableCell>
                    <StyledTableCell align="center">{row.confirmed_date}</StyledTableCell>
                    <StyledTableCell align="center">{row.status}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
  
          <nav aria-label="Page-navigation">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className={`page-link1 ${currentPage === 1 ? 'active-prev' : ''}`}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index} className={`page-item1 ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button
                    className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className={`page-link1 ${currentPage === totalPages ? 'active-next' : ''}`}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  };
  
export default InterviewDetails;
  
