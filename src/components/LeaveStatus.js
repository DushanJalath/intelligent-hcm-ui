import React from 'react'
import '../styles/leavestatus.css'
import StatusButton from "./StatusButton";

const approvedStatus = 'pending';
const approvedStatus1 = 'approved';
const approvedStatus2 = 'Rejected';

function LeaveStatus(props) {
    return (

        <div className='container'>
            <div className='title'>{props.title}</div>
            <div className="user-card">
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
                        <td className="leave-startdate-tag">Enf Date :</td>
                        <td className="leave-startdate">2020-10-13</td>
                    </tr>
                    </tbody>
                </table>

                <StatusButton status={approvedStatus1}/>

            </div>

            <div className="user-card">
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
                        <td className="leave-startdate-tag">End Date :</td>
                        <td className="leave-startdate">2020-10-13</td>
                    </tr>
                    </tbody>
                </table>
                <StatusButton status={approvedStatus2}/>

            </div>

            <div className="user-card">
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
                        <td className="leave-startdate-tag">End Date :</td>
                        <td className="leave-startdate">2020-10-10</td>
                    </tr>
                    </tbody>
                </table>
                <StatusButton status={approvedStatus}/>
            </div>

            
    </div>
    )
}

export default LeaveStatus