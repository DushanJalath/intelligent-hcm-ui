import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/managersAttendances.css';

const EmployeesAttendances = ({ title }) => {
    const [contacts, setContacts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const accessToken = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8000/get_today_employees`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });
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


    return (
        <div className="managers-attendances-container">
            <div className="managers-attendances-title">{title}</div>
            <p className='requestLeavedescription'>View the list of employees currently present today. HR can track real-time attendance and manage workforce availability efficiently.</p>
            {contacts.length === 0 ? (
                <div>No Employee Details to show</div>
            ) : (
                <table className="managers-attendances-table">
                    <thead>
                        <tr>
                            <th>Profile Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Manager Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((contact) => (
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
                                <td>{contact.manager}</td>
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

export default EmployeesAttendances;
