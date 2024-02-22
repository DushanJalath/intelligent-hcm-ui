import React from 'react'
import '../styles/LeaveApprove.css'
import { Button } from "@mui/material";

export default function LeaveApprove() {
    return (
        <div className="leaveApprove-container">
            <div className="menu">
                <p>Approve Employees Leave</p>
            </div>
            <div className="user-card">
                <div className="user-photo">
                    <img src="https://via.placeholder.com/300" alt="User Photo"/>
                </div>
                <div className="user-details">
                    <div className="user-name">
                        <p className="nameTag">Name: </p>
                        <p className="emName">Perera Gamage gvjvjv</p>
                    </div>
                    <p>ID: 123456</p>
                </div>

                <table className="leave-details">
                    <tbody>
                    <tr>
                        <td className="leave-type-tag" style={{paddingLeft: '10px'}}>Leave Type :</td>
                        <td className="leave-type" style={{paddingRight: '10px'}}>Personal Leave</td>
                    </tr>
                    <tr>
                        <td className="leave-startdate-tag" style={{paddingLeft: '10px'}}>Start Date :</td>
                        <td className="leave-startdate">2020-10-10</td>
                    </tr>
                    <tr>
                        <td className="leave-enddate-tag" style={{paddingLeft: '10px'}}>End Date :</td>
                        <td className="leave-enddate">2020-10-20</td>
                    </tr>
                    </tbody>
                </table>


                <div style={{display: 'flex', width: "200px", justifyContent: "center"}}>
                    <div id="LeaveApprove-Approve-button">
                        <Button variant="contained" color="success" size="small"
                                style={{borderRadius: "20px", textTransform: "none"}}>Approve</Button>
                    </div>
                    <div id="LeaveApprove-Reject-button">
                        <Button variant="contained" color="error" size="small"
                                style={{borderRadius: "20px", textTransform: "none"}}>Reject</Button>
                    </div>
                </div>

                <table className="leave-details">
                    <tbody>
                    <tr>
                        <td className="leave-type-tag" style={{paddingLeft: '10px'}}>Remaining leave</td>

                    </tr>
                    <tr>
                        <td className="leave-startdate-tag" style={{paddingLeft: '10px'}}>Personal Leave :</td>
                        <td className="leave-startdate" style={{paddingRight: '10px'}}>20</td>
                    </tr>
                    <tr>
                        <td className="leave-enddate-tag" style={{paddingLeft: '10px', paddingRight: '10px'}}>Sick Leave
                            :
                        </td>
                        <td className="leave-enddate">05</td>
                    </tr>
                    <tr>
                        <td className="leave-enddate-tag" style={{paddingLeft: '10px'}}>Vacation :</td>
                        <td className="leave-enddate">02</td>
                    </tr>
                    </tbody>
                </table>

            </div>

            <div className="user-card">
                <div className="user-photo">
                    <img src="https://via.placeholder.com/300" alt="User Photo"/>
                </div>
                <div className="user-details">
                    <div className="user-name">
                        <p className="nameTag">Name: </p>
                        <p className="emName">Perera Gamage gvjvjv</p>
                    </div>
                    <p>ID: 123456</p>
                </div>

                <table className="leave-details">
                    <tbody>
                    <tr>
                        <td className="leave-type-tag" style={{paddingLeft: '10px'}}>Leave Type :</td>
                        <td className="leave-type" style={{paddingRight: '10px'}}>Personal Leave</td>
                    </tr>
                    <tr>
                        <td className="leave-startdate-tag" style={{paddingLeft: '10px'}}>Start Date :</td>
                        <td className="leave-startdate">2020-10-10</td>
                    </tr>
                    <tr>
                        <td className="leave-enddate-tag" style={{paddingLeft: '10px'}}>End Date :</td>
                        <td className="leave-enddate">2020-10-20</td>
                    </tr>
                    </tbody>
                </table>


                <div style={{display: 'flex', width: "200px", justifyContent: "center"}}>
                    <div id="LeaveApprove-Approve-button">
                        <Button variant="contained" color="success" size="small"
                                style={{borderRadius: "20px", textTransform: "none"}}>Approve</Button>
                    </div>
                    <div id="LeaveApprove-Reject-button">
                        <Button variant="contained" color="error" size="small"
                                style={{borderRadius: "20px", textTransform: "none"}}>Reject</Button>
                    </div>
                </div>

                <table className="leave-details">
                    <tbody>
                    <tr>
                        <td className="leave-type-tag" style={{paddingLeft: '10px'}}>Remaining leave</td>

                    </tr>
                    <tr>
                        <td className="leave-startdate-tag" style={{paddingLeft: '10px'}}>Personal Leave :</td>
                        <td className="leave-startdate" style={{paddingRight: '10px'}}>20</td>
                    </tr>
                    <tr>
                        <td className="leave-enddate-tag" style={{paddingLeft: '10px', paddingRight: '10px'}}>Sick Leave
                            :
                        </td>
                        <td className="leave-enddate">05</td>
                    </tr>
                    <tr>
                        <td className="leave-enddate-tag" style={{paddingLeft: '10px'}}>Vacation :</td>
                        <td className="leave-enddate">02</td>
                    </tr>
                    </tbody>
                </table>

            </div>

            <div className="user-card">
                <div className="user-photo">
                    <img src="https://via.placeholder.com/300" alt="User Photo"/>
                </div>
                <div className="user-details">
                    <div className="user-name">
                        <p className="nameTag">Name: </p>
                        <p className="emName">Perera Gamage gvjvjv</p>
                    </div>
                    <p>ID: 123456</p>
                </div>

                <table className="leave-details">
                    <tbody>
                    <tr>
                        <td className="leave-type-tag" style={{paddingLeft: '10px'}}>Leave Type :</td>
                        <td className="leave-type" style={{paddingRight: '10px'}}>Personal Leave</td>
                    </tr>
                    <tr>
                        <td className="leave-startdate-tag" style={{paddingLeft: '10px'}}>Start Date :</td>
                        <td className="leave-startdate">2020-10-10</td>
                    </tr>
                    <tr>
                        <td className="leave-enddate-tag" style={{paddingLeft: '10px'}}>End Date :</td>
                        <td className="leave-enddate">2020-10-20</td>
                    </tr>
                    </tbody>
                </table>


                <div style={{display: 'flex', width: "200px", justifyContent: "center"}}>
                    <div id="LeaveApprove-Approve-button">
                        <Button variant="contained" color="success" size="small"
                                style={{borderRadius: "20px", textTransform: "none"}}>Approve</Button>
                    </div>
                    <div id="LeaveApprove-Reject-button">
                        <Button variant="contained" color="error" size="small"
                                style={{borderRadius: "20px", textTransform: "none"}}>Reject</Button>
                    </div>
                </div>

                <table className="leave-details">
                    <tbody>
                    <tr>
                        <td className="leave-type-tag" style={{paddingLeft: '10px'}}>Remaining leave</td>

                    </tr>
                    <tr>
                        <td className="leave-startdate-tag" style={{paddingLeft: '10px'}}>Personal Leave :</td>
                        <td className="leave-startdate" style={{paddingRight: '10px'}}>20</td>
                    </tr>
                    <tr>
                        <td className="leave-enddate-tag" style={{paddingLeft: '10px', paddingRight: '10px'}}>Sick Leave
                            :
                        </td>
                        <td className="leave-enddate">05</td>
                    </tr>
                    <tr>
                        <td className="leave-enddate-tag" style={{paddingLeft: '10px'}}>Vacation :</td>
                        <td className="leave-enddate">02</td>
                    </tr>
                    </tbody>
                </table>

            </div>


            <div className="user-card">
                <div className="user-photo">
                    <img src="https://via.placeholder.com/300" alt="User Photo"/>
                </div>
                <div className="user-details">
                    <div className="user-name">
                        <p className="nameTag">Name: </p>
                        <p className="emName">Perera Gamage gvjvjv</p>
                    </div>
                    <p>ID: 123456</p>
                </div>

                <table className="leave-details">
                    <tbody>
                    <tr>
                        <td className="leave-type-tag" style={{paddingLeft: '10px'}}>Leave Type :</td>
                        <td className="leave-type" style={{paddingRight: '10px'}}>Personal Leave</td>
                    </tr>
                    <tr>
                        <td className="leave-startdate-tag" style={{paddingLeft: '10px'}}>Start Date :</td>
                        <td className="leave-startdate">2020-10-10</td>
                    </tr>
                    <tr>
                        <td className="leave-enddate-tag" style={{paddingLeft: '10px'}}>End Date :</td>
                        <td className="leave-enddate">2020-10-20</td>
                    </tr>
                    </tbody>
                </table>


                <div style={{display: 'flex', width: "200px", justifyContent: "center"}}>
                    <div id="LeaveApprove-Approve-button">
                        <Button variant="contained" color="success" size="small"
                                style={{borderRadius: "20px", textTransform: "none"}}>Approve</Button>
                    </div>
                    <div id="LeaveApprove-Reject-button">
                        <Button variant="contained" color="error" size="small"
                                style={{borderRadius: "20px", textTransform: "none"}}>Reject</Button>
                    </div>
                </div>

                <table className="leave-details">
                    <tbody>
                    <tr>
                        <td className="leave-type-tag" style={{paddingLeft: '10px'}}>Remaining leave</td>

                    </tr>
                    <tr>
                        <td className="leave-startdate-tag" style={{paddingLeft: '10px'}}>Personal Leave :</td>
                        <td className="leave-startdate" style={{paddingRight: '10px'}}>20</td>
                    </tr>
                    <tr>
                        <td className="leave-enddate-tag" style={{paddingLeft: '10px', paddingRight: '10px'}}>Sick Leave
                            :
                        </td>
                        <td className="leave-enddate">05</td>
                    </tr>
                    <tr>
                        <td className="leave-enddate-tag" style={{paddingLeft: '10px'}}>Vacation :</td>
                        <td className="leave-enddate">02</td>
                    </tr>
                    </tbody>
                </table>

            </div>




</div>



)
}