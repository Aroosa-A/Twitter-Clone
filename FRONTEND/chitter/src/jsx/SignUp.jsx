import React from 'react';
import '../css/SignUp.css';
import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {


    const [message, setMessage] = useState('');
    const [user, setUser] = useState({
        firstName: ``,
        secondName: ``,
        email: ``,
        userName: ``,
        password: ``
    });


    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
        setMessage('');
    }


    const addUser = async (e) => {
        e.preventDefault();
        const { firstName, secondName, email, userName, password } = user;
        if (firstName && secondName && email && userName && password) {
            const res = await axios.post('http://localhost:4000/chitterUsers', user);
            setMessage(res.data.message);
            setUser({ firstName: ``, secondName: ``, email: ``, userName: ``, password: `` });
            return;
        }
        setMessage(`Invalid input`);
    }



    return (
        <>
            <div className="signUp">
                <h2>SignUp to get started</h2>
                <div className='line'></div>
                <form id='signUpForm' onSubmit={addUser}>
                    <div className='signUpData' >
                        <label id='sigUpLabel' htmlFor="firstName">First Name</label>
                        <input type="text" placeholder='First name' id='firstName' name='firstName' value={user.firstName} onChange={handleChange} required />
                    </div>

                    <div className='signUpData' >
                        <label id='sigUpLabel' htmlFor="secondName">Second Name</label>
                        <input type="text" placeholder='Second name' id='secondName' name='secondName' value={user.secondName} onChange={handleChange} required />
                    </div>

                    <div className='signUpData' >
                        <label id='sigUpLabel' htmlFor="email">Email address</label>
                        <input type="email" placeholder='Email' id='email' name='email' value={user.email} onChange={handleChange} required />
                    </div>

                    <div className='signUpData' >
                        <label id='sigUpLabel' htmlFor="useHandle">User Name</label>
                        <input type="text" placeholder='User Name' id='userHandle' name='userName' value={user.userName} onChange={handleChange} required />
                    </div>

                    <div className='signUpData' >
                        <label id='sigUpLabel' htmlFor="password">Password</label>
                        <input type="password" placeholder='Password' id='password' name='password' value={user.password} onChange={handleChange} required />
                    </div>
                    {message && <div id='signMessage'><small>{message} </small></div>}
                    <button type='submit' className='signButton' >Sign Up</button>
                </form>
            </div>
        </>
    );
}




export default SignUp;