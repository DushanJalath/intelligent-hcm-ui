
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/LeaveApprove.css';
import { Button } from "@mui/material";

export default function LeaveApproveEmployees() {
    const [leaveRequests, setLeaveRequests] = useState([]);
    const [statusUpdates, setStatusUpdates] = useState({});

    useEffect(() => {
        const fetchLeaveRequests = async () => {
            try {
                const accessToken = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8000/get_leave_request', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });
                setLeaveRequests(response.data);
            } catch (error) {
                console.error('Error fetching leave requests:', error);
            }
        };

        fetchLeaveRequests();
    }, []);

    const updateLeaveStatus = async (leave_id, new_status) => {
        try {
            const accessToken = localStorage.getItem('token');
            await axios.put(`http://localhost:8000/update_hr_leave/${leave_id}`, 
                { new_status },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            // Update the statusUpdates state
            setStatusUpdates(prevUpdates => ({
                ...prevUpdates,
                [leave_id]: new_status
            }));
        } catch (error) {
            console.error(`Error updating leave status: ${error}`);
        }
    };

    return (
        <div className="leaveApprove-container">
            <div className="menu">
                <p>Approve Employees Leave</p>
            </div>
            {leaveRequests.map((request, index) => (
                <div className="user-card" key={index}>
                    <div className="user-details">
                        <div className="user-name">
                            <p className="nameTag">Name : </p>
                            <p className="emName">{request.user_name}</p>
                        </div>
                        <div className="user-name">
                            <p className="nameTag">email : </p>
                            <p className="emName">{request.user_email}</p>
                        </div>
                    </div>

                    <table className="leave-details">
                        <tbody>
                        <tr>
                            <td className="leave-type-tag" style={{paddingLeft: '10px'}}>Leave Type :</td>
                            <td className="leave-type" style={{paddingRight: '10px'}}>{request.leaveType}</td>
                        </tr>
                        <tr>
                            <td className="leave-startdate-tag" style={{paddingLeft: '10px'}}>Submit Date :</td>
                            <td className="leave-startdate">{request.submitdate}</td>
                        </tr>
                        <tr>
                            <td className="leave-enddate-tag" style={{paddingLeft: '10px'}}>Start Date :</td>
                            <td className="leave-enddate">{request.startDate}</td>
                        </tr>
                        <tr>
                            <td className="leave-enddate-tag" style={{paddingLeft: '10px'}}>No of Days :</td>
                            <td className="leave-enddate">{request.dayCount}</td>
                        </tr>
                        </tbody>
                    </table>

                    <table className="leave-details">
                        <tbody>
                        <tr>
                            <td className="leave-type-tag" style={{paddingLeft: '10px'}}>Remaining leave</td>
                        </tr>
                        <tr>
                            <td className="leave-startdate-tag" style={{paddingLeft: '10px'}}>Sick Leave :</td>
                            <td className="leave-startdate" style={{paddingRight: '10px'}}>{request.sick_leave_count}</td>
                        </tr>
                        <tr>
                            <td className="leave-enddate-tag" style={{paddingLeft: '10px', paddingRight: '10px'}}>Annual Leave :</td>
                            <td className="leave-enddate">{request.annual_leave_count}</td>
                        </tr>
                        <tr>
                            <td className="leave-enddate-tag" style={{paddingLeft: '10px'}}>Casual Leave :</td>
                            <td className="leave-enddate">{request.casual_leave_count}</td>
                        </tr>
                        </tbody>
                    </table>

                    <div style={{display: 'flex', width: "200px", justifyContent: "center"}}>
                        {!statusUpdates[request.leave_id] ? (
                            <>
                                <div id="LeaveApprove-Approve-button">
                                    <Button
                                        variant="contained"
                                        color="success"
                                        size="small"
                                        style={{borderRadius: "20px", textTransform: "none"}}
                                        onClick={() => updateLeaveStatus(request.leave_id, "approved")}
                                    >
                                        Approve
                                    </Button>
                                </div>
                                <div id="LeaveApprove-Reject-button">
                                    <Button
                                        variant="contained"
                                        color="error"
                                        size="small"
                                        style={{borderRadius: "20px", textTransform: "none"}}
                                        onClick={() => updateLeaveStatus(request.leave_id, "rejected")}
                                    >
                                        Reject
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <p style={{
                                color: statusUpdates[request.leave_id] === "approved" ? "green" : "red",
                                textAlign: "center",
                                marginTop: "10px",
                                fontWeight: "bolder"
                            }}>
                                {statusUpdates[request.leave_id] === "approved" ? "Approved" : "Rejected"}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}


