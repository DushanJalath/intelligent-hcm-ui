import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/contactUsTable.css';

const ContactUsTable = ({ title }) => {
    const [contacts, setContacts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/contact_us');
                setContacts(response.data);
            } catch (error) {
                console.error('Failed to fetch contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = contacts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(contacts.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const markAsRead = async (contactId) => {
        try {
            const accessToken = localStorage.getItem('token'); // Adjust based on your authentication method
            await axios.put(`http://localhost:8000/contact_us/${contactId}`, null, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            setContacts(contacts.map(contact => {
                if (contact.contact_id === contactId) {
                    return { ...contact, status: 'read' };
                }
                return contact;
            }));
        } catch (error) {
            console.error('Error marking as read:', error);
        }
    };

    return (
        <div className="container-contact-us-table">
            <div className="title-contact-us">{title}</div>
            <p className='requestLeavedescription'>
                View the list of messages from the contact us form. HR can manage and respond to these messages efficiently.
            </p>
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
                        {currentItems.map((contact) => (
                            <tr key={contact.contact_id}>
                                <td>{contact.user_email}</td>
                                <td>{contact.user_contact_number}</td>
                                <td>{contact.feedback}</td>
                                <td style={{ textAlign: 'center' }}>
                                    {contact.status === 'read' ? (
                                        <span style={{ color: 'green' }}>&#10004;</span>
                                    ) : (
                                        <button onClick={() => markAsRead(contact.contact_id)}>Mark as Read</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <button
                    onClick={handlePreviousPage}
                    style={{ marginRight: "10px", fontWeight: 600 }}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {[...Array(totalPages).keys()].map((page) => (
                    <button
                        key={page + 1}
                        onClick={() => handlePageChange(page + 1)}
                        style={{
                            marginRight: "10px",
                            padding: "8px 16px",
                            borderRadius: "25px",
                            backgroundColor: currentPage === page + 1 ? "#218838" : "#f0f0f0",
                            color: currentPage === page + 1 ? "white" : "black",
                            fontWeight: currentPage === page + 1 ? "900" : "normal",
                            border: currentPage === page + 1 ? "none" : "none",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                        }}
                    >
                        {page + 1}
                    </button>
                ))}
                <button
                    onClick={handleNextPage}
                    style={{ marginLeft: "10px", fontWeight: 600 }}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ContactUsTable;
