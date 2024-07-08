import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/managersAttendances.css';

const ViewIndividualAttendance = ({ title }) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const accessToken = localStorage.getItem('token'); // Adjust based on your authentication method
                const response = await axios.get(`http://localhost:8000/get_today_manager's_employees`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });
                setContacts(response.data);
            } catch (error) {
                setError('Failed to fetch contacts');
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="managers-attendances-container">
            <div className="managers-attendances-title">{title}</div>
            <p className='requestLeavedescription'>Monitor the current attendance status of employees for today.</p>
            {contacts.length === 0 ? (
                <div>No feedback to show</div>
            ) : (
                <table className="managers-attendances-table">
                    <thead>
                        <tr>
                            <th>Profile Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact.user_email}>
                                <td>
                                    <img 
                                        src={contact.profile_pic_url} 
                                        alt="Profile" 
                                        className="managers-attendances-profile-pic"
                                    />
                                </td>
                                <td>{contact.fName}</td>
                                <td>{contact.user_email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            )}
            
        </div>
    );
};

export default ViewIndividualAttendance;
