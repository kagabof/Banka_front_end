/** Include middlewares */
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://bankaadc.herokuapp.com/api/v2/',
});

const postDataThunk = (
  method,
  endpoint,
  actionCreator,
  data,
) => (dispatch) => axiosInstance[method](endpoint, data)
  .then((response) => {
    dispatch(actionCreator(response.data));
  })
  .catch((error) => {
    dispatch(actionCreator({ errors: error.response.data.error || error.response.data.errors[0] }));
  });

const getDataThunk = (method,
  endpoint,
  actionCreator) => (dispatch) => axiosInstance[method](endpoint)
  .then((response) => {
    dispatch(actionCreator(response.data));
  })
  .catch((error) => {
    dispatch(actionCreator({
      errors: error.response.data.error
            || error.response.data.errors[0] || 'No data found!',
    }));
  });


export {
  getDataThunk, postDataThunk,
};
