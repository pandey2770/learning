import { combineReducers } from 'redux';

function userReducer(state = null, action) {
  switch (action.type) {
    case 'CURRENT_USER':
      return action.user;
    case 'LOGOUT_USER':
      return null;
    case 'ALL_DATA':
      return [...state,action.data];
    default:
      return state;
  }
}

export default combineReducers({
  user: userReducer
});
