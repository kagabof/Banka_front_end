import React from 'react';
import { Link } from 'react-router-dom';

const LoginHeader = () => (
    <nav className="col-s-12 col-m-12 col-12 nav12">
        <div className="nav-left col-s-12 col-m-5 col-5">
            <div className="logo col-s-9">
                <Link to='/' className="homelink">
                    <h1>Banka</h1>
                </Link>
            </div>
        </div>
        <div className="icon-place col-s-2" id="icon-place">
            <div className="icon-1" id=""></div>
            <div className="icon-1"></div>
            <div className="icon-1"></div>
        </div>

        <ul className="col-s-12" id="nav-link">
            <li className="col-s-12"><a href="../index.html"> HOME</a></li>
            <li className="col-s-12"><a href="signup.html"> SIGN UP</a></li>
            <li className="col-s-12"><a href="signin.html">SIGN IN</a></li>
        </ul>

    </nav>
);

export default LoginHeader;
