import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/leavestatus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function LeaveStatus(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [leaves, setLeaves] = useState([]);
  const leavesPerPage = 10; // Number of leave cards per page

  // Fetch leave status data from the backend
  useEffect(() => {
    async function fetchLeaveStatus() {
      try {
        const accessToken = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/leave_status", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });
        setLeaves(response.data);
      } catch (error) {
        console.error("Error fetching leave status:", error);
      }
    }

    fetchLeaveStatus();
  }, [leaves]); // Add leaves as a dependency

  // Calculate total pages
  const totalPages = Math.ceil(leaves.length / leavesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Calculate the index of the first and last leave card to display on the current page
  const startIndex = (currentPage - 1) * leavesPerPage;
  const endIndex = Math.min(startIndex + leavesPerPage, leaves.length);

  const handleDelete = async (billId) => {
    try {
      const accessToken = localStorage.getItem("token");
      await axios.delete(`http://127.0.0.1:8000/leave/${billId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // Remove the deleted bill from state
      setLeaves(leaves.filter((leave) => leave.leave_id !== billId));
      console.log(`Successfully deleted bill with ID ${billId}`);
    } catch (error) {
      console.error(`Error deleting bill with ID ${billId}:`, error);
    }
  };

  return (
    <div className="leave-status-container">
      <div className="leave-status-title">{props.title}</div>
      <p className="leavedescription">
        Gives a quick update on whether a leave is Pending, Approved, or
        Rejected.
      </p>
      {leaves.length === 0 ? (
        <div className="no-leaves-message">No Leaves Found</div>
      ) : (
        leaves.slice(startIndex, endIndex).map((leave, index) => (
          <div
            key={index}
            className={`leave-status-card ${leave.status.toLowerCase()}`}
          >
            <div className="leave-part">
              <p className="leave-label">Leave Type:</p>
              <p className="leave-value">{leave.leaveType}</p>
            </div>
            <div className="leave-part">
              <p className="leave-label">Submit Date:</p>
              <p className="leave-value">{leave.submitdate}</p>
            </div>
            <div className="leave-part">
              <p className="leave-label">Start Date:</p>
              <p className="leave-value">{leave.startDate}</p>
            </div>
            <div className="leave-part">
              <p className="leave-label">No of Days:</p>
              <p className="leave-value">{leave.dayCount}</p>
            </div>
            <div className="leave-part">
              <p className="leave-label">Status:</p>
              <p className={`status-leave-value ${leave.status.toLowerCase()}`}>
                {leave.status}
              </p>
            </div>
            {leave.status.toLowerCase() === "pending" && (
              <button
                className="delete-button"
                onClick={() => handleDelete(leave.leave_id)}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-red-500"
                  fontSize={"25px"}
                />
              </button>
            )}
          </div>
        ))
      )}
      {leaves.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            onClick={handlePreviousPage}
            style={{ marginRight: "10px", fontWeight: 600 }}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages).keys()].map((page) => {
            const isActive = currentPage === page + 1;
            return (
              <button
                key={page + 1}
                onClick={() => handlePageChange(page + 1)}
                style={{
                  marginRight: "10px",
                  padding: "8px 16px",
                  borderRadius: "25px",
                  backgroundColor: isActive ? "#218838" : "#f0f0f0",
                  color: isActive ? "white" : "black",
                  fontWeight: isActive ? "900" : "normal",
                  border: isActive ? "1px solid #0056b3" : "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
              >
                {page + 1}
              </button>
            );
          })}
          <button
            onClick={handleNextPage}
            style={{ marginLeft: "10px", fontWeight: 600 }}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default LeaveStatus;
