import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/BillStatus.css'

const approvedStatus = 'pending';
const approvedStatus1 = 'approved';
const approvedStatus2 = 'Rejected';

function BillStatus(props) {
    const [documents, setDocuments] = useState([]);
    useEffect(() => {
        const fetchDocuments = async () => {
        try {
            const accessToken = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8000/bill_status/',{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            setDocuments(response.data);
        } catch (error) {
            console.error('Error fetching documents:', error);
        }
    };
    fetchDocuments();
}, []);

        return (
            <div className='container-bill-status'>
              <div className='title-bill-status'>{props.title}</div>
              <div className='content'>
              {/* Map over the responses and render a user card for each response */}
              {documents.map((response, index) => (
                <div className="user-card" key={index}>
                  <table className="leave-details">
                    <tbody>
                      <tr>
                        <td className="leave-type-tag">Bill Type :</td>
                        <td className="leave-type">{response.category}</td>
                      </tr>
                      <tr>
                        <td className="leave-startdate-tag">Submitted Date :</td>
                        <td className="leave-startdate">{response.submitdate}</td>
                      </tr>
                    </tbody>
                  </table>
                  {response.status}
                </div>
              ))}
              </div>
            </div>
          );
        };


export default BillStatus