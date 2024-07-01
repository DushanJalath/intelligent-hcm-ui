import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/contactUsTable.css';

const ContactUsTable = ({ title }) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/contact_us');
                setContacts(response.data);
            } catch (error) {
                setError('Failed to fetch contacts');
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    const markAsRead = async (contactId) => {
        try {
            const accessToken = localStorage.getItem('token'); // Adjust based on your authentication method
            const response = await axios.put(`http://localhost:8000/contact_us/${contactId}`, null, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            // Update the status locally in the contacts state
            setContacts(contacts.map(contact => {
                if (contact.contact_id === contactId) {
                    return { ...contact, status: 'read' };
                }
                return contact;
            }));
        } catch (error) {
            console.error('Error marking as read:', error);
            // Handle error, show error message, etc.
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container-contact-us-table">
            <div className="title-contact-us">{title}</div>
            {contacts.length === 0 ? (
                <div>No feedback to show</div>
            ) : (
                <table className="contactusTable">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact.contact_id} onClick={() => markAsRead(contact.contact_id)}>
                                <td>{contact.user_email}</td>
                                <td>{contact.user_contact_number}</td>
                                <td>{contact.feedback}</td>
                                <td style={{ textAlign: 'center' }}>
                                    {contact.status === 'read' ? (
                                        <span style={{ color: 'green' }}>&#10004;</span>
                                    ) : (
                                        <button>Mark as Read</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ContactUsTable;
