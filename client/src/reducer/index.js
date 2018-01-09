import { combineReducers } from 'redux';

function allReducer(state = { user: undefined }, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {};
    default:
      return state;
  }
}
export default combineReducers({
  allReducer
});
