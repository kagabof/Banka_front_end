import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import LoginHeader from '../components/loginHeader';
import { postDataThunk } from '../redux/thunks/index';
import { signupAction } from '../redux/actions/authaticationActions';


class Signup extends Component {
  state = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password1: '',
  };

  handleOnChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  handleOnSubmit = async (e) => {
    e.preventDefault();
    await this.props.postDataThunk('post', 'auth/signup', signupAction, this.state);
    const { errors } = this.props.userData;
    console.log(this.props.userData);
    // eslint-disable-next-line no-unused-expressions
    this.props.userData.data
      ? (toast.success('welcome to your banka system'),
      (localStorage.setItem('bankaFirstName', this.props.userData.data.firstName)),
      this.props.history.push('/userdashboard'))
      : (toast.error(errors),
      toast.error(errors.email),
      toast.error(errors.lastName && errors.lastName),
      toast.error(errors.firstName && errors.firstName),
      toast.error(errors.password && errors.password));
  };

  render() {
    const { errors } = this.props.userData;
    return (
    <div className="loginContainer">
      <LoginHeader/>
      <div className="container">
        <div className="signup">
            <div className="title">
                <h2>SIGN UP {this.state.username}</h2>
            </div>
            <div className="forminf">
                <form action="createBankAccount.html" id="loginForm" onSubmit={this.handleOnSubmit}>
                    <input type="email" placeholder="E-mail" onChange={this.handleOnChange} name="email" id="email"/>
                    <p>{errors && errors.email}</p>
                    <input type="text" placeholder="First name" onChange={this.handleOnChange} name="firstName" id="firstName"/>
                    <p>{errors && errors.firstName}</p>
                    <input type="text" placeholder="Last name" onChange={this.handleOnChange} name="lastName" id="lastName"/>
                    <p>{errors && errors.lastName}</p>
                    <input type="password" name="password" onChange={this.handleOnChange} placeholder="Password" id="password"/>
                    <p>{errors && errors.password}</p>
                    <input type="submit" name="signin" value="SignUp" id="submit"/>
                    <p> <Link to="/login">Sign in</Link></p>
                </form>
            </div>
        </div>
    </div>
    </div>);
  }
}
Signup.propTypes = {
  postDataThunk: PropTypes.func,
  userData: PropTypes.object,
  history: PropTypes.any,
};

export const mapStateToProps = (state) => ({
  userData: state.userData.userdata,
});
const actionCreator = {
  postDataThunk,
};

export default connect(mapStateToProps, actionCreator)(Signup);
