import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        userdata: action.payload,
      };
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        userdata: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
