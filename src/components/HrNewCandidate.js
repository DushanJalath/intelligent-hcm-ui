import React, { useEffect, useState } from "react";
import "../styles/hrjobvacancystatus.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HrVacancyStatusPdfIcon from "./HrVacancyStatusPdfIcon";
import HrNewCandidateStatusButton from "./HRNewCandidateStatusButton";
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
    fontSize: "14px",
    color: "#000",
    fontFamily: "Inter",
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

const itemsPerPages = 10;

export default function HrNewCandidate({title}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [candidate, setCandidate] = useState([]);
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    const fetchcandidate = async () => {
      try {
        const accessToken = localStorage.getItem("token");
        const response = await api.get("/get_candidates", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setCandidate(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchcandidate();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPages;
  const indexOfFirstItem = indexOfLastItem - itemsPerPages;

  const filteredCandidates = selectedType === "All" 
    ? candidate 
    : candidate.filter((c) => c.vacancy === selectedType);

  const currentItems = filteredCandidates.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCandidates.length / itemsPerPages);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
};

const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};

const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
};

  const handleStatusChange = (id, newStatus) => {
    const updatecandidatestatus = candidate.map((can) => {
      return can.c_id === id ? { ...can, status: newStatus } : can;
    });
    setCandidate(updatecandidatestatus);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setCurrentPage(1); // Reset to first page on type change
  };

  const candidateTypes = ["All", ...new Set(candidate.map((c) => c.vacancy))];

  return (
    <div className="container6">
            <div className="managers-attendances-title">{title}</div>
            <p className='requestLeavedescription'>
                View the list of employees currently present today. HR can track real-time attendance and manage workforce availability efficiently.
            </p>
      <div className="filter-container">
        <label htmlFor="candidate-type">Filter With Vacancy: </label>
        <select
          id="candidate-type"
          value={selectedType}
          onChange={handleTypeChange}
        >
          {candidateTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="table-div2">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">CandidateID</StyledTableCell>
                <StyledTableCell align="center">FullName</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Score</StyledTableCell>
                <StyledTableCell align="center">Download Document</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.map((row3) => (
                <StyledTableRow key={row3.ID}>
                  <StyledTableCell align="center">{row3.c_id}</StyledTableCell>
                  <StyledTableCell align="center">{row3.name}</StyledTableCell>
                  <StyledTableCell align="center">{row3.email}</StyledTableCell>
                  <StyledTableCell align="center">{row3.score}</StyledTableCell>
                  <StyledTableCell align="center">
                    <HrVacancyStatusPdfIcon
                      endpointUrl="/download_cv"
                      cvId={row3.cv}
                      filename={row3.c_id}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <HrNewCandidateStatusButton
                      onStatusChange={handleStatusChange}
                      id={row3.c_id}
                      email={row3.email}
                      endpointUrl="/update_candidate/{id}"
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
