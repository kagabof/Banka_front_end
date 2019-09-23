import * as types from './actionTypes';

const signupAction = (payload) => ({
  type: types.SIGNUP_SUCCESS, payload,
});

const signinAction = (payload) => ({
  type: types.SIGNIN_SUCCESS, payload,
});

export {
  signupAction, signinAction,
};
