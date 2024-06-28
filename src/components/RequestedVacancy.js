import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import HrVacancyStatusPdfIcon from './HrVacancyStatusPdfIcon';
import api from '../api';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontFamily: 'Inter',
    fontSize: '15px',
    fontStyle: 'inter',
    fontWeight: 800,
    lineHeight: 'normal',
    letterSpacing: '0.18px',
  },
  [`&.${tableCellClasses.body}`]: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'inter',
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

export default function RequestedVacancy(props) {
  const [vacancies, setVacancies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('token');
        console.log('Access Token:', accessToken);
        console.log('Request Headers:', {
          Authorization: `Bearer ${accessToken}`,
        });

        const response = await api.get('/get_vacancies', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setVacancies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  
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
      <div className='title4'><p className='title-para4'>{props.title}</p></div>
      <div className='table-div'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Vacancy ID</StyledTableCell>
                <StyledTableCell align="center">Job Type</StyledTableCell>
                <StyledTableCell align="center">Possition</StyledTableCell>
                <StyledTableCell align="center">Number Of Vacancies</StyledTableCell>
                <StyledTableCell align="center">Document</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
                <StyledTableCell align="center">Publish</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.map((row) => (
                <StyledTableRow key={row.ID}>
                  <StyledTableCell align="center">{row.vacancy_id}</StyledTableCell>
                  <StyledTableCell align="center">{row.project_type}</StyledTableCell>
                  <StyledTableCell align="center">{row.possition}</StyledTableCell>
                  <StyledTableCell align="center">{row.num_of_vacancies}</StyledTableCell>
                  <StyledTableCell align="center"><HrVacancyStatusPdfIcon endpointUrl=" " cvId={row.vacancy_id} filename={row.vacancy_id} /></StyledTableCell>
                  <StyledTableCell align="center"><RequestedVacancyIcons ImageType={row.status}/></StyledTableCell>
                  <StyledTableCell align="center"><RequestedVacancyIcons ImageType={row.publish_status}/></StyledTableCell>
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
  );
}
