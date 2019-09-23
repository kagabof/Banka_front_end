import { combineReducers } from 'redux';
import authaticationReduce from './authaticationReduce';

const rootReducers = combineReducers({
  /** add reducers  */
  userData: authaticationReduce,
});

export default rootReducers;
