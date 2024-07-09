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

const itemsPerPage = 10;

export default function HrApproveBills({ title }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [hrbills, setHrbills] = useState([]);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const accessToken = localStorage.getItem("token");
        const response = await api.get("/get_hr_bills", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setHrbills(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBills();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = hrbills.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(hrbills.length / itemsPerPage);

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
    const updatedBills = hrbills.map((bill) => {
      return bill.bill_id === id ? { ...bill, status: newStatus } : bill;
    });
    setHrbills(updatedBills);
  };

  return (
    <div className="container6">
      <div className="managers-attendances-title">{title}</div>
      <p className="requestLeavedescription">
        View the list of employees currently present today. HR can track real-time attendance and manage workforce availability efficiently.
      </p>
      <div className="table-div2">
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
              {currentItems.map((row) => (
                <StyledTableRow key={row.bill_id}>
                  <StyledTableCell align="center">{row.bill_id}</StyledTableCell>
                  <StyledTableCell align="center">{row.category}</StyledTableCell>
                  <StyledTableCell align="center">{row.Date}</StyledTableCell>
                  <StyledTableCell align="center">
                    <HrVacancyStatusPdfIcon endpointUrl="/get_bill_pdf" cvId={row.bill_id} filename="Employeebill" />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <HrJobVacancyStatusButtons
                      onStatusChange={handleStatusChange}
                      id={row.bill_id}
                      endpointUrl={`/update_hr_bill/${row.bill_id}`}
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
