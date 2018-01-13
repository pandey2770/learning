import { combineReducers } from 'redux';
import dataReducer  from './data';

function userReducer(state = null, action) {
  switch (action.type) {
    case 'CURRENT_USER':
      return action.user;
    case 'LOGOUT_USER':
      return null;
    default:
      return state;
  }
}

const allReducer  = combineReducers({
  user: userReducer,
  data: dataReducer
});

export default allReducer