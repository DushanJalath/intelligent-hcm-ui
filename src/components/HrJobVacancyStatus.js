import React, { useEffect } from "react";
import "../styles/hrjobvacancystatus.css";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import HrJobRequestedVacancyIcons from "./HrJobRequestedVacancyIcons";
import VacancyPdfDownloadIcon from "./VacancyPdfDownloadIcon";
import HrJobPublishIcon from "./HrJobPublishIcon";
import HrJobVacancyStatusButtons from "./HrJobVacancyStatusButtons";
import api from "../api";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontFamily: "Inter",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 800,
    lineHeight: "normal",
    letterSpacing: "0.18px",
  },
  [`&.${tableCellClasses.body}`]: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    letterSpacing: "0.18px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#939393",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function HrJobVacancyStatus({title}) {
  const [vacancies, setVacancies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("token");
        console.log("Access Token:", accessToken);
        console.log("Request Headers:", {
          Authorization: `Bearer ${accessToken}`,
        });
        const response = await api.get("/get_hr_vacancies", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setVacancies(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const itemsPerPages = 8;
  const indexOfLastItem = currentPage * itemsPerPages;
  const indexOfFirstItem = indexOfLastItem - itemsPerPages;
  const currentItems = vacancies.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(vacancies.length / itemsPerPages);

  const handlePageChange = (newPage1) => {
    setCurrentPage(newPage1);
  };

  
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};

const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
};

  const handleStatusChange = (id, newStatus) => {
    // Update the status in your data structure (rows2)
    const updatedVacancies = vacancies.map((vacancy) => {
      return vacancy.vacancy_id === id
        ? { ...vacancy, status: newStatus }
        : vacancy;
    });
    setVacancies(updatedVacancies);
  };

  return (
    <div className="container6">
 <div className="managers-attendances-title">{title}</div>
 <p className='requestLeavedescription'>View the list of employees currently present today. HR can track real-time attendance and manage workforce availability efficiently.</p>
      <div className="table-div2">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Vacancy ID</StyledTableCell>
                <StyledTableCell align="center">Publisher Name</StyledTableCell>
                <StyledTableCell align="center">Job Type</StyledTableCell>
                <StyledTableCell align="center">Job Possition</StyledTableCell>
                <StyledTableCell align="center">
                  Number of vacancies
                </StyledTableCell>
                <StyledTableCell align="center">
                  Download Document
                </StyledTableCell>
                {/* <StyledTableCell align="center">
                  Upload Document
                </StyledTableCell> */}
                <StyledTableCell align="center">Action</StyledTableCell>
                <StyledTableCell align="center">Publish</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.map((row2) => (
                <StyledTableRow key={row2.vacancy_id}>
                  <StyledTableCell align="center">
                    {row2.vacancy_id}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row2.publisher_fname}&nbsp;{row2.publisher_lname}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row2.job_type}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row2.possition}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row2.num_of_vacancies}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <VacancyPdfDownloadIcon
                      endpointUrl="/download_vacancy-pdf"
                      pdfId={row2.pdf_file_id}
                      filename={row2.vacancy_id}
                    />
                  </StyledTableCell>
                  {/* <StyledTableCell align="center">
                    <HrJobRequestedVacancyIcons
                      endpointUrl=""
                      jobId={row2.vacancy_id}
                    />
                  </StyledTableCell> */}
                  <StyledTableCell align="center">
                    <HrJobVacancyStatusButtons
                      onStatusChange={handleStatusChange}
                      id={row2.vacancy_id}
                      endpointUrl="/update_hr_vacancy/{id}"
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <HrJobPublishIcon
                      endpointUrl="/publish_vacancy"
                      jobId={row2.vacancy_id}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <button
                    onClick={handlePreviousPage}
                    style={{ marginRight: "10px", fontWeight: 600 }}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {[...Array(totalPages).keys()].map((page) => (
                    <button
                        key={page + 1}
                        onClick={() => handlePageChange(page + 1)}
                        style={{
                            marginRight: "10px",
                            padding: "8px 16px",
                            borderRadius: "25px",
                            backgroundColor: currentPage === page + 1 ? "#218838" : "#f0f0f0",
                            color: currentPage === page + 1 ? "white" : "black",
                            fontWeight: currentPage === page + 1 ? "900" : "normal",
                            border: currentPage === page + 1 ? "none" : "none",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                        }}
                    >
                        {page + 1}
                    </button>
                ))}
                <button
                    onClick={handleNextPage}
                    style={{ marginLeft: "10px", fontWeight: 600 }}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
      </div>
    </div>
  );
}
