import { combineReducers } from 'redux';
import feeds from './feeds';
import login from './login';


const rootReducer = combineReducers({
  feeds, login
});

export default rootReducer;
