import axios from "axios";
import React from "react";
import { useState } from "react";
import '../css/login.css';
import { Navigate } from "react-router-dom";



const Login = ({ currentUser, setCurrentUser, logIn, logInHandler }) => {

    const [user, setUser] = useState({
        email: ``,
        password: ``
    });
    const [message, setMessage] = useState('');


    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
        setMessage('');
    }


    const logInUser = async (e) => {
        e.preventDefault();
        const { email, password } = user;
        if (email && password) {
            const res = await axios.post('http://localhost:4000/currentUser', user);
            localStorage.setItem("token", res.data.token);
            setCurrentUser(res.data.currentUser);
            setMessage(res.data.message);
            setUser({ email: '', password: '' });
            if (res.data.currentUser !== undefined)
                logInHandler();
        }
    }

    return (
        <>
            {currentUser && logIn && <Navigate to='/' />}
            <div className="login">
                <h2>Please login to post your peep!</h2>
                <div className='underline'></div>
                <form onSubmit={logInUser} id="logInForm" data-testid="logInForm">
                    <div className='logInData' >
                        <label id='sigUpLabel' htmlFor="email">Email address</label>
                        <input type="email" placeholder='Email' id='email' name='email' value={user.email} onChange={handleChange} required />
                    </div>

                    <div className='logInData' >
                        <label id='sigUpLabel' htmlFor="password">Password</label>
                        <input type="password" placeholder='Password' id='password' name='password' value={user.password} onChange={handleChange} required />
                    </div>
                    {message && <div id="message"><small>{message} </small></div>}
                    <button type='submit' className='logInButton' >LogIn</button>
                </form>
            </div>
        </>
    );
}


export default Login;