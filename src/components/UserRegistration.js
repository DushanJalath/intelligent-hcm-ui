import '../styles/userRegistration.css'
import React, { useState } from 'react';

function UserRegistration(props) {
    const [name, setName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleContactNoChange = (e) => {
        setContactNo(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return(
        <div className='container'>
            <div className='title'>{props.title}</div>
            <form>
                <div className='grp'>
                    <label>Name:</label>
                    <input type="text" placeholder='Full Name' value={name} onChange={handleNameChange} />
                </div>
                <div className='grp'>
                    <label>Contact No:</label>
                    <input type="text" placeholder='Contact No'value={contactNo} onChange={handleContactNoChange} />
                </div>
                <div className='grp'>
                    <label>Address :</label>
                    <input type="text" placeholder='Contact No'value={contactNo} onChange={handleContactNoChange} />
                </div>
                <div className='grp'>
                    <label>Email:</label>
                    <input type="text" placeholder='E mail' value={email} onChange={handleEmailChange} />
                </div>
                <div className='grp'>
                <label for="employeeType">Select Employee Type:</label>
                <select id="employeeType" name="employeeType">
                    <option value="employee">Employee</option>
                    <option value="manager">Manager</option>
                    <option value="hr">HR</option>
                </select>
                </div>
                <div className='grp-1'>
                    <div className='row'>
                        <label>Traveling Distance :</label>
                        <input type="text" placeholder='' value={email} onChange={handleEmailChange} />
                    </div>    
                    
                    <div className='row'>
                        <label>No of Children :</label>
                        <input type="text" placeholder='' value={email} onChange={handleEmailChange} />
                    </div>
                </div>
                <div className='grp-1'>
                    <div className='row'>
                        <label>Weight :</label>
                        <input type="text" placeholder='' value={email} onChange={handleEmailChange} />
                    </div>    
                    
                    <div className='row'>
                        <label>Height :</label>
                        <input type="text" placeholder='' value={email} onChange={handleEmailChange} />
                    </div>
                </div>
                <div className='grp'>
                    
                </div>
                <button type="submit" className='submit'>Submit</button>
            </form>
        </div>
    );
}

export default UserRegistration;