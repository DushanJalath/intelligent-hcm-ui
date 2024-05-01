import React from 'react';
import AccountLogin from '../components/AccountLogin';
import LoginCoverImage from '../components/LoginCoverImage';
import '../styles/loginpage.css';

export default function LoginPage() {
    return (
        <div className='Login-page'>
            <div className='Login-cover'>
                <LoginCoverImage />
            </div>
            <div className='Account-login'>
                <AccountLogin />
            </div>
        </div>
    );
}
