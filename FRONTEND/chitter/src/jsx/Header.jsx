import React from "react";
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logInHandler }) => {
    return (
        <div className="header">
            <div id="app-name">
                Chitter Chat
            </div>
            {currentUser ?
                <div className="navbar">
                    <Link className="nav-home" to="/">Home <span className="sr-only"></span></Link>
                    <Link className="signUp-link" to="/chitterPost"> Make Post <span className="sr-only"></span></Link>
                    <Link className="login-link" to="/login" onClick={logInHandler}>LogOut <span className="sr-only"></span></Link>
                </div>
                :
                <div className="navbar">
                    <Link className="nav-home" to="/">Home <span className="sr-only"></span></Link>
                    <Link className="signUp-link" to="/signUp">SignUp <span className="sr-only"></span></Link>
                    <Link className="login-link" to="/login">LogIn <span className="sr-only"></span></Link>
                </div>
            }
        </div>
    );
}


export default Header;