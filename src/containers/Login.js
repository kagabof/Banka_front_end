import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import LoginHeader from '../components/loginHeader';
import { postDataThunk } from '../redux/thunks/index';
import { signinAction } from '../redux/actions/authaticationActions';

class Login extends Component {
    state = {
      email: '',
      password: '',
    };

      handleOnChange = (e) => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value,
        });
      }

      handleOnSubmit = async (e) => {
        e.preventDefault();
        await this.props.postDataThunk('post', 'auth/signin', signinAction, this.state);
        const { errors } = this.props.userData;
        // eslint-disable-next-line no-unused-expressions
        this.props.userData.data
          ? (toast.success('welcome to your banka system'),
          this.props.history.push('/userdashboard'),
          (localStorage.setItem('bankaFirstName', this.props.userData.data.firstName)))
          : (toast.error(errors.email && errors.email),
          toast.error(errors.password && errors.password));
      };

      render() {
        return (
            <div className="loginContainer">
    <LoginHeader/>
    <div className="container">
        <div className="signup signin">
            <div className="title">
                <h2>SIGN IN</h2>
            </div>
            <div className="forminf">
                <form onSubmit={this.handleOnSubmit} id="signinForm">
                    <input type="email" name="email" onChange={this.handleOnChange} placeholder="E-mail" id="email"/>
                    <input type="password" name="password" onChange={this.handleOnChange} id="password" placeholder="Password"/>
                    <input type="submit" name="signin" value="SignIn" id="submit"/>
                    <p><Link to='/signup'>Sign up</Link></p>
                </form>
            </div>

        </div>
    </div>
  </div>
        );
      }
}

Login.propTypes = {
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

export default connect(mapStateToProps, actionCreator)(Login);
