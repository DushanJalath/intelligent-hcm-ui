import React from 'react'
import '../styles/LeaveApprove.css'
import StatusButton from "./StatusButton";


const approvedStatus = 'pending';
const approvedStatus1 = 'approved';
const approvedStatus2 = 'Rejected';

export default function ViewEmployeeLeaveStatus() {
    return (
        <div className="leaveApprove-container">
            <div className="menu">
                <p>View Employee Leave Status</p>
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

                <StatusButton status={approvedStatus1}/>

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
                <StatusButton status={approvedStatus2}/>

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
                <StatusButton status={approvedStatus}/>

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
                <StatusButton status={approvedStatus}/>

            </div>


        </div>


    )
}
