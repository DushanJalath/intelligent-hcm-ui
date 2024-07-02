// InterviewDetails.js
import React, { useState, useEffect } from 'react';
import '../styles/InterviewDetails.css';
import api from '../api';
import HRSidebar from '../components/HRSidebar';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import sendEmailToInterviewer from './sendEmailToInterviewer';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
    fontFamily: 'Inter',
    fontSize: '17px',
    fontStyle: 'normal',
    fontWeight: 800,
    lineHeight: 'normal',
    letterSpacing: '0.18px',
  },
  [`&.${tableCellClasses.body}`]: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '15px',
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

const InterviewDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [interview, setInterview] = useState([]);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const accessToken = localStorage.getItem('token');
        if (!accessToken) {
          throw new Error('Access token not found');
        }

        const response = await api.get('/get_interviews', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setInterview(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error (e.g., show error message to user)
      }
    };

    fetchInterviews();
  }, []);

  const handleSendEmail = async (c_id) => {
    try {
      await sendEmailToInterviewer(c_id);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Email sending failed. Please try again.');
    }
  };

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = interview.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(interview.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='interview-container4'>
      <div className='title4'>Interview Details</div>
      <div className='table-div'>
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label='customized table'>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#02936f' }}>
                <StyledTableCell align='center'>Interview ID</StyledTableCell>
                <StyledTableCell align='center'>Candidate ID</StyledTableCell>
                <StyledTableCell align='center'>Date</StyledTableCell>
                <StyledTableCell align='center'>Time</StyledTableCell>
                <StyledTableCell align='center'>Venue</StyledTableCell>
                <StyledTableCell align='center'>Interviewer</StyledTableCell>
                <StyledTableCell align='center'>Confirmed Date</StyledTableCell>
                <StyledTableCell align='center'>Status</StyledTableCell>
                <StyledTableCell align='center'>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.map((row) => (
                <StyledTableRow key={row.ID}>
                  <StyledTableCell align='center'>{row.i_id}</StyledTableCell>
                  <StyledTableCell align='center'>{row.c_id}</StyledTableCell>
                  <StyledTableCell align='center'>{row.date}</StyledTableCell>
                  <StyledTableCell align='center'>{row.time}</StyledTableCell>
                  <StyledTableCell align='center'>{row.venue}</StyledTableCell>
                  <StyledTableCell align='center'>{row.interviewer_id}</StyledTableCell>
                  <StyledTableCell align='center'>{row.confirmed_date}</StyledTableCell>
                  <StyledTableCell align='center'>{row.result}</StyledTableCell>
                  <StyledTableCell align='center'>
                    <Button 
                      sx={{
                        width: '70px',
                        height: '45px',
                        borderRadius: '10px',
                        backgroundColor: '#02936F',
                        color: '#fff',
                        fontSize: '11px',
                        padding:'15px',
                        '&:hover':{
                          backgroundColor: '#02936F',}
                        
                      }}
                      varient='contained'
                      onClick={() => handleSendEmail(row.c_id)} // Pass necessary data to handleSendEmail function
                    >
                      Send Email
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <nav aria-label='Page-navigation'>
          <ul className='pagination'>
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
