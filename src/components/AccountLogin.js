import React from 'react'
import '../styles/accountlogin.css';
import UserTypes from './UserTypes';

export default function AccountLogin() {
  return (
    <div className='right-container'>
        <div className='container1'>
            <div className='header'>
                <h1 className='header-H1'>Account Login</h1>
                <p className='header-paragraph'>If you are already a member you can login with your email address and password</p>
            </div>

            <div className='w-full flex flex-col'>
                <p className='paragraph'>User types</p>
                <div className='user'>
                    <UserTypes  className="your-image-class" userType="HR" />
                    <UserTypes  className="your-image-class" userType="Manager" />
                    <UserTypes  className="your-image-class" userType="Employee" />
                </div>
                
            </div>

            <div className='w-full flex flex-col'>
                <p className='paragraph'>Email address</p>
                <input type='email' placeholder='Email' className='box'/>
            </div>
            <div className='w-full flex flex-col'>
                <p className='paragraph'>Password</p>
                <input type='password' placeholder='Password' className='box'/>
            </div>

            <div className='w-full flex items-center justify-between'>
                <div className='checkbox-raw'>
                    <input type='checkbox' id='myCheckbox' className='custom-checkbox' />
                    <label htmlFor='myCheckbox' className='custom-label'></label>

                    <p className='paragraph'>Remember me</p>
                </div>    
            </div>

            <div className='w-full flex flex-col my-4'>
                <button className='login-box'>
                    Log in
                </button>
            </div>

            {/* <div className='sign'>
                <p className='sign-up'>
                    Don't Have a account? <span className='sign-up-here'>Sign up here</span>
                </p>
            </div>         */}
            
        </div>
    </div>
  )
}
