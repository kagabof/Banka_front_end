import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';

const Home = () => (
  <div className="homecontainer">
    <Header/>
    <div className="main col-10">
        <div className="wel">
            <h3>Welcome to our Banka online banking system</h3>
        </div>
        <div className="btn">
        <Link to="/login" className="signin">SIGN IN</Link>
        <Link to="/signup" className="signup1">SIGN UP</Link>
        </div>
    </div>
  </div>
);

export default Home;
