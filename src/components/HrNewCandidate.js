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
import HrVacancyStatusPdfIcon from "./HrVacancyStatusPdfIcon";
import HrJobVacancyStatusButtons from "./HrJobVacancyStatusButtons";
import axios from "axios";

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

const itemsPerPages = 8;

export default function HrNewCandidate(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [candidate, setCandidate] = useState([]);

  useEffect(() => {
    const fetchcandidate = async () => {
      try {
        const accessToken = localStorage.getItem("token");
        console.log("Access Token:", accessToken);
        console.log("Request Headers:", {
          Authorization: `Bearer ${accessToken}`,
        });
        const response = await axios.get(
          "http://127.0.0.1:8000/get_candidates",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setCandidate(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchcandidate();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPages;
  const indexOfFirstItem = indexOfLastItem - itemsPerPages;
  const currentItems = candidate.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(candidate.length / itemsPerPages);

  const handlePageChange3 = (newPage1) => {
    setCurrentPage(newPage1);
  };

  const handleStatusChange = (id, newStatus) => {
    // Update the status in your data structure (candidate)
    const updatecandidatestatus = candidate.map((can) => {
      return can.c_id === id ? { ...can, status: newStatus } : can;
    });
    setCandidate(updatecandidatestatus);
  };

  return (
    <div className="container6">
      <div className="title6">
        <p className="title-para6">{props.title}</p>
      </div>
      <div className="table-div2">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">CandidateID</StyledTableCell>
                <StyledTableCell align="center">FullName</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">
                  Download Document
                </StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.map((row3) => (
                <StyledTableRow key={row3.ID}>
                  <StyledTableCell align="center">{row3.c_id}</StyledTableCell>
                  <StyledTableCell align="center">{row3.name}</StyledTableCell>
                  <StyledTableCell align="center">{row3.email}</StyledTableCell>
                  <StyledTableCell align="center">
                  <HrVacancyStatusPdfIcon endpointUrl="http://127.0.0.1:8000/download_cv" cvId= {row3.cv} filename={row3.c_id} />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <HrJobVacancyStatusButtons
                      onStatusChange={handleStatusChange}
                      id={row3.c_id}
                      endpointUrl="http://127.0.0.1:8000/update_candidate/{id}"
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <nav aria-label="Page-navigation">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className={`page-link1 ${
                  currentPage === 1 ? "active-prev" : ""
                }`}
                onClick={() => handlePageChange3(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item1 ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className={`page-link ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange3(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className={`page-link1 ${
                  currentPage === totalPages ? "active-next" : ""
                }`}
                onClick={() => handlePageChange3(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
