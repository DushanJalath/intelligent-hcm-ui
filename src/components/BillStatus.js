import React from 'react'
import '../styles/BillStatus.css'
// import StatusButton from "./StatusButton";

// const approvedStatus = 'pending';
// const approvedStatus1 = 'approved';
// const approvedStatus2 = 'Rejected';

function BillStatus(props) {
    return (

        <div className='container-bill-status'>
            <div className='title-bill-status'>{props.title}</div>
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
                    </tbody>
                </table>

                {/* <StatusButton status={approvedStatus1}/> */}

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
                    </tbody>
                </table>
                {/* <StatusButton status={approvedStatus2}/> */}

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
                    </tbody>
                </table>
                {/* <StatusButton status={approvedStatus}/> */}
            </div>

            
    </div>
    )
}

export default BillStatus