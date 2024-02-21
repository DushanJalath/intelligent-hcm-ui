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
  
  function createDataforAB(
    RIDs,
    Categorys,
    Vacancies,
    DownloadD,
  ) {
    return { RIDs, Categorys, Vacancies, DownloadD};
  }
  
  const rows4 = [
    createDataforAB(1, 'Healthcare ', '12/10/2023', 'pdf'),
    createDataforAB(2, 'Hotel', '12/10/2023', 'pdf'),
    createDataforAB(3, 'Healthcare', '12/10/2023', 'pdf'),
    createDataforAB(4, 'Hotel', '12/10/2023', 'pdf'),
    createDataforAB(5, 'Healthcare', '12/10/2023', 'pdf'),
    createDataforAB(6, 'Hotel', '12/10/2023', 'pdf'),
    createDataforAB(7, 'Healthcare', '12/10/2023', 'pdf'),
    createDataforAB(8, 'Hotel', '12/10/2023', 'pdf'),
    createDataforAB(9, 'Healthcare', '12/10/2023', 'pdf'),
    createDataforAB(10, 'Hotel', '12/10/2023', 'pdf'),
    createDataforAB(11, 'Transport', '12/10/2023', 'pdf'),
    createDataforAB(12, 'Healthcare', '12/10/2023', 'pdf'),
    createDataforAB(13, 'Hotel', '12/10/2023', 'pdf'),
    createDataforAB(14, 'Healthcare', '12/10/2023', 'pdf'),
    createDataforAB(15, 'Transport', '12/10/2023','pdf'),
    createDataforAB(11, 'Transport', '12/10/2023', 'pdf'),
    createDataforAB(12, 'Healthcare', '12/10/2023', 'pdf'),
    createDataforAB(13, 'Hotel', '12/10/2023', 'pdf'),
    createDataforAB(14, 'Healthcare', '12/10/2023', 'pdf'),
    createDataforAB(15, 'Transport', '12/10/2023','pdf'),
  
  ];
  
  const itemsPerPages = 8;
  
export default function HrApproveBills(props) {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPages;
    const indexOfFirstItem = indexOfLastItem - itemsPerPages;
    const currentItems = rows4.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(rows4.length / itemsPerPages);

    const handlePageChange4 = (newPage1) => {
    setCurrentPage(newPage1);
     };

    const handleStatusChange = (id, newStatus) => {
        // Update the status in your data structure (rows3)
        const updatedRows = rows4.map((row) => (row.RIDs === id ? { ...row, status: newStatus } : row));
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
                        <StyledTableCell align="center">Request ID</StyledTableCell>
                        <StyledTableCell align="center">Bill Category</StyledTableCell>
                        <StyledTableCell align="center">Submitted date</StyledTableCell>
                        <StyledTableCell align="center">Download Document</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {currentItems.map((row4) => (
                        <StyledTableRow key={row4.ID}>
                        <StyledTableCell align="center">{row4.RIDs}</StyledTableCell>
                        <StyledTableCell align="center">{row4.Categorys}</StyledTableCell>
                        <StyledTableCell align="center">{row4.Vacancies}</StyledTableCell>
                        <StyledTableCell align="center"><HrVacancyStatusPdfIcon ImageType={row4.DownloadD}/></StyledTableCell>
                        <StyledTableCell align='center'><HrJobVacancyStatusButtons onStatusChange={(newStatus) => handleStatusChange(row4.RIDs, newStatus)} /></StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>

                <nav aria-label="Page-navigation">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className={`page-link1 ${currentPage === 1 ? 'active-prev' : ''}`} onClick={() => handlePageChange4(currentPage - 1)}>Previous</button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className={`page-item1 ${currentPage === index + 1 ? 'active' : ''}`}>
                        <button className={`page-link ${currentPage === index + 1 ? 'active' : ''}`} onClick={() => handlePageChange4(index + 1)}>{index + 1}</button>
                    </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className={`page-link1 ${currentPage === totalPages ? 'active-next' : ''}`} onClick={() => handlePageChange4(currentPage + 1)}>Next</button>
                    </li>
                </ul>
                </nav>

            </div>
        </div>
  )
}
