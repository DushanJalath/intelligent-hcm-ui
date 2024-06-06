import '../styles/userRegistration.css';
import React, { useState } from 'react';
import axios from 'axios';
import api from '../api';

function UserRegistration(props) {
    const [name, setName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [employeeType, setEmployeeType] = useState('employee'); // Set a default value

    const [successMessage, setSuccessMessage] = useState('');

    const handleTypeChange = (e) => {
        setEmployeeType(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleContactNoChange = (e) => {
        setContactNo(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handlePassWordChange = (e) => {
        setPassWord(e.target.value);
    };

    const addTodoHandler = async (e) => {
        e.preventDefault();
        
        const formData = {
            'name': name,
            'contact': contactNo,
            'email': email,
            'address': address,
            'password': password,
            'empType': employeeType
        };

        try {
            const accessToken = localStorage.getItem('token');
            console.log('Access Token:', accessToken);
            console.log('Request Headers:', {
                Authorization: `Bearer ${accessToken}`
            });

            const response = await api.post('/users', formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            setSuccessMessage('User registered successfully');
            console.log(response.data);

            window.location.reload();
        } catch (error) {
            setSuccessMessage('An error occurred');
            console.error('Error:', error);
        }
    };

    return (
        <div className='user-reg-container'>
            <div className='user-reg-title'>{props.title}</div>
            <form onSubmit={addTodoHandler}>
                <div className='user-reg-grp'>
                    <label>Full Name : </label>
                    <input type="text" placeholder='Full Name' value={name} onChange={handleNameChange} />
                </div>
                <div className="user-reg-grp-container">
                    <div className='user-reg-grp'>
                        <label>Contact No : </label>
                        <input type="text" placeholder='Contact No' value={contactNo} onChange={handleContactNoChange} />
                    </div>
                    <div className='user-reg-grp'>
                        <label>Email : </label>
                        <input type="text" placeholder='E mail' value={email} onChange={handleEmailChange} />
                    </div>
                    <div className='user-reg-grp'>
                        <label>Password : </label>
                        <input type="password" placeholder='Password' value={password} onChange={handlePassWordChange} />
                    </div>
                </div>

                <div className='user-reg-grp'>
                    <label htmlFor="employeeType">Select Employee Type : </label>
                    <select id="employeeType" name="employeeType" value={employeeType} onChange={handleTypeChange}>
                        <option value="employee">Employee</option>
                        <option value="manager">Manager</option>
                        <option value="hr">HR</option>
                    </select>
                </div>
                <div className='user-reg-grp'>
                    <label>Address : </label>
                    <input type="text" placeholder='Address' value={address} onChange={handleAddressChange} />
                </div>

                <button type="submit" className='submit'>Submit</button>
                <p className='success-message'>{successMessage}</p>
            </form>
        </div>
    );
}

export default UserRegistration;
