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
import HrVacancyStatusPdfIcon from './HrVacancyStatusPdfIcon';
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
  
  function createDataforNC(
    CIDs,
    FName,
    Emails,
    DownloadD,
  ) {
    return { CIDs, FName, Emails, DownloadD};
  }
  
  const rows3 = [
    createDataforNC(1, 'oshen madhuka', 'oshenbhawajith1999@gmail.com', 'pdf'),
    createDataforNC(2, 'oshen madhuka', 'oshenbhawajith1999@gmail.com', 'pdf'),
    createDataforNC(3, 'oshen madhuka', 'oshenbhawajith1999@gmail.com', 'pdf'),
    createDataforNC(4, 'oshen madhuka', 'oshenbhawajith1999@gmail.com', 'pdf'),
    createDataforNC(5, 'oshen madhuka', 'oshenbhawajith1999@gmail.com', 'pdf'),
    createDataforNC(6, 'oshen madhuka', 'oshenbhawajith1999@gmail.com', 'pdf'),
    createDataforNC(7, 'oshen madhuka', 'oshenbhawajith1999@gmail.com', 'pdf'),
    createDataforNC(8, 'oshen madhuka', 'oshenbhawajith1999@gmail.com', 'pdf'),
    createDataforNC(9, 'oshen madhuka', 'oshenbhawajith1999@gmail.com', 'pdf'),
    createDataforNC(10, 'oshen madhuka', 'oshenbhawajith1999@gmail.com', 'pdf'),
    createDataforNC(11, 'oshen madhuka', 'oshenbhawajith1999@gmail.com', 'pdf'),
    createDataforNC(12, 'oshen madhuka', 'oshenbhawajith1999@gmail.com', 'pdf'),
    createDataforNC(13, 'oshen madhuka', 'oshenbhawajith1999@gmail.com', 'pdf'),
    createDataforNC(14, 'oshen madhuka', 'oshenbhawajith1999@gmail.com', 'pdf'),
    createDataforNC(15, 'oshen madhuka', 'oshenbhawajith1999@gmail.com','pdf'),
  
  ];
  
  const itemsPerPages = 8;

export default function HrNewCandidate(props) {
  const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPages;
    const indexOfFirstItem = indexOfLastItem - itemsPerPages;
    const currentItems = rows3.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(rows3.length / itemsPerPages);

    const handlePageChange3 = (newPage1) => {
    setCurrentPage(newPage1);
     };

    const handleStatusChange = (id, newStatus) => {
        // Update the status in your data structure (rows3)
        const updatedRows = rows3.map((row) => (row.CIDs === id ? { ...row, status: newStatus } : row));
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
                        <StyledTableCell align="center">CandidateID</StyledTableCell>
                        <StyledTableCell align="center">FullName</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">Download Document</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {currentItems.map((row3) => (
                        <StyledTableRow key={row3.ID}>
                        <StyledTableCell align="center">{row3.CIDs}</StyledTableCell>
                        <StyledTableCell align="center">{row3.FName}</StyledTableCell>
                        <StyledTableCell align="center">{row3.Emails}</StyledTableCell>
                        <StyledTableCell align="center"><HrVacancyStatusPdfIcon ImageType={row3.DownloadD}/></StyledTableCell>
                        <StyledTableCell align='center'><HrJobVacancyStatusButtons onStatusChange={(newStatus) => handleStatusChange(row3.IDs, newStatus)} /></StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>

                <nav aria-label="Page-navigation">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className={`page-link1 ${currentPage === 1 ? 'active-prev' : ''}`} onClick={() => handlePageChange3(currentPage - 1)}>Previous</button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className={`page-item1 ${currentPage === index + 1 ? 'active' : ''}`}>
                        <button className={`page-link ${currentPage === index + 1 ? 'active' : ''}`} onClick={() => handlePageChange3(index + 1)}>{index + 1}</button>
                    </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className={`page-link1 ${currentPage === totalPages ? 'active-next' : ''}`} onClick={() => handlePageChange3(currentPage + 1)}>Next</button>
                    </li>
                </ul>
                </nav>

            </div>
        </div>
  )
}
