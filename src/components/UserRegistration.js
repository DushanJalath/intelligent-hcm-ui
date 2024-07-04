import '../styles/userRegistration.css';
import React, { useState, useEffect } from 'react';
import api from '../api';

function UserRegistration(props) {
    const [fName, setFirstName] = useState('');
    const [lName, setLastName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [address, setAddress] = useState('');
    const [user_email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [cPassword, setCPassWord] = useState('');
    const [position, setPosition] = useState('');
    const [employeeType, setEmployeeType] = useState('Manager'); // Set a default value
    const [profilePic, setProfilePic] = useState(null);
    const [manager, setManager] = useState(''); // Initialize manager state to an empty string
    const [managers, setManagers] = useState([]); // State to store the list of managers
    const [alertMessage, setAlertMessage] = useState('');
    const [alertClass, setAlertClass] = useState('');
    const [maxOT, setMaxOT] = useState('');
    const [otRate, setOtRate] = useState('');

    useEffect(() => {
        const fetchManagers = async () => {
            try {
                const response = await api.get('http://localhost:8000/users/managers');
                setManagers(response.data);
            } catch (error) {
                console.error('Error fetching managers:', error);
            }
        };
        fetchManagers();
    }, []);

    const handleTypeChange = (e) => {
        setEmployeeType(e.target.value);
    };

    const handleManagerChange = (e) => {
        const selectedManager = managers.find(manager => manager.user_email === e.target.value);
        setManager(selectedManager ? selectedManager.user_email : '');
    };

    const handleConfirmPassword = (e) => {
        setCPassWord(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleOtRateChange = (e) => {
        setOtRate(e.target.value);
    };

    const handleMaxOTChange = (e) => {
        setMaxOT(e.target.value);
    };

    const handlePosition = (e) => {
        setPosition(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
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

    const handleProfilePicChange = (e) => {
        setProfilePic(e.target.files[0]);
    };

    const addTodoHandler = async (e) => {
        e.preventDefault();

        if (password !== cPassword) {
            setAlertMessage('Passwords are mismatching');
            setAlertClass('alert-error');
            return;
        }

        const formData = new FormData();
        formData.append('fName', fName);
        formData.append('lName', lName);
        formData.append('contact', contactNo);
        formData.append('user_email', user_email);
        formData.append('address', address);
        formData.append('user_pw', password);
        formData.append('user_type', employeeType);
        formData.append('user_role', position ||'nul');
        formData.append('max_ot', maxOT || 0);
        formData.append('hourly_ot_rate', otRate || 0);        
        if (profilePic) {
            formData.append('profile_pic', profilePic);
        }
        formData.append('manager', manager || 'null');

        console.log(formData);

        try {
            const accessToken = localStorage.getItem('token');
            const response = await api.post('http://localhost:8000/users', formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            setAlertMessage('User registered successfully');
            setAlertClass('alert-success');

            // Optionally, reset the form fields
            setFirstName('');
            setLastName('');
            setContactNo('');
            setAddress('');
            setEmail('');
            setPassWord('');
            setCPassWord('');
            setPosition('');
            setProfilePic(null);
            setEmployeeType('Employee');
            setManager('');

        } catch (error) {
            const errorMessage = error.response?.data?.message || 'An error occurred';
            setAlertMessage(errorMessage);
            setAlertClass('alert-error');
        }
    };

    return (
        <div className='user-reg-container'>
            <div className='user-reg-title'>{props.title}</div>
            <form onSubmit={addTodoHandler}>
                <div className="user-reg-grp-container">
                    <div className='user-reg-grp'>
                        <label>First Name : </label>
                        <input type="text" placeholder='First Name' value={fName} onChange={handleFirstNameChange} />
                    </div>
                    <div className='user-reg-grp'>
                        <label>Last Name : </label>
                        <input type="text" placeholder='Last Name' value={lName} onChange={handleLastNameChange} />
                    </div>
                    <div className='user-reg-grp'>
                        <label>Contact No : </label>
                        <input type="text" placeholder='Contact No' value={contactNo} onChange={handleContactNoChange} />
                    </div>
                </div>
                <div className="user-reg-grp-container">
                    <div className='user-reg-grp'>
                        <label>Email : </label>
                        <input type="text" placeholder='E mail' value={user_email} onChange={handleEmailChange} />
                    </div>
                    <div className='user-reg-grp'>
                        <label>Password : </label>
                        <input type="password" placeholder='Password' value={password} onChange={handlePassWordChange} />
                    </div>
                    <div className='user-reg-grp'>
                        <label>Confirm Password : </label>
                        <input type="password" placeholder='Confirm Password' value={cPassword} onChange={handleConfirmPassword} />
                    </div>
                </div>
                <div className="user-reg-grp-container">
                    <div className='user-reg-grp'>
                        <label htmlFor="employeeType">Select Employee Type : </label>
                        <select id="employeeType" name="employeeType" value={employeeType} onChange={handleTypeChange}>
                            <option value="Manager">Manager</option>
                            <option value="Employee">Employee</option>
                            <option value="HR">HR</option>
                        </select>
                    </div>               
                    {employeeType === 'Employee' && (
                        <>
                        <div className='user-reg-grp'>
                            <label>Position : </label>
                            <input type="text" placeholder='Position' value={position} onChange={handlePosition} />
                        </div>
                        <div className='user-reg-grp'>
                            <label htmlFor="manager">Select Manager : </label>
                            <select id="manager" name="manager" value={manager || ''} onChange={handleManagerChange}>
                                <option value="">None</option>
                                {managers.map((manager) => (
                                    <option key={manager.user_email} value={manager.user_email}>
                                        {manager.fName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        </>
                        
                    )}
                </div>

                <div className='user-reg-grp'>
                    <label>Address : </label>
                    <input type="text" placeholder='Address' value={address} onChange={handleAddressChange} />
                </div>
                <div className='user-reg-grp'>
                    <label>Profile Picture : </label>
                    <input type="file" onChange={handleProfilePicChange} />
                </div>
                {(employeeType === 'Employee' || employeeType === 'Manager') &&
                    <div className="user-reg-grp-container">
                        <div className='user-reg-grp'>
                            <label>Maximum OT Hours: </label>
                            <input type="text" placeholder='Maximum OT Hours' value={maxOT} onChange={handleMaxOTChange} />
                        </div>
                        <div className='user-reg-grp'>
                            <label>Hourly OT Rate: </label>
                            <input type="text" placeholder='OT Rate' value={otRate} onChange={handleOtRateChange} />
                        </div>
                    </div>
                }
                

                <button type="submit" className='submit'>Submit</button>
                {alertMessage && (
                    <div className={`alert ${alertClass}`}>
                        {alertMessage}
                    </div>
                )}
            </form>
        </div>
    );
}

export default UserRegistration;
