import React, { useState } from 'react';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import login from "../assets/login.png";

const LoginPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);

 const toggleForm = () => {
    setIsSignIn(!isSignIn);
    const formsContainer = document.querySelector('.forms-container');
    const panelsContainer = document.querySelector('.panels-container');

    if (!isSignIn) {
        formsContainer.classList.remove('shift-right');
        panelsContainer.classList.remove('shift-left');
    } else {
        formsContainer.classList.add('shift-right');
        panelsContainer.classList.add('shift-left');
    }
};


    return (
        <div className='wrapper'>
            <div className='loginContainer'>
                <div className='forms-container'>
                    <div className='login-signup'>
                        {isSignIn ? (
                            <form action='#' className='sign-in-form loginForm'>
                                <h2 className='title'>Sign In</h2>
                                <div className='input-field'>
                                    <FontAwesomeIcon icon={faEnvelope} className='icon'></FontAwesomeIcon>
                                    <input className='LoginInput' type='email' placeholder='Email' />
                                </div>
                                <div className='input-field'>
                                    <FontAwesomeIcon icon={faLock} className='icon'></FontAwesomeIcon>
                                    <input className='LoginInput' type='password' placeholder='Password' />
                                </div>
                                <button className='btn'>Sign In</button>
                                <p className='switch-form-text'>Are you new here? <span onClick={toggleForm} className='switch-form-link'>Sign Up</span></p>
                            </form>
                        ) : (
                            <form action='#' className='sign-up-form loginForm'>
                                <h2 className='title'>Sign Up</h2>
                                <div className='input-field'>
                                    <FontAwesomeIcon icon={faUser} className='icon'></FontAwesomeIcon>
                                    <input className='LoginInput' type='text' placeholder='Username' />
                                </div>
                                <div className='input-field'>
                                    <FontAwesomeIcon icon={faEnvelope} className='icon'></FontAwesomeIcon>
                                    <input className='LoginInput' type='email' placeholder='Email' />
                                </div>
                                <div className='input-field'>
                                    <FontAwesomeIcon icon={faLock} className='icon'></FontAwesomeIcon>
                                    <input className='LoginInput' type='password' placeholder='Password' />
                                </div>
                                <div className='input-field'>
                                    <FontAwesomeIcon icon={faLock} className='icon'></FontAwesomeIcon>
                                    <input className='LoginInput' type='password' placeholder='Confirm Password' />
                                </div>
                                <button className='btn'>Sign Up</button>
                                <p className='switch-form-text'>Already have an account? <span onClick={toggleForm} className='switch-form-link'>Sign In</span></p>
                            </form>
                        )}
                    </div>
                </div>

                <div className='panels-container'>
                    <div className='panel left-panel'>
                        <div className='content'>
                            <p className='loginh3'> FinLearn</p>
                            <p className='login-content'> Your Journey to Financial Excellence Starts Here.</p>
                            <p className='login-content'>Educate, Empower, Evolve </p>
                        </div>
                        <img src={login} className='image' alt='Login illustration' />
                    </div>
                    {/* <div className='panel right-panel'>
                        <div className='content'>
                            <p className='loginh3'> FinLearn</p>
                            <p className='login-content'> Your Journey to Financial Excellence Starts Here.</p>
                            <p className='login-content'>Educate, Empower, Evolve </p>
                        </div>
                        <img src={login} className='image' alt='Login illustration' />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
