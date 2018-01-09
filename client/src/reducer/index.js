import { combineReducers } from 'redux';

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
export default combineReducers({
  user: userReducer
});
