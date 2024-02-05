import React from 'react'
import '../styles/LeaveApprove.css'
import { Button } from "@mui/material";

export default function LeaveApprove() {
    return (
        <div className="container">
            <div className="menu">
                <p>Approve Employees Leave</p>
            </div>
            <div className="user-card">
                <div className="user-photo">
                    <img src="https://via.placeholder.com/300" alt="User Photo" />
                </div>
                <div className="user-details">
                    <div className="user-name">
                        <h2 className="nameTag">Name: </h2>
                        <h2 className="emName">Perera Gamage</h2>
                    </div>
                    <p>ID: 123456</p>
                </div>

                <table className="leave-details">
                    <tbody>
                    <tr>
                        <td className="leave-type-tag">Leave Type :</td>
                        <td className="leave-type">Personal Leave</td>
                    </tr>
                    <tr>
                        <td className="leave-startdate-tag">Start Date :</td>
                        <td className="leave-startdate">2020-10-10</td>
                    </tr>
                    <tr>
                        <td className="leave-enddate-tag">End Date :</td>
                        <td className="leave-enddate">2020-10-20</td>
                    </tr>
                    </tbody>
                </table>

                <div style={{display: 'flex', width: "200px", justifyContent: "center"}}>
                    <div className="Approve-button">
                        <Button variant="contained" color="success" size="small">Approve</Button>
                    </div>
                    <div className="Reject-button">
                        <Button variant="contained" color="error" size="small">Reject</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}
