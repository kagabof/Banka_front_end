import React from 'react';
import LoginHeader from '../components/loginHeader';

const UserDashboard = () => (
    <div className="loginContainer">
      <LoginHeader/>
      <div className="container">
        <div className="signup">
            <div className="title">
            </div>
            <div className="forminf">
                <h1>Welcome to your banka system @{localStorage.bankaFirstName}</h1>
            </div>

        </div>
    </div>
    </div>
);

export default UserDashboard;
