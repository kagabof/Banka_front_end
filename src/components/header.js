import React from 'react';

const Header = () => (
    <nav className="col-s-12 col-m-12 col-12">
        <div className="nav-left col-s-12 col-m-5 col-5">
            <div className="logo col-s-9">
                <h1>Banka</h1>
            </div>
        </div>
        <div className="icon-place col-s-2" id="icon-place">
            <div className="icon-1"></div>
            <div className="icon-1"></div>
            <div className="icon-1"></div>
        </div>
        <ul className="ul col-s-12" id="nav-link">
            <li className="col-s-12"><a href="./html/signup.html"> SIGN UP</a></li>
            <li className="col-s-12"><a href="./html/signin.html">SIGN IN</a></li>
        </ul>
    </nav>
);

export default Header;
